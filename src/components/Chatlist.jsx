import { Ellipsis, Plus, Search } from "lucide-react";
import { useState } from "react";
import { chats } from "../data/chats";
import ChatCard from "./ChatList/ChatCard";
import Profile from "./ChatList/Profile";

const ChatList = ({ selectedChat, onSelectChat }) => {
  const chatTabs = [
    { id: "all", label: "All" },
    { id: "read", label: "Read" },
    { id: "unread", label: "Unread" },
    { id: "favorite", label: "Favorite" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Profile />
        <Ellipsis className="cursor-pointer text-gray-300" />
      </div>

      {/* Search + Add Button */}
      <div className="flex items-center gap-3">
        <div className="flex items-center w-full bg-[#000000] rounded-2xl px-4 py-2">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="ml-3 w-full bg-transparent outline-none text-sm placeholder:text-gray-400 text-white"
          />
        </div>
        <button className="p-2.5 cursor-pointer rounded-full bg-gradient-to-br from-[#2a2aff] via-[#5d7dff] to-[#2a5cff] hover:opacity-90">
          <Plus className="text-white" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-between text-sm font-semibold text-white border-b border-white/10">
        {chatTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 pb-2 uppercase transition-all ${
              activeTab === tab.id ? "border-b-2 border-white" : "text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Chat List */}
      <div className="flex flex-col gap-2 max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-hide pr-1">
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
  );
};

export default ChatList;
