import * as THREE from 'three'
// console.log(THREE)
const w=window.innerWidth
const h=window.innerHeight
console.log(w,h)

//场景  物体 光源 相机 渲染器
const scene = new THREE.Scene()
const color = new THREE.Color("rgb(192,55,26)");//红
const color2 = new THREE.Color("rgb(102,110,65)");//绿
const color3 = new THREE.Color("rgb(116,142,138)");
const color4 = new THREE.Color("rgb(191,144,51)");
const color5 = new THREE.Color("rgb(53, 48, 47)");


const geometry = new THREE.IcosahedronGeometry(); 
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const material = new THREE.MeshLambertMaterial({
  emissive:color
})
const geometry2 = new THREE.IcosahedronGeometry()
const material2 = new THREE.MeshLambertMaterial({
  emissive:color2
});
const geometry3 = new THREE.IcosahedronGeometry(); 
const material3 = new THREE.MeshLambertMaterial({
  emissive:color3
});
const geometry4 = new THREE.IcosahedronGeometry(); 
const material4 = new THREE.MeshLambertMaterial({
  emissive:color4
});
const geometry5 = new THREE.IcosahedronGeometry(); 
const material5 = new THREE.MeshLambertMaterial({
  emissive:color5
});
const cube = new THREE.Mesh( geometry, material ); 
cube.position.set(0, 0, -2)  // 物体初始位置,
// cube.rotation.x=45/180*Math.PI  //绕X轴进行旋转
// cube.scale.x =0.5//将X轴进行缩放
// cube.scale.set(2,2,2)//也可以直接设置三个方向的缩放比例

const cube2 = new THREE.Mesh( geometry2, material2 ); 
cube2.position.set(0, 0, -4)  // 物体初始位置,
const cube3 = new THREE.Mesh( geometry3, material3 ); 
cube3.position.set(0, 0, -6)  // 物体初始位置,
const cube4 = new THREE.Mesh( geometry4, material4 ); 
cube4.position.set(0, 0,-8)  // 物体初始位置,
const cube5 = new THREE.Mesh( geometry5, material5 ); 
cube5.position.set(0, 0, -10)  // 物体初始位置,

scene.add(cube)

//axes
// const axesHelper = new THREE.AxesHelper(2,2,2)
// scene.add(axesHelper)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); //平行光
directionalLight.position.set(1, 1, 1).normalize(); // 设置光源的方向
scene.add( directionalLight)

const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000)//看到的角度范围、照片宽高比、可以看到0.1-100范围内的物体
//刚开始相机和物体都在0,0点 会重合所以看不到物体
camera.position.set (0,0,5)
camera.lookAt(0,0,0)



const renderer = new THREE.WebGLRenderer()//渲染器
renderer.setSize(w, h)

renderer.setClearColor('rgb(204,198,152)');

// function animate() {
// 	requestAnimationFrame( animate ); //尽可能根据屏幕刷新率执行一次  但是如果刷新率不同  物体运动的速度也会有所差异  所以需要解决不同刷新率的问题

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// }
// let time=Date.now()
// function animate() {
//   let currentTime=Date.now()
//   let deltaTime=currentTime-time //距离上一次的时间 
//   time=currentTime  
// 	requestAnimationFrame( animate ); 

// 	cube.rotation.x += deltaTime;
// 	cube.rotation.y += deltaTime;

// 	renderer.render( scene, camera );
// }

//但除了设置时间间隔外 推荐****
const clock = new THREE.Clock();
function animate() {
  const time=clock.getElapsedTime();  //three.js 自带  是一个均匀增加的值就可以直接作为物体的旋转角度
  cube.position.z += time*0.01;
  cube.rotation.x=time;
  cube.rotation.y=time;
	cube.position.x = Math.sin(time*2);
	cube.position.y = Math.cos(time*2);
	requestAnimationFrame( animate ); 
	renderer.render( scene, camera );
}
function animate2() {
  const time=clock.getElapsedTime();  //three.js 自带  是一个均匀增加的值就可以直接作为物体的旋转角度
  cube2.position.z += time*0.01;
  cube2.rotation.x=time;
  cube2.rotation.y=time;
	cube2.position.x = Math.sin(time*2)+0.2;
	// cube2.position.y = Math.cos(time*2)+1;
	requestAnimationFrame( animate2 ); 
	renderer.render( scene, camera );
}
function animate3() {
  const time=clock.getElapsedTime();  //three.js 自带  是一个均匀增加的值就可以直接作为物体的旋转角度
  cube3.position.z += time*0.01;
  cube3.rotation.x=time;
  cube3.rotation.y=time;
	cube3.position.x = Math.sin(time*2)-0.2;
	// cube3.position.y = Math.cos(time*2)-1;
	requestAnimationFrame( animate3 ); 
	renderer.render( scene, camera );
}
function animate4() {
  const time=clock.getElapsedTime();  //three.js 自带  是一个均匀增加的值就可以直接作为物体的旋转角度
  cube4.position.z += time*0.01;
  cube4.rotation.x=time;
  cube4.rotation.y=time;
	cube4.position.x = Math.sin(time*2)+0.4;
	// cube4.position.y = Math.cos(time*2)+1;
	requestAnimationFrame( animate4 ); 
	renderer.render( scene, camera );
}
function animate5() {
  const time=clock.getElapsedTime();  //three.js 自带  是一个均匀增加的值就可以直接作为物体的旋转角度
  cube5.position.z += time*0.01;
  cube5.rotation.x=time;
  cube5.rotation.y=time;
	cube5.position.x = Math.sin(time*2)-0.4;
	// cube5.position.y = Math.cos(time*2)-2;
	requestAnimationFrame( animate5 ); 
	renderer.render( scene, camera );
}
animate()
setTimeout(()=>{
  scene.add(cube2)
  animate2()
},1000)
setTimeout(()=>{
  scene.add(cube3)
  animate3()
},2500)
setTimeout(()=>{
  scene.add(cube4)
  animate4()
},4000)
setTimeout(()=>{
  scene.add(cube5)
  animate5()
},4500)

document.getElementById('app').append(renderer.domElement)
console.log(renderer.domElement)