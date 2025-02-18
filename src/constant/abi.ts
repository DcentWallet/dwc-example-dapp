export const balanceOfABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }
  ];

export const decimalsOfABI = [
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
        {
            name: "",
            type: "uint8",
        },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
},
]