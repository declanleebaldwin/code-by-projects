import Image from "next/image";
import { Divider, Title } from '.'

const ReachOut = () => {
  return (
    <>
      <Divider />
      <div className="flex flex-col pl-16 pr-16 pb-16">
        <Title text={'reach out'} />
        <div className="flex">
          <a className="mr-6 flex justify-center items-center h-14 w-14 hover:bg-purple-400 bg-purple-500 rounded-full cursor-pointer" href="mailto:codebyprojects2022@gmail.com">
            <div className="relative w-4/6 h-4/6">
              <Image
                objectFit="cover"
                src="/mail.svg"
                layout="fill"
                alt="mail"
              />
            </div>
          </a>
          <a className="mr-6 flex justify-center items-center h-14 w-14 hover:bg-purple-400 bg-purple-500 rounded-full cursor-pointer" href="https://discord.gg/6U3x9XUcRg" target="_blank">
            <div className="relative w-4/6 h-4/6">
              <Image
                objectFit="cover"
                src="/discord.svg"
                layout="fill"
                alt="discord"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ReachOut;
