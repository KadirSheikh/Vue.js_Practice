<template>
  <li>
    <h2>{{ friends.name }}</h2>
    <button @click="toggledetails">
      {{ !showDetails ? "Show" : "Hide" }} Details
    </button>

    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ friends.phone }}</li>
      <li><strong>Email:</strong>{{ friends.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
      friends: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggledetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>
