
import instance from "../ulti/axios/http";




export const getStatusService = () => {
    return instance.get('Status/getAll')
}

export const getPriorityService = () => {
    return instance.get('Priority/getAll?id=0')
}

export const getTaskTypeService = () => {
    return instance.get('TaskType/getAll')
}

export const getUserByProject = (id) => {
    return instance.get('/Users/getUserByProjectId', {
        params: {
            idProject: id,
        },
    })
}

export const createTaskService = (task) => {
    return instance.post('/Project/createTask', task);
}

