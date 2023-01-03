import React from "react";
import styled from "styled-components";


interface INetworkListProps {
    networkList: { [key: string]: number }
    selectChainId: (chainNumber: string) => void;
}
const NetworkListWrapper = styled.div`
width:80%;
display:grid;
grid-template-columns: repeat(4,1fr);
gap:1rem;
`
const NetworkListItem = styled.button`
padding:.5rem;
border-radius: 8px;
background-color: #0fa033;
color: #f5f5f5;
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