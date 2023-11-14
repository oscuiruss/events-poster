(() => {
    window.addEventListener("load", () => {
        const time = performance.measure("time-measure").duration;
        let timeMeasure = document.getElementsByClassName('time-measure')[0];
        if (timeMeasure) {
            timeMeasure.textContent = "load time in ms: " + Number(time).toFixed(3);
        }
    });
})();


