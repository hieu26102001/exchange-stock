import TronWeb from 'tronweb'

const TRONGRID_API = 'https://api.shasta.trongrid.io';

const tronWeb = new TronWeb({
    fullHost: TRONGRID_API, // Use the appropriate full node URL
  });

export default tronWeb