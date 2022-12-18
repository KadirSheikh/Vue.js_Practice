<template>
  <li>
    <h2>{{ name }} {{ isFav ? "(FAV)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ !showDetails ? "Show" : "Hide" }} Details
    </button>
    <button @click="toggleFav">Toogle Favourite</button>

    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong>{{ email }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isFav: {
      type: Boolean,
      required: false,
      default: true,
      validators: function (value) {
        return value === true || value === false;
      },
    },
  },
  emits: ["toggle-fav", "delete"],
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleFav() {
      this.$emit("toggle-fav", this.id);
    },
  },
};
</script>
