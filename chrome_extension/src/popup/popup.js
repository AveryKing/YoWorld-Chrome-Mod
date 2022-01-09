let display = 'main';


document.getElementById('showCommands').onclick = () => {
    document.getElementById('mainDiv').style.display = 'none';
    document.getElementById('commandsDiv').style.display = 'block';
    display = 'commands';
}

document.getElementById('goBack').onclick = () => {
    document.getElementById('commandsDiv').style.display = 'none';
    document.getElementById('mainDiv').style.display = 'block';
    display = 'main';
}

document.getElementById('showPermissions').onClick = () => {
    document.getElementById('commandsDiv').style.display = 'none';
    document.getElementById('mainDiv').style.display = 'none';
    document.getElementById('permissionsDiv').style.display = 'block';
}