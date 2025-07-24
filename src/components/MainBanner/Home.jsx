import Main2 from "./Main2";
import { WavyBackground } from "./Background";

const OverlappingScrollPage = () => {
  return (
    <div className="relative">
      {/* MainBanner with sticky positioning */}
      <div className="sticky top-0 z-10">
        <WavyBackground />
      </div>

      {/* Main2 that will scroll over MainBanner */}
      <div className="relative z-20 mt-2">
        <Main2 />
      </div>
    </div>
  );
};

export default OverlappingScrollPage;
