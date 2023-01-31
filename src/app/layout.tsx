import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='overflow-hidden w-full h-full relative'>
          <div className='flex h-full flex-1 flex-col md:pl-[260px]'>
            {children}
          </div>
          <div className='dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col'>
            <div className='flex h-full min-h-0 flex-col '>
              <div className='flex h-full w-full flex-1 items-start border-white/20'>
                <nav className='flex h-full flex-1 flex-col space-y-1 p-2'>
                  <a className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20'>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      stroke-width='2'
                      viewBox='0 0 24 24'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='h-4 w-4'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <line x1='12' y1='5' x2='12' y2='19'></line>
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                    </svg>
                    New chat
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
