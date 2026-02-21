// Tampa Contractors Directory - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sample contractor data (will be replaced with JSON file)
    const sampleContractors = [
        {
            id: 1,
            name: "Tampa Bay Plumbing Co.",
            service: "Plumbing",
            phone: "(813) 555-0101",
            location: "Tampa",
            description: "Family-owned plumbing service since 2005. Emergency services available 24/7. Licensed and insured.",
            premium: true,
            verified: true,
            website: "",
            years: 19,
            email: "contact@tampabayplumbing.com"
        },
        {
            id: 2,
            name: "Clearwater Electric",
            service: "Electrical",
            phone: "(727) 555-0202",
            location: "Clearwater",
            description: "Licensed electricians for residential and commercial. Free estimates. Same-day service available.",
            premium: false,
            verified: true,
            website: "https://clearwatherelectric.com",
            years: 12,
            email: "info@clearwatherelectric.com"
        },
        {
            id: 3,
            name: "St. Pete HVAC Pros",
            service: "HVAC",
            phone: "(727) 555-0303",
            location: "St. Petersburg",
            description: "AC repair and installation specialists. 24/7 emergency service. Energy-efficient solutions.",
            premium: true,
            verified: true,
            website: "",
            years: 8,
            email: "service@stpetehvac.com"
        },
        {
            id: 4,
            name: "Brandon Roofing Experts",
            service: "Roofing",
            phone: "(813) 555-0404",
            location: "Brandon",
            description: "Roof repair and replacement specialists. Insurance claims assistance. Free inspections.",
            premium: false,
            verified: true,
            website: "https://brandonroofing.com",
            years: 15,
            email: "estimate@brandonroofing.com"
        },
        {
            id: 5,
            name: "Wesley Chapel Handyman",
            service: "Handyman",
            phone: "(813) 555-0505",
            location: "Wesley Chapel",
            description: "General repairs, painting, drywall, and more. No job too small. Satisfaction guaranteed.",
            premium: false,
            verified: true,
            website: "",
            years: 6,
            email: "handyman@wesleychapel.com"
        },
        {
            id: 6,
            name: "Tampa Landscaping Design",
            service: "Landscaping",
            phone: "(813) 555-0606",
            location: "Tampa",
            description: "Landscape design and maintenance. Commercial and residential. Sustainable practices.",
            premium: false,
            verified: true,
            website: "https://tampalandscaping.com",
            years: 10,
            email: "design@tampalandscaping.com"
        },
        {
            id: 7,
            name: "Riverview Flooring",
            service: "Flooring",
            phone: "(813) 555-0707",
            location: "Riverview",
            description: "Hardwood, tile, and carpet installation. Free estimates. Professional installation.",
            premium: true,
            verified: true,
            website: "",
            years: 7,
            email: "flooring@riverview.com"
        },
        {
            id: 8,
            name: "Lakeland Painting Pros",
            service: "Painting",
            phone: "(863) 555-0808",
            location: "Lakeland",
            description: "Interior and exterior painting. Free color consultation. Clean, professional work.",
            premium: false,
            verified: true,
            website: "https://lakelandpainting.com",
            years: 9,
            email: "paint@lakelandpros.com"
        },
        {
            id: 9,
            name: "Tampa General Contracting",
            service: "General Contracting",
            phone: "(813) 555-0909",
            location: "Tampa",
            description: "Full-service remodeling and construction. Licensed, bonded, and insured. Quality craftsmanship.",
            premium: false,
            verified: true,
            website: "https://tampagc.com",
            years: 20,
            email: "contracting@tampagc.com"
        },
        {
            id: 10,
            name: "St. Pete Carpentry",
            service: "Carpentry",
            phone: "(727) 555-1010",
            location: "St. Petersburg",
            description: "Custom cabinets, trim work, and furniture. Precision craftsmanship. Free design consultation.",
            premium: false,
            verified: true,
            website: "",
            years: 11,
            email: "carpentry@stpete.com"
        }
    ];

    // DOM Elements
    const contractorList = document.getElementById('contractor-list');
    const serviceFilter = document.getElementById('service-filter');
    const locationFilter = document.getElementById('location-filter');
    const premiumFilter = document.getElementById('premium-filter');

    // Initialize
    loadContractors(sampleContractors);
    setupFilters();

    // Load contractors from JSON file (future implementation)
    async function loadContractorsFromJSON() {
        try {
            const response = await fetch('contractors.json');
            if (!response.ok) {
                console.log('Using sample data - contractors.json not found');
                return sampleContractors;
            }
            const data = await response.json();
            return data.contractors || sampleContractors;
        } catch (error) {
            console.log('Using sample data - error loading JSON:', error);
            return sampleContractors;
        }
    }

    // Load and display contractors
    async function loadContractors(contractorsData) {
        // In future: contractorsData = await loadContractorsFromJSON();
        const contractors = contractorsData.filter(c => c.verified);
        
        if (contractors.length === 0) {
            contractorList.innerHTML = '<div class="loading">No contractors found. Be the first to list!</div>';
            return;
        }

        displayContractors(contractors);
    }

    // Display contractors in the list
    function displayContractors(contractors) {
        contractorList.innerHTML = '';
        
        contractors.forEach(contractor => {
            const card = createContractorCard(contractor);
            contractorList.appendChild(card);
        });
    }

    // Create contractor card element
    function createContractorCard(contractor) {
        const card = document.createElement('div');
        card.className = `contractor-card ${contractor.premium ? 'premium' : ''}`;
        
        const premiumBadge = contractor.premium 
            ? `<div class="premium-badge"><i class="fas fa-crown"></i> Premium</div>` 
            : '';
        
        const websiteButton = contractor.website 
            ? `<a href="${contractor.website}" target="_blank" class="action-btn website">
                 <i class="fas fa-globe"></i> Website
               </a>`
            : '';
        
        card.innerHTML = `
            <div class="contractor-header">
                <div class="contractor-name">${contractor.name}</div>
                ${premiumBadge}
            </div>
            <div class="contractor-meta">
                <div class="meta-item">
                    <i class="fas fa-tools"></i>
                    <span>${contractor.service}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${contractor.location}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${contractor.years} years</span>
                </div>
            </div>
            <div class="contractor-description">
                ${contractor.description}
            </div>
            <div class="contractor-actions">
                <a href="tel:${contractor.phone.replace(/\D/g, '')}" class="action-btn phone">
                    <i class="fas fa-phone"></i> ${contractor.phone}
                </a>
                ${websiteButton}
            </div>
        `;
        
        return card;
    }

    // Setup filter functionality
    function setupFilters() {
        // Apply filters when any filter changes
        [serviceFilter, locationFilter, premiumFilter].forEach(filter => {
            filter.addEventListener('change', applyFilters);
        });
    }

    // Apply all filters
    function applyFilters() {
        const serviceValue = serviceFilter.value;
        const locationValue = locationFilter.value;
        const premiumValue = premiumFilter.value;
        
        const filtered = sampleContractors.filter(contractor => {
            // Service filter
            if (serviceValue !== 'all' && contractor.service !== serviceValue) {
                return false;
            }
            
            // Location filter
            if (locationValue !== 'all' && contractor.location !== locationValue) {
                return false;
            }
            
            // Premium filter
            if (premiumValue === 'premium' && !contractor.premium) {
                return false;
            }
            if (premiumValue === 'standard' && contractor.premium) {
                return false;
            }
            
            // Verified filter (always applied)
            if (!contractor.verified) {
                return false;
            }
            
            return true;
        });
        
        displayContractors(filtered);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (future enhancement)
    function setupMobileMenu() {
        // Could add hamburger menu for mobile
    }

    // Initialize
    setupMobileMenu();
    
    // Log for debugging
    console.log('Tampa Contractors Directory loaded successfully');
    console.log(`${sampleContractors.length} sample contractors loaded`);
});