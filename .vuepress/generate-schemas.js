const execSync = require('child_process').execSync;
const fs = require('fs');
const schemas_path = "./tables/.schemas";

/**
 * For each table documentation file, the markdown table schema is created
 * from a json table schema and handlebars template
 * this method is called recursively for subdirectories
 * @param {*} files an array of filenames
 * @param {*} path path to directory
 * @param {*} dir the files's directory name
 */
function generateSchemas(path, files, dir) {
    files.forEach(filename => {
        if (fs.lstatSync(path + '/' + dir + '/' + filename).isDirectory()) {
            subFiles = fs.readdirSync(path + '/' + dir + '/' + filename);
            generateSchemas(path + '/' + dir, subFiles, filename);
        } else {
            //generate new schemas in table format using template "template_schemas.hbs" & .json file
            execSync('table-schema-to-markdown ' + path  + '/' + dir.replace(/\s/g, '\\ ') + '/' + filename +
                ' --template=.vuepress/template_schema.hbs --fields-format=table >>' + path  + '/'
                + dir.replace(/\s/g, '\\ ') + '/' + filename.replace(/\.[^/.]+$/, "") + '.md');
                console.log(dir.replace(/\s/g, '\\ ') + '/' + filename.replace(/\.[^/.]+$/, "") + '.md has been generated successfully')
        }
    });
}

/**
 * Searches for all subdirectories and generates a corresponding table schema and associated info
 * for each file within
 * @param {*} path 
 */
function searchAndGenerateSchemas(path) {
    //list subdirectories
    dirs = fs.readdirSync(path);
    //for each directory
    dirs.forEach(dir => {
        //check if directory
        if (fs.lstatSync(path + '/' + dir).isDirectory()) {
            //list files
            files = fs.readdirSync(path + '/' + dir);
            generateSchemas(path, files, dir);
        }
    });
}

//delete the current generated schemas if exist
execSync("find tables/.schemas -type f -name '*.md' -delete");
//generate new schemas using the distant .json files
searchAndGenerateSchemas(schemas_path);