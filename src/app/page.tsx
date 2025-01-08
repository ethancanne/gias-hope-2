import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import WhoWeAreView from '@/views/home/1-who-we-are/whoWeAre.view';
import VerseView from '@/views/home/2-verse/verse.view';
import WhoIsGiannaView from '@/views/home/3-who-is-gianna/whoIsGianna.view';
import OurVisionView from '@/views/home/4-our-vision/ourVision.view';
import HowYouCanHelpView from '@/views/home/5-how-you-can-help/how-you-can-help.view';
import UpdatesView from '@/views/home/6-updates/updates.view';
import EmailSignUpView from '@/views/home/7-email-sign-up/email-sign-up.view';

export default function Home() {
  return (
    <PageWrapper>
      <Intro
        size={'large'}
        largeBackgroundImg={'/family-2.png'}
        smallBackgroundImg={'/family-small.png'}
        headerImg="/subtext.png"
        subText="Witnessing goodness arise by shining God’s light and hope for the most broken, hurting, poor, orphaned and vulnerable ones here at home, and around the world in honor of Gianna Lilyfaith."
      />
      <WhoWeAreView />
      <VerseView />
      <WhoIsGiannaView />
      <OurVisionView />
      <HowYouCanHelpView />
      <UpdatesView />
      {/* <EmailSignUpView /> */}
    </PageWrapper>
  );
}
