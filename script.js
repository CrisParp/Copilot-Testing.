// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Load car model
const loader = new THREE.GLTFLoader();
let car;
loader.load('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SportCar/glTF/SportCar.gltf', function (gltf) {
    car = gltf.scene;
    car.scale.set(2, 2, 2);
    car.position.set(-5, -1, 0);  // Starting position
    scene.add(car);
    
    // Hide loading text
    document.getElementById("loading").style.display = "none";
}, undefined, function (error) {
    console.error(error);
});

// Road
const roadGeometry = new THREE.PlaneGeometry(10, 100);
const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = -Math.PI / 2;
road.position.y = -1.1;
scene.add(road);

// Camera position
camera.position.set(0, 2, 10);
camera.lookAt(0, 0, 0);

// Animate the car driving from the right front corner
function animate() {
    requestAnimationFrame(animate);

    if (car) {
        car.position.x += 0.05;
        if (car.position.x > 5) {  // Reset position when off screen
            car.position.x = -5;
        }
    }
    
    renderer.render(scene, camera);
}
animate();

// Resize handler
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
