/*
 * @Author: ff-chen
 * @Date: 2023-07-20 10:17:35
 * @FilePath: /react-tailwindcss/src/components/common/PageTitle.js
 * @Description: 页面顶部标题栏
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
export default function PageTitle(props) {
  const navigate = useNavigate();
  const iconSize = 22;
  const iconColor = "#fff";
  const { showBack, title, rightIcon } = props; // 是否显示返回按钮, 标题, 右侧自定义按钮
  const iconClassName = "w-[50px] flex items-center justify-center"; // 定义 icon 样式

  return (
    <div className="flex flex-row w-full h-[48px] bg-[#198bfd]/80 backdrop-blur-md items-center justify-center fixed left-0 top-0 z-[1] shadow-md">
      <div className={iconClassName}>
        {showBack ? (
          <BsChevronLeft
            size={iconSize}
            color={iconColor}
            onClick={() => navigate(-1)}
          />
        ) : (
          ""
        )}
      </div>
      <h1 className="flex-1 flex items-center justify-center text-[#fff] text-lg">
        {title}
      </h1>
      <div className={iconClassName}>{rightIcon ? rightIcon : ""}</div>
    </div>
  );
}
