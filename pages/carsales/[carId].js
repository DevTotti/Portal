import React, { useState } from "react";
import styles from "../../styles/SingleCar.module.css";
import DriveTrain from "../../assets/Icons/Drivetrain.png";
import Fuel from "../../assets/Icons/Fuel.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getNumberWithCommas } from "../../utils/functions";
import Inspection from "../../components/Inspection";


function SingleCar({ item }) {
  console.log(item);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: "button__bar",
    className: "car_slide",
    arrows: true,
    fade: false,
  };

  const [showIns, setShowIns] = useState(false)

  const displayDropdown = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
    setShowIns(true)
  }

  return (
    <main className={styles.item_body}>
      {showIns && <Inspection id={item.id} toggle={setShowIns}/>}
      <div className={styles.carousel}>
        <Slider {...settings}>
            {item.images.map((photo, i) => {
            return <img src={photo} alt={photo} key={i} />;
            })}
        </Slider>
      </div>
      <div className={styles.main_body}>
        <div className={styles.main_info}>
            <h3>{item.name}</h3>
          <div className={styles.item_info}>
            <div className={styles.log}>
                <p>{item.distance}km</p>
                <p>{item.usage}</p>
            </div>
            <div className={styles.info}>
                <p>{item.location}</p>
                <p>{item.style}</p>
            </div>
          </div>
        </div>
        <div className={styles.purchase}>
            <h4>{"\u20A6"}{getNumberWithCommas(item.price)}</h4>
          <button onClick={displayDropdown}>Book an inspection</button>
        </div>
      </div>
      <div className={styles.car_video}>
        <video controls>
          <source src={item.video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.car_info}>
        <div className={styles.feature}>
          <div className={styles.title}>
            <img src="https://res.cloudinary.com/rafael-uwadone/image/upload/v1629148558/car-portal/Engine_type_qkqbid.png" alt="" />
            <p>Engine Type</p>
          </div>
            <p>{item.engine_type}</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.title}>
            <img src="https://res.cloudinary.com/rafael-uwadone/image/upload/v1629148558/car-portal/Transmission_rgd3lg.png" alt="" />
            <p>Transmission</p>
          </div>
          <p>{item.transmission}</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.title}>
            <img src="https://res.cloudinary.com/rafael-uwadone/image/upload/v1629148558/car-portal/Fuel_p4j7xe.png" alt="" />
            <p>Fuel Type</p>
          </div>
            <p>{item.fuel}</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.title}>
            <img src="https://res.cloudinary.com/rafael-uwadone/image/upload/v1629148558/car-portal/color_flip_for_interior_color_ebunkx.png" alt="" />
            <p>Interior Color</p>
          </div>
          <p>{item.interior_color}</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.title}>
            <img
              className={styles.flip}
              src="https://res.cloudinary.com/rafael-uwadone/image/upload/v1629148558/car-portal/color_flip_for_interior_color_ebunkx.png"
              alt=""
            />
            <p>Exterior Color</p>
          </div>
          <p>{item.exterior_color}</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.title}>
            <img src="https://res.cloudinary.com/rafael-uwadone/image/upload/v1629148558/car-portal/Vehcle_identification_number_adzv3s.png" alt="" />
            <p>VIN</p>
          </div>
          <p>4T1B**********</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.title}>
            <img src="https://res.cloudinary.com/rafael-uwadone/image/upload/v1629148558/car-portal/Registration_r6se4e.png" alt="" />
            <p>Vehicle ID</p>
          </div>
          <p>f6pikcahu</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.title}>
            <img src="https://res.cloudinary.com/rafael-uwadone/image/upload/v1629148558/car-portal/Drivetrain_cd6j92.png" alt="" />
            <p>Drive Train</p>
          </div>
          <p>{item.drive_train}</p>
        </div>
      </div>
    </main>
  );
}

export default SingleCar;

export const getServerSideProps = async ({ req, params }) => {
  try {
    const id = params.carId;
    let response = await fetch(
      `http://thecarportal.herokuapp.com/automart/carsales/${id}/`
    );
    let item = await response.json();
    return {
      props: {
        item: item.message
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/ErrorPage",
        permanent: false,
      },
    };
  }
};
