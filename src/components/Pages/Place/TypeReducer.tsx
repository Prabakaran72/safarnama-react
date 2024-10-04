import { AddPlaceTypeInterface,AddPlaceInterface} from '../../../types/Props';
export const InitailState = {
    name: '',
    file: '',
    icon: '',
    type: '',
}

export const typeReducer = (state: AddPlaceTypeInterface, action: ActionType): AddPlaceTypeInterface => {
    switch (action.type) {
        case 'handleName':
            return { ...state, name: action.payload };
        case 'handleIconSelect':
            return { ...state, icon: action.payload?.icon || null, file: null, 'type': 'icon' };
        case 'handleFileUploaded':
            return { ...state, file: action.payload?.file || null, icon: null, 'type': 'image' };
        default:
            return state;
    }
}


export type ActionType =
    | { type: 'handleName'; payload: string }
    | { type: 'handleIconSelect'; payload: { icon: string } }
    | { type: 'handleFileUploaded'; payload: { file: File } };

export type PlaceActionType =
    | { type: 'handleName'; payload: string }
    | { type: 'handleTypeSelect'; payload: { type: string } }
    | { type: 'handleFileUploaded'; payload: { file: File } };


export const placeInitailState = {
    name: '',
    type: '',
}
export const placeReducer = (state: AddPlaceInterface, action: PlaceActionType): AddPlaceInterface => {
    switch (action.type) {
        case 'handleName':
            return { ...state, name: action.payload };
        case 'handleTypeSelect':
            return { ...state, type: action.payload?.type || '', };
        default:
            return state;
    }
}

