import { ImageCreateDto } from "./ImageCreate.model"
import { TagDto } from "./tag.model"

export class AdCreateDTO {
    public userId: string;
    public price: number;
    public region: string;
    public city: string;
    public street: string;
    public houseNumber: string;
    public houseType: string;
    public areaOfHouse: number;
    public floorAmount: number;
    public roomNumber: number;
    public houseYear: number;
    public pool: boolean;
    public balkon: boolean;
    public rentOportunity: boolean;
    public description: string;
    public images: ImageCreateDto[];
    public tags: TagDto[];
}