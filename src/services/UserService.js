import instance from "../ulti/axios/http";


export const DeleteUser = (idUser) => {
    return instance.delete(`Users/deleteUser?id=${idUser}`)
}

export const EditUser = (userEdit) => {
    return instance.put('Users/editUser', userEdit
    )
}

export const getUserByProject = (id) => {
    return instance.get(`Users/getUserByProjectId?idProject=${id}`)
}




