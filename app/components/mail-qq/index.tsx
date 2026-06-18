import Image from "next/image";

const email = process.env.EMAIL || "";

const MailQq: React.FC = () => {
  if (!email) {
    return null;
  }
  const mailTo = email ? `mailto:${email}` : "";

  return (
    <a href={mailTo} className="no-underline">
      <Image
        src="/images/qq-mail.png"
        width={82}
        height={18}
        loading="eager"
        alt="通过QQ邮箱联系我"
      />
    </a>
  );
};

export default MailQq;
