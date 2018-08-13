const canvas = document.getElementById("canvas")
const cc = canvas.getContext("2d")

var currY = 0
var currX = 0

var playerW = 128
var playerH = 192
var playerSpd = 5

var playerX = 0
var playerY = canvas.height/2.5

// ตั้งตัวแปรปุ่มกด
var rightPressed = false
var leftPressed = false
var upPressed = false
var downPressed = false

var img = new Image()
img.src = "img/player.png"

// controller
document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

function keyDownHandler(e) {
    if(e.keyCode == 87) {
        upPressed = true
    }
    if(e.keyCode == 83) {
        downPressed = true
    }
    if(e.keyCode == 65) {
        leftPressed = true
    }
    if(e.keyCode == 68) {
        rightPressed = true
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 87) {
        upPressed = false
        currY = 145
        currX = 0
    }
    if(e.keyCode == 83) {
        downPressed = false
        currY = 0
        currX = 0
    }
    if(e.keyCode == 65) {
        leftPressed = false
        currY = 50
        currX = 0
    }
    if(e.keyCode == 68) {
        rightPressed = false
        currY = 99
        currX = 0
    }
}

// Draw
function draw() {
    cc.clearRect(0, 0, canvas.width, canvas.height)

    if(downPressed) {
        playerY += playerSpd
        
        currY = 0
        currX += playerW/4

        if(currX >= playerW) {
        currX = 0
    }
    }
    if(leftPressed) {
        playerX -= playerSpd

        currY = 50
        currX += playerW/4

        if(currX >= playerW) {
        currX = 0
    }
    }
    if(rightPressed) {
        playerX += playerSpd

        currY = 99
        currX += playerW/4

        if(currX >= playerW) {
        currX = 0
    }
    }
    if(upPressed) {
        playerY -= playerSpd

        currY = 145
        currX += playerW/4
        
        if(currX >= playerW) {
        currX = 0
    }
    }

 // cc.drawImage(รูป, เริ่มตัดX, เริ่มตัดY, ตัดกว้าง =, ตัดสูง =, วางรูป X, วางรูป Y, ย่อ/ขยายด้านกว้าง, ย่อ/ขยายด้านสูง)
    cc.drawImage(img, currX, currY, playerW/4, playerH/4, playerX, playerY, playerW/4, playerH/4)
    requestAnimationFrame(draw)
}
draw();

//งานเมื่อไรจะเสร็จ