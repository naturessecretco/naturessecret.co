import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
export interface DistortionCarouseProps {
  images: string[];
  displacmentImage?: string;
  initalIndex?: number
}

const DistortionCarousel: React.FC<DistortionCarouseProps> = ({
  displacmentImage,
  images,
}: DistortionCarouseProps) => {
  const { ref, next } = useDistortionEffectCarousel({
    images,
    displacmentImage
  });

  return (
    <div
      onClick={() => next()}
      style={{
        height: '99vh',
        opacity: 0.95
      }}
      ref={ref}
    />
  );
};

export default DistortionCarousel