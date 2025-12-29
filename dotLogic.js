const canvas = document.getElementById("connected-dots")
const ctx = canvas.getContext("2d")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
        let particlesArray = []
        const particlesNumber = 150
        class Particle {
            constructor()
            {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speed = Math.random() * 1 - 0.5;
            }
            update()
            {
                this.x += this.speed;
                this.y += this.speed;
                if (this.x > canvas.width || this.x < 0) {
                    this.speed = -this.speed;
                }
                if (this.y > canvas.width || this.y < 0) {
                    this.speed = -this.speed;
                }
            }
            draw()
            {
                ctx.fillStyle = 'rgba(0, 255, 157, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        function init(){
            for (let i = 0; i < particlesNumber; i++){
                particlesArray.push(new Particle());
            }
        }
        function animate(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for(let i = 0; i < particlesArray.length; i++){
                particlesArray[i].update()
                particlesArray[i].draw()
                for (let j = i; j < particlesArray.length; j++) {
                    const dx = particlesArray[i].x - particlesArray[j].x;
                    const dy = particlesArray[i].y - particlesArray[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if(distance < 100){
                        ctx.beginPath()
                        let opacity = 1 - (distance / 100);
                        ctx.strokeStyle = 'rgba(0, 255, 157,'+ opacity +')';
                        ctx.lineWidth = 2;
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                        ctx.stroke()
                    }
                }
            }
            requestAnimationFrame(animate);
        }
        init();
        animate()
        window.addEventListener('resize',function(){
            canvas.height = window.innerHeight
            canvas.width = window.innerWidth
            particlesArray = []
            init()
        })
