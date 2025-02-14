import Title from '@/components/title/title.component';
import styles from './vision-details.module.scss';

import { LuHeartHandshake } from 'react-icons/lu';
import { LuHandCoins } from 'react-icons/lu';
import { LuShieldPlus } from 'react-icons/lu';
import { LuActivity } from 'react-icons/lu';

import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';
import { visionIconMapping } from '@/components/vision-button/vision-button.component';

type Props = {
  visionsData: {
    icon: string;
    title: string;
    id: string;
    backgroundImage: string;
    backgroundColor: string;
    description: string;
  }[];
};

const VisionDetails = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.visionsData.map((vision: any, key: number) => {
        const IconComponent = visionIconMapping[vision.icon] as any;

        return (
          <div
            key={key}
            className={styles.vision}
            style={{ backgroundImage: `url(${vision.backgroundImage})` }}
            id={vision.id}
            // id="CMS-vision"
          >
            <div
              className={styles.overlay}
              style={{
                backgroundColor: vision.backgroundColor,
                opacity: 0.9,
              }}
            ></div>
            <div className={styles.visionContent}>
              {IconComponent && <IconComponent className={styles.visionIcon} />}

              <Title className={styles.visionTitle}>{vision.title}</Title>
              <Paragraph className={styles.visionDescription}>
                {vision.description}
              </Paragraph>
            </div>
            {/* <div className={styles.visionImages}>
            {vision.images.map((image: any, key: number) => (
              <Image
                key={key}
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className={styles.image}
              />
            ))}
          </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default VisionDetails;
