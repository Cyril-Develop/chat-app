import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Toaster />
    {children}
  </div>
);

export default RootLayout;
