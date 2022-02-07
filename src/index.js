const currentArray = window.location.href.split("/")
const currentPage = currentArray[currentArray.length - 1];

// Handling scroll top event
var desktopScrollTopBtn = document.querySelector("#desktopScrollTop")
var mobileScrollTopBtn = document.querySelector("#mobileScrollTop")
var rootElement = document.documentElement

const scrollTop = () => {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
desktopScrollTopBtn.addEventListener("click", scrollTop);
mobileScrollTopBtn.addEventListener("click", scrollTop);

// mobile user-dropdown button
var userDropdownBtn = document.querySelector("#userDropdownBtn");
var userDropdownOpen = false;
userDropdownBtn.addEventListener("click", () => {
    userDropdownOpen = !userDropdownOpen;
    if (userDropdownOpen) {
        userDropdownBtn.children[1].children[0].className = "icon-dropdown_up";
        $(".user-dropdown-menu").slideDown();
    } else {
        userDropdownBtn.children[1].children[0].className = "icon-dropdown";
        $(".user-dropdown-menu").slideUp();
    }
})

var hamburgerBtn = document.getElementById("hamburger")
var reportsListOpen = false;
var marketingsListOpen = false;
document.querySelector('#reports-list').children[0].addEventListener('click', () => {
    reportsListOpen = !reportsListOpen;
    if (reportsListOpen) {
        document.querySelector('#reports-list').children[0].children[1].children[0].className = "icon-dropdown_up";
        $('#reports-content').slideDown();
    } else {
        document.querySelector('#reports-list').children[0].children[1].children[0].className = "icon-dropdown";
        $('#reports-content').slideUp();
    }
})

document.querySelector('#marketing-list').children[0].addEventListener('click', () => {
    marketingsListOpen = !marketingsListOpen;
    if (marketingsListOpen) {
        document.querySelector('#marketing-list').children[0].children[1].children[0].className = "icon-dropdown_up";
        $("#marketing-content").slideDown();
    } else {
        document.querySelector('#marketing-list').children[0].children[1].children[0].className = "icon-dropdown";
        $("#marketing-content").slideUp();
    }
})
var navbarOpen = false
hamburgerBtn.addEventListener("click", () => {
    navbarOpen = !navbarOpen;
    if (navbarOpen) {

        document.querySelector('.logo-content').style.display = "none";
        document.querySelector('.menu-topbar').children[0].children[2].style.display = "block";
        document.querySelector('.menu-topbar').children[0].children[2].style.margin = "0 4px";
        document.querySelector('.menu-topbar').classList.add('bg-primary');
        hamburgerBtn.children[0].children[0].className = "icon-close";
        $(".navbar-dropdown-menu").slideDown();
        document.querySelector("body").style.overflow = "hidden";

        const reports = document.querySelector('#reports-list').children[1].children;
        for (let i = 0; i < reports.length; i++) {
            const element = reports[i];
            if (element.classList.contains("active")) {
                reportsListOpen = true;
                document.querySelector('#reports-list').children[0].children[1].children[0].className = "icon-dropdown_up";
                document.querySelector('#reports-list').children[1].style.display = "flex";
                document.querySelector('#reports-list').children[0].children[0].style.color = "#D13BC7";
            }
        }

        const marketings = document.querySelector('#marketing-list').children[1].children;
        for (let i = 0; i < marketings.length; i++) {
            const element = marketings[i];
            if (element.classList.contains("active")) {
                marketingsListOpen = true;
                document.querySelector('#marketing-list').children[0].children[1].children[0].className = "icon-dropdown_up";
                document.querySelector('#marketing-list').children[1].style.display = "flex";
                document.querySelector('#marketing-list').children[0].children[0].style.color = "#D13BC7";
            }
        }

    } else {
        reportsListOpen = false;
        marketingsListOpen = false;
        document.querySelector('#reports-list').children[0].children[1].children[0].className = "icon-dropdown";
        $('#reports-content').slideUp();
        document.querySelector('#marketing-list').children[0].children[1].children[0].className = "icon-dropdown";
        $("#marketing-content").slideUp();
        document.querySelector('.logo-content').style.display = "flex";
        document.querySelector('.menu-topbar').children[0].children[2].style.display = "none";
        document.querySelector('.menu-topbar').children[0].children[2].style.margin = "auto";
        document.querySelector('.menu-topbar').classList.remove('bg-primary');
        hamburgerBtn.children[0].children[0].className = "icon-justify";
        $(".navbar-dropdown-menu").slideUp();
        document.querySelector("body").style.overflow = "auto";
    }

})

if (currentPage == "TabsTemplateToastAlert.html") {
    // animated alert
    var isToastOpened = false;
    var timeout;
    $('#successBtn').on('click', () => {
        clearTimeout(timeout);
        isToastOpened = true
        $('#success-toast').animate({
            opacity: 1,
            top: "92",
            behavior: 'smooth'
        }, 300);
        if (isToastOpened) {
            timeout = setTimeout(() => {
                isToastOpened = false
                $('#success-toast').animate({
                    opacity: 0,
                    top: "0",
                    behavior: 'smooth'
                }, 300)
            }, 10000)
        }
    })

    $('#successToastClose').on('click', () => {
        clearTimeout(timeout);
        isToastOpened = false
        $('#success-toast').animate({
            opacity: 0,
            top: "0",
            behavior: 'smooth'
        }, 300);
    })
}

if (currentPage == "OverlayModal.html") {
    // dialog
    $('#overlayBtn').on('click', () => {
        $('.desktop-modal').css("transform", "translate(0, 20px)");
        $('#modal-container').css('display', 'flex').hide().fadeIn();
        document.querySelector('body').style.overflow = "hidden";
    })

    $('#modalCloseBtn').on('click', () => {
        $('.desktop-modal').css("transform", "translate(0, 0)");
        $('#modal-container').fadeOut();
        document.querySelector('body').style.overflow = "auto";
    })
}