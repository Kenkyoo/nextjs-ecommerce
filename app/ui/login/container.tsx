export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4 p-6 md:p-10">{children}</div>;
}
