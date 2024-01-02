// "use client";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/roshanshah639")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="flex items-center justify-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img
        className="flex items-center justify-center object-cover rounded-full h-48 w-48 m-4"
        src={data.avatar_url}
        alt="Git Profile Pic"
      />
      <h4>Github Followers: {data.followers}</h4>
    </div>
  );
};

export default Github;

export const gitHubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/roshanshah639");
  const data = await res.json();
  return data;
};
