/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography } from "antd";
import myImage from "../assets/me.jpg";

const NewsPage: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "10px" }}>{/* Add Switch inside here */}</div>
      <Divider />
      <Typography.Title level={2}>About me!</Typography.Title>
      <div>

      <svg width="100" height="100">
        <image href={myImage.src} width="100" height="100" />
</svg>

    </div>
      <p>
        Author bio: Hello! My name is Michael Chu. I am a sophomore studying computer science. This is a project that I built in my CS391 Web Development Class
        

      </p>
    </div>
  );
};

export default NewsPage;