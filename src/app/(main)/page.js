import Banner from "../component/shared/Banner";
import FeaturedSection from "../component/shared/Featured";
import MarqueeSection from "../component/shared/Marquee";

export default function Home() {
  return (
   <>
    <Banner />
    <MarqueeSection />
    <FeaturedSection />
   </>
  );
}
