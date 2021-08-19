import React, { useEffect  } from 'react';
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
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state';

function App() {

  const dispatch = useDispatch();
  const { addLandingPageInfo } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    addLandingPageInfo();
  }, [addLandingPageInfo]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Categories />
      <Hero />
      <Editor />
      <Match />
      <Articles />
      <Reviews />
      <Popular />
      <Videos />
      <Trending />
      <Brands />
      <Footer />
    </>
  );
}

export default App;
