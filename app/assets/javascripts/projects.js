

function showAboutMe() {
	var showAbout = document.getElementById("showabout")
	var hideProjects = document.getElementById("showprojects")
	var hideContact = document.getElementById("showcontact")

	showAbout.style.display="block";
	hideProjects.style.display="none";
	hideContact.style.display="none";
}

function showMyProjects() {
	var showProjects = document.getElementById("showprojects")
	var hideAbout = document.getElementById("showabout")
	var hideContact = document.getElementById("showcontact")

	showProjects.style.display="block";
	hideAbout.style.display="none";
	hideContact.style.display="none";
}

function showContactMe() {
	var showContact = document.getElementById("showcontact")
	var hideProjects = document.getElementById("showprojects")
	var hideAbout = document.getElementById("showabout")

	showContact.style.display="block";
	hideProjects.style.display="none";
	hideAbout.style.display="none";
}