import Link from "next/link";

const SupportFooter = () => {
  const items = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/",
    },
    {
      name: "Upskills",
      path: "/",
    },
    {
      name: "Scholarships",
      path: "/",
    },
    // {
    //   name: "Job Openings",
    //   path: "/",
    // },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div
      className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="footer__widget footer__support">
        <div className="footer__menu__title">
          <h6>QUICK LINKS :</h6>
        </div>
        <div className="footer__menu">
          <ul>
            {items?.map(({ name, path }, idx) => (
              <li key={idx}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportFooter;
