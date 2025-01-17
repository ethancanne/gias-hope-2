'use client';
import { getPagesData } from '@/lib/getData';
import styles from './grant-list.module.scss';
import { useEffect, useState } from 'react';
import ViewGrant from '../view-grant/view-grant.view';
import Loading from '@/components/loading/loading.component';

type Props = {};

const GrantList = (props: Props) => {
  const [grants, setGrants]: any = useState([]);
  const [viewingGrant, setViewingGrant]: any = useState(null);
  const [formFields, setFormFields]: any = useState(null);
  const [loading, setLoading]: any = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const grants = await fetchGrantsFromMongo();
        const data = await getPagesData('apply-for-a-grant-page');
        setLoading(false);
        setFormFields(data.grantFormFields);
        // setFormFields([{}]);

        setGrants(grants);
      } catch (error) {
        console.error('Error fetching grants:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to only run once on mount

  const onGrantClick = (grant: any) => {
    setViewingGrant(grant);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      {viewingGrant ? (
        <ViewGrant
          grant={viewingGrant}
          formFields={formFields}
          setViewingGrant={setViewingGrant}
        />
      ) : (
        <div className={styles.grantsContainer}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {grants.map((grant: any, index: number) => (
                <tr
                  key={index}
                  className={styles.submission}
                  onClick={() => onGrantClick(grant)}
                >
                  <td className={styles.value}>{grant.fullName}</td>
                  <td className={styles.value}>
                    {new Date(grant.dateCreated).toLocaleString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GrantList;
