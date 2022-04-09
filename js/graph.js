// setup
var data = {
  labels: [
    "Preparatory Class",
    "Engineering School",
    "Advanced Master's Degree",
    "Louis Vuitton",
    "eXcent",
    "Atos",
  ],
  datasets: [
    {
      label: "Career Path",
      // data: [1, 2, 3, 4, 5, 6],
      data: [
        ["2016-09-01", "2018-07-03"], //Done
        ["2018-09-01", "2021-07-03"], //Done
        ["2021-09-06", "2022-11-18"], //Done
        ["2019-08-20", "2020-02-15"], //Done
        ["2021-02-15", "2021-08-05"], //Done
        ["2021-09-06", "2022-11-18"], //Done
      ],
      backgroundColor: [
        "rgba(255, 26, 104, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      barPercentage: 0.4,
    },
  ],
};

const desc = [
  [
    "Preparing a national competition during 2 years in order to join an engineering school in France.",
    "I studied Mathematics and Physics, then passed the entrance exams for a Grande Ecole",
  ],

  [
    "Studying in a general engineering school ENSMM in Besançon (France), majoring in",
    "embedded systems and object-oriented programming",
    "- Majors : General mechanics, Systems dynamics, Electronics, CAD, FEM, Materials, IoT / OOP (STM32 & C++)",
    "- Last year's scientific project : Conception of a laser gate timer for rollerblade races (but also skiing, cycling, athletism, ...)",
    "- Practical courses : Optimization, modeling, machine learning algorithms",
  ],

  [
    "Studying 1 more year in order to get a double master's degree in Machine Learning and Data Science.",
    "This joint Specialized Master® is co-accredited by INP-ENSEEIHT and INSA Toulouse. It is focused on the",
    "processing and valuation of massive data, favoring a multidisciplinary approach in computer science and data sciences and",
    "combining scientific and operational learning through project-based learning and strong involvement of partner companies.",
  ],

  [
    "First internship in Paris Louis Vuitton's head office as a developper.",
    "I created programming tools for the mechanical engineering department :",
    "-	  Developed and diversified metal parts",
    "-   Exchanged in english with international suppliers",
    "-	  Set up Specifications and Good Practices",
    "-	  Established computer tools for developers: PLM and metal parts testing software using Skylims (LabWare)",
  ],

  [
    "Second internship as a mechanical designer in a design office. I also helped develop programs",
    "and tools on machining tools for metallurgy industry : ",
    "- Part of the pre-project team, drawing up offers to answer to a call for tender : ",
    "proposing solutions, illustrated with designs/concepts (CAD). ",
    "- Working in relation with various french and international industrials (such as Dassault, Ariane, AD&S) ",
    "- Working in 'Project Mode' : Taking advantage of my applied mathematics skills in specific cases",
    "(models, 3D transformations, solving systems, ...) ",
    "- Analysis and optimization",
  ],

  [
    "Working as an Embedded Artificial Intelligence Developer , i works on predictive",
    "maintainance of the company's manufacturing process regarding 3D printing",
    " ",
    "Making of artificial intelligence models for industry including :",
    "- Development/modification of instrumentation as needed",
    "- Framing data needs and carrying out experimentation campaigns",
    "- Analysis and structuring of data",
    "- AI models architecture",
    "- Training AI models",
    "- Deployment of models on target",
    "- Operational validation of results",
    "- Documentation and communication",
    " ",
    "Getting involved in Innolab's technological watch around AI subjects by sharing",
    "knowledge of new Frameworks, languages, etc. within the team",
  ],
];

// config
var config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 16,
        },
        displayColors: false,
        callbacks: {
          beforeTitle: function () {
            return "";
          },
          title: function (context) {
            return context[0].label;
          },
          afterTitle: function () {
            return "===============";
          },
          label: function (context) {
            return desc[context.dataIndex];
          },
        },
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        min: "2016-09-01",
        type: "time",
        time: {
          unit: "year",
          stepSize: 1,
        },
        ticks: {
          color: "rgba(150, 150, 150, 1)",
          font: {
            size: 18,
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: [
            "rgba(255, 26, 104, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          font: {
            size: 18,
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
  },
};

// Phone Part

var data2 = {
  labels: ["", "", "", "", "", ""],
  datasets: [
    {
      label: "Career Path",
      data: [
        ["2016-09-01", "2018-07-03"], //Done
        ["2018-09-01", "2021-07-03"], //Done
        ["2021-09-06", "2022-11-18"], //Done
        ["2019-08-20", "2020-02-15"], //Done
        ["2021-02-15", "2021-08-05"], //Done
        ["2021-09-06", "2022-11-18"], //Done
      ],
      backgroundColor: [
        "rgba(255, 26, 104, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      barPercentage: 0.4,
    },
  ],
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);
