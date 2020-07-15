import React from "react";
import Img from "gatsby-image";

const employeeCard = ({ employee }) => {
  const { img, name, job, paragraph } = employee;
  return (
    <div>
      <div class="col-xs-12 col-md-4">
        <Img
          className="img-responsive page-base-image"
          alt=""
          fluid={img.childImageSharp.fluid}
        />

        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{paragraph}</p>
        <p>
          <a
            href="https://facebook.com/"
            class="social-round-icon fa-icon"
            title=""
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="https://twitter.com/"
            class="social-round-icon fa-icon"
            title=""
          >
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            class="social-round-icon fa-icon"
            title=""
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default employeeCard;
