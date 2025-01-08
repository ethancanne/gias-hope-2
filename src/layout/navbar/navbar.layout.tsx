'use client';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import { usePathname } from 'next/navigation';

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

  const pathname = usePathname();

  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect((): (() => void) => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      const scrolled: boolean = window.scrollY > 0;
      setHasScrolledDown(scrolled);
      if (scrolled) {
        setMenuIsOpen(false);
      }
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
          <div
            className={styles.navItems + ' ' + (menuIsOpen ? styles.open : '')}
          >
            {navigation.map((item: { name: string; href: string }) => (
              <Link
                href={item.href}
                className={
                  styles.link +
                  ' ' +
                  (pathname === item.href ? styles.active : '')
                }
                onClick={() => setMenuIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className={styles.mobileButtons}>
              <div className={styles.link}>
                <Button
                  text="donate"
                  href={'/donate'}
                  type="green"
                  onClick={() => setMenuIsOpen(false)}
                />
              </div>
              <div className={styles.link}>
                <Button
                  text="apply for a grant"
                  href={'#'}
                  type="yellow"
                  onClick={() => setMenuIsOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightButtons}>
            <Button text="donate" href={'/donate'} type="green" />
            <Button text="apply for a grant" href={'#'} type="yellow" />
          </div>
          {menuIsOpen ? (
            <IoIosClose
              className={styles.hamburger + ' ' + styles.close}
              onClick={() => {
                setHasScrolledDown(true);
                setMenuIsOpen(!menuIsOpen);
              }}
            />
          ) : (
            <RxHamburgerMenu
              className={styles.hamburger}
              onClick={() => {
                setHasScrolledDown(true);
                setMenuIsOpen(!menuIsOpen);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default NavbarLayout;
