export function backgroundColorChange() {
    console.assert('worked');

    const sections = document.querySelectorAll('.profile');
    const observerOptions = {
        root: null,
        rootMargin: '0% 0px',
        threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries, observer) => {
        const element = document.getElementById("app");
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                element.style.background = 'linear-gradient(180deg, rgba(7,7,7,1) 0%, rgba(48,94,252,1) 0%, rgba(208,26,100,1) 100%)'
                element.style.transition = 'background-color 4s ease-in'
                element.style.color = '#fff'
                element.style.transition = 'color 0.6s ease-in'
            }
        });
    },
        observerOptions
    );

    Array.prototype.forEach.call(sections, (el) => {
        observer.observe(el);
    });
}