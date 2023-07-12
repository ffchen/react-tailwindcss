import request from "@/utils/request";

const URL_PATH = "/xcw/android/3/api/news";

export function getNewsInfoListNew(params) {
    return request({
      url: `${URL_PATH}/getNewsInfoListNew`,
      method: "get",
      params,
    });
  }