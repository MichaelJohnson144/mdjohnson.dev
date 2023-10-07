import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
  return (
    <div className={'flex justify-center items-center min-h-screen'}>
      <Skeleton
        className={
          '!mt-12 !w-[358px] sm:!w-[571px] md:!w-[688px] lg:!w-[923px] xl:!w-[1178px] !h-[594px] sm:!h-[518px] md:!h-[490px] xl:!h-[462px] !bg-[#FEFDFE]/30'
        }
        variant={'rectangular'}
      />
    </div>
  );
}
