import styles from './whoWeAre.module.scss';
import Button from '@/components/button/button.component';
import Image from 'next/image';
import Title from '@/components/title/title.component';
type Props = {};

const images = [
  {
    src: '/family-small.png',
    alt: 'tree',
  },
  {
    src: '/family-small.png',
    alt: 'tree',
  },
  {
    src: '/family-small.png',
    alt: 'tree',
  },
  {
    src: '/family-small.png',
    alt: 'tree',
  },
  {
    src: '/family-small.png',
    alt: 'tree',
  },
  {
    src: '/family-small.png',
    alt: 'tree',
  },
  {
    src: '/family-small.png',
    alt: 'tree',
  },
];
const WhoWeAreView = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title={'Who We Are'} />
      <p className={styles.text}>
        We are a family commissioned to plant God’s seed of love so that
        abundant life can grow and hope can bloom through the four branches of
        orphan care, orphan prevention, adoption aid and care ministry for the
        most hurting and broken, where we have seen God’s goodness arising and
        hope shining.
      </p>
      <Button text={'Our Story'} href={'/our-story'} type={'yellow'} large />
      <div className={styles.imageContainer}>
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
  );
};
export default WhoWeAreView;
