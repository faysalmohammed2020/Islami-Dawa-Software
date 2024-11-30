"use client";
import React, { useState } from "react";

const ShowProfile = () => {
 
  return (
    <>
      <div className="w-full h-screen p-8 bg-slate-50 shadow-lg rounded-lg">
        {/* Profile Header */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-2xl">
            E
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">
            Estiak Ahmed  
          </h3>
          <p className="text-gray-500 text-sm sm:text-lg">estiakahmed@gmail.com</p>
        </div>

        <div>
            <div className="space-y-4 text-sm sm:text-lg">
                <p><spam>Name:</spam><span className="sm:ps-4 ps-2 font-semibold">Estiak Ahmed</span></p>
                <hr/>
            </div>

            <div className="space-y-4 py-4 text-sm sm:text-lg">
                <p><spam>Email Address:</spam><span className="sm:ps-4 ps-2 font-semibold">estiakahmed@gmail.com</span></p>
                <hr/>
            </div>

            <div className="space-y-4 text-sm sm:text-lg">
                <p><spam>Phone Number:</spam><span className="sm:ps-4 ps-2 font-semibold">+880123456789</span></p>
                <hr/>
            </div>

            <div className="space-y-4 py-4">
                <div className="flex gap-8 sm:gap-24 text-sm sm:text-lg">
                    <p><spam>Division:</spam><span className="sm:ps-4 ps-2 font-semibold">Dhaka</span></p>
                    <p><spam>District:</spam><span className="sm:ps-4 ps-2 font-semibold">Jamalpur</span></p>
                </div>
                <hr/>
            </div>

            <div className="space-y-4">
                <div className="flex gap-6 sm:gap-20 text-sm sm:text-lg ">
                    <p><spam>Thana:</spam><span className="sm:ps-4 ps-2 font-semibold">Jamalpur</span></p>
                    <p><spam>Makraz:</spam><span className="sm:ps-4 ps-2 font-semibold">Jamalpur</span></p>
                </div>
                <hr/>
            </div>

            {/* Save Button */}
            <div className="py-4 flex justify-end">
              <button
              type="submit"
              className="w-24 sm:w-32 py-1 sm:py-2 px-4 bg-teal-600 text-white font-bold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Edit
            </button>

            </div>
        
        </div>

      </div>
    </>
  );
};

export default ShowProfile;
