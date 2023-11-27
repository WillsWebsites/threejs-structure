import * as THREE from 'three'
import Experience from '../Experience'
import Environment from './Environment'

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial())
    this.scene.add(this.mesh)

    this.resources.on('ready', () => {
      this.environment = new Environment()
    })
  }
}
