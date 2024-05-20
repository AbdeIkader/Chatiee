import { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

export default function SearchInput() {

  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="h-[40px] flex items-center bg-white border rounded-md p-2 shadow-sm m-2">
        <button type='submit'>
          <FiSearch className="text-gray-500 ml-1" size={20} />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>

  );
}
