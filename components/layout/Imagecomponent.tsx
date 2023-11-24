import Image from 'next/image';
import twitterprime from 'public/images/twitterprime.png';

const MyMap = () => {
  return (
    <div>
          <Image src={twitterprime} alt="My image" className="rounded-lg object-contain my-2"/>


    </div>
  );
};

export default MyMap;