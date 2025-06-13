document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    const fileUrl = 'docs/your_resume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Jonah_Wells_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
        alert('Resume download started!');
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-container img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.toggle-icon');
        
        if(content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            icon.textContent = '-';
        } else {
            content.style.display = 'none';
            icon.textContent = '+';
        }
    });
});
