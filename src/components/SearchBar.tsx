import { useEffect, useRef, useState } from "react"
import { IoSearch } from "react-icons/io5";
import { getApi } from "../config";
import { Search } from "../types";

export default function SearchBar({ handleSearch }: Search) {

    const searchRef = useRef<HTMLInputElement>(null);
    const [searchVideos, setSearchVideos] = useState<any[]>([]);

    const searchFunc = async () => {
        try {
            const searchValue = searchRef.current?.value;
            if(searchValue?.trim() === '') return; // if theres no user input just return so that there will be no error

            const api = await getApi('search', searchValue, '', 'snippet,id', '');
            setSearchVideos(api)
            console.log(searchValue)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (typeof handleSearch === 'function') { // Check if onSearch is a function
            handleSearch(searchVideos);
        }
    }, [handleSearch, searchVideos])

    return (
        <section className="flex justify-center text-slate-900">
            <div className="relative">
                <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search"
                    className="py-[.5rem] px-[1rem] md:w-[30rem] rounded-3xl"
                />
                <IoSearch
                    onClick={searchFunc}
                    size={24}
                    className="text-slate-900 absolute top-2 right-4 cursor-pointer hover:text-slate-600"
                />
            </div>
        </section>
    )
}
