export class Product {
    id: number | undefined;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    qty: number;

    constructor(id: number | undefined, name: string, description: string=' ', price: number = 0, imageUrl: string= '../../assets/', qty=0){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.qty = qty;

    }

}
