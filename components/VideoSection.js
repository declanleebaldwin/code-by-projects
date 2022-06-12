import { Divider } from '.'

const VideoSection = ({ video }) => {
  return (
    <>
      <Divider />
      <div className='w-full pl-16 pr-16'>
        <video className="w-full rounded-xl" src={video} autoPlay muted loop></video>
      </div>
    </>
  );
};

export default VideoSection;
