import React from 'react';
import styles from './side-by-side.module.scss';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Image from 'next/image';
import Paragraph from '@/components/paragraph/paragraph.component';
import Title from '@/components/title/title.component';

type Props = {
  className?: string;
  mainHeader?: string;
  header?: string;
  content: React.ReactNode;
  image?: string;
  colored?: Boolean;
  reverse?: Boolean;
  isParagraph?: Boolean;
};

const SideBySide = (props: Props) => {
  return (
    <div
      className={
        (props.colored ? styles.coloredContainer : styles.container) +
        ' ' +
        props.className +
        ' ' +
        (props.reverse ? styles.reverse : '') +
        ' ' +
        (!props.image ? styles.noImage : '')
      }
    >
      <div className={styles.textContainer}>
        {props.mainHeader && (
          <Title className={styles.mainHeader}>{props.mainHeader}</Title>
        )}
        {props.header && (
          <Title small className={styles.title}>
            {props.header}
          </Title>
        )}

        {props.isParagraph ? (
          <Paragraph small full className={styles.paragraph}>
            {props.content}
          </Paragraph>
        ) : (
          props.content
        )}
      </div>
      {props.image && (
        <div className={styles.imageContainer}>
          <Image
            src={props.image}
            alt="family"
            layout={'fill'}
            className={styles.image}
            objectPosition={'center'}
          />
        </div>
      )}
    </div>
  );
};

export default SideBySide;