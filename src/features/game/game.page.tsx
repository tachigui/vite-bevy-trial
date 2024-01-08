import { Game } from './components/game';

export const GamePage = () => {
  return (
    <>
      <div className='min-h-screen'>
        <div className='flex flex-col items-center py-4 gap-4'>
          <span className='text-2xl font-bold'>Vite Bevy Trial</span>
          <Game />
        </div>
      </div>
    </>
  );
};
