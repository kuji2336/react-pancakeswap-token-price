import { BASE_URI } from "../api";

interface IgetPriceValues {
  updated_at: Date;
  data: {
    name: string;
    symbol: string;
    price: string;
    price_BNB: string;
  };
}

export default function useGetLivePrice() {
  const getPrice = async (tokenAddress: string): Promise<IgetPriceValues> => {
    try {
      const response = await fetch(`${BASE_URI}/tokens/${tokenAddress}`);
      return response.json();
    } catch (err) {
      throw err;
    }
  };

  return { getPrice };
}
