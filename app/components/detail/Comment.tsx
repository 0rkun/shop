"use client";

import { Rating } from "@mui/material";
import Avatar from "../general/Avatar";

const Comment = ({ prd }: { prd: any }) => {
  return (
    <div className="border w-full md:w-1/3 rounded-lg p-2 my-3 ">
      <div className="flex items-center gap-2">
        <Avatar image={prd?.user?.image} />
        <div className="text-xl">{prd?.user?.name} </div>
        <Rating name="read-only" value={prd?.user?.rating} readOnly />
      </div>
      <div className="text-slate-500  ">{prd.comment}</div>
    </div>
  );
};

export default Comment;
