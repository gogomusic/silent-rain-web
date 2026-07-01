import Image, { type ImageProps } from "next/image";
import { getPlaiceholder } from "plaiceholder";

type RemoteImageProps = Omit<
  ImageProps,
  "placeholder" | "blurDataURL" | "src"
> & {
  src: string;
};

const RemoteImage: React.FC<RemoteImageProps> = async (props) => {
  const { src, alt, fill, width, height, ...rest } = props;

  let base64 = "";
  let imgWidth = width;
  let imgHeight = height;

  try {
    const response = await fetch(src);
    const buffer = Buffer.from(await response.arrayBuffer());
    const { metadata, base64: blurData } = await getPlaiceholder(buffer);
    base64 = blurData;

    if (!imgWidth || !imgHeight) {
      imgWidth = metadata.width;
      imgHeight = metadata.height;
    }
  } catch (err) {
    console.error("Failed to generate blur placeholder:", err);

    return (
      <div
        className={rest.className}
        style={{
          width: fill ? "100%" : (width ?? imgWidth),
          height: fill ? "100%" : (height ?? imgHeight),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "oklch(0.9 0 0)",
          color: "oklch(0.5 0 0)",
          fontSize: "0.875rem",
          overflow: "hidden",
        }}
      >
        <span>图片加载失败</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={!fill ? imgWidth : undefined}
      height={!fill ? imgHeight : undefined}
      fill={fill}
      placeholder="blur"
      blurDataURL={base64}
      {...rest}
    />
  );
};

export default RemoteImage;
