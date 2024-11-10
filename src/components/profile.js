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
          Experienced full-stack software developer with over 13 years in designing, developing, and implementing robust applications and solutions across diverse technologies. Skilled in translating complex requirements into efficient, scalable software and seeking to leverage this expertise in a challenging Full-Stack Software Engineer role.
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
            duration="Mar, 2023 – Continue"
            companyNameAddress="Dubaihealth, Dubai, United Arab Emirates"
            designation="Application Consultant"
            jobDescription="Led a critical project with minimal initial staffing, overseeing all phases from planning and design to development, ensuring on-time delivery and alignment with client goals.|Successfully revitalized a stalled charity application project for the Dubai Healthcare Authority, transforming it into a fully functional solution and launching the patient charity portal for public access.|Addressed and resolved payment-related challenges within the charity application, improving the payment collection process and contributing positively to the organization’s financial health.|Played a pivotal role in securing new projects by establishing strong client relationships, leading to additional contracts with key clients such as Dubai Healthcare Authority and Al Jalila Foundation."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Core 3.1, .NET Web API, SQL Server 2019, Angular 10, Angular 16, IIS 8.5, Azure Repos."
          />

          <Experience
            duration="Sep, 2022 – Feb, 2023"
            companyNameAddress="Blue Logic Digital, Dubai, United Arab Emirates"
            designation="Full-Stack Developer"
            jobDescription="Developed high-quality applications tailored to client requirements in the insurance sector, with a focus on health and motor insurance, ensuring secure and reliable solutions.|Translated complex client requirements into robust code, delivering secure front-end and back-end solutions aligned with industry standards for insurance compliance.|Proactively took ownership of tasks from start to finish, consistently meeting deadlines and quality standards.|Integrated front-end components into back-end systems, creating seamless user experiences and ensuring optimal functionality across applications.|Produced comprehensive technical documentation, enabling streamlined handovers and efficient maintenance."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 4.5, 4.8, .NET Core, ASP.NET MVC, Web API, SQL Server 2016, Angular 8, Angular 13, IIS 8.5, Azure Repos."
          />

          <Experience
            duration="Mar, 2021 – Aug, 2022"
            companyNameAddress="M2SYS Technology (A US-based offshore company), Dhaka, Bangladesh"
            designation="Senior Software Engineer"
            jobDescription="Conducted detailed requirement analysis, design, and development of software solutions, consistently aligning deliverables with client specifications and project goals.|Elevated customer satisfaction from 75% to 95% by introducing an alternative solution for Biometric Analytics services, reducing dependency on third-party systems.|Developed and deployed two intermediary connectors for CloudApper, which enhanced data integration between client servers and internal platforms, enabling two target customers to onboard with M2SYS.|Spearheaded the development of a comprehensive Biometric API for various biometric operations, including data migration processes, significantly streamlining operations for end users.|Produced thorough API documentation, facilitating smooth integration for clients and reducing onboarding time for new technical staff."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 4.5, 4.8, .NET Core, ASP.NET MVC, Web API, SQL Server 2016, Angular 8, Angular 13, IIS 8.5, Azure Repos."
          />

          <Experience
            duration="Mar, 2020 – Sept, 2020"
            companyNameAddress="LeadSoft Bangladesh Limited, Dhaka, Bangladesh"
            designation="Software Architect (Full stack development)"
            jobDescription="Collaborated closely with stakeholders to gather requirements and led the architecture, design, and development of a Pharmaceutical ERP solution, boosting departmental revenue by 40%.|Directed and motivated the development team, ensuring alignment with design standards and successfully migrating legacy ERP solutions to new technologies, enhancing system reliability and client satisfaction.|Conducted daily SCRUM meetings and weekly knowledge-sharing sessions to foster team cohesion and adherence to best practices, accelerating development cycles and improving code quality.|Successfully delivered the Production Module of the ERP on a tight timeline, contributing significantly to revenue growth and client retention."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 3.5, 4.5, ASP.NET MVC, .NET Core, Entity Framework Core, In-Memory Cache, SQL Server 2016, Angular 9, Docker, Azure app service, Azure Repos, Github, TFS."
          />

          <Experience
            duration="Oct 2015 – Feb 2020|Jun 2010 – Mar 2012"
            companyNameAddress="Raihana Consulting (A US-based offshore company), Dhaka, Bangladesh"
            designation="Senior Software Engineer (Full stack development)|Junior Programmer"
            jobDescription="Led development teams in the successful launch of multiple client applications, ensuring high standards of quality and adherence to deadlines.|Strengthened client relationships through effective communication on new requirements, bug fixes, and ongoing software improvements, contributing to client retention and satisfaction.|Developed user-interactive systems that became a primary revenue driver, increasing company earnings by 50% annually.|Documented high-level designs and business processes, reducing onboarding time by 35% through improved clarity and knowledge sharing."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 3.5, 4.5, ASP.NET MVC, .NET Core, Entity Framework Core, In-Memory Cache, SQL Server 2012, Angular 8, IIS, TFS."
          />

          <Experience
            duration="Jul 2014 – Oct 2015|Apr 2012 – Jul 2012"
            companyNameAddress="CSL Software Resources Limited, Dhaka, Bangladesh"
            designation="Programmer|Programmer"
            jobDescription="Developed and enhanced modules for ERP web solutions in Accounting and Apparel Manufacturing, including critical report generation, contributing to a 30% increase in company revenue.|Designed and optimized database structures for new and existing applications, improving data accessibility and operational efficiency.|Spearheaded new approaches in data visualization through RDLC reporting, increasing customer retention by 15-20%.|Led knowledge-sharing sessions and mentoring activities with junior programmers, fostering team growth and accelerating project progression."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework, ASP.NET MVC, SQL Server 2012, Infragistics UI,  JQuery, JavaScript, IIS, GitHub, TFS."
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

          <Skills
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
          />
        </Cell>
      </Grid>
    </div>
  );
}

export default Profile;
