//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/globalSettings/basicInfo')
const Controller   = require('../../controllers/globalSettings/basicInfo')

// Routes
router.get   ("/global-settings/basic-info/view/genders/all",             protected, Validator.viewAllGenders, Controller.viewAllGenders)
router.get   ("/global-settings/basic-info/view/gender/:id",              protected, needPermit, Validator.viewOneGender,  Controller.viewOneGender)
router.post  ("/global-settings/basic-info/create/gender",                protected, needPermit, Validator.createGender,   Controller.createGender)
router.put   ("/global-settings/basic-info/edit/gender/:id",              protected, needPermit, Validator.editGender,     Controller.editGender)
router.delete("/global-settings/basic-info/delete/gender/:id",            protected, needPermit, Validator.deleteGender,   Controller.deleteGender)

router.get   ("/global-settings/basic-info/view/security-questions/all",  protected, Validator.viewAllSecurityQuestions, Controller.viewAllSecurityQuestions)
router.get   ("/global-settings/basic-info/view/security-question/:id",   protected, needPermit, Validator.viewOneSecurityQuestion,  Controller.viewOneSecurityQuestion)
router.post  ("/global-settings/basic-info/create/security-question",     protected, needPermit, Validator.createSecurityQuestion,   Controller.createSecurityQuestion)
router.put   ("/global-settings/basic-info/edit/security-question/:id",   protected, needPermit, Validator.editSecurityQuestion,     Controller.editSecurityQuestion)
router.delete("/global-settings/basic-info/delete/security-question/:id", protected, needPermit, Validator.deleteSecurityQuestion,   Controller.deleteSecurityQuestion)

router.get   ("/global-settings/basic-info/view/academic-levels/all",     protected, Validator.viewAllAcademicLevels,   Controller.viewAllAcademicLevels)
router.get   ("/global-settings/basic-info/view/academic-level/:id",      protected, needPermit, Validator.viewOneAcademicLevel,    Controller.viewOneAcademicLevel)
router.post  ("/global-settings/basic-info/create/academic-level",        protected, needPermit, Validator.createAcademicLevel,     Controller.createAcademicLevel)
router.put   ("/global-settings/basic-info/edit/academic-level/:id",      protected, needPermit, Validator.editAcademicLevel,       Controller.editAcademicLevel)
router.delete("/global-settings/basic-info/delete/academic-level/:id",    protected, needPermit, Validator.deleteAcademicLevel,     Controller.deleteAcademicLevel)

router.get   ("/global-settings/basic-info/view/domination-levels/all",   protected, Validator.viewAllDominationLevels, Controller.viewAllDominationLevels)
router.get   ("/global-settings/basic-info/view/domination-level/:id",    protected, needPermit, Validator.viewOneDominationLevel,  Controller.viewOneDominationLevel)
router.post  ("/global-settings/basic-info/create/domination-level",      protected, needPermit, Validator.createDominationLevel,   Controller.createDominationLevel)
router.put   ("/global-settings/basic-info/edit/domination-level/:id",    protected, needPermit, Validator.editDominationLevel,     Controller.editDominationLevel)
router.delete("/global-settings/basic-info/delete/domination-level/:id",  protected, needPermit, Validator.deleteDominationLevel,   Controller.deleteDominationLevel)

router.get   ("/global-settings/basic-info/view/language-levels/all",     protected, Validator.viewAllLanguageLevels, Controller.viewAllLanguageLevels)
router.get   ("/global-settings/basic-info/view/language-level/:id",      protected, needPermit, Validator.viewOneLanguageLevel,  Controller.viewOneLanguageLevel)
router.post  ("/global-settings/basic-info/create/language-level",        protected, needPermit, Validator.createLanguageLevel,   Controller.createLanguageLevel)
router.put   ("/global-settings/basic-info/edit/language-level/:id",      protected, needPermit, Validator.editLanguageLevel,     Controller.editLanguageLevel)
router.delete("/global-settings/basic-info/delete/language-level/:id",    protected, needPermit, Validator.deleteLanguageLevel,   Controller.deleteLanguageLevel)

router.get   ("/global-settings/basic-info/view/language-certificates/all",  protected, Validator.viewAllLanguageCertificates, Controller.viewAllLanguageCertificates) 
router.get   ("/global-settings/basic-info/view/language-certificate/:id",   protected, needPermit, Validator.viewOneLanguageCertificate,  Controller.viewOneLanguageCertificate)
router.post  ("/global-settings/basic-info/create/language-certificate",     protected, needPermit, Validator.createLanguageCertificate,   Controller.createLanguageCertificate)
router.put   ("/global-settings/basic-info/edit/language-certificate/:id",   protected, needPermit, Validator.editLanguageCertificate,     Controller.editLanguageCertificate)
router.delete("/global-settings/basic-info/delete/language-certificate/:id", protected, needPermit, Validator.deleteLanguageCertificate,   Controller.deleteLanguageCertificate)

router.get   ("/global-settings/basic-info/view/countries/all",          protected, Validator.viewAllCountries,  Controller.viewAllCountries)
router.get   ("/global-settings/basic-info/view/country/:id",            protected, needPermit, Validator.viewOneCountry,    Controller.viewOneCountry)
router.post  ("/global-settings/basic-info/create/country",              protected, needPermit, Validator.createCountry,     Controller.createCountry)
router.put   ("/global-settings/basic-info/edit/country/:id",            protected, needPermit, Validator.editCountry,       Controller.editCountry)
router.delete("/global-settings/basic-info/delete/country/:id",          protected, needPermit, Validator.deleteCountry,     Controller.deleteCountry)

router.get   ("/global-settings/basic-info/view/nationalities/all",      protected, Validator.viewAllNationalities, Controller.viewAllNationalities)
router.get   ("/global-settings/basic-info/view/nationality/:id",        protected, needPermit, Validator.viewOneNationality,   Controller.viewOneNationality)
router.post  ("/global-settings/basic-info/create/nationality",          protected, needPermit, Validator.createNationality,    Controller.createNationality)
router.put   ("/global-settings/basic-info/edit/nationality/:id",        protected, needPermit, Validator.editNationality,      Controller.editNationality)
router.delete("/global-settings/basic-info/delete/nationality/:id",      protected, needPermit, Validator.deleteNationality,    Controller.deleteNationality)

router.get   ("/global-settings/basic-info/view/languages/all",          protected, Validator.viewAllLanguages,  Controller.viewAllLanguages)
router.get   ("/global-settings/basic-info/view/language/:id",           protected, needPermit, Validator.viewOneLanguage,   Controller.viewOneLanguage) 
router.post  ("/global-settings/basic-info/create/language",             protected, needPermit, Validator.createLanguage,    Controller.createLanguage)
router.put   ("/global-settings/basic-info/edit/language/:id",           protected, needPermit, Validator.editLanguage,      Controller.editLanguage)
router.delete("/global-settings/basic-info/delete/language/:id",         protected, needPermit, Validator.deleteLanguage,    Controller.deleteLanguage)

router.get   ("/global-settings/basic-info/view/currencies/all",         protected, Validator.viewAllCurrencies, Controller.viewAllCurrencies)
router.get   ("/global-settings/basic-info/view/currency/:id",           protected, needPermit, Validator.viewOneCurrency,   Controller.viewOneCurrency)
router.post  ("/global-settings/basic-info/create/currency",             protected, needPermit, Validator.createCurrency,    Controller.createCurrency)
router.put   ("/global-settings/basic-info/edit/currency/:id",           protected, needPermit, Validator.editCurrency,      Controller.editCurrency)
router.delete("/global-settings/basic-info/delete/currency/:id",         protected, needPermit, Validator.deleteCurrency,    Controller.deleteCurrency)

router.get   ("/global-settings/basic-info/view/industries/all",         protected, Validator.viewAllIndustries, Controller.viewAllIndustries)
router.get   ("/global-settings/basic-info/view/industry/:id",           protected, needPermit, Validator.viewOneIndustry,   Controller.viewOneIndustry)
router.post  ("/global-settings/basic-info/create/industry",             protected, needPermit, Validator.createIndustry,    Controller.createIndustry)
router.put   ("/global-settings/basic-info/edit/industry/:id",           protected, needPermit, Validator.editIndustry,      Controller.editIndustry)
router.delete("/global-settings/basic-info/delete/industry/:id",         protected, needPermit, Validator.deleteIndustry,    Controller.deleteIndustry)

router.get   ("/global-settings/basic-info/view/driving-licenses/all",   protected, Validator.viewAllDrivingLicenses, Controller.viewAllDrivingLicenses)
router.get   ("/global-settings/basic-info/view/driving-license/:id",    protected, needPermit, Validator.viewOneDrivingLicense,  Controller.viewOneDrivingLicense)
router.post  ("/global-settings/basic-info/create/driving-license",      protected, needPermit, Validator.createDrivingLicense,   Controller.createDrivingLicense)
router.put   ("/global-settings/basic-info/edit/driving-license/:id",    protected, needPermit, Validator.editDrivingLicense,     Controller.editDrivingLicense)
router.delete("/global-settings/basic-info/delete/driving-license/:id",  protected, needPermit, Validator.deleteDrivingLicense,   Controller.deleteDrivingLicense)

router.get   ("/global-settings/basic-info/view/employment-types/all",   protected, Validator.viewAllEmploymentTypes,  Controller.viewAllEmploymentTypes)
router.get   ("/global-settings/basic-info/view/employment-type/:id",    protected, needPermit, Validator.viewOneEmploymentType,   Controller.viewOneEmploymentType)
router.post  ("/global-settings/basic-info/create/employment-type",      protected, needPermit, Validator.createEmploymentType,    Controller.createEmploymentType)
router.put   ("/global-settings/basic-info/edit/employment-type/:id",    protected, needPermit, Validator.editEmploymentType,      Controller.editEmploymentType)
router.delete("/global-settings/basic-info/delete/employment-type/:id",  protected, needPermit, Validator.deleteEmploymentType,    Controller.deleteEmploymentType)

router.get   ("/global-settings/basic-info/view/timezones/all",    protected, Validator.viewAllTimezones,        Controller.viewAllTimezones)
router.get   ("/global-settings/basic-info/view/timezone/:id",     protected, needPermit, Validator.viewOneTimezone,         Controller.viewOneTimezone)
router.post  ("/global-settings/basic-info/create/timezone",       protected, needPermit, Validator.createTimezone,          Controller.createTimezone)
router.put   ("/global-settings/basic-info/edit/timezone/:id",     protected, needPermit, Validator.editTimezone,            Controller.editTimezone)
router.delete("/global-settings/basic-info/delete/timezone/:id",   protected, needPermit, Validator.deleteTimezone,          Controller.deleteTimezone)

router.get   ("/global-settings/basic-info/view/sections/all",     protected, Validator.viewAllSections, Controller.viewAllSections)
router.get   ("/global-settings/basic-info/view/section/:id",      protected, needPermit, Validator.viewOneSection,  Controller.viewOneSection)
router.post  ("/global-settings/basic-info/create/section",        protected, needPermit, Validator.createSection,   Controller.createSection)
router.put   ("/global-settings/basic-info/edit/section/:id",      protected, needPermit, Validator.editSection,     Controller.editSection)
router.delete("/global-settings/basic-info/delete/section/:id",    protected, needPermit, Validator.deleteSection,   Controller.deleteSection)

router.get   ("/global-settings/basic-info/view/labels/:id",       protected, Validator.viewAllLabels,  Controller.viewAllLabels)
router.get   ("/global-settings/basic-info/view/label/:id",        protected, needPermit, Validator.viewOneLabel,   Controller.viewOneLabel)
router.post  ("/global-settings/basic-info/create/label",          protected, needPermit, Validator.createLabel,    Controller.createLabel)
router.put   ("/global-settings/basic-info/edit/label/:id",        protected, needPermit, Validator.editLabel,      Controller.editLabel)
router.delete("/global-settings/basic-info/delete/label/:id",      protected, needPermit, Validator.deleteLabel,    Controller.deleteLabel)

router.get   ("/global-settings/basic-info/view/toasts/all",       protected, Validator.viewAllToasts,  Controller.viewAllToasts)
router.get   ("/global-settings/basic-info/view/toast/:id",        protected, needPermit, Validator.viewOneToast,   Controller.viewOneToast)
router.post  ("/global-settings/basic-info/create/toast",          protected, needPermit, Validator.createToast,    Controller.createToast)
router.put   ("/global-settings/basic-info/edit/toast/:id",        protected, needPermit, Validator.editToast,      Controller.editToast)
router.delete("/global-settings/basic-info/delete/toast/:id",      protected, needPermit, Validator.deleteToast,    Controller.deleteToast)

router.get   ("/global-settings/basic-info/view/salary-period/all",      protected, Validator.viewAllSalaryPeriods, Controller.viewAllSalaryPeriods)
router.get   ("/global-settings/basic-info/view/salary-period/:id",        protected, needPermit, Validator.viewOneSalaryPeriod,   Controller.viewOneSalaryPeriod)
router.post  ("/global-settings/basic-info/create/salary-period",          protected, needPermit, Validator.createSalaryPeriod,    Controller.createSalaryPeriod)
router.put   ("/global-settings/basic-info/edit/salary-period/:id",        protected, needPermit, Validator.editSalaryPeriod,      Controller.editSalaryPeriod)
router.delete("/global-settings/basic-info/delete/salary-period/:id",      protected, needPermit, Validator.deleteSalaryPeriod,    Controller.deleteSalaryPeriod)

// Export
module.exports = router