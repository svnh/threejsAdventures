/*
  Mesh: a 3D object in the Three.js world (there are others, this is the most common/basic)

  A basic mesh has two properties: geometry and material
    Geometry:
      Three.js has several built-in types of geometry (sphere, cube, plane, text, octahedron, etc)
        That being said, Three.js abstracts a TON of math in it's geometry
      All geometry in Three.js is made up of triangles
        Let's play with those -- see the sphere's update function 
    Materials:

*/

// Spheres take three arguments:
  // radius
  var radius = 5;
  // var radius = 20;
  // var radius = 100;
  // Vertical (longitude) segments
  // var vertical = 5;
  var vertical = 20;
  // var vertical = 100;
  // Horizontal (latitude) segments
  var horizontal = 5;
  // var horizontal = 20;
  // var horizontal = 100;
var sphereGeometry = new THREE.SphereGeometry(radius, vertical, horizontal);

// There are several different types of THREE.js material, which we'll dive into later
var sphereMaterial = new THREE.MeshNormalMaterial({ wireframe: true });

var Sphere = function() {
  this.mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

  this.update = function() {
    // Each mesh contains an array list of all of it's vertices
    // We can manipulate the properties of individual verticles, for example:
    this.mesh.geometry.vertices[1].x += 1;
    // The `verticesNeedUpdate` property exists for optimization -- we're sending data to the GPU here
    // Updating properties by doing so is a heavy operation, so we set this property ensure our intention
    // In general in graphics - the less data you send from the CPU to the GPU the better
    // We're calling this operation in `setAnimationFrame`, which is called 60 times/second -- that's a lot of data!
    this.mesh.geometry.verticesNeedUpdate = true;
  };
};
