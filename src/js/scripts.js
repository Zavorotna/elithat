function updateImgHeight() {
    if (document.querySelector(".products-sm")) {
        console.log(1);
        let productSm = document.querySelector(".products-sm"),
            productSmImages = document.querySelectorAll(".products-sm img"),
            productSmImageHeight = productSmImages[0].clientHeight,
            generalImg = document.querySelector(".general-img img"),
            slideLeftBtn = document.querySelector(".product-gallery .slider-to-left"), // кнопки перемикання
            slideRightBtn = document.querySelector(".product-gallery .slider-to-right"), // кнопки перемикання
            currIndex = 0
        if (productSmImages.length > 3) {
            slideLeftBtn.classList.add("d-block")
            slideRightBtn.classList.add("d-block")
            productSmImages.forEach(function (e) {
                e.style.minHeight = generalImg.clientHeight / 3 - 10 + "px"
                e.style.marginBottom = 15 + "px"
            })
        }


        productSm.style.height = generalImg.clientHeight + "px"
        // console.log(Math.floor(generalImg.clientHeight / productSmImageHeight));
        // let imagesMargin = (generalImg.clientHeight - (productSmImageHeight * Math.floor(generalImg.clientHeight / productSmImageHeight))) / Math.floor(generalImg.clientHeight / productSmImageHeight - 1)
        // console.log(imagesMargin);
        // productSm.style.rowGap = imagesMargin + "px"

        slideRightBtn.addEventListener('click', function () {
            if (productSmImages[currIndex]) {
                currIndex += 1
            }
            if (productSmImages[currIndex]) {
                productSmImages[currIndex].click()
            }
            if (productSmImages[currIndex + 2]) {
                productSmImages[currIndex - 1].classList.remove("active-img")
                productSmImages[currIndex + 2].classList.add("active-img")

            }

        })
        slideLeftBtn.addEventListener('click', function () {
            if (productSmImages[currIndex - 1]) {
                currIndex -= 1
                console.log(productSmImages[currIndex]);
                if (productSmImages[currIndex + 3]) {
                    productSmImages[currIndex + 3].classList.remove("active-img")

                }
                productSmImages[currIndex].classList.add("active-img")
            }
            if (productSmImages[currIndex]) {
                productSmImages[currIndex].click()

            }
            // if (productSmImages[currIndex - 2]) {
            // console.log(productSmImages[currIndex]);
            // productSmImages[currIndex + 1].classList.remove("active-img")
            // productSmImages[currIndex - 2].classList.add("active-img")

            // }


        })

    }
}

// function updateSliderImages() {
//     if (document.querySelector(".product-list-slider")) {
//         let sliderSimilar = document.querySelector(".product-list-slider"),
//             similarFigures = document.querySelectorAll(".product-list-slider figure"),
//             similarFiguresWidth = similarFigures[0].offsetWidth,
//             howManyCardsToSlide = 1,
//             slideLeftBtn = document.querySelector(".similar-products .slider-to-left"),
//             slideRightBtn = document.querySelector(".similar-products .slider-to-right"),
//             columnGap,
//             currentLastCard = Math.floor(sliderSimilar.offsetWidth / similarFiguresWidth);

//         let isClickAllowed = true

//         if (similarFigures.length > 3) {
//             slideLeftBtn.classList.add("d-block");
//             slideRightBtn.classList.add("d-block");
//             console.log("ширина картки" + similarFiguresWidth);
//             if (window.innerWidth > 768) {

//                 columnGap = (sliderSimilar.offsetWidth - (similarFiguresWidth * Math.floor(sliderSimilar.offsetWidth / similarFiguresWidth))) / Math.floor(sliderSimilar.offsetWidth / similarFiguresWidth - 1);
//             } else {
//                 columnGap = (sliderSimilar.offsetWidth - similarFiguresWidth);
//                 similarFigures[0].style.marginLeft = columnGap / 2 + "px";
//             }
//             sliderSimilar.style.columnGap = columnGap + "px";

//             function slideRight() {

//                 if (isClickAllowed && currentLastCard + howManyCardsToSlide < similarFigures.length) {
//                     currentLastCard += howManyCardsToSlide
//                     isClickAllowed = false;
//                     sliderSimilar.scrollLeft += howManyCardsToSlide * (similarFiguresWidth + columnGap);
//                     setTimeout(() => {
//                         isClickAllowed = true;
//                     }, 800); // блокування на 1 секунду
//                 }
//             }

//             function slideLeft() {
//                 if (isClickAllowed && currentLastCard - howManyCardsToSlide > 0) {
//                     // alert(1)
//                     // console.log(similarFigures[currentLastCard - Math.floor(sliderSimilar.offsetWidth / similarFiguresWidth) - 1]);
//                     currentLastCard -= howManyCardsToSlide
//                     isClickAllowed = false;
//                     sliderSimilar.scrollLeft -= howManyCardsToSlide * (similarFiguresWidth + columnGap);
//                     setTimeout(() => {
//                         isClickAllowed = true;
//                     }, 800); // блокування на 1 секунду
//                 }
//             }

//             // function handleTouchStart(e) {
//             //     touchStartX = e.touches[0].clientX;
//             // }

//             // function handleTouchMove(e) {
//             //     if (touchStartX - e.touches[0].clientX > 30) {
//             //         slideRight();
//             //     } else if (touchStartX - e.touches[0].clientX < -30) {
//             //         slideLeft();
//             //     }
//             // }

//             // function handleTouchEnd() {
//             //     touchStartX = 0;
//             // }

//             // sliderSimilar.addEventListener('touchstart', handleTouchStart);
//             // sliderSimilar.addEventListener('touchmove', handleTouchMove);
//             // sliderSimilar.addEventListener('touchend', handleTouchEnd);

//             slideRightBtn.addEventListener('click', slideRight);
//             slideLeftBtn.addEventListener('click', slideLeft);
//         }
//     }
// }


// updateSliderImages()

document.addEventListener("DOMContentLoaded", function () {
    updateImgHeight()
    if (document.querySelector(".privacy")) {
        let privacyBtn = document.querySelector(".privacy"),
            popup = document.querySelector(".popup"),
            closePopup = document.querySelector(".close-popup")

        function privacyToggle() {
            popup.classList.toggle("d-block")
        }
        privacyBtn.addEventListener("click", function (e) {
            e.preventDefault()
            privacyToggle()
        })
        closePopup.addEventListener("click", privacyToggle)
    }
    if (document.querySelector("#burgerAdmin")) {
        let adminBurger = document.querySelector("#burgerAdmin"),
            adminNav = document.querySelector(".aside-menu"),
            adminClose = document.querySelector(".close-aside-menu")

        function toggleAdminNav() {
            adminNav.classList.toggle("d-block")
        }
        adminBurger.addEventListener("click", toggleAdminNav)
        adminClose.addEventListener("click", toggleAdminNav)
    }

    //прокрутка хедера доверху і донизу
    if (document.querySelector(".header-navigation")) {
        let lastScrollTop = 0
        const headerNavigation = document.querySelector(".header-navigation"),
            burger = document.querySelector("#burger")

        function handleScroll() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop
            if (!burger.classList.contains("active")) {
                if (currentScroll > 180) {
                    if (currentScroll > lastScrollTop) {
                        headerNavigation.style.top = "-100%"
                    } else {
                        headerNavigation.style.top = "0"
                    }
                } else {
                    headerNavigation.style.top = "0"
                }
                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
            }
        }
        if (headerNavigation && burger) {
            window.addEventListener("scroll", handleScroll, false)
        }

    }


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

    if (document.querySelector(".order-page")) {
        function isValidPhoneNumber(phoneNumber) {
            // Регулярний вираз для перевірки формату номеру телефону +380xxxxxxxxx
            const phoneRegex = /\+380[0-9]{9}$/;
            return phoneRegex.test(phoneNumber);
        }

        let userPhoneInput = document.querySelector("#phoneValidation") //інпут для введення номеру телефону

        userPhoneInput.addEventListener("change", function () {
            let validateNum = isValidPhoneNumber(userPhoneInput.value)
            console.log(validateNum);
            if (validateNum) {
                if (document.querySelector(".incorrect-number")) {
                    userPhoneInput.classList.remove("incorrect-number")
                    document.querySelector(".incorect-number-test").classList.add("d-none")
                    userPhoneInput.classList.add("correct-number")
                } else {
                    if (!document.querySelector(".correct-number")) {
                        userPhoneInput.classList.add("correct-number")
                    }

                }
            } else {
                document.querySelector(".incorect-number-test").classList.remove("d-none")
                if (document.querySelector(".correct-number")) {
                    userPhoneInput.classList.remove("correct-number")
                    document.querySelector(".incorect-number-test").classList.remove("d-none")
                    userPhoneInput.classList.add("incorrect-number")
                } else {
                    if (!document.querySelector(".incorrect-number")) {
                        userPhoneInput.classList.add("incorrect-number")
                    }
                }
            }

        })
    }


    if (document.querySelector(".product-gallery")) {
        let productImages = document.querySelectorAll('.products-sm img'),
            generalImg = document.querySelector('.general-img img')

        productImages.forEach(function (image) {
            image.addEventListener('click', function () {
                let clickedImageUrl = this.src
                // generalSrc = generalImg.src


                generalImg.src = clickedImageUrl

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
    if (document.querySelector("#burger")) {
        const burger = document.querySelector(".burger"),
            mobileMenu = document.querySelector(".main-navigation"),
            sections = document.querySelectorAll(".scrollBurger"),
            phoneMobile = document.querySelector(".phone-mobile"),
            blurPage = document.querySelector(".blur-page"),
            headerNavigation = document.querySelector(".header-navigation")
    
        let isMenuOpen = false
    
        burger.addEventListener('click', function () {
            if (!isMenuOpen) { 
                blurPage.style.display = "block"
                burger.classList.add('active')
                mobileMenu.classList.add('activemobile')
                mobileMenu.style.left = "0"
                burger.style.left = "55%"
                phoneMobile.style.left = "20px"
                headerNavigation.style.backdropFilter = "none"
                isMenuOpen = true
            } else { 
                closeMenu()
                isMenuOpen = false
            }
        })
        
        blurPage.addEventListener("click", function () {
            closeMenu()
            isMenuOpen = false
        })
        
        window.addEventListener('scroll', function () {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect()
                
                if (rect.top <= 0 && rect.bottom >= 0) {
                    burger.classList.remove('active')
                    mobileMenu.classList.remove('activemobile')
                    isMenuOpen = false
                }
            })
        })
        
        function closeMenu() {
            blurPage.style.display = "none"
            burger.classList.remove('active')
            burger.classList.add("noactive")
            mobileMenu.classList.remove('activemobile')
            mobileMenu.style.left = "-100%"
            burger.style.left = "0"
            phoneMobile.style.left = "-100%"
            headerNavigation.style.backdropFilter = "blur(5px)"
        }
    }
    


    // function galleryImgHeight () {
    //     if (document.querySelector(".products-sm")) {

    //         // console.log(document.querySelector(".general-img img").getBoundingClientRect().height + "px");
    //         document.querySelector(".products-sm").style.height = document.querySelector(".general-img img").clientHeight + "px"
    //     }

    // }

    // galleryImgHeight()

    // document.addEventListener("resize", galleryImgHeight)

    if (document.querySelector(".sub-menu")) {
        const subMenu = document.querySelector(".sub-menu"),
            subMenuBlock = document.querySelector(".sub-menu-block"),
            screenSize = window.innerWidth

        if (screenSize < 1024) {
            let clickCount = 0
            subMenu.addEventListener('click', function (e) {
                e.preventDefault()
                clickCount++
                if (clickCount == 1) {
                    subMenuBlock.style.display = "block"
                } else {
                    subMenuBlock.style.display = "none"
                    clickCount = 0
                }
            })

        }

        subMenu.addEventListener("mouseenter", function () {
            subMenuBlock.style.display = "block"

            if (screenSize >= 1024) {
                subMenu.style.color = "#fff"
                subMenu.style.backgroundColor = "rgb(33, 158, 188)"
                subMenu.style.border = "1px solid rgb(33, 158, 188)"
            }
        })

        subMenu.addEventListener("mouseleave", function (e) {
            if (!subMenuBlock.contains(e.relatedTarget)) {
                subMenuBlock.style.display = "none"
                subMenu.style.color = ""
                subMenu.style.backgroundColor = ""
                subMenu.style.border = ""
            }
        })

        subMenuBlock.addEventListener("mouseleave", function (e) {
            if (!subMenu.contains(e.relatedTarget)) {
                subMenuBlock.style.display = "none"
                subMenu.style.color = ""
                subMenu.style.backgroundColor = ""
                subMenu.style.border = ""
            }
        })
    }



    // карусель на головний екран
    if (document.querySelector('.carousel')) {

        const carouselPartners = document.querySelector('.carousel')

        let itemsImg = [...document.querySelectorAll(".carousel-img")],
            itemImgWidth = itemsImg[0].offsetWidth + 60,
            isAnimatingImg = false

        function updateCarouselImg() {

            while (carouselPartners.firstChild) {
                carouselPartners.removeChild(carouselPartners.firstChild)
            }

            itemsImg.push(itemsImg.shift())

            const firstImg = itemsImg[itemsImg.length - 1].cloneNode(true)
            firstImg.style.left = `${-itemImgWidth}px`
            carouselPartners.insertAdjacentElement("afterbegin", firstImg)

            for (let i = 0; i < itemsImg.length; i++) {
                const cloneImg = itemsImg[i].cloneNode(true)
                carouselPartners.appendChild(cloneImg)
            }
        }

        updateCarouselImg()

        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {

                // let distanceImg = -itemImgWidth

                carouselPartners.style.transition = "transform .5s cubic-bezier(0,.8,.45,1.19)"
                carouselPartners.style.transform = `translateX(${-itemImgWidth}px)`

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



    }
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

window.addEventListener('resize', updateImgHeight)
// window.addEventListener('resize', updateSliderImages)