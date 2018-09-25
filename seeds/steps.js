exports.seed = (knex, Promise)=>{
  return knex('steps').del()
    .then( ()=>{
      //may not need step_id
      return knex('steps').insert([
        //5x1r -- 1 thru 9
        // {step_id:1,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        // {step_id:2,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        // {step_id:3,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        // {step_id:4,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        // {step_id:5,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        // {step_id:6,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        // {step_id:7,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        // {step_id:8,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        {step_id:9,mastery_id:1,sets:5,reps:1,secs:null,step_sequence:9},
        
        //5x3r -- 10 thru 18
        // {step_id:10,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},
        // {step_id:11,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},
        // {step_id:12,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},
        // {step_id:13,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},
        // {step_id:14,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},
        // {step_id:15,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},
        // {step_id:16,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},
        // {step_id:17,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},
        {step_id:18,mastery_id:2,sets:5,reps:3,secs:null,step_sequence:9},

        //5x5r -- 19 thru 27
        {step_id:19,mastery_id:3,sets:3,reps:5,secs:null,step_sequence:1},
        // {step_id:20,mastery_id:3,sets:5,reps:3,secs:null,step_sequence:2},
        // {step_id:21,mastery_id:3,sets:5,reps:3,secs:null,step_sequence:3},
        {step_id:22,mastery_id:3,sets:4,reps:5,secs:null,step_sequence:4},
        // {step_id:23,mastery_id:3,sets:4,reps:5,secs:null,step_sequence:4},
        // {step_id:24,mastery_id:3,sets:4,reps:5,secs:null,step_sequence:4},
        // {step_id:25,mastery_id:3,sets:4,reps:5,secs:null,step_sequence:4},
        // {step_id:26,mastery_id:3,sets:4,reps:5,secs:null,step_sequence:4},
        {step_id:27,mastery_id:3,sets:5,reps:5,secs:null,step_sequence:9},

        //5x5r@ -- 28 thru 36
        // {step_id:29,mastery_id:4,sets:5,reps:5,secs:null,step_sequence:9},
        // {step_id:30,mastery_id:4,sets:5,reps:5,secs:null,step_sequence:9},
        // {step_id:31,mastery_id:4,sets:5,reps:5,secs:null,step_sequence:9},
        // {step_id:32,mastery_id:4,sets:5,reps:5,secs:null,step_sequence:9},
        // {step_id:33,mastery_id:4,sets:5,reps:5,secs:null,step_sequence:9},
        {step_id:34,mastery_id:4,sets:4,reps:5,secs:null,step_sequence:7},
        // {step_id:35,mastery_id:4,sets:5,reps:5,secs:null,step_sequence:9},
        {step_id:36,mastery_id:4,sets:5,reps:5,secs:null,step_sequence:9},

        //5x10r -- 37 thru 45

        /*
          deck squats follow a different set of steps for their 5 sets of 10 reps
          {mastery_id:5,sets:3,reps:2,secs:null,step_sequence:1}
          {mastery_id:5,sets:4,reps:4,secs:null,step_sequence:4}
          {mastery_id:5,sets:4,reps:8,secs:null,step_sequence:7}
          {mastery_id:5,sets:4,reps:10,secs:null,step_sequence:8}
          {mastery_id:5,sets:5,reps:10,secs:null,step_sequence:9}
        */

        {step_id:37,mastery_id:5,sets:3,reps:10,secs:null,step_sequence:1},
        // {step_id:38,mastery_id:5,sets:3,reps:10,secs:null,step_sequence:2},
        // {step_id:39,mastery_id:5,sets:3,reps:10,secs:null,step_sequence:3},
        {step_id:40,mastery_id:5,sets:4,reps:10,secs:null,step_sequence:4},
        // {step_id:41,mastery_id:5,sets:4,reps:10,secs:null,step_sequence:5},
        // {step_id:42,mastery_id:5,sets:4,reps:10,secs:null,step_sequence:6},
        // {step_id:43,mastery_id:5,sets:4,reps:10,secs:null,step_sequence:7},
        // {step_id:44,mastery_id:5,sets:4,reps:10,secs:null,step_sequence:8},
        {step_id:45,mastery_id:5,sets:5,reps:10,secs:null,step_sequence:9},
        
        //5x10r@ -- 46 thru 54
        {step_id:46,mastery_id:6,sets:3,reps:2,secs:null,step_sequence:1},
        {step_id:47,mastery_id:6,sets:5,reps:2,secs:null,step_sequence:2},
        {step_id:48,mastery_id:6,sets:3,reps:4,secs:null,step_sequence:3},
        {step_id:49,mastery_id:6,sets:4,reps:4,secs:null,step_sequence:4},
        {step_id:50,mastery_id:6,sets:4,reps:6,secs:null,step_sequence:5},
        {step_id:51,mastery_id:6,sets:5,reps:6,secs:null,step_sequence:6},
        {step_id:52,mastery_id:6,sets:4,reps:8,secs:null,step_sequence:7},
        {step_id:53,mastery_id:6,sets:4,reps:10,secs:null,step_sequence:8},
        {step_id:54,mastery_id:6,sets:5,reps:10,secs:null,step_sequence:9},
        
        //5x15r -- 55 thru 63
        {step_id:55,mastery_id:7,sets:3,reps:3,secs:null,step_sequence:1},
        {step_id:56,mastery_id:7,sets:5,reps:3,secs:null,step_sequence:2},
        {step_id:57,mastery_id:7,sets:3,reps:6,secs:null,step_sequence:3},
        {step_id:58,mastery_id:7,sets:4,reps:6,secs:null,step_sequence:4},
        {step_id:59,mastery_id:7,sets:4,reps:9,secs:null,step_sequence:5},
        // {step_id:60,mastery_id:7,sets:4,reps:6,secs:null,step_sequence:6},
        {step_id:61,mastery_id:7,sets:4,reps:12,secs:null,step_sequence:7},
        {step_id:62,mastery_id:7,sets:4,reps:15,secs:null,step_sequence:8},
        {step_id:63,mastery_id:7,sets:5,reps:15,secs:null,step_sequence:9},
        
        //5x30r -- 64 thru 72
        {step_id:64,mastery_id:8,sets:3,reps:6,secs:null,step_sequence:1},
        {step_id:65,mastery_id:8,sets:5,reps:6,secs:null,step_sequence:2},
        // {step_id:66,mastery_id:8,sets:5,reps:30,secs:null,step_sequence:7},
        // {step_id:67,mastery_id:8,sets:5,reps:30,secs:null,step_sequence:7},
        // {step_id:68,mastery_id:8,sets:5,reps:30,secs:null,step_sequence:7},
        // {step_id:69,mastery_id:8,sets:5,reps:30,secs:null,step_sequence:7},
        // {step_id:70,mastery_id:8,sets:4,reps:30,secs:null,step_sequence:8},
        {step_id:71,mastery_id:8,sets:4,reps:30,secs:null,step_sequence:8},
        {step_id:72,mastery_id:8,sets:5,reps:30,secs:null,step_sequence:9},
        
        //5x60r -- 73 thru 81
        {step_id:73,mastery_id:9,sets:3,reps:12,secs:null,step_sequence:1},
        {step_id:74,mastery_id:9,sets:5,reps:12,secs:null,step_sequence:2},
        {step_id:75,mastery_id:9,sets:3,reps:24,secs:null,step_sequence:3},
        {step_id:76,mastery_id:9,sets:4,reps:24,secs:null,step_sequence:4},
        {step_id:77,mastery_id:9,sets:4,reps:36,secs:null,step_sequence:5},
        {step_id:78,mastery_id:9,sets:5,reps:36,secs:null,step_sequence:6},
        // {step_id:79,mastery_id:9,sets:3,reps:12,secs:null,step_sequence:7},
        // {step_id:80,mastery_id:9,sets:3,reps:12,secs:null,step_sequence:8},
        {step_id:81,mastery_id:9,sets:5,reps:60,secs:null,step_sequence:9},
        
        //5x10s -- 82 thru 90
        // {step_id:82,mastery_id:10,sets:5,reps:null,secs:10,step_sequence:9},
        // {step_id:83,mastery_id:10,sets:5,reps:null,secs:10,step_sequence:9},
        // {step_id:84,mastery_id:10,sets:5,reps:null,secs:10,step_sequence:9},
        // {step_id:85,mastery_id:10,sets:5,reps:null,secs:10,step_sequence:9},
        // {step_id:86,mastery_id:10,sets:5,reps:null,secs:10,step_sequence:9},
        // {step_id:87,mastery_id:10,sets:5,reps:null,secs:10,step_sequence:9},
        // {step_id:88,mastery_id:10,sets:5,reps:null,secs:10,step_sequence:9},
        // {step_id:89,mastery_id:10,sets:5,reps:null,secs:10,step_sequence:9},
        {step_id:90,mastery_id:10,sets:5,reps:null,secs:10,step_sequence:9},
        
        //5x5rx10s -- 91 thru 100
        // {step_id:91,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:92,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:93,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:94,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:95,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:96,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:97,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:98,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:99,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        {step_id:100,mastery_id:11,sets:5,reps:5,secs:10,step_sequence:9},
        
        //5x5rx10s@ -- 101 thru 109
        // {step_id:101,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:102,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:103,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:104,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:104,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:105,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:106,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:107,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        // {step_id:108,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        {step_id:109,mastery_id:12,sets:5,reps:5,secs:10,step_sequence:9},
        
        //5x15s@ -- 110 thru 118
        // {step_id:110,mastery_id:13,sets:5,reps:null,secs:15,step_sequence:9},
        // {step_id:111,mastery_id:13,sets:5,reps:null,secs:15,step_sequence:9},
        // {step_id:112,mastery_id:13,sets:5,reps:null,secs:15,step_sequence:9},
        // {step_id:113,mastery_id:13,sets:5,reps:null,secs:15,step_sequence:9},
        // {step_id:114,mastery_id:13,sets:5,reps:null,secs:15,step_sequence:9},
        // {step_id:115,mastery_id:13,sets:5,reps:null,secs:15,step_sequence:9},
        // {step_id:116,mastery_id:13,sets:5,reps:null,secs:15,step_sequence:9},
        // {step_id:117,mastery_id:13,sets:5,reps:null,secs:15,step_sequence:9},
        {step_id:118,mastery_id:13,sets:5,reps:null,secs:15,step_sequence:9},
        
        //5x30s -- 119 thru 127
        {step_id:119,mastery_id:14,sets:3,reps:null,secs:30,step_sequence:1},
        // {step_id:120,mastery_id:14,sets:5,reps:null,secs:30,step_sequence:1},
        {step_id:121,mastery_id:14,sets:5,reps:null,secs:30,step_sequence:3},
        // {step_id:122,mastery_id:14,sets:5,reps:null,secs:30,step_sequence:1},
        // {step_id:123,mastery_id:14,sets:5,reps:null,secs:30,step_sequence:1},
        // {step_id:124,mastery_id:14,sets:5,reps:null,secs:30,step_sequence:1},
        // {step_id:125,mastery_id:14,sets:5,reps:null,secs:30,step_sequence:1},
        // {step_id:126,mastery_id:14,sets:5,reps:null,secs:30,step_sequence:1},
        {step_id:127,mastery_id:14,sets:5,reps:null,secs:30,step_sequence:9},
        
        //5x30s@ -- 128 thru 136
        // {step_id:128,mastery_id:15,sets:3,reps:null,secs:30,step_sequence:1},
        // {step_id:129,mastery_id:15,sets:3,reps:null,secs:30,step_sequence:1},
        // {step_id:130,mastery_id:15,sets:3,reps:null,secs:30,step_sequence:1},
        // {step_id:131,mastery_id:15,sets:3,reps:null,secs:30,step_sequence:1},
        // {step_id:132,mastery_id:15,sets:3,reps:null,secs:30,step_sequence:1},
        // {step_id:133,mastery_id:15,sets:3,reps:null,secs:30,step_sequence:1},
        // {step_id:134,mastery_id:15,sets:3,reps:null,secs:30,step_sequence:1},
        // {step_id:135,mastery_id:15,sets:3,reps:null,secs:30,step_sequence:1},
        {step_id:136,mastery_id:15,sets:5,reps:null,secs:30,step_sequence:9},
        
        //5x60s -- 137 thru 145
        {step_id:137,mastery_id:16,sets:3,reps:null,secs:12,step_sequence:1},
        {step_id:138,mastery_id:16,sets:5,reps:null,secs:12,step_sequence:2},
        {step_id:139,mastery_id:16,sets:3,reps:null,secs:24,step_sequence:3},
        {step_id:140,mastery_id:16,sets:4,reps:null,secs:24,step_sequence:4},
        {step_id:141,mastery_id:16,sets:4,reps:null,secs:36,step_sequence:5},
        {step_id:142,mastery_id:16,sets:5,reps:null,secs:36,step_sequence:6},
        {step_id:143,mastery_id:16,sets:4,reps:null,secs:48,step_sequence:7},
        {step_id:144,mastery_id:16,sets:4,reps:null,secs:60,step_sequence:8},
        {step_id:145,mastery_id:16,sets:5,reps:null,secs:60,step_sequence:9},
        
        //rope climb is an edge case.
        
        //5x5/2 RC
        //this step for rope climb is 5 sets of 5 reps 2 rope climbs per rep
        {step_id:144,mastery_id:17,sets:5,reps:5,secs:null,step_sequence:9},
        
        //5x5/4 RC
        //this step for rope climb is 5 sets of 5 reps 5 rope climbs per rep
        {step_id:153,mastery_id:18,sets:5,reps:5,secs:null,step_sequence:9},
      ]);
    });
};
