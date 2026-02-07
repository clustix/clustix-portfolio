
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { LanguageContext } from '../i18n';

/**
 * МИНИ-ИГРА: "ГЛАЗ КОРОЛЕЙ"
 */
const MiniGame: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameOver'>('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });
  const [showFlash, setShowFlash] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveTarget = useCallback(() => {
    const x = Math.floor(Math.random() * 80) + 10;
    const y = Math.floor(Math.random() * 80) + 10;
    setTargetPos({ x, y });
  }, []);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(15);
    moveTarget();
  };

  useEffect(() => {
    let timer: number;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameState('gameOver');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const handleTargetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (gameState !== 'playing') return;
    
    setScore(prev => prev + 1);
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 100);
    moveTarget();
  };

  return (
    <div className="w-full max-w-2xl mx-auto border-2 border-white/10 bg-black p-8 rounded-sm relative overflow-hidden group shadow-2xl transition-all duration-500 hover:border-red-600/20">
      
      <div className="absolute top-0 right-0 p-4 mono text-[10px] text-white/20 uppercase tracking-widest select-none pointer-events-none">
        PROTOCOL: GEASS_SYNC_v4.2
      </div>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-black uppercase tracking-tighter italic select-none">
          <span className="text-red-600 animate-pulse">{t('game_title_accent')}</span>
        </h3>
        {gameState === 'playing' && (
          <div className="flex gap-8 mono font-bold text-sm tracking-widest">
            <div className={`transition-colors duration-300 ${timeLeft < 5 ? 'text-red-500 animate-pulse' : 'text-neutral-500'}`}>
              TIME: {timeLeft}s
            </div>
            <div className="text-white">SCORE: {score}</div>
          </div>
        )}
      </div>

      <div 
        ref={containerRef}
        className={`relative w-full aspect-video bg-neutral-950 border border-white/5 cursor-crosshair overflow-hidden rounded-sm transition-all duration-300 ${showFlash ? 'bg-red-950/20' : ''}`}
        onClick={() => { if(gameState === 'playing') setScore(s => Math.max(0, s - 1)) }}
      >
        {gameState === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40 backdrop-blur-sm">
            <p className="mb-6 text-neutral-400 max-w-md uppercase mono text-xs tracking-widest leading-loose">
              {t('game_start_text')}
            </p>
            <button 
              onClick={startGame}
              className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 transform active:scale-95 shadow-lg"
            >
              {t('game_start_btn')}
            </button>
          </div>
        )}

        {gameState === 'playing' && (
          <button
            onClick={handleTargetClick}
            className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{ left: `${targetPos.x}%`, top: `${targetPos.y}%` }}
            aria-label="Target"
          >
            <div className="relative group/eye">
              <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center group-hover/eye:scale-110 transition-transform duration-200">
                <div className="w-7 h-7 bg-red-600 rounded-full shadow-[0_0_30px_rgba(255,0,0,0.9)] animate-pulse" />
                <div className="absolute -inset-2 border border-red-600/30 rounded-full animate-spin-slow opacity-60" />
              </div>
            </div>
          </button>
        )}

        {gameState === 'gameOver' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/95 backdrop-blur-lg animate-in fade-in duration-500">
            <h4 className="text-5xl font-black text-white mb-2 uppercase italic tracking-tighter">{t('game_result')}: {score}</h4>
            <p className="text-neutral-500 mb-8 uppercase tracking-[0.4em] mono text-[10px]">
              {t('game_potential')}: {score > 18 ? 'S-Class' : score > 12 ? 'A-Class' : score > 6 ? 'B-Class' : 'Unstable'}
            </p>
            <button 
              onClick={startGame}
              className="px-10 py-3 border border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform active:scale-95"
            >
              {t('game_retry')}
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-6 flex justify-between items-center text-[10px] mono text-neutral-600 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>{t('game_status')}</span>
        </div>
      </div>
    </div>
  );
};

export default MiniGame;
