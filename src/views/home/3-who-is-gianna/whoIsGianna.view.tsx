import styles from './whoIsGianna.module.scss';
import Title from '@/components/title/title.component';
import Image from 'next/image';
import Paragraph from '@/components/paragraph/paragraph.component';
import Markdown from 'react-markdown';

type Props = {
  whoIsGiannaText: string;
};
const WhoIsGiannaView = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src={'/gianna-background-large.png'}
          alt="background"
          width={1920}
          height={680}
          className={styles.largeBackgroundImg}
        />
        <Image
          src={'/gianna-background-small.png'}
          alt="background"
          width={1920}
          height={680}
          className={styles.smallBackgroundImg}
        />
        <div className={styles.content}>
          <Title title={'Who is Gianna?'} subTitle={'Brave and strong'} />
          <Paragraph>
            <Markdown>{props.whoIsGiannaText}</Markdown>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
export default WhoIsGiannaView;
