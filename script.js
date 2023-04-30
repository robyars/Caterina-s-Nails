document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const slideshowContainer = document.querySelector('.slideshow-container');
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    slideshowContainer.addEventListener("mouseover", pauseSlides);
    slideshowContainer.addEventListener("mouseout", resumeSlides);
    prevButton.addEventListener("click", () => changeSlide(-1));
    nextButton.addEventListener("click", () => changeSlide(1));

    let slideIndex = 0;
    let timer;

    const homeContent = `
        <h2 class="home-title">Velkommen til Caterina's Nails Salon!</h2>
        <p class="home-text">Jeg tilbyr profesjonelle negltjenester og fantastiske negldesign for å gjøre neglene dine vakre og unike.</p>
        <p class="home-text">Utforsk våre tjenester og <a href="https://bellabeauty.onlinebooq.net/" target="_blank" rel="noopener noreferrer">book</a> en avtale i dag!</p>
    `;

    const aboutContent = `
        <h2 class="about-title">Velkommen til min verden av profesjonell negldesign og kunstneri!</h2>
        <p class="about-text">Mitt navn er Ecaterina Timofti, men du kan kalle meg Caterina.</p>
        <p class="about-text">Med over 13 års erfaring er jeg lidenskapelig opptatt av å skape fantastiske negldesign og tilby deg negltjenester av høyeste kvalitet.</p>
        <p class="about-text">Min reise startet i 2007, da jeg begynte med negldesign som en hobby. I 2010 deltok jeg på den prestisjefylte Manikyr-, Pedikyr- og Negldesignakademiet "Beauty Space Academy" i Italia, hvor jeg mestret kunsten å lage neglmikromaleri i forskjellige teknikker og Flat One Stroke er en av dem, samt kunstig neglrekonstruksjon i både akryl og gel.</p>
        <p class="about-text">Jeg stoppet ikke der. Jeg fortsatte å utvikle teknikkene mine med avanserte kurs i Ukraina, der jeg spesialiserte meg på innovative neglrekonstrukssjoner, som de iøynefallende stilettoneglene. Min dedikasjon til håndverket mitt, kombinert med min imponerende portefølje, sikrer at du får en enestående opplevelse.</p>
        <p class="about-text">Trå inn i min livlige og fengslende verden av negldesign, og la meg forvandle neglene dine til et fantastisk mesterverk. Enten du søker en klassisk manikyr eller en dristig, kunstnerisk uttalelse, vil min ekspertise og lidenskap overgå forventningene dine. Gjør deg klar til å forelske deg i neglene dine, og <a href="https://bellabeauty.onlinebooq.net/" target="_blank" rel="noopener noreferrer">book</a> din avtale med meg i dag!</p>
    `;

    const servicesContent = `
    <div class="services-container">
        <h2>Tjenester</h2>
        <p>Jeg tilbyr manikyr, pedikyr, negleforlengelse og mer.</p>
        <h3>Prisliste</h3>
    <div class="prices-container">
        <div class="price-item">
            <div class="price-title">Akryl Nytt Sett Naturlig</div>
		<div class="price-description">Nytt Akryl Set betyr forsterkning av negler med akryl på dine naturlig negler. Akryl er naturlig beige-rosa farge. Denne type av manikyr holder neglene sterk og med en fint form opp til 4 uker.</div>
		<div class="price-description">Pris er for kort negler. Hver 0.5 lengde kommer en tilleg på 50kr.</div>
		<div class="price-description">Hvis forlengelse er ønsket, velg papir former og lengde fra tilleg tjenester.</div>
            <div class="price-amount">kr 750</div>
        </div>
        <div class="price-item">
            <div class="price-title">Akryl Etterfyll Naturlig</div>
		<div class="price-description">Etterfylll av akrylnegler med naturlig beige-rosa farget.</div>
		<div class="price-description">Hver 0.5 lengde kommer en tilleg på 50kr. Velg lengde fra tillegtjenester.</div>
		<div class="price-description">For etterfyll, bestill dette kun hvis du allerede har negler laget av meg.</div>
		<div class="price-description">For negler laget i annen salong, velg nytt sett og fjern Akryl/Gel.</div>
		<div class="price-description">I noen tilfeller kan vi jobbe med neglene uten fjerning, da vil jeg kun belaste for nytt sett.</div>
            <div class="price-amount">kr 650</div>
        </div>
        <div class="price-item">
            <div class="price-title">Akryl Nytt Sett Med Shellac</div>
		<div class="price-description">>Nytt Akryl Set Med Shellac betyr forsterkning av negler med akryl og valgfri shellac farge på dine naturlig negler. Denne type av manikyr holder neglene sterk og med en fint form opp til 4 uker.</div>
            <div class="price-description">Pris er for kort negler. Hver 0.5 lengde kommer en tilleg på 50kr.</div>
            <div class="price-description">Hvis forlengelse er ønsket, velg papir former og lengde fra tilleg tjenester.</div>
            <div class="price-amount">kr 850</div>
        </div>
        <div class="price-item">
            <div class="price-title">Akryl Etterfyll Med Shellac</div>
		<div class="price-description">Etterfylll av akrylnegler med valgfri shellac farge.</div>
            <div class="price-description">Hver 0.5 lengde kommer en tilleg på 50kr. Velg lengde fra tillegtjenester.</div>
            <div class="price-description">For etterfyll, bestill dette kun hvis du allerede har negler laget av meg.</div>
            <div class="price-description">For negler laget i annen salong, velg nytt sett og fjern Akryl/Gel.</div>
            <div class="price-description">I noen tilfeller kan vi jobbe med neglene uten fjerning, da vil jeg kun belaste for nytt sett.</div>
            <div class="price-amount">kr 750</div>
        </div>
        <div class="price-item">
            <div class="price-title">Akryl Nytt Sett Ombre</div>
		<div class="price-description">Nytt Akryl Set Ombre betyr forsterkning av negler med akryl på dine naturlig negler. Akryl er naturlig beige-rosa farge og hvit gradient på negler.</div>
            <div class="price-description">Denne type av manikyr holder neglene sterk og med en fint form opp til 4 uker.</div>
            <div class="price-description">Pris er for kort negler. Hver 0.5 lengde kommer en tilleg på 50kr.</div>
            <div class="price-description">Hvis forlengelse er ønsket, velg papir former og lengde fra tilleg tjenester.</div>
            <div class="price-amount">kr 850</div>
        </div>
        <div class="price-item">
            <div class="price-title">Akryl Etterfyll Ombre</div>
		<div class="price-description">Etterfylll av akrylnegler med hvit gradient.</div>
            <div class="price-description">Hver 0.5 lengde kommer en tilleg på 50kr. Velg lengde fra tillegtjenester.</div>
            <div class="price-description">For etterfyll, bestill dette kun hvis du allerede har negler laget av meg.</div>
            <div class="price-description">For negler laget i annen salong, velg nytt sett og fjern Akryl/Gel.</div>
            <div class="price-description">I noen tilfeller kan vi jobbe med neglene uten fjerning, da vil jeg kun belaste for nytt sett.</div>
            <div class="price-amount">kr 750</div>
        </div>
        <div class="price-item">
            <div class="price-title">Akryl Nytt Set - Shellac Fransk</div>
		<div class="price-description">Nytt Akryl Set Shellac Fransk betyr forsterkning av negler med akryl på dine naturlig negler. Akryl er naturlig beige-rosa farge og valgfri farge Shellac Fransk.</div>
            <div class="price-description">Denne type av manikyr holder neglene sterk og med en fint form opp til 4 uker.</div>
            <div class="price-description">Pris er for kort negler. Hver 0.5 lengde kommer en tilleg på 50kr.</div>
            <div class="price-description">Hvis forlengelse er ønsket, velg papir former og lengde fra tilleg tjenester.</div>
            <div class="price-amount">kr 950</div>
        </div>
        <div class="price-item">
            <div class="price-title">Akryl Etterfyll - Shellac Fransk</div>
		<div class="price-description">Etterfylll av akrylnegler med valgfri farge Shellac Fransk.</div>
            <div class="price-description">Hver 0.5 lengde kommer en tilleg på 50kr. Velg lengde fra tillegtjenester.</div>
            <div class="price-description">For etterfyll, bestill dette kun hvis du allerede har negler laget av meg.</div>
            <div class="price-description">For negler laget i annen salong, velg nytt sett og fjern Akryl/Gel.</div>
            <div class="price-description">I noen tilfeller kan vi jobbe med neglene uten fjerning, da vil jeg kun belaste for nytt sett.</div>
            <div class="price-amount">kr 850</div>
        </div>
        <div class="price-item">
            <div class="price-title">Klassik Manikyr uten lakk</div>
		<div class="price-description">Filing/polering av negler, rensing/stell av neglebånd, neglebåndsolje og håndkrem.</div>
            <div class="price-amount">kr 400</div>
        </div>
        <div class="price-item">
            <div class="price-title">Shellac Manikyr</div>
		<div class="price-description">Filing/polering av negler, rensing/stell av neglebånd.</div>
            <div class="price-description">Lakkering med valgfri Shellac farge.</div>
            <div class="price-description">Neglebåndsolje og håndkrem.</div>
            <div class="price-amount">kr 600</div>
        </div>
        <div class="price-item">
            <div class="price-title">Full Pedikyr uten lakk</div>
		<div class="price-description">Inkluderer klipping, trimming og forming av tåneglene, pleie neglebåndene, eksfoliering og hydrering av fotsålene og hælene.</div>
            <div class="price-amount">kr 700</div>
        </div>
        <div class="price-item">
            <div class="price-title">Full Pedikyr med Shellac</div>
		<div class="price-description">Inkluderer klipping, trimming og forming av tåneglene, pleie neglebåndene, eksfoliering og hydrering av fotsålene og hælene.</div>
            <div class="price-description">Lakkering med valgfri Shellac farge.</div>
            <div class="price-amount">kr 850</div>
        </div>
        <div class="price-item">
            <div class="price-title">Mini-Pedikyr uten vann med Shellac</div>
		<div class="price-description">Inkluderer klipping, trimming og forming av tåneglene, pleie neglebåndene.</div>
            <div class="price-description">Lakkering med valgfri Shellac farge.</div>
            <div class="price-amount">kr 550</div>
        </div>
        <div class="price-item">
            <div class="price-title">Gele eller Akryl Fjerning</div>
		<div class="price-description">Inkluderer klipping, trimming og forming av neglene.</div>
            <div class="price-description">Neglebåndsolje og håndkrem.</div>
            <div class="price-amount">kr 400</div>
        </div>
        <div class="price-item">
            <div class="price-title">Shellac Fjerning</div>
		<div class="price-description">Inkluderer klipping, trimming og forming av neglene.</div>
            <div class="price-description">Neglebåndsolje og håndkrem.</div>
	  <div class="price-amount">kr 250</div>
	  </div>
	  <div class="price-item">
	  <div class="price-title">Reparasjon en Negl fra..</div>
	  <div class="price-amount">kr 100</div>
	  </div>
</div>
`;

const galleryContent = `
<h2>Galleri</h2>
<div id="gallery-container">
  <div class="grid-container">
      <img src="Gallery/Gallery (1).jpg" class="grid-item" alt="Image 1">
      <img src="Gallery/Gallery (2).jpg" class="grid-item" alt="Image 2">
    <img src="Gallery/Gallery (3).jpg" class="grid-item" alt="Image 3">
      <img src="Gallery/Gallery (4).jpg" class="grid-item" alt="Image 4">
    <img src="Gallery/Gallery (5).jpg" class="grid-item" alt="Image 5"> 
      <img src="Gallery/Gallery (6).jpg" class="grid-item" alt="Image 6">
      <img src="Gallery/Gallery (7).jpg" class="grid-item" alt="Image 7">
      <img src="Gallery/Gallery (8).jpg" class="grid-item" alt="Image 8">
    <img src="Gallery/Gallery (9).jpg" class="grid-item" alt="Image 9">
      <img src="Gallery/Gallery (10).jpg" class="grid-item" alt="Image 10">
      <img src="Gallery/Gallery (11).jpg" class="grid-item" alt="Image 11">
    <img src="Gallery/Gallery (12).jpg" class="grid-item" alt="Image 12"> 
      <img src="Gallery/Gallery (13).jpg" class="grid-item" alt="Image 13">
      <img src="Gallery/Gallery (14).jpg" class="grid-item" alt="Image 14">
      <img src="Gallery/Gallery (15).jpg" class="grid-item" alt="Image 15">
      <img src="Gallery/Gallery (16).jpg" class="grid-item" alt="Image 16">
      <img src="Gallery/Gallery (17).jpg" class="grid-item" alt="Image 17">
      <img src="Gallery/Gallery (18).jpg" class="grid-item" alt="Image 18">
    <img src="Gallery/Gallery (19).jpg" class="grid-item" alt="Image 19"> 
      <img src="Gallery/Gallery (20).jpg" class="grid-item" alt="Image 20">
      <img src="Gallery/Gallery (21).jpg" class="grid-item" alt="Image 21">
      <img src="Gallery/Gallery (22).jpg" class="grid-item" alt="Image 22">
      <img src="Gallery/Gallery (23).jpg" class="grid-item" alt="Image 23">
      <img src="Gallery/Gallery (24).jpg" class="grid-item" alt="Image 24">
    <img src="Gallery/Gallery (25).jpg" class="grid-item" alt="Image 25"> 
      <img src="Gallery/Gallery (26).jpg" class="grid-item" alt="Image 26">
      <img src="Gallery/Gallery (27).jpg" class="grid-item" alt="Image 27">
      <!-- Add more images as needed -->
  </div>

<div id="modal" class="modal">
	    <span class="close">&times;</span>
          <div class="modal-content">
          <div class="slide">
              <img src="Gallery/Gallery (1).jpg" alt="Image 1">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (2).jpg" alt="Image 2">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (3).jpg" alt="Image 3">
          </div>
        <div class="slide">
              <img src="Gallery/Gallery (4).jpg" alt="Image 4">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (5).jpg" alt="Image 5">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (6).jpg" alt="Image 6">
          </div>
      <div class="slide">
              <img src="Gallery/Gallery (7).jpg" alt="Image 7">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (8).jpg" alt="Image 8">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (9).jpg" alt="Image 9">
          </div>
      <div class="slide">
              <img src="Gallery/Gallery (10).jpg" alt="Image 10">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (11).jpg" alt="Image 11">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (12).jpg" alt="Image 12">
          </div>
      <div class="slide">
              <img src="Gallery/Gallery (13).jpg" alt="Image 13">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (14).jpg" alt="Image 14">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (15).jpg" alt="Image 15">
          </div>
      <div class="slide">
              <img src="Gallery/Gallery (16).jpg" alt="Image 16">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (17).jpg" alt="Image 17">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (18).jpg" alt="Image 18">
          </div>
      <div class="slide">
              <img src="Gallery/Gallery (19).jpg" alt="Image 19">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (20).jpg" alt="Image 20">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (21).jpg" alt="Image 21">
          </div>
      <div class="slide">
              <img src="Gallery/Gallery (22).jpg" alt="Image 22">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (23).jpg" alt="Image 23">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (24).jpg" alt="Image 24">
          </div>
      <div class="slide">
              <img src="Gallery/Gallery (25).jpg" alt="Image 25">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (26).jpg" alt="Image 26">
          </div>
          <div class="slide">
              <img src="Gallery/Gallery (27).jpg" alt="Image 27">
          </div>
          <!-- Add more slides as needed -->
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
  </div>
</div> 
`;

function initGallery() {
  document.querySelectorAll('#gallery-container img.grid-item').forEach((img, index) => {
    img.onclick = function () {
      openModal();
      currentSlide(index + 1);
    };
  });

  document.getElementById("modal").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  });
}


const bookContent = `
    <div class="book-container">
        <h2>Book tjeneste</h2>
        <p>Bestill time <a href="https://bellabeauty.onlinebooq.net/" target="_blank" rel="noopener noreferrer">her</a> under "Caterina's Negler (Beauty by Timofti)"</p>
        <p>For spørsmål om kommende timer kontakt meg på telefon: +47 463 88 048 eller <a href="https://www.instagram.com/oslo_nails_caterina/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
    </div>
`;


    function updateContent(contentHtml, callback) {
        content.innerHTML = contentHtml;
	  if (callback) {
            callback();
        }
    }

    function pauseSlides() {
        clearTimeout(timer);
        timer = null;
    }

    function resumeSlides() {
        if (timer === null) {
            timer = setTimeout(function() {
                showSlides(slideIndex += 1);
            }, 3000); // Change the image every 3 seconds
        }
    }

    function changeSlide(n) {
        clearTimeout(timer);
        timer = null;
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("slide");

        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";
        if (timer !== null) {
            timer = setTimeout(function() {
                showSlides(slideIndex += 1);
            }, 3000); // Change the image every 3 seconds
        }
    }

    // Start the initial timer
    timer = setTimeout(function() {
        showSlides(slideIndex += 1);
    }, 3000);

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            content.style.opacity = 0;
            slideshowContainer.style.display = link.id === 'home' ? 'block' : 'none';
            setTimeout(() => {
                switch (link.id) {
                    case 'home':
                        updateContent(homeContent, showSlides);
                        break;
                    case 'about':
                        updateContent(aboutContent);
                        break;
                    case 'services':
                        updateContent(servicesContent);
                        break;
                    case 'gallery':
                        updateContent(galleryContent, initGallery);
    				break;
                    case 'book':
                        updateContent(bookContent);
                        break;
                    default:
                        updateContent(homeContent);
                }
                content.style.opacity = 1;
            }, 300);
        });
    });

    content.style.opacity = 0;
    updateContent(homeContent, showSlides);
    content.style.opacity = 1;
});

let slideIndex = 1;

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  slideIndex = 1;
  showSlides(slideIndex);
}


function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    closeModal();
    return;
  }
  if (n < 1) {
    slideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}


// Initialize the gallery
initGallery();
