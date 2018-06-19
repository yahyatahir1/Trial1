import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addContact(data)
    {
      // Creates the contact and adds it to the store
      this.get('store').createRecord('contact', data);
    }
  }
});
