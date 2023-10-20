const item = document.querySelectorAll("[data-changeColor]");

const navBarChangeColor = () => {

    const windowTop = window.scrollY /* + window.innerHeight * 0.87 */;

    item.forEach((element) => {
        console.log(windowTop);
        if (windowTop >= 700) {
            
            console.log("altura do scroll: " + element.offsetTop);
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    })
};

navBarChangeColor();

window.addEventListener("scroll", () => {
    navBarChangeColor();
})