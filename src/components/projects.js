/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import { Link } from "react-router-dom";
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p_noImageAvailable.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Connector DLL
              </span>
              <br />
              We have a solution called CloudApper, which is a platform that
              makes it simple for businesses to create and deploy task-specific
              web and mobile apps. And we have a wide range of clients out there
              in the market and they are triumphantly using the CloudApper as
              frontend application using the Connector which we develope for the
              clients to talk in between their own respective backend and the
              CloudApper regarding the exchange the data. Also Connectors we are
              building, does the data mapping between data formats of CloudApper
              and Client's backend side. My main responsibility to build the
              connector according to the clients requirements of how they want
              to operate on data between the mentioned endpoints. However, I
              successfully finished bulk developement of 2 connectors for 2
              different clients with some challenges eventually before the
              deadlines. But developement is still going on day-to-day
              requirement basis.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>.NET 5, Web API</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/cloudabis_portal.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                CloudABIS Portal
              </span>
              <br />
              M2Sys CloudABIS biometric service is a pay as you go model service
              for biometric matching over the cloud, such as identification,
              enrollment, registration etc. It eluminites all the IT, financial,
              and hardware costs. Anyone can start off the small subscription
              through this CloudABIS portal and use the all functions CloudABIS
              service provides (the biometric solution). Also user can see their
              daily, monthly, yearly usages, limits, and other important
              statistics they need regarding the consumption of biometric
              service. The CloudABIS portal comprises the all the necessary
              documentations to integrate the respective biometric device (Face,
              Iris, and Fingerprint) with web-based or windows application. It
              also listed recommanded devices for biometric operation.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>Angular 10, bootstrap, CSS, HTML.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/rightpatient_analytics.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                RightPatient Analytics
              </span>
              <br />
              RightPatient is the industry’s most advanced biometric patient
              identification, patient engagement, personalized healthcare and
              healthcare intelligence platform to reduce costs and liability,
              improve quality of care, monitor population health and enhance the
              patient experience. With features for wearable and biosensor
              integration, health games, medication alerts, proactive health
              management and predictive analytics, the platform also integrates
              with major electronic health record (EHR) systems such as Epic,
              Siemens, Cerner, McKesson, Meditech, IBM and many others.
              RightPatient is already deployed across hospitals and health
              systems that collectively maintain the health data of over 10
              million patients. RightPatient Analytics helps to aggregate
              patient visit data and provide a concrete audit log of visits with
              patient photos for compliance and dispute resolution. It also
              safeguards patient medical records to prevent mixups by embedding
              copies of photos with the associated records and locking them with
              a biometric signature.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>ASP.NET Web Form, SOAP Web Service, JavaScript, HighCharts, SQL Server 2016, HTML.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />
          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p10_prof_ls_cp.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                CenterPoint ERP (Production)
              </span>
              <br />
              CenterPoint (Enterprise Resource Planning) is a business approach
              that consolidates all aspects of a business specially for
              pharmaceutical business. I was assgined to understand the existing
              businesses of this ERP and develope Production business module. I
              was also assgined to design, giving a sustainable architecture,
              understanding and analyzing the requirements, collaborating with
              external and developer team, intiating the Front-end application
              and Back-end Web API service. This module consists of several
              sub-modules and communicates with other modules to achieve the
              goal of this module, such as Production Planning, Vendor
              Management, Inventory Management, Order Management, Batch Issue,
              Formulation Order, Formula Setup, Product Management etc.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}> .Net Core Web API, SQL Server 2016, Angular 9. Bootstrap CSS, HTML.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />
          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p_noImageAvailable.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                RGL ERP (IPTV, CRM, HRM)
              </span>
              <br />
              This ERP project basically concentrating on ISP business. Apart
              from ISP's modules of this ERP, It has several other modules such
              as CRM, IPTV, HRM, etc. I worked (Full-Stack development) to build
              online video streaming application (IPTV), Customer Relationship
              Management, and Human Resource Management.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>.Net Core Web API, SQL Server 2016, Angular 8. video.js, Bootstrap CSS, HTML.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />
          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p9_prof_rc_pt_invsales.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                AdvancePro
              </span>
              <br />
              AdvancePro is a desktop based solution for inventory management.
              It helps to keeping tracks of Sales and Inventory that benefits
              all the stockholders of One’s business.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>VB.net, SQL Server 2016 Management Studio, Crystal Report 13.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p8_prof_csl_kandareeerp.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                WebAccounting
              </span>
              <br />
              WebAccouning is web-based accounting solution aim to provide
              complete support to any big or small business to extract the
              profitability and performance in the financial management field.
              Functional area of the system such as General Ledger Module,
              Accounts Receivable Module, Accounts payable module, Operational
              advance, Budget Management, and Loan management.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>Asp.net, C#, DHTMLX, CSS, JQuery, JavaScript, SQL server 2012, RDLC.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p8_prof_csl_kandareeerp.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Sample Management
              </span>
              <br />
              An integrated Web solution covers the entire Sampling process of
              an apparel-manufacturing unit. From Buyer request to Buyer
              feedback. It works as an integrated Solution with KANDAREE
              (Garment ERP).
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>Asp.net, C#, SQL Server 2012, DHTMLX Controls, Crystal Reports.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p8_prof_csl_kandareeerp.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                KANDAREE ERP
              </span>
              <br />
              KANDAREE Apparel is an integrated solution that covers the entire
              process of an apparel manufacturing unit. From price quotation to
              actual shipment and its proceeds realization, KANDAREE manages the
              entire business process of the company. KANDAREE Apparel is an
              integrated solution which means that data entered from one
              department of the company is shared with everyone else in the
              company. In fact, no data is required to be entered twice in the
              system. KANDAREE Apparel collects data from the actual business
              process execution and not through any data entry operation. This
              provides authenticity of the data as well as internal process
              control at operation point of the process.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>C#, SQL Server 2005 and 2012, Infragistic Control (Third party Control), Crystal reports.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />
          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p_noImageAvailable.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Mizkan Report Manager
              </span>
              <br />
              It is a reporting solution to have various kinds of report such as
              inventory, account, production etc. It works as an integrated
              solution with Microsoft Dynamics.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>Asp.net, C#, JavaScript, SQL Server 2008, Crystal Report 9.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p1_rc_portfolio.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Raihana Consulting Website
              </span>
              <br />
              It is a portfolio website, which I was assigned to build for
              Raihana Consulting where I used to work as a Senior Software
              Engineer.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>JavaScript, HTML, CSS, Bootstrap</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p_noImageAvailable.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                RC Ticket System
              </span>
              <br />
              RC Ticketing system is user-developer interaction system aim to
              give task-oriented solutions to the users based on given task
              problem.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>Asp.net, C#, SQL Server 2008, Crystal Report 9, JavaScript.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p9_prof_rc_hl_ordertracker.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Order Tracking System
              </span>
              <br />
              An web application is aim to build to keep track record of how
              many customer orders have been produced according to original
              buyer order document and their details including production status
              and reports in Garments Production.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>Asp.net MVC 4, C#, SQL Server 2012, JavaScript, Bootstrap, JQuery, RDLC.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p4_ps_v1_portfolio.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Personal Portfolio (v 1.0)
              </span>
              <br />
              Prime goal of this project was to build a portfolio website for my
              personal use. I am still developing this project.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>Angular 11, TypeScript 3.9, Node 10.16, Html, Bootstrap CSS, NPM, VS Code</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20/pfsbhowmikv1"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p6_ps_hms.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Hotel Management System
              </span>
              <br />I have built this web application project focused more on
              admin backend control for Hotel Management System. It is an
              interactive system for both customer and admin.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>ASP.NET, C#, SQL Server 2016, CSS, Crystal Report 9, and JavaScript.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20/HotelManagementSystem"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/p7_ps_onlineshopping.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Online Shopping Application
              </span>
              <br />I am building this application for learning purpose. This
              online shopping app will be consisting of backend, frontend and
              admin panel.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>MEAN Stack (MongoDB, Express.js, Angular 10, Node.js), Bootstrap CSS, HTML.</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <p />

          <Card shadow={12} style={{ minWidth: "50%", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/personal_web_react_v2.png')`,
              }}
            ></CardTitle>
            <CardText>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Personal Portfolio (v 2.0)
              </span>
              <br />
              This is a personal web portfolio, which is built on react. This project can be modified and use as personal portfolio. Through this, I just got my hands dirty on react.js learning process.
              <br/>
              <span
                style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Language/ Tools / Technologies : <span style={{
                  color: "#000",
                  paddingTop: "10px",
                  fontWeight: "normal",
                }}>react 18, Bootstrap CSS, NPM, VS Code</span>
              </span>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sreemonta20"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="javascript:void(0)"
                target="_blank"
                className="mdl-button mdl-js-button mdl-button--colored"
                rel="noreferrer"
              >
                Live
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Professional</Tab>
          <Tab>Personal</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
