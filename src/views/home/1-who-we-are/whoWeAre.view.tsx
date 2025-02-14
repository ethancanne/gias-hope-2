import styles from './whoWeAre.module.scss';
import Button from '@/components/button/button.component';
import Image from 'next/image';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import Markdown from 'react-markdown';
type Props = {
  whoWeAreData: {
    text: string;
    featuredImages: {
      src: string;
      alt: string;
    }[];
  };
};

const WhoWeAreView = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title={'Who We Are'} center />
      <Paragraph center id="CMS-whoWeAre">
        <Markdown>{props.whoWeAreData.text}</Markdown>
      </Paragraph>
      <Button text={'Our Story'} href={'/our-story'} type={'yellow'} large />
      <div className={styles.imageContainer}>
        {props.whoWeAreData.featuredImages.map((image: any, index: number) => {
          return (
            <Image
              src={image.src}
              alt={image.alt}
              key={index}
              className={styles.image}
              width={300}
              height={300}
            />
          );
        })}
      </div>
    </div>
  );
};
export default WhoWeAreView;
