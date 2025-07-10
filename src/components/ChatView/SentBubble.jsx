const SentBubble = ({ message }) => {
  return (
    <div className="flex my-4 items-end justify-end w-full">
      <div className="flex items-end gap-2 max-w-[70%]">
        <div className="bg-[#2a2a2a] text-white text-sm p-3 rounded-l-xl rounded-t-xl flex flex-col relative">
          <span>{message.text}</span>

          {/* Time + Status */}
          <div className="flex justify-end items-center gap-2 mt-1 text-[10px] text-gray-400">
            <span>{message.time}</span>
            {message.status === "sent" && (
              <span className="text-gray-400">✔</span>
            )}
            {message.status === "delivered" && (
              <span className="text-blue-400">✔✔</span>
            )}
            {message.status === "seen" && (
              <span className="text-green-400 font-semibold">✔✔</span>
            )}
          </div>
        </div>

        <img
          src="/dp.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border-2 border-white"
        />
      </div>
    </div>
  );
};

export default SentBubble;
