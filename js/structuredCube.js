import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement)

const geometry_cube = new THREE.BoxGeometry( 2, 2, 2 );
const material_cube = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry_cube, material_cube );
scene.add( cube );

let geometry_cylinder = new THREE.CylinderGeometry( 0.1, 0.1, 2 );
const material_cylinder = new THREE.MeshBasicMaterial( {color: 0xff00ff} );

const cylinder1 = new THREE.Mesh( geometry_cylinder, material_cylinder );

let cylinder2 = cylinder1.clone();
let cylinder3 = cylinder1.clone();
let cylinder4 = cylinder1.clone();

let cylinder5 = cylinder1.clone();
cylinder5.rotation.z += Math.PI / 2;
let cylinder6 = cylinder5.clone();
let cylinder7 = cylinder5.clone();
let cylinder8 = cylinder5.clone();

let cylinder9 = cylinder1.clone();
cylinder9.rotation.x += Math.PI / 2;
let cylinder10 = cylinder9.clone();
let cylinder11 = cylinder9.clone();
let cylinder12 = cylinder9.clone();

cylinder1.position.x -= 1;
cylinder1.position.z -= 1;

cylinder2.position.x += 1;
cylinder2.position.z -= 1;

cylinder3.position.x -= 1;
cylinder3.position.z += 1;

cylinder4.position.x += 1;
cylinder4.position.z += 1;

cylinder5.position.z += 1
cylinder5.position.y += 1

cylinder6.position.z += 1
cylinder6.position.y -= 1

cylinder7.position.z -= 1
cylinder7.position.y += 1

cylinder8.position.z -= 1
cylinder8.position.y -= 1

cylinder9.position.x -= 1
cylinder9.position.y -= 1

cylinder10.position.x -= 1
cylinder10.position.y += 1

cylinder11.position.x += 1
cylinder11.position.y += 1

cylinder12.position.x += 1
cylinder12.position.y -= 1

cube.add( cylinder1 );
cube.add( cylinder2 );
cube.add( cylinder3 );
cube.add( cylinder4 );
cube.add( cylinder5 );
cube.add( cylinder6 );
cube.add( cylinder7 );
cube.add( cylinder8 );
cube.add( cylinder9 );
cube.add( cylinder10 );
cube.add( cylinder11 );
cube.add( cylinder12 );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render( scene, camera);
};

animate();