/*
©︎ 2023-メタロロ
Public URL:https://github.com/dmmo-com-jp/dino-game-Hacks-to-increase-functionality./
*/
// Sキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyS") Runner.instance_.setSpeed(10) }
);

// Aキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyA") Runner.instance_.setSpeed(-6) }
);

// Wキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyW") Runner.instance_.setSpeed(0.0001) }
);

// S,A,Wキーが押されたら速度を上げる
window.addEventListener(
    "keyup",
    event => { if (event.code == "KeyW" || event.code == "KeyS" || event.code == "KeyA") Runner.instance_.setSpeed(6) }
);

//ジャンプ機能

// Fキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyF") Runner.instance_.tRex.config.GRAVITY = 0.2;
}
);

// Eキーが押されたら速度を上げる
window.addEventListener(
    "keydown",
    event => { if (event.code == "KeyE") Runner.instance_.tRex.config.GRAVITY = 0.8;
 }
);

// E,Fキーが押されたら速度を上げる
window.addEventListener(
    "keyup",
    event => { if (event.code == "KeyE" || event.code == "KeyF") Runner.instance_.tRex.config.GRAVITY = 0.6 }
);
/*
©︎ 2023-メタロロ
Public URL:https://github.com/dmmo-com-jp/dino-game-Hacks-to-increase-functionality./
*/
