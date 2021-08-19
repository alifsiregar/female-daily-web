import React from 'react';
import {  useSelector } from 'react-redux';
import { State } from '../../state';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Navigation,
} from 'swiper/core';
import {
    Container,
    TrendingContent,
    Header,
    HeaderText,
    HeaderSeeMore,
    RightArrow,
    CardContainer,
    ButtonContainer,
    ButtonNavLeft,
    ButtonNavRight,
    LeftArrow
} from './styles';
import Card from '../Card';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Pagination, Navigation]);

const Trending  = () => {

    const editor = useSelector ((state: State) => state.editor);

    const navPrevButton = React.useRef<HTMLButtonElement>(null);
    const navNextButton = React.useRef<HTMLButtonElement>(null);
    const paginationLabel = React.useRef<HTMLHeadingElement>(null);
  
    const onBeforeInit = (Swiper: SwiperCore): void => {
      if (typeof Swiper.params.navigation !== 'boolean') {
        const { navigation } = Swiper.params;
          navigation!.prevEl = navPrevButton.current;
          navigation!.nextEl = navNextButton.current;
      }
  
      if (typeof Swiper.params.pagination !== 'boolean') {
              Swiper.params.pagination!.el = paginationLabel.current;
      }
    };

    return (
        <Container>
            <TrendingContent>
                <Header>
                    <HeaderText>
                        <h2>
                            Trending This Week
                        </h2>
                        <span>
                            See our weekly most reviewed products
                        </span>
                    </HeaderText>
                    <HeaderSeeMore>
                        <span>
                            See more
                        </span>
                        <RightArrow />
                    </HeaderSeeMore>
                </Header>
                <CardContainer>
                    <ButtonContainer>
                        <ButtonNavLeft ref={navPrevButton}>
                            <LeftArrow />
                        </ButtonNavLeft>
                        <ButtonNavRight ref={navNextButton} >
                            <RightArrow />
                        </ButtonNavRight>
                    </ButtonContainer>
                    <Swiper
                        onBeforeInit={onBeforeInit}
                        slidesPerView={6}
                        spaceBetween={4}
                    >
                        {editor &&
                            editor.map((item, index) => {
                                return index !== editor.length -1 ?
                                        <SwiperSlide>
                                            <Card
                                                header={false}
                                                background
                                                border={false}
                                                match={false}
                                                editorName={item.editor}
                                                editorRole={item.role}
                                                productName={item.product.name}
                                                productRating={item.product.rating}
                                                productDescription={item.product.description}
                                                productImage="https://image.femaledaily.com/dyn/640/images/prod-pics/product_1558085107_YOU_MAKEUP_800x800.png"
                                            />
                                        </SwiperSlide> 
                                    :
                                        <SwiperSlide>
                                            <Card
                                                header={false}
                                                background
                                                border={false}
                                                match={false}
                                                editorName={item.editor}
                                                editorRole={item.role}
                                                productName={item.product.name}
                                                productRating={item.product.rating}
                                                productDescription={item.product.description}
                                                productImage="https://image.femaledaily.com/dyn/640/images/prod-pics/product_1558085107_YOU_MAKEUP_800x800.png"
                                                margin={"0px"}
                                            />
                                        </SwiperSlide>
                        })}
                        {editor &&
                            editor.map((item, index) => {
                                return index !== editor.length -1 ?
                                        <SwiperSlide>
                                            <Card
                                                header={false}
                                                background
                                                border={false}
                                                match={false}
                                                editorName={item.editor}
                                                editorRole={item.role}
                                                productName={item.product.name}
                                                productRating={item.product.rating}
                                                productDescription={item.product.description}
                                                productImage="https://image.femaledaily.com/dyn/640/images/prod-pics/product_1558085107_YOU_MAKEUP_800x800.png"
                                            />
                                        </SwiperSlide> 
                                    :
                                        <SwiperSlide>
                                            <Card
                                                header={false}
                                                background
                                                border={false}
                                                match={false}
                                                editorName={item.editor}
                                                editorRole={item.role}
                                                productName={item.product.name}
                                                productRating={item.product.rating}
                                                productDescription={item.product.description}
                                                productImage="https://image.femaledaily.com/dyn/640/images/prod-pics/product_1558085107_YOU_MAKEUP_800x800.png"
                                                margin={"0px"}
                                            />
                                        </SwiperSlide>
                        })}
                    </Swiper>
                </CardContainer>
            </TrendingContent>
        </Container>
    )
}

export default Trending
