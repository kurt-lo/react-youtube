import { useState } from "react";
import { getApi } from "../config";

export default function useClickedCategory() {

    const [clickedCategory, setClickedCategory] = useState<any[]>([]);

    const handleCategoryClick = async (query: string) => {
        try {
            const api = await getApi('search', query, '', 'snippet,id', '');
            setClickedCategory(api)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        handleCategoryClick,
        clickedCategory
    }
}
