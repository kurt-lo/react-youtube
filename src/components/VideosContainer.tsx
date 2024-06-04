import { formattedDate } from "../utils/function";
import { Link, useNavigate } from 'react-router-dom';

export default function VideosContainer({ videos }: {videos: any[]}) {

  const navigate = useNavigate();

  if (!videos) return <p>Loading videos...</p>

  return (
    <>
      <section className="flex justify-center items-center mt-8 p-4 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos && videos.map((video, index) => (
            <Link to={`/${video?.id?.videoId}`} key={index} className="bg-black rounded-md hover:opacity-60"
              onClick={() => navigate(`/${video?.id?.videoId}`)}
            >
              <img src={video?.snippet?.thumbnails?.medium?.url} alt={video?.snippet?.title} className="rounded-md w-full" />
              <p className="text-gray-50 font-bold text-center">{video?.snippet?.title}</p>
              <p className="text-gray-50 text-center py-2 font-light">{video?.snippet?.channelTitle} • {formattedDate(video?.snippet?.publishTime)}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
