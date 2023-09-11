//your JS code here. If required.
 function setBgImage() {
            const portraitBgImage = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';
            const landscapeBgImage = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';
            const body = document.body;

            if (window.innerWidth < window.innerHeight) {
                // Portrait mode
                body.style.backgroundImage = `url('${portraitBgImage}')`;
            } else {
                // Landscape mode
                body.style.backgroundImage = `url('${landscapeBgImage}')`;
            }
        }

        // Call the setBgImage function when the page loads and on window resize
        window.addEventListener('load', setBgImage);
        window.addEventListener('resize', setBgImage);
