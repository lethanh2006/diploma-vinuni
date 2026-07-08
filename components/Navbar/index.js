/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { useRouter } from "next/router";
import { Button, Col, Drawer, Icon, Menu, Row, Dropdown } from "antd";
// import { MENU_ITEMS_MOBILE } from 'common/src/data/Hosting/data';
import LogoImage from "assets/image/hosting/apd-logo.png";
import axios from "axios";
import Box from "components/Box";
import ScrollSpyMenu from "components/ScrollSpyMenu";
import { ip } from "data/ip";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Container from "./ContainerMenu/index";
import NavbarWrapper from "./Navbar";
import { Image } from "./Navbar/navbar.style";
import { useTranslation } from "components/Utils/useTranslation";

const { Item, SubMenu } = Menu;
export const AWrapper = styled.a`
  color: #000000 !important;
  height: 80px !important;
  padding: 10px 20px !important;
  &:hover {
    color: #eb4d4b !important;
    background-color: yellow !important;
  }
`;

export const ItemAntd = styled(Item)`
  & li {
    padding-left: 40px !important;
  }
  & a {
    color: rgb(52, 61, 72);
  }
  &:hover a::before {
    color: #ff3d3b !important; /* border-bottom: 1.5px solid #FF3D3B; */
    content: "";
  }
`;
export function Format(str) {
  // xóa hết dấu + đưa về chữ thường
  if (!str) return "";
  return str
    .toString()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/đ/g, "d")
    .replace(/\s/g, "");
}

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const router = useRouter();
  const { t, locale, changeLocale } = useTranslation();
  const isDesktop = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const languageMenu = (
    <Menu onClick={({ key }) => changeLocale(key)} style={{ padding: "8px 0" }}>
      <Menu.Item key="vi-VN" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 16px" }}>
        <img src="/assets/image/locales/vi-VN.svg" width={28} height={18} alt="vi" style={{ objectFit: "cover", borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
        <span style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}>Tiếng Việt (vi-VN)</span>
      </Menu.Item>
      <Menu.Item key="en-US" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 16px" }}>
        <img src="/assets/image/locales/en-US.svg" width={28} height={18} alt="en" style={{ objectFit: "cover", borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
        <span style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}>English (en-US)</span>
      </Menu.Item>
    </Menu>
  );

  const [daotao, setDaotao] = useState([]);
  const [loaitintuc, setLoaiTinTuc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    (async function wrapFunc() {
      setLoading(false);
      const response = await axios.get(`${ip}/he-dao-tao`, {
        params: {
          page: 1,
          limit: 1000,
          // cond: {
          //   maLoaiBaiViet: 'THONG-DIEP'
          // }
        },
      });
      const ctrDaoTao = _.get(response, "data.data", []);
      setDaotao(ctrDaoTao);
    })();
  }, []);

  useEffect(() => {
    (async function wrapFunc() {
      setLoading(false);
      const response = await axios.get(`${ip}/loai-bai-viet`, {
        params: {
          page: 1,
          limit: 1000,
          cond: {
            $and: [
              { maLoai: { $regex: "DAO_TAO_TIN_TUC_" } },
              { maLoai: { $ne: "DAO_TAO_TIN_TUC_BA_CONG_KHAI" } },
              { maLoai: { $ne: "DAO_TAO_TIN_TUC_LICH_THI_TA" } },
              { maLoai: { $ne: "DAO_TAO_TIN_TUC_DINH_HUONG" } },
            ],
          },
        },
      });
      const list = _.get(response, "data.data", []);
      setLoaiTinTuc(list);
    })();
  }, []);

  const tintucDesk = () => {
    let tun = [];
    loaitintuc?.map((item) => {
      tun.push(
        <Item
          onClick={() => {
            router.replace(`/tintucchung#${Format(item?.maLoai)}`);
            if (router.pathname === "/tintucchung") {
              router.reload();
            }
          }}
        >
          {/* <Link href={`/tintucchung#${Format(item?.maLoai)}`}> */}
          <a style={{ fontSize: isDesktop ? 14 : 18 }}>{item?.tenLoai}</a>
          {/* </Link> */}
        </Item>,
      );
    });
    return tun;
  };

  const daotaoDesk = () => {
    let res = [];
    daotao.map((item) => {
      res.push(
        <SubMenu
          title={
            <span style={{ fontSize: isDesktop ? 14 : 18 }}>
              {item?.tenHeDaoTao ?? ""}
            </span>
          }
        >
          {item.nganhDaoTao.map((e, ind) => (
            <Item>
              <Link href={`/nganhhoc/${e?.maNganh ?? ""}`}>
                <a style={{ fontSize: isDesktop ? 14 : 18 }}>
                  {e?.tenNganh ?? ""}
                </a>
              </Link>
            </Item>
          ))}
        </SubMenu>,
      );
    });
    return res;
  };

  let MENU_ITEMS = [
    {
      label: t("menu.home"),
      path: "#",
      offset: "70",
    },
    {
      hover: true,
      label: t("menu.general_intro"),
      path: "#",
      offset: "70",
      submenu: [
        <Item>
          <Link href="/doinguchitiet">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>{t("menu.staff")}</a>
          </Link>
        </Item>,
        <Item>
          <Link href="/chucnangnhiemvu">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>
              {t("menu.functions")}
            </a>
          </Link>
        </Item>,
        <Item>
          <Link href="/quychequydinh">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>{t("menu.regulations")}</a>
          </Link>
        </Item>,
      ],
    },
    {
      label: t("menu.news"),
      path: "tintucchung",
    },
    {
      label: t("menu.admission_plan"),
      path: "deantuyensinh",
    },
    {
      label: t("menu.admission"),
      path: "https://tuyensinh.ptit.edu.vn/",
      offset: "70",
      redirect: true,
      submenu: [
        <Item>
          {/* <Link href="/vanbangchungchi"> */}
          <a
            style={{ fontSize: isDesktop ? 14 : 18 }}
            onClick={() => window.open("https://tuyensinh.ptit.edu.vn/")}
          >
            {t("menu.admission_news")}
          </a>

          {/* </Link> */}
        </Item>,
        <Item>
          <Link href="/chungchi">
            <a
              style={{ fontSize: isDesktop ? 14 : 18 }}
              onClick={() => window.open("https://tuyensinh.ptit.edu.vn/")}
            >
              {t("menu.admission_scheme")}
            </a>
          </Link>
        </Item>,
      ],
    },
    {
      hover: true,
      label: t("menu.training_program"),
      path: "#",
      offset: "70",
      submenu: daotaoDesk(),
    },
    {
      label: t("menu.lookup"),
      path: "#",
      offset: "70",
      submenu: [
        <Item>
          {/* <Link href="/vanbangchungchi"> */}
          <a
            style={{ fontSize: isDesktop ? 14 : 18 }}
            onClick={() => window.open("https://tracuuvanbang.ptit.edu.vn/")}
          >
            {t("menu.lookup_diploma")}
          </a>

          {/* </Link> */}
        </Item>,
        <Item>
          <Link href="/chungchi">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>
              {t("menu.lookup_english")}
            </a>
          </Link>
        </Item>,
      ],
    },
    {
      label: t("menu.three_publics"),
      path: "bacongkhai",
      offset: "70",
    },
  ];

  const handleClick = () => { };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  return isMobile ? (
    <header>
      <div
        style={{
          backgroundColor: "#b9191c",
          color: "white",
          padding: "8px 0",
          fontSize: "12px",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <a
                href="https://ptit.edu.vn"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  whiteSpace: "nowrap",
                }}
              >
                {t("footer.ptit_portal")}
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Dropdown overlay={languageMenu} trigger={["hover", "click"]} placement="bottomCenter">
                <a className="ant-dropdown-link" style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                  <img
                    src={`/assets/image/locales/${locale === "vi-VN" ? "vi-VN.svg" : "en-US.svg"}`}
                    alt="lang"
                    width={28}
                    height={18}
                    style={{ borderRadius: "2px", objectFit: "cover", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }}
                  />
                </a>
              </Dropdown>
            </div>
          </div>
        </Container>
      </div>

      <div
        id="nav-bar-mobile"
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(43, 83, 135, 0.08) 0px 3px 8px 0px",
          padding: "12px 0",
        }}
      >
        <Container>
          <Row style={{ width: "100%", alignItems: "center" }}>
            <Col xl={2} lg={2} md={2} xs={0} sm={0}>
              <Link rel="prefetch" href={`/`}>
                <a>
                  <Image
                    style={{
                      width: "100%",
                      minWidth: "50px",
                      marginLeft: "-10px",
                      display: "none",
                    }}
                    src={LogoImage}
                    alt="logo"
                  />
                </a>
              </Link>
            </Col>

            <Col
              xl={19}
              lg={19}
              md={19}
              xs={0}
              sm={0}
              style={{ paddingTop: 25 }}
            >
              {!loading && (
                <ScrollSpyMenu
                  menuItems={MENU_ITEMS}
                  offset={-60}
                  isDesktop={isDesktop}
                  onClose={closeDrawer}
                />
              )}
            </Col>

            <Col xl={0} lg={0} md={0} xs={24} sm={24}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "0px",
                  paddingRight: "8px",
                }}
              >
                <div
                  style={{
                    color: "#1461C8",
                    fontSize: "clamp(11px, 2.6vw, 14px)",
                    fontWeight: "600",
                    textAlign: "center",
                    marginBottom: "4px",
                    lineHeight: 1.25,
                  }}
                >
                  {t("footer.academy_name")}
                </div>

                <div
                  style={{
                    color: "#002060",
                    fontSize: "clamp(13px, 3vw, 16px)",
                    fontWeight: "750",
                    textAlign: "center",
                    textTransform: "uppercase",
                    lineHeight: 1.25,
                  }}
                >
                  {t("footer.system_title")}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  ) : (
    <header>
      <div
        style={{
          backgroundColor: "#1461C8",
          color: "white",
          padding: "12px 40px",
          fontSize: "14px",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>

              <a
                href="https://daotao.ptit.edu.vn"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  fontSize: "clamp(10px, 2vw, 14px)",
                }}
              >
                {t("footer.ptit_portal_full")}
              </a>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
                fontSize: "clamp(10px, 2vw, 14px)",
              }}
            >
              <Dropdown overlay={languageMenu} trigger={["hover", "click"]} placement="bottomCenter">
                <a className="ant-dropdown-link" style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                  <img
                    src={`/assets/image/locales/${locale === "vi-VN" ? "vi-VN.svg" : "en-US.svg"}`}
                    alt="lang"
                    width={28}
                    height={18}
                    style={{ borderRadius: "2px", objectFit: "cover", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }}
                  />
                </a>
              </Dropdown>
            </div>
          </div>
        </Container>
      </div>

      <div
        id="nav-bar-desktop"
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(43, 83, 135, 0.08) 0px 3px 8px 0px",
          padding: "15px 0",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {!isDesktop && (
              <Link rel="prefetch" href={`/`}>
                <a style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    style={{
                      width: "44.33px",
                      height: "54px",
                      objectFit: "contain",
                    }}
                    src={LogoImage}
                    alt="logo"
                  />
                </a>
              </Link>
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#1461C8",
                  fontSize: "clamp(12px, 2vw, 15px)",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                {t("footer.academy_name")}
              </div>

              <div
                style={{
                  color: "#002060",
                  fontSize: "clamp(16px, 2vw, 18px)",
                  fontWeight: "750",
                  textTransform: "uppercase",
                }}
              >
                {t("footer.system_title")}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
