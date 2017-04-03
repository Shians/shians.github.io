Array.prototype.randomElement = function () {
	return this[Math.floor(Math.random() * this.length)]
}

function generateIdea() {
	let apps = [
		"Dropbox",
		"eBay",
		"Evernote",
		"Facebook",
		"Facetime",
		"Gmail",
		"Google Earth",
		"Google Maps",
		"Grindr",
		"Indigogo",
		"Instagram",
		"KakaoTalk",
		"Microsoft Office",
		"Microsoft Paint",
		"Netflix",
		"Pandora",
		"Pokemon GO",
		"Retrica",
		"Shazam",
		"Skype",
		"Snapchat",
		"SoundCloud",
		"Spotify",
		"Tinder",
		"Twitter",
		"Uber",
		"Viber",
		"Waze",
		"WeChat",
		"WhatsApp",
		"Yelp",
		"YouTube"
	]

	let targets = [
		"Accountants",
		"Agricultural Advisors",
		"Air-conditioning Installers",
		"Aircraft Service Technicians",
		"Ambulance Drivers",
		"Arable Farmers",
		"Architects",
		"Asbestos Removal Workers",
		"Bank Clerks",
		"Beauty Therapists",
		"Bricklayers",
		"Butchers",
		"Car Mechanics",
		"Carpenters",
		"Civil Engineering Technicians",
		"Climatologists",
		"Cloak Room Attendants",
		"Community Health Workers",
		"Confectionery Makers",
		"Construction Operatives",
		"Dental Hygienists",
		"Dieticians",
		"Estate Agents",
		"Filing Clerks",
		"Financial Clerks",
		"Fire Fighters",
		"Flight Attendants",
		"Floral Arrangers",
		"Food Scientists",
		"Gardeners",
		"Hairdressers",
		"Horse Riding Instructors",
		"Hospital Nurses",
		"House Painters",
		"Journalists",
		"Judges",
		"Kitchen Assistants",
		"Lawyers",
		"Metal Moulders",
		"Meteorologists",
		"Musical Instrument Makers",
		"Nursery School Teachers",
		"Ophthalmic Opticians",
		"Payroll Clerks",
		"Personnel Clerks",
		"Pest Controllers",
		"Physician Assistants",
		"Pipe Fitters",
		"Plant Maintenance Mechanics",
		"Plumbers",
		"Police Inspectors",
		"Policy Advisors",
		"Post Secondary Education Teachers",
		"Post Sorting Or Distributing Clerks",
		"Primary School Heads",
		"Primary School Teachers",
		"Psychologists",
		"Quality Inspectors",
		"Receptionists",
		"Restaurant Cooks",
		"Road Paviours",
		"Roofers",
		"Sailors",
		"Sales Assistants",
		"Seaman",
		"Secondary School Teachers",
		"Security Guards",
		"Sheet Metal Workers",
		"Ship Mechanics",
		"Shoe Repairers",
		"Soldiers",
		"Speech Therapists",
		"Structural Engineers",
		"Surgeons",
		"Surgical Footwear Makers",
		"Swimming Instructors",
		"Tailors",
		"Tax Inspectors",
		"Taxi Drivers",
		"Tile Layers",
		"Transport Clerks",
		"Travel Agency Clerks",
		"Truck Drivers",
		"University Professors",
		"University Researchers",
		"Veterinary Practitioners",
		"Vocational Education Teachers",
		"Waiting Staffs",
		"Welders",
		"Amish People",
		"Astronauts",
		"Fishermen",
		"Zookeepers",
		"Bee Keepers",
		"Oyster Farmers"
	]

	let technologies = [
		"Cloud Computing",
		"Wordpress",
		"Deep Learning",
		"Crowdsourcing",
		"Organic Produce",
		"Neural Nets",
		"Massively Parallel Computing",
		"Blockchains",
		"SHA-1 Hash Algorithms",
		"Internet of Things",
		"MongoDB",
		"Docker",
		"Big Data",
		"Genetic Algorithms",
		"Distributed Computing",
		"Matrix Row Reduction",
		"Carbon Nano-fibres",
		"Exercise Bikes",
		"Murphy's Law"
	]

	let app = apps.randomElement()
	let target = targets.randomElement()
	let idea = `<b>${app}</b> for <b>${target}</b>`

	if (Math.random() > 0.5) {
		let tech = technologies.randomElement()
		idea += ` powered by <b>${tech}</b>`
	} else {

	}

	idea += "."

	document.getElementById("idea").innerHTML = idea
}

function disableGenerator() {
	document.getElementById("generator").disabled = true
}

function enableGenerator(delay = 0) {
	window.setTimeout(() => document.getElementById("generator").disabled = false, delay)
}

function buttonFunction() {
	document.getElementById("idea").style.opacity = 0
	disableGenerator()
	window.setTimeout(generateIdea, 1000)
	enableGenerator(2000)
	window.setTimeout(() => document.getElementById("idea").style.opacity = 1, 1000)
	
}

generateIdea()

document.getElementById("generator").onclick = buttonFunction