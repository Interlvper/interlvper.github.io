window.addEventListener("scroll", function()
{
	const distance = window.scrollY;
	const Elements = document.getElementsByClassName("background");

	Elements.style.transform = `translateY(${distance}px)`;
	Elements.style.transform = `translateY(${distance * 0.3}px)`;

	setTimeout(() =>
	{
		document.querySelector("section h3").classList.add("animate-me");
	}, 400);
});