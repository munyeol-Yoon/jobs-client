import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col justify-start items-center mx-auto p-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl shadow-lg bg-white">
      <Header />
      <main className="flex-grow w-full flex">{children}</main>
      <Footer />
    </div>
  );
}
