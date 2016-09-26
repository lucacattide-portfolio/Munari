// Inizio JavaScript

<!--

// Dichiarazione Variabili Globali
	
var controlloPattern = 1; // Inizializzazione colore mappa con pattern default
var salvaPattern = []; // Inizializzazione vettore pattern selezionati
var i = 0; // Inizializzazione contatore click
var stileMappa = 1; // Dichiarazione ed Inizializzazione variabile template mappa
var puntaMappa = null; // Dichiarazione ed Inizializzazione identificatore mappa

$(document).ready(function() {
		
	inizializza(); // Invocazione Funzione Inizializzazioni 	
	transizioni(); // Invocazione Funzione Transizioni
	impostaMappa(); // Invocazione Funzione Impostazioni Mappa

}); 


// Funzione Inizializzazione Carousel

$(function() {
			
    $('#about_carousel .container_carousel.jcarousel').jcarousel({ // Dichiarazione ed inizializzazione Carousel
		
		vertical: true, // Orientamento

    });
		
	// Controlli
	
	$('.menu_contestuale_container.jcarousel-pagination').jcarouselPagination({ // Inizializzazione controlli Carousel
		
        item: function(page) { // Inizializzazione elementi menu
			
            return '<a href="#' + page + '" class="selezione_contestuale"></a>'; // Restituisci elemento
			
        }
		
    });
	$(".menu_contestuale.about").addClass("contestuale_sopra"); // Reset Menu
	$('.menu_contestuale_container.jcarousel-pagination a:first-child').addClass("selezione_attiva"); // Seleziona il primo elemento
	$(".menu_contestuale_container.jcarousel-pagination a:not('.selezione_attiva')").addClass("selezione_sopra"); // Ridimensiona il menu
	$('.menu_contestuale_container.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() { // A selettore attivo - Click
	
		$(".selezione_contestuale").removeClass("selezione_sopra"); // Reset Container
		$(".selezione_contestuale").removeClass("selezione_attiva"); // Reset menu
        $(this).siblings("a").addClass("selezione_sopra"); // Ridimensiona container
		$(this).removeClass("selezione_sopra");
        $(this).addClass("selezione_attiva"); // Attiva selezione
		
    });
			
	// Responsive
	
	$('.jcarousel').on('jcarousel:create jcarousel:reload', function() { // All'inizializzazione ed al caricamento del Carousel
        
		var element = $(this), height = element.innerHeight(); // Dichiarazione ed inizializzazione altezza attuale elemento

        element.jcarousel('items').css('height', height + 'px'); // Imposta l'altezza attuale
		
    });
	
});



// Inizializzazione Custom Scrollbar

(function($){
	
	$(window).on("load",function() { // Al caricamento della pagina 
	
		$(".home_sx.about article p, .home_sx.fashion article p, .menu_brands, .home_sx.lifestyle article p, .menu_brands_1").mCustomScrollbar({
			
			autoHideScrollbar: true,
			autoExpandScrollbar: false,
			autoDraggerLength: false,
			contentTouchScroll: 5,
			documentTouchScroll: false,
			mouseWheel: { 
			
				enable: true 
				
			},
			theme: "munari"
		
		}); // Inizializza plugin
	
	});
	
})(jQuery);


// Funzione Inizializzazioni

function inizializza() {
		
	// Animazione Sfondo - Mobile
	
	controlloSetAnimaSfondo(); // Invocazione Funzione Controllo Impostazione Animazione Sfondo
	
	$(window).on("resize", function() {
		
		controlloSetAnimaSfondo(); // Invocazione Funzione Controllo Impostazione Animazione Sfondo
		
	});
		
}


// Funzione Transizioni

function transizioni() {
				
	// Logo
	
	$("#container_logo").addClass("animated fadeIn container_logo_max");	
	$("#cornice_logo").addClass("cornice_logo_max");
	
	// Sfondo iniziale
	
	// Colore di sfondo random
	
	$(".home_sx.home").css({ // SX
		
		"background-color": "" + sfondoRandom_1() + "" // Invocazione Funzione Colore di sfondo casuale ed assegnazione
		
	});
	$(".home_dx.home").css({ // DX
		
		"background-color": "" + sfondoRandom_2() + "" // Invocazione Funzione Colore di sfondo casuale ed assegnazione
		
	});
			
	setTimeout(function() {
	
		$(".home_sx.home").addClass("home_sx_in");
		$(".home_dx.home").addClass("home_dx_in");
		$("#pulsante_menu").addClass("animated slideInUp"); // Ingresso Hamburger
		$("#menu_colore").addClass("animated slideInDown"); // Ingresso Colore
	
	}, 2000);
	
	setTimeout(function() {
		
		$("#pulsante_menu").addClass("mostra"); // Ingresso Hamburger	
		
	}, 3000);
	setTimeout(function() {
		
		$("#menu_colore").addClass("mostra"); // Ingresso Menu Colore	
		
	}, 3500);
	setTimeout(function() {
		
		$("#menu_colore").removeClass("animated slideInDown"); // Ingresso Menu Colore
		
	}, 4000);
			
	// Menu Principale - Pulsante

	$("#pulsante_menu").on("click tap", function() { // Al click sul pulsante
	
		$(this).toggleClass("menu_attivo"); // Attiva il menu principale
		
		if ($(window).width() <= 768) { // Se siamo su mobile
		
			$(".home_sx.about").toggleClass("allunga"); // Allunga sfondo
			$(".home_sx.fashion").toggleClass("allunga"); // "
			$(".home_sx.lifestyle").toggleClass("allunga"); // "
			$(".home_sx.contacts").toggleClass("allunga"); // "
		
		}
		
		$("#logo").toggleClass("logo_out"); // Solo su safari - Nascondi e disabilita transizione su cambio logo
		
		$("#pulsante_menu #sand_1").toggleClass("pulsante_1_attivo"); // Anima linea
		$("#pulsante_menu #sand_2").toggleClass("pulsante_2_attivo"); // Anima linea
		$("#pulsante_menu #sand_3").toggleClass("pulsante_3_attivo"); // Anima linea
		$("#pulsante_menu #sand_4").toggleClass("pulsante_4_attivo"); // Anima linea
		$("#pulsante_menu #sand_5").toggleClass("pulsante_5_attivo"); // Anima linea
		
		$("#logo").toggleClass("logo_in"); // Solo su safari - Mostra e disabilita transizione su cambio logo
		
		secondoPiano_2(); // Invocazioen Funzione Secondo Piano 2
		
		$(window).on("resize", function() { // Al ridimensionamento della viewport
			
			secondoPiano_2(); // Invocazioen Funzione Secondo Piano 2	
			
		});

		$("#container_logo").toggleClass("menu_container_logo"); // Cambia il colore
		$("#cornice_logo").toggleClass("menu_cornice_logo"); // Cambia il colore
		$("#logo").toggleClass("menu_logo"); // Cambia il colore
		
		$("#menu_principale ul li:first-child").toggleClass("voce_1"); // Visualizza le voci
		$("#menu_principale ul li:nth-child(2)").toggleClass("voce_2"); // Visualizza le voci
		$("#menu_principale ul li:nth-child(3)").toggleClass("voce_3"); // Visualizza le voci
		$("#menu_principale ul li:last-child").toggleClass("voce_4"); // Visualizza le voci

		// Controllo Visibilità Menu
	
		controlloMenu(); // Invocazione Funzione Controllo Menu	
		controlloLogo(); // Invocazione Funzione Controllo Logo
		
		$(window).on("resize", function() { // Al ridimensionamento della finestra
			
			controlloLogo(); // Invocazione Funzione Controllo Logo
			
		});
							
	});
	
	// Controllo livello Menu
		
	$("#pulsante_menu").on("click tap", function() { // Al click dispari
						
		if (i === 0) {
			
			$("#menu_principale").addClass("avanti_1"); // Porta in primo piano il menu	
			i = 1;
			
		} else {
			
			setTimeout(function() {
	
				$("#menu_principale").removeClass("avanti_1"); // Porta in secondo piano il menu
	
			}, 1000);
			
			i = 0; // Reset contatore click
			
		}
		
	});
	
	// Menu Principale - Navigazione
	
	$("#menu_principale ul li:first-child a").hover(function() { // Al passaggio del mouse sulla voce
			
		$(".home_sx").removeClass("pattern_uno_sx"); // Rimuove il selettore del template
		$(".home_sx").removeClass("pattern_due_sx"); // Rimuove il selettore del template
		$(".home_sx").removeClass("pattern_tre_sx"); // Rimuove il selettore del template
		
		$(".home_sx").addClass("home_sfondo_about_sx"); // Cambia i colori
		
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_uno_dx"); // Rimuove il selettore del template
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_due_dx"); // Rimuove il selettore del template
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_tre_dx"); // Rimuove il selettore del template
		
		$(".home_dx").addClass("home_sfondo_about_dx");	 // Cambia i colori	
		
	}, function() {
		
		// Cambia i colori
		
		$(".home_sx").removeClass("home_sfondo_about_sx");
		$(".home_dx").removeClass("home_sfondo_about_dx");	
		
	});
	$("#menu_principale ul li:nth-child(2) a").hover(function() { // Al passaggio del mouse sulla voce
		
		// Cambia i colori
		
		$(".home_sx").removeClass("pattern_uno_sx"); // Rimuove il selettore del template
		$(".home_sx").removeClass("pattern_due_sx"); // Rimuove il selettore del template
		$(".home_sx").removeClass("pattern_tre_sx"); // Rimuove il selettore del template
		
		$(".home_sx").addClass("home_sfondo_fashion_sx"); // Cambia i colori
		
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_uno_dx"); // Rimuove il selettore del template
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_due_dx"); // Rimuove il selettore del template
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_tre_dx"); // Rimuove il selettore del template
		
		$(".home_dx").addClass("home_sfondo_fashion_dx");	 // Cambia i colori		
		
	}, function() {
		
		// Cambia i colori
		
		$(".home_sx").removeClass("home_sfondo_fashion_sx");
		$(".home_dx").removeClass("home_sfondo_fashion_dx");	
		
	});
	$("#menu_principale ul li:nth-child(3) a").hover(function() { // Al passaggio del mouse sulla voce
		
		$(".home_sx").removeClass("pattern_uno_sx"); // Rimuove il selettore del template
		$(".home_sx").removeClass("pattern_due_sx"); // Rimuove il selettore del template
		$(".home_sx").removeClass("pattern_tre_sx"); // Rimuove il selettore del template
		
		$(".home_sx").addClass("home_sfondo_lifestyle_sx"); // Cambia i colori
		
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_uno_dx"); // Rimuove il selettore del template
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_due_dx"); // Rimuove il selettore del template
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_tre_dx"); // Rimuove il selettore del template
		
		$(".home_dx").addClass("home_sfondo_lifestyle_dx");	 // Cambia i colori	
		
	}, function() {
		
		// Cambia i colori
		
		$(".home_sx").removeClass("home_sfondo_lifestyle_sx");
		$(".home_dx").removeClass("home_sfondo_lifestyle_dx");	
		
	});
	$("#menu_principale ul li:last-child a").hover(function() { // Al passaggio del mouse sulla voce
		
		// Cambia i colori
		
		$(".home_sx").removeClass("pattern_uno_sx"); // Rimuove il selettore del template
		$(".home_sx").removeClass("pattern_due_sx"); // Rimuove il selettore del template
		$(".home_sx").removeClass("pattern_tre_sx"); // Rimuove il selettore del template
		
		$(".home_sx").addClass("home_sfondo_contacts_sx"); // Cambia i colori
		
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_uno_dx"); // Rimuove il selettore del template
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_due_dx"); // Rimuove il selettore del template
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_tre_dx"); // Rimuove il selettore del template
		
		$(".home_dx").addClass("home_sfondo_contacts_dx");	 // Cambia i colori	
		
	}, function () {
		
		// Cambia i colori
		
		$(".home_sx").removeClass("home_sfondo_contacts_sx");
		$(".home_dx").removeClass("home_sfondo_contacts_dx");		
		
	});
	
	// Navigazione - Selezioni
	
	$("#menu_principale ul li a").on("click tap", function() { // Al click di una voce
	
		// Chiudi il menu
				
		setTimeout(function() {
	
			$("#menu_principale").removeClass("avanti_1"); // Porta in secondo piano il menu
	
		}, 1000);
		
		i = 0; // Reset contatore click
				
		$("#pulsante_menu").removeClass("menu_attivo"); // Attiva il menu principale
		
		$("#pulsante_menu #sand_1").removeClass("pulsante_1_attivo"); // Anima linea
		$("#pulsante_menu #sand_2").removeClass("pulsante_2_attivo"); // Anima linea
		$("#pulsante_menu #sand_3").removeClass("pulsante_3_attivo"); // Anima linea
		$("#pulsante_menu #sand_4").removeClass("pulsante_4_attivo"); // Anima linea
		$("#pulsante_menu #sand_5").removeClass("pulsante_5_attivo"); // Anima linea
		
		secondoPiano_1(); // Invocazione Funzione Secondo Piano 1
		
		$(window).on("resize", function() { // Al ridimensionamento della finestra
			
			secondoPiano_1(); // Invocazione Funzione Secondo Piano 1	
			
		}); 
			
		$("#container_logo").removeClass("menu_container_logo"); // Cambia il colore
		$("#cornice_logo").removeClass("menu_cornice_logo"); // Cambia il colore
		$("#logo").removeClass("menu_logo"); // Cambia il colore
		
		$("#menu_principale ul li:first-child").removeClass("voce_1"); // Visualizza le voci
		$("#menu_principale ul li:nth-child(2)").removeClass("voce_2"); // Visualizza le voci
		$("#menu_principale ul li:nth-child(3)").removeClass("voce_3"); // Visualizza le voci
		$("#menu_principale ul li:last-child").removeClass("voce_4"); // Visualizza le voci
		
		// Controllo Visibilità Menu
	
		controlloMenu(); // Invocazione Funzione Controllo Menu	
		
	});
	
	// About Me
	
	$("#menu_principale ul li:first-child a").on("click tap", function() { // Al click della prima voce
	
		$("#menu_principale ul li:nth-child(2) a + .sfondo_menu").removeClass("fashion_attivo"); // Rimuovi altre voci
		$("#menu_principale ul li:nth-child(3) a + .sfondo_menu").removeClass("lifestyle_attivo"); // Rimuovi altre voci
		$("#menu_principale ul li:last-child a + .sfondo_menu").removeClass("contatti_attivo"); // Rimuovi altre voci
		
		$("#menu_principale ul li:first-child a + .sfondo_menu").addClass("about_attivo"); // Attiva voce
	
		// Cambia sezione
		
		nascondiLogo(); // Invocazione funzione nascondi Logo
		
		$(window).on("resize", function() { // Al ridimensionamento della finestra
			
			nascondiLogo(); // Invocazione funzione nascondi Logo		
				
		});
		
		if ($(".home_sx.about").hasClass("allunga")) { // Se la sezione è stata allungata
		
			$(".home_sx.about").removeClass("allunga"); // Allora riduci sezione
			
		}

		$("body").css("background-color", $(".home_sx.about").css("background-color")); // Cambia il colore dello sfondo con quello del pannello uscente
				
		$(".home_sx").removeClass("home_sx_in"); // Rimuovi la precedente
        $(".home_dx").removeClass("home_dx_in");	 // "
		
		$(".home_sx.fashion").removeClass("home_sx_in_fashion"); // "
        $(".home_dx.fashion").removeClass("home_dx_in_fashion");	// "
		$(".home_dx.fashion .overlay_brands").removeClass("mostra_overlay animated slideInDown"); // "
		$(".menu_brands").removeClass("entra animated slideInRight"); // "
		
		$(".home_sx.lifestyle").removeClass("home_sx_in_lifestyle"); // "
        $(".home_dx.lifestyle").removeClass("home_dx_in_lifestyle");	// "
		$(".home_dx.lifestyle .overlay_brands_1").removeClass("mostra_overlay animated slideInDown"); // "
		$(".menu_brands_1").removeClass("entra animated slideInRight"); // "
		
		$(".home_sx.contacts").removeClass("home_sx_in_contacts"); // "
        $(".home_dx.contacts").removeClass("home_dx_in_contacts");	// "

		setTimeout(function() {
			
			$(".home_sx.about").addClass("home_sx_in_about"); // Aggiungi la corrente
        	$(".home_dx.about").addClass("home_dx_in_about");	// "
			
			if ($(window).width() > 768) { // Se siamo su Desktop mostra dall'alto
			
				$(".home_dx.about .overlay").addClass("mostra_overlay animated slideInDown"); // Aggiungi l'overlay
				
			} else { // Altrimenti dal basso
				
				$(".home_dx.about .overlay").addClass("mostra_overlay animated slideInUp"); // Aggiungi l'overlay
				
			}
			
		}, 1000);
        setTimeout(function() {
			
			$(".menu_contestuale.about").addClass("mostra animated slideInRight"); // Mostra il menu Contestuale
		
    	}, 1250);
					
    });
	
	// Fashion
	
	$("#menu_principale ul li:nth-child(2) a").on("click tap", function() { // Al click della prima voce
	
		$("#menu_principale ul li:first-child a + .sfondo_menu").removeClass("about_attivo"); // Rimuovi altre voci
		$("#menu_principale ul li:nth-child(3) a + .sfondo_menu").removeClass("lifestyle_attivo"); // Rimuovi altre voci
		$("#menu_principale ul li:last-child a + .sfondo_menu").removeClass("contatti_attivo"); // Rimuovi altre voci
	
		$("#menu_principale ul li:nth-child(2) a + .sfondo_menu").addClass("fashion_attivo"); // Attiva voce
	
		$(this).addClass("about_attivo"); // Attiva voce
	
		// Cambia sezione
		
		nascondiLogo(); // Invocazione funzione nascondi Logo
		
		$(window).on("resize", function() { // Al ridimensionamento della finestra
			
			nascondiLogo(); // Invocazione funzione nascondi Logo		
				
		});
		
		if ($(".home_sx.fashion").hasClass("allunga")) { // Se la sezione è stata allungata
		
			$(".home_sx.fashion").removeClass("allunga"); // Allora riduci sezione
			
		}	
			
		$("body").css("background-color", $(".home_sx.fashion").css("background-color")); // Cambia il colore dello sfondo con quello del pannello uscente

		$(".home_sx").removeClass("home_sx_in"); // Rimuovi la precedente
        $(".home_dx").removeClass("home_dx_in");	 // "
		
		$(".home_sx.about").removeClass("home_sx_in_about"); // "
        $(".home_dx.about").removeClass("home_dx_in_about");	// "
		$(".home_dx.about .overlay").removeClass("mostra_overlay animated slideInDown"); // " 
		$(".home_dx.about .foto").removeClass("mostra animated slideInDown"); // "
		$(".menu_contestuale.about").removeClass("mostra animated slideInRight"); // "
		
		$(".home_sx.lifestyle").removeClass("home_sx_in_lifestyle"); // "
        $(".home_dx.lifestyle").removeClass("home_dx_in_lifestyle");	// "
		$(".home_dx.lifestyle .overlay_brands_1").removeClass("mostra_overlay animated slideInDown"); // "
		$(".home_dx.lifestyle .foto_brands_1").removeClass("mostra"); // "
		$(".menu_brands_1").removeClass("entra animated slideInRight"); // "
		
		$(".home_sx.contacts").removeClass("home_sx_in_contacts"); // "
        $(".home_dx.contacts").removeClass("home_dx_in_contacts");	// "	
			
		setTimeout(function() {
		
			$(".home_sx.fashion").addClass("home_sx_in_fashion"); // Aggiungi la corrente
        	$(".home_dx.fashion").addClass("home_dx_in_fashion");	// "			
		
		}, 1000);
		setTimeout(function() {
			
			if ($(window).width() > 768) { // Se siamo su Desktop mostra dall'alto
			
				$(".home_dx.fashion .overlay_brands").addClass("mostra_overlay animated slideInDown"); // Aggiungi l'overlay
				
			}  else { // Altrimenti dal basso
				
				$(".home_dx.fashion .overlay_brands").addClass("mostra_overlay animated slideInUp"); // Aggiungi l'overlay	
				
			}
		
        }, 1500);
		setTimeout(function() {
			
			if ($(window).width() > 768) { // Se siamo su Desktop mostra da destra
			
				$(".menu_brands").addClass("entra animated slideInRight"); // Mostra il menu Contestuale
				
			}  else { // Altrimenti dall'alto
			
				$(".menu_brands").addClass("entra animated slideInUp"); // Mostra il menu Contestuale
			
			}
		
    	}, 1750);
					
    });
	
	// Lifestyle
	
	$("#menu_principale ul li:nth-child(3) a").on("click tap", function() { // Al click della prima voce
	
		$("#menu_principale ul li:first-child a + .sfondo_menu").removeClass("about_attivo"); // Rimuovi altre voci
		$("#menu_principale ul li:nth-child(2) a + .sfondo_menu").removeClass("fashion_attivo"); // Rimuovi altre voci
		$("#menu_principale ul li:last-child a + .sfondo_menu").removeClass("contatti_attivo"); // Rimuovi altre voci
	
		$("#menu_principale ul li:nth-child(3) a + .sfondo_menu").addClass("lifestyle_attivo"); // Attiva voce
			
		$(this).addClass("about_attivo"); // Attiva voce
	
		$("body").css("background-color", $(".home_sx.lifestyle").css("background-color")); // Cambia il colore dello sfondo con quello del pannello uscente
	
		// Cambia sezione
		
		nascondiLogo(); // Invocazione funzione nascondi Logo
		
		$(window).on("resize", function() { // Al ridimensionamento della finestra
			
			nascondiLogo(); // Invocazione funzione nascondi Logo		
				
		});
		
		if ($(".home_sx.lifestyle").hasClass("allunga")) { // Se la sezione è stata allungata
		
			$(".home_sx.lifestyle").removeClass("allunga"); // Allora riduci sezione
			
		}	

		$(".home_sx").removeClass("home_sx_in"); // Rimuovi la precedente
        $(".home_dx").removeClass("home_dx_in");	 // "
		
		$(".home_sx.about").removeClass("home_sx_in_about"); // "
        $(".home_dx.about").removeClass("home_dx_in_about");	// "
		$(".home_dx.about .overlay").removeClass("mostra_overlay animated slideInDown"); // " 
		$(".home_dx.about .foto").removeClass("mostra animated slideInDown"); // "
		$(".menu_contestuale.about").removeClass("mostra animated slideInRight"); // "
		
		$(".home_sx.fashion").removeClass("home_sx_in_fashion"); // "
        $(".home_dx.fashion").removeClass("home_dx_in_fashion");	// "
		$(".home_dx.fashion .overlay_brands").removeClass("mostra_overlay animated slideInDown"); // "
		$(".home_dx.fashion .foto_brands").removeClass("mostra"); // "
		$(".menu_brands").removeClass("entra animated slideInRight"); // "
		
		$(".home_sx.contacts").removeClass("home_sx_in_contacts"); // "
        $(".home_dx.contacts").removeClass("home_dx_in_contacts");	// "	
			
		setTimeout(function() {
		
			$(".home_sx.lifestyle").addClass("home_sx_in_lifestyle"); // Aggiungi la corrente
        	$(".home_dx.lifestyle").addClass("home_dx_in_lifestyle");	// "
			
		}, 1000);	
		setTimeout(function() {	
		
			if ($(window).width() > 768) { // Se siamo su Desktop mostra dall'alto
			
				$(".home_dx.lifestyle .overlay_brands_1").addClass("mostra_overlay animated slideInDown"); // Aggiungi l'overlay
				
			}  else { // Altrimenti dal basso
				
				$(".home_dx.lifestyle .overlay_brands_1").addClass("mostra_overlay animated slideInUp"); // Aggiungi l'overlay	
				
			}
		
		}, 1500);	
        setTimeout(function() {
			
			if ($(window).width() > 768) { // Se siamo su Desktop mostra da destra
			
				$(".menu_brands_1").addClass("entra animated slideInRight"); // Mostra il menu Contestuale
				
			}  else { // Altrimenti dall'alto
			
				$(".menu_brands_1").addClass("entra animated slideInUp"); // Mostra il menu Contestuale
			
			}
		
    	}, 1750);
					
    });
	
	// Contacts
	
	$("#menu_principale ul li:last-child a").on("click tap", function() { // Al click della prima voce
	
		controlloPattern = 1; // Assegna selezione pattern 1 a variabile di controllo
	
		$("#menu_principale ul li:first-child a + .sfondo_menu").removeClass("about_attivo"); // Rimuovi altre voci
		$("#menu_principale ul li:nth-child(2) a + .sfondo_menu").removeClass("fashion_attivo"); // Rimuovi altre voci
		$("#menu_principale ul li:nth-child(3) a + .sfondo_menu").removeClass("lifestyle_attivo"); // Rimuovi altre voci
	
		$("#menu_principale ul li:last-child a + .sfondo_menu").addClass("contatti_attivo"); // Attiva voce
			
		$(this).addClass("about_attivo"); // Attiva voce
	
		$("body").css("background-color", $(".home_sx.contacts").css("background-color")); // Cambia il colore dello sfondo con quello del pannello uscente
	
		// Cambia sezione

		nascondiLogo(); // Invocazione funzione nascondi Logo
		
		$(window).on("resize", function() { // Al ridimensionamento della finestra
			
			nascondiLogo(); // Invocazione funzione nascondi Logo		
				
		});
		
		if ($(".home_sx.contacts").hasClass("allunga")) { // Se la sezione è stata allungata
		
			$(".home_sx.contacts").removeClass("allunga"); // Allora riduci sezione
			
		}

		$(".home_sx").removeClass("home_sx_in"); // Rimuovi la precedente
        $(".home_dx").removeClass("home_dx_in");	 // "
		
		$(".home_sx.about").removeClass("home_sx_in_about"); // "
        $(".home_dx.about").removeClass("home_dx_in_about");	// "
		$(".home_dx.about .overlay").removeClass("mostra_overlay animated slideInDown"); // " 
		$(".home_dx.about .foto").removeClass("mostra animated slideInDown"); // "
		$(".menu_contestuale.about").removeClass("mostra animated slideInRight"); // "
		
		$(".home_sx.fashion").removeClass("home_sx_in_fashion"); // "
        $(".home_dx.fashion").removeClass("home_dx_in_fashion");	// "
		$(".home_dx.fashion .overlay_brands").removeClass("mostra_overlay animated slideInDown"); // "
		$(".menu_brands").removeClass("entra animated slideInRight"); // "
		
		$(".home_sx.lifestyle").removeClass("home_sx_in_lifestyle"); // "
        $(".home_dx.lifestyle").removeClass("home_dx_in_lifestyle");	// "
		$(".home_dx.lifestyle .overlay_brands").removeClass("mostra_overlay animated slideInDown"); // "
		$(".menu_brands_1").removeClass("entra animated slideInRight"); // "
		
		setTimeout(function() {
		
			$(".home_sx.contacts").addClass("home_sx_in_contacts"); // Aggiungi la corrente
        	$(".home_dx.contacts").addClass("home_dx_in_contacts");	// "
			
		}, 1000);
		setTimeout(function() {
			
			$(".home_dx.contacts #mappa_munari").addClass("mostra animated slideInDown"); // Aggiungi la mappa
		
		}, 1000);
		
    });
	
	// Menu Brands (Fashion)
	
	$(".menu_brands a").hover(function() { // Al click della prima marca dispari
	
		$(".menu_brands a").addClass("sfuma"); // Nasconde gli altri brands
		$(this).addClass("brand_attivo"); // Seleziona brand
		$(".home_dx.fashion .foto_brands").stop().removeClass("mostra animated fadeOut"); // Aggiunge la foto
		$(".home_dx.fashion .foto_brands").stop().addClass("mostra animated fadeIn "); // Aggiunge la foto
		$(".home_dx.fashion .foto_brands").stop().css({
			
			"background-image": "url('img/" + $(this).attr("data-img") + "')"
			
		}); // Aggiunge la foto
	
	}, function() { // Al click pari reset
		
		$(".menu_brands a").removeClass("sfuma"); // Mostra gli altri brands
		$(this).removeClass("brand_attivo"); // Deseleziona brand
		$(".home_dx.fashion .foto_brands").stop().removeClass("mostra animated fadeIn "); // Nasconde la foto
		$(".home_dx.fashion .foto_brands").stop().css("background-image", "none"); // Nasconde la foto
		$(".home_dx.fashion .foto_brands").stop().addClass("mostra animated fadeOut"); // Nasconde la foto	
		
	});
	
	// Menu Brands 1 (Lifestyle)
	
	$(".menu_brands_1 a").hover(function() { // Al click della prima marca dispari
	
		$(".menu_brands_1 a").addClass("sfuma"); // Nasconde gli altri brands
		$(this).addClass("brand_attivo"); // Seleziona brand
		$(".home_dx.lifestyle .foto_brands_1").stop().removeClass("mostra animated fadeOut"); // Aggiunge la foto
		$(".home_dx.lifestyle .foto_brands_1").stop().addClass("mostra animated fadeIn "); // Aggiunge la foto
		$(".home_dx.lifestyle .foto_brands_1").stop().css({
			
			"background-image": "url('img/" + $(this).attr("data-img") + "')"
			
		}); // Aggiunge la foto
	
	}, function() { // Al click pari reset
		
		$(".menu_brands_1 a").removeClass("sfuma"); // Mostra gli altri brands
		$(this).removeClass("brand_attivo"); // Deseleziona brand
		$(".home_dx.lifestyle .foto_brands_1").stop().removeClass("mostra animated fadeIn "); // Nasconde la foto	
		$(".home_dx.lifestyle .foto_brands_1").stop().css("background-image", "none"); // Nasconde la foto
		$(".home_dx.lifestyle .foto_brands_1").stop().addClass("mostra animated fadeOut"); // Nasconde la foto	
		
	});

	
	// Menu Colore
		
	$("#menu_colore").toggle(function() { // Al click sul pulsante (Primo - Dispari)
	
		$(this).addClass("colore_attivo"); // Attiva il selettore colore
		
		$(".select_colore").addClass("avanti_1"); // Porta in primo piano i selettori
		
		// Mostra primo colore
		  
		$(".select_colore.primo").addClass("animated rotateIn");
		
		setTimeout(function() {
		
			$(".select_colore.primo").removeClass("set_primo_colore"); 
			
		}, 250); 
		setTimeout(function() { 
		
			$(".select_colore.primo").addClass("mostra_primo_colore");
			
		}, 500); 
		
		// Mostra secondo colore
		
		setTimeout(function() {
		
			$(".select_colore.secondo").addClass("animated rotateIn"); 
		
		}, 500); 
		setTimeout(function() {
		
			
			$(".select_colore.secondo").removeClass("set_secondo_colore"); 
		
		}, 750);
		setTimeout(function() {
			
			$(".select_colore.secondo").addClass("mostra_secondo_colore");
		
		}, 1000);
		
		// Mostra terzo colore
		
		setTimeout(function() {
			
			$(".select_colore.terzo").addClass("animated rotateIn"); 
		
		}, 750); 
		setTimeout(function() {
			
			$(".select_colore.terzo").removeClass("set_terzo_colore");  
		
		}, 1000); 
		setTimeout(function() {
		
			$(".select_colore.terzo").addClass("mostra_terzo_colore");
			
		}, 1250); 
		
	}, function() { // Al click sul pulsante (Secondo - Pari)
			
		nascondiColore(); // Invocazione Funzione nascondi colori
							
	});
	
	// Anteprima Primo Pattern
	
	$(".select_colore.primo").hover(function() { // Al passaggio del mouse
				
		coloriPreview("pattern_uno_sx", "pattern_uno_dx"); // Invocazione Funzione Aggiorna colori
		
	}, function() { // All'uscita del mouse
		
		coloriElimina("pattern_uno_sx", "pattern_uno_dx"); // Invocazione Funzione Aggiorna colori
		
	});
	
	// Anteprima secondo Pattern
	
	$(".select_colore.secondo").hover(function() { // Al passaggio del mouse
		
		coloriPreview("pattern_due_sx", "pattern_due_dx"); // Invocazione Funzione Aggiorna colori
		
	}, function() { // All'uscita del mouse
		
		coloriElimina("pattern_due_sx", "pattern_due_dx"); // Invocazione Funzione Aggiorna colori
		
	});	
			
	// Anteprima terzo Pattern
	
	$(".select_colore.terzo").hover(function() { // Al passaggio del mouse
			
		coloriPreview("pattern_tre_sx", "pattern_tre_dx"); // Invocazione Funzione Aggiorna colori
				
	}, function() { // All'uscita del mouse
		
		coloriElimina("pattern_tre_sx", "pattern_tre_dx"); // Invocazione Funzione Aggiorna colori
		
	});	
	
	// Selezione Primo Pattern
	
	$(".select_colore.primo").on("click tap", function() { // Al click sul pulsante
	
		controlloPattern = 2; // Assegna selezione pattern 1 a variabile di controllo
		
		coloriConferma("pattern_uno_sx", "pattern_uno_dx"); // Invocazione Funzione Aggiorna colori
		nascondiColore(); // Invocazione Funzione nascondi colori
		impostaMappa(); // Invocazione Funzione Inizializzazione Mappa
		initMap(); // Forza la reinizializzazione della mappa
		
	});
	
	// Selezione secondo Pattern
	
	$(".select_colore.secondo").on("click tap", function() { // Al click sul pulsante
	
		controlloPattern = 3; // Assegna selezione pattern 1 a variabile di controllo
		
		coloriConferma("pattern_due_sx", "pattern_due_dx"); // Invocazione Funzione Aggiorna colori
		nascondiColore(); // Invocazione Funzione nascondi colori
		impostaMappa(); // Invocazione Funzione Inizializzazione Mappa
		initMap(); // Forza la reinizializzazione della mappa

	});
	
	// Selezione terzo Pattern
	
	$(".select_colore.terzo").on("click tap", function() { // Al click sul pulsante
	
		controlloPattern = 4; // Assegna selezione pattern 1 a variabile di controllo
		
		coloriConferma("pattern_tre_sx", "pattern_tre_dx"); // Invocazione Funzione Aggiorna colori
		nascondiColore(); // Invocazione Funzione nascondi colori
		impostaMappa(); // Invocazione Funzione Inizializzazione Mappa
		initMap(); // Forza la reinizializzazione della mappa
	
	});
	
	// Cookies
	
	$("#banner_cookies a").on("click tap", function(e) { // Al click del link
		
		e.preventDefault(); // Disabilita azione di default link

		$("#cookies").addClass("slide"); // Mostra la sezione cookies
		
	});
	$("#chiudi").on("click tap", function() { // Al click del pulsante chiudi
		
		$("#cookies").removeClass("slide"); // Nascondi sezione cookies
		
	});

}


// Funzione Secondo Piano 1

function secondoPiano_1() {

	if ((!$("#container_logo").hasClass("indietro")) && ($(window).width() <= 768)) { // Se il logo non è in primo piano e siamo su mobile
		
		$("#container_logo").addClass("indietro"); // Porta in primo piano

	}

}


// Funzioen Secondo Piano 2

function secondoPiano_2() {
	
	if (($("#container_logo").hasClass("indietro")) && ($(".home_sx.home.home_sx_in").length === 0) && ($(window).width() <= 768)) { // Se il logo non è in primo piano e non siamo su home in mobile
		
		$("#container_logo").removeClass("indietro"); // Porta in primo piano
	
	} else if ((!$("#container_logo").hasClass("indietro")) && ($(".home_sx.home.home_sx_in").length === 0) && ($(window).width() <= 768)) { // Se il logo è in primo piano e non siamo su home in mobile // Altrimenti
		
		$("#container_logo").addClass("indietro"); // Porta in secondo piano	

	}	
	
}


// Funzione Controllo Logo

function controlloLogo() {
			
	if (($(window).width() <= 768) && ($(".home_sx_in").length === 0)) { // Se siamo su mobile ma non in home
		
		$("#container_logo").toggleClass("animated fadeOut"); // Allora aggiungi animazione
		$("#container_logo").toggleClass("animated fadeIn"); // Mostra il logo
			
	}	

}


// Funzione Nascondi Logo

function nascondiLogo() {
	
	if ($(window).width() <= 768) { // Se siamo su mobile
		
		if ($("#container_logo").hasClass("animated fadeIn")) { // E se il logo è già visualizzato
		
			$("#container_logo").removeClass("animated fadeIn"); // Allora rimuovi animazione
			$("#container_logo").addClass("animated fadeOut"); // Nascondi il logo
			
		}
	
	}	
	
}


// Funzione Nascondi Colori 

function nascondiColore() {
		
	// Nascondi terzo colore
		
	$(".select_colore.terzo").removeClass("animated rotateIn"); 
	$(".select_colore.terzo").addClass("animated rotateOut");
	
	setTimeout(function() {
		
		$(".select_colore.terzo").removeClass("animated rotateOut");
		$(".select_colore.terzo").removeClass("mostra_terzo_colore");
	
	}, 500);
	setTimeout(function() {
	
		
		$(".select_colore.terzo").addClass("set_terzo_colore");
		
	}, 750);
	
	// Nascondi secondo colore
	
	setTimeout(function() {
	
		$(".select_colore.secondo").removeClass("animated rotateIn"); 
		$(".select_colore.secondo").addClass("animated rotateOut");
	
	}, 500);
	setTimeout(function() {
		
		$(".select_colore.secondo").removeClass("animated rotateOut");
		$(".select_colore.secondo").removeClass("mostra_secondo_colore");
	
	}, 750);
	setTimeout(function() {
	
		
		$(".select_colore.secondo").addClass("set_secondo_colore");
		
	}, 1000);
	
	// Nascondi primo colore
	
	setTimeout(function() {
	
		$(".select_colore.primo").removeClass("animated rotateIn"); 
		$(".select_colore.primo").addClass("animated rotateOut");
	
	}, 750);
	setTimeout(function() {
		
		$(".select_colore.primo").removeClass("animated rotateOut");
		$(".select_colore.primo").removeClass("mostra_primo_colore");
		$("#menu_colore").removeClass("colore_attivo"); // Disattiva il selettore colore
	
	}, 1000);
	setTimeout(function() {
	
		$(".select_colore.primo").addClass("set_primo_colore");
		
	}, 1250);
	setTimeout(function() {
		
		$(".select_colore").removeClass("avanti_1"); // Porta in secondo piano i selettori
		
	}, 1500);
	
}


// Funzione Anteprima Colori

function coloriPreview(patternSelectSx, patternSelectDx) {
	
	$(".home_sx").removeClass("pattern_uno_sx"); // Elimina precedenti selezioni
    $(".home_sx").removeClass("pattern_due_sx"); // Elimina precedenti selezioni
	$(".home_sx").removeClass("pattern_tre_sx"); // Elimina precedenti selezioni
	$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_uno_dx"); // Elimina precedenti selezioni
	$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_due_dx"); // Elimina precedenti selezioni
	$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_tre_dx"); // Elimina precedenti selezioni
	$(".home_sx").toggleClass(patternSelectSx); // Aggiorna colore lato sx
	$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").toggleClass(patternSelectDx); // Aggiorna colore lato sx
		
}


// Funzione Conferma Colori

function coloriConferma(patternSelectSx, patternSelectDx) {	
	
	$(".home_sx").removeClass("pattern_uno_sx"); // Elimina precedenti selezioni
    $(".home_sx").removeClass("pattern_due_sx"); // Elimina precedenti selezioni
	$(".home_sx").removeClass("pattern_tre_sx"); // Elimina precedenti selezioni
	$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_uno_dx"); // Elimina precedenti selezioni
	$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_due_dx"); // Elimina precedenti selezioni
	$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass("pattern_tre_dx"); // Elimina precedenti selezioni
	$(".home_sx").addClass(patternSelectSx); // Aggiorna colore lato sx
	$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").addClass(patternSelectDx); // Aggiorna colore lato sx
	
	salvaPattern = [patternSelectSx, patternSelectDx]; // Assegna e restituisci i pattern selezionati
	
}


// Funzione Elimina Colori

function coloriElimina(patternSelectSx, patternSelectDx) {
	
	if (controlloPattern === 1) { // Se non è stato selezionato nessun colore 
	
		$(".home_sx").removeClass(patternSelectSx); // Aggiorna colore lato sx
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass(patternSelectDx); // Aggiorna colore lato sx
	
	} else { // Altrimenti se è stato selezionato
		 
		$(".home_sx").removeClass(patternSelectSx); // Aggiorna colore lato sx
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").removeClass(patternSelectDx); // Aggiorna colore lato sx
		$(".home_sx").addClass(salvaPattern[0]); // Aggiorna colore lato sx con l'ultimo selezionato
		$(".home_dx, .overlay, .overlay_brands, .overlay_brands_1").addClass(salvaPattern[1]); // Aggiorna colore lato dx con l'ultimo selezionato
		
	}
	
}


// Funzione Controllo Impostazione Animazione Sfondo

function controlloSetAnimaSfondo() {

	if ($(window).width() <= 768) { // Se siamo su mobile
	
		setAnimaSfondo($(".home_sx.home")); // Invocazione Funzione Impostazione sfondo animato
		setAnimaSfondo($(".home_sx.about")); // Invocazione Funzione Impostazione sfondo animato
		setAnimaSfondo($(".home_sx.fashion")); // Invocazione Funzione Impostazione sfondo animato
		setAnimaSfondo($(".home_sx.lifestyle")); // Invocazione Funzione Impostazione sfondo animato
		setAnimaSfondo($(".home_sx.contacts")); // Invocazione Funzione Impostazione sfondo animato

	}
	
}


// Funzione Impostazione colore di sfondo casuale - Mobile

function setAnimaSfondo(sfondo) {
	
	setInterval(function() { // Ogni tot secondi

		// Dichiarazione Variabili
		
		var colore = null; // Inizializazione Variabile colore attuale

		colore = sfondoRandom(); // Invocazione Funzione Sfondo Random ed assegnazione colore
		sfondo[0].style.setProperty("transition", "background-color 2.5s ease-in"	); // Imposta durata transizione
		sfondo[0].style.setProperty("background-color", colore, "important"); // Converte il valore in stringa
				
	}, 5000);
		
}


// Funzione colore di sfondo casuale - Mobile

function sfondoRandom() {
	
	// Dichiarazione Variabili
	
	var numero, colore = null; // Inizializzazione variabili colore sfondo
	
	numero = Math.floor((Math.random() * 6) + 1); // Calcola un numero tra 1 e 6
	
	// Controllo Colore
	
	switch(numero) {
		
		case 1: 
		
			colore = "#F2DDD1";
			
			break;
			
		case 2:
		
			colore = "#D82F2E";
			
			break;	
			
		case 3: 
		
			colore = "#976FBD";
			
			break;
			
		case 4: 
		
			colore = "#7AC4CD";
			
			break;
			
		case 5:
		
			colore = "#E6D504";
			
			break;	
			
		case 6: 
		
			colore = "#e87a33";
			
			break;
			
	}
	
	return colore; // restituisce il colore estratto
	
}



// Funzione colore di sfondo casuale - SX

function sfondoRandom_1() {
	
	// Dichiarazione Variabili
	
	var numero, colore = null; // Inizializzazione variabili colore sfondo
	
	numero = Math.floor((Math.random() * 3) + 1); // Calcola un numero tra 1 e 5
	
	// Controllo Colore
	
	switch(numero) {
		
		case 1: 
		
			colore = "#F2DDD1";
			
			break;
			
		case 2:
		
			colore = "#D82F2E";
			
			break;	
			
		case 3: 
		
			colore = "#976FBD";
			
			break;
			
	}
	
	return colore; // restituisce il colore estratto
	
}


// Funzione colore di sfondo casuale - DX

function sfondoRandom_2() {
	
	// Dichiarazione Variabili
	
	var numero, colore = null; // Inizializzazione variabili colore sfondo
	
	numero = Math.floor((Math.random() * 3) + 1); // Calcola un numero tra 1 e 5
	
	// Controllo Colore
	
	switch(numero) {
		
		case 1: 
		
			colore = "#7AC4CD";
			
			break;
			
		case 2:
		
			colore = "#E6D504";
			
			break;	
			
		case 3: 
		
			colore = "#e87a33";
			
			break;
		
	}
	
	return colore; // restituisce il colore estratto
	
}


// Funzione Controllo Menu

function controlloMenu() {
	
	if ($("#pulsante_menu").hasClass("menu_attivo")) { // Se il menu è attivo

		  $("section:not('#home') *, .menu_contestuale.about, .menu_brands, .menu_brands_1").addClass("occulta"); // Nascondi tutti i contenuti tranne quelli della home
	  
	  } else { // ALtrimenti mostra

		  $("section:not('#home') *, .menu_contestuale.about, .menu_brands, .menu_brands_1").removeClass("occulta");
	  
	  }
	
}


// Funzione Inizializza Mappa

function impostaMappa() {
	
	// Dichiarazione ed inizializzazione variabili stili
  
	var stileMappa_1 = [
	  {
		"featureType": "administrative",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "landscape",
		"stylers": [
		  { "color": "#EDE4E8" }
		]
	  },{
		"featureType": "poi",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "road",
		"stylers": [
		  { "color": "#FF799F" },
		  { "visibility": "on" }
		]
	  },{
		"featureType": "transit.station",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [
		  { "visibility": "on" },
		  { "color": "#EDE4E8" }
		]
	  },{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "transit",
		"elementType": "labels.icon",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "water",
		"stylers": [
		  { "color": "#ffffff" }
		]
	  }
	];
	
	var stileMappa_2 = [
	  {
		"featureType": "administrative",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "landscape",
		"stylers": [
		  { "color": "#7AC4CD" }
		]
	  },{
		"featureType": "poi",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "road",
		"stylers": [
		  { "color": "#F2DDD1" }
		]
	  },{
		"featureType": "transit.station",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "road",
		"elementType": "labels.text",
		"stylers": [
		  { "visibility": "on" },
		  { "color": "#000000" }
		]
	  },{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "transit",
		"elementType": "labels.icon",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "water",
		"stylers": [
		  { "color": "#ffffff" }
		]
	  }
	];
	var stileMappa_3 = [
	  {
		"featureType": "administrative",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "landscape",
		"stylers": [
		  { "color": "#ccccc" }
		]
	  },{
		"featureType": "poi",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "road",
		"stylers": [
		  { "color": "#E6D504" }
		]
	  },{
		"featureType": "transit.station",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "road",
		"elementType": "labels.text",
		"stylers": [
		  { "visibility": "on" },
		  { "color": "#D82F2E" }
		]
	  },{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "transit",
		"elementType": "labels.icon",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "water",
		"stylers": [
		  { "color": "#ffffff" }
		]
	  }
	];
	
	var stileMappa_4 = [
	  {
		"featureType": "administrative",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "landscape",
		"stylers": [
		  { "color": "#976FBD" }
		]
	  },{
		"featureType": "poi",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "road",
		"stylers": [
		  { "color": "#e87a33" }
		]
	  },{
		"featureType": "transit.station",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "road",
		"elementType": "labels.text",
		"stylers": [
		  { "visibility": "on" },
		  { "color": "#ffffff" }
		]
	  },{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "transit",
		"elementType": "labels.icon",
		"stylers": [
		  { "visibility": "off" }
		]
	  },{
		"featureType": "water",
		"stylers": [
		  { "color": "#ffffff" }
		]
	  }
	];
  

  // Controllo Pattern 
  
  switch (controlloPattern) {
	
	case 1: // Default
	
		stileMappa = stileMappa_1;
		
		break;
		
	case 2: // Pattern 1
	
		stileMappa = stileMappa_2;
		
		break; 
		
	case 3: // Pattern 2
	
		stileMappa = stileMappa_3;
		
		break;
		
	case 4: // Pattern 3
	
		stileMappa = stileMappa_4;
		
		break;
		
	default: // Default
	
		stileMappa = stileMappa_1;
		
		break;
	  
  	}
	
}


// Funzione Google Maps

function initMap() {

  // Dichiarazione Variabili
  
  // Inizializzazione Array Stile
  
  var luogo = new google.maps.LatLng(45.4488964, 9.145969,17); // Posizione
  
  impostaMappa(); // Invocazione Funzione Impostazione Template Mappa
  
  // Dichiarazione ed Istanziazione oggetto mappa con assegnazione stile e nome

  var stilizzata = new google.maps.StyledMapType(stileMappa,
    
	{
		name: "Munari"
		
	});

  // Dichiarazione ed Istanziazione oggetto Mappa ed assegnazione opzioni/ID
  
  var opzioniMappa = {
	  
    zoom: 16,
    center: luogo,
	disableDefaultUI: true,
    mapTypeControlOptions: {
      
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'stile_mappa']
    
	}
	
  };
  var mappa = new google.maps.Map(document.getElementById('mappa_munari'), opzioniMappa);
  
  

  //Assegnazione ID mappa ad elemento ed output
  
  mappa.mapTypes.set('stile_mappa', stilizzata);
  mappa.setMapTypeId('stile_mappa');
  
  // Contenuto Finestra informativa
	
  var contentString = '<div id="content">' +
	  '<div id="siteNotice">' +
	  '</div>' +
	  '<img id="logo_mappa" src="img/logo_1.svg" alt="Munari Comunicazione">' +
	  '</img>';

  // Finestra informativa
  
  var infowindow = new google.maps.InfoWindow({
	  
	content: contentString // Imposta contenuto
	
  });

  // Marker

  var marker = new google.maps.Marker({
	  
	position: luogo,
	map: mappa,
	title: 'Munari Comunicazione'
	
  });
  
  marker.addListener('click', function() { // Al click del marker
	
	infowindow.open(mappa, marker); // Apri finestra informativa
	
  });
  
    puntaMappa = mappa;
	  
}

//-->