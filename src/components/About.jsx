import React from "react";
import BannerImage from "../assest/banneryeni.jpg";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At alias
          cupiditate fuga, expedita, in necessitatibus recusandae ullam earum
          nulla quidem perspiciatis nisi odit commodi quam officia quia beatae
          modi nam, quod quibusdam dolor aperiam molestiae! Ea corporis unde,
          praesentium accusantium inventore dolores dolorum eum. Culpa illum
          deserunt laudantium ratione, eius esse, et magnam in optio a velit
          iusto. Dolore corrupti quas animi laborum autem nemo et alias fugiat
          omnis rem? Minima quas, accusamus odio commodi accusantium dolor sequi
          velit alias eius minus earum consectetur, iusto voluptatem eum
          laudantium? Cumque quae alias quod? Sed, laboriosam quam. Culpa
          inventore numquam magni non. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi, impedit asperiores suscipit ducimus
          accusantium commodi aperiam voluptates minus, fugit fuga dolores
          necessitatibus qui, omnis at dolorem explicabo est! Illo quis deserunt
          nisi nostrum adipisci praesentium delectus, sapiente molestiae iste
          dolorem dolor consequuntur incidunt, tempora totam expedita officiis
          unde vel ad perspiciatis sunt vero? Ex quo corrupti neque! Dolore quia
          minima, ut itaque, eveniet nobis at nesciunt assumenda doloribus eos,
          voluptatem harum? Voluptate, quos dolorum voluptatum, facilis quas
          dignissimos cupiditate ex eum tempora neque doloribus. A quae
          laudantium maxime accusantium illum ipsam repudiandae nisi eaque modi
          vero atque, magnam nobis vel?
        </p>
      </div>
    </div>
  );
}

export default About;
