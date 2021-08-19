import { ActionType } from "../Action-Types";
import { Dispatch } from 'redux'
import { Action } from '../Actions'
import { getLandingPageData } from '../../services';

const getData = async () => {
    let contents: {
        "editor's choice" : {
            editor: string,
            role: string,
            product: {
              name: string,
              rating: number,
              description: string,
              image: string
            }
          }[],
        "latest articles" : {
            title: string,
            author: string,
            published_at : string
          }[],
        "latest review" : {
            user: string,
            profile: string[],
            product: {
              image: string,
              name: string,
              desc: string
            },
            star: number,
            comment: string
          }[]
    } = {
        "editor's choice" :[],
        "latest articles" : [],
        "latest review" : []
    }

    await getLandingPageData().then((res : any) => {
        contents = res;
    }).catch((e) => console.log(e));

    return contents;
}

export const addLandingPageInfo = () => {
    return (dispatch: Dispatch<Action>) => {
        getData().then((res) => {
            dispatch({
                type: ActionType.ADD_EDITOR_INFO,
                payload: res["editor's choice"]
            });
            dispatch({
                type: ActionType.ADD_ARTICLES_INFO,
                payload: res["latest articles"]
            });
            dispatch({
                type: ActionType.ADD_REVIEW_INFO,
                payload: res["latest review"]
            });
        });
    }
}
