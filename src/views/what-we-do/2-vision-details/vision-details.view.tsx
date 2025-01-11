import Title from '@/components/title/title.component';
import styles from './vision-details.module.scss';

import { LuHeartHandshake } from 'react-icons/lu';
import { LuHandCoins } from 'react-icons/lu';
import { LuShieldPlus } from 'react-icons/lu';
import { LuActivity } from 'react-icons/lu';

import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';

type Props = {
  visionsData: {
    icon: any;
    title: string;
    id: string;
    backgroundImage: string;
    backgroundColor: string;
    description: string;
    images: {
      src: string;
      alt: string;
    }[];
  };
};

const visions = [
  {
    icon: LuActivity,
    title: 'Orphan Care',
    id: 'orphan-care',
    backgroundImage: '/vision-background.png',
    backgroundColor: 'rgba(221, 177, 177, 0.9)',
    description:
      'Proverbs 31:8 says to “Speak up for those who can not speak for themselves” and so we are passionate about caring for, and giving a voice to the most vulnerable of this world through helping to support orphans in various foster homes and orphanages, and advocating for Special Needs orphans. Every child deserves hope and a forever family!',
    images: [
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
    ],
  },
  {
    icon: LuShieldPlus,
    title: 'Orphan Prevention',
    id: 'orphan-prevention',
    backgroundImage: '/vision-background.png',
    backgroundColor: 'rgba(93, 81, 81, 0.9)',
    description:
      'We believe that every child deserves to be raised in a loving family and so we are committed to helping prevent children from becoming orphans by supporting families in crisis, providing job training, and helping to provide basic needs for families in poverty.',
    images: [
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
    ],
  },
  {
    icon: LuHandCoins,
    title: 'Adoption Aid',
    id: 'adoption-aid',
    backgroundImage: '/vision-background.png',
    backgroundColor: 'rgba(40, 104, 55, 0.9)',
    description:
      'Our Foundation was first birthed with the desire to come alongside other families who are stepping out in faith to adopt! We were very blessed to receive many grants while we were adopting and we want to pass on the blessing so that many more orphans can come home to their forever families! We open our grant application link one or two times a year (depending on funding) to apply for a grant. You can apply here.',
    images: [
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
    ],
  },
  {
    icon: LuHeartHandshake,
    title: 'Care Ministry',
    id: 'care-ministry',
    backgroundImage: '/vision-background.png',
    backgroundColor: 'rgba(142, 40, 40, 0.9)',
    description:
      "After walking our baby girl to Jesus, we experienced the deepest grief of our lives, yet we also have experienced a tangible hope like never before that has rescued us from the pit of despair. It is our desire to share this radical hope of Jesus to the most broken and hurting in our community through various tools and resources that have helped us to fight forward in faith. It is our passion to walk close to those who are walking in a valley and to shine God's light in their darkness. \n \n Some of our care ministries include home visits, letters and care packages sent to those who walk the road of grief, A mission's trip to Nicaragua to bring love to those who are broken and suffering, a newly launched local Farm Therapy ministry, and a Children's book that is in publication stage. We feel it's an honor to share Hope with others who need it because of the Hope Jesus gives us.",
    images: [
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
      {
        src: '/family-small.png',
        alt: 'Orphan Care',
      },
    ],
  },
];

const VisionDetails = (props: Props) => {
  return (
    <div className={styles.container}>
      {visions.map((vision: any, key: number) => (
        <div
          key={key}
          className={styles.vision}
          style={{ backgroundImage: `url(${vision.backgroundImage})` }}
          id={vision.id}
        >
          <div
            className={styles.overlay}
            style={{
              backgroundColor: vision.backgroundColor,
            }}
          ></div>
          <div className={styles.visionContent}>
            <vision.icon className={styles.visionIcon} />

            <Title className={styles.visionTitle}>{vision.title}</Title>
            <Paragraph className={styles.visionDescription}>
              {vision.description}
            </Paragraph>
          </div>
          <div className={styles.visionImages}>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisionDetails;
