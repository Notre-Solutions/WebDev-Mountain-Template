import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

class navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      passedHero: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const currentScrollPos =
      typeof window !== `undefined` ? window.pageYOffset : undefined;
    if (currentScrollPos) {
      const scrollPercentage = currentScrollPos / window.innerHeight;
      if (scrollPercentage >= 0.5) {
        this.setState({
          passedHero: true,
        });
        console.log(scrollPercentage);
      } else {
        this.setState({
          passedHero: false,
        });
      }
    }
  };

  render() {
    return (
      <>
        <header>
          <nav
            className={classnames("navbar navbar-default", {
              // "collapse in": this.state.active,
              active: this.state.passedHero || this.props.current !== "landing",
              "navbar-fixed-top":
                !this.state.passedHero || this.props.current === "landing",
            })}
            // class="navbar navbar-default navbar-fixed-top active"
          >
            <div class="container">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar-collapse"
                  aria-expanded="false"
                  onClick={this.toggleClass}
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <Link class="navbar-brand" to="/" title="">
                  Notre Template
                </Link>
              </div>

              <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/" title="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/project" title="">
                      Project
                    </Link>
                  </li>
                  <li>
                    <p>
                      <Link
                        to="/components"
                        class="btn btn-default navbar-btn"
                        title=""
                      >
                        Components
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default navbar;
