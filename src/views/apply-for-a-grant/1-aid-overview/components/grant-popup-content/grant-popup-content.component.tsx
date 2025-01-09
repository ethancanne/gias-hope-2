import Button from '@/components/button/button.component';
import styles from './grant-popup-content.module.scss';

type Props = {
  status: {
    isOpen: boolean;
    date: string;
  };
  setPopupIsOpen: (isOpen: boolean) => void;
};

const GrantPopupContent = (props: Props) => {
  return (
    <div className={styles.container}>
      <p>
        <em>
          Our current Adoption Aid grant application period is{' '}
          <strong>open through {props.status.date}</strong>
        </em>
      </p>
      <p>
        Thank you for your interest in Gia’s Hope Adoption Aid grants. We would
        be honored to be a part of your journey. Today, Gia's Hope Adoption Aid
        grants generally range between $500 and $1,000 each. For further
        inquiries, please contact{' '}
        <u>
          <a href="mailto:johanna@giashope.com">johanna@giashope.com</a>.
        </u>
      </p>

      <h3>Before you apply:</h3>

      <ul>
        <li>
          Your home study or home study update must be completed in order to
          apply.
        </li>
        <li>
          You must be in process using an agency that is a 501(c)(3) nonprofit
          organization licensed to place children for adoption.
        </li>
        <li>
          Please note: Your placement agency may differ from your home study
          provider.
        </li>
        <li>
          If you are working with an adoption consultant or using a multi-agency
          approach:
          <ul>
            <li>
              You cannot apply for a grant until you have been matched through a
              placing agency.
            </li>
            <li>
              Consulting fees will not be considered as part of the total
              adoption costs.
            </li>
          </ul>
        </li>
        {/* <li>
          Before beginning the application process, please review Gia's Hope's
          Statement of Faith.
        </li> */}
        <li>
          Applications <strong>cannot</strong> be submitted for:
          <ul>
            <li>
              Independent adoptions through lawyers, facilitators, or
              humanitarian organizations licensed to place children
            </li>
            <li>Adoptions through foster care</li>
            <li>Private family adoptions</li>
            <li>Embryo adoptions</li>
            <li>Adoptions through for-profit adoption agencies</li>
            <li>Adoptions for which placement has occurred</li>
            <li>
              Adoptions for which an application has already been submitted
            </li>
          </ul>
        </li>
      </ul>

      <h3>Notifications</h3>
      <p>
        You will receive notification of the outcome of your application by
        email.
      </p>

      <div className={styles.buttonContainer}>
        <Button
          text={'Open Application'}
          onClick={() => props.setPopupIsOpen(false)}
          type="yellow"
          href="/apply-for-a-grant?show-application=true"
        />
      </div>
    </div>
  );
};

export default GrantPopupContent;
