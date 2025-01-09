import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center">
      <img src="/logo.svg" alt="logo" className="w-[150px] mb-4" draggable={false} />
    </main>
  );
}
