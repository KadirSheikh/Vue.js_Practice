import { createApp } from "vue";
import FriendsContact from "./components/FriendsContact.vue";
import NewFriend from "./components/NewFriend.vue";
import App from "./App.vue";

const app = createApp(App);

app.component("friends-contact", FriendsContact);
app.component("new-friend", NewFriend);

app.mount("#app");
