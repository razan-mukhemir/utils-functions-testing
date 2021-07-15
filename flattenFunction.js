const _ = require("lodash")
const flatten=(arr)=>{
        if(arr instanceof Array){
            if(arr.length===0){
                return 'empty array';
            }
            else if(arr[0] instanceof Array){
                return _.map(arr,(a)=>{
                   return _.omit(a,path);
                }) 
            }
            else if(arr[0] instanceof Object){
                return _.map(arr,item=>{
                    return _.omit(item,path)
                })
            }
            else{
                return _.flatten(arr)
            }
       }
       else if(arr instanceof Object){
            if(Object.keys(arr).length===0){
                return 'empty object';
            }
            else {
                return  _.omit(arr,path);
            }
       }
}
module.exports=flatten;
var a;
a=flatten([1,2,3,'r'],[0,3])
console.log(a)
