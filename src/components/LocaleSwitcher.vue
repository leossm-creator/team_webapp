<template>
  <div class="locale-switcher">
    <!-- <div>🌐 {{$i18n.locale}}</div> -->
    <v-select
      solo
      flat
      v-model="$i18n.locale"
      :menu-props="{ offsetY: true }"
      :items="options"
      color="#7d7d7d"
      item-color="#ff7a00"
      prepend-icon="mdi-web"
      style="width: 175px; margin-left: auto;"
    >
    </v-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [{
        text: "한국어",
        value: "kr"
      },
      {
        text: 'English',
        value: "en"
      }
      ],
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
<style scoped>
.locale-switcher {
  height: 50px;
}
</style>