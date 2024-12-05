import Link from "next/link";
import ItemMobile from "./ItemMobile";
import { useHeaderContex } from "@/providers/HeaderContex";

const NavbarMobile = () => {
  const { isOnepage, style, headerType, isCollection, home } =
    useHeaderContex();
  const mobileItems = [
    {
      name: "Home",

      path: "/",
      dropdown: null,
      toggler: false,
    },
    {
      name: "About",

      path: "/",
      dropdown: null,
      toggler: false,
    },
    {
      name: "Services",
      toggler: true,
      path: "/",
      dropdown: true,
      nestedDropdown: true,
      dropdownItems: [
        {
          name: "Test Prepartions",
          path: "/",
          toggler: true,
          dropdown: true,
          items: [
            {
              name: "TOEFL",
              path: "/",
            },
            {
              name: "IELTS",
              path: "/",
            },
            {
              name: "PTE",
              path: "/",
            },
            {
              name: "Duolingo",
              path: "/",
            },
            {
              name: "GRE",
              path: "/",
            },
            {
              name: "GMAT",
              path: "/",
            },
            {
              name: "SAT",
              path: "/",
            },
            {
              name: "ACT",
              path: "/",
            },
            {
              name: "CAEL",
              path: "/",
            },
            {
              name: "CELPIP",
              path: "/",
            },
          ],
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
      ],
    },

    // {
    //   name: "Job Openings",
    //   toggler: false,
    //   path: "/",
    //   dropdown: null,
    // },
    {
      name: "Upskills",
      toggler: false,
      path: "/",
      dropdown: null,
    },
    {
      name: "Scholarships",
      toggler: false,
      path: "/",
      dropdown: null,
    },
    {
      name: "Contact",
      toggler: false,
      path: "/contact",
      dropdown: null,
    },
  ];
  return (
    <nav className="offcanvas__menu">
      <ul className="offcanvas__menu_ul">
        {mobileItems?.map((item, idx) =>
          !item?.name ? "" : <ItemMobile key={idx} item={item} />
        )}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
