export default {
    // State of application
    // last search for the from and to input fields
    // basket to add reservations to basket
    state: {
        lastSearch: {
            from: null,
            to: null
        },
        basket: {
            items: []
        }
    },

    // mutation alters the state
    // saves the from and to values to the state via the payload
    mutations: {
        setLastSearch(state, payload) {
            state.lastSearch = payload;
        },
        addToBasket(state, payload) {
            state.basket.items.push(payload);
        },
        removeFromBasket(state, payload) {
            state.basket.items = state.basket.items.filter(item => item.bookable.id !== payload);
        },
    },

    // actions can asyn operations and other things based around the state
    // setLastSearch saves the from and to values to the application local storage in JSON format
    actions: {
        setLastSearch(context, payload) {
            context.commit('setLastSearch', payload);
            localStorage.setItem('lastSearch', JSON.stringify(payload));
        },

        // This loads the locally saved storage values 'from' and 'to'
        // doesnt get called automatically -- have to call it fom somehwere
        loadStoredState(context) {
            const lastSearch = localStorage.getItem('lastSearch');
            if (lastSearch) {
                context.commit('setLastSearch', JSON.parse(lastSearch));
            }
        }
    },
    getters: {
        itemsInBasket: (state) => state.basket.items.length
    }
};
