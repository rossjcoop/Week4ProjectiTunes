const site = "https://itunes.apple.com/search?term="
let url = site
let player = document.getElementById("player")
let musicPlayer = document.getElementById("music-player")
let searchbox = document.getElementById("searchbox")
let results = document.getElementById("results")
let submit = document.getElementById("submit")




submit.addEventListener('click', function(event) {
  //2. Grab value of search box and add it to the url
    
    url = site 
    url += searchbox.value + "&country=us"
    console.log(url)
  //3. call doFetch()
    results.innerHTML = ""
    doFetch();
});


//1. wrap fetch in it's own function
function doFetch() {
fetch(url)
	.then(

		function(response) {

      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {

          //console.log(data)
          data.results.forEach(function(data){


          let resultBlock = '' 

          resultBlock = `

          
          <div id = "resultcontainer">
          <a href = "${data.previewUrl}">  
          <img class = "thumbnail" src = "${data.artworkUrl100}" alt = "${data.collectionName}">
          </a>
          <p><span style = "font-weight: bold">Album: </span>${data.collectionName}<p>
          <p><span style = "font-weight: bold">Artist: </span> ${data.artistName}<p>
          <p><span style = "font-weight: bold">Track: </span>${data.trackName}</p>
          </div>
          

          `
          ///add event listener when pic is clicked or maybe just put a link on each to lister


          results.innerHTML += resultBlock


          })
        
        	let albums = document.querySelectorAll("#resultcontainer a")
        	console.log(albums)
			albums.forEach(function(item) {
			item.addEventListener("click", function(event){
			event.preventDefault()
			let alink = item.getAttribute("href")
			document.querySelector("audio").setAttribute("src", alink)
		})
	})
          ///Going to put the audio player in innerHTML to play with search
          


        // console.log("Here is the data:", data);
        // reqListener(data); 

      });
    }
  )
	

		
		
		

		// Urllet audio = document.getElementById("audioPlayer")
		// let source = document.getElementsByTag
		// let musicLink = data.preview

		




	}







    
  // .catch(function(err) {
  //   console.log("Fetch Error :-S", err);
  // });
// }

/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play