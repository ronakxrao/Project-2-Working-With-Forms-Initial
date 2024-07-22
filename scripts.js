members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {
                fname: null,
                lname: null,
                instrument: null
            }
        }
    },

};

Vue.createApp(handlingForms).mount('#app');
