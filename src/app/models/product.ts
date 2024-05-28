export class Product {
    id: number | undefined;
    name: string;
    price: number;
    photoPath: string;
    qty: number;
    description: string;

    constructor(id: number | undefined, name: string, price: number = 0, photoPath: string= '../../assets/', qty=0, description: string=' '){
        this.id = id;
        this.name = name;
        this.price = price;
        this.photoPath = photoPath;
        this.qty = qty;
        this.description = description;

    }

}
