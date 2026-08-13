import { Button, Empty, Icon, Table, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "components/Utils/useTranslation";
import Link from "next/link";

const KetQuaVanBang = ({ thongTinTraCuu = [] }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const columns = [
    {
      title: t("index.table.book_no"),
      dataIndex: ["DuLieu", "soVaoSoBang"],
      key: "soVaoSoBang",
      width: 200,
    },
    {
      title: t("index.table.diploma_no"),
      dataIndex: ["DuLieu", "soHieuVanBang"],
      key: "soHieuVanBang",
      width: 200,
    },
    {
      title: t("index.table.fullname"),
      dataIndex: ["DuLieu", "hoTen"],
      key: "hoTen",
      width: 280,
    },
    {
      title: t("index.table.dob"),
      key: "ngaySinh",
      width: 200,
      render: (_, record) =>
        record?.DuLieu?.ngaySinh
          ? moment(record.DuLieu.ngaySinh).format("DD/MM/YYYY")
          : "",
    },
    {
      title: t("index.table.student_id"),
      dataIndex: ["DuLieu", "maSinhVien"],
      key: "maSinhVien",
      width: 200,
    },
    {
      title: t("index.table.action"),
      align: "center",
      width: 80,
      render: (val, rec) => (
        <Tooltip
          title={!rec?.DuLieu?._id ? t("index.table.no_info") : t("index.table.detail")}
        >
          <Link href={rec?.DuLieu?._id ? `/vanbangchungchi/${rec.DuLieu._id}` : "#"} passHref>
            <a
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: rec?.DuLieu?._id ? "pointer" : "not-allowed",
                opacity: rec?.DuLieu?._id ? 1 : 0.5,
                width: "28px",
                height: "28px",
                background: "#F4F4F4",
                borderRadius: "4px",
                border: "none",
                transition: "background 0.2s ease"
              }}
              onClick={(e) => {
                if (!rec?.DuLieu?._id) e.preventDefault();
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.13379" cy="9.19995" r="2" stroke="#2E2E2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.6003 10.1334C13.6003 7.11426 11.1528 4.66675 8.13366 4.66675C5.1145 4.66675 2.66699 7.11426 2.66699 10.1334" stroke="#2E2E2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </Link>
        </Tooltip>
      ),
    },
  ];

  if (thongTinTraCuu?.Error) {
    return (
      <div style={{ padding: 16, textAlign: "center" }}>
        <i style={{ color: "red" }}>{t("index.table.no_result_msg")}</i>
      </div>
    );
  }

  const isEmpty = !thongTinTraCuu || thongTinTraCuu.length === 0;
  const dataSource = !isEmpty ? thongTinTraCuu?.map((item, index) => ({
    ...item,
    stt: index + 1,
    key: item?._id || index,
  })) : [];

  return (
    <div style={{ padding: isMobile ? "40px 16px" : "40px 120px", backgroundColor: "#EEF2F8", minHeight: isEmpty ? "414px" : "auto", borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h3 style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0px",
          gap: "12px",
          marginBottom: isEmpty ? "48px" : "24px"
        }}>
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: isMobile ? "18px" : "24px",
            lineHeight: "135%",
            color: "#2E2E2E"
          }}>
            {t("index.table.search_result_header")}
          </span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flex: "none", order: 1, flexGrow: 0 }}
          >
            <path d="M22.6666 22L28 27.3333" stroke="#134D8B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="14.6667" cy="14.6667" r="10.6667" stroke="#134D8B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </h3>
        {isEmpty ? (
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px",
            gap: "24px"
          }}>
            <div style={{
              flex: "none",
              order: 0,
              flexGrow: 0,
              width: "256px",
              height: "256px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <img
                src="/assets/image/kqtc.png"
                alt="No data"
                style={{
                  width: "256px",
                  height: "256px",
                  objectFit: "contain"
                }}
              />
            </div>
            <span style={{
              flex: "none",
              order: 1,
              flexGrow: 0,
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "clamp(12px, 3.8vw, 20px)",
              lineHeight: "135%",
              letterSpacing: "0.03em",
              color: "#373D4E"
            }}>
              {t("index.table.fill_info_prompt")}
            </span>
          </div>
        ) : (
          <div style={{
            background: "#FFFFFF",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)"
          }}>
            <Table
              className="custom-table-vbcc"
              columns={columns}
              dataSource={dataSource}
              scroll={isMobile ? { x: 'max-content' } : undefined}
              pagination={false}
              locale={{
                emptyText: (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t("index.table.empty")} />
                ),
              }}
            />
          </div>
        )}
      </div>
      <style jsx global>{`
          .custom-table-vbcc .ant-table {
            border: 1px solid #F4F4F4 !important;
            border-radius: 6px !important;
            overflow: hidden !important;
            background: #FFFFFF !important;
          }
          .custom-table-vbcc .ant-table-container {
            border-radius: 6px !important;
          }
          .custom-table-vbcc .ant-table-thead > tr > th {
            font-family: 'Montserrat', sans-serif !important;
            font-style: normal !important;
            font-weight: 600 !important;
            font-size: 12px !important;
            line-height: 170% !important;
            letter-spacing: 0.015em !important;
            color: #2E2E2E !important;
            background: #F4F4F4 !important;
            padding: 12px !important;
            height: 44px !important;
            border-bottom: none !important;
            border-right: none !important;
            border-left: 1px solid #FFFFFF !important;
            white-space: nowrap !important;
          }
          .custom-table-vbcc .ant-table-thead > tr > th * {
            font-family: 'Montserrat', sans-serif !important;
            font-style: normal !important;
            font-weight: 600 !important;
            font-size: 12px !important;
            line-height: 170% !important;
            letter-spacing: 0.015em !important;
            color: #2E2E2E !important;
          }
          .custom-table-vbcc .ant-table-thead > tr > th:first-child {
            border-left: none !important;
          }
          .custom-table-vbcc .ant-table-tbody > tr > td {
            font-family: 'Montserrat', sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 14px !important;
            line-height: 170% !important;
            letter-spacing: 0.015em !important;
            color: #2E2E2E !important;
            background: #FFFFFF !important;
            padding: 12px !important;
            height: 48px !important;
            border-bottom: 1px solid #F4F4F4 !important;
            border-right: none !important;
            border-left: none !important;
            white-space: nowrap !important;
          }
          .custom-table-vbcc .ant-table-tbody > tr > td * {
            font-family: 'Montserrat', sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 14px !important;
            line-height: 170% !important;
            letter-spacing: 0.015em !important;
            color: #2E2E2E !important;
          }
          .custom-table-vbcc .ant-table-tbody > tr:last-child > td {
            border-bottom: none !important;
          }
          .custom-table-vbcc .ant-table-tbody > tr:hover > td {
            background: #FFFFFF !important;
          }
        `}</style>
    </div>
  );
};

export default KetQuaVanBang;
