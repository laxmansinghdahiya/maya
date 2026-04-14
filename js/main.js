// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// ===== Mobile Navigation =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu on link click
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle?.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Back to Top =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        backToTop?.classList.add('visible');
    } else {
        backToTop?.classList.remove('visible');
    }
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Fade In Animation =====
const fadeElements = document.querySelectorAll('.post-card, .featured-card, .team-card, .value-card, .contact-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Newsletter Subscribe =====
function handleSubscribe(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('input[type="email"]');
    
    if (input.value) {
        let msg = form.querySelector('.success-message');
        if (!msg) {
            msg = document.createElement('div');
            msg.className = 'success-message';
            msg.textContent = 'सब्सक्रिप्शन सफल! धन्यवाद 🎉';
            form.appendChild(msg);
        }
        msg.classList.add('show');
        input.value = '';
        
        setTimeout(() => {
            msg.classList.remove('show');
        }, 3000);
    }
}

// ===== Contact Form =====
function handleContact(event) {
    event.preventDefault();
    const form = event.target;
    
    let msg = form.querySelector('.success-message');
    if (!msg) {
        msg = document.createElement('div');
        msg.className = 'success-message';
        msg.textContent = 'आपका संदेश भेज दिया गया है! हम जल्द ही आपसे संपर्क करेंगे।';
        form.appendChild(msg);
    }
    msg.classList.add('show');
    form.reset();
    
    setTimeout(() => {
        msg.classList.remove('show');
    }, 4000);
}

// ===== Category Filter =====
function filterPosts(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const posts = document.querySelectorAll('.post-card');
    posts.forEach(post => {
        if (category === 'all') {
            post.style.display = 'block';
        } else {
            const postCategory = post.getAttribute('data-category');
            post.style.display = postCategory === category ? 'block' : 'none';
        }
    });
}

// ===== Active Nav Link =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
