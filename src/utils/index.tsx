

const getAbiContract = async () => {
    let tronWeb = window.tronWeb
    let contract = await tronWeb.contract().at('TTaKmsZkNQSDaz4WWwd9PLEvjAkXXD9cZA');
    return contract
}

export default getAbiContract