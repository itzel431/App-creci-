// En el frontend (app.js o el archivo JS que uses)
fetch('http://localhost:3000/api/lactancia')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
