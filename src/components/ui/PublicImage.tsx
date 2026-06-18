import { cn, publicAsset } from "@/lib/utils";

type PublicImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
};

export function PublicImage({
  src,
  alt,
  className,
  fill,
  priority = false,
}: PublicImageProps) {
  return (
    // Native img avoids next/image rewriting src on hydration (GH Pages basePath).
    <img
      src={publicAsset(src)}
      alt={alt}
      className={cn(fill && "absolute inset-0 h-full w-full", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
