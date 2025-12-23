class RajPlumbingChatbot {
    constructor() {
        // Initialize DOM elements with error handling
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        this.quickQuestions = document.getElementById('quickQuestions');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        
        // Validate essential elements exist
        if (!this.chatMessages || !this.userInput || !this.sendButton || !this.quickQuestions) {
            console.error('Required DOM elements not found');
            return;
        }
        
        this.companyInfo = {
            name: "Raj Plumbing",
            owner: "Mr. Arvind Makwana",
            position: "Team Leader and Proprietor",
            experience: "twenty years",
            services: "Plumbing and Sanitarywares",
            team: "60 skilled and experienced workers",
            supervisors: [
                { name: "Mr. Vinod Lad", role: "Skilled Supervisor" },
                { name: "Mr. Aakash Jaiswal", role: "Skilled Supervisor" },
                { name: "Mr. Akshay Niwale", role: "Skilled Supervisor" },
                { name: "Mr. Chetan Khedekar", role: "Skilled Supervisor" }
            ],
            contact: {
                phone: "+91 9320661899",
                email: "rajplumbing@gmail.com",
                address: "Office No. 603, 6th floor A wing, Preesha Paradise, 18, Natkwala Lane, Borivali (West), Mumbai - 400 092",
                linkedin: "http://www.linkedin.com/pub/arvind-makwana/53/780/a08"
            },
            testimonials: [
                { name: "Hrithik Roshan", profession: "Actor", review: "Raj Plumbing knows what people need when it comes to getting a job done. The process is really smooth and the support is always great at Designing!" },
                { name: "Shah Rukh Khan", profession: "Actor", review: "I had an absolutely wonderful experience with Raj Plumbing! Within a week we had an amazing collabration that matched our vision. I highly recommend Raj Plumbing!" },
                { name: "John Abraham", profession: "Actor", review: "Great work, very flexible, excellent concept (beat out dozens of others) and nothing but compliments." },
                { name: "Akshay Kumar", profession: "Actor", review: "Great Job! I would definitely recommend Raj Plumbing! Great Service. Things done in a timely manner." },
                { name: "Shahid Kapoor", profession: "Actor", review: "A wonderful service with a positive outcome! I highly recommend it!" },
                { name: "Neil Nitin Mukesh", profession: "Actor", review: "Excellent service. Very pleased with the end result. I would highly recommend!" },
                { name: "Emraan Hashmi", profession: "Actor", review: "This is my third project with Raj Plumbing and another job well done. Really talented plumbing work!" },
                { name: "Jackie Shroff", profession: "Actor", review: "Raj Plumbing is a great company to work with. Easy to deal with and very good what they do. I highly recommend this compnay!" },
                { name: "Tiger Shroff", profession: "Actor", review: "The team at Raj Plumbing are very professional and always give clear advice and guidance in prompt and efficient manner!" },
                { name: "Hema Malini", profession: "Actress", review: "Awesome experience, amazing talent, incredible resource! Cudos to Raj Plumbing!" },
                { name: "Priyanka Chopra", profession: "Actress", review: "Awesome designers. Very professional. So much creativity. Very timely. Love the process!" }
            ],
            websiteSections: ["Home", "Celebrities", "Gallery", "Clients", "Publications", "Interview"],
            companyValues: ["Ideas", "Imagination", "Dedication"],
            publications: {
                magazines: [
                    { name: "50 BEAUTIFUL HOUSES IN INDIA", architect: "HEMANT VORA" },
                    { name: "HOME TRENDS", architect: "ZZ ARCHITECTS" },
                    { name: "THE DESIGN SOURCE", architect: "ZZ ARCHITECTS" },
                    { name: "IAG MAGAZINE", architect: "ZZ ARCHITECTS" },
                    { name: "BETTER INTERIORS", architect: "BEHZAD NOSHIR KHARAS" },
                    { name: "CW INTERIORS INDIA", architect: "BEHZAD NOSHIR KHARAS" },
                    { name: "SOCIETY INTERIORS", architect: "PARAG PANDYA" }
                ],
                interview: {
                    source: "civillane.com",
                    date: "May 15, 2017",
                    title: "Interview With Arvind Makwana",
                    url: "https://civillane.com/2017/05/15/interview-with-arvind-makwana-raj-plumbing-mumbai/"
                }
            },
            galleryCategories: ["All", "BATH TUB", "FOUNTAIN", "POWDER TOILET", "RAIN SHOWER", "SALON", "W.C.", "WASH BASIN", "HOSPITAL"],
            luxuryProducts: ["Italian marble", "Onyx", "Veneer", "Alabaster", "fully automatic WC", "Designer Wash Basin", "Rain shower", "Couple Shower", "Jacuzzi Bathtub"],
            plumbingMaterials: ["Kitec", "CPVC", "Viega PEX", "Viega Copper", "Viega SS"],
            luxuryBrands: ["Jaquar", "Hansgrohe", "Smanni", "Bocchi", "Ivii(Bali)", "Duravit", "Grohe", "Fantini", "Kohler", "Villeroy and Boch"],
            architects: [
                { name: "Arch. Parag Pandya", relationship: "12+ years working relationship" },
                { name: "Arch. Alan Abraham", relationship: "Collaborator for celebrity projects" },
                { name: "ZZ Architects", relationship: "Featured in multiple magazines" },
                { name: "Arch. Hemant Vora", relationship: "Featured in 50 Beautiful Houses in India" },
                { name: "The BNK Group", relationship: "Collaborator" },
                { name: "Arch. Deven Katira", relationship: "Collaborator" },
                { name: "Arch. Mihir Kotak", relationship: "Collaborator" }
            ],
            companyHistory: {
                founded: "1991",
                firstCelebrity: "Imran Hashmi",
                secondCelebrity: "Mukesh Bhatt",
                firstArchitect: "Arch. Parag Pandya"
            }
        };
        
        this.init();
    }
    
    init() {
        // Add event listeners with error handling
        try {
            this.sendButton.addEventListener('click', () => this.sendMessage());
            this.userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
            
            // Add click event listeners to question boxes
            const questionBoxes = this.quickQuestions.querySelectorAll('.question-box');
            questionBoxes.forEach(box => {
                box.addEventListener('click', () => {
                    const question = box.getAttribute('data-question');
                    if (question) {
                        this.handleQuickQuestion(question, box);
                    }
                });
            });
            
            // Initialize slider navigation
            this.initSlider();
            
            // Add focus to input on load
            this.userInput.focus();
            
        } catch (error) {
            console.error('Error initializing event listeners:', error);
        }
    }
    
    initSlider() {
        if (!this.prevBtn || !this.nextBtn) return;
        
        // Add navigation button event listeners
        this.prevBtn.addEventListener('click', () => this.scrollSlider('left'));
        this.nextBtn.addEventListener('click', () => this.scrollSlider('right'));
        
        // Update button visibility on scroll
        this.quickQuestions.addEventListener('scroll', () => this.updateSliderButtons());
        
        // Initial button update
        this.updateSliderButtons();
        
        // Add touch/swipe support for mobile
        this.addTouchSupport();
    }
    
    scrollSlider(direction) {
        const scrollAmount = 200; // pixels to scroll
        if (direction === 'left') {
            this.quickQuestions.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            this.quickQuestions.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
    
    updateSliderButtons() {
        const scrollLeft = this.quickQuestions.scrollLeft;
        const scrollWidth = this.quickQuestions.scrollWidth;
        const clientWidth = this.quickQuestions.clientWidth;
        
        // Hide prev button if at start
        if (scrollLeft <= 10) {
            this.prevBtn.classList.add('hidden');
        } else {
            this.prevBtn.classList.remove('hidden');
        }
        
        // Hide next button if at end
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
            this.nextBtn.classList.add('hidden');
        } else {
            this.nextBtn.classList.remove('hidden');
        }
    }
    
    addTouchSupport() {
        let startX = 0;
        let scrollLeft = 0;
        let isDown = false;
        
        this.quickQuestions.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - this.quickQuestions.offsetLeft;
            scrollLeft = this.quickQuestions.scrollLeft;
            this.quickQuestions.style.cursor = 'grabbing';
        });
        
        this.quickQuestions.addEventListener('mouseleave', () => {
            isDown = false;
            this.quickQuestions.style.cursor = 'grab';
        });
        
        this.quickQuestions.addEventListener('mouseup', () => {
            isDown = false;
            this.quickQuestions.style.cursor = 'grab';
        });
        
        this.quickQuestions.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - this.quickQuestions.offsetLeft;
            const walk = (x - startX) * 2;
            this.quickQuestions.scrollLeft = scrollLeft - walk;
        });
    }
    
    sendMessage() {
        const message = this.userInput.value.trim();
        if (!message) return;
        
        try {
            this.addMessage(message, 'user');
            this.userInput.value = '';
            
            // Show typing indicator
            this.showTypingIndicator();
            
            setTimeout(() => {
                this.hideTypingIndicator();
                const response = this.generateResponse(message);
                this.addMessage(response, 'bot');
            }, 1000);
        } catch (error) {
            console.error('Error sending message:', error);
            this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
        }
    }
    
    handleQuickQuestion(question, boxElement) {
        try {
            // Debug logging
            console.log('Quick question clicked:', question);
            
            // Add visual feedback
            boxElement.style.transform = 'scale(0.95)';
            setTimeout(() => {
                boxElement.style.transform = 'scale(1)';
            }, 150);
            
            // Add the question as a user message
            this.addMessage(question, 'user');
            
            // Show typing indicator
            this.showTypingIndicator();
            
            // Generate and show response
            setTimeout(() => {
                this.hideTypingIndicator();
                const response = this.generateResponse(question);
                console.log('Generated response:', response);
                this.addMessage(response, 'bot');
            }, 1500);
        } catch (error) {
            console.error('Error handling quick question:', error);
            this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
        }
    }
    
    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-message';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        this.chatMessages.appendChild(typingDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    hideTypingIndicator() {
        const typingMessage = this.chatMessages.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }
    
    addMessage(message, sender) {
        try {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}-message`;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-content';
            contentDiv.textContent = message;
            
            messageDiv.appendChild(contentDiv);
            this.chatMessages.appendChild(messageDiv);
            
            // Auto-scroll to bottom
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
            
            // Add timestamp (optional enhancement)
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            contentDiv.setAttribute('data-timestamp', timestamp);
            
        } catch (error) {
            console.error('Error adding message:', error);
        }
    }
    
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return `Hello! Welcome to ${this.companyInfo.name}. How can I assist you with your plumbing needs today?`;
        }
        
        if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
            return `${this.companyInfo.name} offers comprehensive & professional plumbing and sanitaryware services anywhere in India to a wide range of customers. We are also working with some of the renowned Architects & Interior designers matching up to their Standards of excellence.\n\nOur company is driven by ${this.companyInfo.companyValues.join(', ')} & dedication.`;
        }
        
        if (lowerMessage.includes('experience') || lowerMessage.includes('how long')) {
            return `${this.companyInfo.name} is a young company with ${this.companyInfo.experience} of experience in the field of plumbing and sanitarywares. We are a company driven by ideas, imagination & dedication.`;
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
            return `You can reach us at:\n📞 Phone: ${this.companyInfo.contact.phone}\n📧 Email: ${this.companyInfo.contact.email}\n📍 Address: ${this.companyInfo.contact.address}\n\nLinkedIn: ${this.companyInfo.contact.linkedin}`;
        }
        
        if (lowerMessage.includes('team') || lowerMessage.includes('workers') || lowerMessage.includes('staff')) {
            const supervisorList = this.companyInfo.supervisors.map(sup => `• ${sup.name} - ${sup.role}`).join('\n');
            return `${this.companyInfo.name} has a strength of ${this.companyInfo.team}.\n\nOur supervision team includes:\n${supervisorList}\n\nLed by our Team Leader and Proprietor, ${this.companyInfo.owner}.`;
        }
        
        if (lowerMessage.includes('owner') || lowerMessage.includes('proprietor') || lowerMessage.includes('who runs')) {
            return `${this.companyInfo.name} is led by ${this.companyInfo.owner}, who is the ${this.companyInfo.position} of the company. You can connect with him on LinkedIn: ${this.companyInfo.contact.linkedin}`;
        }
        
        if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('address')) {
            return `Our office is located at:\n${this.companyInfo.contact.address}\n\nWe provide comprehensive plumbing and sanitaryware services anywhere in India.`;
        }
        
        if (lowerMessage.includes('review') || lowerMessage.includes('testimonial') || lowerMessage.includes('feedback')) {
            const randomTestimonial = this.companyInfo.testimonials[Math.floor(Math.random() * this.companyInfo.testimonials.length)];
            return `Here's what our clients say:\n\n"${randomTestimonial.review}"\n- ${randomTestimonial.name}, ${randomTestimonial.profession}\n\nWe have excellent reviews from many satisfied clients including celebrities who have praised our professional service and timely work.`;
        }
        
        if (lowerMessage.includes('celebrity') || lowerMessage.includes('famous') || lowerMessage.includes('clients')) {
            const celebrityNames = this.companyInfo.testimonials.map(t => t.name).slice(0, 5).join(', ');
            return `${this.companyInfo.name} has worked with many high-profile clients including ${celebrityNames}, and many others. Our Celebrities section on the website features more details about our celebrity projects.`;
        }
        
        if (lowerMessage.includes('appointment') || lowerMessage.includes('book') || lowerMessage.includes('schedule')) {
            return `To book an appointment or schedule a service, please contact us directly:\n📞 Call: ${this.companyInfo.contact.phone}\n📧 Email: ${this.companyInfo.contact.email}\n\nOur team with ${this.companyInfo.experience} of experience will be happy to assist you with your plumbing needs!`;
        }
        
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
            return `For pricing information and quotes, please contact us directly at ${this.companyInfo.contact.phone} or ${this.companyInfo.contact.email}. Our team will provide you with a detailed quote based on your specific requirements and project scope.`;
        }
        
        if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) {
            return `For emergency plumbing services, please call us immediately at ${this.companyInfo.contact.phone}. We provide prompt and efficient service to address your urgent plumbing needs anywhere in India.`;
        }
        
        if (lowerMessage.includes('website') || lowerMessage.includes('navigation') || lowerMessage.includes('sections')) {
            const sections = this.companyInfo.websiteSections.join(', ');
            return `Our website features the following sections: ${sections}. Each section provides detailed information about our services, celebrity projects, client work, publications, and interviews.`;
        }
        
        if (lowerMessage.includes('architect') || lowerMessage.includes('designer') || lowerMessage.includes('interior')) {
            return `We work closely with renowned Architects & Interior designers, matching up to their standards of excellence. Our team provides comprehensive plumbing solutions that complement their design visions.\n\nKey architects we work with:\n${this.companyInfo.architects.slice(0, 3).map(arch => `• ${arch.name} - ${arch.relationship}`).join('\n')}`;
        }
        
        if (lowerMessage.includes('publication') || lowerMessage.includes('magazine') || lowerMessage.includes('featured')) {
            const magazineList = this.companyInfo.publications.magazines.map(mag => `• ${mag.name} - ${mag.architect}`).join('\n');
            return `${this.companyInfo.name} has been featured in prestigious magazines and publications:\n\n${magazineList}\n\nOur work has been appreciated in these popular magazines, showcasing our luxurious bathroom fitting expertise.`;
        }
        
        if (lowerMessage.includes('interview') || lowerMessage.includes('civillane') || lowerMessage.includes('arvind makwana interview')) {
            const interview = this.companyInfo.publications.interview;
            return `Read our detailed interview with ${this.companyInfo.owner} on ${interview.source}:\n\nTitle: ${interview.title}\nDate: ${interview.date}\nURL: ${interview.url}\n\nThe interview covers our journey since ${this.companyInfo.companyHistory.founded}, our work with Bollywood celebrities, and our vision for luxurious bathroom designs.`;
        }
        
        if (lowerMessage.includes('gallery') || lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
            const categories = this.companyInfo.galleryCategories.join(', ');
            return `Visit our Gallery section to see examples of our plumbing and sanitaryware work. We showcase projects in these categories: ${categories}.\n\nOur portfolio demonstrates our excellence in luxurious bathroom fitting and unique designs.`;
        }
        
        if (lowerMessage.includes('luxury') || lowerMessage.includes('lavish') || lowerMessage.includes('high-end')) {
            const products = this.companyInfo.luxuryProducts.slice(0, 5).join(', ');
            const brands = this.companyInfo.luxuryBrands.slice(0, 5).join(', ');
            return `Lavishness and luxury in bathrooms comes from premium materials and products:\n\nMaterials: ${this.companyInfo.luxuryProducts.slice(0, 4).join(', ')}\n\nProducts: ${products}\n\nTop luxury brands we work with: ${brands}`;
        }
        
        if (lowerMessage.includes('history') || lowerMessage.includes('founded') || lowerMessage.includes('started')) {
            return `${this.companyInfo.name} was founded in ${this.companyInfo.companyHistory.founded}. Our first Bollywood celebrity project was for ${this.companyInfo.companyHistory.firstCelebrity}, suggested by ${this.companyInfo.companyHistory.firstArchitect}. Since then, we've become known as luxurious bathroom fitting experts in Mumbai.\n\n📅 Founded: ${this.companyInfo.companyHistory.founded}\n🌟 First Celebrity: ${this.companyInfo.companyHistory.firstCelebrity}\n🏗️ First Architect: ${this.companyInfo.companyHistory.firstArchitect}`;
        }
        
        if (lowerMessage.includes('materials') || lowerMessage.includes('fittings') || lowerMessage.includes('pipes')) {
            const modern = this.companyInfo.plumbingMaterials.join(', ');
            return `We use modern plumbing materials for easy installation and no maintenance:\n\nCurrent materials: ${modern}\n\nWe've evolved from traditional GI pipe fitting (which was time-consuming and prone to rust) to these advanced materials that provide better performance and durability.`;
        }
        
        if (lowerMessage.includes('brands') || lowerMessage.includes('jaquar') || lowerMessage.includes('hansgrohe')) {
            const brands = this.companyInfo.luxuryBrands.join(', ');
            return `We work with top luxury bathroom fitting brands:\n\n${brands}\n\nThe industry has evolved significantly - 15 years ago, Jaquar was the main player with products priced around 1,000-4,000 rupees. Today, luxury products from these brands range from 3 lakhs to 7 lakhs.`;
        }
        
        if (lowerMessage.includes('future') || lowerMessage.includes('goal') || lowerMessage.includes('vision')) {
            return `Our future goal is to become the number one plumbing firm in the industry, maintain our top position in this competitive market, and achieve awards for our work. We aim to construct the most luxurious bathrooms in India and expand our work to other countries.`;
        }
        
        return `Thank you for your inquiry! ${this.companyInfo.name} offers comprehensive plumbing and sanitaryware services with ${this.companyInfo.experience} of experience. For more specific information, please contact us at ${this.companyInfo.contact.phone} or ${this.companyInfo.contact.email}. Our team of ${this.companyInfo.team} is ready to help you!`;
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Check if all required elements exist
        const requiredElements = ['chatMessages', 'userInput', 'sendButton', 'quickQuestions'];
        const allElementsExist = requiredElements.every(id => document.getElementById(id));
        
        if (allElementsExist) {
            new RajPlumbingChatbot();
            console.log('Raj Plumbing Chatbot initialized successfully');
        } else {
            console.error('Required elements not found. Chatbot cannot initialize.');
        }
    } catch (error) {
        console.error('Error initializing chatbot:', error);
    }
});


document.addEventListener("DOMContentLoaded", function () {

  const chatToggle = document.getElementById("chatbot-toggle");
  const chatBox = document.getElementById("chatbot-box");
  const chatClose = document.getElementById("chatbot-close");

  if (!chatToggle || !chatBox || !chatClose) {
    console.error("Chatbot elements missing");
    return;
  }

  chatToggle.addEventListener("click", () => {
    chatBox.style.display = "flex";
    chatToggle.style.display = "none";
  });

  chatClose.addEventListener("click", () => {
    chatBox.style.display = "none";
    chatToggle.style.display = "flex";
  });

});

