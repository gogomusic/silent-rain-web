import BilibiliVideo from "@/components/bilibili-video";

const page: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #e0e7ff 0%, #f1f5f9 100%)",
        }}
        className="top-0 md:top-16 min-h-[calc(100vh-100px)] md:h-[calc(100vh)]"
      >
        <BilibiliVideo />

        <h1
          className="mt-0 md:mt-[740px]"
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: "1rem",
          }}
        >
          网站正在开发中
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#64748b",
          }}
        >
          敬请期待，精彩即将上线！
        </p>
      </div>
    </>
  );
};

export default page;
