import React, { useState, useEffect } from 'react';

const AnnouncementBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 2 days from now for demo
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-zinc-900 text-white py-2 px-4 text-center text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase">
      FREE DELIVERY ENDING IN {format(timeLeft.days)}D {format(timeLeft.hours)}H {format(timeLeft.minutes)}M {format(timeLeft.seconds)}S
    </div>
  );
};

export default AnnouncementBar;
