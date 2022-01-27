import { Button, message, Table } from "antd";
import React, { useState } from "react";
import Forma from "./Forma";
import { v4 as uuid4 } from "uuid";
import Tablica from "./component/Tablica";
import axios from "axios";
import axiosInstance from "./component/api/utils/axiosInstance";

const App = () => {
  const INIT_STATE = {
    studentId: null,
    studentFirstName: "",
    studentLastName: "",
    studentEmail: "",
  };
  const [update, setUpdate] = useState(false);
  const [value, setValue] = useState(INIT_STATE);
  const [tableValues, setTableValues] = useState([]);
  const handleDelete = (studentId) => (e) => {
    const tableValuesCopy = [...tableValues].filter(
      (element) => element.studentId !== studentId
    );
    setTableValues(tableValuesCopy);
    setUpdate(false);
    axiosInstance.delete("/student/" + studentId).then((res) => {
      console.log(res.data);
    });
  };
  const enableUpdate = (studentId) => (e) => {
    const findElement = tableValues.find(
      (element) => element.studentId === studentId
    );
    console.log(findElement);
    console.log(value);
    setValue(findElement);
    setUpdate(true);
  };
  const handleUpdate = () => {
    setTableValues([
      ...tableValues.map((element) => {
        return element.studentId === value.studentId ? { ...value } : element;
      }),
    ]);
    setUpdate(false);

    axiosInstance.put("/student/" + value.studentId, value).then((res) => {
      console.log(res.data);
    });
    setValue(INIT_STATE);
  };
  const colums = [
    {
      title: "Ime",
      dataIndex: "studentFirstName",
      key: "studentFirstName",
    },
    {
      title: "Prezime",
      dataIndex: "studentLastName",
      key: "studentLastName",
    },
    {
      title: "Email",
      dataIndex: "studentEmail",
      key: "studentEmail",
    },
    {
      title: "Action",
      key: "action",
      render: (element) => {
        return (
          <>
            <Button onClick={handleDelete(element.studentId)}>Delete</Button>
            <Button onClick={enableUpdate(element.studentId)}>Update</Button>
          </>
        );
      },
    },
  ];

  const onValueChange = ({ target }) => {
    console.log(target.name);
    console.log(target.value);
    setValue({ ...value, [target.name]: target.value });
    console.log(value);
  };
  const onSub = () => {
    const valueCopy = { ...value };
    console.log(valueCopy);
    setTableValues([...tableValues, valueCopy]);

    axiosInstance.post("/student", valueCopy).then((res) => {
      console.log(res.data);
    });
    setValue(INIT_STATE);
  };
  const getData = () => {
    axiosInstance.get("/student").then((res) => {
      console.log(res.data);
      const valueCopy = res.data;
      console.log(valueCopy);
      setTableValues(valueCopy);
    });
  };
  return (
    <>
      <Button onClick={getData}>Get data</Button>
      <Forma
        studentFirstName={value.studentFirstName}
        studentLastName={value.studentLastName}
        studentEmail={value.studentEmail}
        onValueChange={onValueChange}
        onSub={onSub}
        update={update}
        onUpdate={handleUpdate}
      />
      <Table dataSource={tableValues} columns={colums} />
    </>
  );
};

export default App;
