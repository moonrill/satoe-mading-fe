import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GoogleIcon from '../../../public/google.svg';

export const metadata: Metadata = {
  title: 'Login',
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
          <p className='text-muted-foreground text-sm mt-1'>
            Please fill in the form below to create a new account.
          </p>
        </div>
        <form action={''} className='mt-6 w-full'>
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
            Create Account
          </Button>
        </form>
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

export default Register;
