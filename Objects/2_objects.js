const newObject = {};

newObject.id = 1;
newObject.name = "Kush";
newObject.password = "new123";
// console.log(newObject); //{ id: 1, name: 'Kush', password: 'new123' }

const newObject1 = {
  id: 123,
  user_details: {
    fullname: {
      firstname: "Kush",
      lastname: "shukla",
    },
    isActive: true,
  },
  posts: [
    {
      id: 1,
      blogTitle: "First Title!",
      blog: {
        description: "lorem ipsum lorem ipsum",
        images: ["link", "link2"],
      },
    },
    {
      id: 2,
      blogTitle: "Second Title!",
      blog: {
        description: "Second second",
        images: ["link3", "link4"],
      },
    },
  ],
};

// console.log(newObject1.user_details); //{ fullname: { firstname: 'Kush', lastname: 'shukla' }, isActive: true }
// console.log(newObject1.user_details.fullname); //{ firstname: 'Kush', lastname: 'shukla' }
// console.log(newObject1.user_details.fullname.firstname); //Kush

// console.log(newObject1.posts);
/*
[
  {
    id: 1,
    blogTitle: 'First Title!',
    blog: { description: 'lorem ipsum lorem ipsum', images: [Array] }
  },
  {
    id: 2,
    blogTitle: 'Second Title!',
    blog: { description: 'Second second', images: [Array] }
  }
]
*/

// we can not access array values like that since posts is an array
// console.log(newObject1.posts.blog.images); //TypeError: Cannot read properties of undefined (reading 'images')

//either access it one-by-one by using array index
// console.log(newObject1.posts[0].blog.images); //[ 'link', 'link2' ]

//###################################################IMPORTANT methods##################################################
// console.log(Object.keys(newObject1)); // [ 'id', 'user_details', 'posts' ]
// console.log(Object.values(newObject1));
/**
[
  123,
  {
    fullname: { firstname: 'Kush', lastname: 'shukla' },
    isActive: true
  },
  [
    { id: 1, blogTitle: 'First Title!', blog: [Object] },
    { id: 2, blogTitle: 'Second Title!', blog: [Object] }
  ]
]
 */

//###################################################################################################################
//-------------------------------------------------------------------------------------------------------------------
//########################################################## IMPORTANT ################################################
// Or loop it for-in loop is used to iterate through objects
// for (i in newObject1.posts) {
//   console.log(newObject1.posts[i].blog.images);
// }
//Output
// ["link", "link2"]
// ["link3", "link4"]
//##################################################################################################################

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 1: "c", 2: "d" };

// // (1) if we use basic assignment way to merge two objects it will just push the whole object as it is like we have seen in array with push(arr)
// // const obj3 = obj1 + obj2;
// // console.log(obj3); //[object Object][object Object]

// // (2) if we use comma then it will just push the whole object as it is like we have seen in array with push(arr)
// // const obj3 = { obj1, obj2 };
// // console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }

// // (3) Object.assign
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3); //{ '1': 'c', '2': 'd' } BECAUSE the key was same hence it updated the value of that key

//############################################################################################################

// hence to merge two arrays their keys should be Unique
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };

// // let obj3 = Object.assign({}, obj1, obj2);
// // console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// // BEST Way and most used (spread(...) operator)
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//###############################################################################################################
