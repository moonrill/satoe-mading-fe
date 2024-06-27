import { buttonVariants } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import LoginForm from '../components/LoginForm';
import TermsAndPrivacy from '../components/TermsAndPrivacy';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Satoe Mading Login Page',
};

const Login = () => {
  return (
    <>
      <Link
        href='/register'
        className={
          buttonVariants({ variant: 'ghost', size: 'sm' }) +
          ' absolute right-4 top-4 md:right-8 md:top-8'
        }
      >
        Sign Up
      </Link>
      <div className='w-full sm:w-[400px]'>
        <div className='text-center'>
          <h2>Sign In</h2>
          <p className='text-muted-foreground text-sm'>
            Enter your email and password below to login to your account.
          </p>
        </div>
        <LoginForm />
        <TermsAndPrivacy />
      </div>
    </>
  );
};

export default Login;
