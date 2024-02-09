document.addEventListener("DOMContentLoaded", function () {
    // карусель на головний екран

    const carouselPartners = document.querySelector('.carousel')

    let itemsImg = [...document.querySelectorAll(".carousel-img")],
        itemImgWidth = itemsImg[0].offsetWidth,
        isAnimatingImg = false

    function updateCarouselImg() {

        while (carouselPartners.firstChild) {
            carouselPartners.removeChild(carouselPartners.firstChild)
        }

        itemsImg.unshift(itemsImg.pop())

        const firstImg = itemsImg[itemsImg.length - 1].cloneNode(true)
        firstImg.style.left = `-${itemImgWidth}rem`
        carouselPartners.insertAdjacentElement("afterbegin", firstImg)

        for (let i = 0; i < itemsImg.length; i++) {
            const cloneImg = itemsImg[i].cloneNode(true)
            carouselPartners.appendChild(cloneImg)
        }
    }

    updateCarouselImg()

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {

            let distanceImg = itemImgWidth

            carouselPartners.style.transition = "transform .5s ease"
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

    // function stopAutoScroll() {
    //     clearInterval(autoScrollInterval)
    // }

    // carouselPartners.addEventListener('mouseenter', () => {
    //     stopAutoScroll()
    // })

    // carouselPartners.addEventListener('mouseleave', () => {
    //     startAutoScroll()
    // })

    startAutoScroll()
})