import { ActionType } from '../Action-Types';
import {Action} from '../Actions';

const initialState: {
  title: string,
  author: string,
  published_at : string
}[]= [];

const setArticlesInfo = (state: {
  title: string,
  author: string,
  published_at : string
}[] = initialState, action: Action) => {
    switch (action.type){
        case ActionType.ADD_ARTICLES_INFO: 
            return state = action.payload;
        default:
            return state;
    }
}

export default setArticlesInfo;