export interface IPrices {
    hourlyPrice?: number,
    dailyPrice?: number
}

export interface IBlocks {
    startTimeLocal?: string,
    endTimeLocal?: string,
    totalPrice?: number,
    discountPercent?: number
}

export interface IAvailabilityDTO {
    dateLocal?: string,
    prices?: IPrices,
    blocks?: IBlocks[]
}