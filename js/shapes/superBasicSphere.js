// Geometry allows you to create shapes
// Fundamentally, geometry is composed of trianges

// Spheres are a basic geometry built into three.js
// Arguments:
  // Radius
  // Vertical segments: longitudal slices of the sphere
  // Horizontal segments: horizontal slices of the sphere
var sphereGeometry = new THREE.SphereGeometry(5, 5, 20);
// Material to which to apply to the shape,
// analogous to the paint for the shape
var sphereMaterial = new THREE.MeshBasicMaterial({ wireframe: true });
// A mesh is the combination of the geometry and the
// material, the final object that you add to the scene
var superBasicSphere = function() {
  return new THREE.Mesh(sphereGeometry, sphereMaterial);
};
