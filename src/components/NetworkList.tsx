import * as React from "react";
import styled from "styled-components";


interface INetworkListProps {
    networkList: { [key: string]: number }
    selectChainId: (chainNumber: string) => void;
}
const NetworkListWrapper = styled.div`
    width:80%;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:12px;
`
const NetworkListItem = styled.button`
    padding: 0.5rem;
    border-radius: 8px;
    background-color: #27C4B8;
    color: black;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`
const NetworkList = ({ networkList, selectChainId }: INetworkListProps) => {
    const networkArr = Object.entries(networkList);
    return (
        <NetworkListWrapper>
            {networkArr.map(([name, chainId]) => <NetworkListItem key={chainId} onClick={() => selectChainId(chainId.toString())}>{name}</NetworkListItem>)}
        </NetworkListWrapper>
    )
}
export default NetworkList