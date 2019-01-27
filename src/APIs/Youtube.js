import Axios from "axios";

const KEY = "AIzaSyB-_TNY8_QA3EdqPxrB3p1Yje5PbBfpeAI";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
