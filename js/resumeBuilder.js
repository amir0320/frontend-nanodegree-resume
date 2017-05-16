var work = {
        "jobs": [
                {
                        "employer": "Greenway Optical-Electrical Technology",
                        "title": "Technical Intern",
                        "location": "Shenzhen, China",
                        "dates": "Dec 2014 – Apr 2015",
                        "description": "Provided technical support to employees on hardware upgrades, software installation, and internet troubleshooting<br>Managed internal database by batch uploading and constantly performed backup to ensure information security<br>Spearheaded the ERP system implementation initiative through coordination between production, financial, and administration teams in installation, documentation, and training<br>Demonstrated exceptional communication and problem-solving skills from servicing in a result-oriented environment"
                },
                {
                        "employer": "BitTiger",
                        "title": "Marketing Associate",
                        "location": "Remote",
                        "dates": "Jun 2016 - Dec 2016",
                        "description": "Edited and published high-tech and programming related articles on learning forum<br>Attended online meetings with executives to establish weekly deliverables and discuss long term initiatives<br>Prepared online event marketing materials and actively responded to inquiries submitted by users<br>Fostered solid written communication skill by frequent publication of high-quality professional writings"
                }
        ]
};

// Encapsulate the display function into the works object.
work.display = function(){
        for (job in work.jobs) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedEmployerTitle, formattedDates,
                        formattedLocation, formattedDescription);
                };
        };

        var projects = {
                "projects": [
                        {
                                "title": "HackHarvard",
                                "dates": "Oct 2016",
                                "description": "Implemented the SkyWatch API to analyze satellite data of our planet",
                                "images": ["images/skywatch.png"]
                        },
                        {
                                "title": "Rate Your Landlord (iOS App)",
                                "dates": "Sep 2016",
                                "description": "Design and develop a Yelp-like application on iOS for tenants to review student housing providers,<br>Utilize Google Firebase in constructing user and landlord information database<br>Construct various modules including registration, review submission, rating system, etc. to provide full functionality<br>Prepare formal application documentation",
                                "images": []
                        },
                        {
                                "title": "Personal Website",
                                "dates": "Jul 2016",
                                "description": "Designed and implemented a personal website to showcase articles<br>Hosted on GitHub Pages, powered by Jekyll<br>Built responsive designs with HTML, CSS and SASS<br>Tested by using MVC design pattern",
                                "images": []
                        }
                ]
        };

        // Encapsulate the display function into the project object
        projects.display = function() {
                for (project in projects.projects) {
                        $("#projects").append(HTMLprojectStart);
                        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
                        for (image in projects.projects[project].images) {
                                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                                $(".project-entry:last").append(formattedImage);
                        };
                };
        };

        var bio = {
                "name": "Amir Nie",
                "role": "Full-Stack Developer",
                "contacts": {
                        "mobile": "519-781-3856",
                        "email": "hfdy0320@gmail.com",
                        "github": "amir0320",
                        "twitter": "@amir0320",
                        "blog": "Obsession of Moments",
                        "location": "Waterloo, ON, Canada"
                },
                "welcomeMessage": "Hello Stranger!",
                "skills": ["Data Visualization", "Data Analysis", "Front-End", "Back-End"],
                "biopic": "images/me.png"
        };

        // Encapsulate the display function into the bio object.
        bio.display = function(){
                if (bio.name) {
                        var formattedName = HTMLheaderName.replace("%data%", bio.name);
                        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
                        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
                        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
                        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
                        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
                        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
                        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
                        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
                        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
                        $("#header").prepend(formattedName,formattedRole);
                        $("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedBlog, formattedLocation);
                        $("#header").append(formattedPic,formattedWelcomeMsg);

                        if (bio.skills.length > 0) {
                                $("#header").append(HTMLskillsStart);
                                for(skill in bio.skills){
                                        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                                        $("#skills").append(formattedSkill);
                                };
                        };
                };
        };

        var education = {
                "schools": [
                        {
                                "name": "University of Waterloo",
                                "location": "Waterloo, ON, Canada",
                                "degree": "Bachelor of Arts",
                                "dates": "Sep 2013 to May 2018",
                                "url": "https://uwaterloo.ca",
                                "majors": ["Economics"]
                        }
                ],
                "onlineCourses": [
                        {
                                "title": "Full-Stack Web Development",
                                "school": "Udacity",
                                "dates": "2016",
                                "url": "https://goo.gl/1M0oTQ"
                        },
                        {
                                "title": "Using Python to Access Web Data",
                                "school": "University of Michigan",
                                "dates": "Feb 2017",
                                "url": "https://goo.gl/tcZroU"
                        },
                        {
                                "title": "Databases",
                                "school": "Stanford University",
                                "dates": "Apr 2017",
                                "url": "https://goo.gl/qdkvzu"
                        }
                ]
        };

        education.display = function() {
                for (school in education.schools) {
                        $("#education").append(HTMLschoolStart);
                        var formattedName = HTMLschoolName.replace("#", education.schools[school].url);
                        formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
                        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                        var formattedNameDegree = formattedName + formattedDegree;
                        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                        $(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation);
                        for (major in education.schools[school].majors) {
                                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                                $(".education-entry:last").append(formattedMajor);
                        };
                };
                if (education.onlineCourses.length > 0) {
                        $("#education").append(HTMLonlineClasses);
                        for (course in education.onlineCourses) {
                                $("#education").append(HTMLschoolStart);
                                var formattedTitle = HTMLonlineTitle.replace("#", education.onlineCourses[course].url);
                                formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                                var formattedTitleSchool = formattedTitle + formattedSchool;
                                var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                                var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                                $(".education-entry:last").append(formattedTitleSchool, formattedDates, formattedURL);
                        };
                };
        };

        work.display();
        projects.display();
        bio.display();
        education.display();

        $(document).click(function(loc){
                var x = loc.pageX;
                var y =loc.pageY;
                logClicks(x,y);
        });

        var inName = function(name){
                var nameArray = name.split(' ');
                var newName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase()
                +' ' + nameArray[1].toUpperCase();
                return newName;
        };

        $("#main").append(internationalizeButton);
        $("#mapDiv").append(googleMap)
