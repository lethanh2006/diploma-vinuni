import { Col, Row } from "antd";
import React from "react";
import Box from "components/Box";
import LogoImage from "assets/image/hosting/apd-logo.png";
import BgImage from "assets/image/hosting/bg-footer.png";
import Container from "components/UI/Container";
import { Image, FooterWhiteLink } from "./index.style";
import { useTranslation } from "components/Utils/useTranslation";

const GlobalFooter = () => {
  const { t } = useTranslation();
  return (
    <Box
      style={{
        background: `#1461C8`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: "#ffffff",
        paddingTop: '40px',
        paddingBottom: '0px',
        fontFamily: "Roboto, sans-serif"
      }}
    >
      <Container>
        <div style={{ width: '100%' }}>
          <Row type="flex" justify="space-between" align="middle" style={{ paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.3)' }}>
            <Col xs={24} md={16} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ position: 'relative', width: '65.67px', height: '80px', flexShrink: 0, marginRight: '20px' }}>
                <Image
                  style={{ position: 'absolute', left: '0px', top: '0px', width: '65.67px', height: '80px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                  src={LogoImage}
                  alt="logo"
                />
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Bộ Tài chính
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '5px' }}>
                  Học viện Chính sách và Phát triển
                </div>
              </div>
            </Col>
          </Row>

          <Row style={{ paddingTop: '30px', paddingBottom: '30px' }} gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Số điện thoại liên hệ</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <FooterWhiteLink href="tel:02437473186" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>(024) 3747 3186</FooterWhiteLink>
                  <FooterWhiteLink href="tel:02437475217" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>(024) 3747 5217</FooterWhiteLink>
                </div>
              </div>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Email</div>
                <div>
                  <FooterWhiteLink href="mailto:hvcspt@apd.edu.vn" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>hvcspt@apd.edu.vn</FooterWhiteLink>
                </div>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Cơ sở Đào tạo</div>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'white', lineHeight: '1.4' }}>
                  Khu đô thị Nam An Khánh, xã An Khánh, Thành phố Hà Nội
                </div>
              </div>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Đường dẫn liên kết</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div><FooterWhiteLink href="https://www.mof.gov.vn/" target="_blank" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>Bộ Tài chính</FooterWhiteLink></div>
                  <div><FooterWhiteLink href="#" target="_blank" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>Viện Đào tạo Quốc tế</FooterWhiteLink></div>
                  <div><FooterWhiteLink href="#" target="_blank" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>Viện Chính sách công</FooterWhiteLink></div>
                </div>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
                <div><FooterWhiteLink href="#" target="_blank" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>Du học</FooterWhiteLink></div>
                <div><FooterWhiteLink href="#" target="_blank" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>Thông tin học phí</FooterWhiteLink></div>
                <div><FooterWhiteLink href="#" target="_blank" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>Kí túc xá</FooterWhiteLink></div>
                <div><FooterWhiteLink href="#" target="_blank" style={{ color: 'white', fontSize: '1.2em', fontWeight: 'bold' }}>Thư viện số</FooterWhiteLink></div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div style={{ backgroundColor: "#fff", padding: "24px 0", marginTop: "20px" }}>
        <Container>
          <Row>
            <Col span={24} style={{ textAlign: "center", color: "rgba(0,0,0,0.6)", fontSize: '13px' }}>
              © Copyright {new Date().getFullYear()} {t("footer.copyright")}
            </Col>
          </Row>
        </Container>
      </div>

    </Box>
  );
};

export default GlobalFooter;
