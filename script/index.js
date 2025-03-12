// categories data api taka fetch
function categoriesBtnDataLoad(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then(data => displayCategoriesBtn(data.categories))
}

// video data api taka fetch

function videoDataLoad(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then(data=>videoDisplay(data.videos))
}

// video display
const videoDisplay = (videos) => {
    
    const videosCardContainer = document.getElementById('card-container');

    for(let i = 0; i<videos.length; i++){
        const video = videos[i];
        console.log(video);
        const videoDiv = document.createElement('div')
        videoDiv.innerHTML=`
        
         <div class="w-full h-max  bg-base-100  ">
            <figure class="relative">
              <img
                class="w-full h-50 object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                 <span class="absolute right-4 bottom-3 bg-black text-white rounded-md p-1 text-sm">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-4 py-4 justify-center items-center">
                <div>
                    <div class="avatar p-2">
                        <div class="ring-primary ring-offset-base-100 w-12  rounded-full ring ring-offset-2">
                          <img  src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div>
                    <h2 class="font-bold">${video.title}</h2>
                    <p class="text-gray-400 gap-2 flex">${video.authors[0].profile_name}
                       <img class="w-5 h-5 object-cover " src="    https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                    </p>
                    <span class="text-gray-400">${video.others.views} views</span>
                </div>
            </div>
          </div>
        
        `
        videosCardContainer.append(videoDiv)
    }
   
    
}

// data display
function displayCategoriesBtn(categories){
 
    const categoriesContainer = document.getElementById('categories-container');

    for(const categorie of categories){
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML=`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${categorie.category}</button>
        `
        categoriesContainer.append(btnDiv)
    }

}

categoriesBtnDataLoad()



// {
//     "category_id": "1001",
//     "category": "Music"
// }


// {
//     "category_id": "1001",
//     "video_id": "aaah",
//     "thumbnail": "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
//     "title": "Colors of the Wind",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/6r4cx4P/ethen-clack.png",
//             "profile_name": "Ethan Clark",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "233K",
//         "posted_date": "16090"
//     },
//     "description": "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music."
// }