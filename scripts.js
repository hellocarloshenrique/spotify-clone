document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg'},
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'}
    ];
    
    const albumsData = [
        {name: 'White Noise (Sleep & Relaxation Sound', artist: 'Sleepy John', image: './img/album-white-noise.jpg'},
        {name: 'White Noise (Sleep & Relaxation Sound', artist: 'Sleepy John', image: './img/album-white-noise.jpg'},
        {name: 'White Noise (Sleep & Relaxation Sound', artist: 'Sleepy John', image: './img/album-white-noise.jpg'},
        {name: 'White Noise (Sleep & Relaxation Sound', artist: 'Sleepy John', image: './img/album-white-noise.jpg'},
        {name: 'White Noise (Sleep & Relaxation Sound', artist: 'Sleepy John', image: './img/album-white-noise.jpg'},
        {name: 'White Noise (Sleep & Relaxation Sound', artist: 'Sleepy John', image: './img/album-white-noise.jpg'}
    ];

    const artistsGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src='${artist.image}' alt='image do ${artist.name}'>
            <h3>${artist.name}</h3>
            <p>artista</p> 

        `
        artistsGrid.appendChild(artistCard)
    })


    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
        <img src='${album.image}' alt='imagem do ${album.name}'>
        <p>${album.name}</p>
        `
        
        albumsGrid.appendChild(albumCard)
    })
})
