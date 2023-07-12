  /*
©︎ 2023 メタロロ
*/

var mspeed
var mgravity
speed(6)
gravity(0.6)
Ycd(93)

// Sキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyS") Runner.instance_.setSpeed(mspeed/3*5) }
);

// Aキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyA") Runner.instance_.setSpeed(mspeed*-1) }
);

// Wキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyW") Runner.instance_.setSpeed(0.0001) }
);

// S,A,Wキーが押されたら速度を上げる
window.addEventListener(
    "keyup",
    event => { if (event.code == "KeyW" || event.code == "KeyS" || event.code == "KeyA") Runner.instance_.setSpeed(mspeed) }
);

//ジャンプ機能

// Zキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyZ") Runner.instance_.tRex.config.GRAVITY = mgravity/3;
}
);

// Xキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyX") Runner.instance_.tRex.config.GRAVITY = mgravity/3*4;
 }
);

// Z,Xキーが押されたら速度を上げる
window.addEventListener(
    "keyup",
    event => { if (event.code == "KeyZ" || event.code == "KeyX") Runner.instance_.tRex.config.GRAVITY = mgravity }
);
//飛行
// Fキーが押されたら飛行
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyF") Ycd(25)
 }
);
// Cキーが押されたら飛行
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyC") Ycd(120)
 }
);
// Gキーが押されたら解除
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyG") Ycd(93)
 }
);
function speed(s){
Runner.instance_.setSpeed(s)
mspeed = s
}
function gravity(s){
Runner.instance_.tRex.config.GRAVITY = s
mgravity = s
}
function Ycd(y){
Runner.instance_.tRex.groundYPos = y
}

/*
© 2023 メタロロ
*/
