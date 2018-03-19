let posting = document.querySelector('.posting');
let out = '';
let out2 = '';
fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => {
  console.log(json);
  for(let key in json) {
	  out+=`<div class="styling">`;
	  out+=`<h5><a">${json[key].title}</a></h5>`;
	  out+='<br>';
	  out+=`<button class="link" data-link="${json[key].id}" href="/?postId=${json[key].id}">Details</button>`;
	  out+='</div>';
	  out+='<br>';
	  posting.innerHTML = out;
  }
  });
  $(document).ready(function () {
$('button').on('click', function () {
  	let link = parseInt($(this).attr('data-link'));
window.history.pushState("object or string", "Title", `/?postId=${link}`);
  	fetch(`https://jsonplaceholder.typicode.com/posts/${link}`)
  	.then(response => response.json())
  	.then(json => {
  		console.log(json);
  		 out2+='<div class="styling">';
  		 out2+=`<p>${json.body}</p>`;
  		 out2+='</div>';
	  	 out2+='<br>';

	  	 fetch(`https://jsonplaceholder.typicode.com/comments/`)
	  	.then(response => response.json())
	  	.then(json => {
  		console.log(json);
  		out2+=`<h4>Comments: </h4>`;
  		out2+='<br>';
  		for(let key in json) {
  			if(json[key].postId == link) {
  				out2+='<div class="stylingComm">';
  				out2+=`<h5>${json[key].name}</h5>`;
  				out2+=`<p>${json[key].email}</p>`;
  				out2+=`<p>${json[key].body}</p>`;
  				out2+='</div>';
	  			out2+='<br>';
  			}
  		}
  		 posting.innerHTML = out2;
  });
  });
  });
});
