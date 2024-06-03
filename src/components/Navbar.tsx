import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FiYoutube } from "react-icons/fi";
import { PiFinnTheHuman } from "react-icons/pi";
import { Search } from "../types";

export default function Navbar({ handleSearch }: Search) {
    const navigate = useNavigate();

    return (
        <nav className="flex items-center justify-around p-4 pt-8">
            <FiYoutube
                onClick={() => navigate('/')}
                className="text-white float-left cursor-pointer hover:text-slate-500" size={50} />
            <SearchBar handleSearch={handleSearch} />
            <PiFinnTheHuman
                onClick={() => alert('Hi, Enjoy Watching!')}
                className="text-white float-left cursor-pointer hover:text-slate-500" size={50} />
        </nav>
    )
}
