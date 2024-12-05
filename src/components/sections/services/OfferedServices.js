// import serviceSmallImage1 from "@/assets/img/service/service__small__img.png";
import serviceBgImage from "@/assets/img/service/service__bg__img.png";
import ServiceCard from "@/components/shared/cards/ServiceCard";
// import Image from "next/image";
import getAllServices from "@/libs/getAllServices";

const OfferedServices = ({ service, pb }) => {
  // const services = getAllServices()?.slice(6, 10);
  const services = getAllServices();
  return (
    <div
      className={`service sp_top_140 special__spacing ${
        pb ? pb : "sp_bottom_330"
      }`}
      id="service__area"
      style={{ background: `var(--pinkcolor) url('${serviceBgImage.src}')` }}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_90">
              {service === 2 ? (
                <div className="section__title__button">
                  <span>WHAT WE OFFER.</span>
                </div>
              ) : (
                ""
              )}
              <div className="section__title__heading">
                <h3>WHAT WE OFFER.</h3>
              </div>
              <div className="section__title__text">
                <p>
                  Our services are crafted to simplify your immigration process.
                  Whether it&apos;s visa assistance, career training, or legal
                  support, we are here to guide you at every step of your
                  overseas journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {services?.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
      {/* <div className="section__strock__line__animation">
        <Image
          className="ssla__animation service__line__animation"
          src={serviceSmallImage1}
          alt=""
        />
      </div> */}
    </div>
  );
};

export default OfferedServices;
