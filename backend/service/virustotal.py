# import requests
# from config import Config

# def scan_url_with_virustotal(url):
#     vt_url = "https://www.virustotal.com/api/v3/urls"
#     headers = {
#         "x-apikey": Config.VIRUSTOTAL_API_KEY,
#         "Content-Type": "application/x-www-form-urlencoded"
#     }
#     data = {"url": url}
    
#     response = requests.post(vt_url, headers=headers, data=data)
#     response.raise_for_status()
#     return response.json()






import requests
from config import Config

def get_virustotal_domain_report(domain):
    vt_url = "https://www.virustotal.com/vtapi/v2/domain/report"
    params = {
        "apikey": Config.VIRUSTOTAL_API_KEY,
        "domain": domain
    }

    response = requests.get(vt_url, params=params)
    response.raise_for_status()  # Raise an error for bad responses (4xx, 5xx)
    
    return response.json()  # Return the full unparsed response
