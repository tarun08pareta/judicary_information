const mongoose=require('mongoose');

const caseData={
    defendantName: {
        type: String,
        required: true
      },
      defendantAddress: {
        type: String,
        required: true
      },
      crimeType: {
        type: String,
        required: true
      },
      dateCommitted: {
        type: Date,
        required: true
      },
      locationCommitted: {
        type: String,
        required: true
      },
      arrestingOfficer: {
        type: String,
        required: true
      },
      CIN: {
        type: String,
        required: true,
        unique:true
      },
      judge: {
        type: String,
        required: true,
        ref: 'users'
      },
      lawyers: [{
        type: String,
        required: true,
        ref: 'users'
      }],
      status: {
        type: String,
        default: 'pending'
      },victim: {
        type: String,
        ref: 'users'
      }
}

const caseSchema=new mongoose.Schema(caseData);

// Create a unique index for the CIN field
caseSchema.index({ CIN: 1 }, { unique: true });

module.exports = mongoose.model('Case', caseSchema);