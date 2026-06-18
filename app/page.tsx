import CloudMusic from "./components/cloud-music";
import MailQq from "./components/mail-qq";

export default async function page() {
  return (
    <div>
      首页
      <CloudMusic />
      <MailQq />
    </div>
  );
}
