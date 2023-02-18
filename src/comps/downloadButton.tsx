import Link from 'next/link';

const DownloadButton = () => {
  return (
    <Link className='nes-btn' href="/path/to/executable/file.exe" download="file.exe">
      Download File
    </Link>
  );
};

export default DownloadButton;