import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Select } from "antd";
import { Line, Pie } from "@ant-design/charts";
import moment from "moment";

const { Option } = Select;

export const ExpenseStats = () => {
  const expenses = useSelector((state) => state.expenses);
  const [selectedMonth, setSelectedMonth] = useState(
    moment().format("YYYY-MM")
  );
  const [lineData, setLineData] = useState([]);
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    updateCharts();
  }, [expenses, selectedMonth]);

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

    const categoryData = {};
    expenses
      .filter(
        (expense) => moment(expense.date).format("YYYY-MM") === selectedMonth
      )
      .forEach((expense) => {
        if (!categoryData[expense.category]) {
          categoryData[expense.category] = 0;
        }
        categoryData[expense.category] += expense.amount;
      });

    const pieData = Object.keys(categoryData).map((category) => ({
      category,
      amount: categoryData[category],
    }));

    setPieData(pieData);
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
        fill: "#aaa",
      },
    },
  };

  const pieConfig = {
    data: pieData,
    angleField: "amount",
    colorField: "category",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [{ type: "pie-legend-active" }, { type: "element-active" }],
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Monthly Expense Comparison">
            <Line {...lineConfig} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={24}>
          <Card
            title="Category Breakdown"
            extra={
              <Select
                defaultValue={selectedMonth}
                style={{ width: 120 }}
                onChange={(value) => setSelectedMonth(value)}
              >
                {[
                  ...new Set(
                    expenses.map((expense) =>
                      moment(expense.date).format("YYYY-MM")
                    )
                  ),
                ].map((month) => (
                  <Option key={month} value={month}>
                    {month}
                  </Option>
                ))}
              </Select>
            }
          >
            <Pie {...pieConfig} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
