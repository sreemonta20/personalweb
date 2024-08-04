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
            A highly skilled full-stack software developer with more than 12
            years of hands-on experience in designing, developing, and
            implementing applications and solutions using a range of
            technologies and programming languages. Would like to utilize this
            extensive development experience and hands-on technical expertise in
            a challenging position as a Full-Stack Software Engineer.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
          <h5>Address</h5>
          <p>Al Nahada 2, Dubai, United Arab Emirates</p>
          <h5>Phone</h5>
          <p>(+971) 505518307</p>
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
            jobDescription="Demonstrated leadership by taking charge of the project with no key personnel, overseeing planning, design, and development phases to ensure on-time delivery.|Successfully revived and completed a stagnant charity application project for Dubai Healthcare Authority, turning it into a successful and functional solution. Also successfully deployed new developed patient charity portal t the public.|Successfully addressed payment challenges associated with the charity application project, ensuring the collection of pending payments and improving the company's financial health.|Played a key role in expanding the company's project pipeline by securing new projects, indicating a high level of client satisfaction and trust in the delivered solutions.|Established strong client relationships, resulting in additional projects from prestigious clients such as Dubai Healthcare Authority and Al Jalila Foundation, contributing to the company's expansion."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Core 3.1, .NET Web API, SQL Server 2019, Angular 10, Angular 16, IIS 8.5, Azure Repos."
          />

          <Experience
            duration="Sep, 2022 – Feb, 2023"
            companyNameAddress="Blue Logic Digital, Dubai, United Arab Emirates"
            designation="Full-Stack Developer"
            jobDescription="Creating high-quality products that meet customer needs in the insurance domain specifically health and motor insurances.|Translating client’s technical requirements into code and contributed insurance to achieve the highly secured products including front-end and back-end.|Taking ownership of the task and executing it to perfection within the deadline.|Integrating the front-end components into the applications.|Preparing technical documents."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 4.5, 4.8, .NET Core, ASP.NET MVC, Web API, SQL Server 2016, Angular 8, Angular 13, IIS 8.5, Azure Repos."
          />

          <Experience
            duration="Mar, 2021 – Aug, 2022"
            companyNameAddress="M2SYS Technology (A US-based offshore company), Dhaka, Bangladesh"
            designation="Senior Software Engineer"
            jobDescription="Responsible for requirement analysis, design, development, and API documentation of software solutions for the clients.|Increased the customer satisfaction score from 75% to 95% by providing an alternate solution in the Biometric analytics service, which was dependent on the third-party service earlier.|Successfully completed the development of two Connectors and deployed, which is an intermediary mapper & API platform, which acts between CloudApper and the Client server. It helped at least two targeted customers to agree to do their business with M2SYS.|Successfully completed the development of Biometric API for biometric operations and internal biometric data migration process."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 4.5, 4.8, .NET Core, ASP.NET MVC, Web API, SQL Server 2016, Angular 8, Angular 13, IIS 8.5, Azure Repos."
          />

          <Experience
            duration="Mar, 2020 – Sept, 2020"
            companyNameAddress="LeadSoft Bangladesh Limited, Dhaka, Bangladesh"
            designation="Software Architect (Full stack development)"
            jobDescription="Collaborating with the various stockholders about the requirements and analyzing the requirements with the development team.|Designing, architecting, developing the software from the ground level, and creating high-level design documents.|Guiding, motivating, and assisting the development team (by providing an architectural blueprint) throughout the process and ensuring that all are aligned with development understanding and deadlines.|Ensuring software security, code refactoring & reviewing on the daily basis, UAT testing, coaching, and training of team members to ensure that all end customers are confident enough to use the software applications.|Conducting daily SCRUM meetings to remove obstacles in the team toward development and weekly knowledge-sharing meeting on best practices in coding and new technologies.|Successfully completed the Production Module of Pharmaceutical ERP solution with new technologies on an ASAP basis and helped to generate the revenue of approximately 40% to meet the departmental revenue generation target.|Successfully migration of old Pharmaceutical ERP solutions with new technologies and tools, which were facing various problems to fit new customers’ requirements."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 3.5, 4.5, ASP.NET MVC, .NET Core, Entity Framework Core, In-Memory Cache, SQL Server 2016, Angular 9, Docker, Azure app service, Azure Repos, Github, TFS."
          />

          <Experience
            duration="Oct 2015 – Feb 2020|Jun 2010 – Mar 2012"
            companyNameAddress="Raihana Consulting (A US-based offshore company), Dhaka, Bangladesh"
            designation="Senior Software Engineer (Full stack development)|Junior Programmer"
            jobDescription="Lead the application development team to successfully launch multiple applications for multiple clients on time with a number of constraints, while ensuring no compromise to the highest level of quality of standards and meeting customer requirements.|Overseas and local client communication regarding new requirements, existing software errors, and bugs.|Documenting all the applications and support systems, to present clear concepts about the high-level design and business.
            Procedures of existing or new applications, effective training, sharing technical knowledge, and hence reducing the onboarding time by 35%.|Developed and deployed the user-interactive system successfully, which became the prime product of the company to generate revenue by 50% every year."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework 3.5, 4.5, ASP.NET MVC, .NET Core, Entity Framework Core, In-Memory Cache, SQL Server 2012, Angular 8, IIS, TFS."
          />

          <Experience
            duration="Jul 2014 – Oct 2015|Apr 2012 – Jul 2012"
            companyNameAddress="CSL Software Resources Limited, Dhaka, Bangladesh"
            designation="Programmer|Programmer"
            jobDescription="Developed various modules of different ERP web solutions (Accounting, Apparel Manufacturing) along with various reports where database design and modification were done for existing and new applications.|Achieved a total of 30% (comprising software and support agreement) of the revenue budget of the company by finishing the critical and essential modules of the Accounting ERP solution within the deadline and deploying.|The enormous development of the RDLC report and client support contributed to the increment of the revenue earning by at least 15 to 20% where new approaches to customer data visualization were introduced for successful customer retention.|Attending weekly knowledge sharing sessions, leading and pairing programming with juniors to make them confident and productive, and reporting to the supervisor about project flow, progression, and technical difficulties."
            toolsTechHeading="Language/Technology used: "
            toolsTechDesc="C#, .NET Framework, ASP.NET MVC, SQL Server 2012, Infragistics UI,  JQuery, JavaScript, IIS, GitHub, TFS."
          />

          <Experience
            duration="Oct 2020 – Feb 2021"
            companyNameAddress="Redeem Tech, Copenhagen, Denmark"
            designation="Senior Software Engineer (Volunteer work)"
            jobDescription="Developed a Windows-based application and deployed it at the client-side to help to generate revenue of approximately 10% for the startup.|Team collaboration and assisting team members to achieve the business goal and coding issues for fulfilling the client requirements.|Research & Development related work was done with the co-worker to understand the business and prepared DFD, Architectural design, and final documents (HLD)."
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
