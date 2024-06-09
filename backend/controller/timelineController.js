import { catchAsyncErrors } from "../middlewares/catchAsyncError.js"
import { Timeline } from "../models/timelineSchema.js";
import ErrorHandler from "../middlewares/error.js"

export const postTimeline = catchAsyncErrors(async(req, res, next) => {
    const { title, description, from, to } = req.body;
    const newTimeline = await Timeline.create({
        title,
        description,
        timeline: { from, to },
    });
    res.status(200).json({
        success: true,
        message: "Timeline Added",
        newTimeline,
    });
});
export const deleteTimeline = catchAsyncErrors(async(req, res, next) => {
    const {id} = req.params;
    const timeline = await Timeline.findById(id);
    if(!timeline){
        return next(new ErrorHandler("Timeline not found!", 404))
    }
    await timeline.deleteOne();
    res.status(200).json({
        success: true,
        message: "Timeline Deleted!",
    });
});
export const getAllTimeline = catchAsyncErrors(async(req, res, next) => {
    const timelines = await Timeline.find();
    res.status(200).json({
        success: true,
        timelines,
    });
});