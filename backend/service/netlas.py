import requests
from config import Config

def search_netlas(query):
    url = "https://app.netlas.io/api/domains"
    headers = {
        "X-API-KEY": Config.NETLAS_API_KEY,
        'Content-Type': 'application/json'
    }
    params = {
        "q": query,
        'page_size': 20
    }
    
    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    return response.json()






# import requests
# from config import Config

# def search_netlas(query):
#     """Fetch data from Netlas API for the given query."""
#     netlas_url = "https://app.netlas.io/api/responses/"
#     headers = {
#         "Authorization": f"Bearer {Config.NETLAS_API_KEY}",  # Correct header format
#         "Content-Type": "application/json"
#     }
#     data = {"query": query}  # ✅ Include query in the request payload

#     response = requests.post(netlas_url, headers=headers, json=data)
    
#     if response.status_code != 200:
#         return {"error": f"Netlas API error: {response.status_code}, {response.text}"}
    
#     return response.json()  # Return full response