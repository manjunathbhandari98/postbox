const RecievedBubble = ({ message }) => {
  return (
    <div className="flex items-end justify-start w-full">
      <div className="flex items-end gap-2 max-w-[70%]">
        <img
          src="/dp.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border-2 border-white"
        />
        <div className="bg-gradient-to-br from-[#2a2aff] via-[#2d57ff] to-[#2a5cff] text-white text-sm p-3 rounded-r-xl rounded-t-xl flex flex-col">
          <span>{message.text}</span>
        </div>
      </div>
    </div>
  );
};

export default RecievedBubble;
