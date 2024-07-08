import RegisterForm from '@/components/forms/RegisterForm';
import { buttonVariants } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import TermsAndPrivacy from '../../../components/ui/terms-privacy';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Satoe Mading Login Page',
};

const Register = () => {
  return (
    <>
      <Link
        href='/login'
        className={
          buttonVariants({ variant: 'ghost', size: 'sm' }) +
          ' absolute right-4 top-4 md:right-8 md:top-8'
        }
      >
        Sign In
      </Link>
      <div className='w-full sm:w-[400px]'>
        <div className='text-center'>
          <h2>Create a new account</h2>
          <p className='text-muted-foreground text-sm'>
            Enter your email below to create your account.
          </p>
        </div>
        <RegisterForm />
        <TermsAndPrivacy />
      </div>
    </>
  );
};

export default Register;
