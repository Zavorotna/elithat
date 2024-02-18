document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelector(".mobile-filter a")) {

        const openSMFilter = document.querySelector(".mobile-filter a"),
            filter = document.querySelector("#filter"),
            closeFilter = document.querySelector(".close-filter-btn")
        function filterToggle () {
            filter.classList.toggle("d-block")
        }
        console.log(openSMFilter);
        openSMFilter.addEventListener("click", function(e) {
            e.preventDefault()
            filterToggle()
        })

        closeFilter.addEventListener("click", filterToggle)

    } 
    //бургер меню
    const burger = document.querySelector(".burger"),
        mobileMenu = document.querySelector(".main-navigation"),
        sections = document.querySelectorAll(".scrollBurger")

    burger.addEventListener('click', function () {
        this.classList.toggle('active'),
            mobileMenu.classList.toggle('activemobile')
    })

    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect()

            if (rect.top <= 0 && rect.bottom >= 0) {
                burger.classList.remove('active')
                mobileMenu.classList.remove('activemobile')
            }
        })
    })

    // карусель на головний екран

    const carouselPartners = document.querySelector('.carousel')

    let itemsImg = [...document.querySelectorAll(".carousel-img")],
        itemImgWidth = itemsImg[0].offsetWidth,
        isAnimatingImg = false

    function updateCarouselImg() {

        while (carouselPartners.firstChild) {
            carouselPartners.removeChild(carouselPartners.firstChild)
        }

        itemsImg.push(itemsImg.shift())

        const firstImg = itemsImg[itemsImg.length - 1].cloneNode(true)
        firstImg.style.left = `${-itemImgWidth}rem`
        carouselPartners.insertAdjacentElement("afterbegin", firstImg)

        for (let i = 0; i < itemsImg.length; i++) {
            const cloneImg = itemsImg[i].cloneNode(true)
            carouselPartners.appendChild(cloneImg)
        }
    }

    updateCarouselImg()

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {

            let distanceImg = -itemImgWidth - 50

            carouselPartners.style.transition = "transform .5s cubic-bezier(0,.8,.45,1.19)"
            carouselPartners.style.transform = `translateX(${distanceImg}rem)`

            isAnimatingImg = true

            setTimeout(() => {
                carouselPartners.style.transition = "none"
                carouselPartners.style.transform = `translateX(0)`
                isAnimatingImg = false
                updateCarouselImg()
            }, 500)

        }, 2000)
    }

    startAutoScroll()

})


var min = document.getElementById('min');
var max = document.getElementById('max');
var min_l = document.getElementById('min-lbl');
var max_l = document.getElementById('max-lbl');

min.onchange = (ev) => {
	min_l.innerText = min.value + " грн";
}

max.onchange = (ev) => {
	max_l.innerText = max.value + " грн";
}