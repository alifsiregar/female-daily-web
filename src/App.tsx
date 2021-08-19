import React, { useState, useEffect  } from 'react';
import { GlobalStyle } from './styles';
import {
  Header,
  Categories,
  Hero,
  Editor,
  Match,
  Articles,
  Reviews,
  Popular,
  Videos,
  Trending,
  Brands,
  Footer
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
  
  const [articlesInfo, setArticlesInfo] = useState<{
    title: string,
    author: string,
    published_at : string
  }[]>([]);

  const [reviewInfo, setReviewInfo] = useState<{
    user: string,
    profile: string[],
    product: {
      image: string,
      name: string,
      desc: string
    },
    star: number,
    comment: string
  }[]>([]);

  const getData = async() : Promise<void> => {
    await getLandingPageData().then((res:any) => {
      setEditorInfo(res["editor's choice"]);
      setArticlesInfo(res['latest articles']);
      setReviewInfo(res['latest review']);
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
      <Match editorInfo={editorInfo} />
      <Articles articlesInfo={articlesInfo} />
      <Reviews reviewInfo={reviewInfo} />
      <Popular />
      <Videos />
      <Trending editorInfo={editorInfo} />
      <Brands />
      <Footer />
    </>
  );
}

export default App;
