const generateSTYLES = () => {
    return `<style>
    *{
        margin:0;
        padding:0;
    }
    img{
        height:100vh;
        width:100vw;
        overflow:hidden;
        position:relative;
        z-index:20;
    }
    div{
        position:fixed;
        top:100px;
        font-size:150px;
        color:white;
        z-index:100;
        left:100px
    }
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
        <div>go back to work</div>
        <img src = "https://weebslife.com/wp-content/uploads/2022/01/Lofi-Girl-Gif.gif">
        
     `;
  };
  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "www.roblox.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("ROBLOX");
      break;
    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("DISCORD");
      break;
    case "www.spotify.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SPOTIFY");
      break;
  }