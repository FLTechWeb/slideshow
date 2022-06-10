// Automatic Basic Slideshow

let slideAutomaticIndex = 0;

showAutomaticSlides();

function showAutomaticSlides()
    {
        let i;

        const slides = document.getElementsByClassName('slideshow-box-image-auto');

        for (i = 0; i < slides.length; i++) 
            {
                slides[i].style.display = 'none';  
            }

        slideAutomaticIndex++;

        if (slideAutomaticIndex > slides.length)
            {
                slideAutomaticIndex = 1
            }    
        
        slides[slideAutomaticIndex-1].style.display = 'block';  

        setTimeout(showAutomaticSlides, 3000);
    }
