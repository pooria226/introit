//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/profile/resume')
const Controller   = require('../../controllers/profile/resume')



// Routes

router.get   ("/profile/resume/view/educations",      protected, needPermit, Validator.viewAllEducations, Controller.viewAllEducations)
router.get   ("/profile/resume/view/education/:id",   protected, needPermit, Validator.viewOneEducation,  Controller.viewOneEducation)
router.post  ("/profile/resume/create/education",     protected, needPermit, Validator.createEducation,   Controller.createEducation)
router.put   ("/profile/resume/edit/education/:id",   protected, needPermit, Validator.editEducation,     Controller.editEducation)
router.delete("/profile/resume/delete/education/:id", protected, needPermit, Validator.deleteEducation,   Controller.deleteEducation)

router.get   ("/profile/resume/view/experiences",      protected, needPermit, Validator.viewAllExperiences, Controller.viewAllExperiences)
router.get   ("/profile/resume/view/experience/:id",   protected, needPermit, Validator.viewOneExperience,  Controller.viewOneExperience)
router.post  ("/profile/resume/create/experience",     protected, needPermit, Validator.createExperience,   Controller.createExperience)
router.put   ("/profile/resume/edit/experience/:id",   protected, needPermit, Validator.editExperience,     Controller.editExperience)
router.delete("/profile/resume/delete/experience/:id", protected, needPermit, Validator.deleteExperience,   Controller.deleteExperience)

router.get   ("/profile/resume/view/skills",      protected, needPermit, Validator.viewAllSkills, Controller.viewAllSkills)
router.get   ("/profile/resume/view/skill/:id",   protected, needPermit, Validator.viewOneSkill,  Controller.viewOneSkill)
router.post  ("/profile/resume/create/skill",     protected, needPermit, Validator.createSkill,   Controller.createSkill)
router.put   ("/profile/resume/edit/skill/:id",   protected, needPermit, Validator.editSkill,     Controller.editSkill)
router.delete("/profile/resume/delete/skill/:id", protected, needPermit, Validator.deleteSkill,   Controller.deleteSkill)

router.get   ("/profile/resume/view/languages",      protected, needPermit, Validator.viewAllLanguages, Controller.viewAllLanguages)
router.get   ("/profile/resume/view/language/:id",   protected, needPermit, Validator.viewOneLanguage,  Controller.viewOneLanguage)
router.post  ("/profile/resume/create/language",     protected, needPermit, Validator.createLanguage,   Controller.createLanguage)
router.put   ("/profile/resume/edit/language/:id",   protected, needPermit, Validator.editLanguage,     Controller.editLanguage)
router.delete("/profile/resume/delete/language/:id", protected, needPermit, Validator.deleteLanguage,   Controller.deleteLanguage)

router.get   ("/profile/resume/view/expertises",      protected, needPermit, Validator.viewAllExpertises, Controller.viewAllExpertises)
router.get   ("/profile/resume/view/expertise/:id",   protected, needPermit, Validator.viewOneExpertise,  Controller.viewOneExpertise)
router.post  ("/profile/resume/create/expertise",     protected, needPermit, Validator.createExpertise,   Controller.createExpertise)
router.put   ("/profile/resume/edit/expertise/:id",   protected, needPermit, Validator.editExpertise,     Controller.editExpertise)
router.delete("/profile/resume/delete/expertise/:id", protected, needPermit, Validator.deleteExpertise,   Controller.deleteExpertise)

router.get   ("/profile/resume/view/portfolios",      protected, needPermit, Validator.viewAllPortfolios, Controller.viewAllPortfolios)
router.get   ("/profile/resume/view/portfolio/:id",   protected, needPermit, Validator.viewOnePortfolio,  Controller.viewOnePortfolio)
router.post  ("/profile/resume/create/portfolio",     protected, needPermit, Validator.createPortfolio,   Controller.createPortfolio)
router.put   ("/profile/resume/edit/portfolio/:id",   protected, needPermit, Validator.editPortfolio,     Controller.editPortfolio)
router.delete("/profile/resume/delete/portfolio/:id", protected, needPermit, Validator.deletePortfolio,   Controller.deletePortfolio)
router.put   ("/profile/resume/edit/portfolio/:id/delimage/:imageId",   protected, needPermit, Validator.delimage,     Controller.delimage)
router.put   ("/profile/resume/edit/portfolio/:id/addimage",   protected, needPermit, Validator.addimage,     Controller.addimage)

router.get   ("/profile/resume/view/extra-activities",     protected, needPermit, Validator.viewAllExtraActivities, Controller.viewAllExtraActivities)
router.get   ("/profile/resume/view/extra-activity/:id",   protected, needPermit, Validator.viewOneExtraActivity,  Controller.viewOneExtraActivity)
router.post  ("/profile/resume/create/extra-activity",     protected, needPermit, Validator.createExtraActivity,   Controller.createExtraActivity)
router.put   ("/profile/resume/edit/extra-activity/:id",   protected, needPermit, Validator.editExtraActivity,     Controller.editExtraActivity)
router.delete("/profile/resume/delete/extra-activity/:id", protected, needPermit, Validator.deleteExtraActivity,   Controller.deleteExtraActivity)

router.get   ("/profile/resume/view/interships",      protected, needPermit, Validator.viewAllInterships, Controller.viewAllInterships)
router.get   ("/profile/resume/view/intership/:id",   protected, needPermit, Validator.viewOneIntership,  Controller.viewOneIntership)
router.post  ("/profile/resume/create/intership",     protected, needPermit, Validator.createIntership,   Controller.createIntership)
router.put   ("/profile/resume/edit/intership/:id",   protected, needPermit, Validator.editIntership,     Controller.editIntership)
router.delete("/profile/resume/delete/intership/:id", protected, needPermit, Validator.deleteIntership,   Controller.deleteIntership)

router.get   ("/profile/resume/view/references",      protected, needPermit, Validator.viewAllReferences, Controller.viewAllReferences)
router.get   ("/profile/resume/view/reference/:id",   protected, needPermit, Validator.viewOneReference,  Controller.viewOneReference)
router.post  ("/profile/resume/create/reference",     protected, needPermit, Validator.createReference,   Controller.createReference)
router.put   ("/profile/resume/edit/reference/:id",   protected, needPermit, Validator.editReference,     Controller.editReference)
router.delete("/profile/resume/delete/reference/:id", protected, needPermit, Validator.deleteReference,   Controller.deleteReference)

router.get   ("/profile/resume/view/awards",       protected, needPermit, Validator.viewAllAwards, Controller.viewAllAwards)
router.get   ("/profile/resume/view/award/:id",    protected, needPermit, Validator.viewOneAward,  Controller.viewOneAward)
router.post  ("/profile/resume/create/award",      protected, needPermit, Validator.createAward,   Controller.createAward)
router.put   ("/profile/resume/edit/award/:id",    protected, needPermit, Validator.editAward,     Controller.editAward)
router.delete("/profile/resume/delete/award/:id",  protected, needPermit, Validator.deleteAward,   Controller.deleteAward)

router.get   ("/profile/resume/view/courses",      protected, needPermit, Validator.viewAllCourses, Controller.viewAllCourses)
router.get   ("/profile/resume/view/course/:id",   protected, needPermit, Validator.viewOneCourse,  Controller.viewOneCourse)
router.post  ("/profile/resume/create/course",     protected, needPermit, Validator.createCourse,   Controller.createCourse)
router.put   ("/profile/resume/edit/course/:id",   protected, needPermit, Validator.editCourse,     Controller.editCourse)
router.delete("/profile/resume/delete/course/:id", protected, needPermit, Validator.deleteCourse,   Controller.deleteCourse)

router.put   ("/profile/resume/edit/hobbies",         protected, needPermit, Controller.editHobbies)
router.put   ("/profile/resume/edit/additional-info", protected, needPermit, Controller.editAdditionalInfo)
router.put   ("/profile/resume/edit/publications",    protected, needPermit, Controller.editPublications)

router.get   ("/profile/resume/view/progress",       protected, needPermit, Controller.viewProgress)
router.get   ("/profile/resume/view/cv/:id",         protected, needPermit, Validator.viewCV, Controller.viewCV)
router.get   ("/profile/resume/view/cv2/:id",         Validator.viewCV, Controller.viewCV)


// Export
module.exports = router