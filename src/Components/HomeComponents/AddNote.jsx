import React from "react";
import { IoCreateOutline } from "react-icons/io5";

const AddNote = () => {
  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-10">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-blue-600 flex items-center mb-6">
        <IoCreateOutline className="mr-2 text-3xl" />
        Create New Note
      </h1>

      {/* Form Card */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <form className="space-y-5">
          {/* Title */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter note title"
              className="input input-bordered w-full"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Categories</label>
            <input
              type="text"
              placeholder="e.g., Work, Personal, Ideas"
              className="input input-bordered w-full"
            />
          </div>

          {/* Note Content */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Details</label>
            <textarea
              placeholder="Write your note details here..."
              className="textarea textarea-bordered w-full min-h-[150px]"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              Save
            </button>
            <button type="button" className="btn btn-outline w-full sm:w-auto">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
