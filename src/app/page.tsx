'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { useState } from 'react';

const Hero = () => {
  return (
    <div className='text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100'>
      <h1 className='text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center'>
        ChatGPT
      </h1>
      <div className='md:flex items-start text-center gap-3.5'>
        <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
          <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
            <svg
              stroke='currentColor'
              fill='none'
              stroke-width='1.5'
              viewBox='0 0 24 24'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-6 w-6'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='12' cy='12' r='5'></circle>
              <line x1='12' y1='1' x2='12' y2='3'></line>
              <line x1='12' y1='21' x2='12' y2='23'></line>
              <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
              <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
              <line x1='1' y1='12' x2='3' y2='12'></line>
              <line x1='21' y1='12' x2='23' y2='12'></line>
              <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
              <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
            </svg>
            Examples
          </h2>
          <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
            <button className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
              {'"Explain quantum computing in simple terms"→'}
            </button>
            <button className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
              {'"Got any creative ideas for a 10 year old’s birthday?"→'}
            </button>
            <button className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
              {'"How do I make an HTTP request in Javascript?"→'}
            </button>
          </ul>
        </div>
        <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
          <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              aria-hidden='true'
              className='h-6 w-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
              ></path>
            </svg>
            Capabilities
          </h2>
          <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
            <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
              Remembers what user said earlier in the conversation
            </li>
            <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
              Allows user to provide follow-up corrections
            </li>
            <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
              Trained to decline inappropriate requests
            </li>
          </ul>
        </div>
        <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
          <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
            <svg
              stroke='currentColor'
              fill='none'
              stroke-width='1.5'
              viewBox='0 0 24 24'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-6 w-6'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
              <line x1='12' y1='9' x2='12' y2='13'></line>
              <line x1='12' y1='17' x2='12.01' y2='17'></line>
            </svg>
            Limitations
          </h2>
          <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
            <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
              May occasionally generate incorrect information
            </li>
            <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
              May occasionally produce harmful instructions or biased content
            </li>
            <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
              Limited knowledge of world and events after 2021
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

type ChatProps = {
  requestMessage: string;
  responseMessage: string;
};
const Chat = ({ requestMessage, responseMessage }: ChatProps) => {
  return (
    <>
      <div className='w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group dark:bg-gray-800'>
        <div className='text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0'>
          <div className='w-[30px] flex flex-col relative items-end'>
            <div className='relative flex'>
              <span className='box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;'>
                <span className='box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;'>
                  <Image
                    width={40}
                    height={40}
                    src='/images/perfil_1080.png'
                    alt='Lucas Nhimi'
                  />
                </span>
              </span>
            </div>
          </div>
          <div className='relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]'>
            <div className='flex flex-grow flex-col gap-3'>
              <div className='min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap'>
                {requestMessage}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]'>
        <div className='text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0'>
          <div className='w-[30px] flex flex-col relative items-end'>
            <div className='relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center'>
              <svg
                width='41'
                height='41'
                viewBox='0 0 41 41'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                stroke-width='1.5'
                className='h-6 w-6'
              >
                <path
                  d='M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
          </div>
          <div className='relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]'>
            <div className='flex flex-grow flex-col gap-3'>
              <div className='min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap'>
                <p>{responseMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  const [requestMessage, setRequestMessage] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const generateResponse = async (e: any) => {
    e.preventDefault();
    setResponseMessage('');
    setLoading(true);
    // criar uma chamada api do tipo post para o endereço http://localhost:3000/api/gpt3 com objeto body com a propriedade prompt
    // o valor da propriedade prompt deve ser o valor da variável requestMessage

    const response = await fetch('/api/gpt3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: requestMessage }),
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = response.body;
    if (!data) return;

    const reader = data.getReader();
    const decoder = new TextDecoder();

    let done = false;
    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      const chunkValue = decoder.decode(value);
      setResponseMessage((prev) => prev + chunkValue);
    }
    setLoading(false);
  };

  return (
    <main className='relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1'>
      <div className='flex-1 overflow-hidden'>
        <div className='h-full dark:bg-gray-800'>
          <div className='flex flex-col items-center text-sm h-full dark:bg-gray-800'>
            {responseMessage === '' ? (
              loading ? (
                <div className='flex flex-col items-center justify-center h-full text-gray-100 font-bold'>
                  Carregando...
                </div>
              ) : (
                <Hero />
              )
            ) : (
              <Chat
                requestMessage={requestMessage}
                responseMessage={responseMessage}
              />
            )}
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient'>
        {loading ? (
          ''
        ) : (
          <form
            className='stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6'
            onSubmit={(e) => generateResponse(e)}
          >
            <div className='relative flex h-full flex-1 md:flex-col'>
              <div className='flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center'></div>
              <div className='flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'>
                <input
                  className='m-0 w-full outline-none resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0'
                  type='text'
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                ></input>
                <button className='absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'>
                  <svg
                    stroke='currentColor'
                    fill='none'
                    stroke-width='2'
                    viewBox='0 0 24 24'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='h-4 w-4 mr-1'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <line x1='22' y1='2' x2='11' y2='13'></line>
                    <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        )}

        <div className='px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6'>
          <a
            href='https://help.openai.com/en/articles/6825453-chatgpt-release-notes'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            ChatGPT Jan 30 Version
          </a>
          . Free Research Preview. Our goal is to make AI systems more natural
          and safe to interact with. Your feedback will help us improve.
        </div>
      </div>
    </main>
  );
}
