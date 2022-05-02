import Image from "next/image";
import { Divider, Title  } from '.'

const Bullet = ({ text }) => {
  return (
    <div className="flex items-center mb-2">
      <div className="w-6 h-6 relative border-2 border-white border-solid rounded-full mr-4">
        <Image
          objectFit="cover"
          src="/chevron_right.svg"
          layout="fill"
          alt="chevron-right"
        />
      </div>
      <div className="text-gray-500 text-base flex-1">
        {text}
      </div>
    </div>
  )
}

const PricingSection = ({ title, bullets }) => {
  return (
    <>
      <Divider />
      <div className="flex flex-col pl-16 pr-16">
        <Title text={title} />
        {bullets.map(b => <Bullet text={b} />)}
      </div>
    </>
  );
};

export default PricingSection;
