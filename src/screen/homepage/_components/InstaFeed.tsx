"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Media = {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
};

export default function InstagramReels() {
  const [media, setMedia] = useState<Media[]>([]);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => setMedia(data.data || []));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {media.map((item) => (
        <a key={item.id} href={item.permalink} target="_blank" rel="noopener noreferrer">
          {item.media_type === "VIDEO" ? (
            <video controls className="w-full rounded-lg">
              <source src={item.media_url} type="video/mp4" />
            </video>
          ) : (
            <Image src={item.media_url} alt={item.caption || "Instagram post"} className="w-full rounded-lg" />
          )}
        </a>
      ))}
    </div>
  );
}
