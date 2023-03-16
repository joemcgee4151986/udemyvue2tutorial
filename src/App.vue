<template>
  <div>
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a
            class="navbar-brand"
            href="#"
            @click.prevent="activeView = 'app-home'"
            >Project Name</a
          >
        </div>

        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li>
              <a href="#" @click.prevent="activeView = 'app-home'">Home</a>
            </li>
            <li>
              <a href="#" @click.prevent="activeView = 'app-about'">About</a>
            </li>
            <li>
              <a href="#" @click.prevent="activeView = 'app-contact'"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="jumbotron">
        <component :is="activeView"></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeView: "app-home"
    };
  }
};
</script>
