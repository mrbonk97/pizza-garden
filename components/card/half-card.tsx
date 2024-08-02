import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface MiniMenuCardProps {
  title: string;
  description?: string;
  url: string;
  imageUrl: string;
  bgColor?: string;
}

export const MiniMenuCard = ({
  title,
  description,
  url,
  imageUrl,
  bgColor,
}: MiniMenuCardProps) => {
  return (
    <Card
      className="h-full w-full shadow-lg hover:opacity-80 duration-200 cursor-pointer"
      style={{ backgroundColor: bgColor }}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={imageUrl} alt="map" width={50} height={50} />
      </CardContent>
    </Card>
  );
};
