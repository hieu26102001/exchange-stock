

const getAbiContract = async () => {
    let tronWeb = window.tronWeb
    let contract = await tronWeb.contract().at('TBxuyKe1tRCs1jv7KE4eSzx56Bc9n5LRgm');
    return contract
}

export default getAbiContract