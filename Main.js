var s = 41;
var y = 3.14;
var z = "life";

console.log(y);
console.log(y*s);
console.log(s+z);
console.log("%d is not the meaning of %s", s, z);

function letsGoOutAndPlay(game) {

    if (game == 1){
         console.log("Kicking the Ball");
    }
    else if (game == 2){
        console.log("Throwing the ball to the hoop");
    }
    else
        console.log("I ain't playing no cricet");
}

letsGoOutAndPlay(2);