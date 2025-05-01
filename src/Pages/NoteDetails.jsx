import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { getAllNotes } from "../Functions/Functions";

const NoteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState({});

  useEffect(() => {
    const savedNotes = getAllNotes();
    const theNote = savedNotes.find((item) => String(item.id) == id);
    setNote(theNote);
  }, []);

  const { title, category, details, lastEdited } = note;

  return (
    <div>
      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg p-8 rounded-2xl border border-gray-200">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{title}</h1>

        {/* Meta Info */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span className="italic">{category}</span>
          <span>Last Edited: {lastEdited}</span>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        {/* Note Details */}
        <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {details}
        </div>

        {/* Back Button */}
        <button
          className="btn btn-outline btn-primary mt-8"
          onClick={() => navigate(-1)}
        >
          ← Back to Notes
        </button>
      </div>
    </div>
  );
};

export default NoteDetails;
