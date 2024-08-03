import smartPlug  from  '../../assets/images/Usecases/carlita/Carlita-ShopProducts-SmartPlug.jpg';
import health  from '../../assets/images/Usecases/carlita/Icon-Carlita-Watch6-OverallHealth-D.png';
import fitness  from '../../assets/images/Usecases/carlita/Icon-Carlita-Watch6-FitnessTracking-D.png';
import sleep  from '../../assets/images/Usecases/carlita/Icon-Carlita-Watch6-SleepCoaching-D.png';
import connectivity  from '../../assets/images/Usecases/carlita/Icon-Carlita-Watch6-Connectivity-D.png';
import watch  from '../../assets/images/Usecases/carlita/Carlita-Modal-Watch6-Frame-D.png';
import smartthings  from '../../assets/images/Usecases/carlita/Icon-Carlita-Zflip-SmartThingsApp-D.png';
import samsungHealth  from '../../assets/images/Usecases/carlita/Icon-Carlita-Zflip-SamsungHealth-D.png';
import smartTrainer  from '../../assets/images/Usecases/carlita/Icon-Carlita-Zflip-AISmartTrainer-D.png';

export const CARLITA_DATA_SAMRTPLUG = {
    image: smartPlug,
    title: 'Phillips Hue Smart Plug',
    description:
      'Make any thrird-party product smart by plugging it into the SmartPlug',
    caption: 'Train Smarter',
  };

  export const CARLITA_DATA_SERO = {
    title: 'The Sero',
    description:[
      'Access curated exercise and mindfulness content.' ,
      'Get feedback on your form and effort with Smart Trainer',
      'Create daily exercise reminders across devices',
      'Invite family and friends to fitness challenges',
    ],
    caption: 'Train Smarter',
    footer: "Check out potrait mode",
  };
  export const CARLITA_DATA_MUSICFRAME = {
    title: 'Music Frame',
    description:[
      'A customizable speaker plays your favorite music while framing your favorite printed photos' ,
      'SpaceFit Sound Pro optimizes the audio for every workout',
    ],
    caption: 'Focus the music,focus your workouts',
  };

  export const CARLITA_DATA_WATCH = {
    title: 'Galaxy Watch6',
    watchImage: watch,
    galaxyDetails : [ 
      {
        title:"A comprehensive look",
        description:['Connects with SmartThings to review your full body composition' ,
      'Check for any irregular heartbeats',
      'Set goals for steps,sleep and more'],
        image: health,
        text: "OverAll helath",
      },
      {
        title:"All the fitness stats you want",
        description:["Check total calories burned on connected apps", 
          "Measure your total steps and track distance",
          "View your current heart rate"],
        image: fitness,
        text:"Fitness tracking",
      },
      {
        title:"See your sleep",
        description:["Get sleep coaching based on your synced helath data", 
          "Learn about sleep quality,duration, and stages",
          "Understand your sleep style to improve overall health"],
        image: sleep,
        text:"Sleep coaching",
      },
      {
        title:"Get connected",
        description:["Change the channel,volume  and more on your TV", 
          "Adjust volume, set to silent, and control music playback",
          "Receive and send calls,texts and more"],
        image: connectivity,
        text: "Connectivity",
      }


    ],
    
  };
  export const CARLITA_DATA_ZFLIP = {
    title: 'Galaxy Z Flip5',
    galaxyZFlipDetails : [ 
      {
        title:"Tap into helath",
        description:'The SmartThings app works with your home so you can achieve your helath goals from anywhere. Click an icon below to learn more.' ,
        image: smartthings,
        text: "SmartThings App"
      },
      {
        title:"Chart and track your progress",
        description:"Check in with Sumsung Health to see your daily steps,calories burned, and other daily health stats",
        image: samsungHealth,
        text: "Samsung Health"
      },
      {
        title:"Achieve perfect form",
        description:"Use your phone as a personal camera to help monitor and improve your form during workouts.",
        image: smartTrainer,
        text: "AI Smart Trainer"
      },
    ],
    
  };