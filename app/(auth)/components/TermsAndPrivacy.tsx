import Link from 'next/link';

const TermsAndPrivacy = () => {
  return (
    <p className='mt-6 px-8 text-sm text-muted-foreground text-center'>
      By clicking continue, you agree to our{' '}
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
  );
};

export default TermsAndPrivacy;
