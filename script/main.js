(() => {
    const pBig = document.querySelectorAll('P.big');
    pBig.forEach(elem => elem.addEventListener('click', (event) => {
        const currentTarget = event.currentTarget;
        if(currentTarget.classList.contains('active')) {
            currentTarget.classList.remove('active');

            return;
        }

        pBig.forEach(elem => elem.classList.remove('active'));
        currentTarget.classList.add('active');
    }));

    const unCheckedHamburger = () => {

        document.querySelector('P.active')?.classList.remove('active');

        const hamburger = document.getElementById('hamburger');
        hamburger.checked = false;
    }

    const btnCloseSidebar = document.getElementById('btnCloseSidebar');
    btnCloseSidebar.addEventListener('click', (event) => {
        unCheckedHamburger();
    });

    const sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('click', (event) => {

        console.log(event);

        if(event.currentTarget !== event.target) {
            return;
        }

        unCheckedHamburger();
    }, false)

})();

const slides = document.querySelectorAll('.imgslide-list li');
let currentSlide = 0;
const slideWidth = slides[0].clientWidth;

function showSlide(index) {
    const offset = -index * slideWidth;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}px)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// 초기 슬라이드 보여주기
showSlide(currentSlide);

// 3초마다 슬라이드 전환
setInterval(nextSlide, 3000);