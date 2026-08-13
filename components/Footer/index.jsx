import React from "react";
import { useTranslation } from "components/Utils/useTranslation";

const getOrderedLinks = (locale) => {
  if (locale === "en-US") {
    return [
      { labelKey: "footer.ve_vinuni", url: "https://vinuni.edu.vn/" },
      { labelKey: "footer.vien_kddqt", url: "https://vinuni.edu.vn/college-of-business-and-management/" },
      { labelKey: "footer.vien_ktkhmt", url: "https://vinuni.edu.vn/college-of-engineering-and-computer-science/" },
      { labelKey: "footer.vien_khsk", url: "https://vinuni.edu.vn/college-of-health-sciences/" },
      { labelKey: "footer.vien_khxh", url: "https://vinuni.edu.vn/college-of-arts-and-sciences/" },
    ];
  }
  // Default to vi-VN
  return [
    { labelKey: "footer.ve_vinuni", url: "https://vinuni.edu.vn/vi/" },
    { labelKey: "footer.vien_khxh", url: "https://vinuni.edu.vn/vi/college-of-arts-and-sciences/" },
    { labelKey: "footer.vien_kddqt", url: "https://vinuni.edu.vn/vi/college-of-business-and-management/" },
    { labelKey: "footer.vien_ktkhmt", url: "https://vinuni.edu.vn/vi/college-of-engineering-and-computer-science/" },
    { labelKey: "footer.vien_khsk", url: "https://vinuni.edu.vn/vi/college-of-health-sciences/" },
  ];
};

const GlobalFooter = () => {
  const { t, locale } = useTranslation();
  const orderedLinks = getOrderedLinks(locale);

  return (
    <footer className="footer-container">
      <div className="footer-trapezoid">
        <svg viewBox="0 0 508 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="trapezoid-svg">
          <path d="M0 302V0H508L251.247 302H0Z" fill="#004E90"/>
        </svg>
        <div className="logo-container">
          <img
            src="/assets/image/iconfooter.png"
            alt="VinUniversity Logo"
            className="footer-logo-img"
          />
        </div>
      </div>

      <div className="footer-content-wrapper">
        {/* Column 1: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-column-title">{t("footer.quick_links")}</h4>
          <div className="footer-links-list">
            {orderedLinks.map((item, idx) => (
              <div key={idx} className="footer-link-item">
                <span className="bullet-dot" />
                <a href={item.url} target="_blank" rel="noreferrer" className="footer-link">
                  {t(item.labelKey)}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="footer-column">
          <h4 className="footer-column-title">{t("footer.thong_tin_lien_he")}</h4>
          <div className="footer-links-list">
            <div className="footer-link-item align-start">
              <span className="bullet-dot mt-8" />
              <span className="footer-text-content">{t("footer.dia_chi")}</span>
            </div>
            <div className="footer-link-item">
              <span className="bullet-dot" />
              <a href="mailto:info@vinuni.edu.vn" className="footer-link short-width">
                {t("footer.email")}
              </a>
            </div>
            <div className="footer-link-item">
              <span className="bullet-dot" />
              <a href="tel:+842471089779" className="footer-link short-width">
                {t("footer.tel")}
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="social-icons-row">
              <a
                href="https://www.facebook.com/vinuniversity/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                title="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65684 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.93 5.90625 14.2148 5.90625C15.3086 5.90625 16.4766 6.10156 16.4766 6.10156V8.5625H15.2148C13.9716 8.5625 13.5859 9.33398 13.5859 10.125V12H16.3594L15.9156 14.8906H13.5859V21.8785C18.3432 21.1283 22 16.9913 22 12Z" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC2V_fL1LhS8LzU54Q9H24vA"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                title="YouTube"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vinuniversity/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                title="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/school/vinuniversity/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                title="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-container {
          position: relative;
          width: 100%;
          min-height: 300px;
          background: linear-gradient(0deg, rgba(1, 139, 208, 0.09), rgba(1, 139, 208, 0.09)), url(/assets/image/bgfooter.png);
          background-blend-mode: color-dodge, normal;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
          box-sizing: border-box;
          z-index: 1;
        }

        .footer-trapezoid {
          position: absolute;
          width: 508px;
          height: 100%;
          left: 0px;
          top: 0px;
          z-index: 2;
        }

        .trapezoid-svg {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: block;
        }

        .logo-container {
          position: absolute;
          width: 161.91px;
          height: 120px;
          left: 100px;
          top: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .footer-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .footer-content-wrapper {
          position: absolute;
          width: 800px;
          height: 200px;
          left: 540px;
          top: calc(50% - 200px / 2 - 7px);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 60px;
          box-sizing: border-box;
          z-index: 3;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 16px;
          width: 370px;
          box-sizing: border-box;
        }

        .footer-column-title {
          margin: 0;
          width: 370px;
          height: 24px;
          font-family: 'Montserrat', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 135%;
          letter-spacing: 0.01em;
          color: #FFFFFF;
        }

        .footer-links-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 12px;
          width: 370px;
          box-sizing: border-box;
        }

        .footer-link-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 8px;
          width: 370px;
          min-height: 22px;
          box-sizing: border-box;
        }

        .footer-link-item.align-start {
          align-items: flex-start;
          min-height: 44px;
        }

        .bullet-dot {
          width: 4px;
          height: 4px;
          background: #FFFFFF;
          border-radius: 50%;
          flex: none;
          order: 0;
          flex-grow: 0;
        }

        .bullet-dot.mt-8 {
          align-self: flex-start;
          margin-top: 9px;
        }

        .footer-link {
          width: 358px;
          height: 22px;
          font-family: 'Montserrat', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 135%;
          color: #FFFFFF;
          text-decoration: none;
          flex: none;
          order: 1;
          flex-grow: 1;
          display: flex;
          align-items: center;
          transition: text-decoration 0.2s ease;
        }

        .footer-link.short-width {
          width: 205px;
          flex-grow: 0;
        }

        .footer-link:hover {
          text-decoration: underline;
        }

        .footer-text-content {
          width: 358px;
          height: 44px;
          font-family: 'Montserrat', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 135%;
          color: #FFFFFF;
          flex: none;
          order: 1;
          flex-grow: 1;
          display: flex;
          align-items: center;
        }

        .social-icons-row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 6px 12px;
          gap: 16px;
          width: 168px;
          height: 36px;
          box-sizing: border-box;
          flex: none;
          order: 3;
          flex-grow: 0;
          margin-left: 12px;
        }

        .social-icon-link {
          width: 24px;
          height: 24px;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: none;
          order: 0;
          flex-grow: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .social-icon-link:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-container {
            height: auto;
            min-height: auto;
            padding: 40px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
          }

          .trapezoid-svg {
            display: none;
          }

          .footer-trapezoid {
            position: relative;
            width: 100%;
            max-width: 480px;
            height: 140px;
            left: auto;
            top: auto;
            clip-path: none;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #004E90;
            border-radius: 12px;
          }

          .logo-container {
            position: relative;
            left: auto;
            top: auto;
          }

          .footer-content-wrapper {
            position: relative;
            left: auto;
            top: auto;
            height: auto;
            padding-left: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            flex-direction: column;
            width: 100%;
            align-items: center;
            gap: 32px;
          }

          .footer-column {
            width: 100%;
            max-width: 480px;
            align-items: center;
            text-align: center;
          }

          .footer-column-title {
            width: 100%;
            text-align: center;
            height: auto;
          }

          .footer-links-list {
            width: 100%;
            align-items: center;
          }

          .footer-link-item {
            width: 100%;
            justify-content: center;
          }

          .footer-link {
            width: auto;
            text-align: center;
            justify-content: center;
            flex: none !important;
            flex-grow: 0 !important;
          }

          .footer-link.short-width {
            width: auto;
          }

          .footer-text-content {
            width: auto;
            max-width: 90%;
            height: auto;
            text-align: center;
            justify-content: center;
            flex: none !important;
            flex-grow: 0 !important;
          }

          .bullet-dot.mt-8 {
            align-self: center !important;
            margin-top: 0 !important;
          }

          .social-icons-row {
            justify-content: center;
            margin-left: 0;
          }
        }

        @media (max-width: 767px) {
          .footer-container {
            padding: 28px 16px 32px;
            gap: 24px;
          }

          .footer-trapezoid {
            max-width: 392px;
            height: 120px;
            border-radius: 12px;
          }

          .logo-container {
            width: 146px;
            height: 108px;
          }

          .footer-content-wrapper {
            gap: 24px;
          }

          .footer-column {
            max-width: 392px;
            gap: 12px;
          }

          .footer-column-title {
            font-size: 17px;
            line-height: 135%;
          }

          .footer-links-list {
            gap: 8px;
          }

          .footer-link-item,
          .footer-link-item.align-start {
            width: fit-content;
            max-width: 100%;
            min-height: 20px;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 8px;
          }

          .bullet-dot,
          .bullet-dot.mt-8 {
            align-self: flex-start !important;
            margin-top: 8px !important;
          }

          .footer-link,
          .footer-text-content {
            width: auto;
            max-width: calc(100% - 12px);
            height: auto;
            min-height: 20px;
            align-items: flex-start;
            justify-content: flex-start;
            font-size: 14px;
            line-height: 145%;
            text-align: left;
          }

          .social-icons-row {
            width: auto;
            height: 32px;
            padding: 4px 8px;
            gap: 14px;
          }

          .social-icon-link,
          .social-icon-link svg {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>
    </footer>
  );
};

export default GlobalFooter;
