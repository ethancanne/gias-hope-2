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
import { getPagesData } from '@/lib/getData';

const NavbarLayout = (props: Props) => {
  const pathname = usePathname();

  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [useWhiteText, setUseWhiteText] = useState(false);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [navigationData, setNavigationData]: any = useState([]);

  const whiteTextChecker =
    pathname === '/posts' ||
    pathname == '/apply-for-a-grant' ||
    pathname == '/farm-friends';

  useEffect((): (() => void) => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      const scrolled: boolean = window.scrollY > 0;
      setHasScrolledDown(scrolled);
      if (whiteTextChecker) {
        setUseWhiteText(!scrolled);
      } else {
        setUseWhiteText(false);
      }
      if (scrolled) {
        setMenuIsOpen(false);
      }
    };

    if (whiteTextChecker) {
      setUseWhiteText(true);
    } else {
      setUseWhiteText(false);
    }

    window.addEventListener('scroll', handleScroll);

    //get navigation data

    const fetchNavigationData = async () => {
      const NavData = await getPagesData();

      const pageInformationList = Object.values(NavData)
        .map((pageData: any) => {
          return pageData.data && pageData.data.pageInformation
            ? pageData.data.pageInformation
            : null;
        })
        .filter((item) => item !== null);

      setNavigationData(pageInformationList);
    };

    fetchNavigationData();

    // Cleanup function to remove the event listener
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname.toString()]);

  if (!navigationData) {
    return null;
  }

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
              src={useWhiteText ? '/white-logo.png' : '/logo.png'}
              width={150}
              height={30}
              alt="logo"
              className={styles.logo}
            />
          </Link>
          <div
            className={styles.navItems + ' ' + (menuIsOpen ? styles.open : '')}
          >
            {navigationData
              .filter((item: any) => !item.isHidden)
              .sort((a: any, b: any) => a.order - b.order)
              .map((item: any, key: number) => (
                <Link
                  href={item.link}
                  key={key}
                  className={
                    styles.link +
                    ' ' +
                    (useWhiteText && styles.whiteText) +
                    ' ' +
                    (pathname === item.link ? styles.active : '')
                  }
                  onClick={() => {
                    setUseWhiteText(false);
                    setHasScrolledDown(false);
                    setMenuIsOpen(false);
                  }}
                >
                  {item.title}
                </Link>
              ))}
            <div className={styles.mobileButtons}>
              {navigationData
                .filter((item: any) => item.hasButton)
                .sort((a: any, b: any) => a.order - b.order)
                .map((item: any, key: number) => (
                  <div className={styles.link} key={key}>
                    <Button
                      text={item.title}
                      href={item.link}
                      type={item.buttonType}
                      onClick={() => {
                        setUseWhiteText(false);
                        setHasScrolledDown(false);

                        setMenuIsOpen(false);
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightButtons}>
            {navigationData
              .filter((item: any) => item.hasButton)
              .sort((a: any, b: any) => a.order - b.order)

              .map((item: any, key: number) => (
                <Button
                  key={key}
                  text={item.title}
                  href={item.link}
                  type={item.buttonType}
                  onClick={() => {
                    setUseWhiteText(false);
                    setHasScrolledDown(false);
                    setMenuIsOpen(false);
                  }}
                />
              ))}
          </div>
          {menuIsOpen ? (
            <IoIosClose
              className={styles.hamburger + ' ' + styles.close}
              onClick={() => {
                setHasScrolledDown(true);
                setMenuIsOpen(!menuIsOpen);
                setUseWhiteText(!menuIsOpen);
              }}
            />
          ) : (
            <RxHamburgerMenu
              className={styles.hamburger}
              color={useWhiteText ? 'white' : '#5a664f'}
              size={20}
              onClick={() => {
                setHasScrolledDown(true);
                setMenuIsOpen(!menuIsOpen);
                setUseWhiteText(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default NavbarLayout;
