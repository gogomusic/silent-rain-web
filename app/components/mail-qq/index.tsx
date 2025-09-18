const email = process.env.EMAIL || "";

const MailQq: React.FC = () => {
  const mailTo = email ? `mailto:${email}` : "";
  if (!mailTo) {
    return null;
  }
  return (
    <a href={mailTo} className="no-underline">
      <img
        src="http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_11.png"
        alt="通过QQ邮箱联系我"
      />
    </a>
  );
};

export default MailQq;
