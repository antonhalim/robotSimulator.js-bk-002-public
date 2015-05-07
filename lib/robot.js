'use strict';

function Robot() {
};

Robot.prototype.orient = function(orient){
  if(orient == "west" || orient == "east" || orient == "north" || orient =="south"){
    this.bearing = orient;
  }
  else{
    throw('Invalid Robot Bearing');
  }
};

Robot.prototype.turnRight = function(){
  if (this.bearing === "north"){
    this.bearing = "east"
  }
  else if(this.bearing === "east"){
    this.bearing = "south"
  }
  else if(this.bearing === "south"){
    this.bearing = "west"
  }
  else if(this.bearing === "west"){
    this.bearing = "north"
  };
};

Robot.prototype.turnLeft = function(){
  if (this.bearing === "north"){
    this.bearing = "west"
  }
  else if(this.bearing === "west"){
    this.bearing = "south"
  }
  else if(this.bearing === "south"){
    this.bearing = "east"
  }
  else if(this.bearing === "east"){
    this.bearing = "north"
  };
};

Robot.prototype.at = function(x, y){
  this.coordinates = [x, y];
};

Robot.prototype.advance = function(){
    if(this.bearing == "north"){
      this.coordinates[1] += 1;
    }
    else if(this.bearing == "east"){
      this.coordinates[0] += 1;
    }
    else if(this.bearing == "west"){
      this.coordinates[0] -= 1;
    }
    else if(this.bearing == "south"){
      this.coordinates[1] -= 1;
    };
;}

Robot.prototype.instructions = function(word){
  var result = [];
  var charword = word.split("");
    for(var i = 0; i < charword.length; i++){
      if(charword[i] === "L"){
        result.push("turnLeft")
      }
      else if(charword[i] === "R"){
        result.push("turnRight")
      }
      else if(charword[i] === "A"){
        result.push("advance")
      }
    };
    return result;
};

Robot.prototype.place = function(hash){
  this.orient(hash["direction"]);
  this.at(hash["x"],hash["y"]);
};

Robot.prototype.evaluate = function(string){
   var instruction_array = this.instructions(string);//["turnRight", "turnLeft", "advance", "advance", "turnLeft", "advance", "turnLeft"]
  for(var i = 0; i < instruction_array.length; i++){
    this[instruction_array[i]]();
  };
};
