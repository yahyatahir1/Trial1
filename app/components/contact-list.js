import Component from '@ember/component';

export default Component.extend({
  //delete function
  actions: {
    deleteContact(contact)
    {
      // Remove the contact
      contact.unloadRecord();
    }
  }
});
