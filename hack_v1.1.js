  /*
©︎ 2023 メタロロ
*/

var mspeed
var mgravity
speed(6)
gravity(0.6)

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

// Fキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyF") Runner.instance_.tRex.config.GRAVITY = mgravity/3;
}
);

// Eキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyE") Runner.instance_.tRex.config.GRAVITY = mgravity/3*4;
 }
);

// E,Fキーが押されたら速度を上げる
window.addEventListener(
    "keyup",
    event => { if (event.code == "KeyE" || event.code == "KeyF") Runner.instance_.tRex.config.GRAVITY = mgravity }
);
function speed(s){
Runner.instance_.setSpeed(s)
mspeed = s
}
function gravity(s){
Runner.instance_.tRex.config.GRAVITY = s
mgravity = s
}
/*
© 2023 メタロロ
*/
