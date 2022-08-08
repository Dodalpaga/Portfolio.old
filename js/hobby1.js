import * as THREE from "./three/three.module.js";
import { OrbitControls } from "./three/OrbitControls.js";
import { RGBELoader } from "./three/RGBELoader.js";
import { GLTFLoader } from "./three/GLTFLoader.js";

let scene, camera, renderer, controls;

function hobby1() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(500, 500);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.physicallyCorrectLights = true;

  document.getElementById("hobby1").appendChild(renderer.domElement);

  // Camera settings
  const fov = 60;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 1.0;
  const far = 5000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(2000, 700, 0);

  // Model movements
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 500, 0);
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
    controls.autoRotateSpeed = 0.5;
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
    .load("crab.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      // scene.background = texture;
      scene.environment = texture;

      // Load model
      const loader = new GLTFLoader();
      loader.load("./resources/models/PRINTER/scene.gltf", function (gltf) {
        gltf.scene.children[0].scale.set(0.5, 0.5, 0.5);
        scene.add(gltf.scene);
        renderer.setSize(500, 500);
        camera.aspect = 500 / 500;
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
hobby1();
