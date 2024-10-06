"use client";
import React from "react";
import { Layout } from "antd";
import CustomHeader from "./header";

const { Content, Footer } = Layout;

// You'll need to edit this component
const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="layout" style={{ minHeight: "100vh", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
      <CustomHeader />
      <Content style={{ padding: "0 50px", marginTop: 64, flex: "0 0 auto" }}>
        <div
          className="site-layout-content"
          style={{ padding: 24, minHeight: 380, height: "100%" }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center", padding: "20px 50px" }}>
        Spark! ©2023 Created by Spark!
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
