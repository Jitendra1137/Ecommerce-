// Header file
fetch("./Pages/Header-Footer/header.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
  });
//  Home Page
fetch("./Pages/Home-Page/home.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("home").innerHTML = html;
  });

// Fetch and insert the footer
fetch("./Pages/Header-Footer/footer.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  });
