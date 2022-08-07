export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Lb4IOu8D97FD75iEQRBUUCYDKE1x0bTa&q=${category}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // no vi este return
    return gifs;
}