// rxaction
import { add_task, change_theme, del_task, done_task, edit_task } from "../types/ToDoListTypes";

//**************************** */
// Cách viết không có return
//**************************** */
// export const fetchAddTask = (newTask) => {
//   return {
//     type: add_task,
//     payload: newTask,
//   };
// };


export const fetchAddTask = (newTask) => ({
  type: add_task,
  newTask,
});

export const fetchChangeTheme = (themeId) => ({
  type: change_theme,
  themeId,
});

export const fetchDoneTask = (taskId)=>({
  type: done_task,
  taskId,
});

export const fetchDelTask = (taskId)=>({
  type: del_task,
  taskId,
})

export const fetchEditTask = (task)=>({
  type: edit_task,
  task,
})