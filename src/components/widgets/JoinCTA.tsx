import Image from 'next/image';
import Link from 'next/link';
import bannerWhite from '~/assets/images/box-white.png';

const JoinCTA = () => {
  return (
    <section id="joinOne" className="relative w-full">
      <div className="flex items-center justify-center py-6 px-2 md:px-6 lg:px-8 bg-amber-700 dark:bg-gray-900">
        <div className="flex flex-row  md:flex-row items-center max-w-4xl mx-auto">
          {/* Left Image */}
          <div className="mb-4 mr-5 md:mr-2 md:mr-14">
            <Image
              src={bannerWhite}
              alt="BDIG Banner"
              width={100} // Adjust width and height as per your needs
              height={100}
              className="max-w-[210px] sm:max-w-[200px] md:max-w-[500px] lg:max-w-[500px]"
            />
          </div>
          <Link href="/join">
            <h1 className="text-7xl font-bold md:text-6xl lg:text-7xl hover:underline">Join Us</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
