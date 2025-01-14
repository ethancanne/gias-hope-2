import React from 'react';
import styles from './side-by-side.module.scss';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Image from 'next/image';
import Paragraph from '@/components/paragraph/paragraph.component';
import Title from '@/components/title/title.component';
import Markdown from 'react-markdown';

type Props = {
  className?: string;
  mainHeader?: string;
  header?: string;
  content: string;
  extraContent?: React.ReactNode;
  image?: string;
  colored?: Boolean;
  reverse?: Boolean;
  isNotParagraph?: Boolean;
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

        {props.isNotParagraph ? (
          <div className={styles.paragraph}>
            <Markdown>{props.content}</Markdown>
          </div>
        ) : (
          <Paragraph small full className={styles.paragraph}>
            <Markdown>{props.content}</Markdown>
          </Paragraph>
        )}
        {props.extraContent && props.extraContent}
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
