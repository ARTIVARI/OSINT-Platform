from flask import Blueprint, request, jsonify
# from flask_cors import CORS
from service.hunter import check_email_domain 
from service.netlas import search_netlas
from service.virustotal import get_virustotal_domain_report


osint_routes = Blueprint('osint_routes', __name__)


# for hunter
@osint_routes.route('/osint/hunter', methods=['POST'])
def hunter_lookup():
    data = request.json
    domain = data.get("domain")
    if not domain:
        return jsonify({"error": "Domain is required"}), 400
    result = check_email_domain(domain)
    return jsonify(result)


# for netlas

@osint_routes.route('/osint/netlas', methods=['POST'])
def netlas_lookup():
    data = request.json
    query = data.get("query")

    if not query:
        return jsonify({"error": "Query is required"}), 400

    result = search_netlas(query)

    #  Debugging logs
    print("Netlas API response:", result)

    return jsonify(result)  # Return full Netlas response


# # for virustotal
# @osint_routes.route('/osint/virustotal', methods=['POST'])
# def virustotal_scan():
#     data = request.json
#     url = data.get("url")
#     if not url:
#         return jsonify({"error": "URL is required"}), 400
#     result = scan_url_with_virustotal(url)
#     return jsonify(result)


@osint_routes.route('/osint/virustotal', methods=['POST'])
def virustotal_scan():
    data = request.json
    domain = data.get("url")  # Expecting domain name, not full URL

    if not domain:
        return jsonify({"error": "Domain is required"}), 400

    result = get_virustotal_domain_report(domain)
    return jsonify(result)  # Return the full raw report
