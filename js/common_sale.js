// Sample apartment data
const apartments = [
    {
        title: "Modern Downtown Loft",
        price: "$2,500/month",
        description: "Spacious 2-bedroom loft with city views",
        image: "/api/placeholder/400/300"
    },
    {
        title: "Riverside Suite",
        price: "$3,200/month",
        description: "Luxury 3-bedroom apartment with river views",
        image: "/api/placeholder/400/300"
    },
    {
        title: "Garden Apartment",
        price: "$1,800/month",
        description: "Cozy 1-bedroom with private garden",
        image: "/api/placeholder/400/300"
    }
];

// Populate apartments
function displayApartments() {
    const grid = document.getElementById('apartmentGrid');
    apartments.forEach(apt => {
        const card = document.createElement('div');
        card.className = 'apartment-card';
        card.innerHTML = `
            <img src="${apt.image}" alt="${apt.title}" class="apartment-image">
            <div class="apartment-info">
                <h3>${apt.title}</h3>
                <p>${apt.description}</p>
                <div class="price">${apt.price}</div>
                <button class="cta-button" onclick="contactAbout('${apt.title}')">
                    Inquire Now
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Scroll to apartments section
function scrollToApartments() {
    document.getElementById('apartments').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    alert(`Thank you for your message, ${name}! We will contact you at ${email} shortly.`);
    event.target.reset();
}

// Pre-fill contact form when inquiring about specific apartment
function contactAbout(apartmentTitle) {
    document.getElementById('message').value = `I'm interested in the ${apartmentTitle}. Please provide more information.`;
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth'
    });
}

// Initialize the page
displayApartments();