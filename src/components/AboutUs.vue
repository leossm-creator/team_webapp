<template>
  <div id="about_us">
    <div class="page_container" ref="au_container">
      <h1 class="page_heading">About Us</h1>

      <!-- Open R&D 소개 -->
      <v-container class="content_container" id="au_intro">
        <h2>Open R&D 소개</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
          quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
          vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
          imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
          ultricies nisi.
        </p>

        <div id="au_diagram">
          <v-img src="/img/diagram_1.png" max-width="700"></v-img>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
          quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
          vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
          imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
          ultricies nisi.
        </p>
      </v-container>

      <!-- 성과 Timeline -->
      <v-container class="content_container" id="au_timeline">
        <h2>Timeline</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
          quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
          vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
          imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
          ultricies nisi.
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
          quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
          vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
          imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
          ultricies nisi.
        </p>
      </v-container>

      <!-- 조직도 -->
      <v-container class="content_container" id="au_members">
        <h2>Members</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
          quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
          vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
          imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
          ultricies nisi.
        </p>
        <!-- Executive 멤버들: 카드 with image -->
        <h4>Executives</h4>
        <v-row style="margin: 24px 0;">
          <v-col v-for="member in members.executives" :key="member.name" style="display: flex; align-items: center; justify-content: center;">
            <v-card hover width="300" style="padding: 12px;">
              <div style="display: flex; flex-direction: column; justify-content:center; align-items: center;">
                <v-avatar class="profile" size="200" color="#dedede" style="margin: 5% 0">
                  <!-- <v-img max-height="250" :src="member.image"></v-img> -->
                  <v-icon size="100">mdi-account</v-icon>
                </v-avatar>
              </div>

                <div style="display: flex; flex-direction: column; align-items: center">
                  <v-card-title class="font-weight-bold">{{
                    member.name
                  }}</v-card-title>
                  <v-card-subtitle>{{ member.role }}</v-card-subtitle>
                  <v-card-text>
                    {{ member.description }}
                  </v-card-text>
                  <v-card-text>
                    <!-- <v-btn depressed color="#FFA726" class="white--text">Contact</v-btn> -->
                    <v-btn depressed >Contact</v-btn>
                  </v-card-text>
                </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- Team 멤버들: 카드 with text -->
        <h4>Managers</h4>
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
                <v-btn depressed >Contact</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>


    <v-navigation-drawer floating permanent ref="scrollspy">
      <v-list-item-group>
        <v-list-item @click="$vuetify.goTo(500, { container: this.$refs.au_container } )">
            <v-list-item-content>
              <v-list-item-title>Menu 1</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Menu 2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Menu 3</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Menu 4</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
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

    }
  },


  methods: {

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
  // padding: 0 20%;
  margin: 8% 0;
  justify-content: center;
  align-items: center;

  .diagram_icons {
    color: white;
    // font-weight: 500;
    font-size: 1.2rem;
  }

  // &::before {
  //   bottom: 0;
  //   content: "";
  //   height: 100%;
  //   position: absolute;
  //   top: 0;
  //   width: 2px;
  //   background-color: rgba(151, 151, 151, 0);
  //   left: calc(50% - 1px);
  //   right: auto;
  // };
}

#about_us {
  display: flex;
}
</style>