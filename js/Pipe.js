(function () {
		var Pipe = window.Pipe = function () {
			this.imageDown = game.R["pipe_down"];
			this.imageUp = game.R["pipe_up"];

			//管子的位置，是屏幕的最右边
			this.x = game.canvas.width;

			//上面管子的高度
			this.height1 = 100 + parseInt(Math.random() * 221);
			//间隙
			this.interspace = 160;
			this.height2 = game.canvas.height * 0.78 - this.interspace - this.height1;
			this.alreadyPass = false;
			game.pipeArr.push(this);
		}
		Pipe.prototype.update = function () {
			this.x -= 2;
			//碰撞检测
			if (game.bird.R > this.x && game.bird.L < this.x + 52) {
				if (game.bird.T < this.height1 || game.bird.B > this.height1 + this.interspace) {
					//死亡就进入场景4
					game.sm.enter(4);
				}
			}
			//加分
			if (game.bird.R > this.x + 52 && !this.alreadyPass) {
				//顺利通过了
				game.score++;
				//标记为已经通过了
				this.alreadyPass = true;
			}
			for (var i = 0; i < game.pipeArr.length; i++) {
				if (game.pipeArr[i] === this) {
					game.pipeArr.splice(i, 1);
				}
			}
		}
	}
	Pipe.prototype.render = function () {
		game.ctx.drawImage(this.imageDown, 0, 320 - this.height1, 52, this.height1, this.x, 0, 52, this.height1);
		game.ctx.drawImage(this.imageUp, 0, 0, 52, this.height2, this.x, this.height1 + this.interspace, 52, this.height2);
	}
});