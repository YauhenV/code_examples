(function () {
    const burgerMenuButton = document.querySelector("#sidebar__burger-button");

    const toggleSidebar = () => {
        document.body.classList.toggle("open");
    }

    burgerMenuButton.addEventListener("click", toggleSidebar);
}())

(function() {
    const navButtons = document.querySelectorAll(".nav-button");
    
    let openSectionProps = "home"

    const hideSectionHandler = (event) => {
        let targetSection = document.querySelector(`.${openSectionProps}`);
        console.log(targetSection);
        targetSection.classList.toggle("none");

        openSectionProps = event.target.closest("button").dataset.name;
        //console.log(openSectionProps);
        targetSection = document.querySelector(`.${openSectionProps}`);
        console.log(targetSection);
        targetSection.classList.toggle("none");
        //console.log(targetSection);

        

    }

    navButtons.forEach(item => item.addEventListener("click", hideSectionHandler))
}())