import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('review', params.review_id);
    },
    actions: {
        update(review, params) {
            Object.keys(params).forEach(function(key) {
                if(params[key]!==undefined) {
                    review.set(key,params[key]);
                }
            });
            review.save();
            this.transitionTo('index');
        },
        destroyReview(review) {
            review.destroyRecord();
            this.transitionTo('index');
        }
    }
});
