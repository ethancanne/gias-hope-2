import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import { getPagesData } from '@/lib/getData';
import StoryView from '@/views/our-story/1-story.view/story-view';

type Props = {};
const Page = async (props: Props) => {
  const ourStoryPageData = (await getPagesData('our-story-page')) as any;
  return (
    <PageWrapper>
      <Intro
        size={'small'}
        desktopBackgroundImg={ourStoryPageData.pageInformation.desktopPageImage}
        mobileBackgroundImg={ourStoryPageData.pageInformation.mobilePageImage}
        title={ourStoryPageData.pageInformation.title}
        description={ourStoryPageData.pageInformation.description}
      />

      <StoryView storyBlocks={ourStoryPageData.storyBlocks} />
    </PageWrapper>
  );
};
export default Page;
