import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "87d72ed0a5bd4cddb66446c2475c3a18",
  },
});
