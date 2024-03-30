const express = require("express");
const connectdb = require("./database/connectdb");
const { default: mongoose } = require("mongoose");
const {
  insertUser,
  update,
  deleteUser,
  getUser,
  userLogin,
} = require("./Functions/curd");
const userModel = require("./models/userModel");
const Case = require("./models/caseModel");
const Schedule = require("./models/scheduleModel");
const cors = require("cors");
const scheduleModel = require("./models/scheduleModel");
// const { addCase } = require("./Functions/case");

// const { User, Judge, Lawyer, Registrar } =require('./modules/User');

const app = express();
// middlewares
app.use(express.json());
app.use(cors());

//constants
const dbName = "JIS";
const uri = "mongodb://0.0.0.0:27017";
const port = 5000;

const connect = async (collectionName) => {
  await connectdb(uri, dbName); // connect to database
  let result = mongoose.connection.collection(collectionName);
  result = await result.find({}).toArray();
  console.log(result);
};
// connect('user');

app.get("/", async (req, res) => {
  await connectdb(uri, dbName);
  let result = mongoose.connection.collection("users");
  result = await result.find({}).toArray();
  res.send(result);
});

app.post("/Signup", async (req, res) => {
  await connectdb(uri, dbName);
  await insertUser(req, res, userModel);
});

// handle login
app.post("/Login", async (req, res) => {
  // res.send({result:'no data found'});
  await connectdb(uri, dbName);
  await userLogin(req, res, "users");
});

// to update user details
app.put("/update/:userName", async (req, res) => {
  await connectdb(uri, dbName);
  await update(req, res, userModel);
});

// to fetch data using user id
app.get("/users/:userName", async (req, res) => {
  await connectdb(uri, dbName);
  await getUser(req, res, "users");
});

// to delete data using user name
app.delete("/delete/:userName", async (req, res) => {
  await connectdb(uri, dbName);
  await deleteUser(req, res, userModel);
});

//to add new case
app.post("/registrar/addcase", async (req, res) => {
  await connectdb(uri, dbName);
  // await AddCase(req,res,caseModel);
  try {
    console.log("working");
    // Fetch the judge and lawyer documents referenced in the Case
    const judgePromise = userModel.findOne({ userName: req.body.judge }).exec();
    const lawyerPromises = req.body.lawyers.map(userName => userModel.findOne({ userName: userName }).exec());
    const [judge, ...lawyers] = await Promise.all([judgePromise, ...lawyerPromises]);

    // Check that all referenced users actually exist
    if (!judge) {
      throw new Error("Judge not found");
    }
    const missingLawyers = lawyers.filter((lawyer) => !lawyer);
    if (missingLawyers.length > 0) {
      throw new Error(`Lawyers not found: ${missingLawyers.join(", ")}`);
    }

    // All referenced users exist, so create the new Case

    const caseData = req.body;
    const newCase = new Case(caseData);
    let result = await newCase.save();
    if(result)
    res.send({result:"user added successfully"});
    else    
     res.send({result:'unable to add user'});
  } catch (err) {
    // Handle any errors fetching the referenced users or saving the Case
    res.status(400).json({ error: err.message });
    console.log('user not found')
  }
});

// to get case info using cin number
app.post('/registrar/getdetails',async (req,res)=>{
  let cin=req.body.CIN;
  await connectdb(uri, dbName);
  let result=await Case.findOne({CIN:cin});
  if(result){
    res.send(result);
  }
  else{
    res.send({error:'enter valid CIN'})
  }
})

// to update case
app.put('/registrar/updatecase',async (req,res)=>{
  // res.send('working fine');
  await connectdb(uri, dbName);
  let [lawyer]=req.body.lawyers;
  let result = await Case.updateOne(
    { CIN: req.body.CIN },
    { $set: { 
        defendantName: req.body.defendantName, 
        defendantAddress: req.body.defendantAddress, 
        crimeType: req.body.crimeType,
        dateCommitted: req.body.dateCommitted,
        locationCommitted: req.body.locationCommitted,
        arrestingOfficer: req.body.arrestingOfficer,
        judge: req.body.judge,
        lawyers: lawyer,
        status: req.body.status,
        victim:req.body.victim
      } 
    }
)
if(result.acknowledged){
  res.send({result:'data updated successfully'});
}
else
  res.send({error:'Check entered detailes, unable to update'});
  console.log(req.body.lawyers)
})

// to schedule case
app.post('/registrar/schedulecase/:cin', async (req, res) => {
  await connectdb(uri, dbName);
  const cin = req.params.cin;
  try {
    const caseData = await Case.findOne({ CIN: cin });
    if (!caseData) {
      return res.status(404).json({ error: 'Case not found' });
    }
    // return res.json(caseData);
    let result=new scheduleModel(req.body);
    result=await result.save();
    console.log(result);
    res.send({result:"schedule Added successfully"});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`listening local host at port ${port}`);
});
