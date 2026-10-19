
document.addEventListener("DOMContentLoaded", function () {
  
  function liftOnHover(elements) {
    elements.forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        element.style.transform = "translateY(-5px)";
        element.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
      });
 
      element.addEventListener("mouseleave", function () {
        
        element.style.transform = "";
        element.style.boxShadow = "";
      });
    });
  }
 
  
  const eventCards = document.querySelectorAll(".event-card");
  liftOnHover(eventCards);
 
  
  liftOnHover(document.querySelectorAll(".about-card"));
  liftOnHover(document.querySelectorAll(".type-ele"));
 
  
  const aboutBanner = document.querySelector(".about");
 
  if (aboutBanner) {
    aboutBanner.addEventListener("mouseenter", function () {
      aboutBanner.style.filter = "brightness(1.08)";
    });
    aboutBanner.addEventListener("mouseleave", function () {
      aboutBanner.style.filter = "";
    });
  }
 
  
  const eventPageImages = document.querySelectorAll("#event-page-box .event-image");
 
  eventPageImages.forEach(function (image) {
    image.addEventListener("mouseenter", function () {
      image.style.transform = "scale(1.04)";
    });
    image.addEventListener("mouseleave", function () {
      image.style.transform = "";
    });
  });
 
  
  const categories = document.querySelectorAll(".event-cat");
 
  categories.forEach(function (category) {
    category.addEventListener("mouseenter", function () {
      category.style.transform = "scale(1.05)";
    });
 
    category.addEventListener("mouseleave", function () {
      category.style.transform = "";
    });
  });
 
  
  categories.forEach(function (category) {
    category.addEventListener("click", function () {
      const selectedCategory = category.dataset.category;
      const alreadySelected = category.classList.contains("active");
 
      
      categories.forEach(function (item) {
        item.classList.remove("active");
      });
 
      if (alreadySelected) {
        
        eventCards.forEach(function (card) {
          card.style.display = "";
        });
        return;
      }
 
      category.classList.add("active");
 
      eventCards.forEach(function (card) {
        if (card.dataset.category === selectedCategory) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
 
  
  const buttons = document.querySelectorAll(".but");
 
  buttons.forEach(function (button) {
    button.addEventListener("mousedown", function () {
      button.style.transform = "scale(0.95)";
    });
 
    
    button.addEventListener("mouseup", function () {
      button.style.transform = "";
    });
    button.addEventListener("mouseleave", function () {
      button.style.transform = "";
    });
  });
 
  
  const navLinks = document.querySelectorAll(".pages a");
 
  
  let currentPath = window.location.pathname;
  if (currentPath.endsWith("/")) {
    currentPath = currentPath + "index.html"; 
  }
 
  
  if (currentPath.endsWith("/event%20detail.html")) {
    currentPath = currentPath.replace("event%20detail.html", "event%20page.html");
  }
 
  navLinks.forEach(function (link) {
    if (link.pathname === currentPath) {
      
      link.style.color = "#0879f9";
      link.style.backgroundColor = "rgba(194, 212, 249, 0.5)";
      link.style.borderRadius = "15px";
      link.setAttribute("aria-current", "page");
    }
  });
 
  
  const form = document.querySelector(".form-group");
  const registerButton = document.querySelector(".register-btn");
 
  if (form && registerButton) {
   
    document.querySelector("#Email").required = true;
    document.querySelector("#phone").required = true;
    document.querySelector("#date").required = true;
 
    
    const dropdowns = form.querySelectorAll("select");
 
    function checkDropdown(dropdown) {
      if (dropdown.selectedIndex === 0) {
        dropdown.setCustomValidity("Please choose an option from the list.");
      } else {
        dropdown.setCustomValidity(""); 
      }
    }
 
    dropdowns.forEach(function (dropdown) {
      checkDropdown(dropdown);
      dropdown.addEventListener("change", function () {
        checkDropdown(dropdown);
      });
    });
 
    registerButton.addEventListener("click", function () {
      
      form.reportValidity();
    });
  }
 
  
  const tableRows = document.querySelectorAll(".table-element tr");
 
  tableRows.forEach(function (row) {
    
    if (row.cells[0].tagName === "TH") {
      return;
    }
 
    row.addEventListener("mouseenter", function () {
      /
      Array.from(row.cells).forEach(function (cell) {
        cell.style.backgroundColor = "rgb(222, 232, 250)";
      });
    });
 
    row.addEventListener("mouseleave", function () {
      Array.from(row.cells).forEach(function (cell) {
        cell.style.backgroundColor = ""; 
      });
    });
  });
});