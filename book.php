<?php include 'header.php'; ?>

<div class="book-container">
  <h2>Book time nå</h2>
  <div class="book-info">
    <p>Bestill time <a href="https://bellabeauty.onlinebooq.net/" target="_blank" rel="noopener noreferrer">her</a> under "Caterina's Negler (Beauty by Timofti)"</p>
    <p>For spørsmål om kommende timer kontakt meg på telefon: +47 463 88 048 eller <a href="https://www.instagram.com/oslo_nails_caterina/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
  </div> 

<div class="gallery-container">
    <a class="prev">&#10094;</a>
   <?php 
$images = glob("book_img/Image_*.{jpg,png,gif}", GLOB_BRACE);
$image_labels = array('Before', 'After');
foreach (array_chunk($images, 2) as $image_pair) { ?>
  <div class="gallery-row">
    <?php foreach ($image_pair as $index => $image) { ?>
      <div class="gallery-item">
        <div class="image-label"><?php echo $image_labels[$index]; ?></div>
        <img src="<?php echo $image; ?>" alt="">
      </div>
    <?php } ?>
  </div>
<?php } ?>
    <a class="next">&#10095;</a>
  </div>

  <div id="image-viewer-modal" class="modal">
    <span class="close">&times;</span>
    <img src="" alt="" class="modal-content">
    <a class="prev">&#10094;</a>
    <a class="next">&#10095;</a>
  </div>
</div>
<script>
  var gallery = document.querySelector('.gallery-container');
  var galleryItems = document.querySelectorAll('.gallery-row');
  var currentIndex = 0;
  var numItems = galleryItems.length;
  var nextBtn = document.querySelector('.next');
  var prevBtn = document.querySelector('.prev');

  function showItems() {
    for (var i = 0; i < numItems; i++) {
      galleryItems[i].style.display = 'none';
    }
    galleryItems[currentIndex].style.display = 'flex';

    // disable the previous button on the first item
    if (currentIndex === 0) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }

    // disable the next button on the last item
    if (currentIndex === numItems - 1) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  }

  function next() {
    if (currentIndex < numItems - 1) {
      currentIndex++;
      showItems();
    }
  }

  function prev() {
    if (currentIndex > 0) {
      currentIndex--;
      showItems();
    }
  }

  showItems();
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
</script>

<style>
  .book-container {
  max-width: 800px;
  margin: auto;
  padding: 40px;
  text-align: center;
}

.book-container h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.book-info {
  text-align: left;
  margin-bottom: 40px;
}

.book-info p {
  font-size: 18px;
  margin-bottom: 10px;
}

.book-info a {
  color: #0052cc;
  text-decoration: none;
}

.book-info a:hover {
  text-decoration: underline;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
  position: relative;
}

.next,
.prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  font-weight: bold;
  color: #333;
  z-index: 99999;
  cursor: pointer;
  user-select: none;
}

.next {
  right: -60px;
}

.prev {
  left: -60px;
}

.gallery-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2%;
}

.gallery-item {
  width: 49%;
  margin-bottom: 20px;
}

.image-label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

.modal {
  display: none;
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: auto;
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 800px;
  max-height: 80%;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 35px;
  font-weight: bold;
  color: white;
  z-index: 99999;
  cursor: pointer;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

</style>

<?php include 'footer.php'; ?>
