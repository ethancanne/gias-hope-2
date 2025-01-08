import Intro from '@/layout/intro/intro.component';
import VisionDetails from '@/views/what-we-do/2-vision-details/vision-details.view';
import VisionOverview from '@/views/what-we-do/1-vision-overview/vision-overview.view';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';

type Props = {};
const Page = (props: Props) => {
  return (
    <PageWrapper>
      <Intro
        size={'small'}
        largeBackgroundImg={'/family-2.png'}
        smallBackgroundImg={'/family-small.png'}
        header={'What we do'}
        subText={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam.'
        }
      />
      <VisionOverview />
      <VisionDetails />
    </PageWrapper>
  );
};
export default Page;
