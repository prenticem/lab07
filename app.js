document.addEventListener("DOMContentLoaded", function() {

  // Define the store locations
  const locations = [
    {
      name: 'Seattle',
      minCustomersPerHour: 23,
      maxCustomersPerHour: 65,
      avgCookiesPerCustomer: 6.3,
    },
    {
      name: 'Tokyo',
      minCustomersPerHour: 3,
      maxCustomersPerHour: 24,
      avgCookiesPerCustomer: 1.2,
    },
    {
      name: 'Dubai',
      minCustomersPerHour: 11,
      maxCustomersPerHour: 38,
      avgCookiesPerCustomer: 3.7,
    },
    {
      name: 'Paris',
      minCustomersPerHour: 20,
      maxCustomersPerHour: 38,
      avgCookiesPerCustomer: 2.3,
    },
    {
      name: 'Lima',
      minCustomersPerHour: 2,
      maxCustomersPerHour: 16,
      avgCookiesPerCustomer: 4.6,
    },
  ];

  // Define a function to simulate the number of cookies sold per hour
  function simulateCookiesSoldPerHour(location) {
    const cookiesSoldPerHour = [];
    for (let i = 0; i < 14; i++) {
      const randomCustomers = Math.floor(Math.random() * (location.maxCustomersPerHour - location.minCustomersPerHour + 1) + location.minCustomersPerHour);
      const cookiesSold = Math.round(randomCustomers * location.avgCookiesPerCustomer);
      cookiesSoldPerHour.push(cookiesSold);
    }
    return cookiesSoldPerHour;
  }

  // Get a reference to the HTML element where you want to display the data
  const salesTable = document.getElementById('sales-table');

  // Create the table header row for times
  const headerRow = salesTable.insertRow();
  headerRow.insertCell().textContent = '';
  for (let i = 6; i <= 19; i++) {
    const hour = i % 12 || 12;
    const period = i < 12 ? 'AM' : 'PM';
    headerRow.insertCell().textContent = `${hour}:00 ${period}`;
  }
  headerRow.insertCell().textContent = 'Total';

  // Loop through each location and generate a row for its sales data
  for (const location of locations) {
    // Simulate the number of cookies sold per hour for this location
    location.cookiesSoldPerHour = simulateCookiesSoldPerHour(location);

    // Add up the total cookies sold for the day
    const totalCookiesSold = location.cookiesSoldPerHour.reduce((a, b) => a + b, 0);

    // Generate a row for this location's sales data
    const row = salesTable.insertRow();
    row.insertCell().textContent = location.name;
    for (const cookiesSold of location.cookiesSoldPerHour) {
      row.insertCell().textContent = cookiesSold;
    }
    row.insertCell().textContent = totalCookiesSold;
  }
});
