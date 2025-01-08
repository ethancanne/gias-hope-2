import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import StoryView from '@/views/our-story/1-story.view/story-view';

type Props = {};
const Page = (props: Props) => {
  return (
    <PageWrapper>
      <Intro
        size={'small'}
        largeBackgroundImg={'/family-2.png'}
        smallBackgroundImg={'/family-small.png'}
        header={'our story'}
        subText={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam.'
        }
      />

      <StoryView />
    </PageWrapper>
  );
};
export default Page;
