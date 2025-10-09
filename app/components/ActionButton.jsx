import Link from "next/link";
import React from "react";

const ActionButton = (DetailsFrom) => {
  return (
    <div className="w-full flex gap-4 mt-4">
      {/* <!-- bg-indigo-600 indicating Active --> */}
      <button
        className={`w-full bg-indigo-600 hover:bg-indigo-800 ${
          !DetailsFrom && `flex-1`
        }`}
      >
        Interested
      </button>

      {/* <!-- bg-green-600 indicating Active --> */}
      <Link
        href="/payment"
        className="w-full flex items-center justify-center bg-green-600 hover:bg-green-800 rounded-md"
      >
        Going
      </Link>
    </div>
  );
};

export default ActionButton;
