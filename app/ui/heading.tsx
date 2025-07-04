import { lusitana } from "./fonts";

export function Heading({ title }: { title: string }) {
  return (
    <h1
      className={`${lusitana.className} scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance py-2`}
    >
      {title}
    </h1>
  );
}
export default Heading;
