const rawStretchesData = [
  {
    "FIELD1": 1,
    "front split":{
      exercise_name:"calf straight",
      "duration": "60r",
    },
    "middle split": {
      exercise_name:"side-to-side squat",
      "duration": "10r",
    },
    "thoracic bridge":{
      exercise_name: "rocking table",
      "duration": "120s"
    },
  },
  {
    "FIELD1": 2,
    "front split":{
      exercise_name:"elevated seiza",
      "duration": "120s",
    },
    "middle split": {
      exercise_name:"standing pancake",
      "duration": "120s",
    },
    "thoracic bridge":{
      exercise_name: "twisting bear",
      "duration": "90s"
    },
  },
  {
    "FIELD1": 3,
    "front split":{
      exercise_name:"calf outward",
      "duration": "60r",
    },
    "middle split": {
      exercise_name:"side-to-side squat",
      "duration": "10r",
    },
    "thoracic bridge":{
      exercise_name: "supine shoulder extension",
      "duration": "90s"
    },
  },
  {
    "FIELD1": 4,
    "front split":{
      exercise_name:"squatted seiza",
      "duration": "120s",
    },
    "middle split": {
      exercise_name:"vertical frog",
      "duration": "90s",
    },
    "thoracic bridge":{
      exercise_name: "supine shoulder extension walk",
      "duration": "10r"
    },
  },
  {
    "FIELD1": 5,
    "front split":{
      exercise_name:"calf inward",
      "duration": "60r",
    },
    "middle split": {
      exercise_name:"piriformis",
      "duration": "90s",
    },
    "thoracic bridge":{
      exercise_name: "seal stretch",
      "duration": "90s"
    },
  },
  {
    "FIELD1": 6,
    "front split":{
      exercise_name:"curled seiza",
      "duration": "120s",
    },
    "middle split": {
      exercise_name:"diamond frog",
      "duration": "120s",
    },
    "thoracic bridge":{
      exercise_name: "reach underneath",
      "duration": "90s"
    },
  },
  {
    "FIELD1": 7,
    "front split":{
      exercise_name:"2 pike 2 squat",
      "duration": "10r",
    },
    "middle split": {
      exercise_name:"kneeling tuck",
      "duration": "30s",
    },
    "thoracic bridge":{
      exercise_name: "seal rock",
      "duration": "90s"
    },
  },
  {
    "FIELD1": 8,
    "front split":{
      exercise_name:"standing pike",
      "duration": "120s",
    },
    "middle split": {
      exercise_name:"frog",
      "duration": "120s",
    },
    "thoracic bridge":{
      exercise_name: "supine trap stretch",
      "duration": "90s"
    },
  },
  {
    "FIELD1": 9,
    "front split":{
      exercise_name:"2 pike 2 squat",
      "duration": "10r",
    },
    "middle split": {
      exercise_name:"kneeling tuck",
      "duration": "30s",
    },
    "thoracic bridge":{
      exercise_name: "supine thoracic band pull",
      "duration": "10r"
    },
  },
  {
    "FIELD1": 10,
    "front split":{
      exercise_name:"kneeling achilles",
      "duration": "90s",
    },
    "middle split": {
      exercise_name:"frog rock",
      "duration": "90s",
    },
    "thoracic bridge":{
      exercise_name: "prone thoracic band pull",
      "duration": "10r"
    },
  },
  {
    "FIELD1": 11,
    "front split":{
      exercise_name:"standing achilles",
      "duration": "90s",
    },
    "middle split": {
      exercise_name:"butterfly",
      "duration": "60s",
    },
    "thoracic bridge":{
      exercise_name: "elevated cat",
      "duration": "90s"
    },
  },
  {
    "FIELD1": 12,
    "front split":{
      exercise_name:"narrow hurdler block",
      "duration": "90s",
    },
    "middle split": {
      exercise_name:"pancake shoulder ",
      "duration": "90s",
    },
    "thoracic bridge":{
      exercise_name: "capsule stretch",
      "duration": "90s"
    },
  },
  {
    "FIELD1": 13,
    "front split":{
      exercise_name:"wide hurdler block",
      "duration": "90s",
    },
    "middle split": {
      exercise_name:"seated good morning",
      "duration": "10r",
    },
    "thoracic bridge":{
      exercise_name: "inverted cat",
      "duration": "90s"
    },
  },
  {
    "FIELD1": 14,
    "front split":{
      exercise_name:"standing single pike",
      "duration": "90s",
    },
    "middle split": {
      exercise_name:"pancake walk",
      "duration": "10r",
    },
    "thoracic bridge":{
      exercise_name: "HS shoulder flexion press",
      "duration": "10r"
    },
  },
  {
    "FIELD1": 15,
    "front split":{
      exercise_name:"vertical lunge bent",
      "duration": "90s",
    },
    "middle split": {
      exercise_name:"pancake bounce",
      "duration": "10r",
    },
    "thoracic bridge":{
      exercise_name: "elevated thoracic bridge",
      "duration": "60s"
    },
  },
  {
    "FIELD1": 16,
    "front split":{
      exercise_name:"vertical lunge straight",
      "duration": "90s",
    },
    "middle split": {
      exercise_name:"pancake circle",
      "duration": "10r",
    },
    "thoracic bridge":{
      exercise_name: "rock n roll",
      "duration": "30s"
    },
  },
  {
    "FIELD1": 17,
    "front split":{
      exercise_name:"standing pike",
      "duration": "120s",
    },
    "middle split": {
      exercise_name:"floating pancake",
      "duration": "60s",
    },
    "thoracic bridge":{
      exercise_name: "elevated thoracic bridge pushup",
      "duration": "10r"
    },
  },
  {
    "FIELD1": 18,
    "front split":{
      exercise_name:"",
      "duration": "",
    },
    "middle split": {
      exercise_name:"butterfly",
      "duration": "60s",
    },
    "thoracic bridge":{
      exercise_name: "rock n roll",
      "duration": "30s"
    },
  },
  {
    "FIELD1": 19,
    "front split":{
      exercise_name:"",
      "duration": "",
    },
    "middle split": {
      exercise_name:"wall middle split",
      "duration": "120s",
    },
    "thoracic bridge":{
      exercise_name: "elevated thoracic bridge hiptap",
      "duration": "10r"
    },
  },
  {
    "FIELD1": 20,
    "front split":{
      exercise_name:"",
      "duration": "",
    },
    "middle split": {
      exercise_name:"weighed wall middle split",
      "duration": "10r",
    },
    "thoracic bridge":{
      exercise_name: "rock n roll",
      "duration": "30s"
    },
  },
  {
    "FIELD1": 21,
    "front split":{
      exercise_name:"",
      "duration": "",
    },
    "middle split": {
      exercise_name:"isometric middle split",
      "duration": "120s",
    },
    "thoracic bridge":{
      exercise_name: "bridge wall walk with hands",
      "duration": "5r"
    },
  },
  {
    "FIELD1": 22,
    "front split":{
      exercise_name:"",
      "duration": "",
    },
    "middle split": {
      exercise_name:"supine flair",
      "duration": "10r",
    },
    "thoracic bridge":{
      exercise_name: "standing pike",
      "duration": "30s"
    },
  },
  {
    "FIELD1": 23,
    "front split":{
      exercise_name:"",
      "duration": "",
    },
    "middle split": {
      exercise_name:"pancake roll-through",
      "duration": "10r",
    },
    "thoracic bridge":{
      exercise_name: "",
      "duration": ""
    },
  }
 ]

 module.exports = rawStretchesData;