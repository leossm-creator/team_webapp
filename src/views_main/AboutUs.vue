// 안쓰는 페이지
<template>
  <div id="about_us" ref="about_us">
    <div class="page_container" ref="au_container">
      <h1 class="page_heading">About Us</h1>

      <!-- Open R&D 소개 -->
      <v-container class="content_container" id="au_intro" ref="au_intro">
        <h2>Open R&D 소개</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi.
        </p>

        <div id="au_diagram" ref="au_diagram" >
          <v-img src="/img/diagram_1.png" max-width="700" ></v-img>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi.
        </p>
      </v-container>

      <!-- 성과 Timeline -->
      <v-container class="content_container" id="au_timeline" ref="au_timeline">
        <h2>Timeline</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <sui-container text>
          <v-timeline>
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
            >
              <template v-slot:opposite>
                <span
                  :class="`headline font-weight-bold ${year.color}--text`"
                  v-text="year.year"
                ></span>
              </template>
              <div class="py-4">
                <h2
                  :class="`headline font-weight-normal mb-4 ${year.color}--text`"
                >
                  {{ year.title }}
                </h2>
                <div>
                  <p
                    v-for="item in year.description"
                    :key="item"
                    class="font-weight-light"
                  >
                    {{ item }}
                  </p>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </sui-container>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi.
        </p>
      </v-container>

      <!-- 조직도 -->
      <v-container class="content_container" id="au_members" ref="au_members">
        <h2>Members</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <!-- Executive 멤버들: 카드 with image -->
        <h4 id="members_executives">Executives</h4>
        <v-row style="margin: 24px 0">
          <v-col
            v-for="member in members.executives"
            :key="member.name"
            style="display: flex; align-items: center; justify-content: center"
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
                  <!-- <v-btn depressed color="#FFA726" class="white--text">Contact</v-btn> -->
                  <v-btn depressed>Contact</v-btn>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- Team 멤버들: 카드 with text -->
        <h4 id="members_managers">Managers</h4>
        <v-row>
          <v-col
            cols="3"
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
                <!-- <v-btn depressed color="#FFA726" class="white--text">Contact</v-btn> -->
                <v-btn depressed>Contact</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- ScrollSpy -->
      <scrollactive
        class="scrollspy d-none d-md-flex"
        active-class="active"
        :offset="70"
        :duration="600"
        bezier-easing-value=".5,0,.35,1"
        scrollContainerSelector="#content"
        alwaysTrack
        :modifyUrl="false"
      >
        <v-list>
          <h3>Contents</h3>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="pl-0"
                ><a href="#au_intro" class="scrollactive-item"
                  >Introduction</a
                ></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="pl-0"
                ><a href="#au_timeline" class="scrollactive-item"
                  >Timeline</a
                ></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="pl-0"
                ><a href="#au_members" class="scrollactive-item"
                  >Members</a
                ></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="pl-3"
                ><a href="#members_executives" class="scrollactive-item"
                  >Executives</a
                ></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="pl-3"
                ><a href="#members_managers" class="scrollactive-item"
                  >Managers</a
                ></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </scrollactive>
    </div>

    <v-fab-transition>
      <v-btn
        v-show="!hidden"
        color="#FFA726"
        dark
        absolute
        fab
        class="scroll_up_btn"
        @click="scrollTo(0)"
        transition="fab-transition"
        v-scroll:#content="onScroll"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>

  </div>
</template>
<script>
import * as easings from "vuetify/lib/services/goto/easing-patterns";

export default {
  name: "AboutUs",
  components: {
  },
  data() {
    return {
      visible: true,
      years: [
        {
          color: "cyan",
          year: "2017",
          title: "Pilot Project",
          description: ["1. 신약 재창출 (DR)*", "2. 이대 김완규 교수"],
        },
        {
          color: "green",
          year: "2019",
          title: "Open Innovation",
          description: [
            "1. Open R&D TF 출범",
            "2. 집중 3개 질환 선정",
            "3. 외부 협력 추진",
          ],
        },
        {
          color: "pink",
          year: "2020",
          title: "신약 개발 R&D 착수 및 협력 확장",
          description: ["1. DR 특허 출원 (2건)", "2. AI 협력 기관 추가"],
        },
        {
          color: "amber",
          year: "2021",
          title: "역량 강화 및 정식 과제 상정",
          description: ["1. 내부 AI 모델 구축"],
        },
        {
          color: "orange",
          year: "2022",
          title: "과제 고도화",
          description: ["1. 신약 파이프라인 확보", "2. Early Stage L/O"],
        },
      ],
      members: {
        executives: [
          {
            name: "이수민",
            role: "Open R&D팀 팀장",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-left: auto;",
            image: "https://source.unsplash.com/c_GmwfHBDzk/",
            email: "mrlee@example.com",
          },
        ],
        managers: [
          {
            name: "허지호",
            role: "Pharma 기획팀 팀장",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            email: "teammember@example.com",
          },
          {
            name: "최권희",
            role: "Open R&D팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            email: "teammember@example.com",
          },
          {
            name: "김종인",
            role: "Open R&D팀 매니저",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-left: auto;",
            image: "",
            email: "teammember@example.com",
          },
          {
            name: "김율담",
            role: "Open R&D팀 매니저",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            image: "",
            email: "teammember@example.com",
          },
          {
            name: "연승주",
            role: "Open R&D팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-left: auto;",
            image: "",
            email: "teammember@example.com",
          },
          {
            name: "구남진",
            role: "Open R&D팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            image: "",
            email: "teammember@example.com",
          },
          {
            name: "박지현",
            role: "Open R&D팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-left: auto;",
            image: "",
            email: "teammember@example.com",
          },
          {
            name: "김동혁",
            role: "Open R&D팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            image: "",
            email: "teammember@example.com",
          },
        ],
      },
      container: null,
      easings: Object.keys(easings),
      entries: [
        {
          title: "Introduction",
          target: "au_intro",
        },
        {
          title: "Timeline",
          target: "au_timeline",
        },
        {
          title: "Members",
          target: "au_members",
        },
      ],
      hidden: true,
    };
  },
  mounted() {
    // this.$refs.content.scrollTo(0, 0)
    // this.$refs.content.scrollY = 0;
  },

  methods: {
    scrollTo(target) {
      this.$vuetify.goTo(target, {
        container: "#content",
        duration: 500,
        offset: 30,
        easing: "easeInOutCubic",
      });
    },
    onScroll(e) {
      let top = e.target.scrollTop;
      this.hidden = top < 100;
    },
    // onItemChanged(event, currentItem, lastActiveItem) {
    //   alert(event, currentItem, lastActiveItem)
    // },
  },
};
</script>
<style scoped lang="scss">
.card_exac {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.card_man {
  /* max-width: 450px; */
}
#au_diagram {
  display: flex;

  justify-content: center;
  align-items: center;
}
#about_us {
  // display: flex;
  // max-height: 100vh;
  // overflow-y: scroll;
}

// .scrollspy {
//   ul {
//     list-style: none;
//     font-size: 1.1rem;
//     padding: 0;

//     li {
//       padding: 6px;

//     }
//   }
// }
img {
    max-width: 100% !important;
    height: auto !important;
    width: auto\9 !important;
}
</style>