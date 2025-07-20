# IntelHunt: OSINT Research Platform

## Overview

**IntelHunt** is an Open-Source Intelligence (OSINT) research platform designed to gather, analyze, and visualize publicly available information from various sources. It integrates multiple industry-leading OSINT tools into a unified web interface, enabling cybersecurity professionals, researchers, and businesses to collect actionable intelligence for investigations, threat detection, and competitive analysis.

## Features

- **Integrated OSINT Tools:**
  - **Hunter.io:** Find and verify professional email addresses by domain.
  - **Netlas:** Search and analyze data about IP addresses, domains, SSL certificates, and more.
  - **VirusTotal:** Analyze suspicious files, URLs, IPs, and domains for malware and threats.
- **Modern Web UI:** Built with React, Tailwind CSS, and Vite for a fast, responsive experience.
- **Feedback Form:** Collects user feedback for continuous improvement.
- **API-Driven Backend:** Python Flask backend with RESTful endpoints for each OSINT tool.
- **Desktop GUI (Optional):** Tkinter-based desktop app for local OSINT research.

## Project Structure

```
OSINT Platform/
  backend/
    app.py
    config.py
    osint_tool.py
    requirements.txt
    routes/
      osint_routes.py
    service/
      hunter.py
      netlas.py
      virustotal.py
  frontend/
    index.html
    package.json
    src/
      api.js
      App.jsx
      components/
      Pages/
      index.css
      main.jsx
    public/
      (logos, images)
```

## Getting Started

### Prerequisites

- **Node.js** (v16+ recommended)
- **Python** (3.8+ recommended)
- **API Keys** for Hunter.io, Netlas, and VirusTotal

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Create a `.env` file** in the `backend/` directory with the following variables:
   ```
   HUNTER_API_KEY=your_hunter_api_key
   NETLAS_API_KEY=your_netlas_api_key
   VIRUSTOTAL_API_KEY=your_virustotal_api_key
   NMAP_PATH=your_nmap_path (if using Nmap features)
   ```

3. **Run the backend server:**
   ```bash
   python app.py
   ```
   The backend will start on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Create a `.env` file** in the `frontend/` directory:
   ```
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

3. **Run the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will start on [http://localhost:5173](http://localhost:5173) (default Vite port).



## Usage

- **Web App:** Navigate to the home page, select a tool from the sidebar, enter your query (domain, IP, or URL), and view results.
- **Feedback:** Use the feedback form to submit suggestions or report issues.
- **APIs:** The backend exposes RESTful endpoints for each tool:
  - `POST /api/osint/hunter` `{ "domain": "example.com" }`
  - `POST /api/osint/netlas` `{ "query": "example.com" }`
  - `POST /api/osint/virustotal` `{ "url": "example.com" }`

## Technologies Used

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Python, Flask, Flask-CORS, Requests, python-dotenv
- **APIs Integrated:** Hunter.io, Netlas, VirusTotal
- **Desktop GUI:** Tkinter (Python)

## Environment Variables

### Backend

- `HUNTER_API_KEY`
- `NETLAS_API_KEY`
- `VIRUSTOTAL_API_KEY`
- `NMAP_PATH` (optional)

### Frontend

- `VITE_API_BASE_URL`

## Screenshots

<img width="1347" height="611" alt="image" src="https://github.com/user-attachments/assets/f75470c2-9a84-4fba-833d-9d9d3138354d" />

<img width="1342" height="615" alt="image" src="https://github.com/user-attachments/assets/c2d80ad1-2df2-4fb0-b933-831149edd386" />

<img width="1349" height="629" alt="image" src="https://github.com/user-attachments/assets/c54f6372-4f37-4cd5-963d-581e35a63cd8" />

<img width="1347" height="631" alt="image" src="https://github.com/user-attachments/assets/f1124389-4ef8-4688-b652-f8b91306072a" />

<img width="1349" height="624" alt="image" src="https://github.com/user-attachments/assets/bf005989-a634-4d20-9f99-7cab1b374135" />






## Credits

- **Project Name:** IntelHunt
- **Created by:** Arnava Tivari

## License

All copyright reserved by **IntelHunt** & Created by Arnava Tivari. 
