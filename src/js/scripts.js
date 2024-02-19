document.addEventListener("DOMContentLoaded", function () {
    //прокрутка хедера доверху і донизу
    let lastScrollTop = 0

    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop
        const header = document.querySelector(".header-navigation")
        if (currentScroll > 180) {
            if (currentScroll > lastScrollTop) {
                header.style.top = "-100%"
            } else {
                header.style.top = "0"
            }
        } else {
            header.style.top = "0"
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
    }, false)


    if (document.querySelector('.filter-item')) {
        const filterItems = document.querySelectorAll('.filter-item')

        filterItems.forEach(function (item) {
            item.querySelector('.relative').addEventListener('click', function () {
                toggleActiveClass(item)
            })
        })

        function toggleActiveClass(item) {

            const filterInputs = item.querySelector('.filter-inputs'),
                filterArrow = item.querySelector(".filter-arrow")

            filterArrow.classList.toggle('active-filter')
            filterInputs.classList.toggle('active-filter')
        }
    }


    if (document.querySelector(".product-gallery")) {
        let productImages = document.querySelectorAll('.products-sm img'),
            generalImg = document.querySelector('.general-img img')

        productImages.forEach(function (image) {
            image.addEventListener('click', function () {
                let clickedImageUrl = this.src,
                    generalSrc = generalImg.src


                generalImg.src = clickedImageUrl

                this.src = generalSrc
            });
        });
    }

    if (document.querySelector(".mobile-filter a")) {

        const openSMFilter = document.querySelector(".mobile-filter a"),
            filter = document.querySelector("#filter"),
            closeFilter = document.querySelector(".close-filter-btn")

        function filterToggle() {
            filter.classList.toggle("d-block")
        }
        console.log(openSMFilter);
        openSMFilter.addEventListener("click", function (e) {
            e.preventDefault()
            filterToggle()
        })

        closeFilter.addEventListener("click", filterToggle)

    }

    //бургер меню
    const burger = document.querySelector(".burger"),
        mobileMenu = document.querySelector(".main-navigation"),
        sections = document.querySelectorAll(".scrollBurger"),
        phoneMobile = document.querySelector(".phone-mobile"),
        blurPage = document.querySelector(".blur-page")


    burger.addEventListener('click', function () {
        burger.classList.toggle('active'),
            mobileMenu.classList.toggle('activemobile')
        if (mobileMenu.classList.contains('activemobile') && burger.classList.contains("active")) {
            mobileMenu.style.left = "0"
            burger.style.left = "55%"
            phoneMobile.style.left = "20px"
            blurPage.style.display = "block"
            blurPage.style.display = "block"
        } else {
            mobileMenu.style.left = "-100%"
            burger.style.left = "0"
            phoneMobile.style.left = "-100%"
            blurPage.style.display = "none"
        }
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

    // function galleryImgHeight () {
    //     if (document.querySelector(".products-sm")) {

    //         // console.log(document.querySelector(".general-img img").getBoundingClientRect().height + "px");
    //         document.querySelector(".products-sm").style.height = document.querySelector(".general-img img").clientHeight + "px"
    //     }

    // }

    // galleryImgHeight()

    // document.addEventListener("resize", galleryImgHeight)

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

if (document.getElementById('min')) {
    let min = document.getElementById('min'),
        max = document.getElementById('max'),
        min_l = document.getElementById('min-lbl'),
        max_l = document.getElementById('max-lbl')

    min.onchange = (ev) => {
        min_l.innerText = min.value + " грн";
    }

    max.onchange = (ev) => {
        max_l.innerText = max.value + " грн";
    }
}