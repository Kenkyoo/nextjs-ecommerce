export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="vh-90 mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
      {children}
    </div>
  );
}
