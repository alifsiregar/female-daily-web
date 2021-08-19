import {ActionType} from '../Action-Types';
import {
  IState
} from '../../interfaces';

interface AddEditorAction {
    type: ActionType.ADD_EDITOR_INFO,
    payload: IState['editorComponent']
}

interface AddArticlesAction {
  type: ActionType.ADD_ARTICLES_INFO,
  payload: IState['articlesComponent']
}

interface AddReviewAction {
  type: ActionType.ADD_REVIEW_INFO,
  payload: IState['reviewComponent']
}

export type Action = AddEditorAction | AddArticlesAction | AddReviewAction