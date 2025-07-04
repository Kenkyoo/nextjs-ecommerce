export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen mx-auto flex flex-col items-center justify-center gap-2 px-4">
      {children}
    </div>
  );
}
