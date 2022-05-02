import Image from "next/image";
import { Divider } from '.'

const ImageSection = ({ image }) => {
  return (
    <>
      <Divider />
      <div className="flex align-center justify-center pl-16 pr-16">
        <div className='md:h-80 h-60 w-full bg-gray-100	rounded-xl p-4'>
          <div className="relative w-full h-full">
            <Image
              src={image}
              layout="fill"
              alt="shared-workspace"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
