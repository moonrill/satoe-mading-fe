'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/lib/actions/auth';
import { LoginFormSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import GoogleBtn from '../ui/google-btn';

type Inputs = z.infer<typeof LoginFormSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<Inputs>({ resolver: zodResolver(LoginFormSchema) });

  // TODO: Handle form submittion using API
  const processData: SubmitHandler<Inputs> = async (data: Inputs) => {
    const response = await login(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(processData)} className='mt-6 w-full'>
        <div className='mb-4'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            className={`mt-1 ${errors?.email && 'border-red-500'}`}
            placeholder='name@example.com'
            {...register('email')}
          />
          {errors?.email && (
            <p className='text-red-500 text-sm mt-2'>{errors?.email.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            className='mt-1'
            {...register('password')}
          />
          {errors?.password && (
            <p className='text-red-500 text-sm mt-2'>
              {errors?.password.message}
            </p>
          )}
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
      <GoogleBtn />
    </>
  );
};

export default LoginForm;
