import styles from './verse.module.scss';
type Props = {
  verseData: {
    text: string;
    reference: string;
  };
};
const VerseView = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.verse}>{props.verseData.text}</div>
        <div className={styles.reference}>{props.verseData.reference}</div>
      </div>
    </div>
  );
};
export default VerseView;
