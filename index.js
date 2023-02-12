const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))



     // Load the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Create the player object once the API code has loaded.
      var players = [];
      function onYouTubeIframeAPIReady() {
        createPlayer('cover-image-1', 'video-container-1', 'Hn3w0Zh0vQc');
        createPlayer('cover-image-2', 'video-container-2', 'tQqq4Id6vM8');
        createPlayer('cover-image-3', 'video-container-3', 'tQqq4Id6vM8');
        
        // Add calls to createPlayer() for each additional video as needed
      }

      // Create a new player instance for a video
      function createPlayer(coverImageId, videoContainerId, videoId) {
        var player = new YT.Player(videoContainerId, {
          height: '360',
          width: '640',
          videoId: videoId,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        players.push(player);
          // Show the video when the user clicks on the cover image.
        var coverImage = document.getElementById(coverImageId);
        coverImage.addEventListener('click', function() {
          coverImage.style.display = 'none';
          document.getElementById(videoContainerId).style.display = 'block';
          player.playVideo();
        });
      }

      // The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // The API calls this function when the player's state changes.
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
          // Do something when the video has ended.
        }
      }



/*       const accessToken = "YOUR_ACCESS_TOKEN";
const userName = "Ashwin-krish-nan";

fetch(`https://api.github.com/users/${userName}/events/public?access_token=${accessToken}`)
  .then(response => response.json())
  .then(events => {
    const calendar = document.getElementById("calendar");

    events.forEach(event => {
      const eventDate = new Date(event.created_at).toLocaleDateString();
      const eventType = event.type;

      calendar.innerHTML += `
        <p>
          <strong>${eventDate}</strong>
          <br>
          ${eventType}
        </p>
      `;
    });
  }); */