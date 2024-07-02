import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createUser } from '@/lib/actions';
import { RegisterFormSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type RegisterInputs = z.infer<typeof RegisterFormSchema>;

interface CredentialsFormProps {
  email: string;
  handleBack: () => void;
}

const CredentialsForm = ({ email, handleBack }: CredentialsFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterInputs>({
    resolver: zodResolver(RegisterFormSchema),
  });

  // TODO: Handle form submission using API
  const onSubmit = async (data: RegisterInputs) => {
    setLoading(true);
    try {
      const { confirmPassword, ...formData } = { ...data, email };

      const response = await createUser(formData);

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-6 w-full'>
        <div className='mb-4'>
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            id='name'
            className='mt-1'
            placeholder='John Doe'
            {...register('name')}
          />
          {errors?.name && (
            <p className='text-red-500 text-sm'>{errors?.name?.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            className='mt-1'
            placeholder='********'
            {...register('password')}
          />
          {errors?.password && (
            <p className='text-red-500 text-sm'>{errors?.password?.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <Label htmlFor='confirm-password'>Confirm Password</Label>
          <Input
            type='password'
            id='confirm-password'
            className='mt-1'
            placeholder='********'
            {...register('confirmPassword', {
              validate: (value) =>
                value === getValues('password') || "Password doesn't match",
            })}
          />
          {errors?.confirmPassword && (
            <p className='text-red-500 text-sm'>
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>
        <Button type='submit' className='w-full' disabled={loading}>
          {loading ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Loading
            </>
          ) : (
            'Create Account'
          )}
        </Button>
      </form>
      <Button
        onClick={handleBack}
        variant={'secondary'}
        className='w-full mt-2'
      >
        Back
      </Button>
    </>
  );
};

export default CredentialsForm;
