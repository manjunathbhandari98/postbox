import { Meh, Mic, Paperclip, Send } from "lucide-react";

const MessageInput = () => {
  const buttons = [
    { name: "emoji", icon: <Meh /> },
    { name: "recorder", icon: <Mic /> },
    { name: "file", icon: <Paperclip /> },
  ];

  return (
    <div className="flex gap-3 items-center justify-between">
      <div className="flex w-full bg-gray-50/10 justify-between items-center rounded-2xl px-2 py-1">
        <input
          type="text"
          name="message"
          id="message"
          className="w-full sm:mx-2 mx-1 h-[45px] outline-0 border-0"
          placeholder="Type a message"
        />
        <div className="flex gap-3">
          {buttons.map((button, index) => (
            <div key={index} className="text-gray-50/60 cursor-pointer">
              {button.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="send rounded-full cursor-pointer p-3 bg-gradient-to-br from-[#2a2aff] via-[#2d57ff] to-[#2a5cff]">
        <Send />
      </div>
    </div>
  );
};

export default MessageInput;
