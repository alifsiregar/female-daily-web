import { ActionType } from '../Action-Types';
import {Action} from '../Actions';

const initialState: {
  user: string,
  profile: string[],
  product: {
    image: string,
    name: string,
    desc: string
  },
  star: number,
  comment: string
}[]= [];

const setReviewInfo = (state:{
  user: string,
  profile: string[],
  product: {
    image: string,
    name: string,
    desc: string
  },
  star: number,
  comment: string
}[] = initialState, action: Action) => {
    switch (action.type){
        case ActionType.ADD_REVIEW_INFO: 
            return state = action.payload;
        default:
            return state;
    }
}

export default setReviewInfo;