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
                document.querySelector('#reports-list').children[0].children[0].style.color = "#10109B";
            }
        }

        const marketings = document.querySelector('#marketing-list').children[1].children;
        for (let i = 0; i < marketings.length; i++) {
            const element = marketings[i];
            if (element.classList.contains("active")) {
                marketingsListOpen = true;
                document.querySelector('#marketing-list').children[0].children[1].children[0].className = "icon-dropdown_up";
                document.querySelector('#marketing-list').children[1].style.display = "flex";
                document.querySelector('#marketing-list').children[0].children[0].style.color = "#10109B";
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

// tab bar
const openTab = (e, tabName) => {
    var tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    var tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        console.log(123)
        tabs[i].className = tabs[i].className.replace(" tab_active", "");
    }
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " tab_active";
}

// animated alert
var isToastOpened = false;
$('#successBtn').click(() => {
    isToastOpened = true
    $('#success-toast').animate({
        opacity: 1,
        top: "92",
        behavior: 'smooth'
    }, 300);
    if(isToastOpened) {
        setTimeout(() => {
            isToastOpened = false
            $('#success-toast').animate({
                opacity: 0,
                top: "0",
                behavior: 'smooth'
            }, 300)
        }, 3000)
    }
})

$('#successToastClose').click(() => {
    isToastOpened = false
    $('#success-toast').animate({
        opacity: 0,
        top: "0",
        behavior: 'smooth'
    }, 300);
})

// dialog
$('#overlayBtn').click(() => {
    $('#desktop-dialog').fadeIn(200);
    document.querySelector('body').style.overflowY = "hidden";
})

$('#modalCloseBtn').click(() => {
    $('#desktop-dialog').fadeOut(200);
    document.querySelector('body').style.overflowY = "auto";
})

$(document).re