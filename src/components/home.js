import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profilephoto from "../profilephoto.png";
function Home() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src={profilephoto} alt="avatar" className="avatar-img" />

          <div className="banner-text">
            <h1>Software Engineer</h1>
            <hr />

            <p>
              Software Architect | Full Stack Developer (.NET) | Web API | C# |
              JavaScript | Angular | react | nodejs | express | mongodb | SQL
              Server | Entity Framework
            </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/sreemonta-bhowmik-92b89320/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>

              <a
                href="https://github.com/sreemonta20"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>
            <p />
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Home;
