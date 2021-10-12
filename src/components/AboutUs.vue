<template>
  <div class="page_container">
    <h1 class="page_heading">About Us</h1>

    <!-- <v-btn
      v-model="fab"
      color="blue darken-2"
      dark
      fab
      @click="scrollTop" v-show="visible"
    >
    </v-btn> -->

    <!-- Open R&D 소개 -->
    <v-container class="content_container" id="au_intro">
      <h2>Open R&D 소개</h2>
      <!-- <v-divider style="margin-bottom: 16px"></v-divider> -->
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

        <v-container id="au_diagram" class="content_container">
      <v-row justify="center">
          <v-avatar
            color="red"
            size="150"
            class="diagram_icons"
          >Open R&D</v-avatar>
      </v-row>

      <!-- <v-row justify="center" no-gutters>
        <div style="width: 3px; height: 50px; background-color: rgba(0,0,0,.12)">
        </div>
      </v-row>
      <v-row justify="center" no-gutters>
        <div style="width: 35%; height: 3px; background-color: rgba(0,0,0,.12)">
        </div>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col style="display: flex; justify-content: center;" lg="3">
          <div style="width: 3px; height: 50px; background-color: rgba(0,0,0,.12)">
          </div>
        </v-col>
        <v-col style="display: flex; justify-content: center;" md="auto">
          <div style="width: 3px; height: 50px; background-color: rgba(0,0,0,.12)">
          </div>
        </v-col>
        <v-col style="display: flex; justify-content: center;" lg="3">
          <div style="width: 3px; height: 50px; background-color: rgba(0,0,0,.12)">
          </div>
        </v-col>
      </v-row> -->

      
      <v-row justify="center">
        <v-col style="display: flex; justify-content: center;" lg="3">
          <v-avatar
            color="green"
            size="100"
            class="diagram_icons"
          >신약</v-avatar>
        </v-col>
        <v-col style="display: flex; justify-content: center;" md="auto">
          <v-avatar
            color="orange"
            size="100"
            class="diagram_icons"
          >투자</v-avatar>
        </v-col>
        <v-col style="display: flex; justify-content: center;" lg="3">
          <v-avatar
            color="blue"
            size="100"
            class="diagram_icons"
          >AI</v-avatar>
        </v-col>
      </v-row>
    </v-container>

    <!-- 성과 Timeline -->
    <v-container class="content_container" id="au_timeline">
      <h2>Timeline</h2>
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
    </v-container>

    <!-- 조직도 -->
    <v-container class="content_container" id="au_members">
      <h2>Members</h2>
      <!-- Executive 멤버들: 카드 with image -->
      <h4>Executives</h4>
      <v-row style="margin: 24px 0;">
        <v-col v-for="member in members.executives" :key="member.name" style="display: flex; align-items: center; justify-content: center;">
          <v-card hover width="300" style="padding: 12px; display: flex; flex-direction: column; justify-content:center; align-items: center;">
              <v-avatar class="profile" size="200" color="#dedede" style="margin: 5% 0">
                <!-- <v-img max-height="250" :src="member.image"></v-img> -->
                <v-icon size="100">mdi-account</v-icon>
              </v-avatar>

              <div style="display: flex; flex-direction: column; align-items: center">
                <v-card-title class="font-weight-bold">{{
                  member.name
                }}</v-card-title>
                <v-card-subtitle>{{ member.role }}</v-card-subtitle>
                <v-card-text>
                  {{ member.description }}
                </v-card-text>
              </div>
            <!-- </div> -->
          </v-card>
        </v-col>
      </v-row>
      <!-- Team 멤버들: 카드 with text -->
      <h4>Managers</h4>
      <v-row>
        <v-col
          cols="4"
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-stepper vertical>
        <v-stepper-step editable step="1">
          Select campaign settings
        </v-stepper-step>

        <v-stepper-step editable step="2"> Create an ad group </v-stepper-step>

        <v-stepper-step step="3" editable> Create an ad </v-stepper-step>
    </v-stepper> -->
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
          // {
          //   name: "김정훈",
          //   role: "연구개발센터 센터장",
          //   description:
          //     "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
          //   style: "margin-right: auto;",
          //   image: "https://source.unsplash.com/c_GmwfHBDzk/",
          // },
          {
            name: "이수민",
            role: "평가분석팀 팀장",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-left: auto;",
            image: "https://source.unsplash.com/c_GmwfHBDzk/",
          },
        ],
        managers: [
          {
            name: "김종인",
            role: "평가분석팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-left: auto;",
            image: "",
          },
          {
            name: "김율담",
            role: "평가분석팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            image: "",
          },
          {
            name: "연승주",
            role: "평가분석팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-left: auto;",
            image: "",
          },
          {
            name: "구남진",
            role: "평가분석팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            image: "",
          },
          {
            name: "박지현",
            role: "평가분석팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-left: auto;",
            image: "",
          },
          {
            name: "김동혁",
            role: "평가분석팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            image: "",
          },
          {
            name: "허지호",
            role: "Pharma 기획팀 팀장",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            image: "https://source.unsplash.com/c_GmwfHBDzk/",
          },
          {
            name: "최권희",
            role: "평가분석팀",
            description:
              "Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at.",
            style: "margin-right: auto;",
            image: "https://source.unsplash.com/c_GmwfHBDzk/",
          },
        ],
      },
    }
  },


  methods: {
    scrollTop: function () { 
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
  
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
</style>