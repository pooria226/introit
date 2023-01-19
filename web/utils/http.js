// import axios from "axios"
const axios = require("axios");

/* --------------------- axios instance ----------------------- */

function http() {
  const instance = axios.create();

  // set headers
  instance.defaults.headers.common["Accept"] = "application/json";
  instance.defaults.headers.contentType = "application/json";
  /* --------------------- axios instance ----------------------- */

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // if (error.response && error.response.status === 401) {
      //   cookie.remove("user");
      // }

      // if (error.response && error.response.status === 422) {
      //   if (error.response.data.errors);
      //   for (const [key, value] of Object.entries(error.response.data.errors)) {
      //     message.warning(value[0]);
      //   }
      // }

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  let error_display = (data, status) => {
    if (!data) return;
    if (status >= 400 && status < 500) {
    }
  };

  /* --------------------- axios instance errors ----------------------- */
  function errors_handler(error) {
    if (!error && !error.response && !error.response.data) {
      return;
    }
    let errors = error?.response?.data;
    let status = error?.response?.status;
    switch (status) {
      case 400:
        //bad request
        error_display(errors, status);
        break;
      case 401:
        //unauthenticate
        break;
      case 403:
        //unauthenticate
        error_display(errors, status);
        break;
      case 410:
        //unauthenticate
        error_display(errors, status);
        break;
      case 422:
        //error validations
        error_display(errors, status);
        break;
      case 500:
        //server error
        error_display(errors, status);
        break;
    }
  }

  /* --------------------- axios instance ----------------------- */

  return {
    //***************************
    // Start Home
    //***************************
    Home: (callback, data, errCB = undefined) => {
      return instance
        .post(`/auth/login/local`, data)
        .then(callback)
        .catch((err) => {
          if (errCB) errCB(err);
        });
    },
  };
}

module.exports.http = http;
