// components/tech-orbit/planet.ts
import * as THREE from "three";

export function createPlanet(scene: THREE.Scene) {
  const geometry = new THREE.SphereGeometry(2.5, 64, 64);

  const material = new THREE.MeshStandardMaterial({
    color: 0x8b5cf6,
    emissive: 0x6d28d9,
    emissiveIntensity: 0.4,
    roughness: 0.3,
    metalness: 0.6,
  });

  const planet = new THREE.Mesh(geometry, material);
  scene.add(planet);

  return planet;
}
