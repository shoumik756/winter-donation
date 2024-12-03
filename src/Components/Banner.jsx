import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full relative">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/M9Y8vGY/donation3.jpg"
                    className="w-full object-cover h-[500px]"
                    alt="Snowy Winter Scene"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
                    <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInLeft">Support Helpless People In This Winter</h1>
                    <p className="text-lg animate__animated animate__fadeInLeft">Your donations provide  blanket, jacket and sweater for those in need.</p>
                </div>
                <div className="absolute left-5 right-5 bottom-12 gap-5 flex -translate-y-1/2 transform justify-center">
                    <a href="#slide3" className="btn btn-circle bg-[#ff6f0f] text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#ff6f0f] text-white">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/fd65mVK/donation4.jpg"
                    className="w-full object-cover h-[500px]"
                    alt="Winter Community Gathering"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
                <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInLeft">Support Helpless People In This Winter</h1>
                <p className="text-lg animate__animated animate__fadeInLeft">Your donations provide  blanket, jacket and sweater for those in need.</p>
                </div>
                <div className="absolute left-5 right-5 bottom-12 gap-5 flex -translate-y-1/2 transform justify-center">
                    <a href="#slide1" className="btn btn-circle bg-[#ff6f0f] text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#ff6f0f] text-white">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/2vmwJK2/donate1.jpg"
                    className="w-full object-cover h-[500px]"
                    alt="Children Playing in Snow"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
                <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInLeft">Support Helpless People In This Winter</h1>
                <p className="text-lg animate__animated animate__fadeInLeft">Your donations provide  blanket, jacket and sweater for those in need.</p>
                </div>
                <div className="absolute left-5 right-5 bottom-12 gap-5 flex -translate-y-1/2 transform justify-center">
                    <a href="#slide2" className="btn btn-circle bg-[#ff6f0f] text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#ff6f0f] text-white">❯</a>
                </div>
            </div>
        </div>




    );
};

export default Banner;