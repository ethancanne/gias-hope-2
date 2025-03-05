import SideBySide from '@/components/side-by-side/side-by-side.component';
import styles from './story.module.scss';

type Props = {
  storyBlocks: {
    title?: string;
    header?: string;
    content: string;
    image?: string;
    coloredBlock?: boolean;
    reversedBlock?: boolean;
  }[];
};
const FarmFriendsStory = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.storyBlocks.map((block: any, index: number) => {
        return (
          <div className={styles.storyBlock} key={index}>
            <SideBySide
              header={block.header}
              mainHeader={block.title}
              content={block.content}
              image={block.image}
              colored={block.coloredBlock}
              reverse={block.reversedBlock}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FarmFriendsStory;
