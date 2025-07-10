import {
  BellOff,
  BrushCleaning,
  CircleOff,
  Info,
  MoreHorizontal,
  Phone,
  Trash,
  Video,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ContactCard from "../ContactInfo/ContactCard";

const ChatHeader = () => {
  const [contactCardOpen, setContactCardOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const actionButtons = [
    { name: "call", icon: <Phone />, onClick: () => console.log("Call") },
    { name: "video", icon: <Video />, onClick: () => console.log("Video") },
    {
      name: "more",
      icon: <MoreHorizontal />,
      onClick: toggleDropdown,
      hasDropdown: true,
    },
  ];

  const dropdownOptions = [
    {
      icon: <Info size={18} />,
      label: "Profile",
      action: () => setContactCardOpen(true),
    },
    {
      icon: <BellOff size={18} />,
      label: "Mute",
      action: () => alert("Muted"),
    },
    {
      icon: <CircleOff size={18} />,
      label: "Block",
      action: () => alert("Blocked"),
    },
    {
      icon: <BrushCleaning size={18} />,
      label: "Clear",
      action: () => alert("Clear"),
    },
    {
      icon: <Trash size={18} />,
      label: "Delete",
      action: () => alert("Delete"),
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center sm:p-4">
        {/* profile */}
        <div
          className="flex gap-3 items-center cursor-pointer"
          onClick={() => setContactCardOpen(true)}
        >
          <img
            src="/dp.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <div className="flex flex-col">
            <div className="text-lg font-bold">Ravi Gupta</div>
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="flex sm:gap-4 gap-2 items-center relative"
          ref={dropdownRef}
        >
          {actionButtons.map((btn, index) => (
            <div
              key={index}
              className="bg-white/5 hover:bg-white/10 transition rounded-full p-2.5 cursor-pointer"
              onClick={btn.onClick}
            >
              {btn.icon}
            </div>
          ))}

          {/* Dropdown card */}
          {showDropdown && (
            <div className="absolute right-0 top-14 z-10 w-48 bg-[#2b2b2b] border border-gray-700 rounded-xl shadow-lg p-2">
              {dropdownOptions.map((opt, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    opt.action();
                    setShowDropdown(false);
                  }}
                  className="p-2 hover:bg-white/10 flex gap-4 text-sm text-white rounded-lg cursor-pointer"
                >
                  {opt.icon}
                  {opt.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Overlay & Panel */}
      <ContactCard
        isOpen={contactCardOpen}
        onClose={() => setContactCardOpen(false)}
        profile={{
          name: "Ravi Gupta",
          avatar: "/dp.jpg",
        }}
      />
    </>
  );
};

export default ChatHeader;
