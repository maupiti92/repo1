document.getElementById('loadBtn').addEventListener('click', () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    
    fetch(apiUrl)
      .then(response => {
        return response.json();  // Parse the response as JSON
      })
      .then(data => {
        // Handle and use the JSON data
        console.log('Data from the API: ', data);
        document.getElementById("result").textContent = JSON.stringify(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('An error occurred: ', error);
      });
    
    });    