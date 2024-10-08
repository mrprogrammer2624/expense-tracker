import { Menu } from "antd";
import {
  DollarOutlined,
  HomeOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Container } from "@/components/";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  let selectedKey = "";
  if (location.pathname === "/") {
    selectedKey = "/";
  } else if (location.pathname === "/add") {
    selectedKey = "add";
  } else if (location.pathname === "/stats") {
    selectedKey = "stats";
  }

  return (
    <header>
      <Container>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="add" icon={<DollarOutlined />}>
            <Link to="/add">Add Expense</Link>
          </Menu.Item>
          <Menu.Item key="stats" icon={<PieChartOutlined />}>
            <Link to="/stats">Statistics</Link>
          </Menu.Item>
        </Menu>
      </Container>
    </header>
  );
};
