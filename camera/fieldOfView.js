var fieldOfView = {
  update: function(newFOV) {
    camera.fov = newFOV;
    camera.updateProjectionMatrix();
  }
};
