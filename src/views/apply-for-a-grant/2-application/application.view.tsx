'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './application.module.scss';
import Title from '@/components/title/title.component';
import Button from '@/components/button/button.component';
import { useEffect, useState } from 'react';

type Props = {};

const Application = (props: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const formFields = [
    { name: 'email', label: 'Email *', type: 'email', required: true },
    {
      name: 'fullName',
      label: 'What is your full name? *',
      type: 'text',
      required: true,
    },
    {
      name: 'phoneNumber',
      label: 'What is your phone number?',
      type: 'tel',
      required: false,
    },
    {
      name: 'socialProfile',
      label: 'Please provide a link to your Facebook and/or Instagram profile.',
      type: 'url',
      required: false,
    },
    {
      name: 'agency',
      label: 'What agency are you with for this adoption? *',
      type: 'text',
      required: true,
    },
    {
      name: 'adoptionStage',
      label: 'What stage of adoption are you currently in? *',
      type: 'text',
      required: true,
    },
    {
      name: 'estimatedTime',
      label: 'Estimated time until travel and/or Gotcha day *',
      type: 'text',
      required: true,
    },
    {
      name: 'moneyRaised',
      label: 'How much money have you raised for this adoption so far? *',
      type: 'number',
      required: true,
    },
    {
      name: 'fundraisingMethods',
      label:
        'Please briefly explain the primary way(s) that you have raised money thus far?',
      type: 'text',
      required: false,
    },
    {
      name: 'moneyLeft',
      label: 'How much money do you have left to raise? *',
      type: 'number',
      required: true,
    },
    {
      name: 'webpages',
      label:
        'Add link to relatable webpages (ie fundraising page, blog, family page, etc.)',
      type: 'url',
      required: false,
    },
    {
      name: 'adoptionStory',
      label: 'What’s your adoption story in 750 words or less? *',
      type: 'textarea',
      required: true,
    },
  ];

  const watchedValues = watch();

  useEffect(() => {
    const formSubmitted = localStorage.getItem('adoptionFormSubmitted');
    if (formSubmitted) {
      setFormSubmitted(true);
    }
    const savedData = localStorage.getItem('adoptionFormData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      for (const key in parsedData) {
        setValue(key, parsedData[key]);
      }
    }
  }, [setValue]);

  const onSubmit = (data: any) => {
    console.log(data);
    localStorage.removeItem('adoptionFormData');
    localStorage.setItem('adoptionFormSubmitted', JSON.stringify(true));
    setFormSubmitted(true);
  };

  useEffect(() => {
    localStorage.setItem('adoptionFormData', JSON.stringify(watchedValues));
  }, [watchedValues]);

  return (
    <div className={styles.container}>
      <Title className={styles.title}>
        Live Gia Grow Forever <br />
        Adoption Grant Application
      </Title>

      {formSubmitted ? (
        <p className={styles.successMessage}>
          Thank you for applying to the Live Gia Grow Forever Grant. We will
          reach out to you when a decision has been made.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {formFields.map((field, index) => (
            <div key={index}>
              <label>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  {...register(field.name, {
                    required: field.required
                      ? `${field.label} is required`
                      : false,
                  })}
                />
              ) : (
                <input
                  type={field.type}
                  {...register(field.name, {
                    required: field.required
                      ? `${field.label} is required`
                      : false,
                  })}
                />
              )}
              {errors[field.name] && (
                <p>{(errors[field.name] as any).message}</p>
              )}{' '}
            </div>
          ))}
          <Button htmlType="submit" type="yellow">
            Submit application
          </Button>
        </form>
      )}
    </div>
  );
};

export default Application;
