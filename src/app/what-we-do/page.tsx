import Intro from '@/layout/intro/intro.component';
import VisionDetails from '@/views/what-we-do/2-vision-details/vision-details.view';
import VisionOverview from '@/views/what-we-do/1-vision-overview/vision-overview.view';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import { getPagesData } from '@/lib/getData';
import SubPageIntro from '@/layout/sub-page-intro/intro.component';

type Props = {};
const Page = async (props: Props) => {
  const whatWeDoPageData = (await getPagesData('what-we-do-page')) as any;

  return (
    <PageWrapper>
      <Intro
        size={'small'}
        // backgroundImg={whatWeDoPageData.pageInformation.desktopPageImage}
        desktopBackgroundImg={whatWeDoPageData.pageInformation.desktopPageImage}
        mobileBackgroundImg={whatWeDoPageData.pageInformation.mobilePageImage}
        grayWave
        title={whatWeDoPageData.pageInformation.title}
        description={whatWeDoPageData.pageInformation.description}
      />
      <VisionOverview visionsData={whatWeDoPageData.visionsData} />
      <VisionDetails visionsData={whatWeDoPageData.visionsData} />
    </PageWrapper>
  );
};
export default Page;
