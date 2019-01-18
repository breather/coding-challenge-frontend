export interface IImage {
    w: number,
    h: number,
    imageType: string,
    url: string
}

export interface ILink {
    deeplink?: string
}

export interface ILocationDTO {
    id: string,
    name: string,
    slug: string,
    description: string,
    address?: string,
    address1?: string,
    address2?: string,
    addressSuite?: string,
    addressFloor?: string,
    addressRoom?: string,
    addressName?: string,
    addressCity?: string,
    cityId: string,
    currencyCode: string,
    timezone: string,
    lnglat?: number[],
    amenities: string[],
    neighborhoods: string[],
    images: IImage[],
    links: ILink,
    isNewLocation: boolean,
    tableCapacity: number,
    ratingAverage: number,
    ratingSum: number,
    ratingCount: number,
    monthlyPrice?: number,
}