import React, { useEffect } from "react";
import styles from "../../styles/SingleEvent.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SingleEvent({ data }) {
  const photos = data.message.Image;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dotsClass: "button__bar",
    className: "slide",
    arrows: true,
    fade: true,
  };
  useEffect(() => {
    console.log(data);
  }, []);


  const videoRedirect = () => {
    document.location.href = 'https://www.youtube.com/channel/UC5Lv5niABG4jKjCAi7PRw1A';
  }
  return (
    <div className={styles.tabs}>
      <div className={styles.single_title}>
        <h2 className={styles.title}>{data.message.Title}</h2>
        <div className={styles.lead}>
            <div className={styles.time}>
              <h5>
                Date:<span> {data.message.Date}</span>
              </h5>
              <p>
                <span>Starts: {data.message.Time}</span>
              </p>
            </div>
          </div>
      </div>
      <main className={styles.event}>
        <section className={styles.main_content}>
          <div className={styles.carousel}>
            <Slider {...settings}>
              {photos.map((photo, i) => {
                return <img src={photo} alt={photo} key={i} />;
              })}
            </Slider>
          </div>
          <p className={styles.desc}>
              {data.message.Details}
          </p>
              <h3>Videos</h3>
          <div className={styles.video}>
              <div className={styles.main__event} onClick={videoRedirect}>
                <div className={styles.video__link}>
                    <img src="https://yt3.ggpht.com/8UFYMoxs_FP7OQtR2tbU-_lBgz7iAyA2wIp0UMSSlHmZBMuNnWLxSMSAlfAFMyNbiM_ri_LH=s176-c-k-c0x00ffffff-no-rj-mo" alt=""/>
                </div>
                <h5>Main Event</h5>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const id = params.eventId;

  let response = await fetch(
    `http://thecarportal.herokuapp.com/events/get/${id}`
  );
  let data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default SingleEvent;
