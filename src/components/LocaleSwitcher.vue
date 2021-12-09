<template>
  <div class="locale-switcher">
    <v-select
      solo
      flat
      v-model="$i18n.locale"
      :menu-props="{offsetY: true }"
      :items="locales"
      color="#7d7d7d"
      item-color="#ff7a00"
      prepend-icon="mdi-web"
      style="width: 150px; margin-left: auto"
      item-text="name"
      item-value="code"
      @change="changeLocale"
      hide-details
    >
    </v-select>

    <!-- <div style="width: fit-content; margin-left: auto; margin-right: 16px;">
      <v-icon small color="" style="margin-right: 6px"> mdi-web </v-icon>
      <select :value="$i18n.locale" @change.prevent="changeLocale">
        <option
          :value="locale.code"
          v-for="locale in locales"
          :key="locale.code"
        >
          {{ locale.name }}
        </option>
      </select>
    </div> -->
  </div>
</template>

<script>
import { getSupportedLocales } from "@/util/i18n/supported-locales";

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
    // changeLocale(e) {
    //   const locale = e.target.value;
    //   console.log(locale);
    //   this.$router.push(`/${locale}`);

    //   location.reload();
    // },
    changeLocale() {
      console.log(this.$i18n.locale)
      this.$router.push(`/${this.$i18n.locale}`);
      location.reload();
    },
  },
};
</script>
<style scoped>
.locale-switcher {
  /* height: 50px; */
  margin-bottom: 8px;
}
</style>