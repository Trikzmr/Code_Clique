import React, { useEffect, useState } from 'react';

const colorClasses = [
  'border-red-500', 'border-green-500', 'border-blue-500',
  'border-yellow-400', 'border-pink-500', 'border-purple-500',
  'border-orange-500', 'border-cyan-500', 'border-lime-500'
];

const Loading = () => {
  const [color, setColor] = useState('border-red-500');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
      setColor(randomColor);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed items-center justify-center z-50 left-50 top-50 ">
      <div className={`w-40 h-40 border-8 border-t-transparent rounded-full animate-spin ${color}`}></div>
    </div>
  );
};

export default Loading;
