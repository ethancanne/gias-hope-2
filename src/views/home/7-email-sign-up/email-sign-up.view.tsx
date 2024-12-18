import styles from './email-sign-up.module.scss';
import { HiOutlineMail } from 'react-icons/hi';

import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import Button from '@/components/button/button.component';
import TextField from '@/components/textbox/textbox.component';
const EmailSignUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.signUpContainer}>
          <Title title={'Get Notified'} />
          <Paragraph small>
            Subscribe to our newsletter and receive updates about our ministry
            in your email inbox.
          </Paragraph>
          <TextField placeholder={'Enter your email'} />

          <Button text={'Subscribe'} href={'/'} type={'yellow'} large />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default EmailSignUp;
