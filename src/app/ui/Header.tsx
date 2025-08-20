import Link from "next/link";

export default async function () {
  return (
    <div className="fixed flex gap-8 justify-between px-4 py-2
            border-b-1 border-gray-400
            w-full bg-white">
        <h2 className="text-2xl font-bold">부산 맛집</h2>
        <div className="flex gap-4 text-gray-500">
          <Link href={'/'}>
            <span className="block">홈</span>
          </Link>
          <Link href={'/'}>
            <span className="block">지역</span>
          </Link>
        </div>
    </div>
  );
}