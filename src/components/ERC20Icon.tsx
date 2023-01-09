import * as React from "react";
import * as PropTypes from "prop-types";
import Icon from "./Icon";
import erc20 from "../assets/erc20.svg";

const ERC20Icon = (props: any) => {
  const src = props.contractAddress ? `https://raw.githubusercontent.com/TrustWallet/tokens/master/tokens/${props.contractAddress.toLowerCase()}.png` : erc20;
  // return <Icon src={src} fallback={erc20} />;
  return <Icon src={src} fallback={erc20} />;
  
};

ERC20Icon.propTypes = {
  contractAddress: PropTypes.string,
  size: PropTypes.number,
};

ERC20Icon.defaultProps = {
  contractAddress: null,
  size: 20,
};

export default ERC20Icon;
