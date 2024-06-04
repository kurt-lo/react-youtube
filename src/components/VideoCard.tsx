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

    let reactPlayerSizeWidth: string;
    let reactPlayerSizeHeight: string;

    if (window.innerWidth > 1536) {
        reactPlayerSizeWidth = '1400px'
        reactPlayerSizeHeight = '700px'
    } else if (window.innerWidth >= 1280 && window.innerWidth <= 1536) {
        reactPlayerSizeWidth = '1000px'
        reactPlayerSizeHeight = '700px'
    } else if (window.innerWidth >= 1024 && window.innerWidth <= 1279) {
        reactPlayerSizeWidth = '800px'
        reactPlayerSizeHeight = '600px'
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
        reactPlayerSizeWidth = '100%'
        reactPlayerSizeHeight = '600px'
    } else if (window.innerWidth >= 640 && window.innerWidth <= 767) {
        reactPlayerSizeWidth = '600px'
        reactPlayerSizeHeight = '500px'
    } else if (window.innerWidth <= 639) {
        reactPlayerSizeWidth = '100%'
        reactPlayerSizeHeight = '300px'
    }

    return (
        <>
            <Navbar handleSearch={handleSearch} />
            <div className="flex flex-col xl:flex-row lg:justify-around px-2">
                {videoDetails.map((video) => (
                    <div key={video?.id} className="flex flex-col lg:w-[75%] lg:min-w-[75%]">
                        <div className="flex lg:mx-auto">
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls={true} width={reactPlayerSizeWidth} height={reactPlayerSizeHeight} />
                        </div>
                        <div className="text-gray-50 text-left ">
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
                <div className="pt-4 lg:pt-0 lg:w-[18%] lg:min-w-[18%]">
                    <SuggestedVideos id={id} />
                </div>
            </div>
        </>
    )
}
