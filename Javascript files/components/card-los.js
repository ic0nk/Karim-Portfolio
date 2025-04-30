class CardlosComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/Css files/card.los.css">
            <link rel="stylesheet" href="/Css files/Colors.css">
            
            <div class="container">

                <section class="hero">
                    <h1><slot name="h1-hero"></slot></h1>
                </section>

                <!-- LO1-section -->
                <section class="LO1">
                    <h2><slot name="h2-LO1"></slot></h2>
                    <p class="intro">
                        <slot name="intro-p1"></slot>
                    </p>
                    <p class="intro">
                        <slot name="intro-p2"></slot>
                    </p>
                    <h2><slot name="h2-important"></slot></h2>
                    <p>
                        <slot name="important-p"></slot>
                    </p>
                </section>

                <section class="review">
                    <div class="tabs">
                        <button class="tab-btn active" data-tab="Review-1" title="Click to the box to review">Review 1</button>
                        <button class="tab-btn" data-tab="Review-2" title="Click to the box to review">Review 2</button>
                        <button class="tab-btn" data-tab="Review-3" title="Click to the box to review">Review 3</button>
                        <button class="tab-btn" data-tab="Review-4" title="Click to the box to review">Review 4</button>
                        <button class="tab-btn" data-tab="Review-5" title="Click to the box to review">Review 5</button>
                        <button class="tab-btn" data-tab="Review-6" title="Click to the box to review">Review 6</button>
                        <button class="tab-btn" data-tab="Review-7" title="Click to the box to review">Review 7</button>
                        <button class="tab-btn" data-tab="Review-8" title="Click to the box to review">Review 8</button>
                    </div>

                    <div class="tab-content active" id="Review-1">
                        <slot name="Review-1-section"></slot>
                    </div>

                    <div class="tab-content" id="Review-2">
                        <slot name="Review-2-section"></slot>
                    </div> 

                    <div class="tab-content" id="Review-3">
                        <slot name="Review-3-section"></slot>
                    </div>  

                    <div class="tab-content" id="Review-4"> 
                        <slot name="Review-4-section"></slot>
                    </div>

                    <div class="tab-content" id="Review-5">
                        <slot name="Review-5-section"></slot>
                    </div>

                    <div class="tab-content" id="Review-6">
                        <slot name="Review-6-section"></slot>
                    </div>

                    <div class="tab-content" id="Review-7">
                        <slot name="Review-7-section"></slot>
                    </div>

                    <div class="tab-content" id="Review-8">
                        <slot name="Review-8-section"></slot>
                    </div>
                
                </section>

            </div>
        `;

        const tabBtns = this.shadowRoot.querySelectorAll('.tab-btn');
        const tabContents = this.shadowRoot.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            this.shadowRoot.getElementById(tabId).classList.add('active');
            });
        });

    }
}

customElements.define('cardlos-component', CardlosComponent);
