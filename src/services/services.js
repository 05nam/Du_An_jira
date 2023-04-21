
import instance from "../ulti/axios/http";



export const signIn = (data) => {
    return instance.post('Users/signin', data)

}

export const signUp = (data) => {
    return instance.post('Users/signup', data)

}
export const getAllProject = () => {
    return instance.get('Project/getAllProject')

}

export const deleteProject = (id, token) => {
    return instance.delete('Project/deleteProject', {
        params: {
            projectId: id,
        },

        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export const getProjectInfo = (id, token) => {
    return instance.get('Project/getProjectDetail', {
        params: {
            id: id,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
export const updateProject = (id, token, data) => {
    return instance.put('Project/updateProject', data, {
        params: {
            projectId: id
        },
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
}

export const createProject = (token, data) => {
    return instance.post('Project/createProjectAuthorize', data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
}

export const getProjectCategory = () => {
    return instance.get('ProjectCategory');
}

export const removeUserFromProject = (token, data) => {
    return instance.post('Project/removeUserFromProject', data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
}

export const getUsers = (token) => {
    return instance.get('Users/getUser', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const assignUserProject = (token, data) => {
    return instance.post('Project/assignUserProject', data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
}

export const getProjectDetail = (token, id) => {
    return instance.get('Project/getProjectDetail', {
        params: {
            id: id,
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

}
