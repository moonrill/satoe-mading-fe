import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import GoogleIcon from '../../public/google.svg';

const GoogleBtn = () => {
  return (
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
  );
};

export default GoogleBtn;
