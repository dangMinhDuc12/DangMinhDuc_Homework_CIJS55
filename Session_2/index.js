class Person {
  constructor(name, age, job, id) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.id = id;
  }
}

class Family {
  constructor(address, ...person) {
    this.address = address;
    this.numOfMem = person.length;
    this.person = person;
  }
  addPerson(...person) {
    this.person.push(...person);
    this.numOfMem += person.length;

  }

  
}

class Town {
  constructor(name,...listFamily) {
    this.name = name;
    this.numOfFamily = listFamily.length;
    this.listFamily = listFamily;
  }
  addFamily(...family) {
    this.listFamily.push(...family);
    this.numOfFamily += family.length;
  }
  getFamily(address = '') {
    //Nếu nhập cụ thể 1 số nhà sẽ ra thông tin số nhà đó, nếu không nhập gì sẽ ra thông tin tất cả các nhà
  if(address) {
    this.listFamily.forEach(family => {
      if(family.address === address) {
        console.log(`Hộ gia đình này có ${family.address} có ${family.numOfMem} thành viên, thông tin cụ thể các thành viên như sau:`);
        family.person.forEach(person => {
          console.log(`
            Họ và tên: ${person.name}
            Tuổi: ${person.age}
            Nghề nghiệp ${person.job}
            Số chứng minh nhân dân: ${person.id}
          
          `);
        })

      }
    })
  }
  else {
    console.log(`Thông tin của tất các hộ gia đình của khu phố ${this.name}`);
    this.listFamily.forEach(family => {
      
        console.log(`Hộ gia đình này có ${family.address} có ${family.numOfMem} thành viên, thông tin cụ thể các thành viên như sau:`);
        family.person.forEach(person => {
          console.log(`
            Họ và tên: ${person.name}
            Tuổi: ${person.age}
            Nghề nghiệp ${person.job}
            Số chứng minh nhân dân: ${person.id}
          
          `);
        })

      
    })
    
  }
  }
}


//Tạo các thành viên
const person1 = new Person('Nguyễn Văn A', 20, 'Sinh viên', 1);
const person2 = new Person('Trần Văn B', 21, 'Giáo viên', 2);
const person3 = new Person('Lê Văn C', 22, 'Bác sĩ', 3);
const person4 = new Person('Phạm Văn D', 23, 'Kỹ sư', 4);




//Tạo các hộ gia đình
const family1 = new Family('Số nhà 1', person1, person2);
const family2 = new Family('Số nhà 2', person3, person4);


//Tạo khu phố
const town1 = new Town('Town 1',family1, family2);

//Lấy thông tin số nhà 1
town1.getFamily('Số nhà 1');

//Lấy thông tin số nhà 2
town1.getFamily('Số nhà 2');

//Lấy thông tin tất cả các nhà
town1.getFamily();

