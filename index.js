

                function plyfunction(plyMove) {
                    compMove1();
                    result1(plyMove);
                    score1();
                }
                let score= {
                 win : 0,
                 lose : 0,
                 tie : 0
                }
                function reset1() {
                    
                        score.win =0;
                        score.lose =0;
                        score.tie =0;

                        document.getElementById("demo3").innerHTML =(`win: ${score.win}, lose:${score.lose}, Tie:${score.tie}`);
                    }
                
                function score1() {
                    if (result ==='You win') {
                        score.win+=1;
                    } else if (result ==='You lose') {
                       score.lose+=1;
                    } else if (result ==='Tie') {
                        score.tie+=1;
                    }
                    document.getElementById('demo3').innerHTML =(`win: ${score.win}, lose:${score.lose}, Tie:${score.tie}`);
                }
                let compMove = "";

                function compMove1 () {
                    let randomNumber = Math.random ();

                    if (randomNumber >=0 && randomNumber<1/3) {
                        compMove = "rock";
                    } else if (randomNumber>=1/3 && randomNumber<2/3) {
                        compMove = "paper";
                    } else if (randomNumber>=2/3 && randomNumber<=1) {
                        compMove = "scissor";
                    }
                    document.getElementById("demo").innerHTML =(`Computer picked ${compMove}`);
                    

                }
                
                    let result = "";

                    function result1(plyMove) {
                    if (plyMove === "rock") {
                      if (compMove === "rock") {
                            result = 'Tie';
                        } else if (compMove === 'paper') {
                            result = 'You lose';
                        } else if (compMove === 'scissor') {
                            result = 'You win';
                        }
                    }
                

                      else if (plyMove === "paper") {
                      if (compMove === "rock") {
                            result = 'You win';
                        } else if (compMove === 'paper') {
                            result = 'Tie';
                        } else if (compMove === 'scissor') {
                            result = 'You lose';
                        }
                    }

                      else if (plyMove === "scissor") {
                      if (compMove === "rock") {
                            result = 'You lose';
                        } else if (compMove === 'paper') {
                            result = 'You win';
                        } else if (compMove === 'scissor') {
                            result = 'Tie';
                        }
                      }
                        document.getElementById("demo4").innerHTML =(`You picked ${plyMove}`);

                        document.getElementById("demo2").innerHTML = result;
                    }
                