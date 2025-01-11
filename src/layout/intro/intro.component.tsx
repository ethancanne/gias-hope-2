import styles from './intro.module.scss';
import Image from 'next/image';
type Props = {
  header?: string;
  subText?: string;
  headerImg?: string;
  size: 'small' | 'large';
  largeBackgroundImg?: string;
  smallBackgroundImg?: string;
  grayWave?: boolean;
};

const Intro = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container + ' ' + styles[props.size]}>
        {props.largeBackgroundImg && (
          <Image
            src={props.largeBackgroundImg}
            alt="background"
            width={1920}
            height={680}
            className={styles.largeBackgroundImg}
          />
        )}
        {props.smallBackgroundImg && (
          <Image
            src={props.smallBackgroundImg}
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
            <h1 className={styles.headerTxt}>{props.header || 'Header'}</h1>
          )}
          <p className={styles.subText}>{props.subText || 'Subtext'}</p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
