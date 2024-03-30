 class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
    
    browseCase(caseId) {
      // code to browse a case
    }
    seeSchedule() {
      // code to see user's schedule
    }
  }
  
 class Judge extends User {
    constructor(username, password) {
      super(username, password);
    }
    
    browsePastCases() {
      // code to browse past cases
    }
  }
  
   class Lawyer extends User {
    constructor(username, password) {
      super(username, password);
    }
    
    browsePastCases() {
      // code to browse past cases
    }
    
    payToBrowseCase() {
      // code to pay to browse a case
    }
    makePayment(amount) {
        // code to make payment
    }
  }
  
   class Registrar extends User {
    constructor(username, password) {
      super(username, password);
    }
    
    addNewCase() {
      // code to add new case
    }
    
    updateCase() {
      // code to update case
    }
    
    scheduleCase() {
      // code to schedule case
    }
    
    addNewUser() {
      // code to add new user
    }
    
    deleteCase() {
      // code to delete case
    }
    
    deleteUser() {
      // code to delete user
    }
  }
  
  module.exports = {
  User,
  Judge,
  Lawyer,
  Registrar
};