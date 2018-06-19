import Component from '@ember/component';

export default Component.extend({
  // Delete function
  actions: {
    deleteContact(contact)
    {
      // Remove the contact
      contact.unloadRecord();
    }
  }
});
