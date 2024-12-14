import styles from './whoIsGianna.module.scss';
import Title from '@/components/title/title.component';
import Image from 'next/image';
import Paragraph from '@/components/paragraph/paragraph.component';
const WhoIsGiannaView = () => {
  return (
    <div className={styles.container}>
      <Image
        src={'/gianna-background-large.png'}
        alt="background"
        width={1920}
        height={680}
        className={styles.largeBackgroundImg}
      />
      <Image
        src={'/gianna-background-small.png'}
        alt="background"
        width={1920}
        height={680}
        className={styles.smallBackgroundImg}
      />
      <div className={styles.content}>
        <Title title={'Who is Gianna?'} subTitle={'Brave and strong'} />
        <Paragraph>
          GIA’S Hope is a 501(c)3 founded in 2019 in honor of our brave, lemon
          loving, butterfly catching, flower picking, warrior daughter Gianna
          Lilyfaith. She was adopted from China at 2 years old with a 1/2 of a
          heart but full of so much joy! On April 22, 2018, Gianna Lilyfaith
          lost her earthly battle with cardiac heart disease and went home to be
          with Jesus at 6 years old. She won her eternal inheritance.
          <br />
          <br /> We miss and love her fiercely and grieve deeply till the day we
          will reunite on the shores of eternity. Her forever life continually
          reflects the light of Jesus and teaches us to live bold and brave for
          eternal treasures. <br />
          <br /> Therefore, through the GIA’S Hope Foundation, we desire to
          share this gift and hope with others.
        </Paragraph>
      </div>

      <Image
        className={styles.wave}
        src={'/wave-2.svg'}
        width={1920}
        height={1080}
        alt={'wave'}
        layout="responsive"
        objectFit="cover"
      />
    </div>
  );
};
export default WhoIsGiannaView;
