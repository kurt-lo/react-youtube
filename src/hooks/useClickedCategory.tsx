import { getApi } from "../config";

export default function useClickedCategory<T>(setClickedCategory: React.Dispatch<React.SetStateAction<T[]>>) {

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
    }
}
