<template>
  <div class="page-layout">
    <van-nav-bar :title="topNavTitle" fixed :class="topNavClass">
      <img slot="left" :src="imagePath('logo.png')" alt srcset @click="movePage('/Home')" />
      <van-icon name="arrow-left" slot="left" size="24" @click="onClickBack" />
      <van-icon name="search" slot="right" size="24" @click="movePage('/Search')" />
    </van-nav-bar>
    <div class="page-container">
      <router-view />
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item @click="movePage('/home')">
        <svg slot="icon" width="21.591" height="21.624" viewBox="0 0 21.591 21.624">
          <g transform="translate(0.25 0.286)">
            <g transform="translate(0 0)">
              <path
                class="a"
                d="M20.988,10.336,17.573,6.921V2.5a.351.351,0,0,0-.351-.351H15.113a.351.351,0,0,0-.351.351V4.11L10.794.142a.351.351,0,0,0-.5,0L.1,10.336a.351.351,0,0,0,.248.6H1.76v9.839a.351.351,0,0,0,.351.351H18.979a.351.351,0,0,0,.351-.351V10.936h1.409a.351.351,0,0,0,.248-.6ZM15.465,2.853H16.87V6.218L15.465,4.813ZM13,20.424H8.085V12.693H13Zm5.974-10.191a.351.351,0,0,0-.351.351v9.839h-4.92V12.341a.351.351,0,0,0-.351-.351H7.734a.351.351,0,0,0-.351.351v8.082H2.463V10.584a.351.351,0,0,0-.351-.351H1.2L10.545.886l9.347,9.347Z"
                transform="translate(0 -0.039)"
              />
            </g>
          </g>
        </svg>
        홈
      </van-tabbar-item>
      <van-tabbar-item @click="movePage('/market')">
        <svg slot="icon" width="21.276" height="20.265" viewBox="0 0 21.276 20.265">
          <g transform="translate(-3.699 -3.767)">
            <g transform="translate(3.699 3.767)">
              <path
                class="a"
                d="M105.451,93.44a.587.587,0,0,0-.474-.4l-6.639-.965L95.369,86.06a.611.611,0,0,0-1.053,0l-2.969,6.016-6.639.965a.587.587,0,0,0-.326,1l4.8,4.683-1.134,6.613a.587.587,0,0,0,.852.619l5.938-3.122,5.938,3.122a.587.587,0,0,0,.852-.619L100.5,98.725l4.8-4.683A.587.587,0,0,0,105.451,93.44ZM99.458,98.1a.587.587,0,0,0-.169.519l.985,5.744-5.158-2.712a.586.586,0,0,0-.547,0l-5.158,2.712.985-5.744a.587.587,0,0,0-.169-.519l-4.173-4.068,5.767-.838a.586.586,0,0,0,.442-.321l2.579-5.226,2.579,5.226a.586.586,0,0,0,.442.321l5.767.838Z"
                transform="translate(-84.205 -85.758)"
              />
            </g>
          </g>
        </svg>
        마켓
      </van-tabbar-item>
      <van-tabbar-item icon="~assets/footer-1.svg" @click="movePage('/category')">
        <svg slot="icon" width="22.136" height="21.387" viewBox="0 0 22.136 21.387">
          <path
            id="패스_222"
            data-name="패스 222"
            d="M21.4,22.005l-2.737-1.631L21.4,18.744a.351.351,0,0,0,0-.6l-2.737-1.631L21.4,14.878a.351.351,0,0,0,0-.6L10.968,8.055a.351.351,0,0,0-.36,0L.171,14.274a.351.351,0,0,0,0,.6l2.737,1.631L.171,18.14a.351.351,0,0,0,0,.6l2.737,1.631L.171,22.005a.351.351,0,0,0,0,.6l10.437,6.22a.353.353,0,0,0,.36,0L21.4,22.609a.351.351,0,0,0,0-.6ZM1.038,14.576l9.75-5.811,9.75,5.811-4.313,2.57-5.438,3.241Zm0,3.865,2.557-1.523L10.608,21.1a.351.351,0,0,0,.36,0l7.014-4.182,2.557,1.523-9.75,5.811Zm9.75,9.676-9.75-5.811,2.557-1.523,7.014,4.182a.351.351,0,0,0,.36,0l7.014-4.182,2.557,1.523Z"
            transform="translate(0.28 -7.748)"
          />
        </svg>
        카테고리
      </van-tabbar-item>
      <van-tabbar-item icon="~assets/footer-1.svg" @click="movePage('/myPage')">
        <svg slot="icon" width="21.586" height="21.584" viewBox="0 0 21.586 21.584">
          <g transform="translate(0.25 0.25)">
            <path
              class="a"
              d="M10.542,0a10.542,10.542,0,1,0,0,21.084q.476,0,.949-.043c.293-.026.583-.066.871-.117l.111-.02A10.542,10.542,0,0,0,10.542,0ZM9.7,20.344H9.67c-.273-.024-.545-.061-.813-.108l-.046-.007q-.394-.071-.781-.173l-.062-.016c-.251-.068-.5-.147-.745-.235l-.076-.027c-.24-.088-.476-.187-.708-.294l-.086-.039c-.228-.105-.451-.224-.67-.349l-.093-.052q-.323-.189-.633-.4l-.094-.065c-.2-.144-.4-.3-.594-.457l-.053-.046V15.11a3.87,3.87,0,0,1,3.865-3.865H13a3.87,3.87,0,0,1,3.865,3.865v2.963l-.047.039q-.295.246-.605.466l-.083.056q-.313.218-.642.41l-.083.047c-.222.126-.448.246-.679.353l-.08.035c-.234.108-.472.207-.714.3l-.07.025c-.246.088-.5.168-.748.236l-.061.015c-.258.068-.518.127-.781.174l-.045.007c-.269.047-.541.084-.814.108h-.025c-.281.024-.562.037-.847.037S9.976,20.368,9.7,20.344Zm7.875-2.922V15.11A4.574,4.574,0,0,0,13,10.542H8.082A4.574,4.574,0,0,0,3.514,15.11v2.311a9.839,9.839,0,1,1,14.056,0Zm0,0"
            />
            <path
              class="a"
              d="M163.514,64a3.514,3.514,0,1,0,3.514,3.514A3.514,3.514,0,0,0,163.514,64Zm0,6.325a2.811,2.811,0,1,1,2.811-2.811A2.811,2.811,0,0,1,163.514,70.325Zm0,0"
              transform="translate(-152.972 -61.189)"
            />
          </g>
        </svg>
        마이페이지
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);

export default {
  name: "MyLayout",
  data() {
    return {
      active: 0
    };
  },
  computed: {
    ...mapGetters({
      topNavClass: "getTopNavClass",
      topNavTitle: "getTopNavTitle"
    })
  },
  methods: {
    imagePath(img) {
      return require(`../assets/${img}`);
    },
    onClickBack() {
      this.$router.push(`/Home`);
    },
    onClickSearch() {
      Toast("Search");
    },
    onClickCart() {
      Toast("Cart");
    },
    movePage(pageName) {
      this.$router.push(`${pageName}`);
    }
  }
};
</script>

<style lang="scss">
.page-container {
  padding: 53px 0 70px 0;
  height: 100%;
  overflow: auto;
  background: #f6f6f6 0% 0% no-repeat padding-box;
}
.page-layout {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.van-sticky--fixed {
  position: fixed;
  top: 46px;
  right: 0;
  left: 0;
  z-index: 99;
}
.van-nav-bar--fixed {
  flex: none;
}
.van-tabbar--fixed {
  flex: none;
}
.images-slider {
  display: flex;
  width: 100%;
  overflow: auto;
  flex: none;
  padding: 0 5px;
  background: white;
  &.market {
    .van-image {
      width: 28%;
    }
  }
}
.van-image {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: calc(100% - 40px);
}
.item-card {
  width: calc(33.3333% - 4px);
  height: calc(33.3333vw + 33px);
  flex: none;
  margin-right: 6px;
}
.item-info {
  &__name {
    font-family: "Noto Sans CJK KR";
    font-size: 9px;
    font-weight: bold;
    color: #999999;
  }
  &__price {
    display: flex;
    justify-content: space-between;
    span {
      font-family: "Noto Sans CJK KR";
      font-size: 14px;
      font-weight: bold;
      color: #333333;
    }
    .van-icon {
      display: inline-flex;
      align-items: center;
      span {
        font-family: "Noto Sans CJK KR";
        font-size: 9px;
        font-weight: bold;
        color: #333333;
        margin: 0 5px;
      }
    }
  }
}

.title-wrapper {
  &__title {
    font-weight: bold;
    font-family: "Noto Sans CJK KR";
    font-size: 16px;
    color: #333333;
    padding: 10px;
  }
}
#q-app {
  .van-checkbox__icon {
    background: none;
    &--round:not(.van-checkbox__icon--checked) .van-icon {
      background: white;
    }
  }
}
.van-tabbar {
  height: 70px;
}
.van-tabbar-item {
  color: #a5a5a5;
  padding-bottom: 10px;
  &__icon {
    margin-bottom: 3px;
  }
  img,
  g,
  path {
    fill: #a5a5a5;
    stroke: #a5a5a5;
    stroke-width: 0.3;
  }
  &.van-tabbar-item--active {
    color: #3b9dff;
    img,
    g,
    path {
      fill: #3b9dff;
      stroke: #3b9dff;
      stroke-width: 0.3;
    }
  }
}
.van-nav-bar {
  .van-nav-bar__left {
    display: flex;
    align-items: center;
  }
  .van-nav-bar__title {
    display: block;
  }
  img {
    display: none;
  }
  &.logo-nav {
    .van-icon-arrow-left,
    .van-nav-bar__title {
      display: none;
    }
    img {
      display: block;
    }
  }
  &.no-back-button {
    .van-nav-bar__left {
      display: none;
    }
    .van-nav-bar__right {
      display: none;
    }
  }
  .van-icon.van-icon-search {
    color: #333333;
  }
}
.van-nav-bar__right {
  height: 50px;
}
</style>
