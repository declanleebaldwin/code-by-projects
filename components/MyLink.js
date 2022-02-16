import Link from "next/link";

const MyLink = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <div className="flex">
        <div className="text-purple-500 text-base cursor-pointer relative link">
          {text}
          <span className="absolute bg-purple-500 bottom-0 left-0 w-0 h-px ease-in-out duration-150"></span>
        </div>
      </div>
    </Link>
  );
};

export default MyLink;
