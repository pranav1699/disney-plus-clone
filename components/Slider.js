import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
        <section className="relative mt-4 shadow-2xl max-w-screen-2xl ">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={5000}
                >
                    <div className="relative">
                        <img loading="lazy" src="/images/slider-1.jpg" alt="" />
                        <div className="absolute text-base font-semibold top-10 mx-20 md:text-2xl md:font-bold md:top-20 md:mx-40">
                            <h1>Only on Disney+</h1>
                            <button className="px-4 py-1.5 mt-2 rounded-full bg-blue-600 hover:scale-105 transition transform duration-200 ease-out">Watch now</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img loading="lazy" src="/images/slider-2.jpg" alt="" />
                        <div className="absolute text-base font-semibold top-10 mx-20 md:text-2xl md:font-bold md:top-20 md:mx-40">
                            <h1>Only on Disney+</h1>
                            <button className="px-4 py-1.5 mt-2 rounded-full bg-blue-600 hover:scale-105 transition transform duration-200 ease-out">Watch now</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img loading="lazy" src="/images/slider-3.jpg" alt="" />
                        <div className="absolute text-base font-semibold top-10 mx-20 md:text-2xl md:font-bold md:top-20 md:mx-40">
                            <h1>Only on Disney+</h1>
                            <button className="px-4 py-1.5 mt-2 rounded-full bg-blue-600 hover:scale-105 transition transform duration-200 ease-out">Watch now</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
                        <div className="absolute text-base font-semibold top-10 mx-20 md:text-2xl md:font-bold md:top-20 md:mx-40">
                            <h1>Only on Disney+</h1>
                            <button className="px-4 py-1.5 mt-2 rounded-full bg-blue-600 hover:scale-105 transition transform duration-200 ease-out">Watch now</button>
                        </div>
                    </div>
                </Carousel>
            

        </section>
    )
}

export default Slider
