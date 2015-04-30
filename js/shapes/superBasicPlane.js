// Plane geometry: http://threejs.org/docs/#Reference/Extras.Geometries/PlaneGeometry
// Arguments:
  // width: width along the X axis*
  // height: height along the Y axis*
  // * Keep in mind that the width and height is relative to the screen space
var planeGeometry = new THREE.PlaneGeometry(5, 5);

// Create a transparent plane with opacity (spectrum between 0 and 1)
var planeMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: .5 });

// Create a new plane via a three.js Mesh with our geo and mat
// Planes are a flat surfaces
var superBasicPlane = function() {
  return new THREE.Mesh(planeGeometry, planeMaterial);
};
