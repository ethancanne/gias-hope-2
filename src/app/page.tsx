import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import { getPagesData, getPostsData } from '@/lib/getData';
import WhoWeAreView from '@/views/home/1-who-we-are/whoWeAre.view';
import VerseView from '@/views/home/2-verse/verse.view';
import WhoIsGiannaView from '@/views/home/3-who-is-gianna/whoIsGianna.view';
import OurVisionView from '@/views/home/4-our-vision/ourVision.view';
import HowYouCanHelpView from '@/views/home/5-how-you-can-help/how-you-can-help.view';
import UpdatesView from '@/views/home/6-updates/updates.view';

export default async function Home() {
  const homePageData = (await getPagesData('home-page')) as any;
  const whatWeDoPageData = (await getPagesData('what-we-do-page')) as any;

  const postsData = await getPostsData();

  return (
    <PageWrapper>
      <Intro
        size={'large'}
        desktopBackgroundImg={homePageData.pageInformation.desktopPageImage}
        mobileBackgroundImg={homePageData.pageInformation.mobilePageImage}
        headerImg={homePageData.pageInformation.headerImage}
        description={homePageData.pageInformation.description}
      />
      <WhoWeAreView whoWeAreData={homePageData.whoWeAreData} />
      <VerseView verseData={homePageData.verseData} />
      <WhoIsGiannaView whoIsGiannaText={homePageData.whoIsGiannaText} />
      <OurVisionView
        ourVisionText={homePageData.ourVisionText}
        visionsData={whatWeDoPageData.visionsData}
      />
      <HowYouCanHelpView howYouCanHelpData={homePageData.howYouCanHelpData} />
      <UpdatesView postsData={postsData} />
    </PageWrapper>
  );
}
