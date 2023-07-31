/*
 * @Author: ff-chen
 * @Date: 2023-06-26 11:42:29
 * @FilePath: /react-tailwindcss/tailwind.config.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-[#408aff]",
    "bg-[#f89f00]",
    "bg-[#f27429]",
    "text-[#2e90fa]",
    "text-[#121212]",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
