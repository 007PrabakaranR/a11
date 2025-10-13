//"use client";
//import { useState } from "react";

export default function PopupRight({ isOpen, onClose }) {
    
  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          //className="fixed inset-0 bg-blur bg-opacity-30 z-40"
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          onClick={onClose} // close when clicking outside
        ></div>
      )}

      {/* Right-side popup (75% width) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="self-end text-gray-500 hover:text-gray-800 mb-4"
          >
            ✖
          </button>

          <h2 className="text-xl font-semibold mb-4">Side Popup</h2>
          <p className="mb-4">
            This popup covers 75% of the screen. You can still see 25% of the page.
          </p>

          <button
            onClick={onClose}
            className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
