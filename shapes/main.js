/*
  Basic Three.js main setup: scene, camera, renderer, with the update loop
  The OrbitControls allow you to mouse around the scene -- try dragging or using arrow keys
*/

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// Move the camera out so it is not in the center of the sphere
camera.position.z = 45;

var controls = new THREE.OrbitControls(camera);

var renderer = new THREE.WebGLRenderer(scene, camera);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var basicSphere = new Sphere();
scene.add(basicSphere.mesh);

function update() {
  basicSphere.update();
  renderer.render(scene, camera);
  requestAnimationFrame(update);
  controls.update();
};
update();
