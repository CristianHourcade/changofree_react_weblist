export const HomeTemplateStyle2 = () => {
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
        box-shadow: 0px 2px 9px -4px black;
    }
      header {
        background-size: cover;
        background-position: center center;
    }
    h3,
    h5 {
        font-family: poppins;
    }
    
    .img-cat {
        width: 100%;
    }
    #instagramFeed {
        background: #fafafa;
        padding: 40px;
        @media screen and (max-width: 768px) {
            padding: 20px;
            h3 {
                font-size: 20px;
            }
        }
    }
    .img-cat:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition: 0.5s all;
    }
    #btn-banner {
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
    hr {
        border-bottom: 3px solid rgb(0 0 0 / 5%);
    }
    
    .btn-primary {
        width: 325px;
        border-radius: 3px;
        border: 0;
        padding: 10px 15px;
        box-shadow: 0px 2px 9px -4px black;
    }
    
    .first-category {
        height: 500px;
        background-size: cover!important;
        background-repeat:no-repeat;
        background-position: center center !important;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 50px;
        transition: 0.3s;
    
        button {
            color: #fff;
            text-decoration: none;
            background-color: #ed00d5;
            font-family: poppins;
            padding: 15px 30px;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 600;
            transition: 0.3s;
            border: 0px;
    
        }
        button:hover {
            background: white;
            color: black;
        }
    }
    .sec-category {
        height: 250px;
        background-size: contain!important;
        background-repeat: no-repeat!important;
        transition: 0.3s;
        background-position: center center !important;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 50px;
        transition: 0.3s;
    
        button {
            border: 0px;
            color: #fff;
            text-decoration: none;
            background-color: #ed00d5;
            font-family: poppins;
            padding: 15px 30px;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 600;
            transition: 0.3s;
        }
        button:hover {
            background: white;
            color: black;
        }
    }
    
    .sec-category:hover {
        background-size: 110% !important;
        background-position: center center;
    }
    
    .btn-ver{
        color: #fff;
        text-decoration: none;
        background-color: #ed00d5;
        font-family: poppins;
        padding: 15px 30px;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
        transition: 0.3s;
        border: 0px;
    }
      `}</style>
    );
  };
  