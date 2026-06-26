import { connection } from "next/server";
import { Suspense } from "react";

const startYear = 2026;

async function Year() {
  await connection();
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear === startYear ? `${startYear}` : `${startYear}-${currentYear}`;
  return `© ${yearText} 静夜聆雨. All rights reserved.`;
}

const Copyright: React.FC = () => {
  return (
    <p className="text-[13px] font-extralight tracking-wide text-foreground/80">
      <Suspense fallback={`${startYear} 静夜聆雨`}>
        <Year />
      </Suspense>
    </p>
  );
};

export default Copyright;
