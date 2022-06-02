import Image from "next/image";
import { useRouter } from 'next/router'

const ProjectCard = ({ imageSrc, imageAlt, title, desc, href }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href)
  }

  return (
    <div onClick={onClick} className="bg-gray-600 hover:bg-gray-400 ease-in-out duration-150 p-6 rounded cursor-pointer">
      <div className="w-[15rem] h-[15rem] relative rounded overflow-hidden mb-6">
        <Image objectFit="cover" src={imageSrc} layout="fill" alt={imageAlt} />
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-xl tracking-wider mb-2">{title}</div>
        <div className="text-gray-500 text-sm">{desc}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
