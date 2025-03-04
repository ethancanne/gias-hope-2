import styles from './intro.module.scss';
import Image from 'next/image';
type Props = {
  title?: string;
  description?: string;
  backgroundImg?: string;
};

const SubPageIntro = (props: Props) => {
  return (
    <div className={styles.shadowWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {props.backgroundImg && (
            <Image
              src={props.backgroundImg}
              alt="background"
              width={1920}
              height={680}
              className={styles.backgroundImg}
            />
          )}

          <div className={styles.content}>
            <div className={styles.text}>
              <h1 className={styles.headerTxt}>{props.title || 'Header'}</h1>

              <p className={styles.subText}>{props.description || 'Subtext'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubPageIntro;
