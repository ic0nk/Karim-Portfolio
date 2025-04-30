class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/Css files/footer.css">
            <link rel="stylesheet" href="/Css files/Colors.css">
            <!-- Footer -->
            <footer class="site-footer">
                <div class="footer-top">
                    <div class="footer-brand">
                        <h2>Karim Massaoud</h2>
                        <p>Designing with passion, developing with precision.</p>
                        <div class="social-icons">
                            <a href="https://github.com/karimmassaoudd" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="mailto:karim@example.com"><i class="fa-solid fa-envelope"></i></a>
                            <a href="tel:+0616537940"><i class="fa-solid fa-phone"></i></a>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="footer-section links">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="/index.html">Home</a></li>
                                <li><a href="About.html">About</a></li>
                                <li><a href="Resume.html">Resume</a></li>
                                <li><a href="Projects.html">Projects</a></li>
                            </ul>
                        </div>            
                
                        <div class="footer-section contact11">
                            <h3>Contact Info</h3>
                            <ul class="contact-info2">
                                <li><i class="fa-solid fa-location-dot"></i> Netherlands</li>
                                <li><a href="mailto:karim@example.com"><i class="fa-solid fa-envelope"></i> i556346@fontysict.nl</a></li>
                                <li>
                                    <a href="tel:+0616537940"><i class="fa-solid fa-phone"></i> +06 1653 7940</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2025 Karim Massaoud. All Rights Reserved.</p>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-component', FooterComponent);