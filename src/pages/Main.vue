<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header
      :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
      class="header"
    ></a-layout-header>
    <a-layout-content
      :style="{
        margin: '84px 16px 24px',
        padding: '24px',
        background: '#fff',
        minHeight: '280px'
      }"
      :class="
        !loading && teamCardsFilter.length == 0
          ? 'empty'
          : loading
          ? 'overflow-hidden'
          : ''
      "
      ><a id="kakao-login-btn"></a
    ></a-layout-content>
  </a-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  components: {},
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters({})
  },
  watch: {
    // teamCards(cards) {}
  },
  mounted() {
    let vueObj = this;
    //<![CDATA[
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init("c2e4888871bd47f784ce3d3a5be237c2");
    // Kakao.init("aa516ad47b8f19715cc2f0b87c03402b");
    // vueObj.getFriendList();
    // window.location.href =
    // "https://kauth.kakao.com/oauth/authorize?client_id=aa516ad47b8f19715cc2f0b87c03402b&redirect_uri=http://localhost:8080/#/oauth&response_type=code&scope=talk_message";
    // 카카오 로그인 버튼을 생성합니다.
    Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      success: function(authObj) {
        console.log(authObj);
        Kakao.API.request({
          url: "/v1/api/talk/friends",
          success: function(res) {
            console.log(res);
            vueObj.sendMsg(res.elements[1].uuid);
            // vueObj.sendMsg(res.result_id);
          },
          fail: function(error) {
            alert(JSON.stringify(error));
          }
        });
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
    //]]>
  },
  methods: {
    sendMsg(uuid) {
      Kakao.API.request({
        url: "/v1/api/talk/friends/message/default/send",
        data: {
          receiver_uuids: [uuid],
          template_object: {
            object_type: "text",
            text: "님 여기 알림꺼주세요.",
            link: {
              mobileWebURL: "https://devkim.dev"
            },
            button: {
              title: "누르지마셈",
              link: "https://devkim.dev"
            }
          }
        },
        success: function(res) {
          console.log("메시지 전송이 완료되었습니다.");
        }
      });
    },
    getFriendList() {
      let vueObj = this;
      this.$store.dispatch(T.GET_FRIEND_LIST, {
        cb: url => {
          vueObj.$router.redirect(url);
        }
      });
    }
  }
};
</script>
<style lang="scss"></style>
