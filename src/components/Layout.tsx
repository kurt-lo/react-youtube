import Category from "./Category";
import Navbar from "./Navbar";
import VideosContainer from "./VideosContainer";
import useFetchSuggestedVideo from "../hooks/useFetchSuggestedVideo";
import useSearch from "../hooks/useSearch";
import useClickedCategory from "../hooks/useClickedCategory";

export default function Layout() {

  const { videos } = useFetchSuggestedVideo();
  const { searchResults, handleSearch } = useSearch();

  const { handleCategoryClick, clickedCategory } = useClickedCategory();

  let videoThatWillRender;

  if (searchResults.length > 0) {
    videoThatWillRender = searchResults
  } else if (clickedCategory.length > 0) {
    videoThatWillRender = clickedCategory
  } else {
    videoThatWillRender = videos
  }

  return (
    <section className="text-gray-50">
      {/* it needs to be props drilling para masama yung value na parameters which is yung result */}
      <Navbar handleSearch={handleSearch} />
      <Category handleCategoryClick={handleCategoryClick} />
      {/* render the suggested video if theres no item when use search a video or clicked category */}
      <VideosContainer
        videos={videoThatWillRender}
      />
    </section>
  )
}
