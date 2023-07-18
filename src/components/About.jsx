import Stars from "./Stars"


const About = () => {
    return (
        <div className="w-full h-full sm:h-screen dark-blue-bg flex-all2 relative aboutbg py-20 lg:py-0">
            <div className="horizontal-line absolute top-0"></div>
            <div className="glow-button">
                As a developer, My goal is to do 👇
            </div>
            <h2 className="text-5xl md:text-7xl text-center">Work That Looks <br /> Premium</h2>
            <p className="text-center w-500 mt-5 md:mx-auto px-10 text-lg sm:text-xl">
                I like to develop products with high-end design and functionalities that stand out in the market and works suuuuper smoothly.
            </p>
            <div className="horizontal-line absolute bottom-0"></div>
            <Stars/>
        </div>
    )
}

export default About