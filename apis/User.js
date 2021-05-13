import Api from "./Api";

export default {
    login(form) {
      return Api().post("/login", form);
    },
    logout(token) {
      return Api(token).post("/logout");
    },
    auth(token) {
      return Api(token).get("/user");
    },
  };