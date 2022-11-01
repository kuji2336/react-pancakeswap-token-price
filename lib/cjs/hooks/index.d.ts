interface IgetPriceValues {
    updated_at: Date;
    data: {
        name: string;
        symbol: string;
        price: string;
        price_BNB: string;
    };
}
export default function useGetLivePrice(): {
    getPrice: (tokenAddress: string) => Promise<IgetPriceValues>;
};
export {};
