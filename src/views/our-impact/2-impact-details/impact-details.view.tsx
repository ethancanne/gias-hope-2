import Title from '@/components/title/title.component';
import styles from './impact-details.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';
import Button from '@/components/button/button.component';

type Props = {
  impactDetailsData: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
};

const ImpactDetails = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsWrapper}>
          {props.impactDetailsData.map((data, index) => (
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

              <img className={styles.line} src={'/line.svg'} alt={'line'} />
              <img className={styles.line2} src={'/line-2.svg'} alt={'line'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImpactDetails;
