# eth-net-props
Get properties of EVM compatible networks

Example of usage:

```
const ethNetProps = require('eth-net-props')

const addr = '0x02c6A1Fb7F074fF168Da43307EC8c39c6b88Fd01'
const networkID = 99

//gets explorer's link to account
const explorerUrlForAccount = ethNetProps.explorerLinks.getExplorerAccountLinkFor(addr, networkID)

//gets explorer's link to token
const tokenAddr = '0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE'
const explorerUrlForToken = ethNetProps.explorerLinks.getExplorerTokenLinkFor(tokenAddr, addr, networkID)

//gets explorer's link to tx
const txHash = '0x793388b1aec9a40027d7b356db6bae040edc67459e3d9569bdc78435182c6703'
const explorerUrlForTx = ethNetProps.explorerLinks.getExplorerTxLinkFor(txHash, networkID)
```
