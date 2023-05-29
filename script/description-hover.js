window.addEventListener('DOMContentLoaded', (event) => {
    let traditionalFuels = document.querySelector(".traditional-fuels");
    let description1 = document.querySelector(".description-1");
    let rects1 = traditionalFuels.querySelectorAll("rect");
    let fossilFuels=document.querySelector(".fossil-fuels");
    let description2 = document.querySelector(".description-2");
    let rects2 = fossilFuels.querySelectorAll("rect");
    
    for (let i = 0; i < rects1.length; i++) {
        if (i == 0) {
            rects1[i].style.opacity = 0.2;  // 设定第一个rect的opacity为20%
        } else {
            rects1[i].style.opacity = 0.4;  // 设定其他rect的opacity为40%
        }
    }

    for (let i = 0; i < rects2.length; i++) {
        if (i == 0) {
            rects2[i].style.opacity = 0.2;  // 设定第一个rect的opacity为20%
        } else if (i == 1){
            rects2[i].style.opacity = 0.7; 
        } else {
            rects2[i].style.opacity = 0.4;  // 设定其他rect的opacity为40%
        }
    }

    traditionalFuels.addEventListener('mouseenter', function() {
        description1.style.opacity = 1;
        rects1.forEach(rect => {
            rect.style.opacity = parseFloat(rect.style.opacity || 0) + 0.2;
        });
    });

    traditionalFuels.addEventListener('mouseleave', function() {
        description1.style.opacity = 0;
        rects1.forEach(rect => {
            rect.style.opacity = parseFloat(rect.style.opacity || 0) - 0.2;
        });
    });

    fossilFuels.addEventListener('mouseenter', function() {
        description2.style.opacity = 1;
        rects2.forEach(rect => {
            rect.style.opacity = parseFloat(rect.style.opacity || 0) + 0.2;
        });
    });

    fossilFuels.addEventListener('mouseleave', function() {
        description2.style.opacity = 0;
        rects2.forEach(rect => {
            rect.style.opacity = parseFloat(rect.style.opacity || 0) - 0.2;
        });
    });    
});
