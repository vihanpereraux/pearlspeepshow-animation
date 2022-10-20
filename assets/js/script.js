var pos = document.documentElement;
pos.addEventListener("mousemove", e=>{
    pos.style.setProperty('--x', e.clientX + "px");
    pos.style.setProperty('--y', e.clientY + "px");
})


document.fonts.ready.then(() => {
    var innerText = document.getElementById("coming-soon-text");

    // getting screen widths in media query pov
    const mediaQueryOne = window.matchMedia('(min-width: 1024px)');

    // laptop screens
    if(mediaQueryOne.matches){
        // alert('works 1' + " - " + screen.width);
        var text = new Blotter.Text("FORREST GUMP", {
            family: "roc grotesk wide",
            size: 60,
            fill: "white",
            paddingLeft: 100,
            paddingRight: 100
        });
    }

    let material = new Blotter.RollingDistortMaterial();
    let material2 = new Blotter.LiquidDistortMaterial();

    material.uniforms.uSineDistortSpread.value = 0.000;
    material.uniforms.uSineDistortCycleCount.value = 5;
    material.uniforms.uSineDistortAmplitude.value = 0.03;
    material.uniforms.uNoiseDistortVolatility.value = 15;
    material.uniforms.uNoiseDistortAmplitude.value = 0.004;
    material.uniforms.uRotation.value = 200;
    material.uniforms.uSpeed.value = 0.18;
    
    material2.uniforms.uSpeed.value = 0.5;
    material2.uniforms.uVolatility.value = 0.02;
    material2.uniforms.uSeed.value = 0.1;

    let blotter = new Blotter(material2, {
        texts: text
    });

    let scope = blotter.forText(text);
    scope.appendTo(innerText); 
});
