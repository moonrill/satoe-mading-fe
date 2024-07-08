'use client';

import { useState } from 'react';
import GoogleBtn from '../ui/google-btn';
import CredentialsForm from './CredentialsForm';
import EmailForm from './EmailForm';

const RegisterForm = () => {
  const [email, setEmail] = useState<string>('');
  const [emailChecked, setEmailChecked] = useState<boolean>(false);

  const handleBack = () => {
    setEmailChecked(false);
  };

  return (
    <>
      {!emailChecked ? (
        <>
          <EmailForm
            email={email}
            setEmail={setEmail}
            setEmailChecked={setEmailChecked}
          />
          <div className='relative mt-6'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t'></span>
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>
                Or sign up with
              </span>
            </div>
          </div>
          <GoogleBtn />
        </>
      ) : (
        <CredentialsForm email={email} handleBack={handleBack} />
      )}
    </>
  );
};

export default RegisterForm;
