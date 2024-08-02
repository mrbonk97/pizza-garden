import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BannerCardProps {
  imageUrl: string;
  title: string;
  subTitle?: string;
  url: string;
}

export const BannerCard = ({
  imageUrl,
  title,
  subTitle,
  url,
}: BannerCardProps) => {
  return (
    <Card className="relative h-60 w-full bg-transparent rounded-lg overflow-hidden">
      <Link href={url}>
        <Image
          src={imageUrl}
          width={2000}
          height={1000}
          alt="pizza"
          className="absolute h-full w-full object-cover"
        />

        <CardContent className="relative h-full w-full flex2 bg-primary/70 text-primary-foreground">
          <hgroup>
            <h3 className="text-center text-2xl">{title}</h3>
            {subTitle && (
              <h4 className="text-center text-base opacity-80">{subTitle}</h4>
            )}
          </hgroup>
        </CardContent>
      </Link>
    </Card>
  );
};
