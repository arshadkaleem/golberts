import Social from "@/components/shared/socials/Social";
import Link from "next/link";
import React from "react";

const Copyright2 = ({ style, copyright }) => {
  return (
    <div
      className={`copyright copyright--${
        style === 3 && !copyright ? style + 1 : copyright === 2 ? 2 : style
      } `}
    >
      <div className="container">
        <div className="row row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className={`copyright__left`}>
              <p>
                Copyright © 2024 <Link href="/">Globerts.</Link> All Right
                Reserved
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            {style === 4 ? (
              <Social type="copyright" />
            ) : (
              <div className="copyright__right">
                {/* <ul>
                  <li>
                    <a href="#">Privacy & Policy</a>
                  </li>{" "}
                  <li>
                    <a href="#">||</a>
                  </li>{" "}
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul> */}
                <span
                  className="copyright__right"
                  title="Best Website Design and Development Company"
                >
                  Designed and Developed by{" "}
                  <Link href="https://mokshasolutions.com" target="_blank">
                    <span className="">Moksha Solutions</span>
                  </Link>{" "}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {style === 4 ? (
        <div className="copyright__arrow">
          <a href="#">
            <i className="icofont-arrow-up"></i>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Copyright2;
