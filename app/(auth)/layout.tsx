import Image from 'next/image';
import background from '../../public/background.jpg';
import Link from 'next/link';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen'>
      {/* Image Section */}
      <div className='hidden lg:flex w-1/2 bg-primary'>
        <Image
          src={background}
          alt='background'
          priority
          placeholder='blur'
          sizes={'50vw'}
          className='w-full h-full object-cover object-left'
        />
      </div>

      {/* Form Section */}
      <div className='relative flex flex-col w-full lg:w-1/2 items-center justify-center p-8 md:p-4'>
        <Link
          href={'/'}
          className='md:text-2xl font-semibold absolute left-5 top-5 md:left-9 md:top-8 hover:underline underline-offset-8 decoration-2'
        >
          Satoe Mading
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
