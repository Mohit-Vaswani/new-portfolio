// import Image from "next/image";
import gradient from "../assets/gradient.svg"
import logo from "../assets/logo.svg"
import magic from "../assets/magic.svg"
import stars from "../assets/stars.svg"
import feather from "../assets/feather.svg"

const Hero = () => {
  return (
    <main className="flex flex-col dark-blue-bg h-full lg:h-screen">
      <div className="flex-all relative bottom-20">
        <img src={logo} alt="image" width={1500} height={1500} className="opacity-40 mohit-image" />
        <img src={gradient} alt="image" width={1500} height={1500} className="absolute top-16" />
      </div>
      <div className="flex-all relative bottom-48 flex-wrap w-72 md:w-full mx-auto">
        <div className="glow-button">
          <img src={magic} alt="image" width={20} height={20} />
          <p className="text-sm xl:text-lg">Logic Builder</p>
        </div>
        <div className="glow-button">
          <img src={stars} alt="image" width={20} height={20} />
          <p className="text-sm xl:text-lg">Styling Maker</p>
        </div>
        <div className="glow-button">
          <img src={feather} alt="image" width={20} height={20} />
          <p className="text-sm xl:text-lg">Clean &lt;Writer /&gt;</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
