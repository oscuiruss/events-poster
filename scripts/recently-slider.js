(() => {
    window.addEventListener("load", () => {
        new Glide('.glide', {
            perView:5,
            gap: 5
        }).mount()
    })
})();