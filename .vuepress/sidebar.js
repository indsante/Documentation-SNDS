const fs = require('fs');

/**
 * returns the title of a file
 * @param {*} directory 
 * @param {*} filename 
 */
function getMarkdownTitle(directory, filename){
    var text = fs.readFileSync(directory + '/' + filename);
    //returns the first line of the text 
    var header= text.toString().split('\n').shift()
    /*
    applies the following transformation 
    '# Les actes et consultations externes' -> 'les actes et consultations externes'
    */
    .slice(1).toLowerCase().trim();
    return header
}

/**
* List .md filenames in a directory
* @param {*} directoryName 
*/
function listMarkdownFilesInDirectory(directoryName) {
    return fs
    // returns an array of all the filenames in a directory
    .readdirSync('./' + directoryName) 
    // returns all filenames except README.md
    .filter(function (filename) {
        return filename !== 'README.md';
    })
    //returns only filenames that have an .md extension
    .filter(function (filename) {
        return filename.slice(-3) === '.md';
    })
    // returns a case insensitive sorting between file titles
    .sort(function (a, b) {
        return getMarkdownTitle(directoryName, a)
        .localeCompare(getMarkdownTitle(directoryName, b));
    })
    //returns a new array with a transformation on filenames (adding the directory name)
    .map(function (filename) {
        return '/' + directoryName + '/' + filename.slice(0, -3);
    });
}

/**
* list subdirectories in a directory
* @param {*} directoryName 
*/
function listSubDirectories(directoryName) {
    return fs
    // returns an array of all the filenames in a directory
    .readdirSync('./' + directoryName)
    //returns only the directories
    .filter(function (filename) {
        return fs.lstatSync('./' + directoryName + '/' + filename).isDirectory();
    })
}

/**
* Creates a sidebar group for a given directory
* @param {*} directoryPath 
*/
const getSidebarGroup = function (directoryPath) {
    const lastDirectory = directoryPath.split("/").pop();
    const sidebarGroup = {};
    
    sidebarGroup["title"] = lastDirectory.charAt(0).toUpperCase() + lastDirectory.slice(1);
    
    // checks if it contains a README file 
    if (fs.existsSync('./' + directoryPath + '/README.md')) {
        sidebarGroup["path"] = '/' + directoryPath + '/';
    }
    const children = [];
    for (subDirectory of listSubDirectories(directoryPath)) {
        // recursive call for subdirectories
        children.push(getSidebarGroup(directoryPath + '/' + subDirectory));
    }
    sidebarGroup["children"] = children.concat(listMarkdownFilesInDirectory(directoryPath));
    // console.log(sidebarGroup["children"])
    return sidebarGroup
}

exports.getSidebarGroup = getSidebarGroup;