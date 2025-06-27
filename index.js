// JavaScript for subject switching
document.addEventListener('DOMContentLoaded', function () {
    const subjectLinks = document.querySelectorAll('nav ul li a');
    const currentSubject = document.getElementById('current-subject');
    const updatesContainer = document.getElementById('updates-container');
    const checkAssignmentBtn = document.getElementById('checkAssignment');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBackdrop = document.getElementById('menuBackdrop');
    const menuBadge = document.getElementById('menuBadge');
    const tecBadge = document.getElementById('tecBadge');
    const cpeBadge = document.getElementById('cpeBadge');
    const mpeBadge = document.getElementById('mpeBadge');
    const iteBadge = document.getElementById('iteBadge');
    const homeLink = document.getElementById('homeLink');
    const timetableLink = document.getElementById('timetableLink');
    const classrepLink = document.getElementById('classrepLink');
    const classrepPage = document.getElementById('classrepPage');
    const timetablePage = document.getElementById('timetablePage');

    // Check if user has seen the updates
    if (localStorage.getItem('tec112Seen')) {
        tecBadge.style.display = 'none';
    }
    if (localStorage.getItem('cpe122Seen')) {
        cpeBadge.style.display = 'none';
    }
    if (localStorage.getItem('mpe126Seen')) {
        mpeBadge.style.display = 'none';
    }
    if (localStorage.getItem('ite125Seen')) {
        mpeBadge.style.display = 'none';
    }

    // Check if user has seen the menu
    if (localStorage.getItem('menuSeen')) {
        menuBadge.style.display = 'none';
    }

    // Function to close menu
    function closeMenu() {
        menuOverlay.classList.remove('active');
        menuBackdrop.classList.remove('active');
        document.body.style.marginRight = '0';
    }

    // Hamburger menu click handler
    hamburgerMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        menuOverlay.classList.toggle('active');
        menuBackdrop.classList.toggle('active');
        document.body.style.marginRight = menuOverlay.classList.contains('active') ? '300px' : '0';
        menuBadge.style.display = 'none';
        localStorage.setItem('menuSeen', 'true');
    });

    // Backdrop click handler (close menu when clicking outside)
    menuBackdrop.addEventListener('click', closeMenu);

    // Home link click handler
    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        closeMenu();
        showMainContent();
    });

    // Timetable link click handler
    timetableLink.addEventListener('click', function (e) {
        e.preventDefault();
        closeMenu();
        showTimetable();
    });

    // Classrep link click handler
    classrepLink.addEventListener('click', function (e) {
        e.preventDefault();
        closeMenu();
        showClassrep();
    });

    // Function to show main content
    function showMainContent() {
        classrepPage.style.display = 'none';
        timetablePage.style.display = 'none';
        updatesContainer.style.display = 'block';
        currentSubject.style.display = 'block';
        checkAssignmentBtn.style.display = shouldShowAssignmentButton() ? 'block' : 'none';
    }

    // Function to show timetable
    function showTimetable() {
        updatesContainer.style.display = 'none';
        classrepPage.style.display = 'none';
        timetablePage.style.display = 'block';
        currentSubject.style.display = 'none';
        checkAssignmentBtn.style.display = 'none';
    }

    // Function to show classrep page
    function showClassrep() {
        updatesContainer.style.display = 'none';
        timetablePage.style.display = 'none';
        classrepPage.style.display = 'block';
        currentSubject.style.display = 'none';
        checkAssignmentBtn.style.display = 'none';
    }

    // Function to check if assignment button should be shown
    function shouldShowAssignmentButton() {
        const currentTitle = currentSubject.textContent;
        return currentTitle.includes('TEC 112') || currentTitle.includes('CPE 122') || currentTitle.includes('MPE 126') || currentTitle.includes('ITE 125');
    }

    // Sample data for different subjects
    const subjectData = {
        mat_103: {
            title: "MAT 103 Updates",
            updates: [
                {
                    title: "CLASSES",
                    date: "2025-06-27",
                    content: "There will be no any other class this semester for this course, just revise and be ready for exam."
                },
                {
                    title: "Upcoming Test / Exam",
                    date: "2025-06-27",
                    content: "The exam for this course will be on July 9, 2025 from 9am to 12 noon inside the rooms fluid lab and boiler room"
                },
                {
                    title: "Additional Resources",
                    date: "2025-06-27",
                    content: "Ensure you don't have any pending or unsumitted assignment."
                }
            ]
        },
        tec_112: {
            title: "TEC 112 Updates",
            updates: [
                {
                    title: "ASSIGNMENT",
                    date: "2025-06-27",
                    content: "please click on the above utton to open the assigment."
                },
                {
                    title: "LABS",
                    date: "2025-06-27",
                    content: "Hope you all managed to collect your lab reports."
                }
            ],
            hasAssignment: true
        },
        sta_102: {
            title: "STA 102 Updates",
            updates: [
                {
                    title: "CLASSES",
                    date: "2025-06-27",
                    content: "a class is being organised stay tuned."
                }
            ]
        },
        cpe_122: {
            title: "CPE 122 Updates",
            updates: [
                {
                    title: "CLASSES",
                    date: "2025-06-27",
                    content: "we shall have a class this Tuesday at 3pm."
                },
                {
                    title: "ASSIGNMENT",
                    date: "2025-06-27",
                    content: "New assignment has been posted. Click the button above to check it."
                }
            ],
            hasAssignment: true
        },
        ite_125: {
            title: "ITE 125 Updates",
            updates: [
                {
                    title: "CLASSES",
                    date: "2025-06-25",
                    content: "NO information still."
                },
                {
                    title: "MUSOMI",
                    date: "2025-06-27",
                    content: "quiz on musomi shall be unlocked soon(Sunday) stay updated"
                }
            ],
            hasAssignment: true
        },
        mpe_126: {
            title: "MPE 126 Updates",
            updates: [
                {
                    title: "CLASSES",
                    date: "2025-06-27",
                    content: "There shall be a class on wednesday. hopefully it won't be a class but a cat"
                },
                {
                    title: "assignments",
                    date: "2025-06-27",
                    content: "the latest assignments shall be collected on Wednesday next week, meanwhile there s a modelling assignment that is the two-two work also to be collectd on Wednesday."
                }
            ],
            hasAssignment: true
        },
        csc_121: {
            title: "CSC 121 Updates",
            updates: [
                {
                    title: "CLASS",
                    date: "2025-06-27",
                    content: "hopefully no class again on this but stay updated rumours have it that the lecturer asked for a class."
                },
                {
                    title: "CAT 2",
                    date: "2025-06-27",
                    content: "The cat will be collected next week.hope you have finished"
                }
            ]
        }
    };

    // Function to update the displayed content
    function updateContent(subject) {
        if (subjectData[subject]) {
            // Update the title
            currentSubject.textContent = subjectData[subject].title;
            currentSubject.style.display = 'block';

            // Clear existing updates
            updatesContainer.innerHTML = '';

            // Add new updates
            subjectData[subject].updates.forEach(update => {
                const updateElement = document.createElement('div');
                updateElement.className = 'update-item';
                updateElement.innerHTML = `
                                    <h3>${update.title}</h3>
                                    <p class="update-date">Posted: ${update.date}</p>
                                    <p>${update.content}</p>
                                `;
                updatesContainer.appendChild(updateElement);
            });

            // Show/hide check assignment button
            checkAssignmentBtn.style.display = subjectData[subject].hasAssignment ? 'block' : 'none';

            // Show main content view
            showMainContent();

            // Mark subjects as seen if they're the current subject
            if (subject === 'tec_112') {
                tecBadge.style.display = 'none';
                localStorage.setItem('tec112Seen', 'true');
            }
            if (subject === 'cpe_122') {
                cpeBadge.style.display = 'none';
                localStorage.setItem('cpe122Seen', 'true');
            }
            if (subject === 'mpe_126') {
                mpeBadge.style.display = 'none';
                localStorage.setItem('mpe126Seen', 'true');
            }
            if (subject === 'ite_125') {
                iteBadge.style.display = 'none';
                localStorage.setItem('ite125Seen', 'true');
            }
        }
    }

    // Check assignment button click handler
    checkAssignmentBtn.addEventListener('click', function () {
        // Open different PDFs based on current subject
        const currentTitle = currentSubject.textContent;
        if (currentTitle.includes('TEC 112')) {
            window.open('tec112_assignment.pdf', '_blank');
        } else if (currentTitle.includes('CPE 122')) {
            window.open('cpe122_assignment.pdf', '_blank');
        } else if (currentTitle.includes('MPE 126')) {
            window.open('mpe126_assignment.pdf', '_blank');
        } else if (currentTitle.includes('ITE 125')) {
            window.open('https://elearning.mu.ac.ke/login/forgot_password.php', '_blank');
        }
    });

    // ===== NEW UPDATE CHECKING SYSTEM =====
    // Track last visit date
    if (!localStorage.getItem('lastVisit')) {
        localStorage.setItem('lastVisit', new Date().toISOString().split('T')[0]);
    }

    // Function to check for new updates
    function checkForUpdates() {
        const lastVisit = localStorage.getItem('lastVisit');
        subjectLinks.forEach(link => {
            const subject = link.getAttribute('data-subject');
            if (subjectData[subject] && subjectData[subject].updates[0] && new Date(subjectData[subject].updates[0].date) > new Date(lastVisit)) {
                // Add NEW badge
                if (!link.querySelector('.new-badge') && (subject === 'tec_112' || subject === 'cpe_122' || subject === 'mpe_126')) {
                    const badge = document.createElement('span');
                    badge.className = 'new-badge';
                    badge.textContent = 'NEW';
                    link.appendChild(badge);
                }

                // Blink tab title if not active
                if (!link.classList.contains('active')) {
                    blinkTabTitle(subjectData[subject].title);
                }
            }
        });
    }

    // Blink tab title effect
    function blinkTabTitle(title) {
        let blinkCount = 0;
        const maxBlinks = 5;
        const originalTitle = document.title;

        const blinkInterval = setInterval(() => {
            document.title = (document.title === originalTitle)
                ? `⚠️ ${title} - NEW UPDATE!`
                : originalTitle;

            blinkCount++;
            if (blinkCount >= maxBlinks * 2) {
                clearInterval(blinkInterval);
                document.title = originalTitle;
            }
        }, 500);
    }

    // Handle click events for subject links
    subjectLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            subjectLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            const subject = this.getAttribute('data-subject');

            // Update the content
            updateContent(subject);
        });
    });

    // Initialize with mat_103ematics content
    updateContent('mat_103');
    checkForUpdates();
});

// Update last visit date when leaving
window.addEventListener('beforeunload', () => {
    localStorage.setItem('lastVisit', new Date().toISOString().split('T')[0]);
});