import { useEffect, useRef } from 'react';
import { baseImagePath } from '../../utility/utility';

const images = [];

for (let i = 0; i < 20; i++) {
  const filename = `icons/hotspot/ST_IconLoop_${i.toString().padStart(4, '0')}.png`;
  images.push(baseImagePath(filename));
}

const HotspotGif = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let currentFrame = 0;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const imgElements = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    const drawFrame = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        imgElements[currentFrame],
        0,
        0,
        canvas.width,
        canvas.height,
      );
      currentFrame = (currentFrame + 1) % imgElements.length;
    };

    const interval = setInterval(drawFrame, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={'80%'}
        height={'80%'}
      ></canvas>
    </div>
  );
};

export default HotspotGif;
