const {Dog} = require ('../models');

class DogController {

  // Create Dog by User Id

  async createDog(user_Id, id) {
    return Dog.create(user_Id,{where:{id}});  
  };

  // Get Dog by Id

  async findDog(id){
    return Dog.findOne({where:{id}})
  };




}






let dogController = new DogController();
module.exports = dogController;