import React from "react";

function Card({ item }) {
    const tags = item.tags.split(',');
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-10">
        <img className="w-full" src={item.webformatURL} alt="not found"/>
        <div className=" font-bold font-mono px-6 pt-2 pb-2 text-2xl">Photo By {item.user}</div>
        <div className=" flex-wrap px-6 pt-2 pb-2 font-bold text-sm">
          <span className=" inline-block w-full">Views : {item.views}</span>
          <span className=" inline-block w-full">Downloads : {item.downloads}</span>
          <span className=" inline-block w-full">Likes : {item.likes}</span>
        </div>
        <div className="flex flex-wrap py-2 px-2 mr-6">
          {tags.map(tag => <span className="rounded-full text-sm py-2 px-3 text-gray-700 mr-2 mb-2 bg-gray-200 font-semibold">#{tag}</span>)}
        </div>
      </div>
    )
}

export default Card;
  