import React, { useState } from 'react';
import { fetchHunterData } from '../api';


const HunterIoPage = () => {
   const [domain, setDomain] = useState("");
   const [result, setResult] = useState(null);

   const handleInputChange = (event) => {
      setDomain(event.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = await fetchHunterData(domain);
      setResult(data);
  };
   return (
      <div className='flex lg:flex-row flex-col-reverse gap-3'>
      <div className='flex flex-col bg-[#151C26] rounded-md p-4 h-screen  basis-3/5 gap-8'>
         <div className='flex flex-col items-center    gap-10'>
            <h1 className='text-3xl font-bold'>OSINT Research Tool</h1>
            <form onSubmit={handleSubmit} className="flex gap-2">
               <input 
                  type="text" 
                  placeholder="Enter URL" 
                  value={domain} 
                  onChange={handleInputChange} 
                  className="p-2 rounded-md border border-[#FE5722]"
               />
               <button type="submit" className="py-2 px-3 bg-[#FE5722] text-white rounded-md">Submit</button>
            </form>
            </div>


           <div className="w-2xl h-96 overflow-y-scroll">
                {/* Output Section */}
              {result && <p className="w-fit h-full mt-4 text-balance  text-white font-mono">{JSON.stringify(result)}</p>}
           </div>

         </div>

         
         <div className='flex flex-col h-screen basis-2/5 bg-[#151C26] rounded-md p-4 gap-8'>
            <div className='flex flex-row items-center gap-10'>
               <img className='h-16 rounded-md' src='/hlogo.jpg'/>
               <h2 className='text-3xl font-bold'>Hunter.io</h2>
            </div>
            <h2 className='text-justify text-xl lg:block hidden'>Hunter.io is a powerful email outreach platform designed to help professionals connect with others efficiently. It offers tools like:
               <li>Email Finder: Locate verified email addresses of professionals using their name and domain.</li>
               <li>Email Verifier: Ensure email addresses are valid to reduce bounce rates.</li>
               <li>Campaigns: Create and manage personalized cold email campaigns with follow-ups.</li>
               <li>Integrations: Seamlessly connect with tools like Google Sheets, CRMs, and more.</li>
               <h3>Hunter.io is widely used by marketers, sales teams, and recruiters to streamline their outreach efforts. It emphasizes simplicity, data accuracy, and compliance with privacy regulations</h3>
            </h2>
         </div>
      </div>
   );
};

export default HunterIoPage;
