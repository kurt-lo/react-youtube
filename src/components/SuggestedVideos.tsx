import { Link, useNavigate } from "react-router-dom";
import { formattedDate } from "../utils/function";
import useFetchSuggestedVideo from "../hooks/useFetchSuggestedVideo";

export default function SuggestedVideos({ id }: { id: string | undefined}) {

    const navigate = useNavigate();
    const { videos ,isLoading } = useFetchSuggestedVideo(id);

    if (!videos) return <p>Loading videos...</p>

    return (
        <nav className="grid">
            {isLoading && <p>Loading suggested videos...</p>}
            {!isLoading && videos && videos.map((video, index) => (
                <Link to={`/${video?.id?.videoId}`} key={index} className="bg-black mb-2 hover:opacity-60 rounded-md"
                    onClick={() => navigate(`/${video?.id?.videoId}`)}
                >
                    <img src={video?.snippet?.thumbnails?.medium?.url} alt={video?.snippet?.title} className="rounded-md w-full" />
                    <p className="text-gray-50 font-bold text-center">{video?.snippet?.title}</p>
                    <p className="text-gray-50 text-center py-2 font-light">{video?.snippet?.channelTitle} • {formattedDate(video?.snippet?.publishTime)}</p>
                </Link>
            ))}
        </nav>
    )
}
