import requests
from config import Config

def check_email_domain(domain):
    url = f"https://api.hunter.io/v2/domain-search?domain={domain}&api_key={Config.HUNTER_API_KEY}"
    response = requests.get(url)
    return response.json()
