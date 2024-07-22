// import * as THREE from 'three'
// import {PLYLoader} from 'three/examples/jsm/loaders/PLYLoader.js'
// import  OrbitControls  from 'D:/working/threeStudy/node_modules/three/examples/jsm/controls/OrbitControls.js'
import * as THREE from './three.module.js';
// import { PLYLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/PLYLoader.js';
import { PLYLoader } from './PLYLoader.js';
const w = window.innerWidth
const h = window.innerHeight

const scene = new THREE.Scene()
const color = new THREE.Color('rgb(102,110,65)');


// const geometry = new THREE.IcosahedronGeometry();
// // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
// const material = new THREE.MeshLambertMaterial({
//     emissive: color
// })

// const cube = new THREE.Mesh(geometry, material);
// cube.position.set(0, 0, -2)  // 物体初始位置,
// // cube.rotation.x=45/180*Math.PI  //绕X轴进行旋转
// // cube.scale.x =0.5//将X轴进行缩放
// // cube.scale.set(2,2,2)//也可以直接设置三个方向的缩放比例

// scene.add(cube)

const ambient = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 0.15);
scene.add(ambient);

const loader = new THREE.TextureLoader().setPath('./public/image/');
// const filenames = ['shbf.jpg'];
const textures = { none: null };

// for (let i = 0; i < filenames.length; i++) {
//     const filename = filenames[i];
const texture = loader.load('back2.png');
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.colorSpace = THREE.SRGBColorSpace;
textures['back2.png'] = texture;
// }

var spotLight = new THREE.SpotLight(0xffffff, 100);
spotLight.position.set(2.5, 5, 2.5);
spotLight.angle = Math.PI / 8;
spotLight.penumbra = 1;
spotLight.decay = 2;
spotLight.distance = 0;
spotLight.map = textures['back2.png'];
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 200;
spotLight.shadow.mapSize.height = 200;
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 10;
spotLight.shadow.focus = 1;
scene.add(spotLight);
const dirLight1 = new THREE.DirectionalLight('rgb(253,253,253)', 0.2);
scene.add(dirLight1);

// const lightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(lightHelper);

const geometry1 = new THREE.PlaneGeometry(500, 800);
const material1 = new THREE.MeshLambertMaterial({ color: 0x8d8d8d });
const mesh = new THREE.Mesh(geometry1, material1);
mesh.position.set(1, -2, 0);
mesh.rotation.x = - Math.PI / 2;
mesh.receiveShadow = true;
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 1000)//看到的角度范围、照片宽高比、可以看到0.1-100范围内的物体
//刚开始相机和物体都在0,0点 会重合所以看不到物体
camera.position.set(7, 4, 1);
camera.lookAt(0, 0, 0)



const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
})//渲染器
renderer.setSize(w, h)
renderer.setClearColor(255, 0, 0);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

function animate() {

    const time = performance.now() / 3000;

    spotLight.position.x = Math.cos(time) * 2.5;
    spotLight.position.z = Math.sin(time) * 2.5;

    // lightHelper.update();

    renderer.render(scene, camera);

}

new PLYLoader().load('./public/image/女娲石像.ply', function (geometry) {

    geometry.scale(0.03, 0.03, 0.03);
    geometry.computeVertexNormals();

    const material = new THREE.MeshLambertMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = Math.PI / 4;
    mesh.position.y = 0;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

});
// animate()
renderer.render(scene, camera);
document.getElementById('app').append(renderer.domElement)  //renderer是一个canves元素

