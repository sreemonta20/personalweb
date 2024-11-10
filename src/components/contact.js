/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import profilephoto from "../profilephoto.png";
function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Sreemonta Bhowmik</h2>
          <img
            src={profilephoto}
            alt="avatar"
            style={{ height: "250px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}></p>
        </Cell>

        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "3vh", fontFamily: "Lato" }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />(+971)568598068
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "3vh", fontFamily: "Lato" }}
                >
                  <i className="fa fa-envelope-square" aria-hidden="true" />
                  <a href="mailto:sreemonta.bhowmik@gmail.com">Personal</a>
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "3vh", fontFamily: "Lato" }}
                >
                  <i className="fa fa-skype" aria-hidden="true" />
                  <a href="#">sreemonta</a>
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}
export default Contact;