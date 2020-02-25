const initialState = {
    users: [
        {
            id: null,
            username: null,
            password: null
        }
    ],
    user: {
        id: null,
        username: null,
        password: null
    },
    isLoading: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_USER_START":
            return {
                ...state,
                isLoading: true
            };
        case "REGISTER_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case "REGISTER_USER_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case "LOGIN_USER_START":
            return {
                ...state,
                isLoading: true
            };
        case "LOGIN_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case "LOGIN_USER_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case "GET_USERS_START":
            return {
                ...state,
                isLoading: true
            };
        case "GET_USERS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                users: action.payload
            };
        case "GET_USERS_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case "GET_ONE_USER_START":
            return {
                ...state,
                isLoading: true
            };
        case "GET_ONE_USER_START":
            return {
                ...state,
                isLoading: true
            }
        case "GET_ONE_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case "GET_ONE_USER_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}