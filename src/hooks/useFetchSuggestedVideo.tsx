import { useState, useEffect } from "react";
import { getApi } from "../config";

export default function useFetchSuggestedVideo(id?: string | undefined) {

  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      setIsLoading(true);
      try {
        const api = await getApi('search', '', '7ghhRHRP6t4', 'id,snippet', '')
        setVideos(api)
        setIsLoading(false);
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideo();
  }, [id]) // this id is from Video Card component that passed to suggested video component and gets by the hook using parameter

  return {
    videos,
    isLoading,
  }
}
