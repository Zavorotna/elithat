if (true) {
    const carousel = document.querySelector('.product-list-slider'),
        slideLeftBtn = document.querySelector(".slider-navigation .slider-to-left"),
        slideRightBtn = document.querySelector(".slider-navigation .slider-to-right"),
        gap = 30

    let items = [...document.querySelectorAll(".product-list-slider figure")]

    const itemWidth = items[0].offsetWidth + 30

    // let borderWidth = 2 * Math.floor(carousel.offsetWidth / itemWidth)

    // if (window.innerWidth > 768) {

    //     columnGap = (carousel.offsetWidth - (itemWidth * Math.floor(carousel.offsetWidth / itemWidth))) / Math.floor(carousel.offsetWidth / itemWidth - 1) - borderWidth;
    // } else {
    //     columnGap = (carousel.offsetWidth - itemWidth) - borderWidth;
    //     items.forEach(function(e) {
    //         e.style.marginLeft = columnGap / 2 + "px";
    //     })

    // }

    // carousel.style.columnGap = columnGap + "px"

    // items.forEach(function(e) {
    //     e.style.marginRight = columnGap / 2 + "px";
    // })

    let cardWidth = 0

    console.log(cardWidth);
    // document.addEventListener("resize", function() {


    // })
    function updateImagesWidth() {
        // console.log(e);
        [...document.querySelectorAll(".product-list-slider figure")].forEach(function (e) {
            if (window.innerWidth > 1700) {
                cardWidth = (carousel.offsetWidth - 3 * gap) / 4
            } else if (window.innerWidth > 950) {
                cardWidth = (carousel.offsetWidth - 2 * gap) / 3
            } else if (window.innerWidth > 545) {
                cardWidth = (carousel.offsetWidth - 1 * gap) / 2
            } else {
                cardWidth = (carousel.offsetWidth)
            }
            console.log(cardWidth);
            e.style.minWidth = cardWidth + "px";

        })
    }

    updateImagesWidth()

    let resizeTimer;

    function resizeFunction() {
        clearTimeout(resizeTimer)

        resizeTimer = setTimeout(function () {
            updateImagesWidth()
        }, 100)
    }

    window.addEventListener('resize', resizeFunction)


    let currentIndex = 0,
        isAnimating = false,
        touchStartX = 0,
        touchEndX = 0,
        intervalId;

    function updateCarousel() {
        while (carousel.firstChild) {
            carousel.removeChild(carousel.firstChild)
        }

        const firstClone = items[items.length - 1].cloneNode(true)
        firstClone.style.transform = `translateX: (-${itemWidth + 30}px)`
        carousel.insertAdjacentElement("afterbegin", firstClone)

        for (let i = 0; i < items.length; i++) {
            const item = items[i].cloneNode(true)
            item.style.transform = `translateX: (${i} * ${-itemWidth}px)`
            carousel.appendChild(item)
        }

    }

    function goToIndex(index) {
        isAnimating = true

        const distance = -index * itemWidth

        currentIndex = (currentIndex + items.length + index) % items.length

        carousel.style.transition = 'transform .5s ease-in-out'
        carousel.style.transform = `translateX(${distance}px)`

        setTimeout(() => {
            carousel.style.transition = 'none'
            carousel.style.transform = 'none'
            isAnimating = false
            updateCarousel()
        }, 500)
    }

    function nextSlide() {
        items.push(items.shift())
        goToIndex(1)
    }

    function prevSlide() {
        items.unshift(items.pop())
        goToIndex(-1)
    }

    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX
        // stopSliderInterval()
    }

    function handleTouchMove(e) {
        touchEndX = e.touches[0].clientX
    }

    function handleTouchEnd() {
        const touchDiff = touchStartX - touchEndX
        if (touchDiff > 50) {
            nextSlide()
        } else if (touchDiff < -50) {
            prevSlide()
        }
        // startSliderInterval()
    }

    function startSliderInterval() {
        intervalId = setInterval(nextSlide, 1000) // 4 seconds interval
    }

    function stopSliderInterval() {
        clearInterval(intervalId)
    }

    function resetInterval() {
        stopSliderInterval()
        // startSliderInterval()
    }

    function setupSlider() {

        updateCarousel()
        carousel.addEventListener('touchstart', handleTouchStart)
        carousel.addEventListener('touchmove', handleTouchMove)
        carousel.addEventListener('touchend', handleTouchEnd)
        // startSliderInterval()

    }


    if (items.length > 3) {
        setupSlider()
        slideLeftBtn.classList.add("d-block")
        slideRightBtn.classList.add("d-block")

        slideLeftBtn.addEventListener("click", prevSlide)
        slideRightBtn.addEventListener("click", nextSlide)
    }

}