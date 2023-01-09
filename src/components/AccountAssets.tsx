import * as React from "react";
import Column from "./Column";
import AssetRow from "./AssetRow";
import { IAssetData } from "../helpers/types";
import { getChainData } from "src/helpers/utilities";

const AccountAssets = (props: any) => {
  const { assets, chainId } = props;
  const [nativeCurrency, setNativeCurrency] = React.useState<IAssetData>();
  const [tokens, setTokens] = React.useState<IAssetData[]>();
  React.useEffect(() => {
    if (!assets.length) { 
      return;
    }
    const defaultNativeCurrency: IAssetData = getChainData(chainId).native_currency;
    const nativeCurrency: IAssetData = assets.filter((asset: IAssetData) => asset.symbol.toLowerCase() === defaultNativeCurrency.symbol.toLowerCase())[0];
    const filteredTokens: IAssetData[] = assets.filter((asset: IAssetData) => asset.contractAddress !== '');
    setTokens([...filteredTokens]);
    setNativeCurrency(nativeCurrency)

  }, [props.assets.length])

  if (!nativeCurrency) {
    return <div>
      ...no accounts
    </div>
  }

  return (
    <Column center>
      <AssetRow key={nativeCurrency.name} asset={nativeCurrency} />
      {tokens?.map(token => (
        <AssetRow key={token.symbol} asset={token} />
      ))}
    </Column>
  );
};

export default AccountAssets;
