import React, { useState } from 'react'
import { fetchNetlasData } from '../api';



const NetlasPage = () => {
      const [query, setQuery] = useState("");
      const [result, setResult] = useState(null);
   
      const handleInputChange = (event) => {
        setQuery(event.target.value);
      };
      

      const handleSubmit = async (e) => {
            e.preventDefault();
            const data = await fetchNetlasData(query);
            setResult(data);
        };
      


  return (
    <div className='flex lg:flex-row flex-col-reverse gap-3'>
      <div className='flex flex-col items-center h-screen basis-3/5 bg-[#151C26] rounded-md p-4 gap-10'>
              <h1 className='text-3xl font-bold'>OSINT Research Tool</h1>

              {/* input field for URL */}
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter URL" 
                  value={query} 
                  onChange={handleInputChange} 
                  className="p-2 rounded-md border border-[#FE5722]"
                />
                <button type="submit" className="py-2 px-3 bg-[#FE5722] text-white rounded-md">Submit</button>
              </form>


              <div className="w-2xl h-96 overflow-y-scroll">
                {/* Output Section */}
              {result && <p className="w-fit h-full mt-4 text-balance  text-white font-mono">{JSON.stringify(result)}</p>}
           </div>
      </div>

      <div className='flex flex-col h-screen basis-2/5 bg-[#151C26] rounded-md p-4 gap-8'>
         <div className='flex flex-row  items-center gap-10'>
          <img className='h-16 rounded-md' src='/n1.png'/>
          <h2 className='text-3xl font-bold'>Netlas</h2>
         </div>

         <h2 className='text-justify text-xl lg:block hidden'>Netlas is a comprehensive internet-wide scanning and OSINT (Open Source Intelligence) platform. It allows users to search and analyze data about IP addresses, domains, SSL certificates, and more. Key features include:
                          <li>Attack Surface Discovery: Helps identify vulnerabilities and shadow IT.</li>
                          <li>IoT Search Engine: Enables searches for IoT devices and industrial systems.</li>
                          <li>SSL Certificate Analysis: Provides metadata on certificates, including issuer details, expiration dates, and cryptographic attributes.</li>
                          <li>Advanced Search Capabilities: Supports filters, wildcards, and regular expressions for precise data retrieval.</li>
                          <li>API Integration: Offers tools for automation and integration into workflows</li></h2>
      </div>
    </div>
  )
}

export default NetlasPage