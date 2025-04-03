/******************************************************************************\
# JS - 3D_CARD                                   #       Maximum Tension       #
################################################################################
#                                                #      -__            __-     #
# Teoman Deniz                                   #  :    :!1!-_    _-!1!:    : #
# maximum-tension.com                            #  ::                      :: #
#                                                #  :!:    : :: : :  :  ::::!: #
# +.....................++.....................+ #   :!:: :!:!1:!:!::1:::!!!:  #
# : C - Maximum Tension :: Create - 2025/03/05 : #   ::!::!!1001010!:!11!!::   #
# :---------------------::---------------------: #   :!1!!11000000000011!!:    #
# : License - MIT       :: Update - 2025/04/03 : #    ::::!!!1!!1!!!1!!!::     #
# +.....................++.....................+ #       ::::!::!:::!::::      #
\******************************************************************************/

function
	_3D_CARD()
{
	var	IMAGES = document.querySelectorAll("._3D_CARD");
	var	TOTAL_IMAGES = IMAGES.length;
	var	LAYER_ELEMENTS;//          j <- cat foot print
	var	TOTAL_LAYER_ELEMENTS;// k <- car foot print
//cccccccccc     <- köt foot print
	if (TOTAL_IMAGES <= 0)
		return ;

	for (var IMAGE_INDEX = 0; IMAGE_INDEX < TOTAL_IMAGES; IMAGE_INDEX++)
	{
		var	THIS_IMAGE = IMAGES[IMAGE_INDEX];
		var	LAYER_ELEMENTS = THIS_IMAGE.querySelectorAll("[DATA-LAYER]");
		var	TOTAL_LAYER_ELEMENTS = LAYER_ELEMENTS.length;

		if (TOTAL_LAYER_ELEMENTS <= 0)
			continue ;

		while(THIS_IMAGE.firstChild)
			THIS_IMAGE.removeChild(THIS_IMAGE.firstChild);
	
		var	CONSTAINER_DIV = document.createElement("DIV");
		var	SHINE_DIV = document.createElement("DIV");
		var	SHADOW_DIV = document.createElement("DIV");
		var	LAYER_DIV = document.createElement("DIV");
		var	LAYERS = [];

		THIS_IMAGE.id = "_3D_CARD__" + IMAGE_INDEX;
		CONSTAINER_DIV.className = "_3D_CARD_CONTAINER";
		SHINE_DIV.className = "_3D_CARD_SHINE";
		SHADOW_DIV.className = "_3D_CARD_SHADOW";
		LAYER_DIV.className = "_3D_CARD_LAYERS";

		for (var INDEX = 0; INDEX < TOTAL_LAYER_ELEMENTS; INDEX++)
		{
			var	LAYER = document.createElement("DIV");
			var	IMAGE_SOURCE = LAYER_ELEMENTS[INDEX].getAttribute("DATA-IMG");
			var	SIZE_ATTRIBUTE =
				LAYER_ELEMENTS[INDEX].getAttribute("DATA-SIZE");
			var INNER_HTML = LAYER_ELEMENTS[INDEX].innerHTML;

			if (SIZE_ATTRIBUTE && SIZE_ATTRIBUTE !== "")
				LAYER.style.backgroundSize = SIZE_ATTRIBUTE;

			LAYER.className = "_3D_CARD_RENDERED_LAYER";
			LAYER.setAttribute("DATA-LAYER", INDEX);

			if (IMAGE_SOURCE)
				LAYER.style.backgroundImage = "URL(" + IMAGE_SOURCE + ")";

			LAYER_DIV.appendChild(LAYER);
			LAYERS.push(LAYER);
			LAYER.innerHTML = INNER_HTML;
		}

		CONSTAINER_DIV.appendChild(SHADOW_DIV);
		CONSTAINER_DIV.appendChild(LAYER_DIV);
		CONSTAINER_DIV.appendChild(SHINE_DIV);
		THIS_IMAGE.appendChild(CONSTAINER_DIV);

		var IMG_WIDTH =
		(
			THIS_IMAGE.clientWidth ||
			THIS_IMAGE.offsetWidth ||
			THIS_IMAGE.scrollWidth
		);

		THIS_IMAGE.style.transform = "PERSPECTIVE(" + IMG_WIDTH * 3 + "PX)";

		if ("ontouchstart" in window || navigator.msMaxTouchPoints)
		{ // CHECK IF TOUCH SUPPORTS
			window.preventScroll = false;

			(
				function (_THIS_IMAGE, _LAYERS, _TOTAL_LAYERS, _SHINE)
				{
					THIS_IMAGE.addEventListener("touchmove",
						function (EVENT)
						{
							if (window.preventScroll)
								EVENT.preventDefault();

							PROCESS_MOVEMENT(
								EVENT,
								true,
								_THIS_IMAGE,
								_LAYERS,
								_TOTAL_LAYERS,
								_SHINE
							);
						}
					);
					THIS_IMAGE.addEventListener("touchstart",
						function (EVENT)
						{
							window.preventScroll = true;
							PROCESS_FOCUS(EVENT, _THIS_IMAGE);
						}
					);
					THIS_IMAGE.addEventListener("touchend",
						function (EVENT)
						{
							window.preventScroll = false;
							PROCESS_EXIT(
								EVENT,
								_THIS_IMAGE,
								_LAYERS,
								_TOTAL_LAYERS,
								_SHINE
							);
						}
					);
				}
			)(THIS_IMAGE, LAYERS, TOTAL_LAYER_ELEMENTS, SHINE_DIV);
		}
		else
		{ // MOUSE
			(
				function (_THIS_IMAGE, _LAYERS, _TOTAL_LAYERS, _SHINE)
				{
					THIS_IMAGE.addEventListener("mousemove",
						function (EVENT)
						{
							PROCESS_MOVEMENT(
								EVENT,
								false,
								_THIS_IMAGE,
								_LAYERS,
								_TOTAL_LAYERS,
								_SHINE
							);    
						}
					);
					THIS_IMAGE.addEventListener("mouseenter",
						function (EVENT)
						{
							PROCESS_FOCUS(EVENT, _THIS_IMAGE);   
						}
					);
					THIS_IMAGE.addEventListener("mouseleave",
						function (EVENT)
						{
							PROCESS_EXIT(
								EVENT,
								_THIS_IMAGE,
								_LAYERS,
								_TOTAL_LAYERS,
								_SHINE
							);    
						}
					);
				}
			)(THIS_IMAGE, LAYERS, TOTAL_LAYER_ELEMENTS, SHINE_DIV);
		}
	}

	function
		PROCESS_MOVEMENT(
			EVENT,
			TOUCHED_ENABLED,
			ELEMENT,
			LAYERS,
			TOTAL_LAYERS,
			SHINE
		)
	{

		var	BODY_SCROLLY = (
			document.getElementsByTagName("BODY")[0].scrollTop ||
			document.getElementsByTagName("HTML")[0].scrollTop
		);
		var	BODY_SCROLLX =
			document.getElementsByTagName("BODY")[0].scrollLeft;
		var	PAGE_X =
			(TOUCHED_ENABLED) ? EVENT.touches[0].pageX : EVENT.pageX;
		var	PAGE_Y =
			(TOUCHED_ENABLED) ? EVENT.touches[0].pageY : EVENT.pageY;
		var	OFFSETS = ELEMENT.getBoundingClientRect();
		var	WIDTH = (
			ELEMENT.clientWidth ||
			ELEMENT.offsetWidth ||
			ELEMENT.scrollWidth
		);
		var	HEIGHT = (
			ELEMENT.clientHeight ||
			ELEMENT.offsetHeight ||
			ELEMENT.scrollHeight
		);
		var	WIDTH_MULTIPLIER = 320 / WIDTH;
		var	OFFSET_X =
			0.52 - (PAGE_X - OFFSETS.left - BODY_SCROLLX) / WIDTH;
		var	OFFSET_Y =
			0.52 - (PAGE_Y - OFFSETS.top - BODY_SCROLLY) / HEIGHT;
		var	DELTA_X = (PAGE_X - OFFSETS.left - BODY_SCROLLX) - WIDTH / 2;
		var	DELTA_Y = (PAGE_Y - OFFSETS.top - BODY_SCROLLY) - HEIGHT / 2;
		var	ANGLE = Math.atan2(DELTA_Y, DELTA_X) * 180 / Math.PI - 90;

		if (ANGLE < 0)
			ANGLE = ANGLE + 360;

		if (ELEMENT.firstChild.className.indexOf(" OVER") != -1)
		{
			ELEMENT.firstChild.style.transform =
				"ROTATEX(" +
				 ((DELTA_Y - OFFSET_Y) * (0.1 * WIDTH_MULTIPLIER)) +
				"DEG) ROTATEY(" +
				 ((OFFSET_X - DELTA_X) * (0.07 * WIDTH_MULTIPLIER)) +
				"DEG) SCALE3D(1.07, 1.07, 1.07)";
		}
		else
		{
			ELEMENT.firstChild.style.transform =
				"ROTATEX(" +
				 ((DELTA_Y - OFFSET_Y) * (0.1 * WIDTH_MULTIPLIER)) +
				"DEG) ROTATEY(" +
				 ((OFFSET_X - DELTA_X) * (0.07 * WIDTH_MULTIPLIER)) +
				"DEG)";
		}

		SHINE.style.background =
			"LINEAR-GRADIENT(" + ANGLE + "DEG, RGBA(255, 255, 255," +
			(PAGE_Y - OFFSETS.top - BODY_SCROLLY) / HEIGHT * 0.4 +
			") 0%, RGBA(255, 255, 255, 0) 80%)";
		SHINE.style.transform =
			" TRANSLATEX(" + (OFFSET_X * TOTAL_LAYERS) - 0.1 + "PX)" +
			" TRANSLATEY(" + (OFFSET_Y * TOTAL_LAYERS) - 0.1 + "PX)";  

		var REVERSE_NUMBER = TOTAL_LAYERS;

		for (var INDEX = 0; INDEX < TOTAL_LAYERS; INDEX++)
		{
			LAYERS[INDEX].style.transform =
				"TRANSLATEX(" +
				(OFFSET_X * REVERSE_NUMBER) *
				((INDEX * 2.5) / WIDTH_MULTIPLIER) +
				"PX) TRANSLATEY(" +
				(OFFSET_Y * TOTAL_LAYERS) *
				((INDEX * 2.5) / WIDTH_MULTIPLIER) + "PX)";
			--REVERSE_NUMBER;
		}
	}

	function
		PROCESS_FOCUS(EVENT, ELEMENT)
	{
		ELEMENT.firstChild.className += " OVER";
	}

	function
		PROCESS_EXIT(EVENT, ELEMENT, LAYERS, TOTAL_LAYERS, SHINE)
	{
		var CONTAINER = ELEMENT.firstChild;

		CONTAINER.className = CONTAINER.className.replace(" OVER", "");
		CONTAINER.style.transform = "";
		SHINE.style.cssText = "";
		
		for (var INDEX = 0; INDEX < TOTAL_LAYERS; INDEX++)
			LAYERS[INDEX].style.transform = "";
	}
}
