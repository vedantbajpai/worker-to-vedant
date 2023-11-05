addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
	const imageUrl = 'https://github.com/vedantbajpai/NODE-JS-ZOOM-CLONE/blob/main/cover.png?raw=true';
	const text = 'Hi Anshul'; // Text you want to display
	const textColor = 'yellow'; // Specify the color of the text here
  
	// Create an HTML response with an img element and a div containing centered text over the image
	const body = `
	  <div style="position: relative; text-align: center;">
		<img src="${imageUrl}" alt="Image" style="width: 100%; height: auto; max-width: 1000px; max-height: 600px;">
		<div style="position: absolute; top: 23%; left: 64%; transform: translate(-50%, -50%); font-size: 50px; color: ${textColor};">
		  ${text}
		</div>
	  </div>
	`;
  
	return new Response(body, {
	  headers: {
		'Content-Type': 'text/html'
	  }
	});
  }
  