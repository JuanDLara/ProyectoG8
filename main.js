// const sidebar = document.getElementById('sidebar')

// const sidebarContent = `                <div>

// <span>usuario</span>
// <span>usuario</span>
// </div>
// <button class="list-buttons">Crear curso</button>
// <button class="list-buttons">Crear usuario</button>
// <button class="list-buttons">Cerrar sesión</button>
// </div>`

// sidebar.innerHTML += sidebarContent


const adminCoursesDropdown = document.getElementById('adminCoursesDropdown')
const createCourseButton = document.getElementById('createCourse')

createCourseButton.addEventListener('click', showAdminCoursesOptions)

adminCoursesDropdown.style.display = 'none'

function showAdminCoursesOptions() {
    adminCoursesDropdown.style.display = 'flex'
}

const TeacherCoursesDropdown = document.getElementById('TeacherCoursesDropdown')
const TeacherCourseButton = document.getElementById('assignedCourse')

createActivityButton.addEventListener('click', showTeacherCoursesOptions)

TeacherCoursesDropdown.style.display = 'none'

function showTeacherCoursesOptions() {
    TeacherCoursesDropdown.style.display = 'flex'
}
///
