/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  basics: [
    {
      type: 'html',
      value: 'Learning Hub',
      className: 'sidebar-title',
    },
    "home/new-to-polygon",
    {
      type: "category",
      label: "Blockchain Basics",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "home/blockchain-basics/blockchain",
        "home/blockchain-basics/blockchain-types",
        "home/blockchain-basics/consensus-mechanism",
        "home/blockchain-basics/ethereum",
        "home/blockchain-basics/solidity",
        "home/blockchain-basics/transactions",
        "home/blockchain-basics/gas",
        "home/blockchain-basics/accounts",
        "home/blockchain-basics/sidechain",
        "home/blockchain-basics/import-account-to-metamask",
      ],
    },
    {
      type: "category",
      label: "Polygon Basics",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "home/polygon-basics/what-is-polygon",
        "home/polygon-basics/what-is-proof-of-stake",
        "maintain/polygon-basics/who-is-delegator",
        "maintain/polygon-basics/who-is-validator",
        "home/architecture/polygon-architecture",
        "home/polygon-basics/zkEVM-basics",
      ],
    },
    "home/faq",
  ],

  delegate: [
    "maintain/delegate/delegate",
    //"maintain/delegate/delegator-faq"
  ],

  govern: [
    {
      type: 'html',
      value: 'Polygon Governance',
      className: 'sidebar-title',
    },
    {
      type: "category",
      label: "Polygon Improvement Proposals (PIPs)",
      link: {
        type: "generated-index",
      },
      items: [
        "maintain/govern/pips/pips-overview",
        "maintain/govern/pips/how-to-propose",
        "maintain/govern/pips/pips-forum",
        "maintain/govern/pips/pips-community-guidelines",
      ],
    },
    "maintain/govern/governance-pos",
  ],

  operate: [
    "operate/technical-requirements",
    "miden/user_docs/main",
  ],

  operatepos: [
    "operate/technical-requirements",
    "operate/snapshot-instructions-heimdall-bor",
    {
      type: "category",
      label: "Run a Full Node",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "operate/full-node-deployment",
        "operate/full-node-binaries",
        "operate/full-node-docker",
        "operate/full-node",
      ],
    },
    "operate/network-rpc-endpoints",
    "operate/default-ports",
    /*"operate/access-node-alchemy",*/
    {
      type: "category",
      label: "Setup Archive Node",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "operate/archive-node",
        "operate/erigon-client",
      ],
    },
  ],

  develop: [
    {
      type: 'html',
      value: 'Developer Hub',
      className: 'sidebar-title',
    },
    "develop/getting-started",
    "develop/developer-resources",
    {
      type: "category",
      label: "Wallets",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/wallets/getting-started",
        {
          type: "category",
          label: "Polygon Wallet Suite",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/wallets/polygon-web-wallet/web-wallet-v3-guide",
            "faq/adding-a-custom-token",
            "zkEVM/wallet/usage-guide",
          ],
        },
        {
          type: "category",
          label: "Third-Party Apps",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "Metamask",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/metamask/overview",
                "develop/metamask/hello",
                "develop/metamask/config-polygon-on-metamask",
                "develop/metamask/custom-tokens",
                "develop/metamask/multiple-accounts",
              ],
            },
            {
              type: "category",
              label: "Wallet Link",
              link: {
                type: "generated-index",
              },
              items: ["develop/metamask/config-polygon-on-wallet-link"],
            },

            {
              type: "category",
              label: "Venly",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/wallets/venly/intro",
                "develop/wallets/venly/create-wallet",
                "develop/wallets/venly/network",
                "develop/wallets/venly/custom-tokens",
              ],
            },
            "develop/wallets/fortmatic",
            "develop/wallets/portis",
            "develop/wallets/torus",
            "develop/wallets/walletconnect",
            "develop/wallets/slashauth",
            "develop/wallets/plaid-wallet-onboard",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Assets",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "operate/gas-token",
        "develop/nft-tutorial",
        "operate/mapped-tokens",
      ],
    },
    {
      type: "category",
      label: "Smart Contracts",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Deploying Contracts",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/alchemy",
            "develop/quicknode",
            "develop/chainstack",
            "develop/chainide",
            "develop/remix",
            "develop/truffle",
            "develop/hardhat",
            "develop/replit",
          ],
        },
        "operate/genesis-contracts",
        {
          type: "category",
          label: "Plasma Contracts",
          link: {
            type: "generated-index",
          },
          items: ["develop/advanced/calling-plasma-contracts"],
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "develop/eip1559",
        {
          type: "category",
          label: "Account Abstraction",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/meta-transactions/account-abstraction",
            "develop/meta-transactions/eip4337",
            "develop/meta-transactions/meta-transactions",
            "develop/meta-transactions/network-agnostics",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Bridges",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "develop/ethereum-polygon/getting-started",
        "develop/ethereum-polygon/submit-mapping-request",
        {
          type: "category",
          label: "FxPortal",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/l1-l2-communication/fx-portal",
            "develop/ethereum-polygon/mintable-assets",
            "develop/l1-l2-communication/state-transfer",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Oracles",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/oracles/getting-started",
        "develop/oracles/api3",
        {
          type: "category",
          label: "Band Protocol",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/oracles/bandchain",
            "develop/oracles/bandstandarddataset",
          ],
        },
        "develop/oracles/chainlink",
        "develop/oracles/optimisticoracle",
        "develop/oracles/razor",
        "develop/oracles/tellor",
      ],
    },
    {
      type: "category",
      label: "Storage",
      link: {
        type: "generated-index",
      },
      items: ["develop/ipfs", "develop/filecoinhelpers", "develop/nftstorage"],
      items: [
        "develop/ipfs",
        "develop/filecoinhelpers",
        "develop/crusthelpers",
        "develop/nftstorage",
      ],
    },
    {
      type: "category",
      label: "Data",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Indexing and Querying",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/data/the-graph",
            "develop/data/graph-data",
            "develop/data/graph-entities",
            "develop/data/graph-queries",
            "develop/data/covalent",
          ],
        },
        "develop/dapp-fauna-polygon-react",
      ],
    },
    "develop/did-implementation",
    {
      type: "category",
      label: "Miscellaneous",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/tools/matic-faucet",
        "develop/tools/polygon-gas-station",
      ],
    },
  ],

  maintain: [
    "maintain/validate/validator-index",
    {
      type: "category",
      label: "Validator Overview",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "maintain/validator/architecture",
        "maintain/validator/responsibilities",
        "maintain/validator/core-components/staking",
        "maintain/polygon-basics/liquid-delegation",
        "maintain/validator/rewards",
        {
          type: "category",
          label: "Core Components",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validator/core-components/heimdall-chain",
            "maintain/validator/core-components/bor-chain",
            "maintain/validator/core-components/checkpoint-mechanism",
            "maintain/validator/core-components/key-management",
            "maintain/validator/core-components/derivatives",
            "maintain/validator/core-components/proposers-producers-selection",
            "maintain/validator/core-components/proposer-bonus",
            "maintain/validator/core-components/transaction-fees",
            "maintain/validator/core-components/state-sync-mechanism",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Validate",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Node Deployment",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/validator-node-system-requirements",
            "maintain/validate/run-validator-binaries",
            "maintain/validate/run-validator-ansible",
            "maintain/validate/run-validator",
          ],
        },
        {
          type: "category",
          label: "Node Management",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/port-management",
            "maintain/validate/change-signer-address",
          ],
        },
        {
          type: "category",
          label: "Staking Operations",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/validator-staking-operations",
            "maintain/validate/validator-commission-operations",
          ],
        },
        {
          type: "category",
          label: "Validator Performance Metrics",
          link: {
            type: "generated-index",
          },
          items: ["maintain/validate/validator-performance-overview"],
        },
        {
          type: "category",
          label: "Knowledge Base",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/kb/known-issues",
            "maintain/validate/kb/how-to",
            {
              type: "category",
              label: "Additional Information",
              link: {
                type: "generated-index",
              },
              items: ["maintain/validate/kb/additional-info/port-config"],
            },
          ],
        },
        "maintain/reporting-issues",
        "maintain/glossary",
      ],
    },
  ],
  integrate: [
    "integrate/quickstart",
    {
      type: "category",
      label: "Network Information",
      link: {
        type: "generated-index",
      },
      items: [
        "integrate/network",
        {
          type: "category",
          label: "Network Details",
          link: {
            type: "generated-index",
          },
          items: [
            "integrate/network-detail",
            {
              type: "link",
              label: "Polygon-Mainnet",
              href: "https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json",
            },
            {
              type: "link",
              label: "Mumbai",
              href: "https://static.matic.network/network/testnet/mumbai/index.json",
            },
          ],
        },
        {
          type: "link",
          label: "Polygon Faucet",
          href: "https://faucet.polygon.technology/",
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      link: {
        type: "generated-index",
      },
      items: ["integrate/install-gcp"],
    },
  ],

  maticjs: [
    {
      type: 'html',
      value: 'MaticJS SDK',
      className: 'sidebar-title',
    },
    "develop/ethereum-polygon/matic-js/get-started",
    "develop/ethereum-polygon/matic-js/api-architecture",
    "develop/ethereum-polygon/matic-js/installation",
    {
      type: "category",
      label: "Setup",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/ethereum-polygon/matic-js/setup/index",
        "develop/ethereum-polygon/matic-js/setup/web3",
        "develop/ethereum-polygon/matic-js/setup/ethers",
      ],
    },
    {
      type: "category",
      label: "PoS Network",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/ethereum-polygon/matic-js/pos/index",
        {
          type: "category",
          label: "ERC20",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/matic-js/pos/erc20/index",
            "develop/ethereum-polygon/matic-js/pos/erc20/get-balance",
            "develop/ethereum-polygon/matic-js/pos/erc20/approve",
            "develop/ethereum-polygon/matic-js/pos/erc20/approve-max",
            "develop/ethereum-polygon/matic-js/pos/erc20/get-allowance",
            "develop/ethereum-polygon/matic-js/pos/erc20/deposit",
            "develop/ethereum-polygon/matic-js/pos/erc20/transfer",
            "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-start",
            "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-exit",
            "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-exit-faster",
            "develop/ethereum-polygon/matic-js/pos/erc20/is-withdraw-exited",
          ],
        },
        {
          type: "category",
          label: "ERC721",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/matic-js/pos/erc721/index",
            "develop/ethereum-polygon/matic-js/pos/erc721/get-tokens-count",
            "develop/ethereum-polygon/matic-js/pos/erc721/get-token-id-at-index-for-user",
            "develop/ethereum-polygon/matic-js/pos/erc721/get-all-tokens",
            "develop/ethereum-polygon/matic-js/pos/erc721/is-approved",
            "develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all",
            "develop/ethereum-polygon/matic-js/pos/erc721/approve",
            "develop/ethereum-polygon/matic-js/pos/erc721/approve-all",
            "develop/ethereum-polygon/matic-js/pos/erc721/deposit",
            "develop/ethereum-polygon/matic-js/pos/erc721/deposit-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/is-withdraw-exited",
            "develop/ethereum-polygon/matic-js/pos/erc721/is-withdraw-exited-many",
            "develop/ethereum-polygon/matic-js/pos/erc721/transfer",
            "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start-with-meta-data",
          ],
        },
        {
          type: "category",
          label: "ERC1155",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/matic-js/pos/erc1155/get-balance",
            "develop/ethereum-polygon/matic-js/pos/erc1155/approve-all",
            "develop/ethereum-polygon/matic-js/pos/erc1155/approve-all-for-mintable",
            "develop/ethereum-polygon/matic-js/pos/erc1155/is-approved-all",
            "develop/ethereum-polygon/matic-js/pos/erc1155/deposit",
            "develop/ethereum-polygon/matic-js/pos/erc1155/deposit-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-start",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-start-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-faster",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-faster-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/is-withdraw-exited",
            "develop/ethereum-polygon/matic-js/pos/erc1155/is-withdraw-exited-many",
            "develop/ethereum-polygon/matic-js/pos/erc1155/transfer",
          ],
        },
        "develop/ethereum-polygon/matic-js/pos/is-check-pointed",
        "develop/ethereum-polygon/matic-js/pos/is-deposited",
        "develop/ethereum-polygon/matic-js/pos/deposit-ether",
      ],
    },
    {
      type: "category",
      label: "zkEVM Network",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/ethereum-polygon/matic-js/zkevm/initialize-zkevm",
        "develop/ethereum-polygon/matic-js/zkevm/zkevm-client-erc20",
        "develop/ethereum-polygon/matic-js/zkevm/common-methods",
      ]
    },
    "develop/ethereum-polygon/matic-js/fx-portal",
    "develop/ethereum-polygon/matic-js/set-proof-api",
    {
      type: "category",
      label: "Advanced",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/ethereum-polygon/matic-js/advanced/abi-manager",
        "develop/ethereum-polygon/matic-js/advanced/plugin",
        "develop/ethereum-polygon/matic-js/advanced/exit-util",
      ],
    },
  ],

  contribute: [
    {
      type: "category",
      label: "Become a Contributor",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "contribute/contributor-guidelines",
        "contribute/bug-bounty-program",
        "contribute/wiki-maintainers",
      ],
    },
    {
      type: "category",
      label: "Style Guide",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["contribute/writing-style", "contribute/tutorial-template"],
    },
    {
      type: "category",
      label: "Translations",
      link: {
        type: "generated-index",
      },
      items: ["contribute/translate"],
    },
  ],

  pos: [
    {
      type: 'html',
      value: 'Polygon PoS',
      className: 'sidebar-title',
    },
    "pos/polygon-architecture",
    {
      type: "category",
      label: "Architecture",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Heimdall",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "pos/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/heimdall/encoder",
                "pos/heimdall/transactions",
                "pos/heimdall/stdtx",
                "pos/heimdall/types",
                "pos/heimdall/validators",
                "pos/heimdall/checkpoint",
                "pos/heimdall/validator-key-management",
                "pos/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/heimdall/modules/auth",
                "pos/heimdall/modules/bank",
                "pos/heimdall/modules/governance",
                "pos/heimdall/modules/staking",
                "pos/heimdall/modules/checkpoint",
                "pos/heimdall/modules/bor",
                "pos/heimdall/modules/topup",
                "pos/heimdall/modules/clerk",
                "pos/heimdall/modules/chainmanager",
              ],
            },
            "pos/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "pos/bor/overview",
            "pos/bor/bor",
            "pos/bor/core_concepts",
            "pos/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "pos/contracts/stakingmanager",
            "pos/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/contracts/plasma_contracts/account_based_plasma",
                "pos/contracts/plasma_contracts/predicates",
                "pos/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "State Sync",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "pos/state-sync/state-sync",
            "pos/state-sync/how-state-sync-works",
          ],
        },
        "home/architecture/security-models",
      ],
    },
  ],
  miden: [
    {
      type: 'html',
      value: 'Polygon Miden',
      className: 'sidebar-title',
    },
    {
      type: "category",
      label: "Miden VM",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "miden/intro/main",
        "miden/intro/architecture",
        "miden/intro/performance",
        {
          type: "category",
          label: "Stack Specifications",
          link: {
            type: "generated-index",
          },
          items: [
            "miden/design/main",
            "miden/design/programs",
            {
              type: "category",
              label: "Program decoder",
              link: {
                type: "generated-index",
              },
              items: [
                "miden/design/decoder/main",
                "miden/design/decoder/constraints"
              ],
            },
            {
              type: "category",
              label: "Operand stack",
              link: {
                type: "generated-index",
              },
              items: [
                "miden/design/stack/main",
                "miden/design/stack/op_constraints",
                "miden/design/stack/system_ops",
                "miden/design/stack/field_ops",
                "miden/design/stack/u32_ops",
                "miden/design/stack/stack_ops",
                "miden/design/stack/io_ops",
                "miden/design/stack/crypto_ops",
              ],
            },
            "miden/design/range",
            {
              type: "category",
              label: "Chiplets",
              link: {
                type: "generated-index",
              },
              items: [
                "miden/design/chiplets/main",
                "miden/design/chiplets/hasher",
                "miden/design/chiplets/bitwise",
                "miden/design/chiplets/memory",
              ],
            },
            "miden/design/multiset",
          ],
        },
        "miden/resources",
      ],
    },
    {
      type: "category",
      label: "Developer Guides",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "miden/user_docs/main",
        "miden/user_docs/usage",
        {
          type: "category",
          label: "Miden Assembly Language",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "miden/user_docs/assembly/main",
            "miden/user_docs/assembly/code_organization",
            "miden/user_docs/assembly/flow_control",
            "miden/user_docs/assembly/field_operations",
            "miden/user_docs/assembly/u32_operations",
            "miden/user_docs/assembly/stack_manipulation",
            "miden/user_docs/assembly/io_operations",
            "miden/user_docs/assembly/cryptographic_operations",
            "miden/user_docs/assembly/execution-context",
          ],
        },
        {
          type: "category",
          label: "Miden Standard Library",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            "miden/user_docs/stdlib/main",
            "miden/user_docs/stdlib/crypto/hashes",
            "miden/user_docs/stdlib/crypto/fri",
            "miden/user_docs/stdlib/math/u64",
            "miden/user_docs/stdlib/sys",
            "miden/user_docs/stdlib/mem",
          ],
        },
      ],
    },
  ],

  zkEVM: [
    {
      type: 'html',
      value: 'Polygon zkEVM',
      className: 'sidebar-title',
    },
    "zkEVM/index",
    "zkEVM/introduction",
    "zkEVM/architecture",
    {
      type: "category",
      label: "zkEVM Protocol",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "zkEVM/protocol/protocol-components",
        "zkEVM/protocol/state-management",
        {
              type: "category",
              label: "Transaction Life Cycle",
              link: {
                type: "generated-index"
              },
              items:[
                "zkEVM/protocol/l2-transaction-cycle-intro",
                "zkEVM/protocol/transaction-execution",
                "zkEVM/protocol/transaction-batching",
                "zkEVM/protocol/transaction-sequencing",
                "zkEVM/protocol/transaction-aggregation",
              ]
        },
        "zkEVM/protocol/incentive-mechanism",
        "zkEVM/protocol/upgradability",
        "zkEVM/protocol/admin-role",
        {
          type: "category",
          label: "Malfunction Resistance",
          link: {
            type: "generated-index",
          },
          items: [
            "zkEVM/protocol/sequencer-resistance",
            "zkEVM/protocol/aggregator-resistance",
            "zkEVM/protocol/emergency-state",
          ],
        },
        {
              type: "category",
              label: "zkEVM Bridge",
              link: {
                type: "generated-index"
              },
              items:[
               "zkEVM/protocol/zkevm-bridge",
               "zkEVM/protocol/exit-tree",
               "zkEVM/protocol/bridge-smart-contract",
               "zkEVM/protocol/flow-of-asset",
              ]
        },
        "zkEVM/protocol/evm-diff",
      ]
    },
    "zkEVM/zknode/zknode-overview",
    {
      type: "category",
      label: "Developer Guides",
      link: {
        type: "generated-index"
      },
      collapsed: false,
      items:[
        "zkEVM/develop",
        "zkEVM/setup-local-node",
        "zkEVM/setup-production-node",
        "zkEVM/zkevm-gas-station",
      ]
    },
    {
      type: "category",
      label: "zkProver",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "zkEVM/zkProver/overview",
        {
          type: "category",
          label: "Basic Concepts",
          link: {
            type: "generated-index",
          },
          items:[
            "zkEVM/zkProver/zkprover-design",
            {
              type: "category",
              label: "mFibonacci SM",
              link: {
                type: "generated-index"
              },
              items:[
                "zkEVM/zkProver/mfibonacci-overview",
                "zkEVM/zkProver/mfibonacci-example",
                "zkEVM/zkProver/commitment-scheme",
                "zkEVM/zkProver/verification-scheme",
                "zkEVM/zkProver/pil-stark",
                "zkEVM/zkProver/pil-stark-demo",
              ]
            },
            {
              type: "category",
              label: "Generic SM",
              link: {
                type: "generated-index"
              },
              items:[
                "zkEVM/zkProver/intro-generic-sm",
                "zkEVM/zkProver/exec-trace-correct",
                "zkEVM/zkProver/ending-program",
                "zkEVM/zkProver/program-counter",
                "zkEVM/zkProver/plookup",
              ]
            },
          ]
        },
        {
          type: "category",
          label: "Storage SM",
          link: {
            type: "generated-index",
          },
          items: [
            "zkEVM/zkProver/intro-storage-sm",
            "zkEVM/zkProver/sparse-merkle-tree",
            "zkEVM/zkProver/simple-smt",
            "zkEVM/zkProver/detailed-smt-concepts",
            "zkEVM/zkProver/basic-smt-ops",
            "zkEVM/zkProver/construct-key-path",
            "zkEVM/zkProver/storage-sm-mechanism",
            "zkEVM/zkProver/executor-pil",
          ],
        },
        "zkEVM/zkProver/arithmetic-sm",
        "zkEVM/zkProver/memory-sm",
        "zkEVM/zkProver/mem-align-sm",
        {
          type: "category",
          label: "Hashing SM",
          link: {
            type: "generated-index",
          },
          items: [
            "zkEVM/zkProver/intro-hashing-sm",
            "zkEVM/zkProver/keccak-framework",
            "zkEVM/zkProver/paddingkk-sm",
            "zkEVM/zkProver/paddingkk-bit-sm",
            "zkEVM/zkProver/bits2field-sm",
            "zkEVM/zkProver/keccakf-sm",
            "zkEVM/zkProver/poseidon-sm",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "zk Assembly",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "zkEVM/zkASM/introduction",
        "zkEVM/zkASM/basic-syntax",
        "zkEVM/zkASM/some-examples",
      ],
    },
    {
      type: "category",
      label: "Polynomial Identity Language",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "zkEVM/PIL/introduction",
        "zkEVM/PIL/simple-program",
        "zkEVM/PIL/pil-compile",
        "zkEVM/PIL/pil-config",
        "zkEVM/PIL/cyclic-nature",
        "zkEVM/PIL/pil-arguments",
        "zkEVM/PIL/connect-programs",
        "zkEVM/PIL/public-values",
        "zkEVM/PIL/permutation-arg",
        "zkEVM/PIL/connect-arg",
        "zkEVM/PIL/pil-plonk",
        "zkEVM/PIL/filling-polynomial",
        "zkEVM/PIL/generate-proof",
      ],
    },
    {
      type: "category",
      label: "FAQs",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "zkEVM/faq/zkevm-general-faq",
        "zkEVM/faq/zkevm-protocol-faq",
        "zkEVM/faq/zkevm-eth-faq",
      ],
    },
    "zkEVM/open-source-repos",
    "zkEVM/glossary",
  ],

  faq: [
    "faq/general-faq",
    "faq/technical-faqs",
    // "faq/delegator-faq",
    "faq/commit-chain-multisigs",
    // "maintain/delegate/delegator-faq",
    "faq/validator-faq",
    "faq/staking-faq",
    "faq/wallet-bridge-faq",
    "faq/consensys-framework",
  ],

  // #####################################################################

  polygonid: [
    {
      type: 'html',
      value: 'Polygon ID',
      className: 'sidebar-title',
    },
    "polygonid/overview",
    "polygonid/issuer/issuer-overview",
    {
      type: "category",
      label: "Verifier",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "polygonid/verifier/verifier-overview",
        {
          type: "category",
          label: "Off-chain verification",
          link: {
            type: "generated-index",
          },
          items: [
            "polygonid/verifier/verification-library/verifier-library-intro",
            "polygonid/verifier/verification-library/verifier-set-up",
            {
              type: "category",
              label: "APIs",
              link: {
                type: "generated-index",
              },
              items: [
                "polygonid/verifier/verification-library/config",
                "polygonid/verifier/verification-library/request-api-guide",
                "polygonid/verifier/verification-library/verification-api-guide",
                "polygonid/verifier/verification-library/zk-query-language",
                "polygonid/verifier/verification-library/jwz",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "On-chain verification",
          link: {
            type: "generated-index",
          },
          items: ["polygonid/verifier/on-chain-verification/overview"],
        },
      ],
    },
    "polygonid/contracts/overview",
    "polygonid/wallet/wallet-overview",
  ],

  // #####################################################################

  supernets: [
    {
      type: 'html',
      value: 'Polygon Supernets',
      className: 'sidebar-title',
    },
    "supernets/index",
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "supernets/get-started/what-are-supernets",
        "supernets/get-started/why-supernets",,
      ],
    },
    {
      type: "category",
      label: "System Design",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "supernets/design/overview",
        {
          type: "category",
          label: "PolyBFT consensus",
          link: {
            type: "generated-index",
          },
          items: [
            "supernets/design/consensus/supernets-pos",
            "supernets/design/consensus/polybft/polybft-overview",
            "supernets/design/consensus/polybft/ibft-overview",
            "supernets/design/consensus/validator/polybft-allowlist",
          ],
        },
        {
          type: "category",
          label: "Cross-chain bridge",
          link: {
            type: "generated-index",
          },
          items: [
            "supernets/design/bridge/overview",
            "supernets/design/bridge/erc20-child-predicate",
            "supernets/design/bridge/erc20-predicate",
            "supernets/design/bridge/statesync",
            "supernets/design/bridge/checkpoint",
          ],
        },
        "supernets/design/assets/erc/erc20",
        "supernets/design/supernets-libp2p",
        {
          type: "category",
          label: "EVM runtime",
          link: {
            type: "generated-index",
          },
          items: [
            "supernets/design/runtime/supernets-runtime",
            "supernets/design/runtime/supernets-runtime-allowlist",
          ],
        },
        "supernets/design/supernets-blockchain",
        "supernets/design/supernets-mempool",
        "supernets/design/supernets-txpool",
        "supernets/design/supernets-txrelayer",
        "supernets/design/supernets-json-rpc",
        "supernets/design/supernets-grpc",
      ],
    },
    {
      type: "category",
      label: "Build a Supernet",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "supernets/operate/supernets-requirements",
        "supernets/operate/supernets-install",
        {
          type: "category",
          label: "Deploy in non-bridge mode",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "supernets/operate/supernets-local-deploy",
            "supernets/operate/supernets-setup-dev-env",
          ],
        },
        "supernets/operate/supernets-local-deploy-supernet",
        "supernets/operate/supernets-bridge",
        {
          type: "category",
          label: "Interfaces",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "ERC20",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/erc20/native-erc20",
                "supernets/interfaces/erc20/childerc20",
                "supernets/interfaces/erc20/childerc20-predicate",
                "supernets/interfaces/erc20/rooterc20-predicate",
              ],
            },
            {
              type: "category",
              label: "ERC1155",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/erc1155/childerc1155",
                "supernets/interfaces/erc1155/childerc1155-predicate",
                "supernets/interfaces/erc1155/rooterc1155-predicate",
              ],
            },
            {
              type: "category",
              label: "ERC721",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/erc721/childerc721",
                "supernets/interfaces/erc721/childerc721-predicate",
                "supernets/interfaces/erc721/rooterc721-predicate",
              ],
            },
            {
              type: "category",
              label: "Network",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/network/checkpoint-manager",
                "supernets/interfaces/network/exit-helper",
                "supernets/interfaces/network/state-receiver",
                "supernets/interfaces/network/state-sender",
              ],
            },
            {
              type: "category",
              label: "Validators",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/validators/validator",
                "supernets/interfaces/validators/validator-set-base",
                "supernets/interfaces/validators/root-validator-set",
              ],
            },
            {
              type: "category",
              label: "Cryptography",
              link: {
                type: "generated-index",
              },
              items: [
                "supernets/interfaces/cryptography/bls",
                "supernets/interfaces/cryptography/bn256g2",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Modules",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "supernets/modules/access-control",
            "supernets/modules/staking",
            "supernets/modules/delegation",
            "supernets/modules/withdraw",
            "supernets/modules/storage",
          ],
        },
        "supernets/operate/supernets-ibft-to-polybft",
        "supernets/operate/supernets-performance",
        "supernets/operate/supernets-faqs",
      ],
    },
    {
      type: "category",
      label: "JSON RPC Commands",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "supernets/api/json-rpc-eth",
        "supernets/api/json-rpc-net",
        "supernets/api/json-rpc-web3",
        "supernets/api/json-rpc-txpool",
        "supernets/api/json-rpc-debug",
        "supernets/api/json-rpc-bridge",
      ],
    },
    "supernets/supernets-faq",
    "supernets/supernets-changelog",
  ],
};
