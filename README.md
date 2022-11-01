# `react-pancakeswap-token-price` Introduction

`react-pancakeswap-token-price` is a React.js package that uses `pancakeswap` REST API to provide a live price of a particular BEP-20 tokens and other necessary information. 📉📈

## Installation

```bash
npm i react-pancakeswap-token-price
```

## Usage

```python
import { useGetLivePrice } from "react-pancakeswap-token-price";

# returns pointed BEP-20 token price

  useEffect(()=>{
    getPrice('0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f')
    .then((res)=> console.log(res))
  }, [])

```

## Returned Values

```
interface IgetPriceValues {
    updated_at: Date
    data:{
        name: string,
        symbol: string,
        price: string,
        price_BNB: string
    }
}
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)