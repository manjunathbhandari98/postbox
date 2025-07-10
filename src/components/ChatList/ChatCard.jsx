import TypingText from "./TypingText";

const ChatCard = ({ chat, isActive }) => {
  return (
    <div
      className={`p-2 flex justify-between items-start my-3 rounded-lg cursor-pointer transition-all
      ${isActive ? "bg-[#2a2aff]/10" : "hover:bg-white/5"}`}
    >
      {/* Avatar + Info */}
      <div className="flex items-center gap-3 relative">
        <img
          src={chat.avatar}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        {chat.isOnline && (
          <span className="absolute top-0 left-10 w-2.5 h-2.5 bg-green-500 rounded-full border border-black" />
        )}

        <div className="flex flex-col">
          <span className="text-white font-medium text-[16px]">
            {chat.name}
          </span>
          {chat.isTyping ? (
            <TypingText />
          ) : (
            <span className="text-sm text-gray-400 truncate max-w-[180px]">
              {chat.lastMessage}
            </span>
          )}
        </div>
      </div>

      {/* Timestamp + Unread Badge */}
      <div className="flex flex-col items-end justify-between h-full text-sm gap-1">
        <span className="text-gray-400/50 text-xs">{chat.timestamp}</span>
        {chat.unread > 0 && (
          <div className="w-6 h-6 text-xs bg-gradient-to-br from-[#2a2aff] via-[#2d57ff] to-[#2a5cff] text-white rounded-full flex items-center justify-center font-medium">
            {chat.unread}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatCard;
