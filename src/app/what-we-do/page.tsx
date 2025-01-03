import Intro from '@/layout/intro/intro.component';
import VisionDetails from '@/views/what-we-do/2-vision-details/vision-details.view';
import VisionOverview from '@/views/what-we-do/1-vision-overview/vision-overview.view';

type Props = {};
const Page = (props: Props) => {
  return (
    <div>
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
    </div>
  );
};
export default Page;
