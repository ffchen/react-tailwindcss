import React, { useState, useEffect, useRef } from "react";
import { getNewsInfoListNew } from "@/apis/news";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const observer = useRef();

  const fetchData = async () => {
    setIsLoading(true);
    let params = {
      rows: 10,
      page,
      typeId: 1,
    };

    let res = await getNewsInfoListNew(params);

    let {
      code,
      data: { list },
    } = res;
    if (code === 1) {
      setData((prevData) => [...prevData, ...list]);
      setIsLoading(false);
    }
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver);
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (observer.current) {
      observer.current.observe(document.getElementById("observer"));
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [data]);

  return (
    <div className="mt-3 w-full bg-white rounded-md flex flex-row items-center p-3">
      <ul>
        {data.map((item, index) => (
          <li key={index} className="flex flex-row py-3 border-b border-[#eee]">
             <span className="flex-1">{item.title}</span>
            <img src={item.imgUrl} alt={item.title} className="w-[112px] h-[75px] rounded-md ml-[20px]" />
           
          </li>
        ))}
      </ul>
      <div id="observer">{isLoading && "Loading..."}</div>
    </div>
  );
}

export default App;
