function truncate(str, maxlength) {
  if(str.length > maxlength){
    let sliced = str.slice(0,maxlength -1);
    return sliced + "…";
  }
  else{
    return str;
  }
}
