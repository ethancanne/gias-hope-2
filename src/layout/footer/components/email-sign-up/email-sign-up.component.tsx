'use client';
import { useState } from 'react';
import styles from './email-sign-up.module.scss';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import Button from '@/components/button/button.component';
import { subscribeToMailchimp } from '../../../../lib/email-subscribe';

type Props = {};

const EmailSignUp = (props: Props) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for email
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      const response = await subscribeToMailchimp(email);
      setLoading(false);

      if (response.success) {
        setSubmitted(true);
        setError(null); // Reset error on success
      } else {
        setError('An error occurred while subscribing: ' + response.error);
      }
    } catch (error: any) {
      setError('An error occurred while subscribing: ' + error.message);
      console.error(
        'Error subscribing:',
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.signUpContainer}>
          <Title title={'Get Notified'} className={styles.emailTitle} />
          <Paragraph small>
            Subscribe to our newsletter and receive updates about our ministry
            in your email inbox.
          </Paragraph>

          {loading ? (
            <p>Loading...</p>
          ) : submitted ? (
            <p className={styles.successMessage}>
              {email} has been successfully subscribed!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.email}>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                className={styles.emailInput}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <Button text={'Subscribe'} type={'ghost'} htmlType="submit" />
            </form>
          )}

          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default EmailSignUp;
