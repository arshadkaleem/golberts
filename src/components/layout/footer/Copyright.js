import Link from "next/link";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="copyright__left">
            <p>
              Copyright © 2024 <Link href="/">Globerts.</Link> All Right
              Reserved
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="copyright__right">
            {/* <ul>
              <li>
                <Link href="#">Privacy & Policy ||</Link>
              </li>{" "}
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul> */}
            <span
              className=" copyright__right"
              title="Best Website Design and Development Company"
            >
              Designed and Developed by{" "}
              <Link href="https://mokshasolutions.com" target="_blank">
                <span className="">Moksha Solutions</span>
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
