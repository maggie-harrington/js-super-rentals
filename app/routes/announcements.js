import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('announcement');
    },

    actions: {
        destroyAnnouncement(announcement) {
            announcement.destroyAnnouncement();
            this.transitionTo('announcements');
        }
    }
});
