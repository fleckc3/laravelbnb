<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-6 form-group">
                        <label for="first_names">First names</label>
                        <input type="text" class="form-control" name="first_names" v-model="customer.first_names"/>
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="last_names">Last name</label>
                        <input type="text" class="form-control" name="last_names" v-model="customer.last_names"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" name="email" v-model="customer.email"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group">
                        <label for="street">Street</label>
                        <input type="text" class="form-control" name="street" v-model="customer.street"/>
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="city">City</label>
                        <input type="text" class="form-control" name="city" v-model="customer.city"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group">
                        <label for="country">Country</label>
                        <input type="text" class="form-control" name="country" v-model="customer.country"/>
                    </div>
                    <div class="col-md-4 form-group">
                        <label for="state">State</label>
                        <input type="text" class="form-control" name="state" v-model="customer.state"/>
                    </div>
                    <div class="col-md-2 form-group">
                        <label for="zip_code">Zip code</label>
                        <input type="text" class="form-control" name="zip_code" v-model="customer.zip_code"/>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-md-12 form-group">
                        <button type="submit" class="btn btn-large btn-primary btn-block">Book now!</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex justify-content-between">
                    <h6 class="text-uppercase text-secondary font-weight-bolder">Your cart</h6>
                    <h6 class="badge badge-secondary text-uppercase">
                        <span v-if="itemsInBasket">Items: {{ itemsInBasket }}</span>
                        <span v-else>Empty</span>
                    </h6>
                </div>

                <transition-group name="fade" tag="div">
                    <div v-for="item in basket" :key="item.bookable.id">
                        <div class="pt-2 pb-2 border-top d-flex justify-content-between">
                            <span><router-link :to="{name: 'bookable', params: {id: item.bookable.id}}">{{ item.bookable.title }}</router-link></span>
                            <span class="font-weight-bold">${{ item.price.total }}</span>
                        </div>
                        <div class="pt-2 pb-2 d-flex justify-content-between">
                            <span>
                                From {{ item.dates.from }}
                            </span>
                            <span >
                                To {{ item.dates.to }}
                            </span>
                        </div>

                        <div class="pt-2 pb-2 text-right">
                            <button
                                class="btn btn-sma btn-outline-secondary"
                                @click="$store.dispatch('removeFromBasket', item.bookable.id)"
                                >
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </transition-group>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
    data() {
        return {
            customer: {
                first_names: null,
                last_names: null,
                email: null,
                street: null,
                city: null,
                zip_code: null,
                country: null,
                state: null

            }
        }
    },
    computed: {
        ...mapGetters(["itemsInBasket"]),
        ...mapState({
            basket: state => state.basket.items
        })
    }
};
</script>

<style scoped>
    h6.badge {
        font-size: 100%;
    }

    a {
        color: black;
    }
</style>
