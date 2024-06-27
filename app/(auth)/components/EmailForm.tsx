import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { checkEmail } from '@/lib/actions';
import { emailSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type EmailInput = z.infer<typeof emailSchema>;

interface EmailFormProps {
  setEmail: (email: string) => void;
  setEmailChecked: (checked: boolean) => void;
  setEmailExists: (exists: boolean) => void;
}

const EmailForm = ({
  setEmail,
  setEmailChecked,
  setEmailExists,
}: EmailFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<EmailInput>({
    resolver: zodResolver(emailSchema),
  });

  const submitEmail = async (data: EmailInput) => {
    setLoading(true);
    try {
      const emailExists = await checkEmail(data.email);
      setEmailExists(emailExists);

      if (!emailExists) {
        setEmail(data.email);
        setEmailChecked(true);
      } else {
        setError('email', {
          type: 'manual',
          message: 'Email already exists. Please use a different email.',
        });
      }
    } catch (error) {
      console.log(error);
      setError('email', {
        type: 'manual',
        message: 'Failed to check email. Please try again later.',
      });
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
