import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GoogleIcon from '../../../public/google.svg';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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
          <p className='text-muted-foreground text-sm mt-1'>
            Enter your email and password below to login to your account.
          </p>
        </div>
        <form action='' className='mt-6 w-full'>
          <div className='mb-4'>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              name='email'
              id='email'
              className='mt-1'
              placeholder='name@example.com'
            />
          </div>
          <div className='mb-4'>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              name='password'
              className='mt-1'
            />
          </div>

          <Button type='submit' className='w-full'>
            Sign In
          </Button>
        </form>
        <div className='relative mt-6'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t'></span>
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Or sign in with
            </span>
          </div>
        </div>
        <Link
          href={''}
          className={
            buttonVariants({ variant: 'outline' }) + ' w-full mt-6 shadow-sm '
          }
        >
          <Image
            src={GoogleIcon}
            priority
            alt='Google Icon'
            className='w-7 h-7 mr-1'
          />
          Google
        </Link>
        <p className='mt-6 px-8 text-sm text-muted-foreground text-center'>
          By clicking Sign Up, you agree to our{' '}
          <Link
            href='/'
            className='underline underline-offset-4 hover:text-primary'
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href='/'
            className='underline underline-offset-4 hover:text-primary'
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
