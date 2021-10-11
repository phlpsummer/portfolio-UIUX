window.addEventListener("load",()=>{
    const grid = new Isotope("main",{
        itemSelector:"article",
        columnWidth:"article",
        transitionDuration:"0.5s"
    });

    grid.arrange({
        filter:"*"
    });
});