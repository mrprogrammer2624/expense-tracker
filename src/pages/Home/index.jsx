import { Container } from "@/components";
import { Table, Input, Space, DatePicker, Form, InputNumber } from "antd";
import { deleteExpense } from "@/action";
import moment from "moment";
import useExpensesTable from "@/hooks/useExpensesTable";

const ExpenseList = () => {
  const {
    expenses,
    form,
    filteredInfo,
    sortedInfo,
    getColumnSearchProps,
    handleChange,
    isEditing,
    edit,
    cancel,
    save,
    dispatch,
  } = useExpensesTable();

  const columns = [
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => a.amount - b.amount,
      sortOrder: sortedInfo.columnKey === "amount" && sortedInfo.order,
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ...getColumnSearchProps("description"),
      editable: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
      sortOrder: sortedInfo.columnKey === "date" && sortedInfo.order,
      editable: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [...new Set(expenses.map((expense) => expense.category))].map(
        (category) => ({ text: category, value: category })
      ),
      filteredValue: filteredInfo.category || null,
      onFilter: (value, record) => record.category.includes(value),
      editable: true,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      filters: [
        { text: "Cash", value: "cash" },
        { text: "Credit", value: "credit" },
      ],
      filteredValue: filteredInfo.paymentMethod || null,
      onFilter: (value, record) => record.paymentMethod.includes(value),
      editable: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a onClick={() => save(record.id)} style={{ marginRight: 8 }}>
              Save
            </a>
            <a onClick={cancel}>Cancel</a>
          </span>
        ) : (
          <Space size="middle">
            <a onClick={() => edit(record)}>Edit</a>
            <a onClick={() => dispatch(deleteExpense(record.id))}>Delete</a>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          col.dataIndex === "amount"
            ? "number"
            : col.dataIndex === "date"
            ? "date"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        columns={mergedColumns}
        dataSource={expenses}
        onChange={handleChange}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export const Home = () => {
  return (
    <Container>
      <ExpenseList />
    </Container>
  );
};

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  ...restProps
}) => {
  const inputNode =
    inputType === "number" ? (
      <InputNumber />
    ) : inputType === "date" ? (
      <DatePicker />
    ) : (
      <Input />
    );

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
