/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Layout, Header, Footer, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import Main from "./components/main";

import "./App.css";

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/profile">Profile</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          }
        >
          <Navigation>
            <Link to="/profile">Profile</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
        <Footer className="footer">
          <div className="container">
            <p>
              &copy; {currentYear} &nbsp;
              <a href="#" className="company-link">Sreemonta Bhowmik</a>
            </p>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
