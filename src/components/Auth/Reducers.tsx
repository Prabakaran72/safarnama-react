// Initial state for auth
export const InitialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    toast: {
        message: '',
        position: '',
        type: '',
    },
    expericences: [],
    Places: [],
    Routes: [],
    Medias: [],
    Projets: [],
};


export const Reducers = (state: any, action: any) => {
    switch (action.type) {
        case 'Auth/Login':
            return { ...state, user: action.payload, isAuthenticated: true };
        case 'Auth/Logout':
            return { ...state, user: null, isAuthenticated: false };
        case 'newFunction':
            return { ...state };
        case 'App/isLoading':
            return { ...state, isLoading: action.payload }; // Update loading state
        case 'App/toast':
            return { ...state, toast: {...action.payload }}; // Update loading state
        case 'App/updateActiveMenu':
            return { ...state, activeMenu: { ...action.payload?.menu }, isLoading: action.payload?.isLoading };
        default:
            return state;
    }
};
