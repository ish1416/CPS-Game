let clicks = 0;
        let gameActive = false;
        let timer;

        function startCPS() {
            if (gameActive) return;
            gameActive = true;
            clicks = 0;
            
            let clickArea = document.querySelector(".click-area");
            clickArea.innerText = "Start Clicking!";
            clickArea.classList.add("active");

            timer = setTimeout(() => {
                gameActive = false;
                let cps = (clicks / 5).toFixed(2);
                console.log(`Game over! Your CPS: ${cps} clicks/sec`);
                
                let resultDiv = document.getElementById("result");
                resultDiv.innerHTML = `Your CPS: ${cps} clicks/sec`;
                
                if (cps < 5) {
                    resultDiv.innerHTML += "<br>You are a turtle!";
                    resultDiv.innerHTML += '<br><img src="images/tut.jpg" alt="Turtle">';
                } else if (cps >= 5 && cps <= 10) {
                    resultDiv.innerHTML += "<br>Decent speed, but can improve!";
                    resultDiv.innerHTML += '<br><img src="images/rabb.jpg" alt="Rabbit">';
                } else {
                    resultDiv.innerHTML += "<br>Super fast! You're a cheetah!";
                    resultDiv.innerHTML += '<br><img src="images/cheet.jpg" alt="Cheetah">';
                }
                
                resultDiv.style.display = "block";
                document.querySelector(".reset-btn").style.display = "block";
                clickArea.style.display = "none";
            }, 5000);
        }

        document.addEventListener("click", function(event) {
            clicks++;
        });