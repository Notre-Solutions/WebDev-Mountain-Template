import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Landing = ({ data }) => {
  const {
    img06,
    img07,
    imgProfile01,
    imgProfile02,
    imgProfile03,
    logo01,
    logo02,
    logo03,
  } = data.markdownRemark.frontmatter.landingPage;

  return (
    <Layout current="landing">
      <div class="hero-full-container background-image-container white-text-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>Mountain</h1>
              <p>WELCOME TO MOUNTAIN WEBSITE. AGENCY IN BERLIN.</p>
              <br />
              <Link to="/project/" class="btn btn-default btn-lg" title="">
                Discover
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-2">
              <div class="text-center">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas luctus at sem quis varius.
                  <br />
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Phasellus iaculis magna
                  sagittis elit sagittis, at hendrerit lorem venenatis. Morbi
                  accumsan iaculis blandit. Cras ultrices hendrerit nisl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div
                id="carousel-example-generic"
                class="carousel carousel-fade slide"
                data-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <Img
                      className="img-responsive page-base-image"
                      alt=""
                      fluid={img06.childImageSharp.fluid}
                    />
                    <div class="carousel-caption card-shadow reveal">
                      <h3>Moon</h3>

                      <p>
                        Sed id tellus in risus pre tium imperdiet eu lobortis
                        dolor. Sed pellentesque, urna ac viverra lacinia, erat
                        mauris venenatis purus, mollis egestas urna purus ac ex.
                        Aenean nunc sem, lobortis at elit non, lobortis laoreet
                        nibh. Maecenas at mi ipsum.
                      </p>

                      <p>
                        Quisque tempor, ligula pharetra luctus elementum, arcu
                        nisl suscipit ante, pharetra commodo dui est et enim.
                        Sed eu vestibulum elit. Donec ut libero non.
                      </p>
                      <Link to="/project/" class="btn btn-primary" title="">
                        Discover
                      </Link>
                    </div>
                  </div>
                  <div class="item">
                    <Img
                      className="img-responsive page-base-image"
                      alt=""
                      fluid={img07.childImageSharp.fluid}
                    />
                    <div class="carousel-caption card-shadow reveal">
                      <h3>Lbortis</h3>
                      <a
                        class="left carousel-control"
                        href="#carousel-example-generic"
                        role="button"
                        data-slide="prev"
                      >
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a
                        class="right carousel-control"
                        href="#carousel-example-generic"
                        role="button"
                        data-slide="next"
                      >
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        <span class="sr-only">Next</span>
                      </a>
                      <p>
                        Pre id tellus in risus pre tium imperdiet eu lobortis
                        dolor. Sed pellentesque, urna ac viverra lacinia, erat
                        mauris venenatis purus, mollis egestas urna purus ac ex.
                        Aenean nunc sem, lobortis at elit non, lobortis laoreet
                        nibh. Maecenas at mi ipsum.
                      </p>

                      <p>
                        Quisque tempor, ligula pharetra luctus elementum, arcu
                        nisl suscipit ante, pharetra commodo dui est et enim.
                        Sed eu vestibulum elit. Donec ut libero non.
                      </p>
                      <a href="./project.html" class="btn btn-primary" title="">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container text-center">
          <div class="row section-container-spacer">
            <div class="col-xs-12 col-md-12">
              <h2>Partners</h2>
              <p>
                Praesent at feugiat est, at faucibus ipsum. Aenean condimentum
                mauris vel malesuada pulvinar. <br />
                Vestibulum sit amet hendrerit leo, quis vehicula mi.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-4">
              <Img
                className="img-responsive page-base-image"
                alt=""
                fluid={imgProfile01.childImageSharp.fluid}
              />
              <h3>John Snow</h3>
              <h4>UX designer</h4>
              <p>
                Sed elementum vehicula nisl, a egestas velit rhoncus nec.Cras
                vel sapien tincidunt, lacinia risus vel, imperdiet neque.
              </p>
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

            <div class="col-xs-12 col-md-4">
              <Img
                className="img-responsive page-base-image"
                alt=""
                fluid={imgProfile02.childImageSharp.fluid}
              />

              <h3>Sansa Stark</h3>
              <h4>UI designer</h4>
              <p>
                Praesent at feugiat est, at faucibus ipsum. Aenean condimentum
                mauris vel malesuadav pulvinar. Vestibulum sit amet hendrerit
                leo, quis vehicula mi.
              </p>
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
            <div class="col-xs-12 col-md-4">
              <Img
                className="img-responsive page-base-image"
                alt=""
                fluid={imgProfile03.childImageSharp.fluid}
              />

              <h3>Gregor Clegane</h3>
              <h4>Developer</h4>
              <p>
                Busce rutrum nisi non dui placerat sodales. Vivamus feugiat
                rutrum malesuada. Nulla volutpat sapien ac gravida varius
              </p>
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

      <div class="section-container">
        <div class="container text-center">
          <div class="row section-container-spacer">
            <div class="col-xs-12 col-md-12">
              <h2 class="text-center">Customers</h2>
              <p>
                Praesent at feugiat est, at faucibus ipsum. Aenean condimentum
                mauris vel malesuada pulvinar. <br />
                Vestibulum sit amet hendrerit leo, quis vehicula mi.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-4">
              <Img
                className="img-responsive page-base-image"
                alt=""
                fluid={logo01.childImageSharp.fluid}
              />
            </div>

            <div class="col-xs-12 col-md-4">
              <Img
                className="img-responsive page-base-image"
                alt=""
                fluid={logo02.childImageSharp.fluid}
              />
            </div>
            <div class="col-xs-12 col-md-4">
              <Img
                className="img-responsive page-base-image"
                alt=""
                fluid={logo03.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section-container contact-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <div class="section-container-spacer">
                <h2 class="text-center">Get in touch</h2>
                <p class="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div class="card-container">
                <div class="card card-shadow col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 reveal">
                  <form action="" class="reveal-content">
                    <div class="row">
                      <div class="col-md-7">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="3"
                            placeholder="Enter your message"
                          ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Send message
                        </button>
                      </div>
                      <div class="col-md-5">
                        <ul class="list-unstyled address-container">
                          <li>
                            <span class="fa-icon">
                              <i class="fa fa-phone" aria-hidden="true"></i>
                            </span>
                            + 33 9 07 45 12 65
                          </li>
                          <li>
                            <span class="fa-icon">
                              <i class="fa fa fa-map-o" aria-hidden="true"></i>
                            </span>
                            42 rue Moulbert 75016 Paris
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="card-image col-xs-12 bg-landing"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;

export const pageQuery = graphql`
  query landingQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
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
          imgProfile01 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imgProfile02 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imgProfile03 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo01 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo02 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo03 {
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
