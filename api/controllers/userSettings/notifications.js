const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const FormData = require("form-data");
const { toast } = require('../../utils/u_Toasts');



exports.viewAllNotifications = async(req, res) => {

    const notifications = {

        jobOffersInDash:  req.user.jobOffersInDash,
        jobOffersInEmail: req.user.jobOffersInEmail,

        applyJobInDash:   req.user.applyJobInDash,
        applyJobInEmail:  req.user.applyJobInEmail,

        projectInvitationInDash:   req.user.projectInvitationInDash,
        projectInvitationInEmail:  req.user.projectInvitationInEmail,

        appliedJobsStatusInDash:   req.user.appliedJobsStatusInDash,
        appliedJobsStatusInEmail:  req.user.appliedJobsStatusInEmail,

        fieldOfStudyAdsInDash:   req.user.fieldOfStudyAdsInDash,
        fieldOfStudyAdsInEmail:  req.user.fieldOfStudyAdsInEmail,

        resumeViewInDash:   req.user.resumeViewInDash,
        resumeViewInEmail:  req.user.resumeViewInEmail,

        passwordChangeInDash:  req.user.passwordChangeInDash,
        passwordChangeInEmail: req.user.passwordChangeInEmail,

        newConnectionInDash:  req.user.newConnectionInDash,
        newConnectionInEmail: req.user.newConnectionInEmail,

        blogContentInDash:  req.user.blogContentInDash,
        blogContentInEmail: req.user.blogContentInEmail,

        courseSuggestionsInDash:  req.user.courseSuggestionsInDash,
        courseSuggestionsInEmail: req.user.courseSuggestionsInEmail,

        discountsInDash:  req.user.discountsInDash,
        discountsInEmail: req.user.discountsInEmail,

    }

    return res.json({status: 1, notifications})

}

exports.editUserNotifications = async(req, res) => {

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

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
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
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

