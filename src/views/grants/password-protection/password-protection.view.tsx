import { useState } from 'react';
import styles from './password-protection.module.scss';
import Button from '@/components/button/button.component';

type Props = {
  onAuthenticated: () => void;
};

const PasswordProtection = ({ onAuthenticated }: Props) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_PAGE_PASSWORD) {
      onAuthenticated();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Password Protected Page</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
          />
          <Button htmlType="submit" type="yellow" className={styles.submit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection;
