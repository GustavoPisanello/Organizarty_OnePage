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


let cont = document.querySelector('#Events');
let layer = document.querySelectorAll('.txtEvents');

function AnimacaoTela1(){
    cont.onscroll = function(){
        let X = cont.scrollTop;
        console.log("scroll lado: " + cont.scrollTop);
        layer[0].style.left = X/4 + 'px';
        layer[1].style.left = X/ + 'px';
        layer[2].style.left = X/ + 'px';
        layer[3].style.left = X/ + 'px';
        layer[4].style.left = X/ + 'px';
}
}

AnimacaoTela1();


