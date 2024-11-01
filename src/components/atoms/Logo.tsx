'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import logo from '~/assets/images/bdig_logo_2.png';
import logodark from '~/assets/images/bdig_logo_2dark2.png';
const Logo = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // <span className="ml-2 self-center whitespace-nowrap text-2xl font-extrabold text-gray-900 dark:text-white md:text-xl">
  //   BDIG
  // </span>
  return (
    <>
      {currentTheme === 'dark' ? (
        <Image src={logodark} alt="logo" width={200} />
      ) : (
        <Image src={logo} alt="logo" width={200} />
      )}
    </>
  );
};

export default Logo;
