import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "antd";
import { Line } from "@ant-design/charts";
import moment from "moment";
import { Container } from "@/components";

export const ExpenseStats = () => {
  const expenses = useSelector((state) => state.expenses);
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    updateCharts();
  }, [expenses]);

  const updateCharts = () => {
    const monthlyData = {};
    expenses.forEach((expense) => {
      const month = moment(expense.date).format("YYYY-MM");
      if (!monthlyData[month]) {
        monthlyData[month] = 0;
      }
      monthlyData[month] += expense.amount;
    });

    const lineData = Object.keys(monthlyData).map((month) => ({
      month,
      amount: monthlyData[month],
    }));

    setLineData(lineData);
  };

  const lineConfig = {
    data: lineData,
    xField: "month",
    yField: "amount",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#427b2e",
      },
    },
    color: ["#427b2e", "#427b2e"],
    interactions: [{ type: "element-active" }],
  };

  return (
    <Container>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Monthly Expense Comparison">
            <Line {...lineConfig} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
