import Component from '@ember/component';

export default Component.extend({
  // Empty strings
  firstName: '',
  lastName: '',
  mobileNumber: '',
  phoneNumber: '',

  // Adding a contact function
  actions:{
    addContact()
    {
      // Get form data
      let firstName = this.get('firstName');
      let lastName = this.get('lastName');
      let mobileNumber = this.get('mobileNumber');
      let phoneNumber = this.get('phoneNumber');

      // Pass the data up to the controller
      this.get('addContact')({
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobileNumber,
        phoneNumber: phoneNumber
      });

      // Clears the form
      this.emptyForm();
    }
  },

  emptyForm()
  {
    this.set('firstName', '');
    this.set('lastName', '');
    this.set('mobileNumber', '');
    this.set('phoneNumber', '');
  }
});
