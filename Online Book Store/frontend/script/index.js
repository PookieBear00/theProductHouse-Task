document.addEventListener("DOMContentLoaded", () => {



    // Hero Slider Functionality
    const heroSliderImages = document.querySelectorAll('.hero-slider img');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;

    function showSlide(index) {
        heroSliderImages.forEach((img, i) => {
            img.classList.toggle('visible', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSliderImages.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); 

   
// best selling books part
const books = [
    {
        title: "Book Title 1",
        price: 13.99,
        image: "path/to/book1.jpg"
    },
    {
        title: "Book Title 2",
        price: 14.20,
        image: "path/to/book2.jpg"
        
    },
    {
        title: "Book Title 3",
        price: 14.20,
        image: "path/to/book2.jpg"
        
    },
    {
        title: "Book Title 4",
        price: 14.20,
        image: "path/to/book2.jpg"
        
    },
    {
        title: "Book Title 5",
        price: 14.20,
        image: "path/to/book2.jpg"
        
    },
    
    
    
];




function displayBooks() {
    const bookGrid = document.querySelector('.book-grid');
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <p>${book.title}</p>
            <p>$${book.price.toFixed(2)}</p>
            <button class="add-to-cart" data-title="${book.title}" data-price="${book.price}">Add to Cart</button>
        `;
        bookGrid.appendChild(bookItem);
    });
}

displayBooks();


// cart function
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(title, price, image) {
    cart.push({ title, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} has been added to the cart!`); // Alert instead of redirect
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const title = e.target.dataset.title;
        const price = parseFloat(e.target.dataset.price);
        const image = e.target.previousElementSibling.src;
        addToCart(title, price, image);
    }
});
});