<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
<style>
html, body {
  height: 100%;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: #f8e6e9;
}

.content {
  flex-grow: 1;
}

header {
  background-color: #d81e5b;
  color: #fff;
  padding: 1rem;
}

nav {
  text-align: center;
}

nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
}

nav ul li:not(:last-child) {
  margin-right: 10rem;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}

footer {
  background-color: #d81e5b;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info {
  margin-bottom: 0;
  text-align: left;
  white-space: nowrap;
}

.social-media {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}

.footer-info,
.social-media {
  flex-basis: 20%;
}

.social-icon {
  width: 24px;
  height: 24px;
  margin: 0 0.5rem;
}

a img.social-icon {
  display: inline-block;
  border: none;
}

a img.social-icon:hover {
  opacity: 0.8;
}

    .site-title {
      font-family: 'Pacifico', cursive;
      font-size: 3rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    .site-title .fas {
      margin: 0 0.5rem;
      color: #d81e5b;
    }
  </style>
</style>
    <?php
       $imagesFolder = "slideshow/";
       $imageFilenames = array_values(array_filter(scandir($imagesFolder), function ($file) {
       return !is_dir($file);
       }));
    ?>
    <script>
     const imageFilenames = <?php echo json_encode($imageFilenames); ?>;
     </script>
     <script src="slideshow.js" defer></script> 
    <script src="https://kit.fontawesome.com/7bda12fbf9.js" crossorigin="anonymous"></script>
</head>
<body>
    <h1 class="site-title"><i class="fas fa-spa"></i> Caterina's Nails Salon <i class="fas fa-spa"></i></h1>
    <header>
        <nav>
            <ul>
                <li><a href="index.php#home">Hjem</a></li>
                <li><a href="about.php">Om meg</a></li>
                <li><a href="services.php#services">Tjenester</a></li>
                <li><a href="gallery.php#gallery">Galleri</a></li>
                <li><a href="book.php#book">Book</a></li>
            </ul>
        </nav>
    </header>
</body>
</html>
