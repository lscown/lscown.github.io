(() => {
  // create illo
  let illo = new Zdog.Illustration({
    element: ".zdog-canvas",
    zoom: 10,
  });

  // head
  let head = new Zdog.Hemisphere({
    addTo: illo,
    diameter: 10,
    stroke: false,
    color: "#dc4789",
    backface: "#AF386E",
    resize: "fill-parent-proportionally",
    rotate: { x: 70 },
  });

  // left eye
  let eye = new Zdog.Ellipse({
    addTo: head,
    diameter: 0.2,
    translate: { x: -2, y: 1.5, z: 4 },
    rotate: { z: -Zdog.TAU / 4 },
    color: "black",
    stroke: 0.5,
    fill: true,
    backface: false,
  });

  // right eye
  eye.copy({
    translate: { x: 2, y: 1.5, z: 4 },
  });

  // mouth
  let eymouthe = new Zdog.Shape({
    addTo: head,
    diameter: 0.5,
    translate: { x: 0, y: 3, z: 3 },
    path: [{ y: -2.5 }, { y: 2.5 }],
    rotate: { z: -Zdog.TAU / 4 },
    color: "black",
    stroke: 0.3,
    fill: true,
    backface: false,
  });

  function animate() {
    illo.rotate.y += 0.01;
    illo.updateRenderGraph();

    requestAnimationFrame(animate);
  }

  animate();
})();
