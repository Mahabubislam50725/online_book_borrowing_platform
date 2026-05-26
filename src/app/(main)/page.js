import Banner from "../component/shared/Banner";
import FeaturedSection from "../component/shared/Featured";
import LibraryStatisticsSection from "../component/shared/LibraryStatistics";
import MarqueeSection from "../component/shared/Marquee";
import PopularAuthorsSection from "../component/shared/PopularAuthors";

export default function Home() {
  return (
   <>
    <Banner />
    <MarqueeSection />
    <FeaturedSection />
    <PopularAuthorsSection />
    <LibraryStatisticsSection />
   </>
  );
}
