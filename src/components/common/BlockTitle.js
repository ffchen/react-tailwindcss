/*
 * @Author: ff-chen
 * @Date: 2023-07-14 09:04:41
 * @FilePath: /react-tailwindcss/src/components/common/BlockTitle.js
 * @Description: 模块标题
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */

export default function BlockTitle(props) {
  const { title } = props;
  
  return (
    <h3 className="font-['FZJW'] flex flex-row items-center">
      <i className="block w-[4px] h-[16px] bg-[#2e90fa] mr-1.5 mt-[-3px]"></i>
      <span>{title}</span>
    </h3>
  );
}
