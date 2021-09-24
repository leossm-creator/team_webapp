<template>
  <nav>
  <sui-menu :widths="3">
    <sui-menu-item>Editorials</sui-menu-item>
    <sui-menu-item>Reviews</sui-menu-item>
    <sui-menu-item active>Upcoming Events</sui-menu-item>
  </sui-menu>
  </nav>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  nav {
    background-color: blueviolet !important;
    width: 100%;
  }
</style>
