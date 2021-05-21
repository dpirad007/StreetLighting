const Light = require("./model/light");
const Cluster = require("./model/cluster");
require("./db/mongoose");

const arr = [];

for (let j = 0; j < 23; j++) {
  let data = {
    id: j + 3000,
    location: `${j + 3000},abc,rd`,
    status: 0,
    // watts: Math.floor(Math.random() * 10),
    // i: j,
    // j: 44,
    // cluster: "Thane",
  };
  arr.push(data);
}

for (let i = 0; i < arr.length; i++) {
  const fetch = async () => {
    // const clusterName = arr[i].cluster;
    // console.log(clusterName);
    // let lightDetails = arr[i];
    // delete lightDetails["cluster"];

    const filter = arr[i].id;
    const update = arr[i];
    console.log(update);
    try {
      const updatedLight = await Light.findOneAndUpdate(
        { id: filter },
        update,
        {
          new: true,
        }
      );
      //   console.log(arr[i]);
      //   const clusterDetails = await Cluster.find({ name: clusterName });
      //   const light = new Light({
      //     ...lightDetails,
      //     cluster: clusterDetails[0]._id,
      //   });
      //   await Cluster.findByIdAndUpdate(clusterDetails[0]._id, {
      //     $push: { lights: light._id },
      //   });
      //   const lightr = await light.save();
    } catch (e) {
      console.log(e);
    }
  };
  fetch();
}
// console.log(arr);
console.log("done");
