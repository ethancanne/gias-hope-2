import Title from '@/components/title/title.component';
import styles from './impact-overview.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';

type Props = {};

const impactOverviewData = [
  {
    number: '32',
    text: 'Adoption Grants Awarded',
  },
  {
    number: '1,000',
    text: 'families served',
  },
  {
    number: '1,000',
    text: 'families served',
  },
  {
    number: '1,000',
    text: 'families served',
  },
];

const ImpactOverview = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Over the past several years, God has blessed our ministry by granting us
        the humbling privilege of{' '}
        <span className={styles.bold}>
          serving others and witnessing His work firsthand. 4-part global
          initiative
        </span>
      </h1>

      <div className={styles.impactOverviewCards}>
        {impactOverviewData.map((data, index) => (
          <div key={index} className={styles.card}>
            <h1 className={styles.number}>{data.number}</h1>
            <p className={styles.text}>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImpactOverview;
