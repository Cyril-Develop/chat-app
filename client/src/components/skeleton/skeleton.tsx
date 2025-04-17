import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

//******** INPUT **********/
export function SkeletonInput() {
  return <Skeleton className="w-[200px] h-11 md:h-12 border border-input " />;
}

//******** CHAT UNSELECTED **********/
//! Ne pas garder tant que l'image n'est pas carré
// export function SkeletonChatUnselected() {
//   return (
//     <div className="bg-muted flex flex-col gap-20 justify-center items-center grow h-full p-2 pl-2 xl:p-2 xl:pl-0 xl:flex-row">
//       {/* Logo / Image Placeholder */}
//       <Skeleton className="w-full md:w-1/3 aspect-square max-w-[350px] rounded-full" />
//       {/* Texts */}
//       <div className="flex flex-col items-center gap-4 text-center">
//         {/* Title (simulate "Bienvenue Nom") */}
//         <Skeleton className="h-5 w-[200px]" />
//         {/* Message */}
//         <Skeleton className="h-4 w-[300px]" />
//       </div>
//     </div>
//   );
// }

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
      <div className="flex flex-col  grow mt-2 mb-2 xl:mt-4 xl:mb-4">
        {/* message */}
        <div className="flex flex-col gap-2 p-3 max-w-[235px] 2xl:max-w-[255px] xl:ml-8">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-2 w-[100px]" />
          </div>
          <Skeleton className="h-16 w-full " />
          <div className="flex justify-between gap-4 ">
            <Skeleton className="h-2 w-[200px]" />
            <div className="flex gap-2">
              <Skeleton className="h-4 w-4 rounded-sm" />
              <Skeleton className="h-4 w-4 rounded-sm" />
            </div>
          </div>
        </div>
        {/* message */}
        <div className="flex flex-col gap-2 p-3 max-w-[235px] 2xl:max-w-[400px] ml-auto xl:mr-8">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-2 w-[100px]" />
          </div>
          <Skeleton className="h-11 w-full " />
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
      {/* 🆗 */}
      <div className="relative flex flex-col sm:flex-row gap-2 mt-1 mb-1 xl:mt-4 xl:mb-4">
        <Skeleton className="w-full h-12 " />
        <div className="flex gap-2 items-center">
          <Skeleton className="h-11 w-11 " />
          <Skeleton className="h-11 w-11 " />
          <Skeleton className="h-11 w-11  ml-auto" />
        </div>
      </div>
    </>
  );
}

//******** SETTINGS **********/

//******** SETTINGS DASHBOARD **********/
export function SkeletonDashboard() {
  // Nombre de lignes à afficher en mode chargement
  const rows = Array.from({ length: 3 });
  return (
    <Table>
      <TableCaption>
        <Skeleton className="h-4 w-[200px]" />
      </TableCaption>
      <TableHeader>
        <TableRow className="border-primary/10">
          <TableHead className="text-foreground text-lg">ID</TableHead>
          <TableHead className="text-foreground text-lg">Utilisateur</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((_, i) => (
          <TableRow key={i}>
            <TableCell>
              <Skeleton className="h-4 w-[40px]" />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-4 rounded-sm" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

//******** PROFILE **********/
export function SkeletonProfile() {
  return (
    <div className="space-y-6 md:pb-10">
      {/* Title */}
      <div className="space-y-2">
        <Skeleton className="h-[24px] w-32 " /> {/* h3 */}
        <Skeleton className="h-[20px] w-60 " /> {/* p */}
        {/* Retour à la ligne simuler */}
        <Skeleton className="h-[16px] w-[200px] hidden max-[1250px]:block max-[1024px]:hidden max-[490px]:block" />
      </div>

      {/* PreviewCard */}
      <div className="flex gap-4  border bg-popover dark:bg-background p-4">
        <Skeleton className="w-16 h-16 md:w-24 md:h-24 rounded-full aspect-square" />
        <div className="flex flex-col gap-3">
          <Skeleton className="h-[20px] w-[100px] " /> {/* username */}
          <Skeleton className="h-[16px] w-[140px] " />{" "}
          {/* role or bio preview */}
        </div>
      </div>

      <Separator />

      {/* ProfileForm */}
      <div className="space-y-8">
        {/* Username */}
        <div className="space-y-2.5">
          <Skeleton className="h-[21px] w-[140px] " /> {/* Label */}
          <Skeleton className=" h-11 md:h-12 w-full " /> {/* Input */}
          <Skeleton className="h-[19px] w-2/3 " /> {/* Description */}
        </div>

        {/* Image Upload */}
        <div className="space-y-2.5">
          <Skeleton className="h-[24px] w-[80px] " /> {/* Label */}
          <Skeleton className=" h-11 md:h-12 w-[250px] " />{" "}
          {/* Button style label */}
          <Skeleton className="h-[16px] w-2/3 " /> {/* Description */}
        </div>

        {/* Bio */}
        <div className="space-y-2.5">
          <Skeleton className="h-[21px] w-[40px] " /> {/* Label */}
          <Skeleton className="h-[80px] w-full " /> {/* Textarea */}
          <Skeleton className="h-[19px] w-2/3 " /> {/* Description */}
        </div>

        {/* Submit Button */}
        <Skeleton className="h-11 md:h-12 w-full " />
      </div>
    </div>
  );
}

//******** ACCOUNT **********/
export function SkeletonAccount() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <Skeleton className="h-[24px] w-32 " /> {/* h3 */}
        <Skeleton className="h-[20px] w-60 " /> {/* p */}
        {/* Retour à la ligne simuler */}
        <Skeleton className="hidden max-[1238px]:block max-[1024px]:hidden max-[476px]:block h-[16px] w-[180px]" />
      </div>
      <Separator />
      <div className="space-y-8">
        {/* EmailForm */}
        <div className="space-y-6">
          {/* Email */}
          <div className="space-y-2.5">
            <Skeleton className="h-[21px] w-[140px] " /> {/* Label */}
            <Skeleton className=" h-11 md:h-12 w-full " /> {/* Input */}
            <Skeleton className="h-[19px] w-2/3 " /> {/* Description */}
          </div>

          {/* Update email */}
          <div className="space-y-2.5">
            <Skeleton className="h-[22px] w-[140px] " /> {/* Label */}
            <Skeleton className=" h-11 md:h-12 w-full " /> {/* Input */}
          </div>
        </div>

        {/* Submit Button */}
        <Skeleton className=" h-11 md:h-12 w-full " />
      </div>
      <Separator />
      {/* Delete Account Button */}
      <Skeleton className=" h-11 md:h-12 w-full sm:w-[177px] " />
    </div>
  );
}

//******** NOTIFICATION **********/
export function SkeletonNotification() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <Skeleton className="h-[20px] w-32 " /> {/* h3 */}
        <Skeleton className="h-[20px] w-full " /> {/* p */}
        <Skeleton className="h-[20px] w-60 " /> {/* p */}
        {/* Retour à la ligne simuler */}
        <Skeleton className="hidden max-[1238px]:block max-[1024px]:hidden max-[476px]:block h-[16px] w-[180px]" />
        <Skeleton className="hidden max-[335px]:block h-[16px] w-[180px]" />
      </div>
      <Separator />
      {/* NotificationForm */}
      <div className="space-y-8">
        {/* radios */}
        <div className="space-y-4">
          <Skeleton className="h-[22px] w-[200px] " /> {/* Label */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <Skeleton className="w-5 h-5 rounded-full aspect-square" />
              <div className="flex flex-col items-center gap-2">
                <Skeleton className="h-[24px] w-full " />
                {/* Retour à la ligne simuler */}
                <Skeleton className="hidden max-[525px]:block h-[16px] w-[200px]" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="w-5 h-5 rounded-full aspect-square" />
              <Skeleton className="h-[24px] w-full " />
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <Skeleton className=" h-11 md:h-12 w-full " />
      </div>
    </div>
  );
}
