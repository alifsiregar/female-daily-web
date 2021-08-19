import { ActionType } from '../Action-Types';
import {Action} from '../Actions';
import { IState } from '../../interfaces';

const initialState: IState['editorComponent'] = [];

const setEditorInfo = (state: IState['editorComponent'] = initialState, action: Action) => {
    switch (action.type){
        case ActionType.ADD_EDITOR_INFO: 
            return state = action.payload;
        default:
            return state;
    }
}

export default setEditorInfo;