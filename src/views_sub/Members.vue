<template>
  <div>
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-04.png`)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">{{ $t("nav.members.title") }}</p>
          <p class="pageSub">
            {{ $t("nav.members.sub_title") }}
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <Barnav />
    <div class="page_container">
      <div class="content_container" id="au_members" ref="au_members">
        <div class="title_board">
          <v-row class="board">
            <v-col>
              <div class="p_title" v-html="$t('members.p_title')"></div>
            </v-col>
          </v-row>
        </div>
        <div class="members">
          <!-- 조직도 -->
          <v-row class="board">
            <!-- Executive 멤버들: 카드 with image -->
            <v-col cols="12" style="margin-bottom: 40px;">
              <h3 class="heading">Leader</h3>
            </v-col>
            <v-col
              v-for="member in members.executives"
              :key="member.name"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <v-card hover width="300" style="padding: 12px">
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <v-avatar
                    class="profile"
                    size="200"
                    color="#dedede"
                    style="margin: 5% 0"
                  >
                    <!-- <v-img max-height="250" :src="member.image"></v-img> -->
                    <v-icon size="100">mdi-account</v-icon>
                  </v-avatar>
                </div>

                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  "
                >
                  <v-card-title class="font-weight-bold">{{
                    member.name
                  }}</v-card-title>
                  <v-card-subtitle>{{ member.role }}</v-card-subtitle>
                  <v-card-text>
                    {{ member.description }}
                  </v-card-text>
                  <v-card-text>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" depressed>
                          Contact
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item link @click="send(member.email)">
                          <v-list-item-title>
                            <v-icon left="8">mdi-send</v-icon> Send
                            Email</v-list-item-title
                          >
                        </v-list-item>
                        <v-list-item link @click="copy(member.email)">
                          <v-list-item-title
                            ><v-icon left="8">mdi-clipboard-outline</v-icon>
                            Copy Email</v-list-item-title
                          >
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-card-text>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <!-- Team 멤버들: 카드 with text -->
          <v-row class="board">
            <v-col cols="12" style="margin-bottom: 40px;">
              <h3 class="heading">Managers</h3>
            </v-col>
            <v-col
              cols="6"
              md="3"
              v-for="member in members.managers"
              :key="member.name"
              style="padding-top: 30px; padding-bottom: 30px"
            >
              <v-card hover class="card_man">
                <v-card-title class="font-weight-bold">
                  {{ member.name }}
                </v-card-title>
                <v-card-subtitle>{{ member.role }}</v-card-subtitle>
                <v-card-text>
                  {{ member.description }}
                </v-card-text>
                <v-card-text>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" depressed>
                        Contact
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item link @click="send(member.email)">
                        <v-list-item-title>
                          <v-icon left="8">mdi-send</v-icon> Send
                          Email</v-list-item-title
                        >
                      </v-list-item>
                      <v-list-item link @click="copy(member.email)">
                        <v-list-item-title
                          ><v-icon left="8">mdi-clipboard-outline</v-icon> Copy
                          Email</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Barnav from "../components/Barnav.vue";
export default {
  name: "Members",
  components: {
    Barnav,
  },
  data() {
    return {
      // members: {
      //   executives: [
      //     {
      //       name: "이수민",
      //       role: "Open R&D팀 팀장",
      //       description:
      //         "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
      //       style: "margin-left: auto;",
      //       image: "https://source.unsplash.com/c_GmwfHBDzk/",
      //       email: "mrlee@example.com",
      //     },
      //   ],
      //   managers: [
      //     {
      //       name: "허지호",
      //       role: "Pharma 기획팀 팀장",
      //       description:
      //         "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
      //       style: "margin-right: auto;",
      //       email: "teammember_허지호@example.com",
      //     },
      //     {
      //       name: "최권희",
      //       role: "Open R&D팀",
      //       description:
      //         "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
      //       style: "margin-right: auto;",
      //       email: "teammember_촤권희@example.com",
      //     },
      //     {
      //       name: "김종인",
      //       role: "Open R&D팀 매니저",
      //       description:
      //         "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
      //       style: "margin-left: auto;",
      //       image: "",
      //       email: "teammember_김종인@example.com",
      //     },
      //     {
      //       name: "김율담",
      //       role: "Open R&D팀 매니저",
      //       description:
      //         "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
      //       style: "margin-right: auto;",
      //       image: "",
      //       email: "teammember_김율담@example.com",
      //     },
      //     {
      //       name: "연승주",
      //       role: "Open R&D팀",
      //       description:
      //         "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
      //       style: "margin-left: auto;",
      //       image: "",
      //       email: "teammember_연승주@example.com",
      //     },
      //     {
      //       name: "구남진",
      //       role: "Open R&D팀",
      //       description:
      //         "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
      //       style: "margin-right: auto;",
      //       image: "",
      //       email: "teammember_구남진@example.com",
      //     },
      //     {
      //       name: "박지현",
      //       role: "Open R&D팀",
      //       description:
      //         "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
      //       style: "margin-left: auto;",
      //       image: "",
      //       email: "teammember_박지현@example.com",
      //     },
      //     {
      //       name: "김동혁",
      //       role: "Open R&D팀",
      //       description:
      //         "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
      //       style: "margin-right: auto;",
      //       image: "",
      //       email: "teammember_김동혁@example.com",
      //     },
      //   ],
      // },
      members: this.$t("members.member_list"),
    };
  },

  methods: {
    send(email) {
      location.href = `mailto:${email}`;
    },
    copy(email) {
      this.$copyText(email).then(
        function (e) {
          alert("Copied");
          console.log(e);
        },
        function (e) {
          alert("Error occurred: Cannot copy email");
          console.log(e);
        }
      );
    },
  },
};
</script>
<style scoped lang="scss">
</style>