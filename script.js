// your code here
function handleSubmit(event) {
      event.preventDefault(); // prevent page reload
      
      const baseUrl = 'https://localhost:8080/';
      const name = document.getElementById('name').value.trim();
      const year = document.getElementById('year').value.trim();
      const urlDisplay = document.getElementById('url');

      const params = new URLSearchParams();

      if (name) {
        params.append('name', name);
      }

      if (year) {
        params.append('year', year);
      }

      // Construct full URL
      const finalUrl = params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;

      urlDisplay.textContent = finalUrl;
    }