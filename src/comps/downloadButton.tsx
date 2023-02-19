import Link from 'next/link';

const DownloadButton = () => {
  const link = process.env.API;
  
  return (
    <a className='nes-btn' href={ link ?? ""} >
      Download File
    </a>
  );
};

export default DownloadButton;