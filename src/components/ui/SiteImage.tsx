import Image from "next/image";
import { IMAGE_CLASS } from "@/lib/images";

type SiteImageProps = {
  src: string;
  alt: string;
  objectPosition?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Wiederverwendbare Bildkomponente mit einheitlichem Adriano-Stil */
export function SiteImage({
  src,
  alt,
  objectPosition = "center",
  fill = true,
  width,
  height,
  priority = false,
  sizes,
  className = "",
}: SiteImageProps) {
  const style = { objectPosition };
  const imgClass = `${IMAGE_CLASS} ${className}`.trim();

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imgClass}
        style={style}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width!}
      height={height!}
      priority={priority}
      sizes={sizes}
      className={imgClass}
      style={style}
    />
  );
}
