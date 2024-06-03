import { useState } from "react"

export default function useSearch() {

    const [searchResults, setSearchResults] = useState<any[]>([]);

    // function for search bar to display in the ui if user type something in search bar
    const handleSearch = (results: any[]) => {
        setSearchResults(results)
    }

    return {
        searchResults,
        handleSearch
    }
}
