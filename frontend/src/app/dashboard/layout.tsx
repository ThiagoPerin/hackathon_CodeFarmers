import Navbar from "@/components/custom/navigation/Navbar";
import Sidebar from "@/components/custom/navigation/Sidebar";
import { PageTitleProvider } from "@/context/PageTitleContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageTitleProvider>
      <div className="h-screen w-screen flex flex-col items-center justify-start">
        <Navbar />
        <div className="h-[calc(100vh-70px)] w-full flex items-start justify-start">
          <Sidebar />
          {children}
        </div>
      </div>
    </PageTitleProvider>
  );
}
