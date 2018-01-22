// IDEA: Write files as json
/**
* Object class for Files
*/
export class File{
  constructor(){
    this.name = "New File";
    this.fileExtension = "js";
    this.pathTo = "Folder"
    if(arguments.length > 0){
      Object.assign(this, arguments[0]);
    }
    this.refName = this.name+"."+this.fileExtension;
    this.pathRef = this.pathTo+"/"+this.refName;
  }
}
/**
* Object class for Folders
*/
export class Folder{
  constructor(){
    this.name = "New Folder";
    this.children = [];
    if(arguments.length > 0){
      Object.assign(this, arguments[0]);
    }
  }
  addFile(_File){
    this.children
  }
}
