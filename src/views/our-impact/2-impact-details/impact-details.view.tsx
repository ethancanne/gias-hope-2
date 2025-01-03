import Title from '@/components/title/title.component';
import styles from './impact-details.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';
import Button from '@/components/button/button.component';

type Props = {};

const impactDetailsData = [
  {
    title:
      'Partnered with Ministries to Support Orphans and Prevent Orphanhood',
    description:
      'We have provided financial support to the Lily’s Foundation, a foster home in China dedicated to caring for children with special needs. This vital support ensures that these vulnerable orphans receive the love, care, and resources they need to thrive. \n \n Through collaborations with organizations such as HopeStation, Unity4Orphans, OpenHearts Nicaragua, Tesoros de Dios, and Open Hearts for Orphans, we have financially supported orphan-prevention care ministries. These efforts focus on preserving vulnerable families by providing medical care, education, and essential resources to meet their basic needs.',
    image: '/family-small.png',
  },
  {
    title: 'Awarded Grants to Adopting Families',
    description:
      'Over the past four years, we have awarded 32 grants to families pursuing adoption, helping make their dreams of providing a loving home to children in need a reality.',
    image: '/family-small.png',
  },
  {
    title: 'Established an Animal Therapy Farm',
    description:
      "At GIA'S Hope Farm Friends, we created an animal therapy farm to bring joy, love, and healing through God's creation. This initiative offers individuals, especially those experiencing emotional or physical challenges, an opportunity to experience nurturing care and connection with animals.",
    image: '/family-small.png',
  },
  {
    title: "Published a Children's Book to Bring Comfort",
    description:
      "We wrote a heartfelt children's book designed to comfort families grieving a loss. This resource helps minister to the hearts of both parents and children experiencing pain after a tragedy. All proceeds from book sales are donated back to the GIA'S Hope Foundation.",
    image: '/family-small.png',
    link: 'https://www.amazon.com/When-Heaven-Came-Down-Comfort/dp/1737266705',
  },
];

const ImpactDetails = (props: Props) => {
  return (
    <div className={styles.container}>
      {/* <Image
        className={styles.wave}
        src={'/wave-2.svg'}
        width={1920}
        height={1080}
        alt={'wave'}
        layout="responsive"
        objectFit="contain"
      /> */}

      <div className={styles.detailsContainer}>
        {impactDetailsData.map((data, index) => (
          <div key={index} className={styles.detail}>
            <Image
              src={data.image}
              alt={data.title}
              width={500}
              height={300}
              className={styles.image}
            />

            <div className={styles.textContainer}>
              <Title small className={styles.title}>
                {data.title}
              </Title>
              <Paragraph small className={styles.description}>
                {data.description}
              </Paragraph>
              {data.link && (
                <Button
                  href={data.link}
                  type="yellow"
                  className={styles.button}
                >
                  Learn More
                </Button>
              )}
            </div>

            <Image
              className={styles.line}
              src={'/line.svg'}
              width={500}
              height={500}
              alt={'line'}
            />
            <Image
              className={styles.line2}
              src={'/line-2.svg'}
              width={500}
              height={500}
              alt={'line'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImpactDetails;
