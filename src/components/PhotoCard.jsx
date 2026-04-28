import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { GiBrokenHeartZone } from "react-icons/gi";


const PhotoCard = ({photo}) => {
    return (
       <Card className="border">
        <div className="relative w-full aspect-square ">
            <Image src={photo.imageUrl}
            
            fill={true}
            sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw,33vw" alt={photo.title} className="object-cover rounded-xl" />
       <Chip className="absolute right-2 top-2">{photo.category}</Chip>
        </div>
        <div>
            <h2 className="font-medium">{photo.title}</h2>
        </div>
   <div>
    <p><GiBrokenHeartZone />
</p>
    <p>{photo.likes}</p>
   </div>

<Separator orientation="vertical"></Separator>

   <div className="flex items-center gap-2">
    <p><BiDownload></BiDownload></p>
    <p>{photo.downloads}</p>
   </div>
   <Button variant="outline" className="w-full">View</Button>
          </Card>
    );
};

export default PhotoCard;