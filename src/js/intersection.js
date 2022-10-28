const observerOptions = {
    root: null,
    rootMargin: '0% 0px',
    threshold: 0.5,
}

export function backgroundColorChange() {

    console.log("working");
    const appContainer = document.querySelectorAll('.container');
    const heroImage = document.querySelectorAll('.hero__image');
    const hero = document.querySelectorAll('.hero')
    const profile = document.querySelectorAll('.profile');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hero[0].classList.toggle('alternate');
                appContainer[0].classList.toggle('body-color--active')
                // show new image 
                heroImage[0].classList.toggle('visible');
                heroImage[0].classList.toggle('spin-off');
                // hide the new image
                heroImage[1].classList.toggle('visible');

            }
        });
    },
        observerOptions
    );
    observer.observe(profile[0])

};

