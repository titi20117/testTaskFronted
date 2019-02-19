var x = window.matchMedia("(max-width: 700px)");
(function poPup() {
    var modal = document.querySelector('.container_section_myModal');
    
    var img = document.querySelectorAll('.container_photos_images');
    var modalImg = document.getElementById("img01");
    img.forEach(element => {
        element.onclick = function() {
          if (x.matches) {
            modal.style.display = "none";
          } else {
            modal.style.display = "block";
            modalImg.src = this.src;
          }
        }
    });
    
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() { 
      modal.style.display = "none";
    }
})();