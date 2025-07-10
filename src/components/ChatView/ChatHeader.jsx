import { MoreHorizontal, Phone, Video } from "lucide-react";

const ChatHeader = () => {
  const actionButtons = [
    { name: "call", icon: <Phone /> },
    { name: "video", icon: <Video /> },
    { name: "more", icon: <MoreHorizontal /> },
  ];

  return (
    <div className="flex justify-between items-center">
      {/* profile */}
      <div className="flex gap-3 items-center justify-center">
        <img
          src="/dp.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
        <div className="flex flex-col">
          <div className="text-lg font-bold">Ravi Gupta</div>
          <span className="text-xs text-gray-300/50">Online</span>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-6">
        {actionButtons.map((buttons, index) => (
          <div
            key={index}
            className="bg-white/5 cursor-pointer rounded-full p-2.5"
          >
            {buttons.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHeader;
