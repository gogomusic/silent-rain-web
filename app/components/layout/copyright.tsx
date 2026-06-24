import { connection } from "next/server";
import { Suspense } from "react";

const startYear = 2026;

async function Year() {
  await connection();
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear === startYear ? `${startYear}` : `${startYear}-${currentYear}`;
  return `${yearText} 静夜聆雨`;
}

const Copyright: React.FC = () => {
  return (
    <p className="text-xs tracking-wide text-foreground/30">
      <Suspense fallback={`${startYear} 静夜聆雨`}>
        <Year />
      </Suspense>
    </p>
  );
};

export default Copyright;
