import React from 'react';
import Image from 'next/image';
import doodle from '@/assets/doodle.svg';
import { footerLinks } from '@/utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className='w-full'>
      <div className='h-24 w-full overflow-hidden md:hidden'>
        <Image src={doodle} alt='doodle pattern' objectFit='contain' />
      </div>

      <div className='relative z-50 w-full bg-primary py-10 text-sm text-f9'>
        <div className='container mx-auto w-[85%]'>
          <div className='flex justify-between'>
            <div className='hidden md:block'>
              <h1 className='text-xl font-bold text-[#e0e0e0]'>
                trackAs
                <span className='gradient-text'>One</span>
              </h1>
            </div>

            {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <h1 className='footer-h1'>{title}</h1>
                <div className='flex flex-col'>
                  {links.map(({ name, url }) => (
                    <a
                      key={name}
                      href={url || name?.split(' ').join('-').toLowerCase()}
                      target={url ? '_blank' : '_self'}
                      rel='noopener noreferrer'
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className='my-8 h-[1px] w-full bg-gray-500' />

          <div className='mx-auto flex items-center justify-center text-secondary md:justify-between'>
            <p className='mr-1 md:mr-0'>
              {process.env.NEXT_PUBLIC_VERSION ?? 'v0.0.0'}
            </p>
            <p>💛 trackAsOne © 2022</p>
            {/* <div className='flex space-x-4 text-base lg:text-xl'>
             *   {socials.map(({ Icon, link }) => (
             *     <a
             *       className='transition-colors hover:text-secondary'
             *       key={Icon.toString()}
             *       target='_blank'
             *       rel='noopener noreferrer'
             *       href={link}
             *     >
             *       <Icon />
             *     </a>
             *   ))}
             * </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
