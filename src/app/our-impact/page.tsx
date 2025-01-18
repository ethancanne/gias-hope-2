import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import ImpactOverview from '@/views/our-impact/1-impact-overview/impact-overview.view';
import ImpactDetails from '@/views/our-impact/2-impact-details/impact-details.view';

import { getPagesData } from '@/lib/getData';

type Props = {};

const Page = async (props: Props) => {
  const ourImpactPageData = (await getPagesData('our-impact-page')) as any;
  // console.log('OUR IMPACT PAGE DATA', ourImpactPageData);

  return (
    <PageWrapper>
      <Intro
        size={'small'}
        desktopBackgroundImg={
          ourImpactPageData.pageInformation.desktopPageImage
        }
        mobileBackgroundImg={ourImpactPageData.pageInformation.mobilePageImage}
        title={ourImpactPageData.pageInformation.title}
        description={ourImpactPageData.pageInformation.description}
      />
      <ImpactOverview impactOverviewData={ourImpactPageData.featuredData} />
      <ImpactDetails impactDetailsData={ourImpactPageData.detailsData} />
    </PageWrapper>
  );
};
export default Page;
