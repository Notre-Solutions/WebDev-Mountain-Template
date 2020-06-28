import React from "react";

export default function footer() {
  return (
    <div>
      <footer class="footer-container white-text-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h3>Mountain</h3>

              <div class="row">
                <div class="col-xs-12 col-sm-7">
                  <p>
                    <small>
                      Website created with{" "}
                      <a
                        href="http://www.notre-studio.co.uk"
                        title="Create website with free html template"
                      >
                        Notre Template
                      </a>
                      /
                      <a
                        href="https://www.unsplash.com/"
                        title="Beautiful Free Images"
                      >
                        Unsplash
                      </a>
                    </small>
                  </p>
                </div>
                <div class="col-xs-12 col-sm-5">
                  <p class="text-right">
                    <a
                      href="https://facebook.com/"
                      class="social-round-icon white-round-icon fa-icon"
                      title=""
                    >
                      <i class="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://twitter.com/"
                      class="social-round-icon white-round-icon fa-icon"
                      title=""
                    >
                      <i class="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      class="social-round-icon white-round-icon fa-icon"
                      title=""
                    >
                      <i class="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
