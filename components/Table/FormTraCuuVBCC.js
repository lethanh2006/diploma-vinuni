import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  notification,
  Row,
} from "antd";
import capbangdiemsohieu from "assets/image/sohieuvb.png";
import moment from "moment";
import React from "react";
import { color } from "styled-system";
import { useTranslation } from "components/Utils/useTranslation";

const openNotification = () => {
  notification.error({
    message: "Thông báo",
    description:
      "Chức năng này hiện tại đang được chúng tôi phát triển. Xin bạn hãy từ tốn",
    placement: "bottomRight",
    // icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
};

const FormTraCuuVBCC = (props) => {
  const { t } = useTranslation();
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        values.ngaySinh = values.ngaySinh
          ? moment(values?.ngaySinh).format("DD/MM/YYYY")
          : undefined;
        values.mucDichTraCuuId = "69450705c63d2c9bb1ed80a7";

        props.onSubmit(values);
        props.form.resetFields();
      }
    });
  };

  return (
    <Row>
      <Col lg={24}>
        <Form onSubmit={handleSubmit} colon={false} className="vbcc-form">
          <Card
            style={{
              borderRadius: 12,
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "0 8px 32px 0 rgba(20, 97, 200, 0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            // title={
            //   <center>
            //     <span>
            //       <img src={capbangdiemsohieu} style={{ padding: 8 }} />
            //       <b>Tra cứu thông tin văn bằng</b>
            //     </span>
            //   </center>
            // }
          >
            <Row gutter={[12, 2]}>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>{t("index.form.fullname")}</span>}
                >
                  {getFieldDecorator("hoTen")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder={t("index.form.enter_fullname")}
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>{t("index.form.dob")}</span>}
                >
                  {getFieldDecorator("ngaySinh")(
                    <DatePicker
                      size="large"
                      style={{ width: "100%", fontSize: "15px" }}
                      format={"DD/MM/YYYY"}
                      placeholder={t("index.form.select_dob")}
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>{t("index.form.cccd")}</span>}
                >
                  {getFieldDecorator("cccd")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder={t("index.form.enter_cccd")}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>
 
            <Row gutter={[12, 2]}>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>{t("index.form.student_id")}</span>}
                >
                  {getFieldDecorator("maSinhVien")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder={t("index.form.enter_student_id")}
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>{t("index.form.diploma_no")}</span>}
                >
                  {getFieldDecorator("soHieuVanBang")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder={t("index.form.enter_diploma_no")}
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>{t("index.form.book_no")}</span>}
                >
                  {getFieldDecorator("soVaoSoBang")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder={t("index.form.example_book_no")}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>
 
            <Form.Item style={{ margin: "8px 0 0", textAlign: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "0px",
                }}
              >
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10.852px 14.4694px",
                    width: "40px",
                    height: "40px",
                    background: "#F3F4F7",
                    borderRadius: "4px",
                    border: "none",
                  }}
                  onClick={() => {
                    props.form.resetFields();
                    if (props.onReset) {
                      props.onReset();
                    }
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flex: "none", order: 0, flexGrow: 0 }}
                  >
                    <path
                      d="M12.4 19.8215C8.20264 19.8215 4.8 16.4093 4.8 12.2C4.8 8.87077 6.92859 6.04011 9.89541 5.00202M12.4 19.8215L10.7905 18.2075M12.4 19.8215L10.826 21.4M12.4 4.57847C16.5974 4.57847 20 7.99074 20 12.2C20 15.5292 17.8714 18.3599 14.9046 19.398M12.4 4.57847L13.974 3M12.4 4.57847L14.0095 6.19254"
                      stroke="#1461C8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    display: "inline-flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10.852px 14.4694px",
                    gap: "7.23px",
                    width: "200px",
                    height: "40px",
                    background: "#1461C8",
                    borderColor: "#1461C8",
                    borderRadius: "4px",
                    fontSize: "15px",
                  }}
                >
                  {t("index.form.search_button")}
                </Button>
              </div>
            </Form.Item>
          </Card>
        </Form>
        <style jsx>{`
          .vbcc-form :global(.ant-form-item) {
            margin-bottom: 5px;
          }
        `}</style>
      </Col>
    </Row>
  );
};

const FormTraCuu = Form.create({})(FormTraCuuVBCC);

export default FormTraCuu;
