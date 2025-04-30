class ReviewComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/Css files/review.css">
            <link rel="stylesheet" href="/Css files/Colors.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            
            <h2 class="gradient"><slot name="h2-gradient"></slot></h2>
            <div class="main-review">
                <div class="contact-text">
                    <div class="text-left">
                        <h3><slot name="h3-text-left1"></slot></h3>
                        <p><slot name="p-text-left1"></slot></p>
                    </div>
                    <div class="text-left">
                        <h3><slot name="h3-text-left2"></slot></h3>
                        <p><slot name="p-text-left2"></slot></p>
                    </div>
                    <div class="text-left">
                        <h3><slot name="h3-text-left3"></slot></h3>
                        <p><slot name="p-text-left3"></slot></p>
                    </div>
                    <div class="text-left">
                        <h3><slot name="h3-text-left4"></slot></h3>
                        <p><slot name="p-text-left4"></slot></p>
                    </div>
                    <div class="text-left">
                        <h3><slot name="h3-text-left5"></slot></h3>
                        <p><slot name="p-text-left5"></slot></p>
                    </div>
                </div>
                <div class="contact-image">
                    <div class="image-right">
                        <h2>IMAGE RESULT:</h2>

                        <div class="slider">
                            <div class="slides">
                                <slot name="slide"></slot>
                            </div>
                            <div class="controls">
                                <button id="prev"><i class="fa-solid fa-arrow-left"></i></button>
                                <button id="next"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="feedback">
                        <h2>FEEDBACK:</h2>
                        <slot name="image-FEEDBACK"></slot>
                    </div>
                </div>
            </div>
        `;

        this.index = 0;
        this.slidesContainer = this.shadowRoot.querySelector('.slides');

        this.shadowRoot.getElementById('next').addEventListener('click', () => this.nextSlide());
        this.shadowRoot.getElementById('prev').addEventListener('click', () => this.prevSlide());
    }

    getSlides() {
        return this.querySelectorAll('img[slot="slide"]');
    }

    nextSlide() {
        const slides = this.getSlides();
        if (slides.length === 0) return;
        this.index = (this.index + 1) % slides.length;
        this.updateSlidePosition();
    }

    prevSlide() {
        const slides = this.getSlides();
        if (slides.length === 0) return;
        this.index = (this.index - 1 + slides.length) % slides.length;
        this.updateSlidePosition();
    }

    updateSlidePosition() {
        this.slidesContainer.style.transform = `translateX(-${this.index * 750}px)`;
    }
    
}

customElements.define('review-component', ReviewComponent);