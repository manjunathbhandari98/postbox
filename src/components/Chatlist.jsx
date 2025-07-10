import { Ellipsis, LogOut, Plus, Search, Settings, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { chats } from "../data/chats";
import ChatCard from "./ChatList/ChatCard";
import Profile from "./ChatList/Profile";
import ContactList from "./Contacts/ContactsList";

const ChatList = ({ selectedChat }) => {
  const chatTabs = [
    { id: "all", label: "All" },
    { id: "read", label: "Read" },
    { id: "unread", label: "Unread" },
    { id: "favorite", label: "Favorite" },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [showDropdown, setShowDropdown] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
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

  const dropdownOptions = [
    {
      icon: <Settings size={18} />,
      label: "Settings",
      action: () => {
        alert("Settings");
      },
    },
    {
      icon: <Sun size={18} />,
      label: "Light Mode",
      action: () => alert("Muted"),
    },
    {
      icon: <LogOut size={18} />,
      label: "Logout",
      action: () => alert("Blocked"),
    },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <div
        className={`absolute p-4 space-y-6 top-0 left-0 w-full transition-all duration-300 ${
          contactOpen
            ? "opacity-0 -translate-x-full pointer-events-none"
            : "opacity-100 translate-x-0"
        }`}
      >
        <div className="flex relative items-center justify-between">
          <Profile />

          {/* Wrap dropdown trigger and content in a single ref */}
          <div className="relative" ref={dropdownRef}>
            <Ellipsis
              className="cursor-pointer text-gray-300"
              onClick={toggleDropdown}
            />

            {showDropdown && (
              <div className="absolute right-0 top-10 z-10 w-48 bg-[#2b2b2b] border border-gray-700 rounded-xl shadow-lg p-2 select-none">
                {dropdownOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      opt.action();
                      setShowDropdown(false);
                    }}
                    className={`p-2 ${
                      opt.label == "Logout" &&
                      "text-red-500 border-t-1 border-white/20 rounded-none"
                    }  flex gap-4 text-sm  rounded-lg cursor-pointer select-none`}
                  >
                    {opt.icon}
                    {opt.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search + Add Button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center w-full bg-[#000000] rounded-2xl px-4 py-1">
            <Search className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="ml-3 w-full py-2 bg-transparent outline-none text-sm placeholder:text-gray-400 text-white"
            />
          </div>
          <button className="p-2.5 cursor-pointer rounded-full bg-gradient-to-br from-[#2a2aff] via-[#5d7dff] to-[#2a5cff] hover:opacity-90">
            <Plus className="text-white" onClick={() => setContactOpen(true)} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-between text-sm font-semibold text-white border-b border-white/10">
          {chatTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 pb-2 uppercase transition-all ${
                activeTab === tab.id
                  ? "border-b-2 border-white"
                  : "text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chat List */}
        <div className="flex flex-col gap-1 max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-hide pr-1">
          {chats.map((chat, index) => (
            <ChatCard
              key={index}
              chat={chat}
              isActive={selectedChat?.id === chat.id}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full transition-all duration-300 ${
          contactOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <ContactList onClose={() => setContactOpen(false)} />
      </div>
    </div>
  );
};

export default ChatList;
