// ============================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ============================================
window.addEventListener("load", function(){
    const music = document.getElementById("bgmusic")
    if(music) {
        music.play().catch(function(error){
            console.log("Music play blocked or error", error)
        });
    }
})

var lCode = []
var editorMode = false;
var currentTool = "block";
var showGrid = true;
var portalType = "ship";
var levelData = [];
var editorScrollX = 0;

var editorBtnX = 10;
var editorBtnY = 10;
var editorBtnW = 120;
var editorBtnH = 40;

const originalLCode = [
        // ====== СЕКЦИЯ 1: СТАРТ (куб) ======
        "blo", 1000, 850,
        "blo", 1040, 800,
        "blo", 1080, 800,
        "blo", 1120, 800,
        "blo", 1160, 660,
        "blo", 1160, 800,
        "blo", 1200, 800,
        "blo", 1200, 660,
        "blo", 1240, 660,
        "blo", 1240, 800,
        "blo", 1280, 660,
        "blo", 1280, 800,
        "blo", 1360, 660,
        "blo", 1440, 660,
        "blo", 1400, 660,
        "blo", 1320, 660,
        "spi", 1320, 650,
        "spi", 1360, 650,
        "blo", 1320, 800,
        "blo", 1360, 800,
        "blo", 1400, 800,
        "blo", 1440, 800,
        "blo", 1400, 650,
        "blo", 1440, 650,
        "blo", 1480, 650,
        "blo", 1520, 650,
        "blo", 1560, 650,
        "blo", 1680, 650,
        "blo", 1640, 650,
        "blo", 1600, 650,
        "blo", 1720, 650,
        "blo", 1760, 650,
        "blo", 1800, 650,
        "blo", 1880, 650,
        "blo", 1840, 650,
        "spi", 1720, 600,
        "spi", 1760, 600,
        "blo", 1800, 600,
        "blo", 1840, 600,
        "blo", 1880, 600,

        // ====== СЕКЦИЯ 2: СРЕДНЯЯ (куб) ======
        "blo", 2040, 650,
        "blo", 2200, 600,
        "blo", 2360, 660,
        "spi", 1920, 800,
        "spi", 1960, 800,
        "spi", 2000, 800,
        "spi", 1880, 800,
        "spi", 2040, 800,
        "spi", 2080, 800,
        "spi", 2120, 800,
        "spi", 2160, 800,
        "spi", 2200, 800,
        "spi", 2240, 800,
        "spi", 2280, 800,
        "spi", 2320, 800,
        "spi", 2800, 800,
        "blo", 3120, 800,
        "blo", 3160, 800,
        "blo", 3280, 800,
        "blo", 3320, 800,
        "blo", 3360, 800,
        "blo", 3400, 800,
        "spi", 3200, 800,
        "spi", 3240, 800,
        "spi", 3080, 800,
        "blo", 3520, 660,
        "blo", 3920, 600,
        "blo", 3960, 600,
        "blo", 4000, 600,
        "blo", 4040, 600,
        "blo", 4080, 600,
        "blo", 4120, 650,
        "blo", 4160, 650,
        "blo", 4200, 650,
        "blo", 4240, 650,
        "blo", 4400, 650,
        "blo", 4440, 650,
        "blo", 4480, 650,
        "blo", 4520, 650,
        "spi", 4240, 800,
        "spi", 4280, 800,
        "spi", 4320, 800,
        "spi", 4360, 800,
        "spi", 4400, 800,
        "spi", 4960, 800,
        "spi", 5000, 800,
        "blo", 5280, 800,
        "blo", 5320, 660,
        "blo", 5240, 800,
        "blo", 5200, 800,
        "blo", 5360, 660,
        "blo", 5400, 660,
        "blo", 5440, 660,
        "blo", 5480, 660,
        "blo", 5520, 660,
        "blo", 5560, 660,
        "spi", 5600, 800,
        "spi", 5640, 800,
        "spi", 5760, 800,
        "spi", 5800, 800,
        "blo", 3840, 600,
        "blo", 3880, 600,
        "blo", 3760, 600,
        "blo", 3680, 650,
        "blo", 3640, 650,
        "blo", 3800, 600,
        "spi", 6000, 660,
        "spi", 6050, 660,
        "blo", 6060, 660,
        "blo", 6110, 660,
        "blo", 6160, 660,
        "blo", 6210, 660,

        // ====== ПОРТАЛ В САМОЛЁТИК (1-й раз) ======
        "por", 6400, 630, "ship",

        // ====== СЕКЦИЯ 3: САМОЛЁТИК (коридор) ======
        "spi", 6500, 700,
        "spi", 6600, 600,
        "spi", 6700, 700,
        "spi", 6800, 550,
        "spi", 6900, 650,
        "spi", 7000, 700,
        "spi", 7100, 600,
        "spi", 7200, 650,
        "blo", 6500, 1,
        "blo", 6540, 1,
        "blo", 6580, 1,
        "blo", 6700, 1,
        "blo", 6740, 1,
        "blo", 6900, 1,
        "blo", 6940, 1,
        "blo", 7100, 1,
        "blo", 7140, 1,
        "blo", 6500, 800,
        "blo", 6540, 800,
        "blo", 6580, 800,
        "blo", 6700, 800,
        "blo", 6740, 800,
        "blo", 6900, 800,
        "blo", 6940, 800,
        "blo", 7100, 800,
        "blo", 7140, 800,
        "spi", 6500, 300,
        "spi", 6600, 200,
        "spi", 6700, 300,
        "spi", 6800, 150,
        "spi", 6900, 250,
        "spi", 7000, 300,
        "spi", 7100, 200,
        "spi", 7200, 250,

        // ====== ОБРАТНЫЙ ПОРТАЛ В КУБ ======
        "por", 7400, 630, "cube",

        // ====== СЕКЦИЯ 4: ФИНАЛ (куб) ======
        "blo", 7500, 800,
        "blo", 7540, 800,
        "blo", 7580, 800,
        "blo", 7620, 800,
        "blo", 7660, 800,
        "spi", 7700, 800,
        "spi", 7740, 800,
        "blo", 7800, 800,
        "blo", 7840, 800,
        "blo", 7880, 800,
        "blo", 7920, 800,
        "blo", 7880, 660,
        "blo", 7920, 660,
        "spi", 7960, 650,
        "blo", 8000, 800,
        "blo", 8040, 800,
        "blo", 8080, 800,
        "spi", 8120, 800,
        "blo", 8160, 800,
        "blo", 8200, 800,
        "blo", 8240, 800,
        "blo", 8280, 660,
        "blo", 8320, 660,
        "blo", 8360, 660,
        "spi", 8400, 650,
        "blo", 8440, 800,
        "blo", 8480, 800,
        "blo", 8520, 800,
        "spi", 8560, 800,
        "spi", 8600, 800,
        "blo", 8640, 800,
        "blo", 8680, 800,
        "blo", 8720, 800,
        "blo", 8760, 660,
        "blo", 8800, 660,
        "spi", 8840, 650,
        "blo", 8880, 800,
        "blo", 8920, 800,
        "blo", 8960, 800,
        "blo", 9000, 800,
        "blo", 9040, 800,
        "blo", 9080, 800,
        "spi", 9120, 800,
        "blo", 9160, 800,
        "blo", 9200, 800,
        "blo", 9240, 800,
        "blo", 9280, 800,
        "blo", 9320, 800,
        "blo", 9360, 800,
        "blo", 9400, 800,
        "blo", 9440, 800,
        "blo", 9480, 800,

        // ====== СЕКЦИЯ 5: ПРЫЖКИ ПО ПЛАТФОРМАМ (куб) ======
        "blo", 9600, 800,
        "blo", 9640, 800,
        "blo", 9800, 700,
        "blo", 9840, 700,
        "spi", 9800, 690,
        "blo", 10000, 600,
        "blo", 10040, 600,
        "spi", 10000, 590,
        "blo", 10200, 500,
        "blo", 10240, 500,
        "spi", 10200, 490,
        "blo", 10400, 400,
        "blo", 10440, 400,
        "spi", 10400, 390,
        "blo", 10600, 500,
        "blo", 10640, 500,
        "blo", 10800, 600,
        "blo", 10840, 600,
        "blo", 11000, 700,
        "blo", 11040, 700,
        "blo", 11200, 800,
        "blo", 11240, 800,
        "blo", 11280, 800,
        "spi", 11320, 790,
        "spi", 11360, 790,
        "blo", 11400, 800,
        "blo", 11440, 800,
        "blo", 11480, 800,
        "spi", 11520, 790,
        "blo", 11600, 800,
        "blo", 11640, 800,
        "blo", 11680, 800,
        "blo", 11720, 800,
        "blo", 11760, 800,
        "spi", 11800, 790,
        "spi", 11840, 790,
        "spi", 11880, 790,
        "blo", 11920, 800,
        "blo", 11960, 800,
        "blo", 12000, 800,
        "blo", 12040, 800,
        "blo", 12080, 800,
        "blo", 12120, 800,

        // ====== СЕКЦИЯ 6: ДЛИННЫЙ ПОЛЁТ (самолётик) ======
        "por", 12300, 630, "ship",
        "blo", 12400, 1,
        "blo", 12440, 1,
        "blo", 12480, 1,
        "blo", 12520, 1,
        "blo", 12560, 1,
        "blo", 12600, 1,
        "blo", 12640, 1,
        "blo", 12680, 1,
        "blo", 12720, 1,
        "blo", 12760, 1,
        "blo", 12800, 1,
        "blo", 12840, 1,
        "blo", 12880, 1,
        "blo", 12920, 1,
        "blo", 12960, 1,
        "blo", 13000, 1,
        "blo", 13040, 1,
        "blo", 13080, 1,
        "blo", 13120, 1,
        "blo", 13160, 1,
        "blo", 13200, 1,
        "blo", 12400, 800,
        "blo", 12440, 800,
        "blo", 12480, 800,
        "blo", 12520, 800,
        "blo", 12560, 800,
        "blo", 12600, 800,
        "blo", 12640, 800,
        "blo", 12680, 800,
        "blo", 12720, 800,
        "blo", 12760, 800,
        "blo", 12800, 800,
        "blo", 12840, 800,
        "blo", 12880, 800,
        "blo", 12920, 800,
        "blo", 12960, 800,
        "blo", 13000, 800,
        "blo", 13040, 800,
        "blo", 13080, 800,
        "blo", 13120, 800,
        "blo", 13160, 800,
        "blo", 13200, 800,
        "spi", 12500, 300,
        "spi", 12700, 600,
        "spi", 12900, 400,
        "spi", 13100, 500,
        "spi", 12600, 200,
        "spi", 12800, 700,
        "spi", 13000, 350,

        // ====== ОБРАТНЫЙ ПОРТАЛ В КУБ ======
        "por", 13400, 630, "cube",

        // ====== СЕКЦИЯ 7: ФИНАЛЬНЫЙ СПУСК ======
        "blo", 13500, 800,
        "blo", 13540, 800,
        "blo", 13580, 800,
        "blo", 13620, 800,
        "spi", 13660, 790,
        "spi", 13700, 790,
        "blo", 13740, 800,
        "blo", 13780, 800,
        "blo", 13820, 800,
        "blo", 13860, 800,
        "blo", 13820, 660,
        "blo", 13860, 660,
        "spi", 13900, 650,
        "spi", 13940, 650,
        "blo", 13980, 800,
        "blo", 14020, 800,
        "blo", 14060, 800,
        "blo", 14100, 800,
        "spi", 14140, 790,
        "blo", 14180, 800,
        "blo", 14220, 800,
        "blo", 14260, 800,
        "blo", 14300, 800,
        "blo", 14260, 660,
        "blo", 14300, 660,
        "spi", 14340, 650,
        "spi", 14380, 650,
        "blo", 14420, 800,
        "blo", 14460, 800,
        "blo", 14500, 800,
        "blo", 14540, 800,
        "blo", 14580, 800,
        "blo", 14620, 800,
        "blo", 14660, 800,
        "blo", 14700, 800,
        "spi", 14740, 790,
        "spi", 14780, 790,
        "spi", 14820, 790,
        "blo", 14860, 800,
        "blo", 14900, 800,
        "blo", 14940, 800,
        "blo", 14980, 800,
        "blo", 15020, 800,
        "blo", 15060, 800,
        "blo", 15100, 800,
        "blo", 15140, 800,
        "blo", 15180, 800,
        "blo", 15220, 800,
        "blo", 15260, 800,
        "blo", 15300, 800,
        "blo", 15340, 800,
        "blo", 15380, 800,
        "blo", 15420, 800,
        "blo", 15460, 800,
        "blo", 15500, 800,
        "blo", 15540, 800,
        "blo", 15580, 800,
        "blo", 15620, 800,
        "blo", 15660, 800,
        "blo", 15700, 800,
        "blo", 15740, 800,
        "blo", 15780, 800,
        "blo", 15820, 800,
        "blo", 15860, 800,
        "blo", 15900, 800,
        "blo", 15940, 800,
        "blo", 15980, 800,
        "blo", 16020, 800,
        "blo", 16060, 800,
        "blo", 16100, 800,
        "blo", 16140, 800,
        "blo", 16180, 800,
        "blo", 16220, 800,
        "blo", 16260, 800,
        "blo", 16300, 800,
        "blo", 16340, 800,
        "blo", 16380, 800,
        "blo", 16420, 800,
        "blo", 16460, 800,
        "blo", 16500, 800,
        "blo", 16540, 800,
        "blo", 16580, 800,
        "blo", 16620, 800,
        "blo", 16660, 800,
        "blo", 16700, 800,
        "blo", 16740, 800,
        "blo", 16780, 800,
        "blo", 16820, 800,
        "blo", 16860, 800,
        "blo", 16900, 800,
        "blo", 16940, 800,
        "blo", 16980, 800,
        "blo", 17020, 800,
        "blo", 17060, 800,
        "blo", 17100, 800,
        "blo", 17140, 800,
        "blo", 17180, 800,
        "blo", 17220, 800,
        "blo", 17260, 800,
        "blo", 17300, 800,
        "blo", 17340, 800,
        "blo", 17380, 800,
        "blo", 17420, 800,
        "blo", 17460, 800,
        "blo", 17500, 800,
        "blo", 17540, 800,
        "blo", 17580, 800,
        "blo", 17620, 800,
        "blo", 17660, 800,
        "blo", 17700, 800,
        "blo", 17740, 800,
        "blo", 17780, 800,
        "blo", 17820, 800,
        "blo", 17860, 800,
        "blo", 17900, 800,
        "blo", 17940, 800,
        "blo", 17980, 800,
    ];

// ============================================
// ФУНКЦИЯ setup()
// ============================================
function setup() {
    let savedLevel = localStorage.getItem("geometryDashLevel");
    
    if (savedLevel) {
        try {
            lCode = JSON.parse(savedLevel);
            console.log("Уровень загружен из памяти браузера");
        } catch (e) {
            console.error("Ошибка загрузки уровня, используем стандартный", e);
            lCode = originalLCode;
        }
    } else {
        lCode = originalLCode;
        console.log("Используем стандартный уровень");
    }

    createCanvas(1500, 800);
    document.body.oncontextmenu = function() { return false; };

    loadLevelFromCode();
    background(100);

    player = {
        x: 75,
        y: height - 100,
        yVel: 0,
        dead: false,
        air: false,
        rot: 0,
        xR: 0,
        jumpst: 0,
        c: 0,
        speed: 12,
        mode: "cube",
        size: 40,

        move: function() {
            if (!this.dead && !editorMode) { this.xR += (player.speed) }
            if (frameCount > 1) { this.y += this.yVel } else { this.y += this.yVel }

            if (this.mode === "cube") {
                if (this.y > height - 99) {
                    this.y -= this.yVel;
                    this.yVel = 0;
                    this.air = false;
                } else {
                    // ⭐ ГЛАВНОЕ ИЗМЕНЕНИЕ: гравитация уменьшена с 1.3 до 0.8
                    this.yVel += 0.8;
                }
                while (this.y > height - 99) { this.y -= 0.1 }
            } else if (this.mode === "ship") {
                if (this.y > height - 99) {
                    this.y = height - 99;
                    this.yVel = 0;
                }
                if (this.y < 40) {
                    this.y = 40;
                    this.yVel = 0;
                }
                this.yVel += 0.6;
                if (this.yVel > 10) this.yVel = 10;
                if (this.yVel < -10) this.yVel = -10;
            }

            if (this.dead) {
                home = 1;
                this.dead = false;
                this.y = height - 100;
                placeOY = round(placeOY / 40);
                placeO = round(placeO / 40);
                player.xR = 0;
                this.yVel = 0;
                this.mode = "cube";
                this.air = true;
                this.c += 1 * 60 / frameRate();
                
                resetMusic();
                
                if (this.c > 60) {
                    player.dead = false;
                }
            } else {
                this.c = 0
            }
        },

        show: function() {
            if (this.mode === "cube") {
                if ((keyIsDown(32) || mouseIsPressed || keyIsDown(38)) && !editorMode) {
                    if (this.air == false) {
                        this.yVel = -23.3;
                        this.air = true;
                    }
                }
                if (this.air) {
                    this.rot += 8
                } else {
                    if (this.rot > round(this.rot / 90) * 90 + 40) {
                        this.rot -= 38
                    } else {
                        if (this.rot < round(this.rot / 90) * 90 - 40) {
                            this.rot += 38
                        } else {
                            this.rot = round(this.rot / 90) * 90
                        }
                    }
                }
            } else if (this.mode === "ship") {
                if ((keyIsDown(32) || mouseIsPressed || keyIsDown(38)) && !editorMode) {
                    this.yVel -= 1.2;
                } else {
                    this.yVel += 0.8;
                }
                this.rot = this.yVel * 3;
                if (this.rot > 45) this.rot = 45;
                if (this.rot < -45) this.rot = -45;
            }

            if (!this.dead) {
                translate(75, this.y)
                angleMode(DEGREES)
                rotate(this.rot)
                rectMode(CENTER)
                stroke(0, 0, 0);
                strokeWeight(2)

                if (this.mode === "cube") {
                    fill(0, 0, 195)
                    rect(0, 0, this.size)
                } else if (this.mode === "ship") {
                    fill(0, 195, 255)
                    beginShape();
                    vertex(-this.size/2, 0);
                    vertex(this.size/2, -this.size/3);
                    vertex(this.size/2, this.size/3);
                    endShape(CLOSE);
                    fill(0, 100, 200);
                    triangle(-this.size/6, 0, this.size/6, -this.size/2, this.size/3, 0);
                }
            }
        }
    }
    home = 0
}

function resetMusic() {
    const music = document.getElementById("bgmusic");
    if (music) {
        music.currentTime = 0;
        music.play().catch(e => console.log("Auto-play prevented", e));
    }
}

var player
var home = 0

function ground() {
    fill(0, 0, 0)
    rectMode(CORNER)
    stroke(255)
    strokeWeight(1)

    if (home == 1) {
        rect(-10, height - 100 + 20 + 2, width + 10, placeOY + 150)
        rect(-10, height - 100 + 20 + 2, width + 20, placeOY + 150)
    } else {
        rect(-10, height - 100 + 20 + 2, width + 10, 150)
        rect(-10, height - 100 + 20 + 2, width + 20, 150)
    }
}

var camY = 0

// ============================================
// draw()
// ============================================
function draw() {
    if (home == 10) {
        background(0, 150, 0);
        
        fill(255)
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(50)
        text("You beat the level!", width / 2, height / 2 - 50)
        
        let btnW = 200;
        let btnH = 60;
        let btnX = width / 2 - btnW / 2;
        let btnY = height / 2 + 20;
        
        fill(255, 255, 255, 200);
        rect(btnX, btnY, btnW, btnH, 10);
        
        fill(0, 150, 0);
        textSize(30);
        text("🔄 ЗАНОВО", width / 2, btnY + btnH / 2);
    }

    if (home == 0) {
        push()

        if (player.xR > 18500 && !editorMode) { home = 10 }

        if (-player.y + height - 100 > height - 100) {
            if (camY > -player.y + height - 100 + 3) {
                camY -= 3
            } else {
                if (camY < -player.y + height - 100 - 3) {
                    camY += 3
                } else {
                    camY = -player.y + height - 100
                }
            }
        } else {
            if (camY > -player.y + height - 100 + 3) {
                camY -= player.yVel + 30
            }
        }

        translate(0, camY)
        
        if (editorMode) {
            if (mouseIsPressed && mouseButton === RIGHT) {
                let dx = mouseX - pmouseX;
                editorScrollX += dx;
                if (editorScrollX > 0) editorScrollX = 0;
                if (editorScrollX < -18500) editorScrollX = -18500;
            }
            translate(editorScrollX, 0);
        }
        
        background(225, 0, 0)
        ground()
        player.air = true
        noStroke()
        player.move()
        noStroke()

        for (let i = 0; i < blocks.length; i++) {
            blocks[i].show()
        }

        for (let i = 0; i < sMoves.length; i++) {
            sMoves[i].show()
            if (sMoves[i].x < -100) { sMoves.splice(i, 1); i-- }
        }

        push()
        player.show()
        pop()

        pop()
        time = 0;
        
        drawEditorToggleButton();

        if (editorMode) {
            drawEditorUI();
        }
    }

    if (home == 1) {
        time = 0;
        player.dead = false;
        home = 0
    }
}

// ============================================
// ФУНКЦИЯ ПЕРЕЗАПУСКА ИГРЫ
// ============================================
function restartGame() {
    player.xR = 0;
    player.y = height - 100;
    player.yVel = 0;
    player.mode = "cube";
    player.air = true;
    player.dead = false;
    player.rot = 0;
    
    editorScrollX = 0;
    camY = 0;
    
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].id === "blo") {
            blocks[i].x = blocks[i].xh;
        } else if (blocks[i].id === "spi") {
            blocks[i].x = blocks[i].x2;
        } else if (blocks[i].id === "por") {
            blocks[i].x = blocks[i].x2;
            blocks[i].activated = false;
        }
    }
    
    home = 0;
    resetMusic();
}

// ============================================
// КНОПКА РЕДАКТОРА
// ============================================
function drawEditorToggleButton() {
    push();
    if (editorMode) {
        fill(255, 100, 50);
    } else {
        fill(0, 150, 255);
    }
    stroke(255);
    strokeWeight(2);
    rect(editorBtnX, editorBtnY, editorBtnW, editorBtnH, 8);
    fill(255);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    if (editorMode) {
        text("✖ Выйти", editorBtnX + editorBtnW/2, editorBtnY + editorBtnH/2);
    } else {
        text("✏️ Редактор", editorBtnX + editorBtnW/2, editorBtnY + editorBtnH/2);
    }
    pop();
}

function drawEditorUI() {
    push();
    fill(0, 0, 0, 200);
    rect(10, 60, 480, 180, 10);
    fill(255);
    noStroke();
    textSize(18);
    textAlign(LEFT, TOP);
    text("ИНСТРУМЕНТЫ", 20, 70);
    
    let buttonY = 100;
    let buttonWidth = 80;
    let buttonHeight = 30;
    let spacing = 10;
    
    if (currentTool === "block") fill(0, 200, 0); else fill(100);
    rect(20, buttonY, buttonWidth, buttonHeight, 5);
    fill(255); textSize(14); textAlign(CENTER, CENTER);
    text("Блок", 20 + buttonWidth/2, buttonY + buttonHeight/2);
    
    if (currentTool === "spike") fill(200, 0, 0); else fill(100);
    rect(20 + buttonWidth + spacing, buttonY, buttonWidth, buttonHeight, 5);
    fill(255);
    text("Шип", 20 + buttonWidth + spacing + buttonWidth/2, buttonY + buttonHeight/2);
    
    if (currentTool === "portal") {
        if (portalType === "ship") fill(0, 200, 255); else fill(255, 150, 0);
    } else fill(100);
    rect(20 + (buttonWidth + spacing) * 2, buttonY, buttonWidth, buttonHeight, 5);
    fill(255);
    if (portalType === "ship") text("→Корабль", 20 + (buttonWidth + spacing) * 2 + buttonWidth/2, buttonY + buttonHeight/2);
    else text("→Куб", 20 + (buttonWidth + spacing) * 2 + buttonWidth/2, buttonY + buttonHeight/2);
    
    if (currentTool === "del") fill(255, 100, 0); else fill(100);
    rect(20 + (buttonWidth + spacing) * 3, buttonY, buttonWidth, buttonHeight, 5);
    fill(255);
    text("Удалить", 20 + (buttonWidth + spacing) * 3 + buttonWidth/2, buttonY + buttonHeight/2);
    
    buttonY = 140;
    fill(0, 100, 200); rect(20, buttonY, 80, 30, 5); fill(255); text("Сохранить", 60, buttonY + 15);
    fill(0, 200, 100); rect(110, buttonY, 80, 30, 5); fill(255); text("Тест", 150, buttonY + 15);
    fill(200, 50, 50); rect(200, buttonY, 80, 30, 5); fill(255); text("Очистить", 240, buttonY + 15);
    fill(150, 100, 200); rect(290, buttonY, 100, 30, 5); fill(255); text("Тип: " + portalType, 340, buttonY + 15);
    
    buttonY = 180;
    fill(100, 100, 100); rect(20, buttonY, 150, 30, 5); fill(255); text("🔄 Сброс уровня", 95, buttonY + 15);
    
    let scrollBarY = 220;
    let scrollBarWidth = 460;
    let scrollBarHeight = 10;
    fill(50); noStroke(); rect(20, scrollBarY, scrollBarWidth, scrollBarHeight, 5);
    let scrollPercent = -editorScrollX / 18500;
    let handleWidth = 40;
    let handleX = 20 + scrollPercent * (scrollBarWidth - handleWidth);
    fill(0, 200, 255); rect(handleX, scrollBarY, handleWidth, scrollBarHeight, 5);
    
    fill(255, 255, 255, 150); textSize(11); textAlign(LEFT, TOP);
    text("ЛКМ: ставить | ПКМ зажать+двигать: листать уровень | Стрелки: листать", 20, 240);
    
    if (showGrid) {
        stroke(255, 255, 255, 50); strokeWeight(1);
        for (let x = 0; x < width; x += 40) line(x, 0, x, height);
        for (let y = 0; y < height; y += 40) line(0, y, width, y);
    }
    pop();
}

function loadLevelFromCode() {
    blocks = [];
    for (let i = 0; i < lCode.length; i += 1) {
        if (lCode[i] == "spi") blocks.push(new spike(lCode[i + 1], lCode[i + 2]))
        if (lCode[i] == "blo") blocks.push(new block(lCode[i + 1], lCode[i + 2]))
        if (lCode[i] == "por") {
            blocks.push(new portal(lCode[i + 1], lCode[i + 2], lCode[i + 3]))
            i += 1;
        }
    }
}

function saveLevelToCode() {
    let code = "lCode = [\n";
    for (let i = 0; i < blocks.length; i++) {
        let obj = blocks[i];
        if (obj.id === "blo") code += `    "blo", ${obj.xh}, ${obj.y - 29},\n`;
        else if (obj.id === "spi") code += `    "spi", ${obj.x2}, ${obj.y - 29},\n`;
        else if (obj.id === "por") code += `    "por", ${obj.x2}, ${obj.y - 29}, "${obj.targetMode}",\n`;
    }
    code += "]\n";
    console.log(code);
    
    let saveArray = [];
    for (let i = 0; i < blocks.length; i++) {
        let obj = blocks[i];
        if (obj.id === "blo") saveArray.push("blo", obj.xh, obj.y - 29);
        else if (obj.id === "spi") saveArray.push("spi", obj.x2, obj.y - 29);
        else if (obj.id === "por") saveArray.push("por", obj.x2, obj.y - 29, obj.targetMode);
    }
    localStorage.setItem("geometryDashLevel", JSON.stringify(saveArray));
    alert("Уровень сохранен в браузере!");
    return code;
}

function resetLevelToDefault() {
    if (confirm("Вы уверены? Все ваши изменения будут удалены.")) {
        localStorage.removeItem("geometryDashLevel");
        lCode = originalLCode;
        loadLevelFromCode();
        alert("Уровень сброшен!");
    }
}

var time = 0;
var pst = 0
var placeO = 0
var placeOY = 0
var blocks = []
var mode = "block"
var modes = ["block", "spike", "del", "portal"]

// ============================================
// МЫШЬ
// ============================================
function mouseDragged() {
    if (editorMode) {
        if (mouseButton === RIGHT) return;
        if (mouseX >= 10 && mouseX <= 490 && mouseY >= 60 && mouseY <= 250) {
            editorUIClick();
            return;
        }
        editorPlace();
    } else {
        placeB()
    }
}

function mousePressed() {
    if (mouseX >= editorBtnX && mouseX <= editorBtnX + editorBtnW &&
        mouseY >= editorBtnY && mouseY <= editorBtnY + editorBtnH) {
        toggleEditorMode();
        return;
    }

    if (editorMode) {
        if (mouseButton === RIGHT) return;
        if (mouseX >= 10 && mouseX <= 490 && mouseY >= 60 && mouseY <= 250) {
            editorUIClick();
            return;
        }
        editorPlace();
    } else {
        placeB()
    }
}

function mouseClicked() {
    if (home == 10) {
        let btnW = 200;
        let btnH = 60;
        let btnX = width / 2 - btnW / 2;
        let btnY = height / 2 + 20;
        
        if (mouseX >= btnX && mouseX <= btnX + btnW &&
            mouseY >= btnY && mouseY <= btnY + btnH) {
            restartGame();
        }
    }
}

function toggleEditorMode() {
    editorMode = !editorMode;
    if (editorMode) {
        player.xR = 0;
        player.y = height - 100;
        player.yVel = 0;
        player.mode = "cube";
        player.air = true;
        editorScrollX = 0;
        home = 0;
    } else {
        player.xR = 0;
        player.y = height - 100;
        player.yVel = 0;
        player.mode = "cube";
        player.air = true;
        editorScrollX = 0;
    }
}

function editorUIClick() {
    let buttonY = 100;
    let buttonWidth = 80;
    let buttonHeight = 30;
    let spacing = 10;
    
    if (mouseY >= buttonY && mouseY <= buttonY + buttonHeight) {
        if (mouseX >= 20 && mouseX <= 20 + buttonWidth) currentTool = "block";
        else if (mouseX >= 20 + buttonWidth + spacing && mouseX <= 20 + buttonWidth + spacing + buttonWidth) currentTool = "spike";
        else if (mouseX >= 20 + (buttonWidth + spacing) * 2 && mouseX <= 20 + (buttonWidth + spacing) * 2 + buttonWidth) currentTool = "portal";
        else if (mouseX >= 20 + (buttonWidth + spacing) * 3 && mouseX <= 20 + (buttonWidth + spacing) * 3 + buttonWidth) currentTool = "del";
    }
    
    buttonY = 140;
    if (mouseY >= buttonY && mouseY <= buttonY + 30) {
        if (mouseX >= 20 && mouseX <= 100) saveLevelToCode();
        else if (mouseX >= 110 && mouseX <= 190) toggleEditorMode();
        else if (mouseX >= 200 && mouseX <= 280) { if (confirm("Очистить весь уровень?")) blocks = []; }
        else if (mouseX >= 290 && mouseX <= 390) {
            if (portalType === "ship") portalType = "cube"; else portalType = "ship";
        }
    }
    
    buttonY = 180;
    if (mouseY >= buttonY && mouseY <= buttonY + 30) {
        if (mouseX >= 20 && mouseX <= 170) resetLevelToDefault();
    }
}

function editorPlace() {
    if (!editorMode) return;
    let worldX = mouseX - editorScrollX;
    let worldY = mouseY - camY;
    let gridX = round(worldX / 40) * 40;
    let gridY = round(worldY / 40) * 40 + 29;
    
    if (currentTool === "block") blocks.push(new block(gridX, gridY - 29));
    else if (currentTool === "spike") blocks.push(new spike(gridX, gridY - 29));
    else if (currentTool === "portal") blocks.push(new portal(gridX, gridY - 29, portalType));
    else if (currentTool === "del") {
        for (let i = 0; i < blocks.length; i++) {
            if (dist(blocks[i].x, blocks[i].y, worldX, worldY) < 30) {
                blocks.splice(i, 1); i--;
            }
        }
    }
}

function placeB() {
    if (home == 1) {
        if (mouseIsPressed) {
            if (mode == "block") blocks.push(new block(mouseX + placeO, mouseY - 40 + placeOY))
            if (mode == "spike") blocks.push(new spike(mouseX + placeO, mouseY - 40 + placeOY))
            if (mode == "portal") blocks.push(new portal(mouseX + placeO, mouseY - 40 + placeOY, portalType))
            if (mode == "del") {
                for (let i = 0; i < blocks.length; i++) {
                    if (blocks[i].x > mouseX - 20 + placeO && blocks[i].x < mouseX + 20 + placeO &&
                        blocks[i].y > mouseY - 20 + placeOY && blocks[i].y < mouseY + 20 + placeOY) {
                        blocks.splice(i, 1); i--
                    }
                }
            }
        }
    }
}

// ============================================
// КЛАВИАТУРА
// ============================================
function keyPressed() {
    if (key === 'e' || key === 'E' || key === 'у' || key === 'У') {
        toggleEditorMode();
        return false;
    }
    if (editorMode) {
        if (key === '1') currentTool = "block";
        if (key === '2') currentTool = "spike";
        if (key === '3') currentTool = "portal";
        if (key === '4') currentTool = "del";
        if (keyCode === 9) {
            if (portalType === "ship") portalType = "cube"; else portalType = "ship";
            return false;
        }
        if (keyCode === LEFT_ARROW) { editorScrollX += 200; if (editorScrollX > 0) editorScrollX = 0; return false; }
        if (keyCode === RIGHT_ARROW) { editorScrollX -= 200; if (editorScrollX < -18500) editorScrollX = -18500; return false; }
        if (key === 'a' || key === 'A' || key === 'ф' || key === 'Ф') editorScrollX = 0;
        if (key === 'd' || key === 'D' || key === 'в' || key === 'В') editorScrollX = -18500;
        if (key === 's' || key === 'S' || key === 'ы' || key === 'Ы') saveLevelToCode();
        if (key === 't' || key === 'T' || key === 'е' || key === 'Е') toggleEditorMode();
        if (key === 'c' || key === 'C' || key === 'с' || key === 'С') { if (confirm("Очистить весь уровень?")) blocks = []; }
        if (key === 'g' || key === 'G' || key === 'п' || key === 'П') showGrid = !showGrid;
    }
    if (key > 0 && key <= modes.length) mode = modes[key - 1]
    if (keyCode == 9 && !editorMode) { home = 1 }
}

// ============================================
// КЛАССЫ
// ============================================
function block(x, y) {
    this.x = round(x / 40) * 40
    this.y = round(y / 40) * 40 + 29
    this.id = "blo"
    this.xh = round(x / 40) * 40
    this.size = 40

    this.show = function() {
        if (!player.dead && home == 0 && !editorMode) {
            this.x -= (player.speed / 1.4)
        }
        if (home == 1 || player.dead || editorMode) {
            this.x = this.xh;
        }

        fill(0, 0, 0)
        rectMode(CENTER)
        stroke(255)
        strokeWeight(1)
        rect(this.x, this.y, this.size)
        rect(this.x, this.y, this.size)
        rect(this.x, this.y, this.size)
        rect(this.x, this.y, this.size)
        noStroke();

        if (!editorMode) {
            let halfPlayer = player.size / 2;
            let halfBlock = this.size / 2;
            
            if (player.y > this.y - halfBlock - halfPlayer && player.y < this.y + halfBlock &&
                player.x > this.x - halfBlock && player.x < this.x + halfBlock) {
                player.y -= player.yVel;
                player.yVel = 0;
                player.air = false;
            }

            if (player.y > this.y - halfBlock && player.y < this.y + halfBlock + halfPlayer &&
                player.x > this.x - halfBlock && player.x < this.x + halfBlock) {
                player.dead = true
            }

            while (player.y > this.y - halfBlock - halfPlayer && player.y < this.y + halfBlock &&
                player.x > this.x - halfBlock && player.x < this.x + halfBlock) {
                player.y -= 0.1
            }
        }
    }
}

var sMoves = []

function spike(x, y) {
    this.x = round(x / 40) * 40
    this.x2 = round(x / 40) * 40
    this.id = "spi"
    this.y = round(y / 40) * 40 + 29
    this.size = 40

    this.show = function() {
        if (!player.dead && home == 0 && !editorMode) {
            this.x -= player.speed / 1.4
        }
        if (home == 1 || player.dead || editorMode) {
            this.x = this.x2;
        }

        fill(0, 0, 0)
        rectMode(CENTER)
        stroke(255)
        strokeWeight(1)
        triangle(this.x - this.size/2, this.y + this.size/2, this.x + this.size/2, this.y + this.size/2, this.x, this.y - this.size/2)
        triangle(this.x - this.size/2, this.y + this.size/2, this.x + this.size/2, this.y + this.size/2, this.x, this.y - this.size/2)
        noStroke()

        if (!editorMode) {
            let halfPlayer = player.size / 2;
            let halfSpike = this.size / 2;
            
            if (player.y > this.y - halfSpike && player.y < this.y + halfSpike &&
                player.x > this.x - halfSpike && player.x < this.x + halfSpike) {
                player.dead = true
            }
        }
    }
}

function portal(x, y, targetMode) {
    this.x = round(x / 40) * 40;
    this.x2 = round(x / 40) * 40;
    this.y = round(y / 40) * 40 + 29;
    this.id = "por";
    this.targetMode = targetMode;
    this.activated = false;
    this.size = 40;

    this.show = function() {
        if (!player.dead && home == 0 && !editorMode) {
            this.x -= player.speed / 1.4;
        }
        if (home == 1 || player.dead || editorMode) {
            this.x = this.x2;
        }

        noStroke();
        if (this.targetMode === "ship") fill(0, 255, 200, 150);
        else if (this.targetMode === "cube") fill(255, 100, 0, 150);
        else fill(200, 200, 200, 150);
        ellipse(this.x, this.y, this.size, this.size * 2);
        fill(255, 255, 255, 200);
        ellipse(this.x, this.y, this.size * 0.6, this.size * 1.5);
        fill(0); textSize(16); textAlign(CENTER, CENTER);
        if (this.targetMode === "ship") text("S", this.x, this.y);
        else if (this.targetMode === "cube") text("C", this.x, this.y);

        if (!editorMode) {
            let dx = player.x - this.x;
            let dy = player.y - this.y;
            if (abs(dx) < this.size * 0.6 && abs(dy) < this.size * 1.1) {
                if (!this.activated) {
                    if (player.mode !== this.targetMode) {
                        player.mode = this.targetMode;
                        player.yVel = 0;
                        if (this.targetMode === "cube") { player.air = true; player.rot = 0; }
                        if (this.targetMode === "ship") { player.air = false; }
                    }
                    this.activated = true;
                }
            } else {
                this.activated = false;
            }
        }
    }
}

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================
function bGrid() {
    stroke(0, 0, 125, 120)
    for (let i = 0 + (-player.xR / 10 % 120) - 150; i < width + (-player.xR / 10 % 120) + 150; i += 120) {
        strokeWeight(2); line(i, 0, i, height - 100)
    }
    for (let i = 0 + (-player.xR % 120) - 150; i < width + (-player.xR % 120) + 150; i += 120) {
        strokeWeight(2); line(i, height - 100, i, height)
    }
}

function gS() {
    this.x = width + 100
    this.y = height - 50 + 10 + (170 / 4) + 10
    this.s = 170
    this.f = color(0, 0, 100)
    this.show = function() {
        if (!player.dead) this.x -= (11.2 * 40) / getFrameRate();
        rectMode(CENTER); fill(this.f); noStroke()
        rect(this.x, this.y, this.s, this.s, 15)
    }
}

function eGrid() {
    stroke(0, 0, 0)
    for (let i = 0 + (-placeOY % 40) - 100 + 20 + (round(player.y / 40) * 40) - 40 - 40 - 40 - 40 - 40 - 40 - 40 - 40;
        i < height + (-placeOY % 40) + 100 + 20 + (round(player.y / 40) * 40) - 40 - 40 - 40 - 40 - 40 - 40 - 40 - 40;
        i += 40) {
        strokeWeight(2); line(0, i + 20 - 10, width, i + 20 - 10)
    }
    for (let i = 0 + (-placeO % 40) + (-player.xR % 40) - 100 + 20;
        i < width + (-placeO % 40) + (-player.xR % 40) + 100 + 20;
        i += 40) {
        strokeWeight(2)
        line(i + 20, 0 + (round(player.y / 40) * 40) - 40 - 40 - 40 - 40 - 40 - 40 - 40 - 40,
            i + 20, height + (round(player.y / 40) * 40) - 40 - 40 - 40 - 40 - 40 - 40 - 40 - 40)
    }
}