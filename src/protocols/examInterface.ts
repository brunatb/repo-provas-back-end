interface SendExam {
    name: string;
    category: string;
    semester: string;
    subject: string;
    teacher: string;
    link: string;
}

interface ExamByTeacher {
    name: string;
    amount: number;
}

interface ExamBySubject {
    subject: string;
    amount: number;
}

interface ExamsBySemesters {
    semester: string;
    exams: ExamBySubject[];
}

export { SendExam, ExamByTeacher, ExamBySubject, ExamsBySemesters };
