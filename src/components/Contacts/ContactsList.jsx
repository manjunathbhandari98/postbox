import { ArrowLeft, MoreVertical, User, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Contacts } from "../../data/contacts";
import ContactSearch from "./ContactSearch";

const ContactList = ({ onClose }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
      label: "Refresh",
      action: () => {
        alert("Refresh");
      },
    },
    {
      label: "Invite friends",
      action: () => alert("Muted"),
    },
  ];

  const actionButtons = [
    {
      name: "new-contacts",
      icon: <User />,
      label: "New Contact",
      action: () => {},
    },
    {
      name: "new-groups",
      icon: <Users />,
      label: "New Group",
      action: () => {},
    },
  ];

  const fitlerdContacts = Contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      contact.phone?.includes(searchTerm)
  );

  return (
    <div className="flex flex-col gap-5 p-4">
      {/* Top Section */}
      <div className="flex justify-between items-center" ref={dropdownRef}>
        <div className="flex gap-2">
          <ArrowLeft onClick={onClose} />
          <div className="">New Message</div>
        </div>
        <MoreVertical onClick={toggleDropdown} className="cursor-pointer" />
        {showDropdown && (
          <div className="absolute right-0 top-10 z-10 w-40 bg-gray-700 rounded-xl shadow-lg p-2 select-none">
            {dropdownOptions.map((opt, idx) => (
              <div
                key={idx}
                onClick={() => {
                  opt.action();
                  setShowDropdown(false);
                }}
                className={`p-2 flex gap-4 text-sm  rounded-lg cursor-pointer select-none`}
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SearchBar */}
      <ContactSearch onSearch={setSearchTerm} />

      {/* Buttons */}
      <div className="flex flex-col gap-6">
        {actionButtons.map((button, index) => (
          <div className="flex items-center cursor-pointer gap-4" key={index}>
            <div className="rounded-full p-3 bg-gray-600">{button.icon}</div>
            <div className="text-white">{button.label}</div>
          </div>
        ))}
      </div>

      <div className="flex px-2 py-3 flex-col gap-4">
        {Object.entries(
          [...fitlerdContacts]
            .sort((a, b) => a.name.localeCompare(b.name))
            .reduce((acc, contact) => {
              const firstLetter = contact.name[0].toUpperCase();
              if (!acc[firstLetter]) acc[firstLetter] = [];
              acc[firstLetter].push(contact);
              return acc;
            }, {})
        ).map(([letter, group]) => (
          <div key={letter} className="flex flex-col cursor-pointer gap-5">
            <div className="text-[15px] font-semibold text-white">{letter}</div>
            {group.map((contact, index) => (
              <div key={index} className="flex gap-4 items-center">
                <img
                  src={contact.avatar}
                  alt=""
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                  <div className="text-lg">{contact.name}</div>
                  <span className="text-sm text-gray-400">{contact.bio}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
