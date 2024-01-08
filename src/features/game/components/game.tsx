import init, { InitOutput } from 'bevy-app';
import { useEffect } from 'react';

export const Game = () => {
  useEffect(() => {
    init()
      .then((wasm: InitOutput) => {
        wasm.run();
      })
      .catch((error: unknown) => {
        error;
      });
  }, []);

  return <canvas id='bevy-app' />;
};
