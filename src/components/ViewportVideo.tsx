import React, { useRef, useEffect } from 'react';
import { useInView } from 'motion/react';

interface ViewportVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

const ViewportVideo: React.FC<ViewportVideoProps> = ({ src, className, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.3 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      className={className}
      {...props}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default ViewportVideo;
