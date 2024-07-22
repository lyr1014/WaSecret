// import * as THREE from 'three'
jewel=function(jewelcolor,jeweldiv){

    const w = window.innerWidth
    const h = window.innerHeight
    
    //场景  物体 光源 相机 渲染器
    const scene = new THREE.Scene()
    const color = new THREE.Color(jewelcolor);
    
    
    const geometry = new THREE.IcosahedronGeometry();
    // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    const material = new THREE.MeshLambertMaterial({
        emissive: color
    })
    
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -2)  // 物体初始位置,
    // cube.rotation.x=45/180*Math.PI  //绕X轴进行旋转
    // cube.scale.x =0.5//将X轴进行缩放
    // cube.scale.set(2,2,2)//也可以直接设置三个方向的缩放比例
    
    scene.add(cube)
    
    //axes
    // const axesHelper = new THREE.AxesHelper(2,2,2)
    // scene.add(axesHelper)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); //平行光
    directionalLight.position.set(1, 1, 1).normalize(); // 设置光源的方向
    scene.add(directionalLight)
    
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)//看到的角度范围、照片宽高比、可以看到0.1-100范围内的物体
    //刚开始相机和物体都在0,0点 会重合所以看不到物体
    camera.position.set(0, 0, 5)
    camera.lookAt(0, 0, 0)
    
    
    
    const renderer = new THREE.WebGLRenderer({
        alpha: true
    })//渲染器
    renderer.setSize(w, h)
    
    // renderer.setClearColor(0xEEEEEE, 0.0);
 
    renderer.setClearAlpha(0.0);
    //但除了设置时间间隔外 推荐****  
    const clock = new THREE.Clock();
    function animate() {
        const time = clock.getElapsedTime();  //three.js 自带  是一个均匀增加的值就可以直接作为物体的旋转角度
        cube.position.z += time * 0.01*2;
        cube.rotation.x = time*2;
        cube.rotation.y = time*2;
        // cube.position.x = Math.sin(time * 2);
        // cube.position.y = Math.cos(time * 2);
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate()
    document.getElementById(jeweldiv).append(renderer.domElement)
}
