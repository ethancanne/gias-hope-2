import styles from './how-you-can-help.module.scss';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import Button from '@/components/button/button.component';
import Image from 'next/image';
type Props = {};

const images = [
  {
    src: '/how-you-can-help-1.png',
    alt: 'image',
  },
  {
    src: '/how-you-can-help-1.png',
    alt: 'image',
  },
  {
    src: '/how-you-can-help-1.png',
    alt: 'image',
  },
];
const OurVision = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Title title={'How You Can Help'} subTitle={'Donate Today'} />
          <Paragraph>
            This is a mission that we can not do alone. We need your help to
            continue to be a light and bloom life and hope for those who need it
            most. It would be a blessing if you would consider partnering with
            us in prayer and financial support <br />
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
          {images.map((image: { src: string; alt: string }, index: number) => {
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
    </div>
  );
};
export default OurVision;
