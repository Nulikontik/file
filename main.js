// Array of data to be paginated
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Set the number of items to display per page
const itemsPerPage = 5;

// Calculate the number of pages
const totalPages = Math.ceil(data.length / itemsPerPage);

// Get the pagination element
const pagination = document.getElementById("pagination");

// Add event listeners to the "prev" and "next" buttons
pagination.addEventListener("click", function (e) {
  if (e.target.classList.contains("prev")) {
    currentPage--;
    if (currentPage < 1) {
      currentPage = 1;
    }
  } else if (e.target.classList.contains("next")) {
    currentPage++;
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
  }
  displayData();
});

// Define the current page
let currentPage = 1;

// Function to display the data for the current page
function displayData() {
  // Calculate the starting and ending index for the data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the element where the data will be displayed
  const dataContainer = document.querySelector("#data-container");

  // Generate the HTML for the data
  let html = "";
  for (let i = startIndex; i < endIndex && i < data.length; i++) {
    html += `<div>${data[i]}</div>`;
  }

  // Display the HTML on the page
  dataContainer.innerHTML = html;

  // Generate the HTML for the pagination links
  let paginationHtml = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHtml += `<li><span>${i}</span></li>`;
    } else {
      paginationHtml += `<li><a href="#" data-page="${i}">${i}</a></li>`;
    }
  }

  // Display the pagination links on the page
  pagination.children[1].innerHTML = paginationHtml;
}

// Display the data for the first page
displayData();
