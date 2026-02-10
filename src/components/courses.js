import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
function Courses(props) {
  return (
    <Grid style={{padding:"0px"}}>
      <Cell col={12}>
        <div className="skill-paragraph-container" >
          <div className="skill-cat-column-container">
            <span>{props.category}</span>
          </div>
          <div className="skill-desc-column-container">
            <span>{props.courses}</span>
          </div>
        </div>
      </Cell>
    </Grid>
  );
}

export default Courses;
