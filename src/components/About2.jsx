// // import Image from "next/image"
import Stars from "./Stars"

const About2 = () => {
  return (
    <div className="w-full h-full dark-blue-bg flex-all py-10 relative">
      <div className="shootingstar"/>
        <div className="w-9/12 sm:w-8/12 xl:w-4/12 flex gap-5 flex-col">
        {/* <Image src="/img.jpg" alt="My Image" width={70} height={70} className="rounded-full"/> */}
        <div className="text-lg lg:text-xl">
            <p>Hey I am Mohit 😎</p> <br />
            <p>I am a Frontend Developer from India who is passionate about coding and building creative solutions. I started my journey by mastering HTML, CSS, and JavaScript. As I advanced, I enthusiastically adopted ReactJS as my main framework for projects.</p><br />
            <p>Currently, I am focused on utilizing NextJS to develop cutting-edge applications. I take pride in turning ideas into functional and visually appealing user interfaces. Always seeking growth and new challenges, I stay updated with the latest trends and technologies in frontend development.</p> <br />
            <p>I thrive in collaborative team environments and communicate effectively with designers, backend developers, and other team members. I would be a valuable asset to any frontend development team.</p>
        </div>
        </div>
        <Stars/>
        
        <div className="horizontal-line absolute bottom-0"></div>
    </div>
  )
}

export default About2