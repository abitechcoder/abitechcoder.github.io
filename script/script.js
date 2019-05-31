function showEduContent(){
	var x = document.getElementById("eduContent");
	if (x.style.display === "none"){
		x.style.display = "block";
		document.getElementById("btn-show").innerHTML = "Hide";
	}else{
		x.style.display = "none";
		document.getElementById("btn-show").innerHTML = "Show";
	}
}

function showSkillContent(){
	var x = document.getElementById("skillContent");
	if (x.style.display === "none"){
		x.style.display = "block";
		document.getElementById("tech-show").innerHTML = "Hide";
	}else{
		x.style.display = "none";
		document.getElementById("tech-show").innerHTML = "Show";
	}
}

function showNonTechContent(){
	var x = document.getElementById("nonTechContent");
	if (x.style.display === "none"){
		x.style.display = "block";
		document.getElementById("non-tech-show").innerHTML = "Hide";
	}else{
		x.style.display = "none";
		document.getElementById("non-tech-show").innerHTML = "Show";
	}
}

function showExperienceContent(){
	var x = document.getElementById("experienceContent");
	if (x.style.display === "none"){
		x.style.display = "block";
		document.getElementById("experience-show").innerHTML = "Hide";
	}else{
		x.style.display = "none";
		document.getElementById("experience-show").innerHTML = "Show";
	}
}