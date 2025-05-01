import React from "react";
import { BiShow } from "react-icons/bi";
const NoteCard = () => {
  return (
    <div className="p-4 border rounded-2xl border-slate-400">
      <div>
        <h1 className="text-xl font-semibold">Title</h1>
        <div className="flex justify-between mt-2 text-slate-500 text-sm">
          <h1>Category</h1>
          <h1>Last Edited At</h1>
        </div>
        <div className="divider mt-1"></div>
      </div>

      <div>
        <p className="text-slate-400 text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          architecto aspernatur vitae aliquam eius veritatis Fugit..
        </p>
      </div>

      <div className="w-full">
        <button className="btn w-full mt-3">Show <BiShow className="text-xl"/></button>
      </div>
    </div>
  );
};

export default NoteCard;
