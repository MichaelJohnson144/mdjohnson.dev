import getCFDBaseURL from 'config/getCFDBaseURL';

export default function Video() {
  return (
    <video
      autoPlay
      className={'fixed inset-0 -z-10 min-h-screen w-full object-cover'}
      loop
      muted
      playsInline
    >
      <source src={getCFDBaseURL('/assets/video/silver-lake-park.mp4')} type={'video/mp4'} />
    </video>
  );
}
