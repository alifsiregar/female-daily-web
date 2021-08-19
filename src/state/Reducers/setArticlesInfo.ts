import { ActionType } from '../Action-Types';
import {Action} from '../Actions';
import { IState } from '../../interfaces';

const initialState: IState['articlesComponent'] = [];

const setArticlesInfo = (state: IState['articlesComponent'] = initialState, action: Action) => {
    switch (action.type){
        case ActionType.ADD_ARTICLES_INFO: 
            return state = action.payload;
        default:
            return state;
    }
}

export default setArticlesInfo;