import { combineReducers } from "redux";
import setEditorInfo from "./setEditorInfo";
import setArticlesInfo from "./setArticlesInfo";
import setReviewInfo from "./setReviewInfo";

const reducers = combineReducers({
    editor: setEditorInfo,
    articles: setArticlesInfo,
    review: setReviewInfo
});

export default reducers

export type State = ReturnType<typeof reducers>