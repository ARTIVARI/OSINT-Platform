import React, { useState } from 'react'
import { fetchVirusTotalData } from '../api';

const VirusTotalPage = () => {
 
    const [url, setUrl] = useState('');
    const [output, setOutput] = useState('');
  
    const handleInputChange = (event) => {
      setUrl(event.target.value);
    };
  
    const handleSubmit = async (e) => {
                e.preventDefault();
                const data = await fetchVirusTotalData(url);
                setOutput(data);
            };

  return (
    <div className='flex lg:flex-row flex-col-reverse gap-3'>

    <div className='flex flex-col bg-[#151C26] rounded-md p-4 h-screen  basis-3/5 gap-16'>
      <div className='flex flex-col items-center  gap-10'>
              <h1 className='text-3xl font-bold'>OSINT Research Tool</h1>

              {/* input field for URL */}
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter URL" 
                  value={url} 
                  onChange={handleInputChange} 
                  className="p-2 rounded-md border border-[#FE5722]"
                />
                <button type="submit" className="py-2 px-3 bg-[#FE5722] text-white rounded-md">Submit</button>
              </form>
           </div>

              <div className="w-2xl h-96 overflow-y-scroll">
                {/* Output Section */}
              {output && <p className="w-fit h-full mt-4 text-balance  text-white font-mono">{JSON.stringify(output)}</p>}
              </div>
      </div>

      <div className='flex flex-col h-screen basis-2/5 bg-[#151C26] rounded-md p-4 gap-8'>
         <div className='flex flex-row  items-center gap-10'>
          <img className='h-16 rounded-md' src='/v1.png'/>
          <h2 className='text-3xl font-bold'>Virus Total</h2>
         </div>

         <h2 className='text-justify text-xl lg:block hidden'>VirusTotal is a widely used platform for analyzing suspicious files, URLs, IPs, and domains to detect malware and other threats. It aggregates results from multiple antivirus engines and online scanners. Key features include:
                <li>File and URL Analysis: Users can upload files (up to 650 MB) or submit URLs for scanning.</li>
                <li>Community Contributions: Allows users to vote and comment on analysis results.</li>
                <li>Dynamic Analysis: Uses sandbox environments to observe malware behavior.</li>
                <li>API Access: Enables automation of submissions and retrieval of results.</li>
                <li>Threat Intelligence: Provides tools like VTGraph and YARA for in-depth malware investigations</li>
                </h2>
      </div>
    </div>
  )
}

export default VirusTotalPage
