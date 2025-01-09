'use client';
import SideBySide from '@/components/side-by-side/side-by-side.component';
import styles from './aid-overview.module.scss';
import Button from '@/components/button/button.component';
import { useState } from 'react';
import Popup from '@/components/popup/popup.component';
import GrantPopupContent from './components/grant-popup-content/grant-popup-content.component';

type Props = {};

const status = {
  isOpen: true,
  date: 'March 31, 2025',
};
const AidOverview = (props: Props) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Popup
        isOpen={popupIsOpen}
        onClose={() => setPopupIsOpen(false)}
        title="Application Process"
      >
        <GrantPopupContent status={status} setPopupIsOpen={setPopupIsOpen} />
      </Popup>
      <div className={styles.container}>
        <SideBySide
          mainHeader="Adoption Aid"
          image="/family-small.png"
          content={
            <>
              <p>
                One of the major challenges preventing waiting children from
                finding families is the high cost of adoption. Our grants help
                reduce this financial barrier, contributing to the placement of
                over 32 children into loving, secure homes.
              </p>
              <p>
                Each adoption story beautifully mirrors God’s work in our
                lives—a testament to faith, redemption, and hope. We would be
                thrilled to join you in rejoicing and praying for you and your
                waiting children.
              </p>
              <p>
                Thank you for being part of the adoption miracle and for helping
                us honor the lasting light and legacy of our brave Gianna.
              </p>

              {status.isOpen ? (
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
                      <strong>open through {status.date}</strong>
                    </p>
                  </div>
                </>
              ) : (
                <div className={styles.status + ' ' + styles.closed}>
                  <p>
                    Our current Adoption Aid grant application period is closed
                  </p>
                </div>
              )}
            </>
          }
        />
      </div>
    </div>
  );
};

export default AidOverview;
