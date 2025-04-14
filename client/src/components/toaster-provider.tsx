import { Toaster } from "@/components/ui/toaster";

const ToasterProvider = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Toaster />
    {children}
  </div>
);

export default ToasterProvider;
