<template>
  <div class="locale-switcher">
    <!-- <div>🌐 {{$i18n.locale}}</div> -->
    <v-select
      solo
      flat
      v-model="$i18n.locale"
      :menu-props="{ offsetY: true }"
      :items="locales"
      color="#7d7d7d"
      item-color="#ff7a00"
      prepend-icon="mdi-web"
      style="width: 175px; margin-left: auto"
      item-text="name"
      item-value="code"
      @change.prevent="changeLocale"
    >
    </v-select>
  </div>
</template>

<script>
import { getSupportedLocales } from "@/util/i18n/supported-locales";
// import { loadLocaleMessagesAsync } from "@/plugins/i18n"

export default {
  data() {
    return {
      locales: getSupportedLocales(),
      options: [
        {
          text: "한국어",
          value: "kr",
        },
        {
          text: "English",
          value: "en",
        },
      ],
    };
  },
  methods: {
    changeLocale(e) {
      const locale = e.target.value;
      this.$router.push(`/${locale}`);
    },
  },
};
</script>
<style scoped>
.locale-switcher {
  height: 50px;
}
</style>