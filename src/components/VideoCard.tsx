import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReactPlayer from "react-player/youtube";
import { getApi } from "../config";
import { formattedDate, formattedNumber } from "../utils/function";
import SuggestedVideos from "./SuggestedVideos";
import Navbar from "./Navbar";
import useSearch from "../hooks/useSearch";

export default function VideoCard() {

    const { handleSearch } = useSearch();
    const [videoDetails, setVideoDetails] = useState<any[]>([]);
    const params = useParams();

    // ginawa kong dalawa kasi may id na videoId at may playlistId
    const id = params.videoId || params.playlistId

    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                const api = await getApi('videos', '', '', 'contentDetails,snippet,statistics', id);
                setVideoDetails(api);
            } catch (error) {
                console.log(error)
            }
        }
        fetchVideoDetails();
    }, [id])
    
    if (!videoDetails) return <p>Loading video...</p>
    console.log(videoDetails)
    return (
        <>
            <Navbar onSearch={handleSearch} />
            <div className="flex flex-col md:flex-row">
                {videoDetails.map((video) => (
                    <div key={video?.id} className="flex flex-col w-[80%] min-w-[80%] px-[10rem]">
                        <div>
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls={true} width={1200} height={600} />
                        </div>
                        <div className="text-gray-50 text-left">
                            <div className="py-4">
                                <h2 className="text-xl">{video?.snippet?.title}</h2>
                                <h3>{video?.snippet?.channelTitle}</h3>
                            </div>
                            <div className=" bg-slate-800 rounded-3xl p-4">
                                <div className="flex gap-4">
                                    <p>{formattedNumber(video?.statistics?.viewCount)} views</p>
                                    <p>{formattedNumber(video?.statistics?.likeCount)} liked</p>
                                </div>
                                <div>
                                    <p>{formattedDate(video?.snippet?.publishedAt)}</p>
                                    <p className="pt-4">{video?.snippet?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="w-[20%] min-w-[20%]">
                    <SuggestedVideos id={id} />
                </div>
            </div>
        </>
    )
}
