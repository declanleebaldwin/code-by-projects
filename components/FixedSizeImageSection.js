import Image from "next/image";
import { Divider, Title } from '.'

const FixedSizeImageSection = ({ image, title, width, height }) => {
  return (
    <>
      <Divider />
      <div className="flex flex-col align-center justify-center pl-16 pr-16 pt-4 pb-4">
        <Title text={title} />
        <div className='w-full bg-gray-100 rounded-xl p-4 mt-2' >
          <div className="relative w-full h-full">
            <Image
              src={image}
              layout="responsive"
              width={width}
              height={height}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedSizeImageSection;
