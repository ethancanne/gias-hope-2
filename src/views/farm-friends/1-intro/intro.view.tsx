import Image from 'next/image';
import styles from './intro.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Title from '@/components/title/title.component';
const FarmFriendsIntro = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image
            src={'/farm-friends-logo.png'}
            alt={'Farm Friends'}
            width={330}
            height={330}
            objectFit="contain"
            className={styles.logo}
          />
          <Image
            src={'/tree.png'}
            alt={'Farm Friends'}
            width={500}
            height={500}
            className={styles.tree}
          />
        </div>
        <div className={styles.text}>
          <Title className={styles.title}>
            Experience Peace Through God's Creation
          </Title>
          <Paragraph className={styles.description} full>
            God gave all of us the amazing gift of His creation to bring smiles
            and joy. Come and experience the healing therapy brought through
            nature.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default FarmFriendsIntro;
