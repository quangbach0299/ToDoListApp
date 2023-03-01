import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { fetchAddTask, fetchChangeTheme, fetchDelTask, fetchDoneTask, fetchEditTask } from "../../../redux/actions/ToDoListAction";
import { Button } from "../../ComponentToDoList/Button";
import { Container } from "../../ComponentToDoList/Container";
import { Dropdown } from "../../ComponentToDoList/Dropdown";
// eslint-disable-next-line no-unused-vars
import { Heading1, Heading2, Heading3 } from "../../ComponentToDoList/Heading";
import { Table, Th, Thead, Tr } from "../../ComponentToDoList/Table";
import { TextField } from "../../ComponentToDoList/TextField";
import { arrTheme } from "../../Themes/ThemeManager";

// import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
// import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";

export const ToDoList = () => {
  // eslint-disable-next-line no-unused-vars
  let [taskNameValue] = useState(0)


  const themeToDoList = useSelector((state) => {
    return state.ToDoListReducer.themeToDoList;
  });

  const taskList = useSelector((state) => state.ToDoListReducer.taskList);
  //Task cần update được lấy từ redux
  const editTask = useSelector((state) => state.ToDoListReducer.editTask);

  let dispatch = useDispatch();
  let ChangeTheme = (e) => {
    dispatch(fetchChangeTheme(e.target.value));
  };

  const renderTaskToDo = () => {
    return taskList
      .filter((item) => !item.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Th>{item.taskName}</Th>
            <Th className="text-right">
              <Button onClick={() => {
                dispatch(fetchEditTask(item))
              }}>
                <i className="fa fa-edit"></i>
              </Button>
              <Button onClick={() => {
                dispatch(fetchDoneTask(item.id))
              }}>
                <i className="fa fa-check"></i>
              </Button>
              <Button onClick={() => {
                dispatch(fetchDelTask(item.id))
              }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  const renderTaskComplete = () => {
    return taskList
      .filter((item) => item.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Th>{item.taskName}</Th>
            <Th className="text-right">
              <Button onClick={() => {
                dispatch(fetchDelTask(item.id))
              }}>
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  // Viết hàm render import theme manager
  const renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option key={index} value={theme.id}>
          {theme.name}
        </option>
      );
    });
  };
  
  // useEffect(()=>{
  //   return ()=>{
  //     taskNameValue = editTask;
  //   }
  // },[editTask]);


  return (
    <div>
      <ThemeProvider theme={themeToDoList}>
        <Container className="w-50">
          <Dropdown onChange={ChangeTheme}>{renderTheme()}</Dropdown>
          <Heading3>To Do List</Heading3>
          <TextField value={
            //Task cần update được lấy từ props thông qua state của redux 
            editTask.taskName}

            onChange={(e) => {
              //Khi nhập liệu thì setState lúc đó react render lại giao diện mà khi render lại giao diện nó lấy luôn thuộc tính editTask làm giá trị điền vào ô textfield luôn
              //Đây là thuộc tính của lifecycle

              taskNameValue = e.target.value;
              console.log(taskNameValue);
            }}
            label="Taskname"
            className="w-50"
          ></TextField>
          <Button
            onClick={() => {
              // Lấy thông tin người dùng nhập vào input lưu vào taskNameValue trong TextField
              // Tạo ra 1 task project
              let task = {
                id: Date.now(),
                taskName: taskNameValue,
                done: false,
              };
              // Đưa task lên redux
              dispatch(fetchAddTask(task));
            }}
            className="ml-2"
          >
            <i className="fa fa-plus"></i>Add Task
          </Button>
          <Button className="ml-2">
            <i className="fa fa-upload"></i>Update Task
          </Button>
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>{renderTaskToDo()}</Thead>
          </Table>
          <Heading3>Task Complete</Heading3>
          <Table>
            <Thead>{renderTaskComplete()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    </div>
  );
};
