import Ember from 'ember';

export default Ember.Component.extend({
    updateReviewForm: false,
    actions:{
        updateReviewForm() {
            this.set('updateReviewForm', true);
        },
        update(review) {
            var params = {
                author: this.get('author'),
                content: this.get('content'),
                rating: this.get('rating'),
            };
            this.set('updateReviewForm', false);
            this.sendAction('update', review, params);
        }
    }
});
