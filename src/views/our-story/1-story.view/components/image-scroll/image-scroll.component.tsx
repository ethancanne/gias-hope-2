import React from 'react';
import styles from './image-scroll.module.scss';
import Image from 'next/image';
import Paragraph from '@/components/paragraph/paragraph.component';
import Title from '@/components/title/title.component';

type Props = {
  className?: string;
  images?: { src: string; alt: string }[];
};

const ImageScroll = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.images?.map((image, index) => (
        <div className={styles.imagesContainer}>
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageScroll;
