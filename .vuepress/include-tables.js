const markdownInclude = require('markdown-include');
const fs = require('fs');
const tables_path = "./tables/.sources";

/**
 * Overwrites markdown_filename.json and updates the path with right filename and dirname
 * The new content is
 * '{\n
 * 	"build" : "tables/dirname/filename",\n
 * 	"files" : ["tables/.sources/dirname/filename"]\n
 *  }'
 * @param {*} filename 
 * @param {*} dirname 
 */
function writeJsonFile(filename, dirname) {
    //path of the written file
    const path = tables_path + "/" + dirname + "/markdown_" + filename + ".json";
    //destination folder
    var destFolder = "tables";
    //source folder
    var srcFolder = "tables/.sources";
    //content of the file
    var content = '{\n	"build" : "' + destFolder + '/' + dirname + '/' + filename +
        '",\n	"files" : ["' + srcFolder + '/' + dirname + '/' + filename + '"]\n }';
    //writing file
    fs.writeFileSync(path, content);
    return path;
}

/**
 * For each documentation file, the associated markdown.json file is written
 * and compilarion process is carried out
 * this method is called recursively for subdirectories
 * @param {*} files an array of filenames
 * @param {*} path path to directory
 * @param {*} dir the files's directory name
 */
function compileDocumentation(files, path, dir) {
    //for each file in files
    files.forEach(filename => {
        // if it is a directory
        if (fs.lstatSync(path + '/' + dir + '/' + filename).isDirectory()) {
            //list files within
            filesList = fs.readdirSync(path + '/' + dir + '/' + filename);
            //compile the files found
            compileDocumentation(filesList, path + '/' + dir, filename);
        } else {
            var fullDir = dir;
            //fix directory path for PMSI subdirectories
            if (dir.includes("PMSI")) fullDir = 'PMSI/' + fullDir;
            //write compilation parameters in json file
            var jsonPath = writeJsonFile(filename, fullDir);
            //execute compilation
            markdownInclude.compileFiles(jsonPath).then(function (data) {
                //when compilation is done delete json file
                fs.unlinkSync(jsonPath);
                console.info(markdownInclude.options.build + ' has been built successfully');
            });

        }
    });
}

/**
 * Searches for all subdirectories and compiles the files within
 * @param {*} path 
 */
function searchAndCompile(path) {
    //list subdirectories
    dirs = fs.readdirSync(path);
    //for each directory
    dirs.forEach(dir => {
        //check if directory
        if (fs.lstatSync(path + '/' + dir).isDirectory()) {
            //list files
            files = fs.readdirSync(path + '/' + dir);
            //compile
            compileDocumentation(files, path, dir);
        }
    });

}

searchAndCompile(tables_path);