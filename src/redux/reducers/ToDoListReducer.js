import { add_task, change_theme, delete_task, done_task, edit_task, update_task} from "../types/ToDoListTypes"
import { ToDoListDarkTheme } from "../../JSS_StyledCompontents/Themes/ToDoListDarkTheme";
import { arrTheme } from "../../JSS_StyledCompontents/Themes/ThemeManager";

const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: true },
        { id: 'task-2', taskName: 'task 2', done: false },
        { id: 'task-3', taskName: 'task 3', done: true },
        { id: 'task-4', taskName: 'task 4', done: false },

    ],
    taskEdit: { id: '-1', taskName: '', done: false },

}



export const ToDoListReducer =  (state = initialState, action) => {
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
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);
            if (index !== -1) {
                alert('task name already exists !');
                return { ...state };
            }

            taskListUpdate.push(action.newTask);

            //Xử lý xong thì gán taskList mới vào taskList
            state.taskList = taskListUpdate;

            return { ...state }
        }
        case change_theme: {
            //Tìm theme dựa vào action.themeId được chọn
            let theme = arrTheme.find(theme => theme.id === +action.themeId);
            if (theme) {
                console.log(theme);
                //set Lại theme cho state.themeToDoList
                state.themeToDoList = { ...theme.theme };
            }

            return { ...state };
        }
        case done_task: {
            //Click vào button check => dispatch lên action có taskID
            let taskListUpdate = [...state.taskList];
            //Từ task id tìm ra task đó ở vị trí nào trong mảng tiến hành cập nhật lại thuộc tính done = true. Và cập nhật lại state của redux
            let index = taskListUpdate.findIndex(task => task.id === action.taskId);
            if (index !== -1) {
                taskListUpdate[index].done = true;
            }

            // state.taskList = taskListUpdate;
            return { ...state, taskList: taskListUpdate }
        }

        case delete_task: {
            let taskListUpdate = [...state.taskList];
            //Gán lại giá trị cho mang taskListUpdate = chính nó nhưng filter không có taskId đó
            taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId);

            return {...state,taskList:taskListUpdate}

            // return { ...state, taskList: state.taskList.filter(task => task.id !== action.taskId) }
        }

        case edit_task: {
            return { ...state, taskEdit: action.task }
        }
        
        case update_task:{
            // state.taskEdit = {...state.taskEdit, taskName : action.taskName}; 
            // let taskListUpdate = [...state.taskList];

            // //Tìm trong taskList có taskEdit khum rồi chỉnh sửa
            // let index = taskListUpdate.findIndex((item)=>item.id === state.taskEdit.id);
            // if(index !== -1){
            //     taskListUpdate[index]= state.taskEdit;
            // }
            
            // // Phải tạo object mới hoặc sao chép ra địa chỉ mới do trước đó đã sao chép địa chỉ vào taskListUpdate
            // state.taskEdit = {id:"-1",taskName:"",done:false};

            state.taskEdit.taskName = action.taskName;//an toan nen tao object moi
         
            let taskListUpdate = [...state.taskList];
        
            let index = taskListUpdate.findIndex((item)=>item.id === state.taskEdit.id);
          
            if(index !== -1){
                taskListUpdate[index]= state.taskEdit;
            }

            // Làm như vậy địa chỉ của taskEdit đã đc trỏ vô taskListUpdate nên ko update đc mà phải tạo mới
            // state.taskEdit.taskName = "";
            // state.taskEdit.id = "-1";
            // state.taskEdit.done = false;
            
             state.taskEdit = {id:"-1",taskName:"",done:false};

            return {...state,taskList:taskListUpdate };
 
        }
        default:
            return { ...state };

    }
}
