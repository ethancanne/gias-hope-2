import styles from './how-you-can-help.module.scss';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import Button from '@/components/button/button.component';
import Image from 'next/image';
import Markdown from 'react-markdown';
type Props = {
  howYouCanHelpData: {
    text: string;
    link: string;
    images: { src: string; alt: string }[];
  };
};

const HowYouCanHelpView = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Title title={'How You Can Help'} subTitle={'Donate Today'} />
          <Paragraph>
            <Markdown>{props.howYouCanHelpData.text}</Markdown>
            <br />
            <br />
            <Button
              text={'Donate'}
              href={
                'https://www.paypal.com/donate?hosted_button_id=YSWB8EJUJVX7N'
              }
              type={'yellow'}
              large
            />
          </Paragraph>
        </div>
        <div className={styles.imagesContainer}>
          {props.howYouCanHelpData.images.map(
            (image: { src: string; alt: string }, index: number) => {
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
            }
          )}
        </div>
      </div>
    </div>
  );
};
export default HowYouCanHelpView;
