
const initialState = {
    visible: false,
    userList: ['a', 'b'],
}

export const createTaskReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'OPEN_DRAWER':
            return { ...state, visible: true }

        case 'CLOSE_DRAWER':
            return { ...state, visible: false }

        case 'GET_USERLIST':
            return { ...state }

        default:
            return state
    }
}
