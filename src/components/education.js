import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
function Education(props) {
  return (
    <Grid>
      <Cell col={3}>
        <p>
         {props.startMonth} {props.startYear} - {props.endMonth} {props.endYear}
        </p>
      </Cell>
      <Cell col={9}>
        <h4 style={{ marginTop: "0px" }}>{props.schoolName}</h4>
        <p>{props.schoolDescription}</p>
      </Cell>
    </Grid>
  );
}

export default Education;
