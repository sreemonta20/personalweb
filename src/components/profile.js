/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import profilephoto from "../profilephoto.png";
import Courses from "./courses";

function Profile() {
  const [cvUrl, setCvUrl] = useState(""); // Initial empty to prevent early clicks
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        let folder = "cv_southasia"; // Default
        const countryCode = data.country_code;
        const continentCode = data.continent_code;
        debugger;
        if (["AE", "SA", "BH", "OM", "QA", "KW"].includes(countryCode)) {
          folder = "cv_middleeast";
        } else if (["BD", "IN"].includes(countryCode)) {
          folder = "cv_southasia";
        } else if (countryCode === "MY") {
          folder = "cv_southeastasia";
        } else if (["AU", "NZ"].includes(countryCode)) {
          folder = "cv_oceania";
        } else if (countryCode === "CA") {
          folder = "cv_northamerica";
        } else if (continentCode === "EU") {
          folder = "cv_europe";
        } else {
          folder = "default";
        }
        debugger;
        const isCV =
          folder === "cv_middleeast" ||
          folder === "cv_southasia" ||
          folder === "cv_southeastasia" ||
          folder === "default";

        const fileName = isCV
          ? "CV_Sreemonta_Bhowmik.pdf"
          : "Resume_Sreemonta_Bhowmik.pdf";

        setCvUrl(`/assets/docs/${folder}/${fileName}`);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching geolocation:", error);
        setCvUrl(`/assets/docs/cv_southasia/CV_Sreemonta_Bhowmik.pdf`); // Fallback to South Asia
        setIsLoading(false);
      });
  }, []);

  // const handleDownloadClick = () => {
  //   if (isLoading || !cvUrl) {
  //     alert('Location detection in progress. Please try again in a moment.');
  //     return;
  //   }
  //   const link = document.createElement("a");
  //   link.href = cvUrl;
  //   link.download = cvUrl.includes("CV_") ? "CV_Sreemonta_Bhowmik.pdf" : "Resume_Sreemonta_Bhowmik.pdf";
  //   link.click();
  // };
  const handleDownloadClick = () => {
    if (isLoading || !cvUrl) {
      alert("Location detection in progress. Please try again in a moment.");
      return;
    }

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = cvUrl.includes("CV_")
      ? "CV_Sreemonta_Bhowmik.pdf"
      : "Resume_Sreemonta_Bhowmik.pdf";

    document.body.appendChild(link); // important
    link.click();
    document.body.removeChild(link); // cleanup
  };

  const certificateDownload = (fileName) => {
    const link = document.createElement("a");
    // This points to your public/docs/certificate/ folder
    link.href = `/assets/docs/certificate/${fileName}`;
    link.download = fileName;
    link.click();
  };
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={profilephoto}
              alt="avatar"
              style={{
                height: "200px",
              }}
            />{" "}
          </div>
          <h2
            style={{
              paddingTop: "2em",
            }}
          >
            {" "}
            Sreemonta Bhowmik{" "}
          </h2>{" "}
          <h4
            style={{
              color: "grey",
            }}
          >
            Application Consultant{" "}
            {/* <span style={{ fontSize: "small" }}>
                    <a href="javascript:void(0)" onClick={handleDownloadClick}>
                      CV/Resume
                    </a>
                  </span> */}{" "}
            <button
              onClick={handleDownloadClick}
              style={{
                fontSize: "small",
                background: "none",
                border: "none",
                color: "#e22947",
                cursor: "pointer",
                textDecoration: "underline",
                padding: 0,
                marginLeft: "5px",
              }}
            >
              CV / Resume{" "}
            </button>{" "}
          </h4>{" "}
          <hr
            style={{
              borderTop: "3px solid #833fb2",
              width: "100%",
            }}
          />{" "}
          <p>
            Experienced full - stack software developer with over 12 years in
            designing, developing, and implementing robust applications and
            solutions across diverse technologies.Skilled in translating complex
            requirements into efficient, scalable software and seeking to
            leverage this expertise in a challenging Full - Stack Software
            Engineer role.{" "}
          </p>{" "}
          <hr
            style={{
              borderTop: "3px solid #833fb2",
              width: "100%",
            }}
          />{" "}
          <h5> Address </h5>{" "}
          <p>
            {" "}
            Al Nahada, Sharjah(Dubai - Sharjah border), United Arab
            Emirates{" "}
          </p>{" "}
          <h5> Phone </h5> <p> (+971) 505518307 </p> <h5> Email </h5>{" "}
          <p>
            <a href="mailto:sreemonta.bhowmik@gmail.com">
              sreemonta.bhowmik @gmail.com{" "}
            </a>{" "}
          </p>{" "}
          <h5> Web </h5>{" "}
          <a
            href="https://sreemonta.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Personal Profile{" "}
          </a>{" "}
          <hr
            style={{
              borderTop: "3px solid #833fb2",
              width: "100%",
            }}
          />{" "}
        </Cell>{" "}
        <Cell className="resume-right-col" col={8}>
          <h2> Education </h2>
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
          <hr
            style={{
              borderTop: "3px solid #e22947",
            }}
          />
          <h2> Experience </h2>
          <Experience
            // startMonth="Mar"
            // startYear={2023}
            // endMonth=""
            // endYear="Continue"
            duration="Dec, 2025 – Present"
            companyNameAddress="Self-employed (Contract / Remote)"
            designation="Freelance Full-Stack Developer"
            jobDescription="Delivering post-deployment support and enhancements for a charity management system within the Dubai Health ecosystem (.NET Core, Angular, SQL Server).|Developing a custom event management platform for a Dhaka-based client: backend REST APIs (.NET Core), Angular frontend, and relational database design.|Providing ad hoc technical consulting — performance fixes, bug resolution, and architecture advisory — across .NET and Angular applications.|Engaging directly with stakeholders for requirements gathering, scope definition, and iterative delivery in a project-based model."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 4.5, .NET Core 3.1, .NET 10, .NET Web API, SQL Server 2019, Angular 10 and 19, IIS 8.5, and Azure Repos, Ocelot API Gateway, RDLC Reports, Docker."
          />
          <Experience
            // startMonth="Mar"
            // startYear={2023}
            // endMonth=""
            // endYear="Continue"
            duration="Apr, 2023 – Nov, 2025"
            companyNameAddress="Healthcare Solutions (Deployed at Dubaihealth), Dubai, United Arab Emirates"
            designation="Application Consultant"
            jobDescription="Took full ownership of Charity Application development, migrating the frontend from Angular 8 to Angular 10 and optimizing the .NET backend API for better performance.|Designed, developed, and deployed a public-facing Charity Portal from scratch using .NET backend API, Ocelot API Gateway, and Angular 16, allowing patients to submit and track charity requests seamlessly.|Redesigned the commitment letter management and donation document release process, enabling faster fund approvals and reducing patient treatment delays by 40%.|Successfully integrated Non-DAHC hospitals into the system, delivering the new workflow in just 20 days.|Exceeded user expectations by 56%, allowing immediate processing of 200+ Non-DAHC charity requests, accelerating treatment initiation.|Built Windows Services for real-time donation utilization sync, shifting from monthly to 30-minute automated data synchronization with external regulatory body IACAD (Abu Dhabi), ensuring 100% accuracy in financial reporting while reducing manual efforts and errors."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 4.5, .NET Core 3.1, .NET Web API, SQL Server 2019, Angular 10 and 16, IIS 8.5, and Azure Repos, Ocelot API Gateway, RDLC Reports, Docker."
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
            toolsTechDesc="C#, .NET Framework 4.5, .NET 5, Ocelot API Gateway, Web API, SQL Server 2016, Angular JS, Angular 13, NGINX, Docker."
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
            jobDescription="Led application development teams delivering 15+ software solutions across web and desktop platforms for US and local clients, increasing company revenue by 50% annually and improving task success rates by 25%|Collaborated with distributed US-Bangladesh teams on Microsoft Dynamics AX customizations and enterprise applications, managing client communications for requirements gathering and issue resolution.|Developed comprehensive documentation and conducted technical training sessions, reducing client onboarding time by 35% while mentoring junior developers and ensuring quality standards."
            // jobDescription="Led development teams in the successful launch of multiple client applications, ensuring high standards of quality and adherence to deadlines.|Strengthened client relationships through effective communication on new requirements, bug fixes, and ongoing software improvements, contributing to client retention and satisfaction.|Developed user-interactive systems that became a primary revenue driver, increasing company earnings by 50% annually.|Documented high-level designs and business processes, reducing onboarding time by 35% through improved clarity and knowledge sharing."
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
          <hr
            style={{
              borderTop: "3px solid #e22947",
            }}
          />
          <h2> Skills </h2>
          <Skills
            category="Languages"
            skills="C#, TypeScript, JavaScript, VB.NET (legacy support)"
          />
          <Skills
            category="Frameworks"
            skills=".NET 6–9, ASP.NET Core, MVC, Entity Framework Core, LINQ, TDD"
          />
          <Skills
            category="Frontend"
            skills="Angular (8–16), jQuery, React.js (working knowledge)"
          />
          <Skills
            category="Architecture & Patterns"
            skills="Microservices, REST APIs, API Gateway (Ocelot), SOLID, Design Patterns"
          />
          <Skills
            category="Databases"
            skills="SQL Server, PostgreSQL, MongoDB, Redis Cache"
          />
          <Skills
            category="Cloud & DevOps"
            skills="Azure App Service, Azure DevOps, Docker, IIS"
          />
          <Skills
            category="Integrations & Security"
            skills="External APIs, UAE Pass, IDAM, OAuth2/OIDC, JWT, SSO"
          />
          <Skills category="Reporting" skills="Crystal Reports, RDLC, SSRS" />
          <Skills
            category="Project Management & Version Control"
            skills="Jira, Git, GitHub, GitLab"
          />
          <Skills
            category="Migration"
            skills=".NET Version & Database Migration"
          />
          <hr
            style={{
              borderTop: "3px solid #e22947",
            }}
          />
          <h2> Certifications, Courses & Training </h2>
          <Courses
            category="Microsoft Certification"
            courses="Microsoft Azure Fundamentals (AZ-900) - In Progress"
          />
          <Courses
            category="Coursera-Google Certification"
            courses={
              <>
                Google Prompting Essentials - Start Writing Prompts like a Pro -
                <span
                  onClick={() => certificateDownload("writeprompt.pdf")}
                  style={{
                    color: "#e22947",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginLeft: "5px",
                  }}
                >
                  Completed{" "}
                </span>{" "}
              </>
            }
          />{" "}
          <Courses
            category="Coursera-Google Certification"
            courses="Google Prompting Essentials - Design Prompts for Everyday Work Tasks - In Progress"
          />
          <Courses
            category="Coursera-Google Certification"
            courses="Google Prompting Essentials - Speed Up Data Analysis and Presentation Building - In Progress"
          />
          <Courses
            category="Coursera-Google Certification"
            courses="Google Prompting Essentials - Use AI as a Creative or Expert Partner - In Progress"
          />
          <Courses
            category="Training"
            courses="In-house ERP System Training and Implementation — Hop Lun, China (Jan 2016) - Completed"
          />
          <Courses
            category="Workshop"
            courses="Workshop on Software Design and Architecture — Nerd Castle Limited, Dhaka, Bangladesh (Feb 2017 – Mar 2017) - Completed"
          />
          <Courses
            category="Training"
            courses="Training on Object Oriented Programming (OOP) – ASP.NET (C#) — BASIS/BITM, Dhaka, Bangladesh (Nov 2009 – Feb 2010) - Completed"
          />
          <Courses
            category="Industrial Training"
            courses="Linux OS, 3-tier Java web app, Eclipse, IBM WebSphere, MySQL, Unit Testing — DPS Technologies India Pvt. Ltd., West Bengal, India (Jun 2007 – Jul 2007) - Completed"
          />
          <Courses
            category="Training"
            courses="Red Hat Certified Technician (Linux) Training — Micro-Pro, West Bengal, India (Jun 2006 – Jul 2006) - Completed"
          />
        </Cell>{" "}
      </Grid>{" "}
    </div>
  );
}

export default Profile;
