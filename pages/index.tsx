import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { FaSignInAlt } from 'react-icons/fa';

import { Layout } from '@/components';
import { Button } from '@/components/Button';
import { landingPage } from '@/utils/constants';
import { NextPageWithLayout } from 'types/page';
import { useAuth } from '@/contexts/AuthContext';

const Index: NextPageWithLayout = () => {
  const { user, signIn } = useAuth();
  const { push } = useRouter();

  return (
    <>
      <section className='mt-20 flex flex-col items-center text-center'>
        <div className='text-5xl font-semibold md:text-6xl lg:text-7xl'>
          <h1 className='mb-2 font-serif'>A Collaborative</h1>
          <h1 className='font-serif'>Task Tracker</h1>
        </div>

        <p className='my-8 max-w-[700px] md:text-lg'>{landingPage.body1}</p>

        <div className='flex space-x-4'>
          <div className='border-btn-parent group'>
            <a href='#info' className='border-btn'>
              Learn more
            </a>
          </div>

          <div className='border-btn-parent group'>
            <Button
              onClick={user ? () => push('/home') : signIn}
              className='border-btn'
              name='Get started'
              Icon={FaSignInAlt}
            />
          </div>
        </div>
      </section>

      <div className='my-24 h-1 rounded bg-primary md:my-32' />

      <section
        id='info'
        className='mx-auto max-w-screen-xl scroll-mt-32 space-y-24 pb-40 md:space-y-40'
      >
        <Info
          title='Built by a student for students.'
          body={landingPage.body2}
        />

        <Info title='Why use this task tracker?' body={landingPage.body3} />
      </section>
    </>
  );
};

Index.getLayout = (page: ReactElement) => {
  return (
    <Layout wide allowAll className='pt-28'>
      {page}
    </Layout>
  );
};

interface InfoProps {
  title: string;
  body: string;
}

const Info = ({ title, body }: InfoProps) => {
  return (
    <div className='mx-auto rounded border-[3px] border-b-[6px] border-primary bg-f9 md:w-[700px]'>
      <div className='flex h-12 items-center space-x-2 border-b-[3px] border-primary bg-primary pl-4'>
        {['bg-red-500', 'bg-amber-500', 'bg-green-500'].map((color) => (
          <i key={color} className={`${color} rounded-full p-[6px]`} />
        ))}
      </div>
      <div className='p-8 text-center md:p-16'>
        <h1 className='mb-4 font-serif text-2xl font-medium md:text-4xl'>
          {title}
        </h1>
        <p className='mt-2 text-center md:text-lg'>{body}</p>
      </div>
    </div>
  );
};

export default Index;
