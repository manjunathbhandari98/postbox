const RecievedBubble = () => {
  return (
    <div className="flex gap-2 items-end absolute left-0 max-w-1/3">
      <img
        src="/dp.jpg"
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover border-2 border-white"
      />
      <div className="bg-blue-400 flex flex-col gap-1 p-3 rounded-r-xl rounded-t-xl relative text-sm text-white">
        <span>Recieved message here...</span>
      </div>
    </div>
  );
};

export default RecievedBubble;
