(function () {
	let footer = document.querySelector("#generalFooter");
	let toTopP = document.querySelector(".toTop");

	footer.innerHTML = `
	<h1 class="invisibleHeader"> Follow us</h1>
	<span>
		<a href="" class="undecorate">GitHub</a>
	</span>
	<span>
		<a href="" class="undecorate">CodePen</a>
	</span>
	<span>
		<a href="" class="undecorate">Facebook</a>
	</span>
	`;
	
	toTopP.innerHTML = '<a href="#">Back to top</a>';
})();