import React from 'react'; // Importing React library to create the component
import Title from './Title'; // Importing the Title component for displaying the section title

// Functional component named About
const About = () => {
  return (
    <div className='flex flex-col gap-5 w-screen h-fit lg:p-10 p-3'> {/* Main container for the component */}
         <Title title='About Tool'/> {/* Title component displaying the title of the section */}

        <p className='text-justify px-5 lg:text-xl text-md'> {/* Paragraph explaining OSINT */}
          An OSINT (Open-Source Intelligence) platform is a tool or system designed to gather, analyze, and 
          visualize publicly available information from various sources, such as websites, social media, public 
          records, and deep web resources. These platforms help cybersecurity professionals, law enforcement agencies, 
          researchers, and businesses collect actionable intelligence for investigations, threat detection, or 
          competitive analysis. OSINT tools leverage advanced data mining techniques, machine learning, and automation 
          to extract meaningful insights from vast amounts of unstructured data. They can track social media activities, 
          analyze metadata, monitor forums, and even detect leaked credentials on the dark web.
          Some well-known OSINT platforms include Maltego, Shodan, SpiderFoot, and theHarvester, each specializing in 
          different aspects of intelligence gathering, such as network reconnaissance, cyber threat intelligence, and 
          personal information tracking. These platforms are widely used for ethical hacking, fraud detection, and 
          national security purposes. Governments and private organizations utilize OSINT to identify potential risks, 
          track cybercriminal activities, and prevent misinformation.
        </p>
    </div>
  );
}

export default About; // Exporting the About component for use in other parts of the application
