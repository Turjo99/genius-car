import React from "react";
import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
import "../Components/Banner.css";

const Banner = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="carousel mx-auto h-auto">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="carousel-img">
            <img src={img3} className="w-full " />
          </div>

          <div className="absolute flex  transform -translate-y-1/2 left-20 right-5 top-1/2">
            <div className="">
              <h1 className="text-white text-7xl font-extrabold mb-8">
                Affordable <br /> Price for car <br /> Servicing
              </h1>
              <p className="text-white text-3xl mb-8">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="d-flex justify-start">
                <button className="btn btn-outline btn-primary px-10">
                  Button
                </button>
                <button className="btn btn-outline btn-primary px-10">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-8">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <div className="carousel-img">
            <img src={img3} className="w-full " />
          </div>

          <div className="absolute flex  transform -translate-y-1/2 left-20 right-5 top-1/2">
            <div className="">
              <h1 className="text-white text-7xl font-extrabold mb-8">
                Affordable <br /> Price for car <br /> Servicing
              </h1>
              <p className="text-white text-3xl mb-8">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="d-flex justify-start">
                <button className="btn btn-outline btn-primary px-10">
                  Button
                </button>
                <button className="btn btn-outline btn-primary px-10">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-8">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <div className="carousel-img">
            <img src={img3} className="w-full " />
          </div>

          <div className="absolute flex  transform -translate-y-1/2 left-20 right-5 top-1/2">
            <div className="">
              <h1 className="text-white text-7xl font-extrabold mb-8">
                Affordable <br /> Price for car <br /> Servicing
              </h1>
              <p className="text-white text-3xl mb-8">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="d-flex justify-start">
                <button className="btn btn-outline btn-primary px-10">
                  Button
                </button>
                <button className="btn btn-outline btn-primary px-10">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-8">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full ">
          <div className="carousel-img">
            <img src={img3} className="w-full " />
          </div>

          <div className="absolute flex  transform -translate-y-1/2 left-20 right-5 top-1/2">
            <div className="">
              <h1 className="text-white text-7xl font-extrabold mb-8">
                Affordable <br /> Price for car <br /> Servicing
              </h1>
              <p className="text-white text-3xl mb-8">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="d-flex justify-start">
                <button className="btn btn-outline btn-primary px-10">
                  Button
                </button>
                <button className="btn btn-outline btn-primary px-10">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-8">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
