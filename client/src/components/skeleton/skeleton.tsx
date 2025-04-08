import { Skeleton } from "@/components/ui/skeleton";

//******** INPUT **********/
export function SkeletonInput() {
  return <Skeleton className="w-[200px] h-11 border border-input rounded-md" />;
}

//******** CHAT UNSELECTED **********/
export function SkeletonChatUnselected() {
  return (
    <div className="bg-muted flex flex-col gap-6 xl:gap-12 justify-center items-center grow h-full p-2 pl-2 xl:p-2 xl:pl-0 xl:flex-row">
      <Skeleton className="h-[300px] w-[300px] rounded-full bg-muted-foreground" />
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-6 w-[300px]" />
      </div>
    </div>
  );
}

//******** MESSAGE **********/
export function SkeletonMessage() {
  return (
    <>
      {/* Room Header */}
      <div className="flex flex-col justify-between gap-2 pb-4 text-xl min-h-12">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      {/* MessagesProvider */}
      <div className="flex flex-col gap-6 grow mt-2 mb-2 xl:mt-4 xl:mb-4">
        {/* message */}
        <div className="flex flex-col gap-2 max-w-[235px] 2xl:max-w-[255px] xl:ml-8">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-2 w-[100px]" />
          </div>
          <Skeleton className="h-16 w-full rounded-md" />
          <div className="flex justify-between gap-4 ">
            <Skeleton className="h-2 w-[200px]" />
            <div className="flex gap-2">
              <Skeleton className="h-4 w-4 rounded-sm" />
              <Skeleton className="h-4 w-4 rounded-sm" />
            </div>
          </div>
        </div>
        {/* message */}
        <div className="flex flex-col gap-2 max-w-[235px] 2xl:max-w-[400px] ml-auto xl:mr-8">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-2 w-[100px]" />
          </div>
          <Skeleton className="h-11 w-full rounded-md" />
          <div className="flex justify-between gap-4 ">
            <Skeleton className="h-2 w-[200px]" />
            <div className="flex gap-2">
              <Skeleton className="h-4 w-4 rounded-sm" />
              <Skeleton className="h-4 w-4 rounded-sm" />
            </div>
          </div>
        </div>
        {/* message */}
        <div className="flex flex-col gap-2 max-w-[235px] 2xl:max-w-[255px] xl:ml-8">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-2 w-[100px]" />
          </div>
          <Skeleton className="h-20 w-full rounded-md" />
          <div className="flex justify-between gap-4 ">
            <Skeleton className="h-2 w-[200px]" />
            <div className="flex gap-2">
              <Skeleton className="h-4 w-4 rounded-sm" />
              <Skeleton className="h-4 w-4 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
      {/* SendRoomMessage */}
      <div className="relative flex flex-col sm:flex-row gap-2 mt-1 mb-1 xl:mt-4 xl:mb-4">
        <Skeleton className="w-full h-10 rounded-md" />
        <div className="flex gap-2 items-center">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-10 w-10 rounded-md ml-auto" />
        </div>
      </div>
    </>
  );
}
