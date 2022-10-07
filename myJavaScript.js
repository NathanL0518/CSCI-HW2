window.addEventListener("load", function(){
    let sheperd = document.getElementById("sheperd");
    let keller1 = document.getElementById("keller1");
    let keller2 = document.getElementById("keller2");
    let apartment = document.getElementById("apartment");
    let bruiniks = document.getElementById("bruiniks");

    sheperd.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "resources/shepherd.jpg";
    })
    sheperd.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "resources/gopher.jpg";
    })

    keller1.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "resources/keller.jpg";
    })
    keller1.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "resources/gopher.jpg";
    })

    keller2.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "resources/keller.jpg";
    })
    keller2.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "resources/gopher.jpg";
    })

    apartment.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "resources/apartment.jpg";
    })
    apartment.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "resources/gopher.jpg";
    })

    bruiniks.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "resources/bruiniks.jpg";
    })
    bruiniks.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "resources/gopher.jpg";
    })
});