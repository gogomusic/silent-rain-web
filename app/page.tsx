import Link from "next/link";
import CloudMusic from "./components/cloud-music";
import MailQq from "./components/mail-qq";

const page: React.FC = () => {
  return (
    <div>
      首页
      <Link href="/test" className="text-white">
        测试页
      </Link>
      <CloudMusic />
      <MailQq />
    </div>
  );
};

export default page;
