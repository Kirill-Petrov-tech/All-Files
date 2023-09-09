// const btn = document.querySelector(".btn"),
//     elem = document.querySelector(".box");
// let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// function animate({timing, draw, duration}) {
//     let start = performance.now();

//     requestAnimationFrame(function animate(time) {
//         // console.log(time, start, duration);

//         // timeFraction изменяется от 0 до 1
//         let timeFraction = (time - start) / duration;
//         // console.log(timeFraction);
//         if (timeFraction > 1) timeFraction = 1;

//         // вычисление текущего состояния анимации
//         let progress = timing(timeFraction);

//         draw(progress); // отрисовать её

//         if (timeFraction < 1) {
//             requestAnimationFrame(animate);
//         }
//     });
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// };

// btn.addEventListener("click", () => {
//     const random = getRandomInt(11);

//     animate({
//         duration: 1000,
//         timing(timeFraction) {
//             return Math.pow(timeFraction, random);
//         },
//         draw(progress) {
//             elem.style.top = `${progress * 300}px`;
//             elem.style.left = `${progress * 300}px`;
//         }
//     });
// });

// const btnPhone = document.querySelector("#iphone"),
// btnMacbook = document.querySelector("#macbook"),
// images = document.querySelectorAll("img");

// let phoneAnimation;

// btnPhone.addEventListener("click", () => {
//     if(!phoneAnimation) {
//         phoneAnimation = images[0].animate([
//             {transform: "translateY(0)"},
//             {transform: "translateY(100px)"},
//             {transform: "translateY(-100px)"},
//             {transform: "translateY(0)"}
//         ], {
//             duration: 1000,
//             iteration: Infinity
//         });
//     } else if(phoneAnimation.playState === "paused" || phoneAnimation.playState === "finished") {
//         phoneAnimation.play();
//     } else {
//         phoneAnimation.pause();
//     }
// });





