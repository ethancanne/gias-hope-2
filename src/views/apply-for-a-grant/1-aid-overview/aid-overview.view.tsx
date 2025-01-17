'use client';
import SideBySide from '@/components/side-by-side/side-by-side.component';
import styles from './aid-overview.module.scss';
import Button from '@/components/button/button.component';
import { useState } from 'react';
import Popup from '@/components/popup/popup.component';
import GrantPopupContent from './components/grant-popup-content/grant-popup-content.component';
import Markdown from 'react-markdown';

type Props = {
  grantPageData: {
    grantSettings: {
      isOpen: boolean;
      deadline: string;
    };
    grantInformationData: {
      description: string;
      guidelines: string;
      image: string;
    };
  };
};

const AidOverview = (props: Props) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  // console.log('GRANT PAGE DATA', props.grantPageData);

  return (
    <div className={styles.wrapper}>
      <Popup
        isOpen={popupIsOpen}
        onClose={() => setPopupIsOpen(false)}
        title="Application Process"
      >
        <GrantPopupContent
          guidelines={props.grantPageData.grantInformationData.guidelines}
          deadline={props.grantPageData.grantSettings.deadline}
          setPopupIsOpen={setPopupIsOpen}
        />
      </Popup>
      <div className={styles.container}>
        <SideBySide
          mainHeader="Adoption Aid"
          image="/family-small.webp"
          content={props.grantPageData.grantInformationData.description}
          extraContent={
            props.grantPageData.grantSettings.isOpen ? (
              <>
                <Button
                  text={'Apply Now'}
                  type="yellow"
                  onClick={() => setPopupIsOpen(true)}
                  large
                />

                <div className={styles.status + ' ' + styles.open}>
                  <p>
                    Our current Adoption Aid grant application period is{' '}
                    <strong>
                      open through{' '}
                      {new Date(
                        props.grantPageData.grantSettings.deadline
                      ).toLocaleString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                      :
                    </strong>
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.status + ' ' + styles.closed}>
                <p>
                  Our current Adoption Aid grant application period is closed
                </p>
              </div>
            )
          }
        />
      </div>
    </div>
  );
};

export default AidOverview;
