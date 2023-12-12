import img1 from "../../../assets/img/carousel-1.jpg";
import img2 from "../../../assets/img/carousel-2.jpg";
import img3 from "../../../assets/img/carousel-1.jpg";
import img4 from "../../../assets/img/carousel-2.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full  rounded-lg" />

        <div className="absolute rounded flex h-full items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="text-white w-1/2 pl-12 space-y-7 ">
            <div data-aos="zoom-in-down">
              <h2 className="text-6xl ">
                {" "}
                Find The Best Startup Job That Fit You{" "}
              </h2>
            </div>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>

        <div className="absolute flex transform mr-5 right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle mr-5 hover:bg-green-500">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle  hover:bg-green-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg " />
        <div className="absolute rounded flex h-full items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="text-white w-1/2 pl-12 space-y-7 ">
            <h2 className="text-6xl ">
              {" "}
              Find The Best Startup Job That Fit You
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <div data-aos="fade-right" data-aos-offset="300">
                <button className="btn btn-success text-xl mr-3">
                  Search A Job
                </button>
              </div>
              <button className="btn btn-info">Find A Talent</button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform mr-5 right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle mr-5 hover:bg-green-500">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:bg-green-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute rounded flex h-full items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="text-white w-1/2 pl-12 space-y-7 ">
            <h2 className="text-6xl ">
              {" "}
              Find The Best Startup Job That Fit You
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="absolute flex transform mr-5 right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle mr-5 hover:bg-green-500">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:bg-green-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute rounded flex h-full items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="text-white w-1/2 pl-12 space-y-7 ">
            <h2 className="text-6xl ">
              {" "}
              Find The Best Startup Job That Fit You
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="absolute flex transform mr-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle mr-5 hover:bg-green-500">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-green-500">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
