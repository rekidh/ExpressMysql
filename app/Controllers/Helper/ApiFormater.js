class ApiFormater{
   constructor(code,messages,data){
      this.code=code
      this.messages=messages
      this.data=data
   }
   createAPI(){
      return {
         code:this.code,
         messages:this.messages,
         data:this.data
      }
   }

}
module.exports=ApiFormater