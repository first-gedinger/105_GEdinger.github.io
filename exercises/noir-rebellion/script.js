// JavaScript to toggle the profile dropdown on clicking the profile icon
const profileIcon = document.querySelector(".profile");
const dropdown = document.querySelector(".dropdown");

let isDropdownOpen = false;

profileIcon.addEventListener("click", function () {
    if (!isDropdownOpen) {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
    
    isDropdownOpen = !isDropdownOpen;
});


// JavaScript to toggle the search bar on clicking the search icon
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");
const searchLine = document.querySelector(".search-line");
const searchInput = document.querySelector(".search-bar input");

let isSearchBarOpen = false;

searchIcon.addEventListener("click", function () {
    if (!isSearchBarOpen) {
        searchBar.style.width = "200px"; // Adjust the width as needed
        searchLine.style.width = "100%";
        searchInput.focus(); // Automatically focus on the input field
    } else {
        searchBar.style.width = "0";
        searchLine.style.width = "0";
    }
    
    isSearchBarOpen = !isSearchBarOpen;
});



