// =============================================
// LEADWAY POWDERS — Hero slideshow + mobile menu + cart + newsletter
// =============================================

const slides = [
  {
    eyebrow: 'LEADWAY POWDERS catalogue',
    title: 'Discover quality',
    accent: 'food & beverage powders',
    description: 'Explore beverage, dessert and specialty powder products from the Allwin catalogue.',
    button: 'Explore Products',
  },
  {
    eyebrow: 'Browse the product range',
    title: 'Powders for',
    accent: 'beverages & desserts',
    description: 'Browse milk tea, fruit juice, ice cream, milkshake and specialty powder categories.',
    button: 'Browse Categories',
  },
  {
    eyebrow: 'Product details',
    title: 'Explore flavours',
    accent: 'and available options',
    description: 'Check product listings for the options, package information and availability provided.',
    button: 'View Products',
  },
]

import { initMobileNav } from './navigation.js';

// ---------- Mobile hamburger menu ----------
initMobileNav();

// ---------- Hero slideshow ----------
let currentSlide = 0
let slideTimer

function updateSlide(nextIndex) {
  const content = document.querySelector('.hero-content')
  content.classList.add('is-changing')

  setTimeout(() => {
    currentSlide = (nextIndex + slides.length) % slides.length
    const slide = slides[currentSlide]

    document.getElementById('heroEyebrow').textContent = slide.eyebrow
    document.getElementById('heroTitle').firstChild.textContent = slide.title
    document.getElementById('heroAccent').textContent = slide.accent
    document.getElementById('heroDescription').textContent = slide.description
    document.getElementById('heroButton').firstChild.textContent = slide.button
    document.getElementById('slideCurrent').textContent = '0' + (currentSlide + 1)

    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide)
    })

    content.classList.remove('is-changing')
  }, 350)
}

function restartTimer() {
  clearInterval(slideTimer)
  slideTimer = setInterval(() => updateSlide(currentSlide + 1), 6000)
}

document.getElementById('nextSlide').addEventListener('click', () => {
  updateSlide(currentSlide + 1)
  restartTimer()
})

document.getElementById('previousSlide').addEventListener('click', () => {
  updateSlide(currentSlide - 1)
  restartTimer()
})

document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateSlide(index)
    restartTimer()
  })
})

restartTimer()
