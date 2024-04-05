import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
function Skills(props) {
  return (
    // <Grid>
    //   <Cell col={12} className="skills-pb-pt">
    //     <div style={{ display: "flex" }}>
    //       <div style={{ width: "70px" }}>{props.skill}</div>
    //       <ProgressBar
    //         style={{ margin: "auto", width: "75%" }}
    //         progress={props.progress}
    //       />
    //     </div>
    //   </Cell>
    // </Grid>
    <Grid style={{padding:"0px"}}>
      <Cell col={12}>
        <div className="skill-paragraph-container" >
          <div className="skill-cat-column-container">
            <span>{props.category}</span>
          </div>
          <div className="skill-desc-column-container">
            <span>{props.skills}</span>
          </div>
        </div>
      </Cell>
    </Grid>
  );
}

export default Skills;
