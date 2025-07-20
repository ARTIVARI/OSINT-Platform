import tkinter as tk
from tkinter import ttk, scrolledtext
import requests
import json
import threading
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class OSINTTool:
    def __init__(self, root):
        self.root = root
        self.root.title("OSINT Research Tool")
        self.root.geometry("800x600")
        
        # API Keys loaded from environment variables with explicit keys
        self.api_keys = {
            'netlas': os.getenv('NETLAS_API_KEY', 'Kp6youtxUSfAMiB3WHc0PPLLKolXlZ7E'),
            'hunter': os.getenv('HUNTER_API_KEY', 'd24cbdff65663069b0c495048bd190777e8738d7'),
            'nmap': os.getenv('NMAP_API_KEY','KpZOkTkVm8ugLXzqMu11IQP3V8neCYB3N5EXJW0o1eworTXruTtf1Jro8XSj'),
            'virustotal': os.getenv('VIRUSTOTAL_API_KEY', 'a9b00e699e7c4cae69578c6ca9c1cff0b36bed195603814a8680d1932f0d7f6c')
        }
        
        # Validate API keys on startup
        self.validate_api_keys()
        
        # Create main frame
        self.main_frame = ttk.Frame(root, padding="10")
        self.main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Configure grid
        root.columnconfigure(0, weight=1)
        root.rowconfigure(0, weight=1)
        
        self.setup_ui()
        self.setup_styles()
    
    def validate_api_keys(self):
        """Validate that all required API keys are present"""
        missing_keys = [key for key, value in self.api_keys.items() if not value]
        if missing_keys:
            print("Warning: The following API keys are missing:")
            for key in missing_keys:
                print(f"- {key.upper()}_API_KEY")
            print("Please check your .env file")
        else:
            print("All API keys are present")
            # Print the first few characters of each key for verification
            for key, value in self.api_keys.items():
                if value:
                    print(f"{key}: {value[:8]}...")
        
    def setup_styles(self):
        # Configure styles
        style = ttk.Style()
        style.configure('Header.TLabel', font=('Helvetica', 24, 'bold'))
        style.configure('Search.TButton', font=('Helvetica', 10))
        
    def setup_ui(self):
        # Header
        header = ttk.Label(
            self.main_frame, 
            text="OSINT Research Tool",
            style='Header.TLabel'
        )
        header.grid(row=0, column=0, columnspan=3, pady=20)
        
        # Search type selector
        self.search_type = ttk.Combobox(
            self.main_frame,
            values=['Netlas', 'Hunter.io', 'Nmap Search', 'VirusTotal'],
            state='readonly'
        )
        self.search_type.set('Netlas')
        self.search_type.grid(row=1, column=0, padx=5, pady=5, sticky=tk.W)
        
        # Search entry
        self.search_entry = ttk.Entry(self.main_frame, width=40)
        self.search_entry.grid(row=1, column=1, padx=5, pady=5)
        
        # Search button
        self.search_button = ttk.Button(
            self.main_frame,
            text="Search",
            command=self.start_search,
            style='Search.TButton'
        )
        self.search_button.grid(row=1, column=2, padx=5, pady=5)
        
        # Status label
        self.status_label = ttk.Label(self.main_frame, text="")
        self.status_label.grid(row=2, column=0, columnspan=3, pady=5)
        
        # Results area
        self.results_area = scrolledtext.ScrolledText(
            self.main_frame,
            wrap=tk.WORD,
            width=80,
            height=20
        )
        self.results_area.grid(row=3, column=0, columnspan=3, pady=10)
        
    def show_error(self, message):
        self.status_label.config(text=f"Error: {message}", foreground="red")
        
    def show_success(self, message):
        self.status_label.config(text=message, foreground="green")
        
    def start_search(self):
        # Clear previous results
        self.results_area.delete(1.0, tk.END)
        self.search_button.config(state='disabled')
        self.status_label.config(text="Searching...", foreground="black")
        
        # Start search in a separate thread
        thread = threading.Thread(target=self.perform_search)
        thread.daemon = True
        thread.start()
        
    def perform_search(self):
        query = self.search_entry.get().strip()
        search_type = self.search_type.get().lower().replace('.', '').replace(' ', '')
        
        if not query:
            self.root.after(0, self._show_empty_error)
            return
            
        try:
            api_key = self.api_keys.get(search_type.replace('io', ''))
            if not api_key:
                self.root.after(0, lambda: self._show_api_error(search_type))
                return
                
            # Perform API request based on search type
            if search_type == 'netlas':
                try:
                    url = "https://app.netlas.io/api/responses/"
                    headers = {
                        'X-API-Key': api_key,
                        'Content-Type': 'application/json'
                    }
                    params = {
                        'q': query,
                        'page_size': 20
                    }
                    response = requests.get(url, headers=headers, params=params, timeout=10)
                    response.raise_for_status()
                    results = response.json()
                except requests.exceptions.RequestException as netlas_error:
                    error_message = str(netlas_error)
                    if "403" in error_message:
                        error_message = "Invalid Netlas API key or authentication failed. Please check your API key."
                    self.root.after(0, lambda: self._show_netlas_error(error_message))
                    return
            elif search_type == 'hunterio':
                url = f"https://api.hunter.io/v2/domain-search?domain={query}&api_key={api_key}"
                response = requests.get(url, timeout=10)
                response.raise_for_status()
                results = response.json()
            elif search_type == 'nmapsearch':
                url = "https://api.nmap.org/v1/scan"
                headers = {
                    'Authorization': f'Bearer {api_key}',
                    'Content-Type': 'application/json'
                }
                data = {
                    'target': query,
                    'scan_type': 'basic'
                }
                response = requests.post(url, headers=headers, json=data, timeout=30)
                response.raise_for_status()
                results = response.json()
            elif search_type == 'virustotal':
                url = f"https://www.virustotal.com/vtapi/v2/domain/report"
                params = {
                    'apikey': api_key,
                    'domain': query
                }
                response = requests.get(url, params=params, timeout=10)
                response.raise_for_status()
                results = response.json()
            
            # Format and display results
            formatted_results = json.dumps(results, indent=2)
            self.root.after(0, lambda: self._update_success(query, search_type, formatted_results))
            
        except requests.exceptions.RequestException as error:
            error_msg = str(error)
            self.root.after(0, lambda: self._show_network_error(error_msg))
            
        except Exception as error:
            error_msg = str(error)
            self.root.after(0, lambda: self._show_general_error(error_msg))

    def _show_empty_error(self):
        self.show_error("Please enter a search query")
        self.search_button.config(state='normal')

    def _show_api_error(self, search_type):
        self.show_error(f"API key not found for {search_type}")
        self.search_button.config(state='normal')

    def _show_netlas_error(self, error_message):
        self.show_error(f"Netlas API error: {error_message}")
        self.search_button.config(state='normal')

    def _show_network_error(self, error_msg):
        if "403" in error_msg:
            error_msg = "Invalid API key or authentication failed. Please check your API key."
        self.show_error(f"Network error: {error_msg}")
        self.search_button.config(state='normal')

    def _show_general_error(self, error_msg):
        self.show_error(error_msg)
        self.search_button.config(state='normal')

    def _update_success(self, query, search_type, formatted_results):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        header = f"Search Results - {timestamp}\n"
        header += f"Query: {query}\n"
        header += f"Type: {search_type}\n"
        header += "-" * 80 + "\n\n"
        
        self.results_area.insert(tk.END, header + formatted_results)
        self.show_success("Search completed successfully")
        self.search_button.config(state='normal')

    def start(self):
        """Start the application's main event loop"""
        self.root.mainloop()

if __name__ == "__main__":
    root = tk.Tk()
    app = OSINTTool(root)
    app.start()