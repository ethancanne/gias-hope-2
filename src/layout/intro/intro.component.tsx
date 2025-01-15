import styles from './intro.module.scss';
import Image from 'next/image';
type Props = {
  title?: string;
  description?: string;
  headerImg?: string;
  size: 'small' | 'large';
  desktopBackgroundImg?: string;
  mobileBackgroundImg?: string;
  grayWave?: boolean;
};

const Intro = (props: Props) => {
  return (
    <div className={styles.shadowWrapper}>
      <div className={styles.wrapper}>
        <div
          className={
            styles.container +
            ' ' +
            styles[props.size] +
            ' ' +
            (props.mobileBackgroundImg ? '' : styles.noBackground)
          }
        >
          {props.desktopBackgroundImg && (
            <Image
              src={props.desktopBackgroundImg}
              alt="background"
              width={1920}
              height={680}
              className={styles.largeBackgroundImg}
            />
          )}
          {props.mobileBackgroundImg && (
            <Image
              src={props.mobileBackgroundImg}
              alt="background"
              width={1920}
              height={680}
              className={styles.smallBackgroundImg}
            />
          )}
          {props.size === 'large' && (
            <Image
              src={'/tree.png'}
              width={600}
              height={500}
              alt="tree"
              className={styles.tree}
            />
          )}

          <div className={styles.content}>
            {props.headerImg ? (
              <Image
                src={props.headerImg}
                width={500}
                height={80}
                alt="logo"
                className={styles.headerImg}
              />
            ) : (
              <h1 className={styles.headerTxt}>{props.title || 'Header'}</h1>
            )}
            <p className={styles.subText}>{props.description || 'Subtext'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
