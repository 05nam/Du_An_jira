
import instance from "../ulti/axios/http";




export const getTaskDetailService = (id) => {
    return instance.get(`Project/getTaskDetail?taskId=${id}`);
};

export const updateStatusService = (task, status) => {
    return instance.put('Project/updateStatus', {
        taskId: task,
        statusId: status

    })
}


export const updatePrioService = (task, prio) => {
    return instance.put('Project/updatePriority', {
        taskId: task,
        priorityId: prio

    })
}

export const updateDesService = (task, des) => {
    return instance.put('Project/updateDescription', {
        taskId: task,
        description: des

    })
}

export const updateEstimateService = (task, hour) => {
    return instance.put('Project/updateEstimate', {
        taskId: task,
        originalEstimate: hour
    })
}


export const updateTimeTrackingService = (idTask, timeSpent, timeRemain) => {
    return instance.put('Project/updateTimeTracking', {
        "taskId": idTask,
        "timeTrackingSpent": timeSpent,
        "timeTrackingRemaining": timeRemain
    })
}


export const insertCommentService = (idTask, content) => {
    return instance.post('Comment/insertComment', {
        "taskId": idTask,
        "contentComment": content
    })
}


export const updateCommentService = (idCom, content) => {
    return instance.put(`Comment/updateComment`, {
        id: idCom,
        contentComment: content
    })
}


export const deleteCommentService = (idCom) => {
    return instance.delete(`Comment/deleteComment`, {
        params: {
            idComment: idCom
        }
    })
}
