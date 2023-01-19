import React from "react";
import { Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import CommentItem from "./CommentItem";

export default function TestimonialsCarousel({ theme }) {
  return (
    <Row>
      <Col span={24} className="md:block hidden">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          onInit={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={false}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          <SwiperSlide>
            <Row>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
              <Col span={12}>
                <CommentItem theme={theme} />
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
      </Col>
      <Col span={24} className="md:hidden block">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          onInit={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          slidesPerView={1.3}
          spaceBetween={20}
          autoplay={false}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          <SwiperSlide>
            <Row>
              <Col span={24}>
                <CommentItem theme={theme} />
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Col span={24}>
                <CommentItem theme={theme} />
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Col span={24}>
                <CommentItem theme={theme} />
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
      </Col>
    </Row>
  );
}
