import React from 'react';
import {  useSelector } from 'react-redux';
import { State } from '../../state';
import {
    Container,
    ReviewContent,
    LatestReviewsContainer,
    MRContainer,
    Header,
    HeaderText,
    HeaderSeeMore,
    LeftArrow,
    RightArrow,
    CardContainer,
    ButtonContainer,
    ButtonNavLeft,
    ButtonNavRight
} from './styles';
import ReviewCard from './ReviewCard';
import {
    MR2
} from '../Advertisements';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Navigation,
} from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Pagination, Navigation]);

const Reviews  = () => {

    const review = useSelector ((state: State) => state.review);

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
        <Container title="Reviews">
            <ReviewContent>
                <LatestReviewsContainer>
                    <Header>
                        <HeaderText>
                            <h2>
                                Latest Reviews
                            </h2>
                            <span>
                                So you can make better purchase decision
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
                            slidesPerView={2}
                            spaceBetween={0}
                        >
                            {review &&
                                review.map((review, index) => {
                                    return <SwiperSlide>
                                                <ReviewCard
                                                    productName={review.product.name}
                                                    productDesc={review.product.desc}
                                                    productImage={review.product.image}
                                                    comment={review.comment}
                                                    userName={review.user}
                                                    userInfo={review.profile}
                                                />
                                            </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </CardContainer>
                </LatestReviewsContainer>
                <MRContainer>
                    <MR2 />
                </MRContainer>
            </ReviewContent>
        </Container>
    )
}

export default Reviews
