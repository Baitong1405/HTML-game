const cc = document.getElementById('canvas').getContext('2d')

cc.font = "30px Arial"
const height = 400
const width = 500

const player = {
    x: 50,
    spdX: 30,
    y: 50,
    spdY: 5,
    name: "P"
}



setInterval(update, 50)

function update() {
    cc.clearRect(0, 0, width, height) // ลบอันเก่าออก
    player.x += player.spdX
    player.y += player.spdY
    cc.fillText(player.name, player.x, player.y)

    if(player.x < 0 || player.x > width) {
        player.spdX = -player.spdX    
    }

    if(player.y < 0 || player.y > height) {
        player.spdY = -player.spdY
    }
    
}
