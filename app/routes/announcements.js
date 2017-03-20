import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('announcement');
    },

    actions: {
        saveAnnouncement3(params) {
            var newAnnouncement = this.store.createRecord('announcement', params)
        },

        destroyAnnouncement(announcement) {
            announcement.destroyAnnouncement();
            this.transitionTo('announcements');
        }
    }
});
