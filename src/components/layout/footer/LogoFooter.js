import Image from "next/image";
import Link from "next/link";
import logoImag1 from "@/assets/img/logo/Logo_1.png";
import logoImag2 from "@/assets/img/logo/Logo_2.png";

const LogoFooter = ({ style }) => {
  return (
    <div
      className={`col-xl-4 ${!style ? "col-lg-6" : "col-lg-4"} col-md-6`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className="footer__widget footer__left position-relative "
        // style={{ zIndex: 10 }}
      >
        <div className="footer__logo">
          {/* {style === 2 ? (
            <>
              <Image
                src={logoImag1}
                alt=""
                className="logo-image1 footer-logo-size"
              />
              <Image
                src={logoImag2}
                alt=""
                className="logo-image2 footer-logo-size"
              />
            </>
          ) : ( */}
          <Image src={logoImag1} className="footer-logo-size" alt="" />
          {/* )} */}
        </div>
        <div className="footer__text">
          <p>
            Globerts is dedicated to guiding applicants through the complexities
            of obtaining various types of visas. With a mission to provide legal
            and correct guidance, we specialize in training sessions for
            overseas careers and education.
          </p>
        </div>
        <div className="footer__icon">
          <ul>
            <li>
              <Link href="https://www.facebook.com">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.skype.com">
                <i className="icofont-skype"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com">
                <i className="icofont-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;