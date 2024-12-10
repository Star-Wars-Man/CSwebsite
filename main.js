// Course data
const courses = [
    {
        title: "Introduction to Programming",
        description: "Learn the fundamentals of programming using Python",
        level: "Beginner",
        duration: "1 Semester"
    },
    {
        title: "Web Development",
        description: "Create responsive websites using HTML, CSS, and JavaScript",
        level: "Intermediate",
        duration: "1 Semester"
    },
    {
        title: "AP Computer Science A",
        description: "Advanced programming concepts using Java",
        level: "Advanced",
        duration: "Full Year"
    },
    {
        title: "Data Structures",
        description: "Learn essential computer science data structures",
        level: "Advanced",
        duration: "1 Semester"
    }
];

// Faculty data
const faculty = [
    {
        name: "Dr. Sarah Johnson",
        title: "Department Head",
        specialization: "Computer Science",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        name: "Prof. Michael Chen",
        title: "Senior Instructor",
        specialization: "Web Development",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Ms. Emily Rodriguez",
        title: "Instructor",
        specialization: "Python Programming",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
];

// Populate courses
function populateCourses() {
    const courseGrid = document.getElementById('courseGrid');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="course-details">
                <span>Level: ${course.level}</span>
                <span>Duration: ${course.duration}</span>
            </div>
        `;
        courseGrid.appendChild(courseCard);
    });
}

// Populate faculty
function populateFaculty() {
    const facultyMembers = document.getElementById('facultyMembers');
    faculty.forEach(member => {
        const facultyCard = document.createElement('div');
        facultyCard.className = 'faculty-card';
        facultyCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.title}</p>
            <p>${member.specialization}</p>
        `;
        facultyMembers.appendChild(facultyCard);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateCourses();
    populateFaculty();
});