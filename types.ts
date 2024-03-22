export type ProductByCategory = {
    categoryId: number;
    category: string;
    subCategory: subCategory[];
}

export type subCategory = {
    id: number
    name: string;
    type: Type[];
}

export type Type = {
    name: string;
    products: Products[]
}

export type Products = {
    id: number;
    name: string;
    description: string;
    price: number;
    certificates: string;
    images: images[];
    download: string;
    specifications: specifications

}

export type images = {
    view: string;
    image: string
}

export type specifications = {
    model: string;
    Application: string;
    FunctionType: string,
    TemperatureRange: string,
    MinPressure: string,
    MaxPressure: string,
    Media: string,

}


