let data = []
let pageCount=0;
const getData = async (page = 0) => {
    if (data.length === 0) { 
      const response = await fetch(`https://api.tvmaze.com/shows`);
      data = await response.json(); 
    }
        const imageContainer = document.getElementById('cards');
        const moviesToDisplay = data.slice(page * 20, (page + 1) * 20);
        moviesToDisplay.forEach(image => {
            const imageElement = `
                <a href="detail.html?id=${image.id}" class="card">
                    <div class="container">
                        <img src="${image.image.medium}" class="photo">
                    </div>
                    <h6>${image.name}</h6>
                </a>
            `;
            imageContainer.innerHTML += imageElement; 

        });
    
}


window.onload = () => {
    getData(pageCount);
  };
  
  document.querySelector(".btn-loadmore").addEventListener("click", () => {
    pageCount++; 
    getData(pageCount); 
  });


  const showMovieDetails = (movieId) => {
    if (movieId) {
        window.location.href = `detail.html?id=${movieId}`;
    }
  };

 