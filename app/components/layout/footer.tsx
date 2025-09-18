import MailQq from "../mail-qq";

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-fit mx-auto flex text-sm items-center text-[#ABABAB]">
        <div className="mr-2">静夜聆雨 版权所有</div>
        <MailQq />
      </div>
    </div>
  );
};

export default Footer;
