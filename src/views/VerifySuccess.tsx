import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthContext from '../contexts/contextprovider';
import { Circles } from 'react-loader-spinner';

const VerifySuccess: React.FC = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { getUser } = useAuthContext();
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get('token');

    if (token) {

      localStorage.setItem('webapp_token', token);

      setTimeout(() => {

        getUser().then(() => {

          setLoading(false);
          navigate('/patient-dashboard');

        });
      }, 2000); 
    } else {

      navigate('/login');

    }
  }, [search, getUser, navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {loading ? (
        <div>
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            visible={true}
          />

          {/* <div>Verifying email...</div> */}
        </div>
      ) : null}
    </div>
  );
};


export default VerifySuccess;
