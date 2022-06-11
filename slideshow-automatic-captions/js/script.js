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

// Automatic Basic Slideshow (With Title & Description)

let slideAutomatic2Index = 0;

showAutomaticSlides2();

function showAutomaticSlides2()
    {
        let i;

        const slides = document.getElementsByClassName('slideshow-box-image-auto-2');

        for (i = 0; i < slides.length; i++) 
            {
                slides[i].style.display = 'none';  
            }

            slideAutomatic2Index++;

        if (slideAutomatic2Index > slides.length)
            {
                slideAutomatic2Index = 1
            }    
        
        slides[slideAutomatic2Index-1].style.display = 'block';  

        setTimeout(showAutomaticSlides2, 3000);
    }