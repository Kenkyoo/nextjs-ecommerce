import Link from "next/link";

const Buttons = () => {
  return (
    <>
      <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        <Link href="/products">Shop Now</Link>
      </button>
      <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
        <Link href="/login">Login</Link>
      </button>
    </>
  );
};

export default Buttons;
