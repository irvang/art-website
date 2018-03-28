(function () {
	let footer = document.querySelector("#generalFooter");
	let toTopP = document.querySelector(".toTop");

	footer.innerHTML = `
		<h1 class="invisibleHeader"> Follow us</h1>
		<a href="" class="redecorate">GitHub</a>
		<a href="" class="redecorate">CodePen</a>
		<a href="" class="redecorate">Facebook</a>
	`;
	
	toTopP.innerHTML = '<a href="#">Back to top</a>';
})();