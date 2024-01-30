document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from data.json
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Call function to populate table
        populateTable(data.info);
      })
      .catch(error => console.error('Error fetching data:', error));
  
    function populateTable(info) {
      const tbody = document.querySelector('#infoTable tbody');
  
      // Map over the info array and create table rows
      info.forEach(person => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const ageCell = document.createElement('td');
        const phoneCell = document.createElement('td');
  
        nameCell.textContent = person.name;
        ageCell.textContent = person.age;
        phoneCell.textContent = person.phone;
  
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(phoneCell);
  
        tbody.appendChild(row);
      });
    }
  });
  