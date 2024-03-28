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


export type cartProductType = {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    selectedImg: selectedImageType;
    type: string;

}


export type selectedImageType = {
    view: string;
    image: string;
}

export type user = {
    firstName: string
    lastName: string
    email: string
    password: string
}

export type Address = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    city: string
    state: string
    Country: string
    StreetAddress: string
    pincode: string
    companyName?: string
}
