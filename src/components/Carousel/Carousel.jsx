import React from 'react';
import styles from './carousel.module.css';

const Carousel = () => {
  return (
    <section className={styles.carousel} aria-label="Gallery">
      <ol className={styles.carouselViewport}>
        <li id="carousel__slide1" tabIndex="0" className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}>
            <a href="#carousel__slide4" className={styles.carouselPrev}>Go to last slide</a>
            <a href="#carousel__slide2" className={styles.carouselNext}>Go to next slide</a>
          </div>
        </li>
        <li id="carousel__slide2" tabIndex="0" className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}></div>
          <a href="#carousel__slide1" className={styles.carouselPrev}>Go to previous slide</a>
          <a href="#carousel__slide3" className={styles.carouselNext}>Go to next slide</a>
        </li>
        <li id="carousel__slide3" tabIndex="0" className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}></div>
          <a href="#carousel__slide2" className={styles.carouselPrev}>Go to previous slide</a>
          <a href="#carousel__slide4" className={styles.carouselNext}>Go to next slide</a>
        </li>
        <li id="carousel__slide4" tabIndex="0" className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}></div>
          <a href="#carousel__slide3" className={styles.carouselPrev}>Go to previous slide</a>
          <a href="#carousel__slide1" className={styles.carouselNext}>Go to first slide</a>
        </li>
      </ol>
      <aside className={styles.carouselNavigation}>
        <ol className={styles.carouselNavigationList}>
          <li className={styles.carouselNavigationItem}>
            <a href="#carousel__slide1" className={styles.carouselNavigationButton}>Go to slide 1</a>
          </li>
          <li className={styles.carouselNavigationItem}>
            <a href="#carousel__slide2" className={styles.carouselNavigationButton}>Go to slide 2</a>
          </li>
          <li className={styles.carouselNavigationItem}>
            <a href="#carousel__slide3" className={styles.carouselNavigationButton}>Go to slide 3</a>
          </li>
          <li className={styles.carouselNavigationItem}>
            <a href="#carousel__slide4" className={styles.carouselNavigationButton}>Go to slide 4</a>
          </li>
        </ol>
      </aside>
    </section>
  );
};

export default Carousel;