const mongoose = require('mongoose');

async function addCase(){
  const caseData = req.body;
  const newCase = new Case(caseData);

  newCase.save()
    .then(() => {
      res.status(201).json({ message: 'Case created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = {
    addCase
  };