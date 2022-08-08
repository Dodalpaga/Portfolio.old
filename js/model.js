import * as THREE from "./three/three.module.js";
import { OrbitControls } from "./three/OrbitControls.js";
import { FlakesTexture } from "./three/FlakesTexture.js";
import { RGBELoader } from "./three/RGBELoader.js";

let scene, camera, renderer, controls, pointlight;

function init() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("model").appendChild(renderer.domElement);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  // Camera settings
  const fov = 60;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 500);

  // Model movements
  controls = new OrbitControls(camera, renderer.domElement);
  controls.maxDistance = controls.minDistance = 250;

  controls.enablePan = false; // Empêche le déplacement en translation du modèle (clic-droit)
  controls.enableRotate = true; // Permet la rotation du modèle (clic-gauche)
  controls.enableZoom = false; // Empêche le scrolling sur le canva !!!

  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  controls.enableDamping = true;

  // Lights
  pointlight = new THREE.PointLight(0xffffff, 0.1);
  pointlight.position.set(200, 200, 200);
  scene.add(pointlight);

  let envmaploader = new THREE.PMREMGenerator(renderer);

  new RGBELoader()
    .setPath("./resources/textures/")
    .load("neon_photostudio_4k.hdr", function (hdrmap) {
      let envmap = envmaploader.fromCubemap(hdrmap);
      let texture = new THREE.CanvasTexture(new FlakesTexture());
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.x = 10;
      texture.repeat.y = 6;

      const ballMaterial = {
        clearcoat: 1.0,
        cleacoatRoughness: 0.1,
        metalness: 0.9,
        roughness: 0.5,
        color: 0x3248a8,
        normalMap: texture,
        normalScale: new THREE.Vector2(0.15, 0.15),
        envMap: envmap.texture,
      };

      let ballGeo = new THREE.SphereGeometry(100, 64, 64);
      let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
      let ballMesh = new THREE.Mesh(ballGeo, ballMat);
      scene.add(ballMesh);

      animate();
    });
}

function animate() {
  controls.update();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();
