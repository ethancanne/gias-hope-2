import Title from '@/components/title/title.component';
import styles from './impact-overview.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';

type Props = {
  impactOverviewData: [
    {
      number: number;
      text: string;
    },
  ];
};

const ImpactOverview = (props: Props) => {
  console.log('HELP', props.impactOverviewData);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Over the past several years, God has blessed our ministry by granting us
        the humbling privilege of <br />
      </h1>
      <h1 className={styles.bold}>
        serving others and witnessing His work firsthand.
      </h1>

      <div className={styles.impactOverviewCards}>
        {props.impactOverviewData.map((data, index) => (
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
