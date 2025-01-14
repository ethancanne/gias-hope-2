import { FaFacebook, FaInstagram, FaWordpress } from 'react-icons/fa';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/button/button.component';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import TextField from '@/components/textbox/textbox.component';
import EmailSignUp from './components/email-sign-up/email-sign-up.component';
import { getPagesData } from '@/lib/getData';

type Props = {};
const Footer = async (props: Props) => {
  const navData = await getPagesData();

  const pageInformationList = Object.values(navData)
    .map((pageData: any) => {
      return pageData.data && pageData.data.pageInformation
        ? pageData.data.pageInformation
        : null;
    })
    .filter((item) => item !== null);

  return (
    <div className={styles.wrapper}>
      <EmailSignUp />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={'/tree.png'} alt={'logo'} width={120} height={100} />
          <Image src={'/logo.png'} alt={'logo'} width={170} height={30} />
        </div>

        <div className={styles.links}>
          {pageInformationList
            .sort((a: any, b: any) => a.order - b.order)
            .map((item: any, index: number) => {
              return (
                <div key={index} className={styles.link}>
                  <Link href={item.link}>{item.title}</Link>
                </div>
              );
            })}
        </div>

        <div className={styles.socials}>
          <Link href={'https://www.facebook.com/livegiagrowforeverfoundation/'}>
            <FaFacebook className={styles.icon} />
          </Link>
          <Link href={'https://www.instagram.com/livegiagrowforeverfoundation'}>
            <FaInstagram className={styles.icon} />
          </Link>
        </div>

        <div className={styles.copyright}>
          ©{new Date().getFullYear()} GIA’S Hope
        </div>
      </div>
    </div>
  );
};
export default Footer;
