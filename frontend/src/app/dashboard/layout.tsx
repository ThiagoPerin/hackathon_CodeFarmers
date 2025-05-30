import Navbar from "@/components/custom/navigation/Navbar";
import Sidebar from "@/components/custom/navigation/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen flex flex-col items-center start justify-start">
      <Navbar />
      <div className="h-full w-full flex items-start justify-start">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
