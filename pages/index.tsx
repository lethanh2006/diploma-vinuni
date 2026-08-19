// @ts-nocheck
import { Row } from "antd";
import axios from "axios";
import { ip } from "data/ip";
import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import TraCuuVanBangChungChi from "./tracuuvbcc";
import { useTranslation } from "components/Utils/useTranslation";

const VBChungChi = ({
  secTitleWrapper,
  secText,
  secHeading,
  dataBlock,
  dataToeic,
  dataNhapHoc,
}) => {
  const { t } = useTranslation();
  return (
    <Row>
      <TraCuuVanBangChungChi
        tieuDe={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 0,
              gap: "8px",
              width: "100%",
              maxWidth: "100%",
              minHeight: "84px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(24px, 6vw, 36px)",
                lineHeight: "135%",
                color: "#FFFFFF",
              }}
            >
              {t("index.question")}
            </div>

            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(14px, 4vw, 20px)",
                lineHeight: "135%",
                color: "#FFFFFF",
              }}
            >
              {t("index.prompt")}
            </div>
          </div>
        }
      />
    </Row>
  );
};

VBChungChi.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

VBChungChi.defaultProps = {
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

export async function getServerSideProps() {
  // Fetch data from external API

  let block = await axios.get(`${ip}/setting`, {
    params: {
      page: 1,
      limit: 1000,
      cond: {
        key: "HUONG_DAN_NHAP_HOC_THEO_PTKH",
      },
    },
  });
  const dataBlock = _.get(block, "data.data", {});

  block = await axios.get(`${ip}/setting`, {
    params: {
      page: 1,
      limit: 1000,
      cond: {
        key: "HUONG_DAN_TRA_CUU_TOEIC",
      },
    },
  });
  const dataToeic = _.get(block, "data.data", {});

  block = await axios.get(`${ip}/setting`, {
    params: {
      page: 1,
      limit: 1000,
      cond: {
        key: "HUONG_DAN_TRA_CUU_XAC_NHAN_NHAP_HOC",
      },
    },
  });
  const dataNhapHoc = _.get(block, "data.data", {});

  // Pass data to the page via props
  return {
    props: {
      dataBlock,
      dataToeic,
      dataNhapHoc,
    },
  };
}

export default VBChungChi;
