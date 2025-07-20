import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    HUNTER_API_KEY = os.getenv("HUNTER_API_KEY")
    NMAP_PATH = os.getenv("NMAP_PATH")
    VIRUSTOTAL_API_KEY = os.getenv("VIRUSTOTAL_API_KEY")
    NETLAS_API_KEY = os.getenv("NETLAS_API_KEY")
