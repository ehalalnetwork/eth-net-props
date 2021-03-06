const getExplorerAccountLinkFor = (account, network) => {
    const prefix = getExplorerPrefix(network)
	const POAnetwokIDs = [77, 99]
	if (POAnetwokIDs.includes(parseInt(network))) {
    	return `https://${prefix}poaexplorer.com/address/search/${account}`
    } else {
    	return `https://${prefix}etherscan.io/address/${account}`
    }
}

const getExplorerTxLinkFor = (hash, network) => {
	const prefix = getExplorerPrefix(network)
	const POAnetwokIDs = [77, 99]
     if (POAnetwokIDs.includes(parseInt(network))) {
    	return `https://${prefix}poaexplorer.com/txid/search/${hash}`
    } else {
    	return `https://${prefix}etherscan.io/tx/${hash}`
    }
}

const getExplorerTokenLinkFor = (tokenAddress, account, network) => {
	const prefix = getExplorerPrefix(network)
	const POAnetwokIDs = [77, 99]
	if (POAnetwokIDs.includes(parseInt(network))) {
		return `https://${prefix}poaexplorer.com/address/search/${tokenAddress}`
	} else {
		return `https://${prefix}etherscan.io/token/${tokenAddress}?a=${account}`
	}
}

function getExplorerPrefix (network) {
	const net = parseInt(network)
	let prefix
	switch (net) {
	    case 1: // main net
	    prefix = ''
	    break
	    case 3: // ropsten test net
	    prefix = 'ropsten.'
	    break
	    case 4: // rinkeby test net
	    prefix = 'rinkeby.'
	    break
	    case 42: // kovan test net
	    prefix = 'kovan.'
	    break
	    case 77: // POA Sokol test net
	    prefix = 'sokol.'
	    break
	    case 99: // POA Core net
	    console.warn('Do not use etherscan for POA Network')
	    prefix = ''
	    break
	    default:
	    prefix = ''
	}
	return prefix
}

module.exports = {
	getExplorerAccountLinkFor,
	getExplorerTxLinkFor,
	getExplorerTokenLinkFor,
}
