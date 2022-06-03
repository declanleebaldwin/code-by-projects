
const BulletedParagraph = ({ text }) => {
  const className = 'text-gray-500 text-base mb-4 flex-1'
  return (
    <div className="flex mb-2">
      <div className="w-12 flex">
        <span className="mt-4 h-2 w-2 rounded-full bg-gray-500"></span>
      </div>
      <div className={className}>
        {text}
      </div>
    </div>
  );
};

export default BulletedParagraph;
