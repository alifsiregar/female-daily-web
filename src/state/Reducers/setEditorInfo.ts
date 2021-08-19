import { ActionType } from '../Action-Types';
import {Action} from '../Actions';

const initialState: {
    editor: string,
    role: string,
    product: {
      name: string,
      rating: number,
      description: string,
      image: string
    }
  }[]= [];

const setEditorInfo = (state:{
    editor: string,
    role: string,
    product: {
      name: string,
      rating: number,
      description: string,
      image: string
    }
  }[] = initialState, action: Action) => {
    switch (action.type){
        case ActionType.ADD_EDITOR_INFO: 
            return state = action.payload;
        default:
            return state;
    }
}

export default setEditorInfo;