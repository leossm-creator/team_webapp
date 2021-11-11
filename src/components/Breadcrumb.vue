<template>
<div>
  <v-breadcrumbs :items="breadCrumbs" large divider=">">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :to="item.to"
        class="text-subtitle-2 crumb-item"
        :disabled="item.disabled"
        exact
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
  <!-- <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        {{current}}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in sib"
        :key="index"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu> -->
</div>
</template>
<script>
export default {
  name: "breadcrumb",
  data() {
    return {
      current: "",
    };
  },
  computed: {
    breadCrumbs() {
      if (typeof this.$route.meta.breadCrumb === "function") {
        return this.$route.meta.breadCrumb.call(this, this.$route);
      }
      return this.$route.meta.breadCrumb;
    },
    sib() {
      if (typeof this.$route.meta.sib === "function") {
        return this.$route.meta.sib.call(this, this.$route);
      }
      return this.$route.meta.sib;
    }
  },
  methods: {

  },
  mounted() {
    console.log(this.sib)
    this.current = this.$route.name;
  }
};
</script>
<style scoped>
</style>