import { RouteInterface} from '../../../types/Props';
export const InitailState = {
    name: '',
    description: '',
    geo :  { "type": "LineString",
            "coordinates": [  [
            -2.803838783240842,
            54.04921468425195
        ],]},
    direction: "None",
    colour : '#90EE90',
    experienceId: "66f906272c056318f023e4cc",
}

export const typeReducer = (state: RouteInterface, action: ActionType): RouteInterface => {
    switch (action.type) {
        case 'handleInput':
            console.log("action.payload" , action.payload);
            return { ...state,  ...action.payload };
        case 'handleAddGeo':
            return { ...state, geo: {...state.geo,  coordinates: [
                ...(state.geo?.coordinates || []),  // Spread existing coordinates
                action.payload?.geo                  // Add the new coordinate
            ]}};
        case 'handleRevertGeo':
            return { ...state, geo: {...state.geo, coordinates: state.geo?.coordinates.slice(0, -1)}};
        default:
            return state;
    }
}


export type ActionType =
    | { type: 'handleInput'; payload: {[key: string]: string } }
    | { type: 'handleAddGeo'; payload: { geo: number[] } }
    | { type: 'handleRevertGeo' };
