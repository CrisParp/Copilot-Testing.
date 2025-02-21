// GSAP Animation
gsap.to("#car", {
    duration: 5,
    x: "120%", // Adjust to move the car across the screen
    ease: "power1.inOut",
    repeat: -1, // Repeat infinitely
    yoyo: true // Make the animation go back and forth
});
