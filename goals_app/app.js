const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredVal: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredVal);
      this.enteredVal = "";
    },
    removeGoal(i) {
      this.goals.splice(i, 1);
    },
  },
});

app.mount("#user-goals");
