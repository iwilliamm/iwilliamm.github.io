window.onload = function(){
        // Creating the Canvas
        var canvas = document.createElement("canvas"), 
            c = canvas.getContext("2d"),
            particles = {},
            particleIndex = 0,
            particleNum = 0.1;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.id = "motion";
        document.body.appendChild(canvas);
        // Finished Creating Canvas
        
        // Setting color which is just one big square
        c.fillStyle = "black";
        c.fillRect(100,100,canvas.width,canvas.height);
        // Finished Color
        var y_fourth = Math.floor(canvas.height / 4);
        var y_second_fourth = Math.floor(y_fourth * 2);

        function Particle(){
            var random_x = Math.floor(Math.random() * (0)) + 1;
            var random_y = Math.floor(Math.random() * y_second_fourth + y_fourth) + 1;
            this.x = random_x;
            this.y = random_y;
            this.vx = Math.random() * 5 - 2;
            this.vy = Math.random() * 2 - 1;
            this.gravity = 0;
            particleIndex++;
            particles[particleIndex] = this;
            this.id = particleIndex;
            this.size = Math.random() * 6 - 2;
            this.color = "hsla(0,0%,"+parseInt(Math.random()*100, 0)+"%,1)";
            this.color2 = "hsla(360,100%,"+parseInt(Math.random()*100, 0)+"%,1)";
            this.color3 = "hsla(210,100%,"+parseInt(Math.random()*100, 0)+"%,1)";
            this.color_selector = Math.random() * 150 - 1;

        }
       
        Particle.prototype.draw = function(){
			this.x += this.vx;
			this.y += this.vy;
			this.vy += this.gravity;
			if(this.x > canvas.width || this.y > canvas.height){
				delete particles[this.id];
			}
			
			if(this.color_selector < 30 && this.color_selector > 10){
				c.fillStyle = this.color2;
			} else if(this.color_selector < 10) {
				c.fillStyle = this.color3;
			} else {
				c.fillStyle = this.color;
			}
			c.fillRect(this.x, this.y, this.size, this.size);
		};
        
        setInterval(function(){
            c.fillStyle = "black";
            c.fillRect(0,0,canvas.width,canvas.height);
            for (var i = 0; i < particleNum; i++){
                new Particle();
            }
            for(var i in particles){
                particles[i].draw();
            }
        }, 30);
    };