/*
 * @Author: ff-chen
 * @Date: 2023-07-11 15:29:52
 * @FilePath: /react-tailwindcss/src/configs/config.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */

const config = {
  USER_TOKEN: "userToken",
  BLOCK_GAP: "20px",
  HOT_LABELS: ["船查查", "船货保险", "航运圈", "近期成交", "海运头条"],
  TABBAR_LIST: [
    {
      id: 1,
      icon: "BsFillHouseFill",
      label: "首页",
      url: "/",
      isAtc: true,
    },
    {
      id: 2,
      icon: "BsFillHddRackFill",
      label: "资讯",
      url: "/news",
    },
    {
      id: 3,
      icon: "BsGiftFill",
      label: "会员",
      url: "/vip",
    },
    {
      id: 4,
      icon: "BsFillChatLeftHeartFill",
      label: "消息",
      url: "/msg",
    },
    {
      id: 5,
      icon: "BsFillEmojiSmileFill",
      label: "我的",
      url: "/mine",
    },
  ],
  INDEX_INFONAV: [
    {
      name: "船查查",
      label: "21469艘",
      bg: "#408aff",
      icon: "BiSolidShip",
    },
    {
      name: "船货保险",
      label: "在线投保",
      text: "7*24小时",
      bg: "#f89f00",
      icon: "BsShieldFillCheck",
    },
    {
      name: "航运圈",
      label: "373条",
      bg: "#f27429",
      isNew: true,
      icon: "BsGlobeAmericas",
    },
  ],
};
export default config;
