document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");

    const scrollAmount = 150;

    let isPaused = false;

    const cloneItems = () => {
        const items = [...carousel.children];
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            carousel.appendChild(clone);
        });
    };

    const initScroll = () => {
        carousel.scrollLeft = carousel.scrollWidth / 2;
    };

    if (carousel && leftBtn && rightBtn) {
        cloneItems();
        initScroll();

        leftBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        rightBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        carousel.addEventListener("scroll", () => {
            if (carousel.scrollLeft <= 0) {
                carousel.scrollLeft = carousel.scrollWidth / 2;
            } else if (
                carousel.scrollLeft >=
                carousel.scrollWidth - carousel.clientWidth
            ) {
                carousel.scrollLeft =
                    carousel.scrollWidth / 2 - carousel.clientWidth;
            }
        });
    }


    function autoScroll() {
        if (!isPaused) {
            carousel.scrollLeft += 0.5;
        }
        requestAnimationFrame(autoScroll);
    }

    requestAnimationFrame(autoScroll);

    carousel.addEventListener("mouseenter", () => isPaused = true);
    carousel.addEventListener("mouseleave", () => isPaused = false);
});
