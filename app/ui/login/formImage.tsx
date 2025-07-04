import Image from "next/image";

export default function FormImage() {
  return (
    <div className="relative hidden lg:block">
      <Image
        width={500}
        height={500}
        src="/login.png"
        alt="Image"
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  );
}
