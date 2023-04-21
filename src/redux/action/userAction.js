import { getUserByProject } from "../../services/createTaskService"

export const getUserByProjectAction = (id) => {
    return (dispatch2) => {
        let user = getUserByProject(id);
        user.then((res) => {
            let action = {
                type: 'GET_USER_BYPROJECT',
                data: res.data.content,
            }
            dispatch2(action);
        })
        user.catch((err) => {
            console.log(err)
        })

    }
} 