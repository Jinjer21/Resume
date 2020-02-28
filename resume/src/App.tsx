import React, { useState } from 'react';
import styles from './App.module.scss';
import IResume from './interfaces/IResume';
import EmploymentHistoryItem from './components/EmploymentHistoryItem';
import EducationHistoryItem from './components/EducationHistoryItem';

function App() {


  const defaultResume: IResume = {
    Name: "Jack O'Mahony",
    ContactDetails: {
      Address1: "17 Wikeley Way",
      Address2: "Brimington",
      Address3: "Chesterfield",
      Address4: "Derbyshire",
      Address5: "United Kingdom",
      PostCode: "S43 1AS",
      PhoneNumber: "07446049151",
      EmaillAddress: "J.T.Omahony@Gmail.com",
    },
    Education: [
      {
        Subject: "BSc (Hons) Computer Science",
        Grade: "2:1",
        Name: "University of Chester",
        Location: "Chester, Cheshire",
        StartDate: new Date('01/09/2009'),
        EndDate: new Date('01/07/2012'),
        Details: [" Programming, Java, C#, Lingo, Prolog; Web Design & Development, HTML5, CSS, ASP.net, JavaScript; Database Management Systems, Access, SQL, Data Warehousing, ETL"]
      }
    ],
    EmploymentHistory: [
      {
        Position: "Lead Front End Developer",
        Name: "Chevin Fleet Solutions",
        Location: "Belper, Derbyshire",
        StartDate: new Date('01/05/2016'),
        Details: ["Lead Front End developer on industry leading Fleet Management software. Using HTML, CSS, SASS, JavaScript, jQuery and Bootstrap to overhaul dated UI for C# .net web forms application working with a monolithic legacy code base.",
          "Supervised a team of Junior developers, mentoring them, providing constructive feedback and managing their workload.",
          "Lead Developer and Designer on several responsive Web Applications using Adobe XD, Angular, TypeScript, HMTL, CSS and consuming a JSON REST API. These apps are a stripped down view of our main application to be used by specific user groups. I was involved with this project from the start, creating initial wireframe diagrams, followed by interactive mockups based on Market Research and input from experienced users using Adobe XD. Once development started the majority of my work on this project was Front End focused, however occasionally changes would need to be made to the API, which was implemented in .net"]
      },
      {
        Position: "Software Developer",
        Name: "Knowledge Now Ltd.",
        Location: "Sheffield, South Yorkshire",
        Details: ["Lead developer on several iOS projects written in Objective C following Object Oriented principles implementing many iOS features including CoreData, Auto Layout, Push Notifications, Location Services and Maps. Both apps worked alongside a JSON api to submit data to a remote database which was then viewable on a web front end.",
          "Development of Social Media monitoring dashboard using Ruby on Rails and Javascript, implementing various libraries including jQuery, Highcharts, Google Maps Api",
          "Development of Data Visualisation Dashboard using Ruby on Rails, Highcharts, jQuery, Javascript, Solr",
          "Development and maintenance of Company wordpress website",
          "Creation of Promotional materials for company using Adobe Photoshop, Illustrator, InDesign and Sketch"],
        StartDate: new Date('01/03/2014'),
        EndDate: new Date('01/05/2016')
      },
      {
        Position: "Analyst Programmer",
        Name: "Intercity Technology Ltd.",
        Location: "Birmingham, West Midlands",
        Details: ["Development of database driven web application using Java, Wicket, SQL, Apache Tomcat, HTML, CSS, JavaScript, jQuery"],
        StartDate: new Date('01/10/2012'),
        EndDate: new Date('01/03/2014')
      }
    ]
  };

  const [resume, setResume] = useState(defaultResume);

  return (
    <div className={styles.container}>
      <h1>{resume.Name}</h1>
      <address>
        {resume.ContactDetails.Address1},<br />
        {resume.ContactDetails.Address3},<br />
        {resume.ContactDetails.PostCode}<br />
      </address>
      <a href={`tel:${resume.ContactDetails.PhoneNumber}`}>{resume.ContactDetails.PhoneNumber}</a><br />
      <a href={`mailto:${resume.ContactDetails.EmaillAddress}`}>{resume.ContactDetails.EmaillAddress}</a>
      <h2>Employment History</h2>
      {
        resume.EmploymentHistory.map(eh =>
          <EmploymentHistoryItem Position={eh.Position} key={btoa(JSON.stringify(eh))} Name={eh.Name} Location={eh.Location} StartDate={eh.StartDate} EndDate={eh.EndDate} Details={eh.Details}></EmploymentHistoryItem>
        )
      }
      <h2>Education</h2>
      {
        resume.Education.map(ed =>
          <EducationHistoryItem StartDate={ed.StartDate} EndDate={ed.EndDate} Name={ed.Name} Subject={ed.Subject} Location={ed.Location} Details={ed.Details} Grade={ed.Grade}></EducationHistoryItem>
        )
      }
    </div>
  );
}

export default App;
