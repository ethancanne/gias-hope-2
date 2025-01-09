import { FaFacebook, FaInstagram, FaWordpress } from 'react-icons/fa';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/button/button.component';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import TextField from '@/components/textbox/textbox.component';

type Props = {};
const Footer = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.emailWrapper}>
        <div className={styles.emailSignUpContainer}>
          <div className={styles.signUpContainer}>
            <Title title={'Get Notified'} className={styles.emailTitle} />
            <Paragraph small>
              Subscribe to our newsletter and receive updates about our ministry
              in your email inbox.
            </Paragraph>
            <div className={styles.email}>
              {/* //TODO Mailchimp add email */}
              <TextField placeholder={'Enter your email'} />
              <Button text={'Subscribe'} href={'/'} type={'ghost'} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={'/tree.png'} alt={'logo'} width={120} height={100} />
          <Image src={'/logo.png'} alt={'logo'} width={170} height={30} />
        </div>

        <div className={styles.links}>
          <div className={styles.link}>
            <Link href={'/'}>home</Link>
          </div>
          <div className={styles.link}>
            <Link href={'/our-story'}>our story</Link>
          </div>
          <div className={styles.link}>
            <Link href={'/our-vision'}>our vision</Link>
          </div>
          <div className={styles.link}>
            <Link href={'/our-impact'}>our impact</Link>
          </div>
          <div className={styles.link}>
            <Link
              href={
                'https://www.paypal.com/donate?hosted_button_id=YSWB8EJUJVX7N'
              }
            >
              donate
            </Link>
          </div>
          <div className={styles.link}>
            <Link href={'/our-impact'}>apply for a grant</Link>
          </div>
        </div>

        <div className={styles.socials}>
          <Link href={'https://www.facebook.com/giashope'}>
            <FaFacebook className={styles.icon} />
          </Link>
          <Link href={'https://www.facebook.com/giashope'}>
            <FaInstagram className={styles.icon} />
          </Link>
          <Link href={'https://www.facebook.com/giashope'}>
            <FaWordpress className={styles.icon} />
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
