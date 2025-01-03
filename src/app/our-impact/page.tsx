import Intro from '@/layout/intro/intro.component';
import ImpactOverview from '@/views/our-impact/1-impact-overview/impact-overview.view';
import ImpactDetails from '@/views/our-impact/2-impact-details/impact-details.view';

type Props = {};
const Page = (props: Props) => {
  return (
    <div>
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
    </div>
  );
};
export default Page;
