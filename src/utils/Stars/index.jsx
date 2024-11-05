import Image from 'next/image';
import React from 'react';

export default function Stars({ count }) {
  const filledStars = count % 5;
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex flex-row justify-center items-center gap-1">
      {/* Render filled stars */}
      {Array.from({ length: filledStars }).map((_, index) => (
        <Image
          key={`filled-${index}`}
          src="/assets/filledStar.svg"
          height={20}
          width={20}
          alt="filled star"
        />
      ))}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Image
          key={`empty-${index}`}
          src="/assets/star.svg"
          height={20}
          width={20}
          alt="empty star"
        />
      ))}
    </div>
  );
}
