import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Importa OrbitControls

function DinoScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Luz
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    // Carga del modelo GLTF
    const loader = new GLTFLoader();
    let dinoModel;
    loader.load('/dino.glb', (gltf) => {
      dinoModel = gltf.scene;
      dinoModel.scale.set(2, 2, 2);
      scene.add(dinoModel);
    });

    // Cámara
    camera.position.z = 5;

    // Añadir OrbitControls para rotar con el mouse
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Habilita amortiguamiento para que el movimiento sea más suave
    controls.dampingFactor = 0.25; // Ajusta la suavidad de la rotación
    controls.screenSpacePanning = false; // Deshabilita el desplazamiento en el plano de la pantalla
    controls.maxPolarAngle = Math.PI / 2; // Limita la inclinación vertical de la cámara

    // Animación y renderizado
    const animate = function () {
      requestAnimationFrame(animate);

      if (dinoModel) {
        // Animación continua si deseas, o puedes eliminarla si prefieres solo rotación manual
        // dinoModel.rotation.y += 0.01;
      }

      controls.update(); // Necesario para la actualización de controles de órbita
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup cuando el componente se desmonte
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '400px', height: '300px' }}
    />
  );
}

export default DinoScene;
