import Ember from 'ember';

export default Ember.Component.extend({
    addNewAnnouncement: false,
    actions: {
        rentalFormShow() {
            this.set('addNewAnnouncement', true);
        },

        saveAnnouncement1() {
            var params = {
                title: this.get('title'),
                start: this.get('start') ? this.get('start') : "",
                end: this.get('end') ? this.get('end') : "",
                message: this.get('message'),
            };
            this.set('addNewAnnouncement', false);
            this.sendAction('saveAnnouncement2', params)
        }
    }
});
