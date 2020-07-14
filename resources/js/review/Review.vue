<template>
    <div>
        <div class="form-group">
            <label class="text-muted">Select the Star rating (1 is worst - 5 is best)</label>
            <star-rating class="fa-3x" v-model="review.rating"></star-rating>
        </div>
        <div class="form-group">
            <label for="content" class="text-muted">Describe your experience with</label>
            <textarea name="content" cols="30" rows="10" class="form-control" v-model="review.content"></textarea>
        </div>

        <button class="btn btn-large btn-primary btn-block">Submit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            review: {
                rating: 5,
                content: null
            },
            existingReview: null
        };
    },
    created() {
        // 1. check if review already exists (in reviews table by id) ---> if there is then display
        axios
            .get(`/api/reviews/${this.$route.params.id}`)
            .then(response => (this.existingReview = response.data.data))
            .catch(err => {
                
            });

        // 2. If no review ---> fetch booking by review key
        // 3. store the review
    },
    computed: {
        alreadyReviewed() {
            return this.existingReview != null;
        }
    }
}
</script>
