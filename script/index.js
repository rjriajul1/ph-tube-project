
function removeActiveClass(){
    const activeClasses = document.getElementsByClassName('active')
    
    for(let btn of activeClasses){
        btn.classList.remove('active')
    }
}

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
    .then(data=>{
        document.getElementById('btn-all').classList.add('active')
        videoDisplay(data.videos)
    })
}

const loadCategorieVidoes = (id) =>{

    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        removeActiveClass()
        const clickedButton = document.getElementById(`btn-${id}`)
         clickedButton.classList.add('active')
        videoDisplay(data.category)
    })

    
}


// video display
const videoDisplay = (videos) => {
    
    const videosCardContainer = document.getElementById('card-container');

    videosCardContainer.innerHTML='';

    if(videos.length==0){
         videosCardContainer.innerHTML=`
         
        <div  class=" col-span-full py-20">
            <div class="flex justify-center items-center">
                <img src="assets/Icon.png" alt="">
            </div>
            <div>
                <h1 class="text-center font-bold text-3xl w-9/12 md:w-2/5 lg:w-1/5 mx-auto py-2">Oops!! Sorry, There is no content here</h1>
            </div>
        </div>
         `
        return;
    }

    for(let i = 0; i<videos.length; i++){
        const video = videos[i];
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
            <div class="flex gap-4 py-4  items-center">
                <div>
                    <div class="avatar">
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

// categories button display
function displayCategoriesBtn(categories){
 
    const categoriesContainer = document.getElementById('categories-container');

    for(const category of categories){
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML=`
        <button id="btn-${category.category_id}" onclick="loadCategorieVidoes(${category.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>
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