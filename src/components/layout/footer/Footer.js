import LogoFooter from "./LogoFooter";
import SupportFooter from "./SupportFooter";
import LinksFooter from "./LinksFooter";

import Copyright from "./Copyright";

import Copyright2 from "./Copyright2";
import ConsultingFooter from "./ConsultingFooter";

const Footer = ({ style, footerBg, copyright }) => {
  return (
    <>
      <div
        className={`${
          !style
            ? `footer pink__bg__color  sp_top_250`
            : `footer__${style} pink__bg__color ${
                style === 4 && footerBg === "black"
                  ? "sp_top_200"
                  : " sp_top_140"
              } `
        } ${
          style === 4 ? "sp_bottom_140 pink__bg__color" : ""
        }  position-relative ${footerBg === "black" ? "" : ""}`}
        id={!style ? `footer__area` : `footer__area `}
      >
        {!style ? "" : ""}

        <div className="container">
          {style === 4 ? (
            <div className="row">
              <ConsultingFooter />
            </div>
          ) : (
            <div className="footer__wrapper sp_bottom_110">
              <div className="row">
                <LogoFooter style={style} />

                <SupportFooter />

                <LinksFooter style={style} />
              </div>
            </div>
          )}

          {!style ? <Copyright /> : ""}
        </div>
      </div>
      {copyright === 2 || style === 2 || style === 3 || style === 4 ? (
        <Copyright2 style={style} copyright={copyright} />
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;
