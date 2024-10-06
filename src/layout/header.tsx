import React from "react";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import { HomeOutlined, InfoCircleOutlined, ReadOutlined } from "@ant-design/icons";

const { Header } = Layout;

const CustomHeader = () => {
  const menuItems = [
    { key: "0", label: "Home", href: "/", icon: <HomeOutlined /> },
    { key: "1", label: "News", href: "/news", icon: <ReadOutlined /> },
    { key: "2", label: "About", href: "/about", icon: <InfoCircleOutlined /> },
  ];

  const router = useRouter();
  const selectedKey = menuItems.findIndex((item) => item.href === router.pathname).toString();

  const handleClick = (key: number) => {
    router.push(menuItems[key].href);
  };

  return (
    <Header style={{ background: "#001529", padding: "0 50px", color: "rgba(255, 255, 255, 0.88)" }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectedKey]}>
        {menuItems.map((item, index) => (
          <Menu.Item key={index} icon={item.icon} onClick={() => handleClick(index)}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default CustomHeader;
