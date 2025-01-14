import Button from '@/components/button/button.component';
import styles from './grant-popup-content.module.scss';
import Markdown from 'react-markdown';

type Props = {
  deadline: string;
  guidelines: string;

  setPopupIsOpen: (isOpen: boolean) => void;
};

const GrantPopupContent = (props: Props) => {
  return (
    <div className={styles.container}>
      <p>
        <em>
          Our current Adoption Aid grant application period is{' '}
          <strong>
            open through{' '}
            {new Date(props.deadline).toLocaleString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </strong>
        </em>
      </p>
      <Markdown>{props.guidelines}</Markdown>

      <div className={styles.buttonContainer}>
        <Button
          text={'Open Application'}
          onClick={() => props.setPopupIsOpen(false)}
          type="yellow"
          href="/apply-for-a-grant?show-application=true"
        />
      </div>
    </div>
  );
};

export default GrantPopupContent;
