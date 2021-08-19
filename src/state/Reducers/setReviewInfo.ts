import { ActionType } from '../Action-Types';
import { Action } from '../Actions';
import { IState  } from '../../interfaces';

const initialState: IState['reviewComponent'] = [];

const setReviewInfo = (state: IState['reviewComponent'] = initialState, action: Action) => {
    switch (action.type){
        case ActionType.ADD_REVIEW_INFO: 
            return state = action.payload;
        default:
            return state;
    }
}

export default setReviewInfo;