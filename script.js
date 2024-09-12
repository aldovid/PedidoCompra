document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error fetching data:', error));
});
