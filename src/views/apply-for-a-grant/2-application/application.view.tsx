'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './application.module.scss';
import Title from '@/components/title/title.component';
import Button from '@/components/button/button.component';
import { useState, useEffect } from 'react';
import Loading from '@/components/loading/loading.component';
import { submitFormToMongo } from '@/lib/submitDataToMongo';

type Props = {
  grantFormFields: {
    name: string;
    type: string;
    required: boolean;
    label: string;
  }[];
};

const Application = (props: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const onSubmit: SubmitHandler<any> = async (data) => {
    // console.log(data);

    setLoading(true);

    // Call the Server Action to submit the form data to MongoDB
    const result = await submitFormToMongo(data);
    setLoading(false);

    if (result.success) {
      localStorage.removeItem('adoptionFormData');
      localStorage.setItem('adoptionFormSubmitted', JSON.stringify(true));
      setFormSubmitted(true);
    } else {
      console.error(result.error);
    }
  };

  useEffect(() => {
    localStorage.setItem('adoptionFormData', JSON.stringify(watchedValues));
  }, [watchedValues]);

  if (loading) {
    return <Loading message="Submitting application..." />;
  }

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
          {props.grantFormFields.map((field, index) => (
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
              )}
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
