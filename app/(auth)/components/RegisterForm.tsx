'use client';

import { useState } from 'react';
import CredentialsForm from './CredentialsForm';
import EmailForm from './EmailForm';
import GoogleBtn from './GoogleBtn';

const RegisterForm = () => {
  const [email, setEmail] = useState<string>('');
  const [emailChecked, setEmailChecked] = useState<boolean>(false);
  const [emailExists, setEmailExists] = useState<boolean>(true);

  const handleBack = () => {
    setEmailChecked(false);
    setEmailExists(false);
  };

  return (
    <>
      {!emailChecked ? (
        <>
          <EmailForm
            email={email}
            setEmail={setEmail}
            setEmailChecked={setEmailChecked}
            setEmailExists={setEmailExists}
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
        !emailExists && (
          <>
            <CredentialsForm email={email} handleBack={handleBack} />
          </>
        )
      )}
    </>
  );
};

export default RegisterForm;
