/**__
* |  )
* |-(
* |__)
**/

export function recursiveFor(OS_CLASS, CB, hitEnd){
  if(hitEnd != true){
  	if(OS_CLASS.type == 'ClassHolder'){
      OS_CLASS.forEach((child)=>{
        recursiveFor(child, CB, false);
      });
    }else if(OS_CLASS.children){
      CB(OS_CLASS);
      if(OS_CLASS.children.forEach){
  		  OS_CLASS.children.forEach((child) => {
          recursiveFor(child, CB, false);
        });
      }else if(Object.keys(OS_CLASS.children)){
        [...Object.keys(OS_CLASS.children)].forEach((child) => {
          recursiveFor(OS_CLASS.children[child], CB, false);
        });
      }
  	}else if(OS_CLASS.items){
      CB(OS_CLASS);
      if(OS_CLASS.items.forEach){
  		  OS_CLASS.items.forEach((item) => {
          recursiveFor(item, CB, false);
        });
      }else if(Object.keys(OS_CLASS.items)){
        [...Object.keys(OS_CLASS.items)].forEach((item) => {
          recursiveFor(OS_CLASS.items[item], CB, false);
        });
      }
    }else{
		  recursiveFor(OS_CLASS, CB, true);
    }
  }else{
    if(CB){
      CB(OS_CLASS);
    }
  	return OS_CLASS;
  }
}

export const String = {
  keyToChar: function(key){
    return key.code.replace('Key','');
  }
};
