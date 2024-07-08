'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validateEmail } from '@/lib/actions';
import { EmailSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type EmailInput = z.infer<typeof EmailSchema>;

interface EmailFormProps {
  email: string;
  setEmail: (email: string) => void;
  setEmailChecked: (checked: boolean) => void;
}

const EmailForm = ({ email, setEmail, setEmailChecked }: EmailFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<EmailInput>({
    resolver: zodResolver(EmailSchema),
    defaultValues: { email },
  });

  const validateEmailResponse = (
    isEmailValid: boolean,
    isEmailExists?: boolean,
    message?: string
  ): boolean => {
    if (!isEmailValid || isEmailExists) {
      setError('email', {
        type: 'custom',
        message:
          message ||
          'This email is already registered. Please log in or use a different email.',
      });
      return false;
    }
    return true;
  };

  const handleServerError = () => {
    setError('email', {
      type: 'custom',
      message: 'Something went wrong. Please try again.',
    });
  };

  const submitEmail = async (data: EmailInput) => {
    setLoading(true);
    try {
      const response = await validateEmail(data.email);

      const isEmailValid = response.statusCode !== 400;
      const isEmailExists = response.isEmailExists;

      if (
        validateEmailResponse(isEmailValid, isEmailExists, response.message)
      ) {
        setEmail(data.email);
        setEmailChecked(true);
      }
    } catch (error) {
      handleServerError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitEmail)} className='mt-6 w-full'>
      <div className='mb-4'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          id='email'
          className={`mt-1 ${errors?.email && 'border-red-500'}`}
          placeholder='name@example.com'
          defaultValue={email}
          {...register('email')}
        />
        {errors?.email && (
          <p className='text-red-500 text-sm'>{errors.email.message}</p>
        )}
      </div>

      <Button type='submit' className={'w-full'} disabled={loading}>
        {loading ? (
          <>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Checking email
          </>
        ) : (
          'Continue'
        )}
      </Button>
    </form>
  );
};

export default EmailForm;
