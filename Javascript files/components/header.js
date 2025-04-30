class HeaderComponent extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
            integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/Css files/header.css">
        <header>
            <div class="main-head">
                <input type='checkbox' id='check' />
                <ul class="head">
                    <li><a class="btnn" href="/index.html" id="home-link">Home</a></li>
                    <li><a class="btnn" href="/Html files/About.html" id="about-link">About</i></a></li>
                    <li><a class="btnn" href="/Html files/Resume.html" id="resume-link">Resume</a></li>
                    <li class="menu">
                        <a class="btnn" id="btnproject0" title="Click two times to view the projects & one Click to view the submenu">Projects <i class="fa-solid fa-caret-down"></i></a>
                        <ul class="submenu hidden" id ="submenu">
                            <li><a href="/Html files/Branding.html" class="btnn" id="brand-link">Branding</a></li>
                            <li><a href="/Html files/create-that-UX.html" class="btnn" id="ux-link">create that UX</a></li>
                            <li><a href="/Html files/personal-project.html" class="btnn" id="personal-link">personal project</a></li>
                            <li><a href="/Html files/development-project.html" class="btnn" id="development-link">development project</a></li>
                            <li><a href="/Html files/Aigeneration.html" class="btnn" id="ai-link">AI generation</a></li>
                        </ul>
                    </li>
                    <li class="menu">
                        <a class="btnn" id="btnlearning0" title="Click two times to view the Learning Outcomes & one Click to view the submenu">Learning Outcomes <i class="fa-solid fa-caret-down"></i></a>
                        <ul class="submenu submenu0 hidden" id="submenu1">
                            <li><a href="/Html files/Interactive-Media-Products.html">LO1: Interactive Media Products</a></li>
                            <li><a href="/Html files/Development&version-control.html">LO2: Development & version control</a></li>
                            <li><a href="/Html files/Iterative-Design.html">LO3: Iterative Design</a></li>
                            <li><a href="/Html files/Professional-Standard.html">LO4: Professional Standard</a></li>
                            <li><a href="/Html files/Personal-Leadership.html">LO5: Personal Leadership</a></li>
                        </ul>
                    </li>
                    <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                </ul>
                <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
            </div>
        </header>
    `;
    
    const currentPage = window.location.pathname;  // Get the current page URL
    
    if (currentPage.includes('index.html')) {
    document.getElementById('home-link').classList.add('active');
    } else if (currentPage.includes('About.html')) {
    document.getElementById('about-link').classList.add('active');
    } else if (currentPage.includes('Resume.html')) {
    document.getElementById('resume-link').classList.add('active');
    } else if (currentPage.includes('Projects.html')) {
    document.getElementById('btnproject0').classList.add('active');
    } else if (currentPage.includes('Learning-Outcomes.html')) {
    document.getElementById('btnlearning0').classList.add('active');
    }
    
    // add active
    const navLinks = document.querySelectorAll('.btnn');
    navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
    });


    // sup menu 
    let link = document.getElementById("btnproject0");
    let subMenu = document.getElementById("submenu");
    let btnlearning = document.getElementById("btnlearning0");
    let subMenu1 = document.getElementById("submenu1");
    let clickTimer;
    let click = true;

    link.addEventListener("click", function (e) {
        e.preventDefault();
        if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        window.location.href = "/Html files/Projects.html";
        } else {
            clickTimer = setTimeout(() => {
            subMenu.classList.toggle("hidden");
            clickTimer = null;
            }, 200);
        }
    });

    btnlearning.addEventListener("click", function (e) {
        e.preventDefault();

        if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        window.location.href = "/Html files/Learning-Outcomes.html";
        } else {
            clickTimer = setTimeout(() => {
            subMenu1.classList.toggle("hidden");
            clickTimer = null;
            }, 200);
        }
    });

    }
}

customElements.define('header-component', HeaderComponent);
