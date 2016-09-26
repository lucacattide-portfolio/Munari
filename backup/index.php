<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MUNARI | COMUNICAZIONE</title>
<link rel="stylesheet" type="text/css" href="css/style.css">


</head>

<body>

<div class="coming">
  <h2> WAITING FOR THE NEW <strong>WEBSITE</strong> </h2>
</div>

<div class="backE"></div>


  <center>
    <div class="logo">
     <img src="img/Munari_communication.png" alt=">MUNARI | COMUNICAZIONE" />
    </div>
    
    <div class="profile">
      <h3><i class="fa fa-angle-down"></i>profile</h3>
    </div>
    
    <div class="clients">
      <h3><i class="fa fa-angle-down"></i>clients</h3>
    </div>
    
     <div class="contacts">
      <h3> <a href="mailto:martina.rolla@munaripr.com"><i class="fa fa-angle-down"></i>contacts</a></h3>
    </div>
    
    
    
  </center>
  

  <div class="txt">
   <p>This is our job. Image building, visual communication, public relations. We work as an international press office.</p>
   <p>We organize special events and fashion shows. We don’t be- lieve in simple collaborations, but in tactful meddling. We like cohabitations and not casual acquaintances.</p>
   <p>It is a passion affair. For details. Care. Innovation Image and communication. In all its implications. We study. <br>
      The client’s needs. The market’s claims. The people’s mood.</p> 
  </div>



  <div class="txt2">
    <a target="_blank" href="http://ateliernotify.com">atelier notify</a>
    <a target="_blank" href="https://www.herschelsupply.com">herschel</a>
    <a target="_blank" href="https://www.marshallheadphones.com">marshall headphones</a>
    <a target="_blank" href="https://www.stance.com">stance</a>
    <a target="_blank" href="https://www.komono.com">komono</a>
    <a target="_blank" href="http://www.nuk.it">nuk</a>
    <a target="_blank" href="http://www.lrwonder.com">lrwonder</a>
    <a target="_blank" href="http://www.polerstuff.com">poler</a>
    <a target="_blank" href="http://obeyclothing.com">obey</a>
    <a target="_blank" href="http://www.wesc.com">wesc</a>
    <a target="_blank" href="http://www.brixton.com">brixton</a>  
    <a target="_blank" href="https://www.happysocks.com">happy socks</a>
    <a target="_blank" href="http://publishbrand.com">publish</a>
    <a target="_blank" href="http://www.herosheroine.com">heros heroine</a>
    <a target="_blank" href="http://nineinthemorning.com">nineinthemorning</a>
    <a target="_blank" href="http://www.hufworldwide.com">huf</a>
    <a target="_blank" href="http://www.studswar.com">studswar</a>
    <a target="_blank" href="https://nativeshoes.com">native</a>
    <a target="_blank" href="http://www.fondazionedemarchi.it">fondazione de marchi onlus</a>
    <a target="_blank" href="http://www.progettosorrisonelmondo.org">progetto sorriso nel mondo onlus</a>
  </div>



<script src="js/jquery-1.12.2.min.js"></script>
<script src="js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript">

 $(document).ready(function(e) {
	 
	 
	 $(".backE").on("click",function(){
	
	   $(".txt2, .txt, .logo").removeClass( "active" );
	  
	});
    

	$(".profile").on("click",function(){
	
	   $(".txt2").removeClass( "active" );
	   setTimeout(function(){ 
	   
	     $(".logo").addClass( "active" ); 
		 
		 $(".txt").addClass( "active" ); 
	   
	   },300);
	  
	});
	
	$(".clients").on("click",function(){
		
	   $(".txt").removeClass( "active" );
	   setTimeout(function(){ 
	   
	     $(".logo").addClass( "active" ); 
		 
		 $(".txt2").addClass( "active" );   
	   
	    },300);
	  
	});
	
	
	
  });

 $(window).on("load resize", function() {
	 
	/* var WW = $(window).width();
	 
	 var WH = $(window).height();
	 
	 var LogoH = $(".logo").height();
	 
	 var CentL = Math.ceil( ( WH  -  LogoH ) / 2.7 );
	 
	 $(".logo").css({"margin-top": CentL + "px" });*/
	 
    
 });
</script>

</body>

</html>