var recipes = { 
  cake: 'chocolate',
  pancakes: 'flour'
}

function updateObjectWithKeyAndValue(obj, key, val){
  
  var newObj = Object.assign({}, obj)
  newObj[key] = val
  
  return newObj 
}

<<<<<<< HEAD
function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  
   obj[key] = val;
   
   return obj
}

function deleteFromObjectByKey(obj, key){
  
  var newObj = Object.assign({}, {obj});
  
  delete newObj.key; 
  
  return newObj;
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  
  delete object[key];
  
  return object
}
=======
>>>>>>> 62765a20e62d07ea2c533fc669dba775a581c2d9
