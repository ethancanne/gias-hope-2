'use client';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';

type Props = {};

import styles from './navbar.module.scss';
import Link from 'next/link';
import Button from '@/components/button/button.component';
import { useEffect, useState } from 'react';

const navigation: { name: string; href: string }[] = [
  {
    name: 'our impact',
    href: '/our-impact',
  },
  {
    name: 'what we do',
    href: '/what-we-do',
  },
  {
    name: 'our story',
    href: '/our-story',
  },
];

const NavbarLayout = (props: Props) => {
  //Create a way to see if the user has scrolled down, then make a use state for it

  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  useEffect((): (() => void) => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      const scrolled: boolean = window.scrollY > 0;
      setHasScrolledDown(scrolled);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={
          styles.container + ' ' + (hasScrolledDown && styles.withBackground)
        }
      >
        <div className={styles.left}>
          <Link href={'/'}>
            <Image
              src={'/logo.png'}
              width={150}
              height={30}
              alt="logo"
              className={styles.logo}
            />
          </Link>
          <div className={styles.navItems}>
            {navigation.map((item: { name: string; href: string }) => (
              <Link href={item.href} className={styles.link}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightButtons}>
            <Button text="donate" href={'/donate'} type="green" />
            <Button text="apply for a grant" href={'#'} type="yellow" />
          </div>
          <RxHamburgerMenu className={styles.hamburger} />
        </div>
      </div>
    </div>
  );
};
export default NavbarLayout;
