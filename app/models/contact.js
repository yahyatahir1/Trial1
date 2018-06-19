import DS from 'ember-data';

export default DS.Model.extend({
    //contact model
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    phoneNumber: DS.attr('string'),
    mobileNumber: DS.attr('string'),
});
