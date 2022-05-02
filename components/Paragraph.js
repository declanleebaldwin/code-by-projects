
const Paragraph = ({ text }) => {
  const className = 'text-gray-500 text-base mb-4'
  return (
    <div className={className}>
      {text}
    </div>
  );
};

export default Paragraph;
