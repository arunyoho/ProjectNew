export const dummyData ={
    accordian:[
        {
            id:1,
            title:"What is Learn Management",
            content:"An LMS enables you to create, manage, and deliver eLearning courses the same way word processors (like Microsoft Word) help you write documents and email servers (like Gmail) help you manage your email.",
        },
        {
            id:2,
            title:"How to use  Learn Management",
            content:" Upload courses. To start training, you need to add materials to the LMS. .",
        }
    ],
  
    upcomingExam:[
        {
        id:1,
        title: "Development Exam",
        examType: "Multiple Choice",
        numberOfQuestions: 100,
        highlightMarks: 20,
        time: "9:00 PM",
        duration: {
          hours: 3,
          minutes: 45,
        },
        date: "2023-12-15",
    }

    ],
    completed:[
        {
            id:1,
            coursename:"Web Development",
            timing:"5 hrs",
            status:"completed",
        },
        {
            id:2,
            coursename:"App",
            timing:"3hrs",
            status:"completed",
        }
    ],
    examHistory :[
        { id: '1',
         courseName: 'App Development', 
         timing: '2023-01-01 10:00 AM',
          status: 'Passed' },
        { id: '2',
         courseName: 'Developing',
          timing: '2023-02-15 02:30 PM',
           status: 'Failed' },
        // Add more exam history entries as needed
      ],

       notifications :[
        {
          id: 1,
          date: "Today",
          notifications: [
            {
              id: 1,
              image:
                "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
              title: "App Development Video",
              description: "TextView is a complete text editor, however the basic class is configured to not allow editing.",
            },
            {
              id: 2,
              image:
                "https://cdn.acodez.in/wp-content/uploads/2022/03/What-is-a-mobile-app-feature-image.jpg",
              title: "Mobile Development App",
              description: "futfguohiohiohioyhio",
            },
          ],
        },
        {
          id: 2,
          date: "Yesterday",
          notifications: [
            {
              id: 3,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7j__qoFAcpaJjRO11ONDjm0iGw_gyHFJ37f4EB1iPg&s",
              title: "Yoho Technologies pvt ltd",
              description: "Yoho Technologies is established in 2012 and Incorporated on 2017. We are one of the best software development company in chennai. Offered services range consists of Website Designing, Website Development, E-Commerce Website Development,",
            },
            {
              id: 4,
              image:
                "https://yt3.googleusercontent.com/ytc/AOPolaQXMRuhoZR4c_uOOHoRgRvlJJ2URj9aal1oStuMmWY=s900-c-k-c0x00ffffff-no-rj",
              title: "Kiyeg Pvt Ltd",
              description: "Kiyeg is established in 2012 and Incorporated on 2017. We are one of the best software development company in chennai. Offered services range consists of Website Designing, Website Development, E-Commerce Website Development,",
            },
          ],
        },
      ]


}