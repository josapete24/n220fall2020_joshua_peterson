// Application Level Stuff //
// Cluttering the global namespace //
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

// app variables //
var camera, scene, ball, goal, timeoutID, particleSystem; 

// Create the scene //
scene = createScene();
engine.runRenderLoop(function () {
  scene.render();
});

scene.registerAfterRender(function(){
    if(ball.intersectsMesh(goal, false)) {
        
        // move the goal //
        goal.position.x = (Math.random() * 8) - 4;

        // play a particle burst //
        particleSystem.manualEmitCount = 21;
        particleSystem.start();
        
        // position particles //
        particleSystem.minEmitBox = ball.position;

        // put ball back at start //
        resetBall()
    }
});

function createScene() {
  var scene = new BABYLON.Scene(engine);

  // Scene Setup //
  camera = new BABYLON.UniversalCamera("UC",new BABYLON.Vector3(0, 0, -15),scene);
  var light = new BABYLON.DirectionalLight("light",new BABYLON.Vector3(0, -0.2, 0.2),scene);

  // Enable Physics //
  var gravityVector = BABYLON.Vector3(0, -9.81, 0);
  var physicsPlugin = new BABYLON.CannonJSPlugin();
  scene.enablePhysics(gravityVector, physicsPlugin);

  ball = BABYLON.MeshBuilder.CreateSphere("sphero", { diameter: 1 }, scene);
  ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball,BABYLON.PhysicsImpostor.SphereImpostor,{ mass: 1, restitution: .2 },scene);


  // Setup ground for ball //
  var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 20, width: 30, subdivisions: 4}, scene);
  ground.position.y = -3;
  ground.position.z = 9; 
  ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution: .9});

    // Make the goal //
    goal = new BABYLON.MeshBuilder.CreateBox("goal" ,{height: 5, width: 5}, scene)
    goal.position.z = 7;
    goal.position.x = (Math.random() * 8) - 4;

    // make the particle system //
    particleSystem = new BABYLON.ParticleSystem("particles" , 2000, scene);
    particleSystem.emitter = new BABYLON.Vector3(0,0,0);
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPoer = 3;
    particleSystem.addVelocityGradient(0,2);

    // load the particle texture //
    particleSystem.particleTexture = new BABYLON.Texture("image/particle.png", scene);


  return scene;
}

function resetBall() {
    // reset postion //
    ball.position = new BABYLON.Vector3();

    // reset velocity //
    ball.physicsImpostor.setLinearVelocity( new BABYLON.Vector3());
    ball.physicsImpostor.setAngularVelocity( new BABYLON.Vector3());
    clearTimeout(timeoutID);

}

window.addEventListener("click", function() {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    // Null check //
    if(selectedObject) {

        // get a direction away from where the user clicked on the ball //
        var surfaceNormal = pickResult.getNormal(true); 
        var forceDirection = surfaceNormal.scale(-1000);

        // Kick the object //
        selectedObject.physicsImpostor.applyForce( forceDirection, selectedObject.getAbsolutePosition())
    }

    // reset ball after 3 second //
    timeoutID = setTimeout(resetBall, 3000)
})
