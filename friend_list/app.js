const app = Vue.createApp({
  data() {
    return {};
  },
});

app.component("friend-contacts", {
  template: `
         <li :key="friend.id">
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">
            {{ displayDetails ? 'Hide' : 'Show' }} Details
          </button>
          <ul v-if="displayDetails">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
 `,
  data() {
    return {
      displayDetails: false,
      friend: {
        id: 1,
        name: "John Doe",
        phone: "1234567890",
        email: "john.doe@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.displayDetails = !this.displayDetails;
    },
  },
});

app.mount("#app");
