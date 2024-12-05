import DropdownPages from "./DropdownPages";
import DropdownEcommerce from "./DropdownEcommerce";
import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { isOnepage, style, headerType, footerStyle, isCollection, home } =
    useHeaderContex();
  const navItemsRaw = [
    {
      name: "HOME",
      icon: false,
      path: "/",
      dropdown: null,
    },
    {
      name: "ABOUT",
      icon: false,
      path: "/",
      dropdown: null,
    },
    {
      name: "SERVICES",
      icon: true,
      path: "/",
      dropdown: null,
      dropdownItems: [
        {
          name: "Test Prepartions",
          path: "/",
          label: null,
          icon: true,
          nestedDropdownItems: [
            {
              name: "TOEFL",
              path: "/",
              label: null,
            },
            {
              name: "IELTS",
              path: "/",
              label: null,
            },
            {
              name: "PTE",
              path: "/",
              label: null,
            },
            {
              name: "Duolingo",
              path: "/",
              label: null,
            },
            {
              name: "GRE",
              path: "/",
              label: null,
            },
            {
              name: "GMAT",
              path: "/",
              label: null,
            },
            {
              name: "SAT",
              path: "/",
              label: null,
            },
            {
              name: "ACT",
              path: "/",
              label: null,
            },
            {
              name: "CAEL",
              path: "/",
              label: null,
            },
            {
              name: "CELPIP",
              path: "/",
              label: null,
            },
          ],
        },
        {
          name: "Overseas Migration",
          path: "/",
          label: null,
        },
        {
          name: "Career Placement",
          path: "/",
          label: null,
        },
        {
          name: "Education",
          path: "/",
          label: null,
        },
        {
          name: "Travel & Tourism",
          path: "/",
          label: null,
        },
        {
          name: "Immigration Services",
          path: "/",
          label: null,
        },
        {
          name: "Business Travel",
          path: "/",
          label: null,
        },
        {
          name: "Scholarship Programs and Learning",
          path: "/",
          label: null,
        },
      ],
    },
    // {
    //   name:
    //     isOnepage && home === 19
    //       ? "STRATEGY"
    //       : isOnepage && (home === 12 || home === 18)
    //       ? "PORTFOLIO"
    //       : isOnepage && (!style || headerType === 3 || home === 14)
    //       ? "SERVICE"
    //       : isOnepage && isCollection && (style === 2 || style === 3)
    //       ? "COLLECTION"
    //       : isOnepage && (style === 2 || style === 3)
    //       ? "ABOUT"
    //       : "PAGES",
    //   icon: isOnepage ? false : true,
    //   path:
    //     isOnepage && home === 19
    //       ? "#tb__strategy"
    //       : isOnepage && (home === 12 || home === 18)
    //       ? "#tb__portfolio"
    //       : isOnepage && (!style || headerType === 3 || home === 14)
    //       ? "#service__area"
    //       : isOnepage && isCollection && (style === 2 || style === 3)
    //       ? "#popular__products"
    //       : isOnepage && (style === 2 || style === 3)
    //       ? home === 13
    //         ? "#tb_about"
    //         : "#about__mission__area"
    //       : "#",
    //   dropdown: null,
    //   position: "static",
    //   dropdownThumbs: {
    //     img: megaMenuImage1,
    //     path: "#",
    //   },
    //   dropdownContens: [
    //     {
    //       title: "GET STARTED 1",
    //       dropdownItems: [
    //         {
    //           name: "About",
    //           path: "/about",
    //           label: null,
    //         },
    //         {
    //           name: "Blog",
    //           path: "/blogs",
    //           label: null,
    //         },
    //         {
    //           name: "Blog Details",
    //           path: "/blogs/1",
    //           label: null,
    //         },
    //         {
    //           name: "Contact",
    //           path: "/contact",
    //           label: null,
    //         },
    //         {
    //           name: "FAQ",
    //           path: "/faq",
    //           label: null,
    //         },
    //         {
    //           name: "Error 404",
    //           path: "/error",
    //           label: null,
    //         },
    //       ],
    //     },
    //     {
    //       title: "GET STARTED 2",
    //       dropdownItems: [
    //         {
    //           name: "Shop",
    //           path: "/shop",
    //           label: "Sale Everything",
    //         },
    //         {
    //           name: "Product Details",
    //           path: "/products/1",
    //           label: null,
    //         },
    //         {
    //           name: "Cart",
    //           path: "/cart",
    //           label: null,
    //         },
    //         {
    //           name: "Checkout",
    //           path: "/checkout",
    //           label: null,
    //         },
    //         {
    //           name: "Wishlist",
    //           path: "/wishlist",
    //           label: null,
    //         },
    //         {
    //           name: "Login",
    //           path: "/login",
    //           label: null,
    //         },
    //       ],
    //     },
    //     {
    //       title: "GET STARTED 3",
    //       dropdownItems: [
    //         {
    //           name: "Service",
    //           path: "/services",
    //           label: "New",
    //         },
    //         {
    //           name: "Service Details",
    //           path: "/services/1",
    //           label: null,
    //         },
    //         {
    //           name: "Projects",
    //           path: "/projects",
    //           label: null,
    //         },
    //         {
    //           name: "Projects Details",
    //           path: "/projects/1",
    //           label: null,
    //         },
    //         {
    //           name: "Team",
    //           path: "/team",
    //           label: null,
    //         },
    //         {
    //           name: "Team Details",
    //           path: "/team/1",
    //           label: null,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name:
    //     isOnepage && (home == 14 || home === 19)
    //       ? "ABOUT"
    //       : isOnepage && home == 13
    //       ? "PROJECTS"
    //       : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
    //       ? "SERVICE"
    //       : style === 3 && headerType === 3
    //       ? "PROJECTS"
    //       : "ABOUT",
    //   icon: false,
    //   path:
    //     isOnepage && (home == 14 || home === 19)
    //       ? "#about__mission__area"
    //       : isOnepage && home == 13
    //       ? "#project__area"
    //       : isOnepage && !style
    //       ? "#about__mission__area"
    //       : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
    //       ? "#service__area"
    //       : style === 3 && headerType === 3
    //       ? "#project__area"
    //       : "/about",
    //   dropdown: null,
    // },
    // {
    //   name:
    //     isOnepage && home === 19
    //       ? "PORTFOLIO"
    //       : isOnepage && home == 13
    //       ? "PRICING"
    //       : isOnepage && (home === 12 || home === 18)
    //       ? "SERVICE"
    //       : isOnepage && headerType !== 3
    //       ? "PROJECTS"
    //       : style === 3 && headerType === 3
    //       ? "ABOUT"
    //       : "ECOMMERCE",
    //   icon: isOnepage ? false : true,
    //   path:
    //     isOnepage && home === 19
    //       ? "#tb__portfolio"
    //       : isOnepage && home == 13
    //       ? "#tb__pricing"
    //       : isOnepage && (home === 12 || home === 18)
    //       ? "#service__area"
    //       : isOnepage && headerType !== 3
    //       ? "#project__area"
    //       : style === 3 && headerType === 3
    //       ? "#about__mission__area"
    //       : "/home-9",
    //   dropdown: null,
    //   dropdownItems: [
    //     {
    //       name: "Shop",
    //       path: "/shop",
    //       label: "Online Store",
    //       icon: true,
    //       nestedDropdownItems: [
    //         {
    //           name: "Shop 2 Column",
    //           path: "/shop-2-column",
    //           label: null,
    //         },
    //         {
    //           name: "Shop 3 Column",
    //           path: "/shop-3-column",
    //           label: null,
    //         },
    //         {
    //           name: "Shop 4 Column",
    //           path: "/shop-4-column",
    //           label: null,
    //         },
    //       ],
    //     },
    //     {
    //       name: "Product Details",
    //       path: "/products/1",
    //       label: null,
    //     },
    //     {
    //       name: "Cart",
    //       path: "/cart",
    //       label: null,
    //     },
    //     {
    //       name: "Checkout",
    //       path: "/checkout",
    //       label: null,
    //     },
    //     {
    //       name: "Team",
    //       path: "/team",
    //       label: null,
    //     },
    //     {
    //       name: "Wishlist",
    //       path: "/wishlist",
    //       label: null,
    //     },
    //   ],
    // },
    // {
    //   name:
    //     isOnepage && (home === 12 || home === 19)
    //       ? "CONTACT"
    //       : isOnepage &&
    //         (!style ||
    //           style === 2 ||
    //           home == 13 ||
    //           (style === 3 && headerType === 2))
    //       ? "BLOGS"
    //       : isOnepage && style === 3
    //       ? "CONTACT"
    //       : "BLOG ",
    //   icon: false,
    //   path:
    //     isOnepage && (home === 12 || home === 19)
    //       ? "#tb__contact"
    //       : isOnepage &&
    //         (!style ||
    //           style === 2 ||
    //           home == 13 ||
    //           (style === 3 && headerType === 2))
    //       ? "#blog__area"
    //       : isOnepage && style === 3
    //       ? "#tb__contact"
    //       : "/blogs",
    //   dropdown: null,
    // },
    {
      name: "UPSKILLS",
      icon: false,
      path: "/",
      dropdown: null,
    },
    {
      name: "SCHOLARSHIPS",
      icon: false,
      path: "/",
      dropdown: null,
    },

    // {
    //   name: "JOB OPENINGS",
    //   icon: false,
    //   path: "/",
    //   dropdown: null,
    // },
    {
      name: "CONTACT",
      icon: false,
      path: "/contact",
      dropdown: null,
    },
  ];

  const navItems = navItemsRaw?.map((navItem, idx) =>
    // idx === 0
    //   ? {
    //       ...navItem,
    //       dropdown: isOnepage ? null : (
    //         <DropdownHome dropdownItems={navItem.dropdownItems} />
    //       ),
    //     }
    idx === 7
      ? {
          ...navItem,
          dropdown: isOnepage ? null : (
            <DropdownPages
              dropdownContents={navItem.dropdownContens}
              dropdownThumbs={navItem.dropdownThumbs}
            />
          ),
        }
      : idx === 2
      ? {
          ...navItem,
          dropdown: isOnepage ? null : (
            <DropdownEcommerce dropdownItems={navItem.dropdownItems} />
          ),
        }
      : navItem
  );
  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
