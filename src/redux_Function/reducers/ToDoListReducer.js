import { ToDoListDarkTheme } from "../../JSS_StyledCompontents/Themes/ToDoListDarkTheme";
import { arrTheme } from "../../JSS_StyledCompontents/Themes/ThemeManager";
import { add_task, del_task, done_task, edit_task } from "../types/ToDoListTypes";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "Task 1", done: true },
    { id: "task-2", taskName: "Task 2", done: false },
    { id: "task-3", taskName: "Task 3", done: true },
    { id: "task-4", taskName: "Task 4", done: false },
  ],
  editTask: { id: "task-2", taskName: "Task 2", done: false },
};

export const ToDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      // console.log('todo',action.newTask)
      //Kiểm tra rổng
      if (action.newTask.taskName.trim() === '') {
        alert('Task name is required!');
        return { ...state }
      }
      //Kiểm tra tồn tại
      let taskListUpdate = [...state.taskList];
      //------------------------------------------------------------------------------
      // phải tra theo task name đẻ kiếm tra chuỗi có trùng nhau vì khoảng cách hay ko
      //------------------------------------------------------------------------------ 
      let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName.trim());
      if (index !== -1) {
        alert('task name already exists !');
        return { ...state };
      }

      taskListUpdate.push(action.newTask);

      //Xử lý xong thì gán taskList mới vào taskList
      state.taskList = taskListUpdate;

      return { ...state }
    }

    case "change_theme": {
      // themeId được gửi dưới dạng string
      let theme = arrTheme.find((item) => item.id === +action.themeId);

      if (theme) {
        // set lại theme cho redux
        // theo mình hiểu thì nếu là object đơn lẻ thì ko cần phải copy lại object nhưng chỉ áp dụng với 1 object hoàn chỉnh hay sao á nếu chỉnh key trong object thì ko đc 
        state.themeToDoList = theme.theme;
        // state.themeToDoList = { ...state.themeToDoList,themeToDoList: theme.theme };

      }
      return { ...state, };
    }

    case done_task: {
      let taskListUpdate = [...state.taskList];
      // let result = taskListUpdate.find((item)=>item.id === action.taskId)
      // // result đag là 1 địa chỉ trong mảng update thay đổi thành true thì thay đổi mảng update
      // result.done = true;
      let index = taskListUpdate.findIndex((item) => item.id === action.taskId);

      if (index !== -1) {
        // đã tìm thấy task cần tìm
        taskListUpdate[index].done = true;
      }
      return { ...state, taskList: taskListUpdate };
    }

    case del_task: {
      let taskListUpdate = [...state.taskList];
      // let result = taskListUpdate.find((item)=>item.id === action.taskId)
      // // result đag là 1 địa chỉ trong mảng update thay đổi thành true thì thay đổi mảng update
      // result.done = true;
      // let index = taskListUpdate.findIndex((item)=> item.id === action.taskId); 
      // console.log(index);
      // if(index!==-1){
      //   // đã tìm thấy task cần tìm
      //    taskListUpdate.splice(index,1);
      // }
      taskListUpdate = taskListUpdate.filter((item) => item.id !== action.taskId);
      return { ...state, taskList: taskListUpdate };
    }

    case edit_task:{
      state.editTask = action.task;
      // console.log(action);
      return {...state};
    }

    default:
      return state;
  }
};
