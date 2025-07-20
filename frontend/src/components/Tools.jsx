import React from 'react'
import Card from './Card';
import Title from './Title';


export const cyberTools = [
  {
    img:'/h1logo.png',
    title:'Hunter.io',
    discription:'Hunter.io  is a powerful email outreach platform designed to help professionals connect with others efficiently.'
  },

  {
    img:'/n1.png',
    title:'Netlas',
    discription:'Netlas is a comprehensive internet-wide scanning and OSINT platform. It allows users to search and analyze data about IP addresses, domains, SSL certificates, and more'
  },

  
  {
    img:'/v1.png',
    title:'Virus Total',
    discription:'VirusTotal is a widely used platform for analyzing suspicious files, URLs, IPs, and domains to detect malware and other threats. It aggregates results from multiple antivirus engines and online scanners'
  },
];

const Tools = () => {

  return (
    <div className='flex flex-col gap-8 w-screen h-fit lg:p-10 p-3'>
         
         <Title title='Integrated Tools'/>
         

         <div className='w-full justify-center items-center flex lg:flex-row flex-col gap-8'>
           {cyberTools.map((card)=>(
            <Card key={card.title} img={card.img} title={card.title} discription={card.discription}/>
           ))}
         </div>
        
    </div>
  )
}

export default Tools