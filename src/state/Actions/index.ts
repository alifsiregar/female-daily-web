import {ActionType} from '../Action-Types';

interface AddEditorAction {
    type: ActionType.ADD_EDITOR_INFO,
    payload: {
        editor: string,
        role: string,
        product: {
          name: string,
          rating: number,
          description: string,
          image: string
        }
    }[]
}

interface AddArticlesAction {
  type: ActionType.ADD_ARTICLES_INFO,
  payload: {
    title: string,
    author: string,
    published_at : string
  }[]
}

interface AddReviewAction {
  type: ActionType.ADD_REVIEW_INFO,
  payload: {
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
}

export type Action = AddEditorAction | AddArticlesAction | AddReviewAction