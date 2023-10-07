import FrontEnd from 'TechStack/FrontEnd';

export default function DescriptionList() {
  return (
    <dl className={'mt-6 flex gap-6 text-left font-medium tracking-wide text-white'}>
      <div className={'flex flex-col-reverse'}>
        <dt className={'mt-2'}>Status</dt>
        <dd className={'text-sm'}>Ongoing</dd>
      </div>
      <div className={'flex flex-col-reverse'}>
        <dt className={'mt-2'}>Technology Stack</dt>
        <dd className={'flex flex-row flex-nowrap items-center space-x-4'}>
          <FrontEnd />
        </dd>
      </div>
    </dl>
  );
}
