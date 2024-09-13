function toggleMenu () {
    document.getElementById('menu').classList.toggle('active');
}

const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});
