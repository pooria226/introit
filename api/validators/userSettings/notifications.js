const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { size } = require("lodash")
const formidable = require("formidable");
const sizeOf = require('image-size')
const {isNumber} = require("../../utils/u_Is")
const {toast} = require("../../utils/u_Toasts")


exports.editUserNotifications = async(req, res, next) => {

    const {
        jobOffersInDash, jobOffersInEmail, 
        applyJobInDash, applyJobInEmail, 
        projectInvitationInDash, projectInvitationInEmail,
        appliedJobsStatusInDash, appliedJobsStatusInEmail,
        fieldOfStudyAdsInDash, fieldOfStudyAdsInEmail,
        resumeViewInDash, resumeViewInEmail,
        passwordChangeInDash, passwordChangeInEmail,
        newConnectionInDash, newConnectionInEmail,
        blogContentInDash, blogContentInEmail,
        courseSuggestionsInDash, courseSuggestionsInEmail,
        discountsInDash, discountsInEmail,
    } = req.body

    if(jobOffersInDash !== true && jobOffersInDash !== false){
        return res.json({status: -1, error: "Enter a valid jobOffersInDash!"})
    }
    if(jobOffersInEmail !== true && jobOffersInEmail !== false){
        return res.json({status: -1, error: "Enter a valid jobOffersInEmail!"})
    }

    if(applyJobInDash !== true && applyJobInDash !== false){
        return res.json({status: -1, error: "Enter a valid applyJobInDash!"})
    }
    if(applyJobInEmail !== true && applyJobInEmail !== false){
        return res.json({status: -1, error: "Enter a valid applyJobInEmail!"})
    }

    if(projectInvitationInDash !== true && projectInvitationInDash !== false){
        return res.json({status: -1, error: "Enter a valid projectInvitationInDash!"})
    }
    if(projectInvitationInEmail !== true && projectInvitationInEmail !== false){
        return res.json({status: -1, error: "Enter a valid projectInvitationInEmail!"})
    }

    if(appliedJobsStatusInDash !== true && appliedJobsStatusInDash !== false){
        return res.json({status: -1, error: "Enter a valid appliedJobsStatusInDash!"})
    }
    if(appliedJobsStatusInEmail !== true && appliedJobsStatusInEmail !== false){
        return res.json({status: -1, error: "Enter a valid appliedJobsStatusInEmail!"})
    }

    if(fieldOfStudyAdsInDash !== true && fieldOfStudyAdsInDash !== false){
        return res.json({status: -1, error: "Enter a valid fieldOfStudyAdsInDash!"})
    }
    if(fieldOfStudyAdsInEmail !== true && fieldOfStudyAdsInEmail !== false){
        return res.json({status: -1, error: "Enter a valid fieldOfStudyAdsInEmail!"})
    }

    if(resumeViewInDash !== true && resumeViewInDash !== false){
        return res.json({status: -1, error: "Enter a valid resumeViewInDash!"})
    }
    if(resumeViewInEmail !== true && resumeViewInEmail !== false){
        return res.json({status: -1, error: "Enter a valid resumeViewInEmail!"})
    }

    if(passwordChangeInDash !== true && passwordChangeInDash !== false){
        return res.json({status: -1, error: "Enter a valid passwordChangeInDash!"})
    }
    if(passwordChangeInEmail !== true && passwordChangeInEmail !== false){
        return res.json({status: -1, error: "Enter a valid passwordChangeInEmail!"})
    }

    if(newConnectionInDash !== true && newConnectionInDash !== false){
        return res.json({status: -1, error: "Enter a valid newConnectionInDash!"})
    }
    if(newConnectionInEmail !== true && newConnectionInEmail !== false){
        return res.json({status: -1, error: "Enter a valid newConnectionInEmail!"})
    }

    if(blogContentInDash !== true && blogContentInDash !== false){
        return res.json({status: -1, error: "Enter a valid blogContentInDash!"})
    }
    if(blogContentInEmail !== true && blogContentInEmail !== false){
        return res.json({status: -1, error: "Enter a valid blogContentInEmail!"})
    }

    if(courseSuggestionsInDash !== true && courseSuggestionsInDash !== false){
        return res.json({status: -1, error: "Enter a valid courseSuggestionsInDash!"})
    }
    if(courseSuggestionsInEmail !== true && courseSuggestionsInEmail !== false){
        return res.json({status: -1, error: "Enter a valid courseSuggestionsInEmail!"})
    }

    if(discountsInDash !== true && discountsInDash !== false){
        return res.json({status: -1, error: "Enter a valid discountsInDash!"})
    }
    if(discountsInEmail !== true && discountsInEmail !== false){
        return res.json({status: -1, error: "Enter a valid discountsInEmail!"})
    }

    next()

}

