import type * as React from "react";

interface ProfileCardProps {
  profileImg: string;
  title: string;
  url: string;
  children: React.ReactNode;
}

export function ProfileCard({ profileImg, title, url, children }: ProfileCardProps) {
  return (
    <a 
      href={url}
      className="flex border border-secondary-dark rounded overflow-hidden w-full no-underline"
    >
      <img 
        src={profileImg} 
        alt={title}
        className="w-[100px] h-[100px] object-contain border-r border-secondary-dark" 
      />
      <div className="p-4 flex flex-col justify-center">
        <h3 className="m-0 text-lg font-medium text-gray-900">{title}</h3>
        {children}
        <p className="text-sm text-blue-600 mt-2 hover:underline">{url}</p>
      </div>
    </a>
  );
}
