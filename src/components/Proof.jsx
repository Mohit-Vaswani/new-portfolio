import Projects from '../assets/projects.svg';
import Startup from '../assets/startup.svg';
import Technology from '../assets/Technology.svg';
import Passion from '../assets/passion.svg';
// import Image from "next/image"
import Stars from "./Stars";

const Proof = () => {
  return (
    <div className="w-full h-screen dark-blue-bg flex-all px-5 md:px-10">
      <div className="horizontal-line absolute top-0"></div>
      <Stars />
      <div className="proof-box grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="right-bottom-border flex flex-col justify-between p-5 light-white transition duration-300 gap-4 md:gap-0">
          <div className="whiteSvg">
            <img src={Projects} alt="emoji" className="" width={20} height={20} />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl mb-2">7+</h2>
            <p className="text-lg md:text-xl text-gray-400">Professional Projects Shipped</p>
          </div>
        </div>
        <div className="left-bottom-border flex flex-col justify-between p-5 light-white transition duration-300 gap-4 md:gap-0">
          <div className="whiteSvg">
            <img src={Startup} alt="emoji" className="" width={20} height={20} />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl mb-2">100%</h2>
            <p className="text-lg md:text-xl text-gray-400">Satisfaction</p>
          </div>
        </div>
        <div className="right-top-border flex flex-col justify-between p-5 light-white transition duration-300 gap-4 md:gap-0">
          <div className="whiteSvg">
            <img src={Technology} alt="emoji" className="" width={20} height={20} />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl mb-2">15+</h2>
            <p className="text-lg md:text-xl text-gray-400">Technologies Used</p>
          </div>
        </div>
        <div className="left-top-border flex flex-col justify-between p-5 light-white transition duration-300 gap-4 md:gap-0">
          <div className="whiteSvg">
            <img src={Passion} alt="emoji" className="" width={20} height={20} />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl mb-2">∞</h2>
            <p className="text-lg md:text-xl text-gray-400">Passion</p>
          </div>
        </div>
      </div>
      <div className="horizontal-line absolute bottom-0"></div>
    </div>
  );
}

export default Proof;
