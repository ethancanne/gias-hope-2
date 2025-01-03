import Image from 'next/image';
import styles from './story-view.module.scss';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';

type Props = {};

const StoryView = (props: Props) => {
  return (
    <div className={styles.storyContainer}>
      <div className={styles.storyBlock}>
        <div className={styles.textContainer}>
          <Title title="The Story of Our Foundation" className={styles.title} />
          <Paragraph small full className={styles.paragraph}>
            There's a mason jar sitting on our schoolroom shelf with about $12
            in it. Just a month before Gianna went to heaven, she—along with
            Tahlia and Hudson—started a Farm Fresh egg business to raise money
            for babies in China who needed surgeries and families to adopt them.
            Every time they sold a dozen eggs, they would eagerly run to place
            the money in the jar and pray for the orphans in China, asking God
            that the money would one day help.
          </Paragraph>

          <Paragraph small full className={styles.paragraph}>
            Our tiny missionaries understood that God could use their big hearts
            to change the world. The jar still sits there, but that $12 has
            multiplied in countless, unimaginable ways, even in the depths of
            our wilderness. It was Gia's hand that was the last to place money
            in the jar, and both my heart aches and rejoices as I think of how
            many lives have been touched by Gianna's big heart and her legacy of
            light. I see that jar as a visual miracle, like the loaves and fish
            that continue to be poured out from her life, pointing others
            straight to the Gospel. God has multiplied that $12 with miracles of
            new life and hope that continue to grow in honor of our tiny
            missionary.
          </Paragraph>

          <Paragraph small full className={styles.paragraph}>
            We ache deeply to have her back in our arms and will grieve forever
            until that glorious day when we hold her again on the shores of
            eternity and all that is wrong will be made right again. Living with
            her absence on earth remains the worst pain imaginable. We lean
            every day into our God who promises eternal life from death, and we
            await, with hope, the day when He will make all things new!
          </Paragraph>
        </div>
        <Image src={'/family-2.png'} alt="family" width={500} height={300} />
      </div>
    </div>
  );
};

export default StoryView;
