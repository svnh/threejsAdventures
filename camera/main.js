// An THREE.js object that tracks time
var clock = new THREE.Clock();

// The base of the threejs application a
// tree to which objects are added
var scene = new THREE.Scene();

// There are two different types of cameras,
// we're using a `PerspectiveCamera`, which
// creates a pyramid shaped view of the scene
// Resource: http://www.script-tutorials.com/webgl-with-three-js-lesson-9/
// Takes four arguments
  // Field of view: zoom (lower = more zoomed in, higher = less)
  // Aspect ratio: ratio of the screen width and height, for example:
    // Width and height equal to that of the screen
    var aspectRatio = window.innerWidth / window.innerHeight;
    // Width half of screen and height equal to that of the screen
    // var aspectRatio = (window.innerWidth * .5) / window.innerHeight;
    // Width equal to that of the screen and height half of screen
    // var aspectRatio = window.innerWidth / (window.innerHeight * .5);
  // Near clipping plane: start of what you can see in the z direction
  // Far clipping plane: end of what you can see in the z direction
var camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000);
// Move camera z back so you can see objects rendered at 0,0,0
var cameraZPosition = camera.position.z + 15;
camera.position.z = cameraZPosition;

// Threejs object that renders everything
// onto the screen based on the scene and
// camera information/settings
var renderer = new THREE.WebGLRenderer(scene, camera);
// Sets the size of the canvas element to
// the size of the screen
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// From `js/shapes/superBasicSphere.js`
var sphere;
for(var i = 0; i < 5; i++) {
  sphere = superBasicSphere();
  sphere.position.x = THREE.Math.randFloat(-5, 5);
  sphere.position.z = -i * 5;
  scene.add(sphere);
}

// From `js/shapes/superBasicPlane.js`
var plane = superBasicPlane();
scene.add(plane);


function update() {
  // Multiply by .5 To move more slowly along our sin wave
  // The range of Math.sin is between 0-1, we * 40 change it to 0-40
  // We're choosing a FOV range between 30-70, so we add 30 because
  // this moves the lower FOV limit to 30 (and the upper is 70
  // because we added 40 earlier)
  // fieldOfView.update((Math.sin(clock.getElapsedTime() * .5) * 40) + 30);

  // Generally, the following line moves the plane
  // in and our across the z acess in a function of time
    // * -5: Make the range of Math.sin 5X larger than it usually is (0-1)
    // - 10: Always move z pos 10 units more forward to show limits
    // in clipping of sphere z position
  plane.position.z = (Math.sin(clock.getElapsedTime()) * -5) - 10;
  // Sets our far clipping plane to plane's z position + 1 (so that
  // the plane is still in our field of view (viewing frustrum), if
  // we didn't add +1, the plane would be clipped out)
  camera.far = (plane.position.z) * -1 + cameraZPosition + 1;
  // THREE.js method that must be called to update camera properties
  camera.updateProjectionMatrix();

  // Re-render entire scene every frame
  renderer.render(scene, camera);
  requestAnimationFrame(update);
};
update();
