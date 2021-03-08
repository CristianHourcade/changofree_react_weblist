export const HomeTemplateStyle1 = () => {
  return (
    <style jsx="true">{`
    header{
      background-size: cover;
      background-position: center center;
  }
  h3,h5{
      color:#464646;
      font-family: template1;
  }
  
  .img-cat{
      width: 100%;
  }
  #instagramFeed{
      background: #fafafa;
      padding: 40px;
      @media screen and (max-width:768px) {
          padding:20px;
          h3{
              font-size: 20px;
          }
      }
  }
  .img-cat:hover{
      transform: scale(1.1);
      cursor: pointer;
      transition: .5s all;   
  
  }
  #btn-banner{
      position: absolute;
      bottom: 0px;
      width: 100%;
      left: 1 0px;
      background: #d5d6ff;
      border-radius: 4px;
      font-family: "template1";
      padding: 11px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      color: #154373;
      background-image: url("/assets/bg.png");
  }
  hr{
      border-bottom:3px solid rgb(0 0 0 / 5%);
  }
  
  
  
  .btn-primary {
      width: 325px;
      border-radius: 3px;
      border: 0;
      padding: 10px 15px;
  }
    `}</style>
  );
};
