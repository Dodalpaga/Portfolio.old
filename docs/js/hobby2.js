import * as THREE from "./three/three.module.js";
import { OrbitControls } from "./three/OrbitControls.js";
import { RGBELoader } from "./three/RGBELoader.js";
import { GLTFLoader } from "./three/GLTFLoader.js";

let scene, camera, renderer, controls;

function hobby2() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(500, 500);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.physicallyCorrectLights = true;

  document.getElementById("hobby2").appendChild(renderer.domElement);

  // Camera settings
  const fov = 20;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.5;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 2, 7);
  camera.lookAt(0, 0, 0);

  // Model movements
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.3, 0);
  let debug = false;
  if (debug) {
    controls.enablePan = true; // Empêche le déplacement en translation du modèle (clic-droit)
    controls.enableRotate = true; // Permet la rotation du modèle (clic-gauche)
    controls.enableZoom = true; // Empêche le scrolling sur le canva !!!
    controls.autoRotate = false;
    controls.enableDamping = true;
  } else {
    controls.enablePan = false; // Empêche le déplacement en translation du modèle (clic-droit)
    controls.enableRotate = false; // Permet la rotation du modèle (clic-gauche)
    controls.enableZoom = false; // Empêche le scrolling sur le canva !!!
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.3;
    controls.enableDamping = true;
  }

  gsap.to(camera.position, {
    duration: 3,
    x: -4,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  new RGBELoader()
    .setPath("resources/textures/")
    .load("cayley_interior_4k.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      // scene.background = texture;
      scene.environment = texture;

      // Load model
      let loader = new GLTFLoader();
      loader.load("./resources/models/LAPTOP/scene.gltf", function (gltf) {
        let model = gltf.scene;
        model.rotation.y = (-100 * Math.PI) / 180;
        model.children[0].scale.set(0.5, 0.5, 0.5);
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
hobby2();
