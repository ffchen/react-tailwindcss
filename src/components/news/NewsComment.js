/*
 * @Author: ff-chen
 * @Date: 2023-07-20 11:37:58
 * @FilePath: /react-tailwindcss/src/components/news/NewsComment.js
 * @Description: 资讯详情页评论
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */

import { BsChatDots } from "react-icons/bs";

export default function NewsComment() {
  return (
    <div className="w-full h-[60px] flex flex-row items-center box-border px-4 bg-white shadow-[0_-5px_10px_-3px_rgba(0,0,0,0.1)] fixed left-0 bottom-0 z-[1]">
        <div className="flex-1 rounded-full border h-[32px] bg-[#F6F6F6] flex items-center">
            <span className="px-2 text-[#909090] text-sm">写评论...</span>
        </div>
        <BsChatDots size={24} color="#909090" className="ml-4"/>
    </div>
  );
}
