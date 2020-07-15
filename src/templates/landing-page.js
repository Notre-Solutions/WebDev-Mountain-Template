import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import EmployeeCard from "../components/employeeCard";

const Landing = ({ data }) => {
  const {
    img06,
    img07,
    logo01,
    logo02,
    logo03,
    title,
    subTitle,
    button,
    about,
    team,
    card,
    customers,
    contact,
  } = data.markdownRemark.frontmatter.landingPage;

  return (
    <Layout current="landing">
      <div class="hero-full-container background-image-container white-text-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>{title}</h1>
              <p>{subTitle}</p>
              <br />
              <Link to="/project/" class="btn btn-default btn-lg" title="">
                {button}
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
                <h2>{about.title}</h2>
                <p>{about.paragraph}</p>
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
                      <h3>{card.title}</h3>
                      <p>{card.paragraph}</p>
                      <Link to="/project/" class="btn btn-primary" title="">
                        {card.button}
                      </Link>
                    </div>
                  </div>
                  <div class="item">
                    <Img
                      className="img-responsive page-base-image"
                      alt=""
                      fluid={img07.childImageSharp.fluid}
                    />
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
              <h2>{team.title}</h2>
              <p>{team.paragraph}</p>
            </div>
          </div>
          <div class="row">
            {team.members.map((employee) => {
              return (
                <div>
                  <EmployeeCard employee={employee} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container text-center">
          <div class="row section-container-spacer">
            <div class="col-xs-12 col-md-12">
              <h2 class="text-center">{customers.title}</h2>
              <p>{customers.paragraph}</p>
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
                <h2 class="text-center">{contact.title}</h2>
                <p class="text-center">{contact.paragraph}</p>
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
          title
          subTitle
          button
          about {
            title
            paragraph
          }
          card {
            title
            paragraph
            button
          }
          team {
            title
            paragraph
            members {
              name
              jobTitle
              paragraph
              img {
                childImageSharp {
                  fluid(maxWidth: 10000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          customers {
            title
            paragraph
          }
          contact {
            title
            paragraph
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
