import React from 'react';
import axios from "axios";

let BaseApi = axios.create({
  baseURL: "https://logiconomina.com/api/api"
});

let Api = function(token = null) {
  
  if(token){
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  
  return BaseApi;
};

export default Api;