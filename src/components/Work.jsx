import Stars from "./Stars";
import Project1 from "../assets/project-mockup/4.png";
import Project2 from "../assets/project-mockup/2.png";
import Project3 from "../assets/project-mockup/3.png";
import Project4 from "../assets/project-mockup/1.png";
import Project5 from "../assets/project-mockup/5.png";
import Project6 from "../assets/project-mockup/6.png";
// import Image from "next/image"

const Work = () => {
  return (
    <div className="w-full h-full dark-blue-bg mx-auto">
      <div className="horizontal-line absolute top-0"></div>
      <h2 className=" text-3xl md:text-7xl font-bold text-center py-16 pb-5">WORK 🧑‍💻</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 px-5 md:p-20 gap-x-10">
        <div className="flex flex-col gap-4">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <img src={Project1} className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-xl md:text-3xl font-bold mb-2">Whoa Crm</h2>
              <p>WhoaCRM is a cutting-edge customer relationship management (CRM) platform that takes your business interactions to a whole new level. Designed to revolutionize the way you manage your customer data, WhoaCRM offers a comprehensive suite of features and tools to streamline your sales, marketing, and support processes. You can call it a competitor of Jira.</p>
            </ul>
            <div className="glow-button h-10">2023</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:translate-y-20">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <img src={Project2} className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-xl md:text-3xl font-bold mb-2">Substance</h2>
              <p>Substance is a cutting-edge project management tool designed specifically for creative professionals and designers. With its intuitive interface and powerful features, Substance streamlines the design process, enhances collaboration, and ensures seamless project delivery.</p>
            </ul>
            <div className="glow-button w-80 h-10">2023</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <img src={Project3} className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-xl md:text-3xl font-bold mb-2">Florida Family App</h2>
              <p>The Florida Family App is a powerful team management tool designed to streamline collaboration and communication within families. Whether you are managing a busy household or planning a family vacation, this app provides a comprehensive set of features to keep everyone organized and connected.</p>
            </ul>
            <div className="glow-button w-80 h-10">2023</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:translate-y-20">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <img src={Project4} className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-xl md:text-3xl font-bold mb-2">Beatrix</h2>
              <p>Beatrix is an innovative live streaming game platform that brings together gamers and viewers in an immersive and interactive gaming experience. With Beatrix, players can showcase their gaming skills and connect with a vibrant community of gamers from around the world.</p>
            </ul>
            <div className="glow-button w-80 h-10">2023</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <img src={Project5} className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-xl md:text-3xl font-bold mb-2">The Health Network</h2>
              <p>The Health Network is a comprehensive and efficient medical staff management tool designed to streamline operations and enhance collaboration within healthcare organizations. This powerful software solution is specifically tailored to meet the unique needs of medical facilities, ranging from hospitals and clinics to research institutes and private practices.</p>
            </ul>
            <div className="glow-button w-80 h-10">2022</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:translate-y-20">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <img src={Project6} className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-xl md:text-3xl font-bold mb-2">Code Planet</h2>
              <p>This is my first project which I got in my first internship to make a multipage website for an ed-tech startup. This is the turning point for my career from which I learn to efficiently use different technologies in a single project.</p>
            </ul>
            <div className="glow-button w-80 h-10">2022</div>
          </div>
        </div>
      </div>
      <Stars />
     
    </div>
  );
}

export default Work;
