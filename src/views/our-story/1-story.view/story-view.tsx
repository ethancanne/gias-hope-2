import Image from 'next/image';
import styles from './story-view.module.scss';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import SideBySideComponent from '../../../components/side-by-side/side-by-side.component';
import ImageScroll from '@/views/our-story/1-story.view/components/image-scroll/image-scroll.component';

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

const StoryView = (props: Props) => {
  return (
    <div className={styles.storyContainer}>
      {props.storyBlocks.map((block: any, index: number) => {
        return (
          <div className={styles.storyBlock} key={index}>
            <SideBySideComponent
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

export default StoryView;
