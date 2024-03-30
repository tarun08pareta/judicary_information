const mongoose =require('mongoose');

 async function insertUser(req,res,model){
    const user=new model({
        userName:req.body.userName,
        password:req.body.password,
        userType:req.body.userType,
        gender:req.body.gender,
        fullName:req.body.fullName,
        email:req.body.email,
        mobileNo:req.body.mobileNo
    });
    let result =await user.save();
    res.send(result);
    return result;
}
// funtion to update user using usernmae
async function update(req,res,model){
    const uid=req.params.userName;
    // console.log(req.params);
    let result=await model.updateOne({userName:uid},
        {mobileNo:'1231231231'})
    if(result.acknowledged)
        res.send('data updated successfully')
    else    
        res.send({result:'unable to update data try latter'})
    return result;
}
// function to fetch data using user name
async function getUser(req,res,collectionName){
    let result=mongoose.connection.collection(collectionName);
    result=await result.find({userName:req.params.userName}).toArray();
    console.log(result);
    if(result)
        res.send(result);
    else    
        res.send({result:'no data found'});
}

// function to handle login
async function userLogin(req,res,collectionName){
    let result=mongoose.connection.collection(collectionName);
    // myDatabase.myCollection.find({ $and: [ { field1: value1 }, { field2: value2 } ] })
    result=await result.find({ $and: [ { userName: req.body.userName }, { password: req.body.password } ]}).toArray();
    console.log(result);
    if(result.length>=1){
        res.send({login:true, userType:result[0].userType,userName:result[0].userName});
    }
    else    
        res.send({login:false });
}

// function to delete user using user name 
async function deleteUser(req,res,model){
    const uid=req.params.userName;
    let result=await model.deleteOne({userName:uid});
    if(result.acknowledged){
        res.send({result:'user deleted successfuly',
    deleteCount:result.deletedCount })
    }
    else{
        res.send({result:'unable to delete user '})
    }
    return result;
}

module.exports = {
    insertUser,update,deleteUser,getUser,userLogin
  };