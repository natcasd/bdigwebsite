import Image from 'next/image';
import { HeroProps } from '~/shared/types';

const Hero = ({ title, subtitle, image }: HeroProps) => {
  return (
    <section id="heroOne" className="relative h-[70vh] w-full">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            className="object-cover object-[50%] h-full w-full"
            src={image.src}
            alt={image.alt}
            layout="fill" // Make the image cover the entire section
            priority
            placeholder="blur"
          />
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}
      {/* Text Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        {title && <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">{title}</h1>}
        {subtitle && <p className="mt-4 text-xl font-medium text-gray-300 md:text-2xl lg:text-3xl">{subtitle}</p>}
      </div>
    </section>
  );
};

export default Hero;
