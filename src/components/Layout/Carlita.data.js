import smartPlug  from  '../../assets/images/Usecases/carlita/Carlita-ShopProducts-SmartPlug.jpg';
import health  from '../../assets/images/Usecases/carlita/Icon-Carlita-Watch6-OverallHealth-D.png';
import fitness  from '../../assets/images/Usecases/carlita/Icon-Carlita-Watch6-FitnessTracking-D.png';
import sleep  from '../../assets/images/Usecases/carlita/Icon-Carlita-Watch6-SleepCoaching-D.png';
import Connectivity  from '../../assets/images/Usecases/carlita/Icon-Carlita-Watch6-Connectivity-D.png';

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
    healthDescription:[
      'Connects with SmartThings to review your full body composition' ,
      'Check for any irregular heartbeats',
      'Set goals for steps,sleep and more'
    ],
    galaxyDetails : [ 
      {
        title:"A comprehensive look",
        description:['Connects with SmartThings to review your full body composition' ,
      'Check for any irregular heartbeats',
      'Set goals for steps,sleep and more'],
        image: health
      },
      {
        title:"All the fitness stats you want",
        description:["Check total calories burned on connected apps", 
          "Measure your total steps and track distance",
          "View your current heart rate"],
        image: fitness
      },
      {
        title:"See your sleep",
        description:["Get sleep coaching based on your synced helath data", 
          "Learn about sleep quality,duration, and stages",
          "Understand your sleep style to improve overall health"],
        image: sleep
      },
      {
        title:"Get connected",
        description:["Change the channel,volume  and more on your TV", 
          "Adjust volume, set to silent, and control music playback",
          "Receive and send calls,texts and more"],
        image: Connectivity
      }


    ],
    caption: 'A comprehensive look',
  };