// src/components/ProfileInfo.jsx
import {
  ArrowLeft,
  Bell,
  CircleOff,
  Heart,
  SquarePen,
  Trash,
  X,
} from "lucide-react";
import { useState } from "react";
import FloatingInput from "./FloatingInput";
import Switcher from "./Switcher";

const ProfileInfo = ({ isOpen, onClose, profile }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-90 bg-[#1f1f1f] text-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center  border-gray-700">
          {editMode ? (
            <ArrowLeft onClick={() => setEditMode(false)} />
          ) : (
            <h2 className="text-lg font-bold">Contact Info</h2>
          )}

          <X className="cursor-pointer hover:text-red-400" onClick={onClose} />
        </div>
        <div className="p-4 flex flex-col items-center text-center gap-1.5">
          <img
            src={profile.avatar}
            alt="Profile"
            className="w-30 h-30 rounded-full border-2 border-white"
          />
          <h3 className="text-xl font-semibold mt-2">{profile.name}</h3>

          <p className="text-sm text-green-500">+91 987654321</p>
          <p className="text-sm ">Building things with code</p>

          {/* Info */}
          <div className="relative w-full h-full mt-10">
            {/* Non-Edit Mode */}
            <div
              className={`absolute top-0 left-0 w-full transition-all duration-300 ${
                editMode
                  ? "opacity-0 scale-95 pointer-events-none"
                  : "opacity-100 scale-100"
              }`}
            >
              <div className="flex flex-col gap-6 [&>div]:cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <Bell size={19} />
                    <div className="text-[16px] font-light">Notifications</div>
                  </div>
                  <Switcher
                    isChecked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="flex gap-5 items-center">
                  <Heart size={19} />
                  <div className="text-[16px] font-light">Add To Favorites</div>
                </div>
                <div
                  className="flex gap-5 items-center"
                  onClick={() => setEditMode(true)}
                >
                  <SquarePen size={19} />
                  <div className="text-[16px] font-light">
                    Edit {profile.name}
                  </div>
                </div>
                <div className="flex gap-5 items-center text-yellow-500">
                  <CircleOff size={19} />
                  <div className="text-[16px] font-light">
                    Block {profile.name}
                  </div>
                </div>
                <div className="flex gap-5 items-center text-red-500">
                  <Trash size={19} />
                  <div className="text-[16px] font-light">Delete Chat</div>
                </div>
              </div>
            </div>

            {/* Edit Mode */}
            <div
              className={`absolute top-0 left-0 w-full transition-all duration-300 ${
                editMode
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-6">
                <FloatingInput
                  label="First Name"
                  value={profile.name}
                  onChange={() => {}}
                  id="firstName"
                />
                <FloatingInput
                  label="Last Name"
                  value=""
                  onChange={() => {}}
                  id="lastName"
                />
                <button
                  className="mt-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:brightness-110 active:scale-95"
                  onClick={() => setEditMode(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
