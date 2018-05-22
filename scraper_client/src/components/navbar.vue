<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
      <!-- This is the navbar for when no one is logged in -->
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link class="waves-effect" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="waves-effect" to="/saved">Saved</router-link>
          </li>
        </ul>
    

      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


a {
  margin: 0 20px 0 0;
  font-size: 16px;
}

.nav-wrapper {
  background-image: linear-gradient(to bottom right, #23ff23, #16d410, #0eb21c);
}
</style>