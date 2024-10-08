import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "antd";
import moment from "moment";
import { updateExpense } from "@/action";

const useExpensesTable = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = () => ({});

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ ...record, date: moment(record.date) });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...expenses];
      const index = newData.findIndex((item) => key === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
          date: row.date.format("YYYY-MM-DD"),
        });
        dispatch(updateExpense(newData[index]));
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  return {
    expenses,
    form,
    editingKey,
    searchText,
    searchedColumn,
    filteredInfo,
    sortedInfo,
    handleSearch,
    handleReset,
    getColumnSearchProps,
    handleChange,
    isEditing,
    edit,
    cancel,
    dispatch,
    save,
  };
};

export default useExpensesTable;
