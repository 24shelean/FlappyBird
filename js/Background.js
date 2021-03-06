(function () {
	//背景类
	var Background = window.Background = function () {
		this.image = game.R.bg_day;
		this.x = 0;
		this.y = 0.75 * game.canvas.height - 396;
		this.w = 288;
		this.h = 512;
		//速度
		this.speed = 1;
	}
	//更新
	Background.prototype.update = function () {
		this.x -= this.speed;
		if (this.x < -this.w) {
			this.x = 0;
		}
	}
	//渲染
	Background.prototype.render = function () {
		game.ctx.drawImage(this.image, this.x, this.y);
		game.ctx.drawImage(this.image, this.x + this.w, this.y);
		game.ctx.drawImage(this.image, this.x + this.w * 2, this.y);
		//渲染天空猫腻矩形
		game.ctx.fillStyle = "#4EC0CA"
		game.ctx.fillRect(0, 0, game.canvas.width, this.y + 1);
	}

})();