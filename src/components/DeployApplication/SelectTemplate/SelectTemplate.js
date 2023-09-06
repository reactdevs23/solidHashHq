import React, { useState } from "react";
import styles from "./SelectTemplate.module.css";
import StepWrapper from "../StepWrapper/StepWrapper";
import { template, template2 } from "../../../images/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SelectTemplate = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const templates = [
    { img: template, name: "Orca lasa", price: "free" },
    { img: template2, name: "WeGlass", price: "$58" },
    { img: template2, name: "WeGlass", price: "$58" },
    { img: template2, name: "WeGlass", price: "$58" },
    { img: template2, name: "WeGlass", price: "$58" },
    { img: template2, name: "WeGlass", price: "$58" },
    { img: template2, name: "WeGlass", price: "$58" },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3.3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2.3,
        },
      },

      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  return (
    <StepWrapper
      heading="Step 3 :   Select Template"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className={styles.labelAndwrapper}>
        <p>
          {" "}
          <label htmlFor="Templet selection:" className={styles.label}>
            Template selection:
          </label>
        </p>
        <div className={styles.templates}>
          <Slider {...settings} className={styles.mySlider}>
            {templates.map((el, i) => (
              <div className={styles.slide} key={i}>
                {/* Add margin or padding to the slide */}
                <div
                  className={[
                    styles.template,
                    selectedTemplate === i && styles.selectedTemplate,
                  ].join(" ")}
                  onClick={() => setSelectedTemplate(i)}
                >
                  <img src={el.img} alt="#" className={styles.templateImg} />
                  <div className={styles.nameAndPrice}>
                    <p className={styles.name}>{el.name}</p>
                    <p className={styles.price}>{el.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </StepWrapper>
  );
};

export default SelectTemplate;
