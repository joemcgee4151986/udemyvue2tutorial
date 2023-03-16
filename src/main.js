import Vue from "vue";
import App from "./App.vue";
import Home from "./Home.vue";
import Contact from "./Contact.vue";
import About from "./About.vue";

Vue.component("app-home", Home);
Vue.component("app-contact", Contact);
Vue.component("app-about", About);

new Vue({
  el: "#app",
  render: h => h(App)
});
