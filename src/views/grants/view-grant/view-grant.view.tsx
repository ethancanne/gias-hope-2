'use client';
import Button from '@/components/button/button.component';
import styles from './view-grant.module.scss';

type Props = {
  grant: any;
  formFields: any;
  setViewingGrant: any;
};

const ViewGrant = (props: Props) => {
  return (
    <div className={styles.container}>
      <Button
        text="Back"
        type="white"
        onClick={() => props.setViewingGrant(null)}
      />
      <h2 className={styles.heading}>Grant Details</h2>
      {props.formFields.map((field: any, index: number) => {
        return (
          <div key={index} className={styles.field}>
            <p className={styles.label}>{field.label}</p>
            <p className={styles.value}>{props.grant[field.name]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewGrant;
