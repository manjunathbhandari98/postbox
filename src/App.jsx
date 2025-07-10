// App.jsx or a parent component
import { useState } from "react";
import ChatList from "./components/Chatlist";
import ChatView from "./components/Chatview";

function App() {
  const [selectedChat, setSelectedChat] = useState([]);

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Chat List */}
      <div className="md:w-1/3 sm:w-1/2 w-full min-h-screen bg-[#1B1A1F] text-white overflow-y-auto scrollbar-hide">
        <ChatList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
      </div>

      {/* Chat View */}
      <div className="md:w-2/3 sm:w-1/2 w-full min-h-screen bg-[#060607] text-white hidden sm:block">
        {selectedChat ? (
          <ChatView
            chat={selectedChat}
            onBack={() => setSelectedChat(null)} // optional back button for mobile
          />
        ) : (
          <div className="flex flex-col justify-center items-center h-full text-center px-4">
            <div className="text-4xl mb-4">📦 Postbox</div>
            <p className="text-lg text-gray-400">
              Select a chat to start messaging.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
