import React, { Fragment } from "react";
import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "antd/dist/antd.css";
import Layout from "components/Layout/Layout";
import { DefaultSeo } from "next-seo";
import { LanguageProvider } from "components/Utils/useTranslation";

export default ({ Component, pageProps }) => (
  <LanguageProvider>
    <Layout>
      <Modal />
      <DefaultSeo
        title="HỌC VIỆN CHÍNH SÁCH VÀ PHÁT TRIỂN CỔNG THÔNG TIN ĐÀO TẠO"
        description="Trang Web cung cấp thông tin về Học viện Chính sách và Phát triển"
        openGraph={{
          type: "website",
          locale: "vi_VN",
          url: "https://tuyensinhptit.aisenote.com/",
          site_name: "HỌC VIỆN CHÍNH SÁCH VÀ PHÁT TRIỂN CỔNG THÔNG TIN ĐÀO TẠO",
          images: [
            {
              url: "/assets/image/hosting/metadata.png",
              width: 800,
              height: 600,
              alt: "Banner",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  </LanguageProvider>
);
