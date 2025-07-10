const Profile = () => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg shadow-sm cursor-pointer">
      <img
        src="/dp.jpg" // Your base64 or image URL here
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover border-2 border-white"
      />
      <div className="text-white">
        <div className="font-semibold text-lg leading-tight">Rakesh Gupta</div>
      </div>
    </div>
  );
};

export default Profile;
