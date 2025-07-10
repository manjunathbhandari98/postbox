const ContactSearch = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 rounded-2xl outline-0 border-0 bg-gray-700/50"
        placeholder="Search name or number"
      />
    </div>
  );
};

export default ContactSearch;
