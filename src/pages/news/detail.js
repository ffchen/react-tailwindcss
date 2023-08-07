/*
 * @Author: ff-chen
 * @Date: 2023-07-20 10:08:01
 * @FilePath: /react-tailwindcss/src/pages/news/detail.js
 * @Description: 资讯详情页
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { useState } from "react";
import { useMount } from "ahooks";
import { useParams } from "react-router-dom";
import PageTitle from "@/components/common/PageTitle";
import NewsComment from "@/components/news/NewsComment";
import { BsBoxArrowUp } from "react-icons/bs";
import { getNewsInfoDetail } from "@/apis/news";
import { timeFormat } from "@/utils/filter";

export default function NewsDetail() {
  const { id } = useParams();
  const [newsData, setNewsData] = useState({});

  // 分享事件
  function shareEvent() {
    console.log("分享事件");
  }
  // 获取新闻资讯详情
  async function getDetail() {
    let res = await getNewsInfoDetail({ id });
    const { code, data } = res;
    if (code === 1) setNewsData(data);
  }

  useMount(() => getDetail());

  return (
    <div className="pt-[48px] pb-[60px]">
      <PageTitle
        title={newsData.typeName}
        showBack={true}
        rightIcon={<BsBoxArrowUp size={22} color="#fff" onClick={shareEvent} />}
      />
      <div className="p-4 flex flex-col">
        <h2 className="text-xl">{newsData.title}</h2>
        <div className="mt-3 flex flex-row text-sm text-[#999] pb-3">
          <span className="mr-4">{newsData.source}</span>
          <span className="flex-1">{timeFormat(newsData.createTime)}</span>
          <span className="justify-items-end">{newsData.countRead}阅读</span>
        </div>
        <div className="newsDetail">
          <div dangerouslySetInnerHTML={{ __html: newsData.content }} />
        </div>
      </div>
      <div className="p-4 text-sm text-[#999]">
        <h4 className="mb-2">免责声明：</h4>
        <span>
          凡本网注明“来源:XXX(非携船网)”的作品，均转载自其它媒体，转载
          的目的在于传递更多资讯，并不代表本网赞同其观点和对其真实性负
          责。如因作品内容、版权和其它问题需要同本网联系的，请在30日内 进行。
        </span>
      </div>
      <NewsComment />
    </div>
  );
}
