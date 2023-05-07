<?php include 'header.php'; ?>
<div class="content">
    <main>
        <section id="home">
            <h1>Velkommen til Caterina's Nails Salon!</h1>
            <p>Jeg tilbyr profesjonelle negltjenester og fantastiske negldesign for å gjøre neglene dine vakre og unike.</p>
            <p>Utforsk våre tjenester og <a href="https://bellabeauty.onlinebooq.net/" target="_blank" rel="noopener noreferrer">book</a> en avtale i dag!</p>
            <div class="slideshow-container">
  <div class="background-container bg1"></div>
  <div class="background-container bg2"></div>
</div>
        </section> 
</div>

        <section id="about">
            <!-- Add the content for the About section here -->
        </section>

        <section id="services">
            <!-- Add the content for the Services section here -->
        </section>

        <section id="gallery">
            <!-- Add the content for the Gallery section here -->
        </section>

        <section id="book">
            <!-- Add the content for the Book section here -->
        </section>
    </main>
</body> 

<style> 

section#home {
  text-align: center;
  padding-left: 1rem;
}

.slideshow-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.background-container img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.fade {
  opacity: 0;
}

.bg1 {
  opacity: 1;
}

</style>

<?php include 'footer.php'; ?>

