import { createApp } from "vue";
import FriendsContact from "./components/FriendsContact.vue";
import App from "./App.vue";

const app = createApp(App);

app.component("friends-contact", FriendsContact);

app.mount("#app");
