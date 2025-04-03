"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function FavoriteComponent() {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    setIsFavorite((prev) => !prev);
    router.push(`${pathname}?favorite=${!isFavorite}`);
  };

  return (
      <button onClick={handleClick} aria-label="Toggle favorite">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isFavorite ? "#F97316" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.21 1.60001 12.77 1.60001 13.73 3.51001L15.49 7.03001C15.59 7.24001 15.77 7.45001 15.98 7.62001"
            stroke={isFavorite ? "#F97316" : "#94A3B8"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
  );
}

export default FavoriteComponent;