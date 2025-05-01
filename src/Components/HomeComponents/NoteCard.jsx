import React from "react";
import { NavLink } from "react-router";
const NoteCard = ({note}) => {
   const {id,category,title,details,lastEdited} = note;

  return (
    <div className="p-4 border rounded-2xl border-slate-400">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex justify-between mt-2 text-slate-500 text-sm">
          <h1>{category}</h1>
          <h1>{lastEdited}</h1>
        </div>
        <div className="divider mt-1"></div>
      </div>

      <div>
        <p className="text-slate-400 text-sm mt-5">
          {details}
        </p>
      </div>

      <div className="w-full">
       <NavLink to={`/notedetails/${id}`} className="btn w-full mt-3">Show </NavLink>
      </div>
    </div>
  );
};

export default NoteCard;
