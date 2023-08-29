const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchField = form.elements.query;
    const searchQuery = searchField.value;
    const config = {
        params: {
            q: searchQuery
        }
    };
    removeExistingImgs();
    try {
        const res = await axios.get(`https://api.tvmaze.com//search/shows`, config);
        makeImages(res.data);
        form.reset();
    } catch (error) {
        console.log('Error: Show Not found')
    }
});

const makeImages = function (shows) {
    for (item of shows) {
        const imgSrc = item.show.image && item.show.image.medium;
        if(imgSrc) {
            const img = document.createElement('IMG');
            img.src = imgSrc;
            document.body.append(img);
        }
    }
}

const removeExistingImgs = function () {
    const imgs = document.querySelectorAll('img');
    for (item of imgs) {
        item.remove();
    }
}