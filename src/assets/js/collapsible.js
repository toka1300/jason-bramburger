const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
const socialIcons = document.querySelectorAll('.cs-social-link');

for (const item of faqItems) {
        const onClick = () => {
        item.classList.toggle('active')
    }
    item.addEventListener('click', onClick)
}

socialIcons.forEach(icon => {
    icon.addEventListener('click', event => {
        event.stopPropagation();
    })
})