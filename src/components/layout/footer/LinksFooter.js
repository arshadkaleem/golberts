import Link from "next/link";

const LinksFooter = ({ style }) => {
  const items = [
    {
      name: "Test Prepartions",
      path: "/",
    },
    {
      name: "Overseas Migration",
      path: "/",
    },
    {
      name: "Career Placement",
      path: "/",
    },
    {
      name: "Education",
      path: "/",
    },
    {
      name: "Travel & Tourism",
      path: "/",
    },
    {
      name: "Immigration Services",
      path: "/",
    },
    {
      name: "Business Travel",
      path: "/",
    },
    {
      name: "Scholarship Programs and Learning",
      path: "/",
    },
  ];
  return (
    <div
      className={`col-xl-4 ${
        !style ? "col-lg-6" : "col-lg-4"
      } col-md-4 col-sm-6`}
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div className="footer__widget footer__quick">
        <div className="footer__menu__title">
          <h6>SERVICES :</h6>
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

export default LinksFooter;
