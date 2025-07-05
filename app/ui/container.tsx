export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col items-center justify-center justify-items-center gap-2 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        {children}
      </div>
    </div>
  );
}
