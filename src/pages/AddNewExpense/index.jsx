import { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Button,
  AutoComplete,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "@/action";

const { Option } = Select;

export const AddNewExpense = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onFinish = (values) => {
    const newExpense = {
      id: Date.now(),
      ...values,
      date: values.date.format("YYYY-MM-DD"),
    };
    dispatch(addExpense(newExpense));
    form.resetFields();
  };

  const handleCategoryChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      const categories = [
        ...new Set(expenses.map((expense) => expense.category)),
      ];
      setAutoCompleteResult(
        categories.filter((category) =>
          category.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="amount"
        label="Amount"
        rules={[
          { required: true, message: "Please input the amount!" },
          {
            type: "number",
            min: 0,
            message: "Amount must be a positive number!",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please input the description!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="date"
        label="Date"
        rules={[{ required: true, message: "Please select the date!" }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: "Please input the category!" }]}
      >
        <AutoComplete
          options={autoCompleteResult.map((category) => ({ value: category }))}
          onSearch={handleCategoryChange}
          placeholder="Input or select a category"
        />
      </Form.Item>
      <Form.Item
        name="paymentMethod"
        label="Payment Method"
        rules={[
          { required: true, message: "Please select the payment method!" },
        ]}
      >
        <Select>
          <Option value="cash">Cash</Option>
          <Option value="credit">Credit</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Expense
        </Button>
      </Form.Item>
    </Form>
  );
};
