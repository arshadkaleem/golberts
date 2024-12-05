"use client";
import Image from "next/image";
import testimonialImage1 from "@/assets/img/testimonial/testimonial__1.png";
import testimonialImage2 from "@/assets/img/testimonial/testimonial__2.png";
import testimonialSmallImage2 from "@/assets/img/testimonial/testimonial__small__img__2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialSlide from "@/components/shared/testimonials/TestimonialSlide";
import { Navigation } from "swiper/modules";

const Testimonials = ({ type }) => {
  const slides = [
    {
      id: 1,
      name: "Satish Jadhav",
      desig: "Software Engineer",
      desc: "“I was overwhelmed by the visa application process, but Globerts Visa & Immigration Services made it seamless. Their professional guidance and attention to detail helped me secure my work visa without any hassles. Their team truly cares about their clients' success!”",
    },
    {
      id: 2,
      name: "Fahad Ahmed",
      desig: "Master's Student",
      desc: "“Globerts Visa & Immigration Services is a lifesaver! Their training sessions prepared me for my overseas education journey, and their connection with experienced immigration lawyers resolved my complex case effortlessly. I highly recommend their services for anyone pursuing their dreams abroad.”",
    },
    {
      id: 3,
      name: "Gopal Reddy",
      desig: "Entrepreneur",
      desc: "“Thanks to Globerts Visa & Immigration Services, I received my family visa without any delays. Their dedication to legal processes and their focus on avoiding refusals gave me complete peace of mind. They go above and beyond for their clients.”",
    },
  ];
  return (
    <div
      className={`testimonial  ${
        type === 2 ? "sp_bottom_140" : "sp_bottom_110 sp_top_100"
      }`}
      id="testimonial__area"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_90">
              <div className="section__title__heading">
                <h3>HEAR FROM THOSE WE&apos;VE HELPED</h3>
              </div>
              <div className="section__title__text">
                <p>
                  The trust and satisfaction of our clients fuel our passion for
                  providing reliable and ethical immigration services.
                  Here&apos;s what they have to say about their seamless
                  experiences with us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-3 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="testimonial__img" data-tilt>
              <Image src={testimonialImage1} alt="" />
              <div className="testimonial__img__2">
                <Image src={testimonialImage2} alt="" />
              </div>
              <div className="testimonial__small__icon">
                <Image src={testimonialSmallImage2} alt="" />
              </div>
            </div>
          </div>
          <div
            className="col-xl-9 col-lg-9 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="testimonial__inner position-relative">
              <Swiper
                className="testimonial__slider__active position-static"
                slidesPerView={1}
                grabCursor={true}
                navigation={true}
                modules={[Navigation]}
              >
                {slides?.map((slide, idx) => (
                  <SwiperSlide
                    className="testimonial__single__slider"
                    key={idx}
                  >
                    <TestimonialSlide slide={slide} />
                  </SwiperSlide>
                ))}
                <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows slider__controls__arrows--2">
                  <div className="swiper-button-next arrow-btn arrow-btn-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.5 12H20.33"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="swiper-button-prev arrow-btn arrow-btn-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.57031 5.92999L3.50031 12L9.57031 18.07"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5 12H3.67"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* <div className="swiper-pagination"></div> --> */}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
