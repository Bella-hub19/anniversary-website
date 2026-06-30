const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0702", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our monthsary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my bf so cute?", // Example trending search query
    "Why does Arabella love him more?", // Another example query
    `Arabella's birthdate (coz her bf forgets)`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  monthsaryDate: "2025-07-02", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Palagi", // Title of the song
      artist: "TJ Monterde", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Here With Me",
      artist: "d4vd",
      left: "40%",
      top: "15%",
    },
    {
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      left: "15%",
      top: "40%",
    },
    {
      title: "Mine",
      artist: "Taylor Swift",
      left: "30%",
      top: "75%",
    },
    {
      title: "Saksi Ang Langit",
      artist: "December Avenue",
      left: "5%",
      top: "65%",
    },
    {
      title: "The Only Exception",
      artist: "Paramore",
      left: "25%",
      top: "90%",
    },
    {
      title: "I'll Be",
      artist: "Edwin McCain",
      left: "35%",
      top: "50%",
    },
    {
      title: "Ikaw Lang Patutunguhan",
      artist: "Amiel Sol",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "May 26, 2026", description: "A day I'll never forget. 🎓❤️" }, // Message entry
      { title: "May 28, 2026", description: "Some of my favorite moments are the ones spent with you. ❤️" },
      { title: "April 17, 2026", description: "Distance only makes our bond stronger. ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "May 19, 2025", description: "The days of getting to know each other, now some of my favorite memories..💖" }, // Picture entry
      { title: "May 07, 2025", description: "Second Time We Met💕" },
      { title: "May 18, 2025", description: "Before us, there was this moment. ❤️" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "One year down, \ncountless memories made, \nand a lifetime to go. \n\nThank you for choosing us \nevery single day. \n\nI love you always. ", // Message displayed on the love letter page

  // 🎇 Closing Page
closingMessage: `Looking back at everything we've shared this past year,
I can't help but smile.

Every memory, every laugh,
every late-night call,
and every "I miss you"
became something I'll always treasure.

No matter how many miles separate us,
my heart will always find its way back to you.

Here's to more memories,
more laughter,
and someday...
no more distance.

Happy Anniversary, Je.
I love you always. ❤️`, // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
