import styles from './verse.module.scss';
type Props = {};
const VerseView = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.verse}>
          I would have lost heart, unless I had believed that I would see the
          goodness of the LORD In the land of the living.
        </div>
        <div className={styles.reference}>Psalm 27:13</div>
      </div>
    </div>
  );
};
export default VerseView;
