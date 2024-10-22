import * as THREE from "./three/three.module.js";
import { OrbitControls } from "./three/OrbitControls.js";
import { RGBELoader } from "./three/RGBELoader.js";
import { GLTFLoader } from "./three/GLTFLoader.js";

let scene, camera, renderer, controls;

function hobby3() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(500, 500);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.physicallyCorrectLights = true;

  document.getElementById("hobby3").appendChild(renderer.domElement);

  // Camera settings
  const fov = 25;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0.75, -0.75);
  camera.up.set(0, 0, 1);

  // Model movements
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, -0.05);
  let debug = false;
  if (debug) {
    controls.enablePan = true; // Empêche le déplacement en translation du modèle (clic-droit)
    controls.enableRotate = true; // Permet la rotation du modèle (clic-gauche)
    controls.enableZoom = true; // Empêche le scrolling sur le canva !!!
    controls.autoRotate = false;
    controls.enableDamping = true;
  } else {
    controls.enablePan = false; // Empêche le déplacement en translation du modèle (clic-droit)
    controls.enableRotate = true; // Permet la rotation du modèle (clic-gauche)
    controls.enableZoom = false; // Empêche le scrolling sur le canva !!!
    controls.autoRotate = true;
    controls.autoRotateSpeed = -3;
    controls.enableDamping = true;
  }

  // Lights
  let light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 100, 0);
  light.target.position.set(0, 0, 0);
  scene.add(light);

  let light2 = new THREE.DirectionalLight(0xffffff, 0.1);
  light2.position.set(0, 0, 100);
  light2.target.position.set(0, 0, 0);
  scene.add(light2);

  let light3 = new THREE.DirectionalLight(0xffffff, 0.25);
  light3.position.set(0, 0, -100);
  light3.target.position.set(0, 0, 0);
  scene.add(light3);

  let light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(0, -100, 0);
  light4.target.position.set(0, 0, 0);
  scene.add(light4);

  let ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  new RGBELoader()
    .setPath("resources/textures/")
    .load("neon_photostudio_4k.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      // scene.background = texture;
      scene.environment = texture;

      // Load model
      let loader = new GLTFLoader();
      loader.load("./resources/models/RPI/scene.gltf", function (gltf) {
        let model = gltf.scene;
        model.children[0].scale.set(5, 5, 5);
        scene.add(model);
        animate();
      });
    });
}

function animate() {
  controls.update();
  camera.aspect = 500 / 500;
  camera.updateProjectionMatrix();
  renderer.setSize(500, 500);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
hobby3();
