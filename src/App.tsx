import React, { useState, useEffect  } from 'react';
import { GlobalStyle } from './styles';
import {
  Header,
  Categories,
  Hero,
  Editor
} from './components';
import { getLandingPageData } from './services';

function App() {

  const [editorInfo, setEditorInfo] = useState<{
    editor: string,
    role: string,
    product: {
      name: string,
      rating: number,
      description: string,
      image: string
    }
  }[]>([]);
  const [articlesInfo, setArticlesInfo] = useState<{}[]>([]);
  const [reviewInfo, setReviewInfo] = useState<{}[]>([]);

  const getData = async () : Promise<void> => {
    await getLandingPageData().then((res:any) => {
      setEditorInfo(res["editor's choice"]);
      setArticlesInfo(res["latest articles"]);
      setReviewInfo(res["latest review"]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Categories />
      <Hero />
      <Editor editorInfo={editorInfo} />
    </>
  );
}

export default App;
