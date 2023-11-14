(function () {
    window.addEventListener("load", () => {
        const curPath = document.location.pathname
        const pageName = curPath.split('/').at(-1)

        for (const element of document.getElementsByClassName("menu-bar_item")) {
            if (element.getAttribute('href').endsWith(pageName)) {
                element.classList.add("menu-bar_active")
            }
        }
    })
})()