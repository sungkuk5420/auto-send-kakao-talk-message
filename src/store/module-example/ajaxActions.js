import axios from "axios";

const apiURL = "https://kauth.kakao.com";
// const apiURL = "http://localhost:3000";
// const apiURL = "https://devkim.dev/hackathon";

export const ajaxActions = {
  getFriendList(params, cSuccess, cError) {
    // console.log(params);
    let options = {
      url() {
        return `https://kauth.kakao.com/oauth/authorize?client_id=aa516ad47b8f19715cc2f0b87c03402b&redirect_uri=http://localhost:8080/#/oauth&response_type=code&scope=talk_message`;
      }
    };
    let api = axios.create();
    axios.all([api.get(options.url())]).then(responses => {
      let errors = responses.filter(res => {
        return res.status !== 200;
      });
      if (errors.length < 1) {
        console.log("200 response= ", responses[0]);
        // document.body.innerHTML = responses[0].data;
        window.location.href = responses[0].data;
        cSuccess(responses[0]);
      } else {
        let errmsgs = errors.reduce((memo = "", res) => {
          return memo + `${res.status} : ${res.message} \n`;
        }, "");
        console.warn(errmsgs);
      }
    });
  }
};
