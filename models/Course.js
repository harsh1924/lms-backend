import { model, Schema } from "mongoose";

const CourseSchema = new Schema({
    courseTitle: { type: String, required: true },
    courseDescription: { type: String, required: true },
    courseThumbnail: { type: String },
    coursePrice: { type: String },
    courseThumbnail: { type: Number, required: true },
    isPublished: { type: Boolean, default: true },
    discount: { type: Number, default: true, min: 0, max: 100 },
    courseContent: [ChapterSchema],
    courseRatings: [{
        userId: { type: String },
        rating: { type: Number, min: 1, max: 5 }
    }],
    educator: { type: String, ref: 'User', required: true },
    enrolledStudents: [
        { type: String, ref: 'User' }
    ]
}, { timestamps: true, minimize: false });

const ChapterSchema = Schema({
    chapterId: { type: String, required: true },
    chapterOrder: { type: Number, required: true },
    chapterTitle: { type: String, required: true },
    chapterContent: [lectureSchema],
}, { _id: false });

const lectureSchema = Schema({
    lectureId: { type: String, required: true },
    chapterDuration: { type: Number, required: true },
    lectureTitle: { type: String, required: true },
    lectureUrl: { type: String, required: true },
    isPreviewFree: { type: Boolean, required: true },
    lectureOrder: { type: Number, required: true }
}, { _id: false })

const Course = model('Course', CourseSchema);
export default Course;