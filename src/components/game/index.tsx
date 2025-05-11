// src/components/PingPong.js
import React, { useEffect, useRef, useState } from "react";

const Game = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ left: 0, right: 0 });

  const paddleHeight = 120;
  const paddleWidth = 4;
  const ballRadius = 10;

  const keysPressed = useRef({});
  const gameState = useRef({
    leftPaddleY: 110,
    rightPaddleY: 110,
    ballX: 300,
    ballY: 150,
    ballSpeedX: 3,
    ballSpeedY: 2,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Raketler
      ctx.fillStyle = "lightgreen";
      ctx.fillRect(10, gameState.current.leftPaddleY, paddleWidth, paddleHeight);
      ctx.fillRect(canvas.width - 20, gameState.current.rightPaddleY, paddleWidth, paddleHeight);

      // Top
      ctx.beginPath();
      ctx.arc(gameState.current.ballX, gameState.current.ballY, ballRadius, 0, Math.PI * 2);
      ctx.fill();

      // Skor
      ctx.font = "24px Arial";
      ctx.fillText(`${score.left} : ${score.right}`, canvas.width / 2 - 30, 30);
    };

    const update = () => {
      const state = gameState.current;

      // Raket hareketi
      if (keysPressed.current["w"] || keysPressed.current["W"]) {
        state.leftPaddleY = Math.max(0, state.leftPaddleY - 5);
      }
      if (keysPressed.current["s"] || keysPressed.current["S"]) {
        state.leftPaddleY = Math.min(canvas.height - paddleHeight, state.leftPaddleY + 5);
      }
      if (keysPressed.current["ArrowUp"]) {
        state.rightPaddleY = Math.max(0, state.rightPaddleY - 5);
      }
      if (keysPressed.current["ArrowDown"]) {
        state.rightPaddleY = Math.min(canvas.height - paddleHeight, state.rightPaddleY + 5);
      }

      // Top hareketi
      state.ballX += state.ballSpeedX;
      state.ballY += state.ballSpeedY;

      // Yukarı-aşağı sınır
      if (state.ballY < ballRadius || state.ballY > canvas.height - ballRadius) {
        state.ballSpeedY *= -1;
      }

      // Sol raket çarpışma
      if (
        state.ballX < 20 &&
        state.ballY > state.leftPaddleY &&
        state.ballY < state.leftPaddleY + paddleHeight
      ) {
        state.ballSpeedX *= -1;
      }

      // Sağ raket çarpışma
      if (
        state.ballX > canvas.width - 20 &&
        state.ballY > state.rightPaddleY &&
        state.ballY < state.rightPaddleY + paddleHeight
      ) {
        state.ballSpeedX *= -1;
      }

      // Skor
      if (state.ballX < 0) {
        setScore((s) => ({ ...s, right: s.right + 1 }));
        resetBall();
      } else if (state.ballX > canvas.width) {
        setScore((s) => ({ ...s, left: s.left + 1 }));
        resetBall();
      }
    };

    const resetBall = () => {
      gameState.current.ballX = canvas.width / 2;
      gameState.current.ballY = canvas.height / 2;
      gameState.current.ballSpeedX = 3 * (Math.random() > 0.5 ? 1 : -1);
      gameState.current.ballSpeedY = 2 * (Math.random() > 0.5 ? 1 : -1);
    };

    const gameLoop = () => {
      update();
      draw();
      requestAnimationFrame(gameLoop);
    };

    gameLoop();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      keysPressed.current[e.key] = true;
    };
    const handleKeyUp = (e) => {
      keysPressed.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  if (score.left >= 5 || score.right >= 5) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-2xl font-bold">
        <h1>{score.left >= 5 ? "Left Player Wins!" : "Right Player Wins!"}</h1>
      </div>
    );
  }
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900">
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="absolute top-0 left-0 p-4 text-white text-lg font-bold z-10">
        <h1>Ping Pong Game</h1>
        <p>Controls: W/S (Left Paddle), Up/Down (Right Paddle)</p>
      </div>
      <div className="absolute top-0 right-0 p-4 text-white text-lg font-bold z-10">
        <h1>Score</h1>
        <p>{score.left} : {score.right}</p>
    
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      className="border-2 border-white rounded-lg"
      ></canvas>
      </div>
    </div>
    </div>
  );
};

export default Game;
