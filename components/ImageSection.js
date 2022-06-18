import Image from "next/image";
import { Divider } from '.'

const ImageSection = ({ image, padding = true }) => {
  const className = `md:h-80 h-60 w-full bg-gray-100	rounded-xl ${padding ? 'p-4' : ''}`
  return (
    <>
      <Divider />
      <div className="flex align-center justify-center pl-16 pr-16 pt-4 pb-4">
        <div className={className}>
          <div className="relative w-full h-full rounded-xl overflow-hidden">
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
