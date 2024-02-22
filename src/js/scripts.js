document.addEventListener("DOMContentLoaded", function () {

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
        // window.addEventListener("scroll", function () {
        //     let currentScroll = window.pageYOffset || document.documentElement.scrollTop
        //     const header = document.querySelector(".header-navigation")
        //     if (currentScroll > 180) {
        //         if (currentScroll > lastScrollTop) {
        //             header.style.top = "-100%"
        //         } else {
        //             header.style.top = "0"
        //         }
        //     } else {
        //         header.style.top = "0"
        //     }
        //     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
        // }, false)
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

    if (document.querySelector(".issue-order")) {
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
    if (document.querySelector("#burger")) {
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
                burger.classList.remove("noactive")
            } else {
                burger.classList.add("noactive")
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
    }

    // function galleryImgHeight () {
    //     if (document.querySelector(".products-sm")) {

    //         // console.log(document.querySelector(".general-img img").getBoundingClientRect().height + "px");
    //         document.querySelector(".products-sm").style.height = document.querySelector(".general-img img").clientHeight + "px"
    //     }

    // }

    // galleryImgHeight()

    // document.addEventListener("resize", galleryImgHeight)

    // карусель на головний екран
    if(document.querySelector('.carousel')) {

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