const observerOptions = {
    root: null,
    rootMargin: '0% 0px',
    threshold: 0.5,
}

export function backgroundColorChange() {

    const appContainer = document.querySelectorAll('.container');
    const profile = document.querySelectorAll('.profile');
    const heroImage = document.querySelectorAll('.hero__image');
    const hero = document.querySelectorAll('.hero')
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hero[0].classList.toggle('alternate');
                appContainer[0].classList.toggle('change-body-background')
                heroImage[0].classList.toggle('visible');
                heroImage[1].classList.toggle('visible');
                observer.unobserve(profile[0])
            }
        });
    },
        observerOptions
    );
    observer.observe(profile[0])

};

