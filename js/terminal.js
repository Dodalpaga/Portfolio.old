import * as THREE from "./three/three.module.js";
import { OrbitControls } from "./three/OrbitControls.js";
import { GLTFLoader } from "./three/GLTFLoader.js";

function init_terminal(id, model_gltf) {
  /* 
  INIT
  */
  let scene, camera, renderer, pointlight;
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById(id).appendChild(renderer.domElement);

  /* 
  Creating a camera setup with :
    - FOV = 30
    - min_dist = 0.1
    - max_dist = 5000
    - rotation_axis = Z
    - position = rotate 90° arround Y
  */
  camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    0.1,
    5000
  );
  camera.up.set(0, 0, 1);
  camera.position.set(0, 90, 0);

  /* 
  Generating controls
  */
  var controls = new OrbitControls(camera, renderer.domElement);
  controls.maxDistance = controls.minDistance = 55;
  controls.enablePan = false; // Empêche le déplacement en translation du terminal (clic-droit)
  controls.enableRotate = true; // Permet la rotation du terminal (clic-gauche)
  controls.enableZoom = false; // Empêche le scrolling sur le canva !!!

  controls.autoRotate = true; // Permet la rotation par lui-même
  controls.autoRotateSpeed = 5; // Paramètre de vitesse de rotation par défaut

  controls.minPolarAngle = Math.PI / 2; // Bloquage de DDL
  controls.maxPolarAngle = Math.PI / 2; // Bloquage de DDL

  controls.enableDamping = true; // Arrêt / Inrtie "smooth"
  controls.dampingFactor = 0.12; // Paramètre d'inertie

  /* 
  Setting up lights
  */
  pointlight = new THREE.PointLight(0xfffece, 2);
  pointlight.position.set(100, 100, 100);
  scene.add(pointlight);

  pointlight = new THREE.PointLight(0xfffece, 4.5);
  pointlight.position.set(-100, -100, -100);
  scene.add(pointlight);

  let model;
  let loader = new GLTFLoader();

  function animate() {
    requestAnimationFrame(animate);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 1, window.innerHeight * 1);
    controls.update();
    renderer.render(scene, camera);
  }

  loader.load(model_gltf, function (gltf) {
    model = gltf.scene.children[0];
    model.scale.set(1, 1, 1);
    scene.add(gltf.scene);
    animate();
  });
}

init_terminal("terminal", "./model/Terminal-2.gltf");
