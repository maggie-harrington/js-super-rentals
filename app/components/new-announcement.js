import Ember from 'ember';

export default Ember.Component.extend({
    addNewAnnouncement: false,
    actions: {
        rentalFormShow() {
            this.set('addNewAnnouncement', true);
        }
    }
});
