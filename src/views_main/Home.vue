<template>
  <div id="landing">
    <div class="landing_container">
      <swiper class="swiper" :options="swiperOption" ref="landingSwiper">
        <swiper-slide>
          <v-row class="slide">
            <v-col cols="5" class="slide_content">
              <div class="content_box">
                <p
                  class="slide_heading an_con"
                  data-swiper-animation="animate__fadeInUp"
                  data-duration="1.5s"
                  data-delay="1.5s"
                  data-swiper-out-animation="animate__fadeOut"
                  data-out-duration="0.5s"
                >
                  SK Chemicals
                  <br />
                  <span>Open Innovation Team</span>
                </p>
                <p
                  class="an_con"
                  data-swiper-animation="animate__fadeInUp"
                  data-duration="1.5s"
                  data-delay="2s"
                  data-swiper-out-animation="animate__fadeOut"
                  data-out-duration="0.5s"
                >
                  환경을 생각하는 화학 · 생명을 지켜가는 과학 · 행복을 열어가는
                  기업
                  <br />
                  SK Chemical 오픈 이노베이션 팀이 만들고 있습니다
                </p>
              </div>
            </v-col>
            <v-col class="slide_img">
              <div
                class="bg_img an_con"
                id="sliderImg_01"
                data-swiper-animation="animate__fadeInRight"
                data-duration="2.5s"
                data-swiper-out-animation="animate__fadeOut"
                data-out-duration="0.5s"
              ></div>
            </v-col>
          </v-row>
        </swiper-slide>

        <swiper-slide>
          <v-row class="slide">
            <v-col class="slide_img">
              <div
                class="bg_img an_con"
                id="sliderImg_02"
                data-swiper-animation="animate__slideInDown"
                data-duration="1.5s"
                data-swiper-out-animation="animate__fadeOut"
                data-out-duration="0.5s"
              ></div>
            </v-col>
            <v-col cols="6" class="slide_content">
              <div class="content_box">
                <p
                  class="slide_heading an_con"
                  data-swiper-animation="animate__fadeInRight"
                  data-duration="1.5s"
                  data-delay="1s"
                  data-swiper-out-animation="animate__fadeOut"
                  data-out-duration="0.5s"
                >
                  <span class="">This is an</span>
                  <br />
                  Irrelevant Image
                </p>
                <p
                  class="an_con"
                  data-swiper-animation="animate__fadeInRight"
                  data-duration="1s"
                  data-delay="1.5s"
                  data-swiper-out-animation="animate__fadeOut"
                  data-out-duration="0.5s"
                >
                  환경을 생각하는 화학 · 생명을 지켜가는 과학 · 행복을 열어가는
                  기업
                  <br />
                  SK Chemical 오픈 이노베이션 팀이 만들고 있습니다
                </p>
              </div>
            </v-col>
          </v-row>
        </swiper-slide>

        <swiper-slide>
          <v-row class="slide">
            <v-col cols="6" class="slide_content">
              <div class="content_box">
                <p
                  class="slide_heading an_con"
                  data-swiper-animation="animate__fadeInUp"
                  data-duration="1.5s"
                  data-delay="1s"
                  data-swiper-out-animation="animate__fadeOut"
                  data-out-duration="0.5s"
                >
                  Research and Development
                  <br />
                  <span>많이 하고 있습니다</span>
                </p>
                <p
                  class="an_con"
                  data-swiper-animation="animate__fadeInUp"
                  data-duration="1.5s"
                  data-delay="1.5s"
                  data-swiper-out-animation="animate__fadeOut"
                  data-out-duration="0.5s"
                >
                  환경을 생각하는 화학 · 생명을 지켜가는 과학 · 행복을 열어가는
                  기업
                  <br />
                  SK Chemical 오픈 이노베이션 팀이 만들고 있습니다
                </p>
              </div>
            </v-col>
            <v-col class="slide_img">
              <div
                class="bg_img an_con"
                id="sliderImg_03"
                data-swiper-animation="animate__backInRight"
                data-duration="1s"
                data-delay="1.5s"
                data-swiper-out-animation="animate__fadeOut"
                data-out-duration="0.5s"
              ></div>
            </v-col>
          </v-row>
        </swiper-slide>

        <swiper-slide>
          <v-row class="slide">
            <v-col class="slide_img">
              <div
                class="bg_img an_con"
                id="sliderImg_04"
                data-swiper-animation="animate__fadeInLeft"
                data-duration="1s"
                data-swiper-out-animation="animate__fadeOut"
                data-out-duration="0.5s"
              ></div>
            </v-col>
            <v-col cols="6" class="slide_content">
              <div class="content_box">
                <p
                  class="slide_heading an_con"
                  data-swiper-animation="animate__fadeInDown"
                  data-duration="1.5s"
                  data-delay="1s"
                  data-swiper-out-animation="animate__fadeOut"
                  data-out-duration="0.5s"
                >
                  COVID 19
                  <br />
                  <span>백신 개발도 하고 있습니다</span>
                </p>
                <p
                  class="an_con"
                  data-swiper-animation="animate__fadeInDown"
                  data-duration="1.5s"
                  data-delay="1.5s"
                  data-swiper-out-animation="animate__fadeOut"
                  data-out-duration="0.5s"
                >
                  환경을 생각하는 화학 · 생명을 지켜가는 과학 · 행복을 열어가는
                  기업
                  <br />
                  SK Chemical 오픈 이노베이션 팀이 만들고 있습니다
                </p>
              </div>
            </v-col>
          </v-row>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- <div class="landing_content_container">
        <div class="content_container">
          <h1 class="page_heading">OPEN R&D</h1>
          <h1>{{ $t("welcomeMsg") }}</h1>
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
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// import "aos/dist/aos.css";
import "animate.css";

import SwiperAnimation from "@cycjimmy/swiper-animation";

const swiperAnimation = new SwiperAnimation();

export default {
  name: "Home",
  components: {
    // Footer,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    // let self = this;
    return {
      swiper: null,
      swiperAnimation: null,
      images: [
        "https://source.unsplash.com/WCEOtVmk2VY/1600x900",
        "https://source.unsplash.com/pwcKF7L4-no/",
        "https://source.unsplash.com/MD2_srN-02o/1600x900",
        "https://source.unsplash.com/XknuBmnjbKg/1600x900",
        "https://source.unsplash.com/XknuBmnjbKg/1600x900",
      ],

      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 1750,
        pagination: { el: ".swiper-pagination", clickable: true },
        autoplay: {
          delay: 8000,
        },
        mousewheel: {},
        on: {
          init: function () {
            swiperAnimation.init(this).animate();
          },
          slideChange: function () {
            swiperAnimation.init(this).animate();
          },
          afterInit() {},
          slideChangeTransitionStart: function () {},
          slideChangeTransitionEnd: function () {},
          slideNextTransitionStart: function () {},
          slideNextTransitionEnd: function () {},
          slidePrevTransitionStart: function () {},
          slidePrevTransitionEnd: function () {},
        },
      },
    };
  },
  computed: {
    getSwiper() {
      return this.$refs.landingSwiper.$swiper;
    },
  },
  mounted() {
    this.swiper = this.getSwiper;
    // this.swiperAnimation = new SwiperAnimation();
  },
  methods: {
    // animate() {
    //   document.querySelectorAll(".an_con").forEach((element) => {
    //     element.classList.add("aos-animate")
    //   })
    // },
    // deanimate() {
    //   document.querySelectorAll(".an_con").forEach((element) => {
    //     element.classList.remove("aos-animate")
    //   })
    // }
  },
};
</script>
<style scoped lang="scss">
.landing_container {
  height: calc(100vh - 64px);

  .swiper {
    height: 100%;
    width: 100%;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      // font-weight: bold;
      font-size: 18px;
      // margin-right: 0 !important;
      .slide {
        width: 100%;
        height: 100%;
        margin: -15px;

        .slide_content {
          padding: 0 !important;
          width: 100%;
          height: 100%;
          text-align: left;

          .content_box {
            position: relative;
            top: 15%;
            left: 15%;
            z-index: 25;
            // padding: 15%;
            .slide_heading {
              font-size: 78px;
              padding-bottom: 84px;
              line-height: 76px;
              font-weight: 500;

              span {
                font-size: 50px;
                font-weight: 300;
              }
            }
          }
        }
        .slide_img {
          padding: 0 !important;

          .bg_img {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            &#sliderImg_01 {
              background-image: url('~@/assets/img/slider/main-bg-1.jpeg');
            }
            &#sliderImg_02 {
              background-image: url('~@/assets/img/slider/main-bg-2.jpeg');
            }
            &#sliderImg_03 {
              background-image: url('~@/assets/img/slider/main-bg-3.jpeg');
            }
            &#sliderImg_04 {
              background-image: url('~@/assets/img/slider/main-bg-4.jpeg');
            }
          }
        }
      }
    }
  }

  .landing_content_container {
    padding: 15px;
  }
}
</style>