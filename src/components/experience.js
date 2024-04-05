import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
function experience(props) {
  const itemDuration = props.duration.split("|").map((item) => item.trim());
  const itemDesignation = props.designation
    .split("|")
    .map((item) => item.trim());
  const jobDesc = props.jobDescription.split("|").map((item) => item.trim());
  return (
    <Grid>
      {/* <Cell col={12}>
        <p>
          {props.startMonth} {props.startYear} - {props.endMonth}
          {props.endYear}
        </p>
        <h4 style={{ marginTop: "0px" }}>{props.designation}</h4>
        <h5 style={{ marginTop: "3px" }}>{props.companyNameAddress}</h5>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <br />
        <span className="bold-text">{props.toolsTechHeading}</span>{props.toolsTechDesc}
      </Cell> */}
      <Cell col={12}>
        <div className="paragraph-container">
          <div className="column-container">
            {itemDuration.map((item, index) => (
              <span key={index} className="left-text">
                {item}
              </span>
            ))}
          </div>
          <div className="column-container">
            {itemDesignation.map((item, index) => (
              <span key={index} className="right-text">
                {item}
              </span>
            ))}
          </div>
        </div>

        <h5 style={{ marginTop: "3px" }}>{props.companyNameAddress}</h5>
        <ul>
          {jobDesc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <br />
        <span className="bold-text">{props.toolsTechHeading}</span>
        {props.toolsTechDesc}
      </Cell>
    </Grid>
  );
}

export default experience;
