import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import ImpactOverview from '@/views/our-impact/1-impact-overview/impact-overview.view';
import ImpactDetails from '@/views/our-impact/2-impact-details/impact-details.view';

type Props = {};
const Page = (props: Props) => {
  return (
    <PageWrapper>
      <Intro
        size={'small'}
        largeBackgroundImg={'/family-2.png'}
        smallBackgroundImg={'/family-small.png'}
        grayWave
        header={'our impact'}
        subText={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam.'
        }
      />
      <ImpactOverview />
      <ImpactDetails />
    </PageWrapper>
  );
};
export default Page;
