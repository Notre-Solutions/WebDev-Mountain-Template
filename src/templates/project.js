import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";

const project = ({ data }) => {
  const {
    img06,
    img07,
    img05,
    img04,
    title,
    paragraph,
    infoParagraph,
  } = data.markdownRemark.frontmatter.projectPage;

  return (
    <Layout current="project">
      <div class="section-container ">
        <div class="container navbar-fixed-space">
          <div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-2">
              <h1 class="text-center">{title}</h1>
              <p>{paragraph}</p>

              <div class="section-container-spacer">
                <Img
                  className="img-responsive reveal-content"
                  alt=""
                  fluid={img06.childImageSharp.fluid}
                  data-action="zoom"
                />
              </div>

              <div class="row">
                <div class="col-xs-6">
                  <Img
                    className="img-responsive reveal-content"
                    alt=""
                    fluid={img04.childImageSharp.fluid}
                    data-action="zoom"
                  />
                </div>
                <div class="col-xs-6">
                  <Img
                    className="img-responsive reveal-content"
                    alt=""
                    fluid={img07.childImageSharp.fluid}
                    data-action="zoom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container">
          <div class="row section-container-spacer">
            <div class="col-xs-12 col-md-8 col-md-offset-2">
              <h2 class="text-center">More</h2>
              <div class="section-container-spacer">
                <p>{infoParagraph}</p>
              </div>
              <Img
                className="img-responsive reveal-content"
                alt=""
                fluid={img05.childImageSharp.fluid}
                data-action="zoom"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container text-center">
          <div class="row section-container-spacer">
            <div class="col-xs-12 col-md-12">
              <h3>Do you like it ?</h3>
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
        </div>
      </div>
    </Layout>
  );
};

export default project;

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        projectPage {
          infoParagraph
          title
          paragraph
          img05 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img06 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img07 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img04 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
