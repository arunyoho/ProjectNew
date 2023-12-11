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



}