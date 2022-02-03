const currentArray = window.location.href.split("/")
const currentPage = currentArray[currentArray.length - 1];

// Handling scroll top event
var desktopScrollTopBtn = document.querySelector("#desktopScrollTop")
var mobileScrollTopBtn = document.querySelector("#mobileScrollTop")
var rootElement = document.documentElement

const scrollTop = () => {
    console.log(1213)
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

var navbarOpen = false
hamburgerBtn.addEventListener("click", () => {
    navbarOpen = !navbarOpen;
    var reportsListOpen = false;
    var marketingsListOpen = false;
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

        document.querySelector('#reports-list').children[0].addEventListener('click', () => {
            // $('#reports-icon').toggleClass("flip");
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
    } else {
        document.querySelector('.logo-content').style.display = "flex";
        document.querySelector('.menu-topbar').children[0].children[2].style.display = "none";
        document.querySelector('.menu-topbar').children[0].children[2].style.margin = "auto";
        document.querySelector('.menu-topbar').classList.remove('bg-primary');
        hamburgerBtn.children[0].children[0].className = "icon-justify";
        $(".navbar-dropdown-menu").slideUp();
        document.querySelector("body").style.overflow = "auto";
    }

})

if(currentPage == "TabsTemplateToastAlert.html") {
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
        if(isToastOpened) {
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

    $('#successToastClose').on('click',() => {
        clearTimeout(timeout);
        isToastOpened = false
        $('#success-toast').animate({
            opacity: 0,
            top: "0",
            behavior: 'smooth'
        }, 300);
    })
}

if(currentPage == "OverlayModal.html") {
    // dialog
    $('#overlayBtn').on('click', () => {
        // $('.desktop-modal').animate({marginTop: "50px", opacity: 1}, 300);
        $('#modal-container').fadeIn();
        document.querySelector('body').style.overflow = "hidden";
    })

    $('#modalCloseBtn').on('click', () => {
        // $('.desktop-modal').animate({marginTop: "0px", opacity: 0}, 300);
        $('#modal-container').fadeOut();
        document.querySelector('body').style.overflow = "auto";
    })
}

if(currentPage == "Homepage.html") {
    // status card
    var salesCard = document.querySelector('#sales-card-right');
    salesCard.children[0].children[1].style.height = "4px";
    salesCard.children[1].children[1].style.height = "26px";
    salesCard.children[2].children[1].style.height = "9px";
    salesCard.children[3].children[1].style.height = "12px";
    salesCard.children[4].children[1].style.height = "21px";
    salesCard.children[5].children[1].style.height = "16px";
    salesCard.children[6].children[1].style.height = "24px";

    // orders card
    var ordersCard = document.querySelector('#orders-card-right');
    ordersCard.children[0].children[1].style.height = "4px";
    ordersCard.children[1].children[1].style.height = "5px";
    ordersCard.children[2].children[1].style.height = "10px";
    ordersCard.children[3].children[1].style.height = "3px";
    ordersCard.children[4].children[1].style.height = "21px";
    ordersCard.children[5].children[1].style.height = "16px";
    ordersCard.children[6].children[1].style.height = "5px";

    // calendar views card
    var calendarCard = document.querySelector('#calendar-card-right');
    calendarCard.children[0].children[1].style.height = "15px";
    calendarCard.children[1].children[1].style.height = "10px";
    calendarCard.children[2].children[1].style.height = "17px";
    calendarCard.children[3].children[1].style.height = "19px";
    calendarCard.children[4].children[1].style.height = "21px";
    calendarCard.children[5].children[1].style.height = "24px";
    calendarCard.children[6].children[1].style.height = "24px";

    // booking views card
    var bookingCard = document.querySelector('#booking-card-right');
    bookingCard.children[0].children[1].style.height = "10px";
    bookingCard.children[1].children[1].style.height = "26px";
    bookingCard.children[2].children[1].style.height = "14px";
    bookingCard.children[3].children[1].style.height = "17px";
    bookingCard.children[4].children[1].style.height = "24px";
    bookingCard.children[5].children[1].style.height = "10px";
    bookingCard.children[6].children[1].style.height = "14px";
}