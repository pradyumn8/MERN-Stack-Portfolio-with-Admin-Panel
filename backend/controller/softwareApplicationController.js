import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { SoftwareApplication } from "../models/softwareApplicationSchema.js";
import { v2 as cloudinary } from "cloudinary";

export const addNewApplication = catchAsyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Software Application Icon/Svg Required!", 400));
    }
    const { svg } = req.files;
    const { name } = req.body;
    if (!name) {
        return next(new ErrorHandler("Software's Name Is Required!", 400));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(
        svg.tempFilePath,
        { folder: "PORTFOLIO_SOFTWARE_APPLICATIONS" }
    );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error(
            "Cloudinary Error:",
            cloudinaryResponse.error || "Unknown Cloudinary Error"
        );
    }

    const softwareApplication = await SoftwareApplication.create({
        name,
        svg: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url
        },
    });
    res.status(200).json({
        success: true,
        message: "New Software Application Added!",
        softwareApplication,
    });
});

export const deleteApplication = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const softwareApplication = await SoftwareApplication.findById(id);  // Corrected here
    if (!softwareApplication) {
        return next(new ErrorHandler("Software Application Not Found!", 404));
    }
    const softwareApplicationSvgId = softwareApplication.svg.public_id;
    await cloudinary.uploader.destroy(softwareApplicationSvgId);
    await softwareApplication.deleteOne();
    res.status(200).json({
        success: true,
        message: "Software Application Deleted!",
    });
});

export const getAllApplication = catchAsyncErrors(async (req, res, next) => {
    const softwareApplications = await SoftwareApplication.find();  // Corrected here
    res.status(200).json({
        success: true,
        softwareApplications,  // Corrected here
    });
});
