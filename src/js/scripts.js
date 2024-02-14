document.addEventListener("DOMContentLoaded", function () {
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