import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return (
    <div className="flex items-center justify-center m-4 bg-cyan-600 text-white p-4 text-3xl h-[200px]">
      <h1>
        User:
        <span className="font-bold bg-orange-600 rounded px-5 py-2">
          {userid}
        </span>
      </h1>
    </div>
  );
};

export default User;
