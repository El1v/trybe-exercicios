let container = document.getElementById('container');

container.style.backgroundColor = 'grey';


let headerContainer = document.getElementById('header-container');

headerContainer.style.cssText = 
                'color: white;' +
                'background-color : green;';


let h3noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');

h3noEmergencyTasks[0].style.backgroundColor = 'black';
h3noEmergencyTasks[1].style.backgroundColor = 'black';

let backgroundNoEmergencyTasks = document.querySelector('.no-emergency-tasks');

backgroundNoEmergencyTasks.style.backgroundColor = 'yellow';


let h3emergencyTasks = document.querySelectorAll('.emergency-tasks h3');

h3emergencyTasks[0].style.backgroundColor = 'purple';
h3emergencyTasks[1].style.backgroundColor = 'purple';

let backgroundEmergencyTasks = document.querySelector('.emergency-tasks');

backgroundEmergencyTasks.style.backgroundColor = 'coral';

let footerContainer = document.getElementById('footer-container');

footerContainer.style.backgroundColor = 'darkslategrey';







