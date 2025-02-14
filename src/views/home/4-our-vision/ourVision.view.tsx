import styles from './ourVision.module.scss';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';

import Link from 'next/link';
import Markdown from 'react-markdown';
import VisionButton from '@/components/vision-button/vision-button.component';
import { visionIconMapping } from '@/components/vision-button/vision-button.component';
type Props = {
  ourVisionText: string;
  visionsData: any;
};

const OurVision = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.visionContainer}>
        <div className={styles.visionGroup}>
          {props.visionsData.slice(0, 2).map((vision: any, key: number) => {
            const IconComponent = visionIconMapping[vision.icon] as any;
            return (
              <VisionButton
                IconComponent={IconComponent}
                text={vision.title}
                id={vision.id}
                key={key}
              />
            );
          })}
        </div>

        <div className={styles.visionGroup}>
          {props.visionsData.slice(2, 4).map((vision: any, key: number) => {
            const IconComponent = visionIconMapping[vision.icon] as any;
            return (
              <VisionButton
                IconComponent={IconComponent}
                text={vision.title}
                id={vision.id}
                key={key}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.textContainer}>
        <Title title={'Our Vision'} subTitle={'Hope for the World'} />
        <Paragraph>
          <Markdown>{props.ourVisionText}</Markdown>
        </Paragraph>
      </div>
    </div>
  );
};
export default OurVision;
