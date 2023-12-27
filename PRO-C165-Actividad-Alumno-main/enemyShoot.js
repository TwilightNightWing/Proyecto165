AFRAME.registerComponent("enemy-bullets", {
    init: function () {
        setInterval(this.shootEnemyBullet, 2000)
    },
    shootEnemyBullet: function () {

        //obtener todos los enemigos usando el nombre de la clase
        var els = document.querySelectorAll(".enemy");

        for (var i = 0; i < els.length; i++) {

            //Entidad de la bala del enemigo
            var enemyBullet = document.createElement("a-entity");

            enemyBullet.setAttribute("geometry", {
                primitive: "sphere",
                radius: 0.1,
            });

            enemyBullet.setAttribute("material", "color", "#282B29");

            var position = els[i].getAttribute("position")

            enemyBullet.setAttribute("position", {
                x: position.x + 1.5,
                y: position.y + 3.5,
                z: position.z,
            });

            var scene = document.querySelector("#scene");
            scene.appendChild(enemyBullet);

            //Three.js Vector Variables
            var enemy = els.object3D
            var player = document.querySelector ("weapon").object3D

            var position1 = new TREE.Vector3()
            var position2 = new TREE.Vector3()
            player.getWorldPosition(position1)
            enemy.getWorldPosition(position2)

            var dirección = new TREE.Vector3()
            dirección.subVectors(position1, position2).normalize()
            enemyBullet.setAttribute("velocity",dirección.multiplyScalar(10))
            enemyBullet.setAttribute("dynamic_body",{
                shape: "sphere",
                mass: "0"

            })

            var element= document.querySelector ("#countLife")
            var playerLife = parseInt (element.getAttribute ("text").value)
 
            //Obtener la posición del enemigo y jugador usando el método Three.js 
            

            //Establecer la velocidad y su dirección
            
            //Establecer el atributo del cuerpo dinámico
            

            //Obtener atributo de texto

            //colisión


            

            //Evento de colisión con las balas enemigas
            enemyBullet.addEventListener("collide", function (e) {
                if (e.detail.body.el.id === "weapon") {

                    //Agrega las condiciones aquí
                    if (playerLife>0){
                        playerLife-=1 
                        element.setAttribute ("text",{value: playerLife})
                    }



                }
            });

        }
    },

});
