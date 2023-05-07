<?php include 'header.php'; ?>
<?php $images = glob("gallery/*.{jpg,png,gif}", GLOB_BRACE); ?>

<!-- HTML for displaying the images -->
<div class="gallery-container">
    <div class="gallery-row">
        <?php foreach ($images as $index => $image) { ?>
            <img src="<?php echo $image; ?>" alt="" class="gallery-item">
            <?php if (($index + 1) % 4 == 0 && $index < count($images) - 1) { ?>
                </div>
                <div class="gallery-row justify-content-center">
            <?php } ?>
        <?php } ?>

        <!-- Add an additional row with empty items if the last row is not full -->
        <?php if (count($images) % 4 != 0) { ?>
            </div>
            <div class="gallery-row justify-content-center">
                <?php for ($i = 0; $i < 4 - (count($images) % 4); $i++) { ?>
                    <div class="gallery-item"></div>
                <?php } ?>
            </div>
        <?php } ?>
    </div>
</div>


<!-- HTML for the image viewer modal -->
<div id="image-viewer-modal" class="modal">
    <span class="close">&times;</span>
    <img src="" alt="" class="modal-content">
    <a class="prev">&#10094;</a>
    <a class="next">&#10095;</a>
</div>
<!-- JavaScript for the image viewer -->
<script>
var modal = document.getElementById("image-viewer-modal");
var modalImg = document.querySelector(".modal-content");
var images = document.querySelectorAll(".gallery-item");
var currentIndex = 0;

// Display the modal with the selected image
function displayImage(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Close the modal when the user clicks the close button
var closeBtn = document.querySelector(".close");
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Add event listeners to each image to open the modal when clicked
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        currentIndex = Array.from(images).indexOf(this);
        displayImage(this.src);
    });
}

// Add event listeners to the navigation arrows
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

prevBtn.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        displayImage(images[currentIndex].src);
    }
}

nextBtn.onclick = function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        displayImage(images[currentIndex].src);
    }
}

// Add event listener to close the modal when the user clicks outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

</script> 
<style>
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-row {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.gallery-row.justify-content-center {
    justify-content: center;
}

.gallery-item {
    margin: 10px;
    width: 100%;
    height: auto;
    max-width: 300px;
    max-height: 300px;
    object-fit: cover;
    cursor: pointer;
}

.gallery-item:nth-child(4n) {
    margin-right: 0;
}

.gallery-item img {
    width: 100%;
    height: auto;
    display: block;
}

/* CSS for the image viewer modal */
.modal {
    display: none;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
}

.close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
}

/* CSS for the navigation arrows */
.prev, .next {
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
margin-top: -50px;
font-weight: bold;
font-size: 30px;
cursor: pointer;
color: #fff;
user-select: none;
}

.next {
right: 0;
}

@media (max-width: 767px) {
.gallery-item {
width: 100%;
height: auto;
}
}

@media (min-width: 768px) and (max-width: 991px) {
.gallery-item {
width: calc(33.33% - 20px);
}
}

@media (min-width: 992px) {
.gallery-item {
width: calc(25% - 20px);
}
}

.gallery-container:after {
content: '';
flex: auto;
}
</style>
<?php include 'footer.php'; ?>
