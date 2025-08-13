/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import profilephoto from "../profilephoto.png";

function Profile() {
  const cvUrl = "../assets/docs/cv_sreemonta_bhowmik.pdf";
  // const cvUrl = `'${process.env.PUBLIC_URL}/assets/docs/cloudabis_portal.png'`;
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "cv.pdf";
    link.click();
  };
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img src={profilephoto} alt="avatar" style={{ height: "200px" }} />
          </div>

          <h2 style={{ paddingTop: "2em" }}>Sreemonta Bhowmik</h2>
          <h4 style={{ color: "grey" }}>
            Application Consultant{" "}
            <span style={{ fontSize: "small" }}>
              <a href="javascript:void(0)" onClick={handleDownloadClick}>
                CV
              </a>
            </span>
          </h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
          <p>
          Experienced full-stack software developer with over 12 years in designing, developing, and implementing robust applications and solutions across diverse technologies. Skilled in translating complex requirements into efficient, scalable software and seeking to leverage this expertise in a challenging Full-Stack Software Engineer role.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
          <h5>Address</h5>
          <p>Al Nahada 2, Dubai, United Arab Emirates</p>
          <h5>Phone</h5>
          <p>(+971) 568598068</p>
          <h5>Email</h5>
          <p>
            <a href="mailto:sreemonta.bhowmik@gmail.com">
              sreemonta.bhowmik@gmail.com
            </a>
          </p>
          <h5>Web</h5>
          <a
            href="https://sreemonta.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Personal Profile
          </a>
          <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>

          <Education
            startMonth="July"
            startYear={2009}
            endMonth="June"
            endYear={2014}
            schoolName="South Asian University (SAARC), New Delhi, India"
            schoolDescription="Master of Science in Applied Mathematics"
          />
          <Education
            startMonth="July"
            startYear={2004}
            endMonth="August"
            endYear={2008}
            schoolName="West Bengal University of Technology, West Bengal, India"
            schoolDescription="Bachelor of Technology in Computer Science & Engineering"
          />

          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Experience</h2>

          <Experience
            // startMonth="Mar"
            // startYear={2023}
            // endMonth=""
            // endYear="Continue"
            duration="Apr, 2023 – Continue"
            companyNameAddress="Dubaihealth, Dubai, United Arab Emirates"
            designation="Application Consultant"
            jobDescription="Took full ownership of Charity Application development, migrating the frontend from Angular 8 to Angular 10 and optimizing the .NET backend API for better performance.|Designed, developed, and deployed a public-facing Charity Portal from scratch using .NET backend API, Ocelot API Gateway, and Angular 16, allowing patients to submit and track charity requests seamlessly.|Redesigned the commitment letter management and donation document release process, enabling faster fund approvals and reducing patient treatment delays by 40%.|Successfully integrated Non-DAHC hospitals into the system, delivering the new workflow in just 20 days.|Exceeded user expectations by 56%, allowing immediate processing of 200+ Non-DAHC charity requests, accelerating treatment initiation.|Built Windows Services for real-time donation utilization sync, shifting from monthly to 30-minute automated data synchronization with external regulatory body IACAD (Abu Dhabi), ensuring 100% accuracy in financial reporting while reducing manual efforts and errors."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 4.5, .NET Core 3.1, .NET Web API, SQL Server 2019, Angular 10 and 16, IIS 8.5, and Azure Repos."
          />

          <Experience
            duration="Sep, 2022 – Feb, 2023"
            companyNameAddress="Blue Logic Digital, Dubai, United Arab Emirates"
            designation="Full-Stack Developer"
            jobDescription="Architected and delivered insurance management platform handling 1000+ daily transactions for UAE health and motor insurance providers using .NET Core and Angular 13.|Reduced system response time by 35% through optimized database queries and frontend component lazy loading.|Implemented comprehensive logging and monitoring system, decreasing bug resolution time by 50%.|Produced comprehensive technical documentation, enabling streamlined handovers and efficient maintenance."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 4.5, 4.8, .NET Core, ASP.NET MVC, Web API, SQL Server 2016, Angular 8, Angular 13, IIS 8.5, Azure Repos."
          />

          <Experience
            duration="Mar, 2021 – Aug, 2022"
            companyNameAddress="M2SYS Technology (A US-based offshore company), Dhaka, Bangladesh"
            designation="Senior Software Engineer"
            jobDescription="Increased customer satisfaction from 75% to 95% by redesigning and developing an in-house Biometric Analytics service, eliminating $50K annual third-party dependency.|Developed high-performance Biometric API processing 100K+ daily transactions, reducing response time by 25%.|Built two custom CloudApper connectors enabling seamless biometric data integration, leading to successful onboarding of two major enterprise clients.|Designed automated migration toolkit for legacy biometric systems, reducing client migration time from weeks to days.|Created interactive API documentation portal, decreasing client integration time by 60% and technical support tickets by 40%."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 4.5, .NET 5, Web API, SQL Server 2016, Angular 13, NGINX, Docker."
          />

          <Experience
            duration="Mar, 2020 – Sept, 2020"
            companyNameAddress="LeadSoft Bangladesh Limited, Dhaka, Bangladesh"
            designation="Software Architect (Full stack development)"
            jobDescription="Collaborated closely with stakeholders to gather requirements and led the architecture, design, and development of a Pharmaceutical ERP solution, boosting departmental revenue by 30%.|Directed and motivated the development team, ensuring alignment with design standards and successfully migrating legacy ERP solutions to new technologies, enhancing system reliability and client satisfaction.|Conducted daily SCRUM meetings and weekly knowledge-sharing sessions to foster team cohesion and adherence to best practices, accelerating development cycles and improving code quality.|Successfully delivered the Production Module of the ERP on a tight timeline, contributing significantly to revenue growth and client retention."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Core, Entity Framework Core, In-Memory Cache, SQL Server 2016, Angular 9, Docker, Azure app service, Azure Repos, Github, TFS."
          />

          <Experience
            duration="Oct 2015 – Feb 2020"
            companyNameAddress="Raihana Consulting (A US-based offshore company), Dhaka, Bangladesh"
            designation="Senior Software Engineer (Full stack development)"
            jobDescription="Led development teams in the successful launch of multiple client applications, ensuring high standards of quality and adherence to deadlines.|Strengthened client relationships through effective communication on new requirements, bug fixes, and ongoing software improvements, contributing to client retention and satisfaction.|Developed user-interactive systems that became a primary revenue driver, increasing company earnings by 50% annually.|Documented high-level designs and business processes, reducing onboarding time by 35% through improved clarity and knowledge sharing."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 3.5, 4.5, ASP.NET MVC, .NET Core, Entity Framework Core, In-Memory Cache, SQL Server 2012, Angular 8, IIS, TFS, Crystal Report"
          />

          <Experience
            duration="Jul 2014 – Oct 2015"
            companyNameAddress="CSL Software Resources Limited, Dhaka, Bangladesh"
            designation="Programmer"
            jobDescription="Developed and enhanced modules for ERP web solutions in Accounting and Apparel Manufacturing, including critical report generation, contributing to a 30% increase in company revenue.|Designed and optimized database structures for new and existing applications, improving data accessibility and operational efficiency.|Spearheaded new approaches in data visualization through RDLC reporting, increasing customer retention by 15-20%.|Led knowledge-sharing sessions and mentoring activities with junior programmers, fostering team growth and accelerating project progression."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 3.5, 4.5, ASP.NET MVC, .NET Core, Entity Framework Core, In-Memory Cache, SQL Server 2012, IIS, TFS, RDLC, Crystal Report"
          />

          <Experience
            duration="Apr 2012 – Jul 2012"
            companyNameAddress="CSL Software Resources Limited, Dhaka, Bangladesh"
            designation="Programmer"
            jobDescription="Windows-based ERP software and report development for mainly apparel industries.|A large volume of analysis reports modification and development which helped to enlarge the revenue percentage to more than 15%.|Involved immediately in effective client communication, satisfying the requirements by developing or modifying the various modules, and on-time delivery results reduced the on-board training cost by 5%.|Multi-task and change from one task to another without the loss of efficiency or composure where possessed up-to-date technical knowledge which helped to apply the best technical ideas to design the solutions for the end clients."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework, ASP.NET MVC, SQL Server 2012, Infragistics UI,  JQuery, JavaScript, IIS, GitHub, TFS, Crystal Report"
          />

          <Experience
            duration="Jun 2010 – Mar 2012"
            companyNameAddress="Raihana Consulting (A US-based offshore company), Dhaka, Bangladesh"
            designation="Junior Programmer"
            jobDescription="Participated in coding activities, maintaining the integrity of program logic and coding, developing and updating existing systems to increase task success rate by 25%, and eventually increased the annual profit to near about 15 to 20%.|Worked with senior technology solutions team members to assist with the development of over 2+ software solutions on a wide variety of platforms including web, and Desktop.|Team collaboration for Microsoft Dynamics customization using AX."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework, ASP.NET, ASP.NET MVC, SQL Server, Infragistics UI,  JQuery, JavaScript, IIS, TFS, RDLC, Crystal Report"
          />

          <Experience
            duration="Oct 2020 – Feb 2021"
            companyNameAddress="Redeem Tech, Copenhagen, Denmark"
            designation="Senior Software Engineer (Volunteer work)"
            jobDescription="Developed and deployed a Windows-based application for client-side use, contributing to a 10% revenue increase for this early-stage startup.|Collaborated closely with team members to resolve coding issues and align development efforts with business goals, ensuring efficient project progression.|Conducted research and development on business requirements, producing high-level design documentation and architectural diagrams (HLD, DFD) to guide the development team."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Core, Entity Framework Core, Redis Cache, SQL Server 2016, Angular 9, IIS, TFS."
          />

          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Skills</h2>

          {/* <Skills
            category="Languages"
            skills="C# (Fluent), Typescript (Competent), VB.NET (Competent), JavaScript (Fluent), C++ (Competent)"
          />
          <Skills
            category="Frameworks"
            skills="ASP.NET 3.5, 4.0 (Fluent), .NET Core 3.1 (Fluent), .NET 5 (Fluent), .NET 6 (Competent), WPF (Competent), Angular 6, 8, 9, 10, 11, 13, 14 (Fluent), AngularJS (Beginner), ADO.NET (Fluent), Test Driven Development (Competent), Entity Framework Core (Fluent), Express.js (Competent)"
          />
          <Skills
            category="Architectures"
            skills="ASP.NET MVC (Fluent), Microservice (Competent)"
          />
          <Skills
            category="Databases & Storage"
            skills="SQL Server (Fluent), Cassandra & PostgreSQL (Intermediate), MongoDB (Beginner), Redis Cache (Beginner)"
          />
          <Skills
            category="Web Dev Platforms"
            skills=".NET 6.0 Web API (Fluent), SOAP Service (Competent), Ajax (Fluent), Node.js (Competent), REST API(Fluent)."
          />
          <Skills
            category="Libraries"
            skills="JQuery (Fluent), React.js (Beginner)"
          />
          <Skills
            category="Reporting Tools"
            skills="Crystal Report (Fluent), RDLC (Fluent), SSRS (Competent)"
          />
          <Skills category="Framework Components" skills="LINQ " />
          <Skills
            category="Cloud & Containerization"
            skills="Azure Boards and Repos (Beginner), Azure App Service (Beginner), Docker (Intermediate)."
          />
          <Skills
            category="System Design & Server"
            skills="SOLID (Competent), Design Pattern (Intermediate), IIS (Competent)"
          />
          <Skills
            category="Version Controls"
            skills="TFS, Git, Gitlab, SVN, Visual SourceSafe. (Competent)"
          />
          <Skills
            category="Migration & Integration"
            skills="Database (Competent), .NET Version Migration (Competent), API (Fluent)"
          />
          <Skills
            category="Tools, Technologies"
            skills="VS 2008, 2010, 2015, 2019, 2022, VS Code, SQL Server 2012, 2016, 2019, Photoshop"
          /> */}
          <Skills
            category="Languages"
            skills="C#, Typescript, VB.NET, JavaScript, C++"
          />
          <Skills
            category="Frameworks"
            skills="ASP.NET, .NET Core 3.1, .NET 5 - .NET 9, Angular 8, - Angular 19, AngularJS, ADO.NET, Test Driven Development, Entity Framework Core, Express.js"
          />
          <Skills
            category="Architectures"
            skills="ASP.NET MVC, Microservice."
          />
          <Skills
            category="Databases & Storage"
            skills="SQL Server, Cassandra & PostgreSQL, MongoDB, Redis Cache."
          />
          <Skills
            category="Web Dev Platforms"
            skills=".NET 6.0 Web API, SOAP Service, Ajax, Node.js, REST API."
          />
          <Skills
            category="Libraries"
            skills="JQuery, React.js."
          />
          <Skills
            category="Reporting Tools"
            skills="Crystal Report, RDLC, SSRS."
          />
          <Skills category="Framework Components" skills="LINQ " />
          <Skills
            category="Cloud & Containerization"
            skills="Azure Boards and Repos, Azure App Service, Docker."
          />
          <Skills
            category="System Design & Server"
            skills="SOLID, Design Pattern, IIS."
          />
          <Skills
            category="Version Controls"
            skills="TFS, Git, Gitlab, SVN, Visual SourceSafe."
          />
          <Skills
            category="Migration & Integration"
            skills="Database, .NET Version Migration, API."
          />
          <Skills
            category="Tools, Technologies"
            skills="VS 2008, 2010, 2015, 2019, 2022, VS Code, SQL Server 2012, 2016, 2019, Photoshop."
          />
        </Cell>
      </Grid>
    </div>
  );
}

export default Profile;
