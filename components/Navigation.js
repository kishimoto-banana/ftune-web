import Link from "next/link";
import { useRouter } from "next/router";

export const Navigation = () => {
  const router = useRouter();

  const isActive = (href) => {
    return router.asPath === href;
  };

  return (
    <nav className="border-gray-200">
      <div className="bg-amber-50 py-2 flex flex-row justify-center items-center px-4">
        <Link href="/">
          <a className="">
            <img src="/logo-wide.svg" alt="logo" className="h-9" />
          </a>
        </Link>
      </div>
      <div class="border-b border-gray-300 shadow-sm flex lex-row items-center justify-center">
        <ul class="flex flex-row -mb-px overflow-x-auto">
          <li class="flex-none">
            <Link href="/">
              <a
                className={
                  isActive("/")
                    ? "inline-block py-2 px-4 text-sm md:text-md font-medium text-center text-pink-600 rounded-t-lg border-b-2 border-pink-600 active"
                    : "inline-block py-2 px-4 text-sm md:text-md font-medium text-center text-gray-700 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-400"
                }
              >
                ホーム
              </a>
            </Link>
          </li>
          <li class="flex-none">
            <Link href="/ranking">
              <a
                className={
                  isActive("/ranking")
                    ? "inline-block py-2 px-4 text-sm md:text-md font-medium text-center text-pink-600 rounded-t-lg border-b-2 border-pink-600 active"
                    : "inline-block py-2 px-4 text-sm md:text-md font-medium text-center text-gray-700 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-400"
                }
              >
                ランキング
              </a>
            </Link>
          </li>
          <li class="flex-none">
            <Link href="/about">
              <a
                className={
                  isActive("/about")
                    ? "inline-block py-2 px-4 text-sm md:text-md font-medium text-center text-pink-600 rounded-t-lg border-b-2 border-pink-600 active"
                    : "inline-block py-2 px-4 text-sm md:text-md font-medium text-center text-gray-700 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-400"
                }
              >
                Ftuneについて
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
