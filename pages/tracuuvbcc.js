import { Col, Modal, Row, Spin } from "antd";
import axios from "axios";
import FormTraCuu from "components/Table/FormTraCuuVBCC";
import TableTraCuuVBCC from "components/Table/TableTraCuuVBCC";
import Container from "components/UI/Container";
import { ipPTIT } from "data/ip";
import PropTypes from "prop-types";
import "rc-tabs/assets/index.css";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SectionWrapper from "../styles/vanbangchungchi.style";
import bgtracuu from "assets/image/bgtracuu.png";
import { useTranslation } from "components/Utils/useTranslation";
import ChiTietVanBang from "./vanbangchungchi/[idChiTiet]";

const TraCuuVanBangChungChi = (props) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [ds, setds] = useState([]);
  const [loading, setloading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const traCuu = async (values) => {
    const filledFields = Object.entries(values).filter(
      ([key, value]) => key !== "mucDichTraCuuId" && !!value
    ).length;

    if (filledFields < 2) {
      Modal.warning({
        title: t("index.messages.warning"),
        content: t("index.messages.warning_2_fields"),
      });
      return;
    }

    setloading(true);
    setSelectedId(null);
    const data = await axios.post(
      `${ipPTIT}vbcc/phu-luc-van-bang/public/tra-cuu-phu-luc-van-bang`,
      values
    );
    const arr = data?.data?.data?.result ?? [];
    if (arr.length === 0) {
      Modal.error({
        title: t("index.messages.warning"),
        content: t("index.messages.no_info_found"),
        onOk() { },
      });
      setloading(false);
      setds([]);
      return;
    }
    setds(arr ?? []);
    setloading(false);
  };

  const tieuDeKQ = props.tieuDe;
  const heroBackgroundStyle = {
    background: `
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.075) 100%),
      url(${bgtracuu})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "0px",
    maxWidth: "none",
    width: "100%",
    minHeight: "700px",
    boxSizing: "border-box",
  };

  return (
    <Row style={{ width: "100%" }}>
      <Spin spinning={!!loading}>
        <SectionWrapper id="daotao" className="vbcc-montserrat">
          {isMobile && (
            <Container fullWidth noGutter>
              <div style={{ ...heroBackgroundStyle, padding: "124px 16px 24px" }}>
                <div style={{ width: "100%", margin: "0 auto" }}>
                  <div style={{ marginBottom: 12 }}>
                    {tieuDeKQ}
                  </div>
                  <div style={{ width: "100%" }}>
                    <FormTraCuu
                      onSubmit={(values) => traCuu(values)}
                      onReset={() => {
                        setds([]);
                        setSelectedId(null);
                      }}
                    />
                  </div>
                </div>
              </div>
              {selectedId ? (
                <ChiTietVanBang
                  id={selectedId}
                  onBack={() => setSelectedId(null)}
                />
              ) : (
                <TableTraCuuVBCC
                  thongTinTraCuu={ds}
                  onViewDetail={(id) => setSelectedId(id)}
                />
              )}
            </Container>
          )}
          {!isMobile && (
            <Container fullWidth noGutter>
              <div style={{ ...heroBackgroundStyle, padding: "205px 24px 93px 24px" }}>
                <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}>
                  <Col lg={24} style={{ marginBottom: 50 }}>
                    {tieuDeKQ}
                  </Col>
                  <div style={{ width: "100%" }}>
                    <FormTraCuu
                      onSubmit={(values) => traCuu(values)}
                      onReset={() => {
                        setds([]);
                        setSelectedId(null);
                      }}
                    />
                  </div>
                </div>
              </div>
              {selectedId ? (
                <ChiTietVanBang
                  id={selectedId}
                  onBack={() => setSelectedId(null)}
                />
              ) : (
                <TableTraCuuVBCC
                  thongTinTraCuu={ds}
                  onViewDetail={(id) => setSelectedId(id)}
                />
              )}
            </Container>
          )}
        </SectionWrapper>
      </Spin>
    </Row>
  );
};

TraCuuVanBangChungChi.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

TraCuuVanBangChungChi.defaultProps = {
  secTitleWrapper: {
    mb: ["100px", "40px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#ff4362",
    mb: "12px",
  },
  secHeading: {
    fontStyle: "normal",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#202124",
    letterSpacing: "0.04em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "40px",
    width: "600px",
    maxWidth: "100%",
  },
};

export default TraCuuVanBangChungChi;
