/*
 Navicat Premium Data Transfer

 Source Server         : data
 Source Server Type    : PostgreSQL
 Source Server Version : 150001 (150001)
 Source Host           : localhost:5432
 Source Catalog        : postgres
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150001 (150001)
 File Encoding         : 65001

 Date: 27/12/2022 15:13:21
*/


-- ----------------------------
-- Type structure for DOMAINS
-- ----------------------------
DROP TYPE IF EXISTS "public"."DOMAINS";
CREATE TYPE "public"."DOMAINS" AS ENUM (
  'app',
  'site',
  'basic'
);
ALTER TYPE "public"."DOMAINS" OWNER TO "postgres";

-- ----------------------------
-- Type structure for NOTIFICATIONS
-- ----------------------------
DROP TYPE IF EXISTS "public"."NOTIFICATIONS";
CREATE TYPE "public"."NOTIFICATIONS" AS ENUM (
  'sms',
  'email',
  'alert',
  'message'
);
ALTER TYPE "public"."NOTIFICATIONS" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for academicLevelsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."academicLevelsTs_id_seq";
CREATE SEQUENCE "public"."academicLevelsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for academicLevels_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."academicLevels_id_seq";
CREATE SEQUENCE "public"."academicLevels_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for actorTypes_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."actorTypes_id_seq";
CREATE SEQUENCE "public"."actorTypes_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for applicationResultsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."applicationResultsTs_id_seq";
CREATE SEQUENCE "public"."applicationResultsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for applicationResults_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."applicationResults_id_seq";
CREATE SEQUENCE "public"."applicationResults_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for applications_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."applications_id_seq";
CREATE SEQUENCE "public"."applications_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for chats_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."chats_id_seq";
CREATE SEQUENCE "public"."chats_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for citiesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."citiesTs_id_seq";
CREATE SEQUENCE "public"."citiesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for cities_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cities_id_seq";
CREATE SEQUENCE "public"."cities_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for companyJobs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."companyJobs_id_seq";
CREATE SEQUENCE "public"."companyJobs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for companyMembers_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."companyMembers_id_seq";
CREATE SEQUENCE "public"."companyMembers_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for companyProjects_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."companyProjects_id_seq";
CREATE SEQUENCE "public"."companyProjects_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for companySocials_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."companySocials_id_seq";
CREATE SEQUENCE "public"."companySocials_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for contactUs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."contactUs_id_seq";
CREATE SEQUENCE "public"."contactUs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for countriesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."countriesTs_id_seq";
CREATE SEQUENCE "public"."countriesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for countries_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."countries_id_seq";
CREATE SEQUENCE "public"."countries_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for currenciesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."currenciesTs_id_seq";
CREATE SEQUENCE "public"."currenciesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for currencies_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."currencies_id_seq";
CREATE SEQUENCE "public"."currencies_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for daysTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."daysTs_id_seq";
CREATE SEQUENCE "public"."daysTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for days_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."days_id_seq";
CREATE SEQUENCE "public"."days_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dominationLevelsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."dominationLevelsTs_id_seq";
CREATE SEQUENCE "public"."dominationLevelsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dominationLevels_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."dominationLevels_id_seq";
CREATE SEQUENCE "public"."dominationLevels_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for drivingLicensesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."drivingLicensesTs_id_seq";
CREATE SEQUENCE "public"."drivingLicensesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for drivingLicenses_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."drivingLicenses_id_seq";
CREATE SEQUENCE "public"."drivingLicenses_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for employmentTypesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."employmentTypesTs_id_seq";
CREATE SEQUENCE "public"."employmentTypesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for employmentTypes_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."employmentTypes_id_seq";
CREATE SEQUENCE "public"."employmentTypes_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for gendersTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."gendersTs_id_seq";
CREATE SEQUENCE "public"."gendersTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for genders_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."genders_id_seq";
CREATE SEQUENCE "public"."genders_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for industriesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."industriesTs_id_seq";
CREATE SEQUENCE "public"."industriesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for industries_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."industries_id_seq";
CREATE SEQUENCE "public"."industries_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for invitations_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."invitations_id_seq";
CREATE SEQUENCE "public"."invitations_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for jobQuestionsCategoriesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."jobQuestionsCategoriesTs_id_seq";
CREATE SEQUENCE "public"."jobQuestionsCategoriesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for jobQuestionsCategories_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."jobQuestionsCategories_id_seq";
CREATE SEQUENCE "public"."jobQuestionsCategories_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for jobQuestions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."jobQuestions_id_seq";
CREATE SEQUENCE "public"."jobQuestions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for jobSkills_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."jobSkills_id_seq";
CREATE SEQUENCE "public"."jobSkills_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for jobStatusTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."jobStatusTs_id_seq";
CREATE SEQUENCE "public"."jobStatusTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for jobStatus_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."jobStatus_id_seq";
CREATE SEQUENCE "public"."jobStatus_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for labelsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."labelsTs_id_seq";
CREATE SEQUENCE "public"."labelsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for labels_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."labels_id_seq";
CREATE SEQUENCE "public"."labels_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for languageCertificatesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."languageCertificatesTs_id_seq";
CREATE SEQUENCE "public"."languageCertificatesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for languageCertificates_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."languageCertificates_id_seq";
CREATE SEQUENCE "public"."languageCertificates_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for languageLevelsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."languageLevelsTs_id_seq";
CREATE SEQUENCE "public"."languageLevelsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for languageLevels_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."languageLevels_id_seq";
CREATE SEQUENCE "public"."languageLevels_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for languagesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."languagesTs_id_seq";
CREATE SEQUENCE "public"."languagesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for languages_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."languages_id_seq";
CREATE SEQUENCE "public"."languages_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for memberClockings_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."memberClockings_id_seq";
CREATE SEQUENCE "public"."memberClockings_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for menusTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."menusTs_id_seq";
CREATE SEQUENCE "public"."menusTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for menus_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."menus_id_seq";
CREATE SEQUENCE "public"."menus_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for modulesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."modulesTs_id_seq";
CREATE SEQUENCE "public"."modulesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for modules_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."modules_id_seq";
CREATE SEQUENCE "public"."modules_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for nationalitiesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."nationalitiesTs_id_seq";
CREATE SEQUENCE "public"."nationalitiesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for nationalities_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."nationalities_id_seq";
CREATE SEQUENCE "public"."nationalities_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for newsLetterSubscribers_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."newsLetterSubscribers_id_seq";
CREATE SEQUENCE "public"."newsLetterSubscribers_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for newsLetters_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."newsLetters_id_seq";
CREATE SEQUENCE "public"."newsLetters_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for notifications_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."notifications_id_seq";
CREATE SEQUENCE "public"."notifications_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for percentage_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."percentage_id_seq";
CREATE SEQUENCE "public"."percentage_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for permissions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."permissions_id_seq";
CREATE SEQUENCE "public"."permissions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for roleLikes_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."roleLikes_id_seq";
CREATE SEQUENCE "public"."roleLikes_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for roleStatus_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."roleStatus_id_seq";
CREATE SEQUENCE "public"."roleStatus_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for roleViews_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."roleViews_id_seq";
CREATE SEQUENCE "public"."roleViews_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for rolesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."rolesTs_id_seq";
CREATE SEQUENCE "public"."rolesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for roles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."roles_id_seq";
CREATE SEQUENCE "public"."roles_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for salaryPeriodsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."salaryPeriodsTs_id_seq";
CREATE SEQUENCE "public"."salaryPeriodsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for salaryPeriods_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."salaryPeriods_id_seq";
CREATE SEQUENCE "public"."salaryPeriods_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sectionsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sectionsTs_id_seq";
CREATE SEQUENCE "public"."sectionsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sections_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sections_id_seq";
CREATE SEQUENCE "public"."sections_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for securityQuestionsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."securityQuestionsTs_id_seq";
CREATE SEQUENCE "public"."securityQuestionsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for securityQuestions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."securityQuestions_id_seq";
CREATE SEQUENCE "public"."securityQuestions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for skillsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."skillsTs_id_seq";
CREATE SEQUENCE "public"."skillsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for skills_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."skills_id_seq";
CREATE SEQUENCE "public"."skills_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for socialsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."socialsTs_id_seq";
CREATE SEQUENCE "public"."socialsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for socials_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."socials_id_seq";
CREATE SEQUENCE "public"."socials_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for statesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."statesTs_id_seq";
CREATE SEQUENCE "public"."statesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for states_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."states_id_seq";
CREATE SEQUENCE "public"."states_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for themesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."themesTs_id_seq";
CREATE SEQUENCE "public"."themesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for themes_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."themes_id_seq";
CREATE SEQUENCE "public"."themes_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for timePeriodsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."timePeriodsTs_id_seq";
CREATE SEQUENCE "public"."timePeriodsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for timePeriods_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."timePeriods_id_seq";
CREATE SEQUENCE "public"."timePeriods_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for timezonesTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."timezonesTs_id_seq";
CREATE SEQUENCE "public"."timezonesTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for timezones_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."timezones_id_seq";
CREATE SEQUENCE "public"."timezones_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for toastsTs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."toastsTs_id_seq";
CREATE SEQUENCE "public"."toastsTs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for toasts_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."toasts_id_seq";
CREATE SEQUENCE "public"."toasts_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for uploads_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."uploads_id_seq";
CREATE SEQUENCE "public"."uploads_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userAwards_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userAwards_id_seq";
CREATE SEQUENCE "public"."userAwards_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userCompanies_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userCompanies_id_seq";
CREATE SEQUENCE "public"."userCompanies_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userCourses_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userCourses_id_seq";
CREATE SEQUENCE "public"."userCourses_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userEducations_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userEducations_id_seq";
CREATE SEQUENCE "public"."userEducations_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userExperiences_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userExperiences_id_seq";
CREATE SEQUENCE "public"."userExperiences_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userExpertises_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userExpertises_id_seq";
CREATE SEQUENCE "public"."userExpertises_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userExtraActivities_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userExtraActivities_id_seq";
CREATE SEQUENCE "public"."userExtraActivities_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userFollowers_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userFollowers_id_seq";
CREATE SEQUENCE "public"."userFollowers_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userInterships_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userInterships_id_seq";
CREATE SEQUENCE "public"."userInterships_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userLanguages_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userLanguages_id_seq";
CREATE SEQUENCE "public"."userLanguages_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userLikes_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userLikes_id_seq";
CREATE SEQUENCE "public"."userLikes_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userPortfolios_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userPortfolios_id_seq";
CREATE SEQUENCE "public"."userPortfolios_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userReferences_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userReferences_id_seq";
CREATE SEQUENCE "public"."userReferences_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userSkills_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userSkills_id_seq";
CREATE SEQUENCE "public"."userSkills_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userSocials_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userSocials_id_seq";
CREATE SEQUENCE "public"."userSocials_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userStatus_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userStatus_id_seq";
CREATE SEQUENCE "public"."userStatus_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for userViews_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."userViews_id_seq";
CREATE SEQUENCE "public"."userViews_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
CREATE SEQUENCE "public"."users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for _prisma_migrations
-- ----------------------------
DROP TABLE IF EXISTS "public"."_prisma_migrations";
CREATE TABLE "public"."_prisma_migrations" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "checksum" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "finished_at" timestamptz(6),
  "migration_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "logs" text COLLATE "pg_catalog"."default",
  "rolled_back_at" timestamptz(6),
  "started_at" timestamptz(6) NOT NULL DEFAULT now(),
  "applied_steps_count" int4 NOT NULL DEFAULT 0
)
;

-- ----------------------------
-- Records of _prisma_migrations
-- ----------------------------
INSERT INTO "public"."_prisma_migrations" VALUES ('fb1ee366-ed00-4d82-9889-4af1811df258', '66545ca81eb6e27f0f6c2932c1ca8e41c5b84afd4f64f3dcab09cfc7763f941e', '2022-12-27 14:31:00.840877+03:30', '20221227110100_init', NULL, NULL, '2022-12-27 14:31:00.344736+03:30', 1);

-- ----------------------------
-- Table structure for academicLevels
-- ----------------------------
DROP TABLE IF EXISTS "public"."academicLevels";
CREATE TABLE "public"."academicLevels" (
  "id" int4 NOT NULL DEFAULT nextval('"academicLevels_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of academicLevels
-- ----------------------------

-- ----------------------------
-- Table structure for academicLevelsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."academicLevelsTs";
CREATE TABLE "public"."academicLevelsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"academicLevelsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of academicLevelsTs
-- ----------------------------

-- ----------------------------
-- Table structure for actorTypes
-- ----------------------------
DROP TABLE IF EXISTS "public"."actorTypes";
CREATE TABLE "public"."actorTypes" (
  "id" int4 NOT NULL DEFAULT nextval('"actorTypes_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of actorTypes
-- ----------------------------

-- ----------------------------
-- Table structure for applicationResults
-- ----------------------------
DROP TABLE IF EXISTS "public"."applicationResults";
CREATE TABLE "public"."applicationResults" (
  "id" int4 NOT NULL DEFAULT nextval('"applicationResults_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of applicationResults
-- ----------------------------

-- ----------------------------
-- Table structure for applicationResultsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."applicationResultsTs";
CREATE TABLE "public"."applicationResultsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"applicationResultsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of applicationResultsTs
-- ----------------------------

-- ----------------------------
-- Table structure for applications
-- ----------------------------
DROP TABLE IF EXISTS "public"."applications";
CREATE TABLE "public"."applications" (
  "id" int4 NOT NULL DEFAULT nextval('applications_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "employerMessage" text COLLATE "pg_catalog"."default",
  "attachmentsIds" int4[],
  "isBookmarked" bool,
  "isMatched" bool,
  "userId" int4,
  "jobId" int4,
  "applicationResultId" int4
)
;

-- ----------------------------
-- Records of applications
-- ----------------------------

-- ----------------------------
-- Table structure for chats
-- ----------------------------
DROP TABLE IF EXISTS "public"."chats";
CREATE TABLE "public"."chats" (
  "id" int4 NOT NULL DEFAULT nextval('chats_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "message" text COLLATE "pg_catalog"."default" NOT NULL,
  "imagesIds" text[] COLLATE "pg_catalog"."default",
  "filesIds" int4[],
  "isDelivered" timestamptz(3),
  "isSeen" timestamptz(3),
  "actorId" int4,
  "userId" int4,
  "companyId" int4,
  "parentId" int4
)
;

-- ----------------------------
-- Records of chats
-- ----------------------------

-- ----------------------------
-- Table structure for cities
-- ----------------------------
DROP TABLE IF EXISTS "public"."cities";
CREATE TABLE "public"."cities" (
  "id" int4 NOT NULL DEFAULT nextval('cities_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "prefix" varchar(255) COLLATE "pg_catalog"."default",
  "bannerId" text COLLATE "pg_catalog"."default",
  "about" text COLLATE "pg_catalog"."default",
  "website" text COLLATE "pg_catalog"."default",
  "coordinates" text[] COLLATE "pg_catalog"."default",
  "stateId" int4
)
;

-- ----------------------------
-- Records of cities
-- ----------------------------
INSERT INTO "public"."cities" VALUES (49, 't', '2022-10-16 08:15:39.876+03:30', '2022-10-16 08:15:39.877+03:30', NULL, NULL, 'rennes', 'Rennes', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."cities" VALUES (50, 't', '2022-11-01 21:40:23.13+03:30', '2022-11-01 21:40:23.131+03:30', NULL, NULL, 'bleicherode', 'Bleicherode', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."cities" VALUES (51, 't', '2022-11-01 21:45:09.939+03:30', '2022-11-01 21:45:09.94+03:30', NULL, NULL, 'tirupati', 'Tirupati', NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for citiesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."citiesTs";
CREATE TABLE "public"."citiesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"citiesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "about" text COLLATE "pg_catalog"."default",
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of citiesTs
-- ----------------------------

-- ----------------------------
-- Table structure for companyJobs
-- ----------------------------
DROP TABLE IF EXISTS "public"."companyJobs";
CREATE TABLE "public"."companyJobs" (
  "id" int4 NOT NULL DEFAULT nextval('"companyJobs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "jobId" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "slug" text COLLATE "pg_catalog"."default",
  "zipCode" text COLLATE "pg_catalog"."default",
  "streetAddress" text COLLATE "pg_catalog"."default",
  "location" text COLLATE "pg_catalog"."default",
  "latitude" float8 DEFAULT 0,
  "longitude" float8 DEFAULT 0,
  "requiredSkillsIds" int4[],
  "minSalary" int4 DEFAULT 0,
  "maxSalary" int4 DEFAULT 0,
  "description" jsonb,
  "responsibilities" text COLLATE "pg_catalog"."default",
  "expirationDate" timestamptz(3),
  "jobBannerId" int4,
  "viewsCounter" int4 DEFAULT 0,
  "searchCounter" int4 DEFAULT 0,
  "isFeatured" bool NOT NULL DEFAULT false,
  "isPrivate" bool NOT NULL DEFAULT false,
  "isClosed" bool NOT NULL DEFAULT false,
  "isPublished" bool NOT NULL DEFAULT false,
  "startImmediately" bool NOT NULL DEFAULT false,
  "mhStartImmediately" bool NOT NULL DEFAULT false,
  "mhAcademicLevel" bool NOT NULL DEFAULT false,
  "minWorkExperience" int4 DEFAULT 0,
  "mhMinWorkExp" bool NOT NULL DEFAULT false,
  "minIndustryExp" int4 DEFAULT 0,
  "mhMinIndustryExp" bool NOT NULL DEFAULT false,
  "mhMinLanguageLevel" bool NOT NULL DEFAULT false,
  "minJobFunctionExp" int4 DEFAULT 0,
  "mhMinJobFunctionExp" bool NOT NULL DEFAULT false,
  "driverLicense" bool DEFAULT false,
  "mhDriverLicense" bool NOT NULL DEFAULT false,
  "companyId" int4 NOT NULL,
  "academicLevelId" int4,
  "languageId" int4,
  "employmentTypeId" int4,
  "salaryTypeId" int4,
  "timezoneId" int4,
  "statusId" int4,
  "industryId" int4,
  "currencyId" int4,
  "drivingLicenseId" int4
)
;

-- ----------------------------
-- Records of companyJobs
-- ----------------------------

-- ----------------------------
-- Table structure for companyMembers
-- ----------------------------
DROP TABLE IF EXISTS "public"."companyMembers";
CREATE TABLE "public"."companyMembers" (
  "id" int4 NOT NULL DEFAULT nextval('"companyMembers_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "rate" int4 NOT NULL DEFAULT 0,
  "overtime" int4 NOT NULL DEFAULT 0,
  "overTimeEntitled" bool NOT NULL DEFAULT false,
  "weekend" int4 NOT NULL DEFAULT 0,
  "weekendEntitled" bool NOT NULL DEFAULT false,
  "bankHolidays" int4 NOT NULL DEFAULT 0,
  "bankHolidaysEntitled" bool NOT NULL DEFAULT false,
  "startDate" date,
  "endDate" date,
  "isIndefinedEndDate" bool NOT NULL DEFAULT false,
  "startHour" int4,
  "endHour" int4,
  "location" text COLLATE "pg_catalog"."default",
  "workingDaysIds" int4[],
  "companyId" int4 NOT NULL,
  "projectId" int4,
  "userId" int4,
  "rateConditionId" int4,
  "overTimeConditionId" int4,
  "weekendConditionId" int4,
  "bankHolidaysConditionId" int4,
  "employmentTypeId" int4
)
;

-- ----------------------------
-- Records of companyMembers
-- ----------------------------

-- ----------------------------
-- Table structure for companyProjects
-- ----------------------------
DROP TABLE IF EXISTS "public"."companyProjects";
CREATE TABLE "public"."companyProjects" (
  "id" int4 NOT NULL DEFAULT nextval('"companyProjects_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "name" text COLLATE "pg_catalog"."default" NOT NULL,
  "companyId" int4
)
;

-- ----------------------------
-- Records of companyProjects
-- ----------------------------

-- ----------------------------
-- Table structure for companySocials
-- ----------------------------
DROP TABLE IF EXISTS "public"."companySocials";
CREATE TABLE "public"."companySocials" (
  "id" int4 NOT NULL DEFAULT nextval('"companySocials_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "username" text COLLATE "pg_catalog"."default" NOT NULL,
  "companyId" int4 NOT NULL,
  "socialId" int4 NOT NULL
)
;

-- ----------------------------
-- Records of companySocials
-- ----------------------------

-- ----------------------------
-- Table structure for contactUs
-- ----------------------------
DROP TABLE IF EXISTS "public"."contactUs";
CREATE TABLE "public"."contactUs" (
  "id" int4 NOT NULL DEFAULT nextval('"contactUs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "firstName" varchar(99) COLLATE "pg_catalog"."default" NOT NULL,
  "lastName" varchar(99) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(99) COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(99) COLLATE "pg_catalog"."default" NOT NULL,
  "message" text COLLATE "pg_catalog"."default" NOT NULL,
  "isSeen" timestamptz(3),
  "isAanswered" timestamptz(3),
  "userId" int4
)
;

-- ----------------------------
-- Records of contactUs
-- ----------------------------

-- ----------------------------
-- Table structure for countries
-- ----------------------------
DROP TABLE IF EXISTS "public"."countries";
CREATE TABLE "public"."countries" (
  "id" int4 NOT NULL DEFAULT nextval('countries_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "code" varchar(255) COLLATE "pg_catalog"."default",
  "prefix" varchar(255) COLLATE "pg_catalog"."default",
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "flagId" text COLLATE "pg_catalog"."default",
  "bannerId" text COLLATE "pg_catalog"."default",
  "about" text COLLATE "pg_catalog"."default",
  "website" text COLLATE "pg_catalog"."default",
  "coordinates" text[] COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of countries
-- ----------------------------
INSERT INTO "public"."countries" VALUES (147, 't', '2022-10-03 20:33:38.881+03:30', '2022-10-03 20:33:38.882+03:30', NULL, NULL, 'MC', '+377', 'monaco', 'Monaco', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (148, 't', '2022-10-03 20:33:38.885+03:30', '2022-10-03 20:33:38.886+03:30', NULL, NULL, 'MN', '+976', 'mongolia', 'Mongolia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (149, 't', '2022-10-03 20:33:38.889+03:30', '2022-10-03 20:33:38.89+03:30', NULL, NULL, 'ME', '', 'montenegro', 'Montenegro', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (150, 't', '2022-10-03 20:33:38.893+03:30', '2022-10-03 20:33:38.893+03:30', NULL, NULL, 'MS', '+1-664', 'montserrat', 'Montserrat', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (151, 't', '2022-10-03 20:33:38.896+03:30', '2022-10-03 20:33:38.897+03:30', NULL, NULL, 'MA', '+212', 'morocco', 'Morocco', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (152, 't', '2022-10-03 20:33:38.9+03:30', '2022-10-03 20:33:38.9+03:30', NULL, NULL, 'MZ', '+258', 'mozambique', 'Mozambique', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (153, 't', '2022-10-03 20:33:38.903+03:30', '2022-10-03 20:33:38.904+03:30', NULL, NULL, 'MM', '+95', 'myanmar', 'Myanmar', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (154, 't', '2022-10-03 20:33:38.907+03:30', '2022-10-03 20:33:38.907+03:30', NULL, NULL, 'NA', '+264', 'namibia', 'Namibia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (155, 't', '2022-10-03 20:33:38.91+03:30', '2022-10-03 20:33:38.911+03:30', NULL, NULL, 'NR', '+674', 'nauru', 'Nauru', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (156, 't', '2022-10-03 20:33:38.914+03:30', '2022-10-03 20:33:38.915+03:30', NULL, NULL, 'NP', '+977', 'nepal', 'Nepal', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (157, 't', '2022-10-03 20:33:38.917+03:30', '2022-10-03 20:33:38.918+03:30', NULL, NULL, 'NL', '+31', 'netherlands', 'Netherlands', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (158, 't', '2022-10-03 20:33:38.921+03:30', '2022-10-03 20:33:38.921+03:30', NULL, NULL, 'NC', '+687', 'new-caledonia', 'New Caledonia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (159, 't', '2022-10-03 20:33:38.925+03:30', '2022-10-03 20:33:38.925+03:30', NULL, NULL, 'NZ', '+64', 'new-zealand', 'New Zealand', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (160, 't', '2022-10-03 20:33:38.929+03:30', '2022-10-03 20:33:38.929+03:30', NULL, NULL, 'NI', '+505', 'nicaragua', 'Nicaragua', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (161, 't', '2022-10-03 20:33:38.933+03:30', '2022-10-03 20:33:38.933+03:30', NULL, NULL, 'NE', '+227', 'niger', 'Niger', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (162, 't', '2022-10-03 20:33:38.937+03:30', '2022-10-03 20:33:38.938+03:30', NULL, NULL, 'NG', '+234', 'nigeria', 'Nigeria', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (163, 't', '2022-10-03 20:33:38.941+03:30', '2022-10-03 20:33:38.941+03:30', NULL, NULL, 'NU', '+683', 'niue', 'Niue', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (164, 't', '2022-10-03 20:33:38.944+03:30', '2022-10-03 20:33:38.945+03:30', NULL, NULL, 'NF', '+672', 'norfolk-island', 'Norfolk Island', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (165, 't', '2022-10-03 20:33:38.948+03:30', '2022-10-03 20:33:38.949+03:30', NULL, NULL, 'MP', '+1-670', 'northern-mariana-islands', 'Northern Mariana Islands', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (166, 't', '2022-10-03 20:33:38.952+03:30', '2022-10-03 20:33:38.953+03:30', NULL, NULL, 'NO', '+47', 'norway', 'Norway', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (167, 't', '2022-10-03 20:33:38.956+03:30', '2022-10-03 20:33:38.957+03:30', NULL, NULL, 'OM', '+968', 'oman', 'Oman', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (168, 't', '2022-10-03 20:33:38.96+03:30', '2022-10-03 20:33:38.96+03:30', NULL, NULL, 'PK', '+92', 'pakistan', 'Pakistan', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (169, 't', '2022-10-03 20:33:38.964+03:30', '2022-10-03 20:33:38.965+03:30', NULL, NULL, 'PW', '+680', 'palau', 'Palau', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (170, 't', '2022-10-03 20:33:38.969+03:30', '2022-10-03 20:33:38.969+03:30', NULL, NULL, 'PS', '', 'palestine-state-of', 'Palestine, State of', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (171, 't', '2022-10-03 20:33:38.973+03:30', '2022-10-03 20:33:38.973+03:30', NULL, NULL, 'PA', '+507', 'panama', 'Panama', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (172, 't', '2022-10-03 20:33:38.976+03:30', '2022-10-03 20:33:38.977+03:30', NULL, NULL, 'PG', '+675', 'papua-new-guinea', 'Papua New Guinea', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (173, 't', '2022-10-03 20:33:38.98+03:30', '2022-10-03 20:33:38.981+03:30', NULL, NULL, 'PY', '+595', 'paraguay', 'Paraguay', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (174, 't', '2022-10-03 20:33:38.983+03:30', '2022-10-03 20:33:38.983+03:30', NULL, NULL, 'PE', '+51', 'peru', 'Peru', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (175, 't', '2022-10-03 20:33:38.986+03:30', '2022-10-03 20:33:38.986+03:30', NULL, NULL, 'PH', '+63', 'philippines', 'Philippines', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (176, 't', '2022-10-03 20:33:38.989+03:30', '2022-10-03 20:33:38.989+03:30', NULL, NULL, 'PN', '', 'pitcairn', 'Pitcairn', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (177, 't', '2022-10-03 20:33:38.992+03:30', '2022-10-03 20:33:38.993+03:30', NULL, NULL, 'PL', '+48', 'poland', 'Poland', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (178, 't', '2022-10-03 20:33:38.996+03:30', '2022-10-03 20:33:38.997+03:30', NULL, NULL, 'PT', '+351', 'portugal', 'Portugal', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (179, 't', '2022-10-03 20:33:39+03:30', '2022-10-03 20:33:39+03:30', NULL, NULL, 'PR', '+1-887', 'puerto-rico', 'Puerto Rico', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (180, 't', '2022-10-03 20:33:39.004+03:30', '2022-10-03 20:33:39.004+03:30', NULL, NULL, 'QA', '+974', 'qatar', 'Qatar', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (181, 't', '2022-10-03 20:33:39.007+03:30', '2022-10-03 20:33:39.008+03:30', NULL, NULL, 'RE', '+262', 'reunion', 'Réunion', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (182, 't', '2022-10-03 20:33:39.011+03:30', '2022-10-03 20:33:39.011+03:30', NULL, NULL, 'RO', '+40', 'romania', 'Romania', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (183, 't', '2022-10-03 20:33:39.014+03:30', '2022-10-03 20:33:39.015+03:30', NULL, NULL, 'RU', '+7', 'russian-federation', 'Russian Federation', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (184, 't', '2022-10-03 20:33:39.018+03:30', '2022-10-03 20:33:39.019+03:30', NULL, NULL, 'RW', '+250', 'rwanda', 'Rwanda', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (185, 't', '2022-10-03 20:33:39.022+03:30', '2022-10-03 20:33:39.022+03:30', NULL, NULL, 'BL', '', 'saint-barthelemy', 'Saint Barthélemy', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (186, 't', '2022-10-03 20:33:39.025+03:30', '2022-10-03 20:33:39.026+03:30', NULL, NULL, 'SH', '+290', 'saint-helena-ascension-and-tristan-da-cunha', 'Saint Helena, Ascension and Tristan da Cunha', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (187, 't', '2022-10-03 20:33:39.029+03:30', '2022-10-03 20:33:39.029+03:30', NULL, NULL, 'KN', '+1-869', 'saint-kitts-and-nevis', 'Saint Kitts and Nevis', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (188, 't', '2022-10-03 20:33:39.033+03:30', '2022-10-03 20:33:39.033+03:30', NULL, NULL, 'LC', '+1-758', 'saint-lucia', 'Saint Lucia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (189, 't', '2022-10-03 20:33:39.036+03:30', '2022-10-03 20:33:39.037+03:30', NULL, NULL, 'MF', '+508', 'saint-martin-(french-part)', 'Saint Martin (French part)', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (190, 't', '2022-10-03 20:33:39.041+03:30', '2022-10-03 20:33:39.041+03:30', NULL, NULL, 'PM', '', 'saint-pierre-and-miquelon', 'Saint Pierre and Miquelon', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (191, 't', '2022-10-03 20:33:39.045+03:30', '2022-10-03 20:33:39.046+03:30', NULL, NULL, 'VC', '+1-784', 'saint-vincent-and-the-grenadines', 'Saint Vincent and the Grenadines', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (192, 't', '2022-10-03 20:33:39.049+03:30', '2022-10-03 20:33:39.05+03:30', NULL, NULL, 'WS', '', 'samoa', 'Samoa', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (193, 't', '2022-10-03 20:33:39.053+03:30', '2022-10-03 20:33:39.053+03:30', NULL, NULL, 'SM', '+378', 'san-marino', 'San Marino', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (194, 't', '2022-10-03 20:33:39.056+03:30', '2022-10-03 20:33:39.057+03:30', NULL, NULL, 'ST', '+239', 'sao-tome-and-principe', 'Sao Tome and Principe', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (195, 't', '2022-10-03 20:33:39.06+03:30', '2022-10-03 20:33:39.061+03:30', NULL, NULL, 'SA', '+966', 'saudi-arabia', 'Saudi Arabia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (196, 't', '2022-10-03 20:33:39.064+03:30', '2022-10-03 20:33:39.065+03:30', NULL, NULL, 'SN', '+221', 'senegal', 'Senegal', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (197, 't', '2022-10-03 20:33:39.068+03:30', '2022-10-03 20:33:39.069+03:30', NULL, NULL, 'RS', '+381', 'serbia', 'Serbia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (198, 't', '2022-10-03 20:33:39.072+03:30', '2022-10-03 20:33:39.073+03:30', NULL, NULL, 'SC', '+248', 'seychelles', 'Seychelles', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (199, 't', '2022-10-03 20:33:39.076+03:30', '2022-10-03 20:33:39.077+03:30', NULL, NULL, 'SL', '+232', 'sierra-leone', 'Sierra Leone', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (200, 't', '2022-10-03 20:33:39.08+03:30', '2022-10-03 20:33:39.081+03:30', NULL, NULL, 'SG', '+65', 'singapore', 'Singapore', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (201, 't', '2022-10-03 20:33:39.085+03:30', '2022-10-03 20:33:39.086+03:30', NULL, NULL, 'SX', '', 'sint-maarten-(dutch-part)', 'Sint Maarten (Dutch part)', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (202, 't', '2022-10-03 20:33:39.09+03:30', '2022-10-03 20:33:39.09+03:30', NULL, NULL, 'SK', '+421', 'slovakia', 'Slovakia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (203, 't', '2022-10-03 20:33:39.094+03:30', '2022-10-03 20:33:39.095+03:30', NULL, NULL, 'SI', '+386', 'slovenia', 'Slovenia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (204, 't', '2022-10-03 20:33:39.098+03:30', '2022-10-03 20:33:39.099+03:30', NULL, NULL, 'SB', '+677', 'solomon-islands', 'Solomon Islands', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (205, 't', '2022-10-03 20:33:39.103+03:30', '2022-10-03 20:33:39.104+03:30', NULL, NULL, 'SO', '+252', 'somalia', 'Somalia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (206, 't', '2022-10-03 20:33:39.107+03:30', '2022-10-03 20:33:39.108+03:30', NULL, NULL, 'ZA', '+27', 'south-africa', 'South Africa', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (207, 't', '2022-10-03 20:33:39.112+03:30', '2022-10-03 20:33:39.113+03:30', NULL, NULL, 'GS', '', 'south-georgia-and-the-south-sandwich-islands', 'South Georgia and the South Sandwich Islands', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (208, 't', '2022-10-03 20:33:39.116+03:30', '2022-10-03 20:33:39.116+03:30', NULL, NULL, 'SS', '', 'south-sudan', 'South Sudan', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (209, 't', '2022-10-03 20:33:39.119+03:30', '2022-10-03 20:33:39.12+03:30', NULL, NULL, 'ES', '+34', 'spain', 'Spain', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (210, 't', '2022-10-03 20:33:39.124+03:30', '2022-10-03 20:33:39.124+03:30', NULL, NULL, 'LK', '+94', 'sri-lanka', 'Sri Lanka', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (211, 't', '2022-10-03 20:33:39.127+03:30', '2022-10-03 20:33:39.128+03:30', NULL, NULL, 'SD', '+249', 'sudan', 'Sudan', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (212, 't', '2022-10-03 20:33:39.132+03:30', '2022-10-03 20:33:39.133+03:30', NULL, NULL, 'SR', '+597', 'suriname', 'Suriname', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (213, 't', '2022-10-03 20:33:39.136+03:30', '2022-10-03 20:33:39.137+03:30', NULL, NULL, 'SJ', '', 'svalbard-and-jan-mayen', 'Svalbard and Jan Mayen', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (214, 't', '2022-10-03 20:33:39.141+03:30', '2022-10-03 20:33:39.141+03:30', NULL, NULL, 'SZ', '+268', 'swaziland', 'Swaziland', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (215, 't', '2022-10-03 20:33:39.145+03:30', '2022-10-03 20:33:39.145+03:30', NULL, NULL, 'SE', '+46', 'sweden', 'Sweden', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (216, 't', '2022-10-03 20:33:39.149+03:30', '2022-10-03 20:33:39.149+03:30', NULL, NULL, 'CH', '+41', 'switzerland', 'Switzerland', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (217, 't', '2022-10-03 20:33:39.153+03:30', '2022-10-03 20:33:39.153+03:30', NULL, NULL, 'SY', '+963', 'syrian-arab-republic', 'Syrian Arab Republic', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (218, 't', '2022-10-03 20:33:39.157+03:30', '2022-10-03 20:33:39.158+03:30', NULL, NULL, 'TW', '+886', 'taiwan-province-of-china', 'Taiwan, Province of China', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (219, 't', '2022-10-03 20:33:39.161+03:30', '2022-10-03 20:33:39.162+03:30', NULL, NULL, 'TJ', '+992', 'tajikistan', 'Tajikistan', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (220, 't', '2022-10-03 20:33:39.166+03:30', '2022-10-03 20:33:39.167+03:30', NULL, NULL, 'TZ', '+255', 'tanzania-united-republic-of', 'Tanzania, United Republic of', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (221, 't', '2022-10-03 20:33:39.171+03:30', '2022-10-03 20:33:39.172+03:30', NULL, NULL, 'TH', '+66', 'thailand', 'Thailand', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (222, 't', '2022-10-03 20:33:39.175+03:30', '2022-10-03 20:33:39.176+03:30', NULL, NULL, 'TL', '', 'timor-leste', 'Timor-Leste', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (223, 't', '2022-10-03 20:33:39.179+03:30', '2022-10-03 20:33:39.18+03:30', NULL, NULL, 'TG', '+228', 'togo', 'Togo', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (224, 't', '2022-10-03 20:33:39.183+03:30', '2022-10-03 20:33:39.184+03:30', NULL, NULL, 'TK', '+690', 'tokelau', 'Tokelau', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (225, 't', '2022-10-03 20:33:39.187+03:30', '2022-10-03 20:33:39.188+03:30', NULL, NULL, 'TO', '', 'tonga', 'Tonga', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (226, 't', '2022-10-03 20:33:39.191+03:30', '2022-10-03 20:33:39.191+03:30', NULL, NULL, 'TT', '+1-868', 'trinidad-and-tobago', 'Trinidad and Tobago', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (227, 't', '2022-10-03 20:33:39.195+03:30', '2022-10-03 20:33:39.195+03:30', NULL, NULL, 'TN', '+216', 'tunisia', 'Tunisia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (228, 't', '2022-10-03 20:33:39.198+03:30', '2022-10-03 20:33:39.199+03:30', NULL, NULL, 'TR', '+90', 'turkey', 'Turkey', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (229, 't', '2022-10-03 20:33:39.202+03:30', '2022-10-03 20:33:39.203+03:30', NULL, NULL, 'TM', '+993', 'turkmenistan', 'Turkmenistan', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (230, 't', '2022-10-03 20:33:39.206+03:30', '2022-10-03 20:33:39.207+03:30', NULL, NULL, 'TC', '+1-649', 'turks-and-caicos-islands', 'Turks and Caicos Islands', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (231, 't', '2022-10-03 20:33:39.21+03:30', '2022-10-03 20:33:39.21+03:30', NULL, NULL, 'TV', '+688', 'tuvalu', 'Tuvalu', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (232, 't', '2022-10-03 20:33:39.214+03:30', '2022-10-03 20:33:39.214+03:30', NULL, NULL, 'UG', '+256', 'uganda', 'Uganda', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (233, 't', '2022-10-03 20:33:39.218+03:30', '2022-10-03 20:33:39.219+03:30', NULL, NULL, 'UA', '+380', 'ukraine', 'Ukraine', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (234, 't', '2022-10-03 20:33:39.223+03:30', '2022-10-03 20:33:39.224+03:30', NULL, NULL, 'AE', '+971', 'united-arab-emirates', 'United Arab Emirates', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (235, 't', '2022-10-03 20:33:39.228+03:30', '2022-10-03 20:33:39.228+03:30', NULL, NULL, 'GB', '+44', 'united-kingdom', 'United Kingdom', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (236, 't', '2022-10-03 20:33:39.232+03:30', '2022-10-03 20:33:39.233+03:30', NULL, NULL, 'US', '+1', 'united-states', 'United States', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (237, 't', '2022-10-03 20:33:39.237+03:30', '2022-10-03 20:33:39.237+03:30', NULL, NULL, 'UM', '', 'united-states-minor-outlying-islands', 'United States Minor Outlying Islands', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (238, 't', '2022-10-03 20:33:39.241+03:30', '2022-10-03 20:33:39.242+03:30', NULL, NULL, 'UY', '+598', 'uruguay', 'Uruguay', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (239, 't', '2022-10-03 20:33:39.245+03:30', '2022-10-03 20:33:39.246+03:30', NULL, NULL, 'UZ', '+998', 'uzbekistan', 'Uzbekistan', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (240, 't', '2022-10-03 20:33:39.249+03:30', '2022-10-03 20:33:39.25+03:30', NULL, NULL, 'VU', '+678', 'vanuatu', 'Vanuatu', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (241, 't', '2022-10-03 20:33:39.253+03:30', '2022-10-03 20:33:39.254+03:30', NULL, NULL, 'VE', '+58', 'venezuela-bolivarian-republic-of', 'Venezuela, Bolivarian Republic of', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (242, 't', '2022-10-03 20:33:39.258+03:30', '2022-10-03 20:33:39.258+03:30', NULL, NULL, 'VN', '+84', 'viet-nam', 'Viet Nam', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (243, 't', '2022-10-03 20:33:39.262+03:30', '2022-10-03 20:33:39.263+03:30', NULL, NULL, 'VG', '', 'virgin-islands-british', 'Virgin Islands, British', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (244, 't', '2022-10-03 20:33:39.266+03:30', '2022-10-03 20:33:39.267+03:30', NULL, NULL, 'VI', '', 'virgin-islands-u.s.', 'Virgin Islands, U.S.', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (245, 't', '2022-10-03 20:33:39.27+03:30', '2022-10-03 20:33:39.271+03:30', NULL, NULL, 'WF', '', 'wallis-and-futuna', 'Wallis and Futuna', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (246, 't', '2022-10-03 20:33:39.275+03:30', '2022-10-03 20:33:39.275+03:30', NULL, NULL, 'EH', '', 'western-sahara', 'Western Sahara', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (247, 't', '2022-10-03 20:33:39.279+03:30', '2022-10-03 20:33:39.28+03:30', NULL, NULL, 'YE', '+998', 'yemen', 'Yemen', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (248, 't', '2022-10-03 20:33:39.283+03:30', '2022-10-03 20:33:39.284+03:30', NULL, NULL, 'ZM', '+260', 'zambia', 'Zambia', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);
INSERT INTO "public"."countries" VALUES (249, 't', '2022-10-03 20:33:39.287+03:30', '2022-10-03 20:33:39.288+03:30', NULL, NULL, 'ZW', '+263', 'zimbabwe', 'Zimbabwe', '2f02423d-3b94-40db-29f1-e786a2fb5000', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for countriesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."countriesTs";
CREATE TABLE "public"."countriesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"countriesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "about" text COLLATE "pg_catalog"."default",
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of countriesTs
-- ----------------------------

-- ----------------------------
-- Table structure for currencies
-- ----------------------------
DROP TABLE IF EXISTS "public"."currencies";
CREATE TABLE "public"."currencies" (
  "id" int4 NOT NULL DEFAULT nextval('currencies_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "code" varchar(255) COLLATE "pg_catalog"."default",
  "symbol" varchar(255) COLLATE "pg_catalog"."default",
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of currencies
-- ----------------------------
INSERT INTO "public"."currencies" VALUES (86, 't', '2022-10-03 20:33:39.562+03:30', '2022-10-03 20:33:39.563+03:30', NULL, NULL, 'RSD', 'дин', 'serbian-dinar', 'Serbian dinar');
INSERT INTO "public"."currencies" VALUES (87, 't', '2022-10-03 20:33:39.565+03:30', '2022-10-03 20:33:39.566+03:30', NULL, NULL, 'MMK', 'K', 'kyat', 'Kyat');
INSERT INTO "public"."currencies" VALUES (88, 't', '2022-10-03 20:33:39.568+03:30', '2022-10-03 20:33:39.569+03:30', NULL, NULL, 'NPR', 'Rs, रू', 'nepalese-rupee', 'Nepalese rupee');
INSERT INTO "public"."currencies" VALUES (89, 't', '2022-10-03 20:33:39.571+03:30', '2022-10-03 20:33:39.572+03:30', NULL, NULL, 'NZD', '$', 'new-zealand-dollar', 'New Zealand dollar');
INSERT INTO "public"."currencies" VALUES (90, 't', '2022-10-03 20:33:39.575+03:30', '2022-10-03 20:33:39.576+03:30', NULL, NULL, 'PKR', '₨', 'pakistani-rupee', 'Pakistani rupee');
INSERT INTO "public"."currencies" VALUES (91, 't', '2022-10-03 20:33:39.579+03:30', '2022-10-03 20:33:39.58+03:30', NULL, NULL, 'PEN', '', 'sol', 'Sol');
INSERT INTO "public"."currencies" VALUES (92, 't', '2022-10-03 20:33:39.583+03:30', '2022-10-03 20:33:39.583+03:30', NULL, NULL, 'PHP', '₱', 'philippine-peso', 'Philippine peso');
INSERT INTO "public"."currencies" VALUES (93, 't', '2022-10-03 20:33:39.586+03:30', '2022-10-03 20:33:39.587+03:30', NULL, NULL, 'RUB', '₽', 'russian-ruble', 'Russian ruble');
INSERT INTO "public"."currencies" VALUES (94, 't', '2022-10-03 20:33:39.59+03:30', '2022-10-03 20:33:39.59+03:30', NULL, NULL, 'SHP', '£', 'saint-helena-pound', 'Saint Helena pound');
INSERT INTO "public"."currencies" VALUES (95, 't', '2022-10-03 20:33:39.593+03:30', '2022-10-03 20:33:39.594+03:30', NULL, NULL, 'WST', 'WS$b', 'tala', 'Tālā');
INSERT INTO "public"."currencies" VALUES (96, 't', '2022-10-03 20:33:39.596+03:30', '2022-10-03 20:33:39.597+03:30', NULL, NULL, 'SAR', 'SR', 'saudi-riyal', 'Saudi Riyal');
INSERT INTO "public"."currencies" VALUES (97, 't', '2022-10-03 20:33:39.6+03:30', '2022-10-03 20:33:39.6+03:30', NULL, NULL, 'SGD', 'S$', 'singapore-dollar', 'Singapore dollar');
INSERT INTO "public"."currencies" VALUES (98, 't', '2022-10-03 20:33:39.603+03:30', '2022-10-03 20:33:39.604+03:30', NULL, NULL, 'LKR', 'Rs', 'sri-lankan-rupee', 'Sri Lankan rupee');
INSERT INTO "public"."currencies" VALUES (99, 't', '2022-10-03 20:33:39.607+03:30', '2022-10-03 20:33:39.607+03:30', NULL, NULL, 'TWD', 'NT$', 'new-taiwan-dollar', 'New Taiwan dollar');
INSERT INTO "public"."currencies" VALUES (100, 't', '2022-10-03 20:33:39.61+03:30', '2022-10-03 20:33:39.611+03:30', NULL, NULL, 'THB', '฿', 'baht', 'Baht');
INSERT INTO "public"."currencies" VALUES (101, 't', '2022-10-03 20:33:39.613+03:30', '2022-10-03 20:33:39.614+03:30', NULL, NULL, 'TRY', '₺', 'turkish-lira', 'Turkish lira');
INSERT INTO "public"."currencies" VALUES (102, 't', '2022-10-03 20:33:39.617+03:30', '2022-10-03 20:33:39.617+03:30', NULL, NULL, 'UAH', '₴', 'hryvnia', 'Hryvnia');
INSERT INTO "public"."currencies" VALUES (103, 't', '2022-10-03 20:33:39.62+03:30', '2022-10-03 20:33:39.621+03:30', NULL, NULL, 'GBP', 'f', 'pound-sterling', 'Pound sterling');
INSERT INTO "public"."currencies" VALUES (104, 't', '2022-10-03 20:33:39.625+03:30', '2022-10-03 20:33:39.625+03:30', NULL, NULL, 'VND', '₫', 'djong', 'đồng');
INSERT INTO "public"."currencies" VALUES (105, 't', '2022-10-03 20:33:39.628+03:30', '2022-10-03 20:33:39.629+03:30', NULL, NULL, 'EUR', '€', 'euro', 'Euro');
INSERT INTO "public"."currencies" VALUES (106, 't', '2022-10-03 20:33:39.633+03:30', '2022-10-03 20:33:39.633+03:30', NULL, NULL, 'DZD', 'دج ', 'algerian-dinar', 'Algerian dinar');
INSERT INTO "public"."currencies" VALUES (107, 't', '2022-10-03 20:33:39.637+03:30', '2022-10-03 20:33:39.637+03:30', NULL, NULL, 'BHD', 'د.ب', 'bahraini-dinar', 'Bahraini dinar');
INSERT INTO "public"."currencies" VALUES (108, 't', '2022-10-03 20:33:39.64+03:30', '2022-10-03 20:33:39.641+03:30', NULL, NULL, 'IRR', 'ریال', 'iranian-rial', 'Iranian Rial');
INSERT INTO "public"."currencies" VALUES (109, 't', '2022-10-03 20:33:39.644+03:30', '2022-10-03 20:33:39.645+03:30', NULL, NULL, 'BTN', 'Nu.', 'bhutanese-ngultrum', 'Bhutanese Ngultrum');
INSERT INTO "public"."currencies" VALUES (110, 't', '2022-10-03 20:33:39.647+03:30', '2022-10-03 20:33:39.648+03:30', NULL, NULL, 'BAM', 'KM', 'convertible-mark', 'Convertible mark');
INSERT INTO "public"."currencies" VALUES (111, 't', '2022-10-03 20:33:39.651+03:30', '2022-10-03 20:33:39.651+03:30', NULL, NULL, 'BIF', 'FBu', 'burundian-franc', 'Burundian franc');
INSERT INTO "public"."currencies" VALUES (112, 't', '2022-10-03 20:33:39.654+03:30', '2022-10-03 20:33:39.655+03:30', NULL, NULL, 'COP', '', 'colombian-peso', 'Colombian peso');
INSERT INTO "public"."currencies" VALUES (113, 't', '2022-10-03 20:33:39.658+03:30', '2022-10-03 20:33:39.658+03:30', NULL, NULL, 'ANG', 'NAƒ', 'netherlands-antillean-guilder', 'Netherlands Antillean guilder');
INSERT INTO "public"."currencies" VALUES (114, 't', '2022-10-03 20:33:39.661+03:30', '2022-10-03 20:33:39.662+03:30', NULL, NULL, 'FOK', 'kr', 'faroese-krona', 'Faroese króna');
INSERT INTO "public"."currencies" VALUES (115, 't', '2022-10-03 20:33:39.665+03:30', '2022-10-03 20:33:39.665+03:30', NULL, NULL, 'GBP', '£', 'guernsey-pound-sterling', 'Guernsey pound sterling');
INSERT INTO "public"."currencies" VALUES (116, 't', '2022-10-03 20:33:39.668+03:30', '2022-10-03 20:33:39.669+03:30', NULL, NULL, 'ISK', 'kr', 'icelandic-krona', 'Icelandic króna');
INSERT INTO "public"."currencies" VALUES (117, 't', '2022-10-03 20:33:39.672+03:30', '2022-10-03 20:33:39.672+03:30', NULL, NULL, 'ZAR', 'R', 'south-african-rand', 'South African rand');
INSERT INTO "public"."currencies" VALUES (118, 't', '2022-10-03 20:33:39.675+03:30', '2022-10-03 20:33:39.676+03:30', NULL, NULL, 'MKD', 'ден', 'macedonian-denar', 'Macedonian denar');
INSERT INTO "public"."currencies" VALUES (119, 't', '2022-10-03 20:33:39.679+03:30', '2022-10-03 20:33:39.679+03:30', NULL, NULL, 'MXN', 'MX$', 'mexican-peso', 'Mexican peso');
INSERT INTO "public"."currencies" VALUES (120, 't', '2022-10-03 20:33:39.682+03:30', '2022-10-03 20:33:39.683+03:30', NULL, NULL, 'MDL', 'L', 'moldovan-leu', 'Moldovan leu');
INSERT INTO "public"."currencies" VALUES (121, 't', '2022-10-03 20:33:39.686+03:30', '2022-10-03 20:33:39.686+03:30', NULL, NULL, 'MNT', '₮', 'togrog', 'Tögrög');
INSERT INTO "public"."currencies" VALUES (122, 't', '2022-10-03 20:33:39.689+03:30', '2022-10-03 20:33:39.69+03:30', NULL, NULL, 'MAD', 'DH', 'moroccan-dirham', 'Moroccan dirham');
INSERT INTO "public"."currencies" VALUES (123, 't', '2022-10-03 20:33:39.692+03:30', '2022-10-03 20:33:39.693+03:30', NULL, NULL, 'MZN', 'MT', 'metical', 'Metical');
INSERT INTO "public"."currencies" VALUES (124, 't', '2022-10-03 20:33:39.695+03:30', '2022-10-03 20:33:39.696+03:30', NULL, NULL, 'NAD', 'N$', 'namibian-dollar', 'Namibian dollar');
INSERT INTO "public"."currencies" VALUES (125, 't', '2022-10-03 20:33:39.698+03:30', '2022-10-03 20:33:39.698+03:30', NULL, NULL, 'ZWL', '', 'zimbabwean-dollar', 'Zimbabwean dollar');
INSERT INTO "public"."currencies" VALUES (126, 't', '2022-10-03 20:33:39.701+03:30', '2022-10-03 20:33:39.701+03:30', NULL, NULL, 'ZMW', 'ZK', 'zambian-kwacha', 'Zambian kwacha');
INSERT INTO "public"."currencies" VALUES (127, 't', '2022-10-03 20:33:39.704+03:30', '2022-10-03 20:33:39.705+03:30', NULL, NULL, 'YER', 'ر.ي', 'yemeni-rial', 'Yemeni rial');
INSERT INTO "public"."currencies" VALUES (128, 't', '2022-10-03 20:33:39.708+03:30', '2022-10-03 20:33:39.708+03:30', NULL, NULL, 'VED', 'Bs.', 'bolivar-digital', 'Bolívar digital');
INSERT INTO "public"."currencies" VALUES (129, 't', '2022-10-03 20:33:39.711+03:30', '2022-10-03 20:33:39.712+03:30', NULL, NULL, 'VUV', 'VT', 'vatu', 'Vatu');
INSERT INTO "public"."currencies" VALUES (130, 't', '2022-10-03 20:33:39.715+03:30', '2022-10-03 20:33:39.715+03:30', NULL, NULL, 'UZM', 'сум', 'uzbek-som', 'Uzbek som');
INSERT INTO "public"."currencies" VALUES (131, 't', '2022-10-03 20:33:39.718+03:30', '2022-10-03 20:33:39.719+03:30', NULL, NULL, 'AED', 'د.إ', 'uae-dirham', 'UAE dirham');
INSERT INTO "public"."currencies" VALUES (132, 't', '2022-10-03 20:33:39.721+03:30', '2022-10-03 20:33:39.722+03:30', NULL, NULL, 'UGX', 'USh', 'ugandan-shilling', 'Ugandan shilling');
INSERT INTO "public"."currencies" VALUES (133, 't', '2022-10-03 20:33:39.725+03:30', '2022-10-03 20:33:39.725+03:30', NULL, NULL, 'TND', 'د.ت', 'tunisian-dinar', 'Tunisian dinar');
INSERT INTO "public"."currencies" VALUES (134, 't', '2022-10-03 20:33:39.728+03:30', '2022-10-03 20:33:39.729+03:30', NULL, NULL, 'TMT', 'm', 'turkmenistan-manat', 'Turkmenistan manat');
INSERT INTO "public"."currencies" VALUES (135, 't', '2022-10-03 20:33:39.732+03:30', '2022-10-03 20:33:39.732+03:30', NULL, NULL, 'TTD', 'TT$', 'trinidad-and-tobago-dollar', 'Trinidad and Tobago dollar');
INSERT INTO "public"."currencies" VALUES (136, 't', '2022-10-03 20:33:39.736+03:30', '2022-10-03 20:33:39.736+03:30', NULL, NULL, 'TOP', 'T$', 'pa-anga', 'Pa anga');
INSERT INTO "public"."currencies" VALUES (137, 't', '2022-10-03 20:33:39.739+03:30', '2022-10-03 20:33:39.74+03:30', NULL, NULL, 'TZS', 'TSh', 'tanzanian-shilling', 'Tanzanian shilling');
INSERT INTO "public"."currencies" VALUES (138, 't', '2022-10-03 20:33:39.742+03:30', '2022-10-03 20:33:39.743+03:30', NULL, NULL, 'TJS', 'SM', 'somoni', 'Somoni');
INSERT INTO "public"."currencies" VALUES (139, 't', '2022-10-03 20:33:39.746+03:30', '2022-10-03 20:33:39.746+03:30', NULL, NULL, 'SYPv', 'ل.س', 'syrian-pound', 'Syrian pound');
INSERT INTO "public"."currencies" VALUES (140, 't', '2022-10-03 20:33:39.749+03:30', '2022-10-03 20:33:39.749+03:30', NULL, NULL, 'SEK', 'öre', 'swedish-krona', 'Swedish krona');
INSERT INTO "public"."currencies" VALUES (141, 't', '2022-10-03 20:33:39.752+03:30', '2022-10-03 20:33:39.752+03:30', NULL, NULL, 'SRD', 'Sur$', 'surinamese-dollar', 'Surinamese dollar');
INSERT INTO "public"."currencies" VALUES (142, 't', '2022-10-03 20:33:39.755+03:30', '2022-10-03 20:33:39.756+03:30', NULL, NULL, 'SDG', 'ج.س', 'sudanese-pound', 'Sudanese pound');
INSERT INTO "public"."currencies" VALUES (143, 't', '2022-10-03 20:33:39.758+03:30', '2022-10-03 20:33:39.759+03:30', NULL, NULL, 'SSP', '', 'south-sudanese-pound', 'South Sudanese pound');
INSERT INTO "public"."currencies" VALUES (144, 't', '2022-10-03 20:33:39.761+03:30', '2022-10-03 20:33:39.762+03:30', NULL, NULL, 'SOS', 'Sh', 'somali-shilling', 'Somali shilling');
INSERT INTO "public"."currencies" VALUES (145, 't', '2022-10-03 20:33:39.765+03:30', '2022-10-03 20:33:39.765+03:30', NULL, NULL, 'SBD', 'SI$', 'solomon-islands-dollar', 'Solomon Islands dollar');
INSERT INTO "public"."currencies" VALUES (146, 't', '2022-10-03 20:33:39.768+03:30', '2022-10-03 20:33:39.768+03:30', NULL, NULL, 'SLL', '', 'leone', 'Leone');
INSERT INTO "public"."currencies" VALUES (147, 't', '2022-10-03 20:33:39.771+03:30', '2022-10-03 20:33:39.772+03:30', NULL, NULL, 'SCR', '₨', 'seychellois-rupee', 'Seychellois rupee');
INSERT INTO "public"."currencies" VALUES (148, 't', '2022-10-03 20:33:39.774+03:30', '2022-10-03 20:33:39.775+03:30', NULL, NULL, 'RON', 'L', 'romanian-leu', 'Romanian leu');
INSERT INTO "public"."currencies" VALUES (149, 't', '2022-10-03 20:33:39.778+03:30', '2022-10-03 20:33:39.778+03:30', NULL, NULL, 'NIO', 'C$', 'cordoba', 'Córdoba');
INSERT INTO "public"."currencies" VALUES (150, 't', '2022-10-03 20:33:39.781+03:30', '2022-10-03 20:33:39.782+03:30', NULL, NULL, 'NGN', '₦', 'naira', 'Naira');
INSERT INTO "public"."currencies" VALUES (151, 't', '2022-10-03 20:33:39.784+03:30', '2022-10-03 20:33:39.785+03:30', NULL, NULL, 'NOK', 'øre', 'norwegian-krone', 'Norwegian krone');
INSERT INTO "public"."currencies" VALUES (152, 't', '2022-10-03 20:33:39.787+03:30', '2022-10-03 20:33:39.788+03:30', NULL, NULL, 'PGK', 'K', 'kina', 'Kina');
INSERT INTO "public"."currencies" VALUES (153, 't', '2022-10-03 20:33:39.791+03:30', '2022-10-03 20:33:39.791+03:30', NULL, NULL, 'PYG', '₲', 'guarani', 'Guaraní');
INSERT INTO "public"."currencies" VALUES (154, 't', '2022-10-03 20:33:39.794+03:30', '2022-10-03 20:33:39.795+03:30', NULL, NULL, 'QAR', 'ر.ق', 'qatari-riyal', 'Qatari riyal');

-- ----------------------------
-- Table structure for currenciesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."currenciesTs";
CREATE TABLE "public"."currenciesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"currenciesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of currenciesTs
-- ----------------------------

-- ----------------------------
-- Table structure for days
-- ----------------------------
DROP TABLE IF EXISTS "public"."days";
CREATE TABLE "public"."days" (
  "id" int4 NOT NULL DEFAULT nextval('days_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of days
-- ----------------------------

-- ----------------------------
-- Table structure for daysTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."daysTs";
CREATE TABLE "public"."daysTs" (
  "id" int4 NOT NULL DEFAULT nextval('"daysTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of daysTs
-- ----------------------------

-- ----------------------------
-- Table structure for dominationLevels
-- ----------------------------
DROP TABLE IF EXISTS "public"."dominationLevels";
CREATE TABLE "public"."dominationLevels" (
  "id" int4 NOT NULL DEFAULT nextval('"dominationLevels_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of dominationLevels
-- ----------------------------

-- ----------------------------
-- Table structure for dominationLevelsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."dominationLevelsTs";
CREATE TABLE "public"."dominationLevelsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"dominationLevelsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of dominationLevelsTs
-- ----------------------------

-- ----------------------------
-- Table structure for drivingLicenses
-- ----------------------------
DROP TABLE IF EXISTS "public"."drivingLicenses";
CREATE TABLE "public"."drivingLicenses" (
  "id" int4 NOT NULL DEFAULT nextval('"drivingLicenses_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of drivingLicenses
-- ----------------------------

-- ----------------------------
-- Table structure for drivingLicensesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."drivingLicensesTs";
CREATE TABLE "public"."drivingLicensesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"drivingLicensesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of drivingLicensesTs
-- ----------------------------

-- ----------------------------
-- Table structure for employmentTypes
-- ----------------------------
DROP TABLE IF EXISTS "public"."employmentTypes";
CREATE TABLE "public"."employmentTypes" (
  "id" int4 NOT NULL DEFAULT nextval('"employmentTypes_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of employmentTypes
-- ----------------------------

-- ----------------------------
-- Table structure for employmentTypesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."employmentTypesTs";
CREATE TABLE "public"."employmentTypesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"employmentTypesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of employmentTypesTs
-- ----------------------------

-- ----------------------------
-- Table structure for genders
-- ----------------------------
DROP TABLE IF EXISTS "public"."genders";
CREATE TABLE "public"."genders" (
  "id" int4 NOT NULL DEFAULT nextval('genders_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of genders
-- ----------------------------

-- ----------------------------
-- Table structure for gendersTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."gendersTs";
CREATE TABLE "public"."gendersTs" (
  "id" int4 NOT NULL DEFAULT nextval('"gendersTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of gendersTs
-- ----------------------------

-- ----------------------------
-- Table structure for industries
-- ----------------------------
DROP TABLE IF EXISTS "public"."industries";
CREATE TABLE "public"."industries" (
  "id" int4 NOT NULL DEFAULT nextval('industries_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "icon" text COLLATE "pg_catalog"."default",
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of industries
-- ----------------------------
INSERT INTO "public"."industries" VALUES (109, 't', '2022-10-03 20:33:40.298+03:30', '2022-10-03 20:33:40.298+03:30', NULL, NULL, NULL, 'computer-games', 'Computer Games');
INSERT INTO "public"."industries" VALUES (110, 't', '2022-10-03 20:33:40.301+03:30', '2022-10-03 20:33:40.302+03:30', NULL, NULL, NULL, 'events-services', 'Events Services');
INSERT INTO "public"."industries" VALUES (111, 't', '2022-10-03 20:33:40.304+03:30', '2022-10-03 20:33:40.305+03:30', NULL, NULL, NULL, 'arts-and-crafts', 'Arts and Crafts');
INSERT INTO "public"."industries" VALUES (112, 't', '2022-10-03 20:33:40.308+03:30', '2022-10-03 20:33:40.308+03:30', NULL, NULL, NULL, 'electricalelectronic-manufacturing', 'Electrical/Electronic Manufacturing');
INSERT INTO "public"."industries" VALUES (113, 't', '2022-10-03 20:33:40.311+03:30', '2022-10-03 20:33:40.312+03:30', NULL, NULL, NULL, 'online-media', 'Online Media');
INSERT INTO "public"."industries" VALUES (114, 't', '2022-10-03 20:33:40.314+03:30', '2022-10-03 20:33:40.315+03:30', NULL, NULL, NULL, 'nanotechnology', 'Nanotechnology');
INSERT INTO "public"."industries" VALUES (115, 't', '2022-10-03 20:33:40.318+03:30', '2022-10-03 20:33:40.318+03:30', NULL, NULL, NULL, 'music', 'Music');
INSERT INTO "public"."industries" VALUES (116, 't', '2022-10-03 20:33:40.322+03:30', '2022-10-03 20:33:40.322+03:30', NULL, NULL, NULL, 'logistics-and-supply-chain', 'Logistics and Supply Chain');
INSERT INTO "public"."industries" VALUES (117, 't', '2022-10-03 20:33:40.325+03:30', '2022-10-03 20:33:40.326+03:30', NULL, NULL, NULL, 'plastics', 'Plastics');
INSERT INTO "public"."industries" VALUES (118, 't', '2022-10-03 20:33:40.329+03:30', '2022-10-03 20:33:40.33+03:30', NULL, NULL, NULL, 'computer-and-network-security', 'Computer & Network Security');
INSERT INTO "public"."industries" VALUES (119, 't', '2022-10-03 20:33:40.332+03:30', '2022-10-03 20:33:40.333+03:30', NULL, NULL, NULL, 'wireless', 'Wireless');
INSERT INTO "public"."industries" VALUES (120, 't', '2022-10-03 20:33:40.335+03:30', '2022-10-03 20:33:40.336+03:30', NULL, NULL, NULL, 'alternative-dispute-resolution', 'Alternative Dispute Resolution');
INSERT INTO "public"."industries" VALUES (121, 't', '2022-10-03 20:33:40.338+03:30', '2022-10-03 20:33:40.339+03:30', NULL, NULL, NULL, 'security-and-investigations', 'Security and Investigations');
INSERT INTO "public"."industries" VALUES (122, 't', '2022-10-03 20:33:40.342+03:30', '2022-10-03 20:33:40.342+03:30', NULL, NULL, NULL, 'facilities-services', 'Facilities Services');
INSERT INTO "public"."industries" VALUES (123, 't', '2022-10-03 20:33:40.346+03:30', '2022-10-03 20:33:40.346+03:30', NULL, NULL, NULL, 'outsourcingoffshoring', 'Outsourcing/Offshoring');
INSERT INTO "public"."industries" VALUES (124, 't', '2022-10-03 20:33:40.349+03:30', '2022-10-03 20:33:40.349+03:30', NULL, NULL, NULL, 'health-wellness-and-fitness', 'Health, Wellness and Fitness');
INSERT INTO "public"."industries" VALUES (125, 't', '2022-10-03 20:33:40.352+03:30', '2022-10-03 20:33:40.352+03:30', NULL, NULL, NULL, 'alternative-medicine', 'Alternative Medicine');
INSERT INTO "public"."industries" VALUES (126, 't', '2022-10-03 20:33:40.355+03:30', '2022-10-03 20:33:40.355+03:30', NULL, NULL, NULL, 'media-production', 'Media Production');
INSERT INTO "public"."industries" VALUES (127, 't', '2022-10-03 20:33:40.358+03:30', '2022-10-03 20:33:40.358+03:30', NULL, NULL, NULL, 'animation', 'Animation');
INSERT INTO "public"."industries" VALUES (128, 't', '2022-10-03 20:33:40.361+03:30', '2022-10-03 20:33:40.361+03:30', NULL, NULL, NULL, 'commercial-real-estate', 'Commercial Real Estate');
INSERT INTO "public"."industries" VALUES (129, 't', '2022-10-03 20:33:40.364+03:30', '2022-10-03 20:33:40.364+03:30', NULL, NULL, NULL, 'capital-markets', 'Capital Markets');
INSERT INTO "public"."industries" VALUES (130, 't', '2022-10-03 20:33:40.367+03:30', '2022-10-03 20:33:40.367+03:30', NULL, NULL, NULL, 'think-tanks', 'Think Tanks');
INSERT INTO "public"."industries" VALUES (131, 't', '2022-10-03 20:33:40.37+03:30', '2022-10-03 20:33:40.37+03:30', NULL, NULL, NULL, 'philanthropy', 'Philanthropy');
INSERT INTO "public"."industries" VALUES (132, 't', '2022-10-03 20:33:40.373+03:30', '2022-10-03 20:33:40.373+03:30', NULL, NULL, NULL, 'e-learning', 'E-Learning');
INSERT INTO "public"."industries" VALUES (133, 't', '2022-10-03 20:33:40.376+03:30', '2022-10-03 20:33:40.376+03:30', NULL, NULL, NULL, 'wholesale', 'Wholesale');
INSERT INTO "public"."industries" VALUES (134, 't', '2022-10-03 20:33:40.379+03:30', '2022-10-03 20:33:40.379+03:30', NULL, NULL, NULL, 'import-and-export', 'Import and Export');
INSERT INTO "public"."industries" VALUES (135, 't', '2022-10-03 20:33:40.382+03:30', '2022-10-03 20:33:40.382+03:30', NULL, NULL, NULL, 'mechanical-or-industrial-engineering', 'Mechanical or Industrial Engineering');
INSERT INTO "public"."industries" VALUES (136, 't', '2022-10-03 20:33:40.385+03:30', '2022-10-03 20:33:40.385+03:30', NULL, NULL, NULL, 'photography', 'Photography');
INSERT INTO "public"."industries" VALUES (137, 't', '2022-10-03 20:33:40.388+03:30', '2022-10-03 20:33:40.388+03:30', NULL, NULL, NULL, 'human-resources', 'Human Resources');
INSERT INTO "public"."industries" VALUES (138, 't', '2022-10-03 20:33:40.391+03:30', '2022-10-03 20:33:40.392+03:30', NULL, NULL, NULL, 'business-supplies-and-equipment', 'Business Supplies and Equipment');
INSERT INTO "public"."industries" VALUES (139, 't', '2022-10-03 20:33:40.394+03:30', '2022-10-03 20:33:40.395+03:30', NULL, NULL, NULL, 'mental-health-care', 'Mental Health Care');
INSERT INTO "public"."industries" VALUES (140, 't', '2022-10-03 20:33:40.398+03:30', '2022-10-03 20:33:40.398+03:30', NULL, NULL, NULL, 'graphic-design', 'Graphic Design');
INSERT INTO "public"."industries" VALUES (141, 't', '2022-10-03 20:33:40.402+03:30', '2022-10-03 20:33:40.402+03:30', NULL, NULL, NULL, 'international-trade-and-development', 'International Trade and Development');
INSERT INTO "public"."industries" VALUES (142, 't', '2022-10-03 20:33:40.405+03:30', '2022-10-03 20:33:40.406+03:30', NULL, NULL, NULL, 'wine-and-spirits', 'Wine and Spirits');
INSERT INTO "public"."industries" VALUES (143, 't', '2022-10-03 20:33:40.408+03:30', '2022-10-03 20:33:40.409+03:30', NULL, NULL, NULL, 'luxury-goods-and-jewelry', 'Luxury Goods & Jewelry');
INSERT INTO "public"."industries" VALUES (144, 't', '2022-10-03 20:33:40.413+03:30', '2022-10-03 20:33:40.414+03:30', NULL, NULL, NULL, 'renewables-and-environment', 'Renewables & Environment');
INSERT INTO "public"."industries" VALUES (145, 't', '2022-10-03 20:33:40.417+03:30', '2022-10-03 20:33:40.417+03:30', NULL, NULL, NULL, 'glass-ceramics-and-concrete', 'Glass, Ceramics & Concrete');
INSERT INTO "public"."industries" VALUES (146, 't', '2022-10-03 20:33:40.42+03:30', '2022-10-03 20:33:40.42+03:30', NULL, NULL, NULL, 'packaging-and-containers', 'Packaging and Containers');
INSERT INTO "public"."industries" VALUES (147, 't', '2022-10-03 20:33:40.423+03:30', '2022-10-03 20:33:40.424+03:30', NULL, NULL, NULL, 'industrial-automation', 'Industrial Automation');
INSERT INTO "public"."industries" VALUES (148, 't', '2022-10-03 20:33:40.427+03:30', '2022-10-03 20:33:40.428+03:30', NULL, NULL, NULL, 'government-relations', 'Government Relations');

-- ----------------------------
-- Table structure for industriesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."industriesTs";
CREATE TABLE "public"."industriesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"industriesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of industriesTs
-- ----------------------------

-- ----------------------------
-- Table structure for invitations
-- ----------------------------
DROP TABLE IF EXISTS "public"."invitations";
CREATE TABLE "public"."invitations" (
  "id" int4 NOT NULL DEFAULT nextval('invitations_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "guest" text COLLATE "pg_catalog"."default",
  "userId" int4
)
;

-- ----------------------------
-- Records of invitations
-- ----------------------------

-- ----------------------------
-- Table structure for jobQuestions
-- ----------------------------
DROP TABLE IF EXISTS "public"."jobQuestions";
CREATE TABLE "public"."jobQuestions" (
  "id" int4 NOT NULL DEFAULT nextval('"jobQuestions_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(100) COLLATE "pg_catalog"."default",
  "jobId" int4 NOT NULL,
  "categoryId" int4 NOT NULL
)
;

-- ----------------------------
-- Records of jobQuestions
-- ----------------------------

-- ----------------------------
-- Table structure for jobQuestionsCategories
-- ----------------------------
DROP TABLE IF EXISTS "public"."jobQuestionsCategories";
CREATE TABLE "public"."jobQuestionsCategories" (
  "id" int4 NOT NULL DEFAULT nextval('"jobQuestionsCategories_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of jobQuestionsCategories
-- ----------------------------

-- ----------------------------
-- Table structure for jobQuestionsCategoriesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."jobQuestionsCategoriesTs";
CREATE TABLE "public"."jobQuestionsCategoriesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"jobQuestionsCategoriesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of jobQuestionsCategoriesTs
-- ----------------------------

-- ----------------------------
-- Table structure for jobSkills
-- ----------------------------
DROP TABLE IF EXISTS "public"."jobSkills";
CREATE TABLE "public"."jobSkills" (
  "id" int4 NOT NULL DEFAULT nextval('"jobSkills_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "jobId" int4,
  "skillId" int4
)
;

-- ----------------------------
-- Records of jobSkills
-- ----------------------------

-- ----------------------------
-- Table structure for jobStatus
-- ----------------------------
DROP TABLE IF EXISTS "public"."jobStatus";
CREATE TABLE "public"."jobStatus" (
  "id" int4 NOT NULL DEFAULT nextval('"jobStatus_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of jobStatus
-- ----------------------------

-- ----------------------------
-- Table structure for jobStatusTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."jobStatusTs";
CREATE TABLE "public"."jobStatusTs" (
  "id" int4 NOT NULL DEFAULT nextval('"jobStatusTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of jobStatusTs
-- ----------------------------

-- ----------------------------
-- Table structure for labels
-- ----------------------------
DROP TABLE IF EXISTS "public"."labels";
CREATE TABLE "public"."labels" (
  "id" int4 NOT NULL DEFAULT nextval('labels_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" text COLLATE "pg_catalog"."default",
  "title" text COLLATE "pg_catalog"."default",
  "sectionId" int4
)
;

-- ----------------------------
-- Records of labels
-- ----------------------------

-- ----------------------------
-- Table structure for labelsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."labelsTs";
CREATE TABLE "public"."labelsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"labelsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of labelsTs
-- ----------------------------

-- ----------------------------
-- Table structure for languageCertificates
-- ----------------------------
DROP TABLE IF EXISTS "public"."languageCertificates";
CREATE TABLE "public"."languageCertificates" (
  "id" int4 NOT NULL DEFAULT nextval('"languageCertificates_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of languageCertificates
-- ----------------------------

-- ----------------------------
-- Table structure for languageCertificatesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."languageCertificatesTs";
CREATE TABLE "public"."languageCertificatesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"languageCertificatesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of languageCertificatesTs
-- ----------------------------

-- ----------------------------
-- Table structure for languageLevels
-- ----------------------------
DROP TABLE IF EXISTS "public"."languageLevels";
CREATE TABLE "public"."languageLevels" (
  "id" int4 NOT NULL DEFAULT nextval('"languageLevels_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of languageLevels
-- ----------------------------

-- ----------------------------
-- Table structure for languageLevelsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."languageLevelsTs";
CREATE TABLE "public"."languageLevelsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"languageLevelsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of languageLevelsTs
-- ----------------------------

-- ----------------------------
-- Table structure for languages
-- ----------------------------
DROP TABLE IF EXISTS "public"."languages";
CREATE TABLE "public"."languages" (
  "id" int4 NOT NULL DEFAULT nextval('languages_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "code" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "isRtl" bool NOT NULL DEFAULT false,
  "isDefault" bool NOT NULL DEFAULT false,
  "isOnList" bool NOT NULL DEFAULT false,
  "isOnLine" bool NOT NULL DEFAULT false,
  "flagId" text COLLATE "pg_catalog"."default",
  "bannerId" text COLLATE "pg_catalog"."default",
  "about" text COLLATE "pg_catalog"."default",
  "website" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of languages
-- ----------------------------
INSERT INTO "public"."languages" VALUES (123, 't', '2022-10-03 20:33:41.026+03:30', '2022-10-03 20:33:41.027+03:30', NULL, NULL, 'ts', 'tsonga', 'Tsonga', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (124, 't', '2022-10-03 20:33:41.031+03:30', '2022-10-03 20:33:41.031+03:30', NULL, NULL, 'tt', 'tatar', 'Tatar', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (125, 't', '2022-10-03 20:33:41.035+03:30', '2022-10-03 20:33:41.036+03:30', NULL, NULL, 'tw', 'twi', 'Twi', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (126, 't', '2022-10-03 20:33:41.04+03:30', '2022-10-03 20:33:41.041+03:30', NULL, NULL, 'uk', 'ukrainian', 'Ukrainian', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (127, 't', '2022-10-03 20:33:41.044+03:30', '2022-10-03 20:33:41.045+03:30', NULL, NULL, 'ur', 'urdu', 'Urdu', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (128, 't', '2022-10-03 20:33:41.048+03:30', '2022-10-03 20:33:41.049+03:30', NULL, NULL, 'uz', 'uzbek', 'Uzbek', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (129, 't', '2022-10-03 20:33:41.052+03:30', '2022-10-03 20:33:41.053+03:30', NULL, NULL, 'vi', 'vietnamese', 'Vietnamese', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (130, 't', '2022-10-03 20:33:41.056+03:30', '2022-10-03 20:33:41.057+03:30', NULL, NULL, 'vo', 'volapuk', 'Volapuk', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (131, 't', '2022-10-03 20:33:41.061+03:30', '2022-10-03 20:33:41.062+03:30', NULL, NULL, 'wo', 'wolof', 'Wolof', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (132, 't', '2022-10-03 20:33:41.066+03:30', '2022-10-03 20:33:41.066+03:30', NULL, NULL, 'xh', 'xhosa', 'Xhosa', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (133, 't', '2022-10-03 20:33:41.07+03:30', '2022-10-03 20:33:41.071+03:30', NULL, NULL, 'yo', 'yoruba', 'Yoruba', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (134, 't', '2022-10-03 20:33:41.075+03:30', '2022-10-03 20:33:41.076+03:30', NULL, NULL, 'zh', 'chinese', 'Chinese', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (135, 't', '2022-10-03 20:33:41.08+03:30', '2022-10-03 20:33:41.08+03:30', NULL, NULL, 'zu', 'zulu', 'Zulu', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (25, 't', '2022-10-03 20:33:40.599+03:30', '2022-10-03 20:33:40.6+03:30', NULL, NULL, 'en', 'english', 'English', 'f', 't', 't', 't', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (106, 't', '2022-10-03 20:33:40.953+03:30', '2022-10-05 11:09:57.032+03:30', NULL, NULL, 'sq', 'albanian', 'Albanian', 'f', 'f', 'f', 't', NULL, NULL, NULL, NULL);
INSERT INTO "public"."languages" VALUES (145, 't', '2022-10-05 23:24:24.495+03:30', '2022-10-05 23:24:24.496+03:30', 2, NULL, 'dfghjkl', 'fghjkl', 'fghjkl', 'f', 'f', 'f', 'f', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for languagesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."languagesTs";
CREATE TABLE "public"."languagesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"languagesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "about" text COLLATE "pg_catalog"."default",
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of languagesTs
-- ----------------------------

-- ----------------------------
-- Table structure for memberClockings
-- ----------------------------
DROP TABLE IF EXISTS "public"."memberClockings";
CREATE TABLE "public"."memberClockings" (
  "id" int4 NOT NULL DEFAULT nextval('"memberClockings_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "startDate" date,
  "endDate" date,
  "startHour" int4,
  "endHour" int4,
  "memberId" int4 NOT NULL
)
;

-- ----------------------------
-- Records of memberClockings
-- ----------------------------

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS "public"."menus";
CREATE TABLE "public"."menus" (
  "id" int4 NOT NULL DEFAULT nextval('menus_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "sort" int4 NOT NULL,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of menus
-- ----------------------------

-- ----------------------------
-- Table structure for menusTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."menusTs";
CREATE TABLE "public"."menusTs" (
  "id" int4 NOT NULL DEFAULT nextval('"menusTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of menusTs
-- ----------------------------

-- ----------------------------
-- Table structure for modules
-- ----------------------------
DROP TABLE IF EXISTS "public"."modules";
CREATE TABLE "public"."modules" (
  "id" int4 NOT NULL DEFAULT nextval('modules_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "sort" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "operations" text[] COLLATE "pg_catalog"."default",
  "menuId" int4
)
;

-- ----------------------------
-- Records of modules
-- ----------------------------

-- ----------------------------
-- Table structure for modulesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."modulesTs";
CREATE TABLE "public"."modulesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"modulesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of modulesTs
-- ----------------------------

-- ----------------------------
-- Table structure for nationalities
-- ----------------------------
DROP TABLE IF EXISTS "public"."nationalities";
CREATE TABLE "public"."nationalities" (
  "id" int4 NOT NULL DEFAULT nextval('nationalities_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "flagId" text COLLATE "pg_catalog"."default",
  "bannerId" text COLLATE "pg_catalog"."default",
  "about" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of nationalities
-- ----------------------------
INSERT INTO "public"."nationalities" VALUES (151, 't', '2022-10-03 20:33:41.698+03:30', '2022-10-03 20:33:41.698+03:30', NULL, NULL, 'nicaraguan', 'Nicaraguan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (152, 't', '2022-10-03 20:33:41.701+03:30', '2022-10-03 20:33:41.702+03:30', NULL, NULL, 'nigerien', 'Nigerien', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (153, 't', '2022-10-03 20:33:41.704+03:30', '2022-10-03 20:33:41.705+03:30', NULL, NULL, 'nigerian', 'Nigerian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (154, 't', '2022-10-03 20:33:41.707+03:30', '2022-10-03 20:33:41.708+03:30', NULL, NULL, 'niuean', 'Niuean', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (155, 't', '2022-10-03 20:33:41.711+03:30', '2022-10-03 20:33:41.712+03:30', NULL, NULL, 'northern-mariana-islander', 'Northern Mariana Islander', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (156, 't', '2022-10-03 20:33:41.714+03:30', '2022-10-03 20:33:41.715+03:30', NULL, NULL, 'norwegian', 'Norwegian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (157, 't', '2022-10-03 20:33:41.717+03:30', '2022-10-03 20:33:41.718+03:30', NULL, NULL, 'omani', 'Omani', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (158, 't', '2022-10-03 20:33:41.722+03:30', '2022-10-03 20:33:41.723+03:30', NULL, NULL, 'pakistani', 'Pakistani', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (159, 't', '2022-10-03 20:33:41.726+03:30', '2022-10-03 20:33:41.726+03:30', NULL, NULL, 'palauan', 'Palauan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (160, 't', '2022-10-03 20:33:41.729+03:30', '2022-10-03 20:33:41.73+03:30', NULL, NULL, 'palestinian', 'Palestinian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (161, 't', '2022-10-03 20:33:41.733+03:30', '2022-10-03 20:33:41.734+03:30', NULL, NULL, 'panamanian', 'Panamanian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (162, 't', '2022-10-03 20:33:41.749+03:30', '2022-10-03 20:33:41.749+03:30', NULL, NULL, 'papua-new-guinean', 'Papua New Guinean', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (163, 't', '2022-10-03 20:33:41.757+03:30', '2022-10-03 20:33:41.758+03:30', NULL, NULL, 'paraguayan', 'Paraguayan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (164, 't', '2022-10-03 20:33:41.76+03:30', '2022-10-03 20:33:41.76+03:30', NULL, NULL, 'peruvian', 'Peruvian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (165, 't', '2022-10-03 20:33:41.762+03:30', '2022-10-03 20:33:41.763+03:30', NULL, NULL, 'philippine', 'Philippine', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (166, 't', '2022-10-03 20:33:41.765+03:30', '2022-10-03 20:33:41.766+03:30', NULL, NULL, 'pitcairn-islanders', 'Pitcairn Islanders', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (167, 't', '2022-10-03 20:33:41.769+03:30', '2022-10-03 20:33:41.77+03:30', NULL, NULL, 'polish', 'Polish', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (168, 't', '2022-10-03 20:33:41.773+03:30', '2022-10-03 20:33:41.774+03:30', NULL, NULL, 'portuguese', 'Portuguese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (169, 't', '2022-10-03 20:33:41.777+03:30', '2022-10-03 20:33:41.777+03:30', NULL, NULL, 'puerto-rican', 'Puerto Rican', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (170, 't', '2022-10-03 20:33:41.78+03:30', '2022-10-03 20:33:41.781+03:30', NULL, NULL, 'qatari', 'Qatari', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (171, 't', '2022-10-03 20:33:41.784+03:30', '2022-10-03 20:33:41.784+03:30', NULL, NULL, 'reunionese', 'Réunionese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (172, 't', '2022-10-03 20:33:41.787+03:30', '2022-10-03 20:33:41.788+03:30', NULL, NULL, 'romanian', 'Romanian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (173, 't', '2022-10-03 20:33:41.79+03:30', '2022-10-03 20:33:41.791+03:30', NULL, NULL, 'russian', 'Russian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (174, 't', '2022-10-03 20:33:41.794+03:30', '2022-10-03 20:33:41.794+03:30', NULL, NULL, 'rwandan', 'Rwandan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (175, 't', '2022-10-03 20:33:41.797+03:30', '2022-10-03 20:33:41.798+03:30', NULL, NULL, 'barthelemois', 'Barthélemois', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (176, 't', '2022-10-03 20:33:41.801+03:30', '2022-10-03 20:33:41.802+03:30', NULL, NULL, 'kittitian-nevisian', 'Kittitian - Nevisian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (177, 't', '2022-10-03 20:33:41.805+03:30', '2022-10-03 20:33:41.805+03:30', NULL, NULL, 'saint-lucian', 'Saint Lucian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (178, 't', '2022-10-03 20:33:41.808+03:30', '2022-10-03 20:33:41.809+03:30', NULL, NULL, 'saint-martinois', 'Saint-Martinois', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (179, 't', '2022-10-03 20:33:41.811+03:30', '2022-10-03 20:33:41.812+03:30', NULL, NULL, 'saintpierrais-miquelonnais-pierrian', 'SaintPierrais-Miquelonnais-Pierrian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (180, 't', '2022-10-03 20:33:41.815+03:30', '2022-10-03 20:33:41.815+03:30', NULL, NULL, 'saint-vincentian-or-vincentianvincy-(colloquial)', 'Saint Vincentian or VincentianVincy (colloquial)', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (181, 't', '2022-10-03 20:33:41.818+03:30', '2022-10-03 20:33:41.819+03:30', NULL, NULL, 'samoan', 'Samoan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (182, 't', '2022-10-03 20:33:41.821+03:30', '2022-10-03 20:33:41.822+03:30', NULL, NULL, 'sammarinese', 'Sammarinese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (183, 't', '2022-10-03 20:33:41.825+03:30', '2022-10-03 20:33:41.825+03:30', NULL, NULL, 'santomean', 'Santomean', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (184, 't', '2022-10-03 20:33:41.828+03:30', '2022-10-03 20:33:41.829+03:30', NULL, NULL, 'saudi', 'Saudi', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (185, 't', '2022-10-03 20:33:41.832+03:30', '2022-10-03 20:33:41.832+03:30', NULL, NULL, 'senegalese', 'Senegalese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (186, 't', '2022-10-03 20:33:41.835+03:30', '2022-10-03 20:33:41.836+03:30', NULL, NULL, 'serbian', 'Serbian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (187, 't', '2022-10-03 20:33:41.839+03:30', '2022-10-03 20:33:41.84+03:30', NULL, NULL, 'seychellois-seychelloise-seselwa', 'Seychellois - Seychelloise - Seselwa', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (188, 't', '2022-10-03 20:33:41.843+03:30', '2022-10-03 20:33:41.844+03:30', NULL, NULL, 'sierra-leonean', 'Sierra Leonean', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (189, 't', '2022-10-03 20:33:41.846+03:30', '2022-10-03 20:33:41.847+03:30', NULL, NULL, 'singaporean', 'Singaporean', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (190, 't', '2022-10-03 20:33:41.85+03:30', '2022-10-03 20:33:41.85+03:30', NULL, NULL, 'sint-maartener', 'Sint Maartener', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (191, 't', '2022-10-03 20:33:41.853+03:30', '2022-10-03 20:33:41.854+03:30', NULL, NULL, 'slovak', 'Slovak', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (192, 't', '2022-10-03 20:33:41.857+03:30', '2022-10-03 20:33:41.857+03:30', NULL, NULL, 'slovene-slovenian', 'Slovene - Slovenian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (193, 't', '2022-10-03 20:33:41.861+03:30', '2022-10-03 20:33:41.861+03:30', NULL, NULL, 'solomon-islander', 'Solomon Islander', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (194, 't', '2022-10-03 20:33:41.865+03:30', '2022-10-03 20:33:41.865+03:30', NULL, NULL, 'somalian', 'Somalian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (195, 't', '2022-10-03 20:33:41.869+03:30', '2022-10-03 20:33:41.869+03:30', NULL, NULL, 'south-african', 'South African', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (196, 't', '2022-10-03 20:33:41.873+03:30', '2022-10-03 20:33:41.873+03:30', NULL, NULL, 'south-georgian-south-sandwich-islander', 'South Georgian-South Sandwich Islander', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (197, 't', '2022-10-03 20:33:41.877+03:30', '2022-10-03 20:33:41.877+03:30', NULL, NULL, 'south-sudanese', 'South Sudanese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (198, 't', '2022-10-03 20:33:41.88+03:30', '2022-10-03 20:33:41.88+03:30', NULL, NULL, 'spanish', 'Spanish', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (199, 't', '2022-10-03 20:33:41.883+03:30', '2022-10-03 20:33:41.883+03:30', NULL, NULL, 'sri-lankan', 'Sri Lankan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (200, 't', '2022-10-03 20:33:41.886+03:30', '2022-10-03 20:33:41.887+03:30', NULL, NULL, 'sudanese', 'Sudanese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (201, 't', '2022-10-03 20:33:41.889+03:30', '2022-10-03 20:33:41.89+03:30', NULL, NULL, 'surinamese', 'Surinamese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (202, 't', '2022-10-03 20:33:41.893+03:30', '2022-10-03 20:33:41.893+03:30', NULL, NULL, 'liswati', 'Liswati', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (203, 't', '2022-10-03 20:33:41.896+03:30', '2022-10-03 20:33:41.896+03:30', NULL, NULL, 'swedish', 'Swedish', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (204, 't', '2022-10-03 20:33:41.899+03:30', '2022-10-03 20:33:41.9+03:30', NULL, NULL, 'swiss', 'Swiss', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (205, 't', '2022-10-03 20:33:41.902+03:30', '2022-10-03 20:33:41.903+03:30', NULL, NULL, 'syrian', 'Syrian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (206, 't', '2022-10-03 20:33:41.905+03:30', '2022-10-03 20:33:41.906+03:30', NULL, NULL, 'taiwanese', 'Taiwanese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (207, 't', '2022-10-03 20:33:41.909+03:30', '2022-10-03 20:33:41.909+03:30', NULL, NULL, 'tajikistani', 'Tajikistani', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (208, 't', '2022-10-03 20:33:41.912+03:30', '2022-10-03 20:33:41.913+03:30', NULL, NULL, 'tanzanian', 'Tanzanian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (209, 't', '2022-10-03 20:33:41.916+03:30', '2022-10-03 20:33:41.916+03:30', NULL, NULL, 'thai', 'Thai', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (210, 't', '2022-10-03 20:33:41.919+03:30', '2022-10-03 20:33:41.92+03:30', NULL, NULL, 'east-timorese-timorese-maubere', 'East Timorese -Timorese - Maubere', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (211, 't', '2022-10-03 20:33:41.922+03:30', '2022-10-03 20:33:41.923+03:30', NULL, NULL, 'togolese', 'Togolese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (212, 't', '2022-10-03 20:33:41.926+03:30', '2022-10-03 20:33:41.926+03:30', NULL, NULL, 'tokelauan', 'Tokelauan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (213, 't', '2022-10-03 20:33:41.93+03:30', '2022-10-03 20:33:41.93+03:30', NULL, NULL, 'tongan', 'Tongan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (214, 't', '2022-10-03 20:33:41.935+03:30', '2022-10-03 20:33:41.936+03:30', NULL, NULL, 'trinidadian-tobagonian', 'Trinidadian - Tobagonian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (215, 't', '2022-10-03 20:33:41.939+03:30', '2022-10-03 20:33:41.94+03:30', NULL, NULL, 'tunisian', 'Tunisian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (216, 't', '2022-10-03 20:33:41.943+03:30', '2022-10-03 20:33:41.944+03:30', NULL, NULL, 'turkish', 'Turkish', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (217, 't', '2022-10-03 20:33:41.947+03:30', '2022-10-03 20:33:41.948+03:30', NULL, NULL, 'turkmenistani', 'Turkmenistani', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (218, 't', '2022-10-03 20:33:41.95+03:30', '2022-10-03 20:33:41.951+03:30', NULL, NULL, 'turks-and-caicos-islander', 'Turks and Caicos Islander', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (219, 't', '2022-10-03 20:33:41.954+03:30', '2022-10-03 20:33:41.954+03:30', NULL, NULL, 'tuvaluan', 'Tuvaluan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (220, 't', '2022-10-03 20:33:41.957+03:30', '2022-10-03 20:33:41.957+03:30', NULL, NULL, 'ugandan', 'Ugandan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (221, 't', '2022-10-03 20:33:41.96+03:30', '2022-10-03 20:33:41.96+03:30', NULL, NULL, 'ukrainian', 'Ukrainian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (222, 't', '2022-10-03 20:33:41.962+03:30', '2022-10-03 20:33:41.963+03:30', NULL, NULL, 'emirati', 'Emirati', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (223, 't', '2022-10-03 20:33:41.965+03:30', '2022-10-03 20:33:41.966+03:30', NULL, NULL, 'british', 'British', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (224, 't', '2022-10-03 20:33:41.968+03:30', '2022-10-03 20:33:41.969+03:30', NULL, NULL, 'american', 'American', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (225, 't', '2022-10-03 20:33:41.971+03:30', '2022-10-03 20:33:41.971+03:30', NULL, NULL, 'american-islander', 'American Islander', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (226, 't', '2022-10-03 20:33:41.973+03:30', '2022-10-03 20:33:41.974+03:30', NULL, NULL, 'uruguayan', 'Uruguayan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (227, 't', '2022-10-03 20:33:41.976+03:30', '2022-10-03 20:33:41.977+03:30', NULL, NULL, 'uzbekistani', 'Uzbekistani', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (228, 't', '2022-10-03 20:33:41.979+03:30', '2022-10-03 20:33:41.98+03:30', NULL, NULL, 'vanuatuan', 'Vanuatuan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (229, 't', '2022-10-03 20:33:41.982+03:30', '2022-10-03 20:33:41.982+03:30', NULL, NULL, 'venezuelan', 'Venezuelan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (230, 't', '2022-10-03 20:33:41.984+03:30', '2022-10-03 20:33:41.985+03:30', NULL, NULL, 'vietnamese', 'Vietnamese', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (231, 't', '2022-10-03 20:33:41.987+03:30', '2022-10-03 20:33:41.988+03:30', NULL, NULL, 'british-virgin-islander', 'British Virgin Islander', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (232, 't', '2022-10-03 20:33:41.99+03:30', '2022-10-03 20:33:41.99+03:30', NULL, NULL, 'american-virgin-islander', 'American Virgin Islander', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (233, 't', '2022-10-03 20:33:41.992+03:30', '2022-10-03 20:33:41.993+03:30', NULL, NULL, 'wallisian-futunan', 'Wallisian - Futunan', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (234, 't', '2022-10-03 20:33:41.995+03:30', '2022-10-03 20:33:41.995+03:30', NULL, NULL, 'yemeni', 'Yemeni', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (235, 't', '2022-10-03 20:33:41.998+03:30', '2022-10-03 20:33:41.998+03:30', NULL, NULL, 'zambian', 'Zambian', NULL, NULL, NULL);
INSERT INTO "public"."nationalities" VALUES (236, 't', '2022-10-03 20:33:42+03:30', '2022-10-03 20:33:42.001+03:30', NULL, NULL, 'zimbabwean', 'Zimbabwean', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for nationalitiesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."nationalitiesTs";
CREATE TABLE "public"."nationalitiesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"nationalitiesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "about" text COLLATE "pg_catalog"."default",
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of nationalitiesTs
-- ----------------------------

-- ----------------------------
-- Table structure for newsLetterSubscribers
-- ----------------------------
DROP TABLE IF EXISTS "public"."newsLetterSubscribers";
CREATE TABLE "public"."newsLetterSubscribers" (
  "id" int4 NOT NULL DEFAULT nextval('"newsLetterSubscribers_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "email" varchar(99) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of newsLetterSubscribers
-- ----------------------------

-- ----------------------------
-- Table structure for newsLetters
-- ----------------------------
DROP TABLE IF EXISTS "public"."newsLetters";
CREATE TABLE "public"."newsLetters" (
  "id" int4 NOT NULL DEFAULT nextval('"newsLetters_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "content" varchar(99) COLLATE "pg_catalog"."default" NOT NULL,
  "bannerId" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of newsLetters
-- ----------------------------

-- ----------------------------
-- Table structure for notifications
-- ----------------------------
DROP TABLE IF EXISTS "public"."notifications";
CREATE TABLE "public"."notifications" (
  "id" int4 NOT NULL DEFAULT nextval('notifications_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "content" text COLLATE "pg_catalog"."default" NOT NULL,
  "type" "public"."NOTIFICATIONS" NOT NULL,
  "imageId" text COLLATE "pg_catalog"."default",
  "isSeen" timestamptz(3),
  "sendToAll" bool NOT NULL DEFAULT false,
  "isArchived" bool NOT NULL DEFAULT false,
  "userIds" int4[],
  "roleIds" int4[]
)
;

-- ----------------------------
-- Records of notifications
-- ----------------------------

-- ----------------------------
-- Table structure for percentage
-- ----------------------------
DROP TABLE IF EXISTS "public"."percentage";
CREATE TABLE "public"."percentage" (
  "id" int4 NOT NULL DEFAULT nextval('percentage_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "firstName" int4 NOT NULL DEFAULT 0,
  "lastName" int4 NOT NULL DEFAULT 0,
  "email" int4 NOT NULL DEFAULT 0,
  "phone" int4 NOT NULL DEFAULT 0,
  "profileImage" int4 NOT NULL DEFAULT 0,
  "dateOfBirth" int4 NOT NULL DEFAULT 0,
  "birthPlace" int4 NOT NULL DEFAULT 0,
  "address" int4 NOT NULL DEFAULT 0,
  "jobTitle" int4 NOT NULL DEFAULT 0,
  "nationality" int4 NOT NULL DEFAULT 0,
  "academicLevel" int4 NOT NULL DEFAULT 0,
  "industry" int4 NOT NULL DEFAULT 0,
  "currency" int4 NOT NULL DEFAULT 0,
  "aboutMe" int4 NOT NULL DEFAULT 0,
  "education" int4 NOT NULL DEFAULT 0,
  "experience" int4 NOT NULL DEFAULT 0,
  "skills" int4 NOT NULL DEFAULT 0,
  "languages" int4 NOT NULL DEFAULT 0,
  "expertise" int4 NOT NULL DEFAULT 0,
  "portfolio" int4 NOT NULL DEFAULT 0,
  "extraCurriculam" int4 NOT NULL DEFAULT 0,
  "courses" int4 NOT NULL DEFAULT 0,
  "interships" int4 NOT NULL DEFAULT 0,
  "references" int4 NOT NULL DEFAULT 0,
  "hobbies" int4 NOT NULL DEFAULT 0,
  "additionalInfo" int4 NOT NULL DEFAULT 0,
  "publications" int4 NOT NULL DEFAULT 0,
  "awards" int4 NOT NULL DEFAULT 0
)
;

-- ----------------------------
-- Records of percentage
-- ----------------------------

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS "public"."permissions";
CREATE TABLE "public"."permissions" (
  "id" int4 NOT NULL DEFAULT nextval('permissions_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "actorId" int4 NOT NULL,
  "invite" bool NOT NULL DEFAULT false,
  "create" bool NOT NULL DEFAULT false,
  "view" bool NOT NULL DEFAULT false,
  "edit" bool NOT NULL DEFAULT false,
  "delete" bool NOT NULL DEFAULT false,
  "approve" bool NOT NULL DEFAULT false,
  "moduleId" int4,
  "actorTypeId" int4
)
;

-- ----------------------------
-- Records of permissions
-- ----------------------------

-- ----------------------------
-- Table structure for roleLikes
-- ----------------------------
DROP TABLE IF EXISTS "public"."roleLikes";
CREATE TABLE "public"."roleLikes" (
  "id" int4 NOT NULL DEFAULT nextval('"roleLikes_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "like" bool,
  "roleId" int4
)
;

-- ----------------------------
-- Records of roleLikes
-- ----------------------------

-- ----------------------------
-- Table structure for roleStatus
-- ----------------------------
DROP TABLE IF EXISTS "public"."roleStatus";
CREATE TABLE "public"."roleStatus" (
  "id" int4 NOT NULL DEFAULT nextval('"roleStatus_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "status" text COLLATE "pg_catalog"."default",
  "roleId" int4
)
;

-- ----------------------------
-- Records of roleStatus
-- ----------------------------

-- ----------------------------
-- Table structure for roleViews
-- ----------------------------
DROP TABLE IF EXISTS "public"."roleViews";
CREATE TABLE "public"."roleViews" (
  "id" int4 NOT NULL DEFAULT nextval('"roleViews_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "roleId" int4
)
;

-- ----------------------------
-- Records of roleViews
-- ----------------------------

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS "public"."roles";
CREATE TABLE "public"."roles" (
  "id" int4 NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" text COLLATE "pg_catalog"."default",
  "title" text COLLATE "pg_catalog"."default",
  "iconId" text COLLATE "pg_catalog"."default",
  "isDefault" bool DEFAULT false
)
;

-- ----------------------------
-- Records of roles
-- ----------------------------

-- ----------------------------
-- Table structure for rolesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."rolesTs";
CREATE TABLE "public"."rolesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"rolesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of rolesTs
-- ----------------------------

-- ----------------------------
-- Table structure for salaryPeriods
-- ----------------------------
DROP TABLE IF EXISTS "public"."salaryPeriods";
CREATE TABLE "public"."salaryPeriods" (
  "id" int4 NOT NULL DEFAULT nextval('"salaryPeriods_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of salaryPeriods
-- ----------------------------

-- ----------------------------
-- Table structure for salaryPeriodsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."salaryPeriodsTs";
CREATE TABLE "public"."salaryPeriodsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"salaryPeriodsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of salaryPeriodsTs
-- ----------------------------

-- ----------------------------
-- Table structure for sections
-- ----------------------------
DROP TABLE IF EXISTS "public"."sections";
CREATE TABLE "public"."sections" (
  "id" int4 NOT NULL DEFAULT nextval('sections_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" text COLLATE "pg_catalog"."default",
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "domain" "public"."DOMAINS" NOT NULL DEFAULT 'basic'::"DOMAINS"
)
;

-- ----------------------------
-- Records of sections
-- ----------------------------

-- ----------------------------
-- Table structure for sectionsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."sectionsTs";
CREATE TABLE "public"."sectionsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"sectionsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "domain" varchar(255) COLLATE "pg_catalog"."default",
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of sectionsTs
-- ----------------------------

-- ----------------------------
-- Table structure for securityQuestions
-- ----------------------------
DROP TABLE IF EXISTS "public"."securityQuestions";
CREATE TABLE "public"."securityQuestions" (
  "id" int4 NOT NULL DEFAULT nextval('"securityQuestions_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of securityQuestions
-- ----------------------------
INSERT INTO "public"."securityQuestions" VALUES (3, 't', '2022-10-03 21:19:48.66+03:30', '2022-10-03 21:19:48.66+03:30', NULL, NULL, 'what-was-your-your-first-school-name', 'What was your your first school name?');
INSERT INTO "public"."securityQuestions" VALUES (5, 't', '2022-10-03 21:19:48.666+03:30', '2022-10-03 21:19:48.666+03:30', NULL, NULL, 'what-is-your-first-teach-name', 'What is your first teach name?');
INSERT INTO "public"."securityQuestions" VALUES (6, 't', '2022-10-07 23:07:06.751+03:30', '2022-10-07 23:07:06.752+03:30', 5, NULL, NULL, 'What is your best friends name?');

-- ----------------------------
-- Table structure for securityQuestionsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."securityQuestionsTs";
CREATE TABLE "public"."securityQuestionsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"securityQuestionsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of securityQuestionsTs
-- ----------------------------

-- ----------------------------
-- Table structure for skills
-- ----------------------------
DROP TABLE IF EXISTS "public"."skills";
CREATE TABLE "public"."skills" (
  "id" int4 NOT NULL DEFAULT nextval('skills_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of skills
-- ----------------------------
INSERT INTO "public"."skills" VALUES (265, 't', '2022-10-03 20:33:43.009+03:30', '2022-10-03 20:33:43.009+03:30', NULL, NULL, 'wildlife-biology', 'Wildlife Biology');
INSERT INTO "public"."skills" VALUES (266, 't', '2022-10-03 20:33:43.012+03:30', '2022-10-03 20:33:43.013+03:30', NULL, NULL, 'wildlife-conservation', 'Wildlife Conservation');
INSERT INTO "public"."skills" VALUES (267, 't', '2022-10-03 20:33:43.015+03:30', '2022-10-03 20:33:43.016+03:30', NULL, NULL, 'wildlife-management', 'Wildlife Management');
INSERT INTO "public"."skills" VALUES (268, 't', '2022-10-03 20:33:43.018+03:30', '2022-10-03 20:33:43.018+03:30', NULL, NULL, 'wildlife-photography', 'Wildlife Photography');
INSERT INTO "public"."skills" VALUES (269, 't', '2022-10-03 20:33:43.02+03:30', '2022-10-03 20:33:43.021+03:30', NULL, NULL, 'wildlife-rehabilitation', 'Wildlife Rehabilitation');
INSERT INTO "public"."skills" VALUES (270, 't', '2022-10-03 20:33:43.023+03:30', '2022-10-03 20:33:43.023+03:30', NULL, NULL, 'wills', 'Wills');
INSERT INTO "public"."skills" VALUES (271, 't', '2022-10-03 20:33:43.026+03:30', '2022-10-03 20:33:43.026+03:30', NULL, NULL, 'wily-introscope', 'Wily Introscope');
INSERT INTO "public"."skills" VALUES (272, 't', '2022-10-03 20:33:43.029+03:30', '2022-10-03 20:33:43.029+03:30', NULL, NULL, 'wimax', 'WiMAX');
INSERT INTO "public"."skills" VALUES (273, 't', '2022-10-03 20:33:43.032+03:30', '2022-10-03 20:33:43.032+03:30', NULL, NULL, 'wimba', 'Wimba');
INSERT INTO "public"."skills" VALUES (274, 't', '2022-10-03 20:33:43.035+03:30', '2022-10-03 20:33:43.035+03:30', NULL, NULL, 'win32-api', 'Win32 API');
INSERT INTO "public"."skills" VALUES (275, 't', '2022-10-03 20:33:43.038+03:30', '2022-10-03 20:33:43.039+03:30', NULL, NULL, 'wind', 'Wind');
INSERT INTO "public"."skills" VALUES (276, 't', '2022-10-03 20:33:43.041+03:30', '2022-10-03 20:33:43.042+03:30', NULL, NULL, 'windows', 'Windows');
INSERT INTO "public"."skills" VALUES (277, 't', '2022-10-03 20:33:43.045+03:30', '2022-10-03 20:33:43.045+03:30', NULL, NULL, 'windows-7', 'Windows 7');
INSERT INTO "public"."skills" VALUES (278, 't', '2022-10-03 20:33:43.048+03:30', '2022-10-03 20:33:43.049+03:30', NULL, NULL, 'windows-7-migration', 'Windows 7 Migration');
INSERT INTO "public"."skills" VALUES (279, 't', '2022-10-03 20:33:43.051+03:30', '2022-10-03 20:33:43.052+03:30', NULL, NULL, 'windows-8', 'Windows 8');
INSERT INTO "public"."skills" VALUES (280, 't', '2022-10-03 20:33:43.054+03:30', '2022-10-03 20:33:43.055+03:30', NULL, NULL, 'windows-azure', 'Windows Azure');
INSERT INTO "public"."skills" VALUES (281, 't', '2022-10-03 20:33:43.057+03:30', '2022-10-03 20:33:43.058+03:30', NULL, NULL, 'windows-batch', 'Windows Batch');
INSERT INTO "public"."skills" VALUES (282, 't', '2022-10-03 20:33:43.06+03:30', '2022-10-03 20:33:43.061+03:30', NULL, NULL, 'windows-domain', 'Windows Domain');
INSERT INTO "public"."skills" VALUES (283, 't', '2022-10-03 20:33:43.063+03:30', '2022-10-03 20:33:43.063+03:30', NULL, NULL, 'windows-embedded', 'Windows Embedded');
INSERT INTO "public"."skills" VALUES (284, 't', '2022-10-03 20:33:43.066+03:30', '2022-10-03 20:33:43.066+03:30', NULL, NULL, 'windows-kernel-programming', 'Windows kernel programming');
INSERT INTO "public"."skills" VALUES (285, 't', '2022-10-03 20:33:43.069+03:30', '2022-10-03 20:33:43.069+03:30', NULL, NULL, 'windows-live-movie-maker', 'Windows Live Movie Maker');
INSERT INTO "public"."skills" VALUES (286, 't', '2022-10-03 20:33:43.071+03:30', '2022-10-03 20:33:43.072+03:30', NULL, NULL, 'windows-media-encoder', 'Windows Media Encoder');
INSERT INTO "public"."skills" VALUES (287, 't', '2022-10-03 20:33:43.074+03:30', '2022-10-03 20:33:43.075+03:30', NULL, NULL, 'windows-mobile', 'Windows Mobile');
INSERT INTO "public"."skills" VALUES (288, 't', '2022-10-03 20:33:43.077+03:30', '2022-10-03 20:33:43.077+03:30', NULL, NULL, 'windows-movie-maker', 'Windows Movie Maker');
INSERT INTO "public"."skills" VALUES (289, 't', '2022-10-03 20:33:43.08+03:30', '2022-10-03 20:33:43.08+03:30', NULL, NULL, 'windows-phone', 'Windows Phone');
INSERT INTO "public"."skills" VALUES (290, 't', '2022-10-03 20:33:43.083+03:30', '2022-10-03 20:33:43.083+03:30', NULL, NULL, 'windows-server', 'Windows Server');
INSERT INTO "public"."skills" VALUES (291, 't', '2022-10-03 20:33:43.085+03:30', '2022-10-03 20:33:43.086+03:30', NULL, NULL, 'windows-sharepoint-services', 'Windows Sharepoint Services');
INSERT INTO "public"."skills" VALUES (292, 't', '2022-10-03 20:33:43.088+03:30', '2022-10-03 20:33:43.089+03:30', NULL, NULL, 'windows-vista', 'Windows Vista');
INSERT INTO "public"."skills" VALUES (293, 't', '2022-10-03 20:33:43.091+03:30', '2022-10-03 20:33:43.091+03:30', NULL, NULL, 'windows-xp', 'Windows XP');
INSERT INTO "public"."skills" VALUES (294, 't', '2022-10-03 20:33:43.094+03:30', '2022-10-03 20:33:43.094+03:30', NULL, NULL, 'window-cleaning', 'Window Cleaning');
INSERT INTO "public"."skills" VALUES (295, 't', '2022-10-03 20:33:43.097+03:30', '2022-10-03 20:33:43.097+03:30', NULL, NULL, 'window-coverings', 'Window Coverings');
INSERT INTO "public"."skills" VALUES (296, 't', '2022-10-03 20:33:43.1+03:30', '2022-10-03 20:33:43.1+03:30', NULL, NULL, 'window-displays', 'Window Displays');
INSERT INTO "public"."skills" VALUES (297, 't', '2022-10-03 20:33:43.103+03:30', '2022-10-03 20:33:43.103+03:30', NULL, NULL, 'window-dressing', 'Window Dressing');
INSERT INTO "public"."skills" VALUES (298, 't', '2022-10-03 20:33:43.106+03:30', '2022-10-03 20:33:43.106+03:30', NULL, NULL, 'window-treatments', 'Window Treatments');
INSERT INTO "public"."skills" VALUES (299, 't', '2022-10-03 20:33:43.109+03:30', '2022-10-03 20:33:43.109+03:30', NULL, NULL, 'wind-energy', 'Wind Energy');
INSERT INTO "public"."skills" VALUES (300, 't', '2022-10-03 20:33:43.111+03:30', '2022-10-03 20:33:43.112+03:30', NULL, NULL, 'wind-mitigation', 'Wind Mitigation');
INSERT INTO "public"."skills" VALUES (301, 't', '2022-10-03 20:33:43.114+03:30', '2022-10-03 20:33:43.114+03:30', NULL, NULL, 'wind-tunnel', 'Wind Tunnel');
INSERT INTO "public"."skills" VALUES (302, 't', '2022-10-03 20:33:43.116+03:30', '2022-10-03 20:33:43.117+03:30', NULL, NULL, 'wind-tunnel-testing', 'Wind Tunnel Testing');
INSERT INTO "public"."skills" VALUES (303, 't', '2022-10-03 20:33:43.12+03:30', '2022-10-03 20:33:43.12+03:30', NULL, NULL, 'wind-turbines', 'Wind Turbines');
INSERT INTO "public"."skills" VALUES (304, 't', '2022-10-03 20:33:43.123+03:30', '2022-10-03 20:33:43.123+03:30', NULL, NULL, 'wine', 'Wine');
INSERT INTO "public"."skills" VALUES (305, 't', '2022-10-03 20:33:43.126+03:30', '2022-10-03 20:33:43.127+03:30', NULL, NULL, 'winemaking', 'Winemaking');
INSERT INTO "public"."skills" VALUES (306, 't', '2022-10-03 20:33:43.13+03:30', '2022-10-03 20:33:43.13+03:30', NULL, NULL, 'wineries', 'Wineries');
INSERT INTO "public"."skills" VALUES (307, 't', '2022-10-03 20:33:43.133+03:30', '2022-10-03 20:33:43.133+03:30', NULL, NULL, 'wine-andamp-spirits-industry', 'Wine &amp; Spirits Industry');
INSERT INTO "public"."skills" VALUES (308, 't', '2022-10-03 20:33:43.136+03:30', '2022-10-03 20:33:43.137+03:30', NULL, NULL, 'wine-cellars', 'Wine Cellars');
INSERT INTO "public"."skills" VALUES (309, 't', '2022-10-03 20:33:43.139+03:30', '2022-10-03 20:33:43.14+03:30', NULL, NULL, 'wine-lists', 'Wine Lists');
INSERT INTO "public"."skills" VALUES (310, 't', '2022-10-03 20:33:43.143+03:30', '2022-10-03 20:33:43.144+03:30', NULL, NULL, 'wine-tasting', 'Wine Tasting');
INSERT INTO "public"."skills" VALUES (311, 't', '2022-10-03 20:33:43.146+03:30', '2022-10-03 20:33:43.147+03:30', NULL, NULL, 'wine-tours', 'Wine Tours');
INSERT INTO "public"."skills" VALUES (312, 't', '2022-10-03 20:33:43.15+03:30', '2022-10-03 20:33:43.15+03:30', NULL, NULL, 'winforms', 'WinForms');
INSERT INTO "public"."skills" VALUES (313, 't', '2022-10-03 20:33:43.153+03:30', '2022-10-03 20:33:43.153+03:30', NULL, NULL, 'wing-chun', 'Wing Chun');
INSERT INTO "public"."skills" VALUES (314, 't', '2022-10-03 20:33:43.156+03:30', '2022-10-03 20:33:43.157+03:30', NULL, NULL, 'winning-others-over', 'Winning Others Over');
INSERT INTO "public"."skills" VALUES (315, 't', '2022-10-03 20:33:43.159+03:30', '2022-10-03 20:33:43.16+03:30', NULL, NULL, 'win-win', 'Win-win');
INSERT INTO "public"."skills" VALUES (316, 't', '2022-10-03 20:33:43.162+03:30', '2022-10-03 20:33:43.163+03:30', NULL, NULL, 'win-cvs', 'Win CVS');
INSERT INTO "public"."skills" VALUES (317, 't', '2022-10-03 20:33:43.166+03:30', '2022-10-03 20:33:43.166+03:30', NULL, NULL, 'wip', 'WIP');
INSERT INTO "public"."skills" VALUES (318, 't', '2022-10-03 20:33:43.169+03:30', '2022-10-03 20:33:43.169+03:30', NULL, NULL, 'wipo', 'WIPO');
INSERT INTO "public"."skills" VALUES (319, 't', '2022-10-03 20:33:43.172+03:30', '2022-10-03 20:33:43.173+03:30', NULL, NULL, 'wips', 'WIPS');
INSERT INTO "public"."skills" VALUES (320, 't', '2022-10-03 20:33:43.176+03:30', '2022-10-03 20:33:43.176+03:30', NULL, NULL, 'wireframes', 'Wireframes');
INSERT INTO "public"."skills" VALUES (321, 't', '2022-10-03 20:33:43.179+03:30', '2022-10-03 20:33:43.18+03:30', NULL, NULL, 'wireless', 'Wireless');
INSERT INTO "public"."skills" VALUES (322, 't', '2022-10-03 20:33:43.182+03:30', '2022-10-03 20:33:43.183+03:30', NULL, NULL, 'wireless-access', 'Wireless Access');
INSERT INTO "public"."skills" VALUES (323, 't', '2022-10-03 20:33:43.185+03:30', '2022-10-03 20:33:43.186+03:30', NULL, NULL, 'wireless-broadband', 'Wireless Broadband');
INSERT INTO "public"."skills" VALUES (324, 't', '2022-10-03 20:33:43.189+03:30', '2022-10-03 20:33:43.189+03:30', NULL, NULL, 'wireless-communications-systems', 'Wireless Communications Systems');
INSERT INTO "public"."skills" VALUES (325, 't', '2022-10-03 20:33:43.192+03:30', '2022-10-03 20:33:43.192+03:30', NULL, NULL, 'wireless-mesh', 'Wireless Mesh');
INSERT INTO "public"."skills" VALUES (326, 't', '2022-10-03 20:33:43.194+03:30', '2022-10-03 20:33:43.195+03:30', NULL, NULL, 'wireless-networking', 'Wireless Networking');
INSERT INTO "public"."skills" VALUES (327, 't', '2022-10-03 20:33:43.197+03:30', '2022-10-03 20:33:43.198+03:30', NULL, NULL, 'wireless-routers', 'Wireless Routers');
INSERT INTO "public"."skills" VALUES (328, 't', '2022-10-03 20:33:43.201+03:30', '2022-10-03 20:33:43.201+03:30', NULL, NULL, 'wireless-security', 'Wireless Security');
INSERT INTO "public"."skills" VALUES (329, 't', '2022-10-03 20:33:43.204+03:30', '2022-10-03 20:33:43.204+03:30', NULL, NULL, 'wireless-sensor-networks', 'Wireless Sensor Networks');
INSERT INTO "public"."skills" VALUES (330, 't', '2022-10-03 20:33:43.207+03:30', '2022-10-03 20:33:43.208+03:30', NULL, NULL, 'wireless-usb', 'Wireless USB');
INSERT INTO "public"."skills" VALUES (331, 't', '2022-10-03 20:33:43.21+03:30', '2022-10-03 20:33:43.211+03:30', NULL, NULL, 'wireline', 'Wireline');
INSERT INTO "public"."skills" VALUES (332, 't', '2022-10-03 20:33:43.213+03:30', '2022-10-03 20:33:43.214+03:30', NULL, NULL, 'wireshark', 'Wireshark');
INSERT INTO "public"."skills" VALUES (333, 't', '2022-10-03 20:33:43.217+03:30', '2022-10-03 20:33:43.217+03:30', NULL, NULL, 'wire-bonding', 'Wire Bonding');
INSERT INTO "public"."skills" VALUES (334, 't', '2022-10-03 20:33:43.22+03:30', '2022-10-03 20:33:43.221+03:30', NULL, NULL, 'wire-edm', 'Wire EDM');
INSERT INTO "public"."skills" VALUES (335, 't', '2022-10-03 20:33:43.224+03:30', '2022-10-03 20:33:43.225+03:30', NULL, NULL, 'wire-framing', 'Wire Framing');
INSERT INTO "public"."skills" VALUES (336, 't', '2022-10-03 20:33:43.227+03:30', '2022-10-03 20:33:43.228+03:30', NULL, NULL, 'wire-line', 'Wire Line');
INSERT INTO "public"."skills" VALUES (337, 't', '2022-10-03 20:33:43.231+03:30', '2022-10-03 20:33:43.232+03:30', NULL, NULL, 'wire-transfers', 'Wire Transfers');
INSERT INTO "public"."skills" VALUES (338, 't', '2022-10-03 20:33:43.235+03:30', '2022-10-03 20:33:43.235+03:30', NULL, NULL, 'wire-wrapping', 'Wire Wrapping');
INSERT INTO "public"."skills" VALUES (339, 't', '2022-10-03 20:33:43.238+03:30', '2022-10-03 20:33:43.239+03:30', NULL, NULL, 'wiring', 'Wiring');
INSERT INTO "public"."skills" VALUES (340, 't', '2022-10-03 20:33:43.241+03:30', '2022-10-03 20:33:43.242+03:30', NULL, NULL, 'wiring-diagrams', 'Wiring Diagrams');
INSERT INTO "public"."skills" VALUES (341, 't', '2022-10-03 20:33:43.245+03:30', '2022-10-03 20:33:43.245+03:30', NULL, NULL, 'wisdom-teeth', 'Wisdom Teeth');
INSERT INTO "public"."skills" VALUES (342, 't', '2022-10-03 20:33:43.248+03:30', '2022-10-03 20:33:43.249+03:30', NULL, NULL, 'wise-installer', 'Wise Installer');
INSERT INTO "public"."skills" VALUES (343, 't', '2022-10-03 20:33:43.251+03:30', '2022-10-03 20:33:43.252+03:30', NULL, NULL, 'wise-packaging', 'Wise Packaging');
INSERT INTO "public"."skills" VALUES (344, 't', '2022-10-03 20:33:43.255+03:30', '2022-10-03 20:33:43.255+03:30', NULL, NULL, 'wise-packaging-studio', 'Wise Packaging Studio');
INSERT INTO "public"."skills" VALUES (345, 't', '2022-10-03 20:33:43.258+03:30', '2022-10-03 20:33:43.259+03:30', NULL, NULL, 'wisp', 'WISP');
INSERT INTO "public"."skills" VALUES (346, 't', '2022-10-03 20:33:43.261+03:30', '2022-10-03 20:33:43.262+03:30', NULL, NULL, 'wit', 'Wit');
INSERT INTO "public"."skills" VALUES (347, 't', '2022-10-03 20:33:43.265+03:30', '2022-10-03 20:33:43.265+03:30', NULL, NULL, 'witchcraft', 'Witchcraft');
INSERT INTO "public"."skills" VALUES (348, 't', '2022-10-03 20:33:43.268+03:30', '2022-10-03 20:33:43.268+03:30', NULL, NULL, 'withdrawals', 'Withdrawals');
INSERT INTO "public"."skills" VALUES (349, 't', '2022-10-03 20:33:43.271+03:30', '2022-10-03 20:33:43.272+03:30', NULL, NULL, 'withholding', 'Withholding');
INSERT INTO "public"."skills" VALUES (350, 't', '2022-10-03 20:33:43.274+03:30', '2022-10-03 20:33:43.275+03:30', NULL, NULL, 'witness-location', 'Witness Location');
INSERT INTO "public"."skills" VALUES (351, 't', '2022-10-03 20:33:43.277+03:30', '2022-10-03 20:33:43.278+03:30', NULL, NULL, 'witness-statements', 'Witness Statements');
INSERT INTO "public"."skills" VALUES (352, 't', '2022-10-03 20:33:43.281+03:30', '2022-10-03 20:33:43.281+03:30', NULL, NULL, 'wix', 'WiX');
INSERT INTO "public"."skills" VALUES (353, 't', '2022-10-03 20:33:43.284+03:30', '2022-10-03 20:33:43.285+03:30', NULL, NULL, 'wizard', 'Wizard');
INSERT INTO "public"."skills" VALUES (354, 't', '2022-10-03 20:33:43.288+03:30', '2022-10-03 20:33:43.288+03:30', NULL, NULL, 'wlan', 'WLAN');
INSERT INTO "public"."skills" VALUES (355, 't', '2022-10-03 20:33:43.291+03:30', '2022-10-03 20:33:43.292+03:30', NULL, NULL, 'wli', 'WLI');
INSERT INTO "public"."skills" VALUES (356, 't', '2022-10-03 20:33:43.295+03:30', '2022-10-03 20:33:43.295+03:30', NULL, NULL, 'wll', 'WLL');
INSERT INTO "public"."skills" VALUES (357, 't', '2022-10-03 20:33:43.298+03:30', '2022-10-03 20:33:43.298+03:30', NULL, NULL, 'wlm', 'WLM');
INSERT INTO "public"."skills" VALUES (358, 't', '2022-10-03 20:33:43.301+03:30', '2022-10-03 20:33:43.302+03:30', NULL, NULL, 'wlr3', 'WLR3');
INSERT INTO "public"."skills" VALUES (359, 't', '2022-10-03 20:33:43.304+03:30', '2022-10-03 20:33:43.305+03:30', NULL, NULL, 'wlst', 'WLST');
INSERT INTO "public"."skills" VALUES (360, 't', '2022-10-03 20:33:43.308+03:30', '2022-10-03 20:33:43.308+03:30', NULL, NULL, 'wmi', 'WMI');
INSERT INTO "public"."skills" VALUES (361, 't', '2022-10-03 20:33:43.311+03:30', '2022-10-03 20:33:43.311+03:30', NULL, NULL, 'wml', 'WML');
INSERT INTO "public"."skills" VALUES (362, 't', '2022-10-03 20:33:43.314+03:30', '2022-10-03 20:33:43.314+03:30', NULL, NULL, 'wmos', 'WMOS');
INSERT INTO "public"."skills" VALUES (363, 't', '2022-10-03 20:33:43.317+03:30', '2022-10-03 20:33:43.318+03:30', NULL, NULL, 'wms-implementations', 'WMS Implementations');
INSERT INTO "public"."skills" VALUES (364, 't', '2022-10-03 20:33:43.32+03:30', '2022-10-03 20:33:43.321+03:30', NULL, NULL, 'woa', 'WOA');
INSERT INTO "public"."skills" VALUES (365, 't', '2022-10-03 20:33:43.323+03:30', '2022-10-03 20:33:43.324+03:30', NULL, NULL, 'wolf', 'Wolf');
INSERT INTO "public"."skills" VALUES (366, 't', '2022-10-03 20:33:43.326+03:30', '2022-10-03 20:33:43.327+03:30', NULL, NULL, 'wolof', 'Wolof');
INSERT INTO "public"."skills" VALUES (367, 't', '2022-10-03 20:33:43.33+03:30', '2022-10-03 20:33:43.33+03:30', NULL, NULL, 'wombat', 'Wombat');
INSERT INTO "public"."skills" VALUES (368, 't', '2022-10-03 20:33:43.333+03:30', '2022-10-03 20:33:43.333+03:30', NULL, NULL, 'womenand39s-health', 'Women&#39;s Health');
INSERT INTO "public"."skills" VALUES (369, 't', '2022-10-03 20:33:43.336+03:30', '2022-10-03 20:33:43.336+03:30', NULL, NULL, 'womenand39s-issues', 'Women&#39;s Issues');
INSERT INTO "public"."skills" VALUES (370, 't', '2022-10-03 20:33:43.339+03:30', '2022-10-03 20:33:43.34+03:30', NULL, NULL, 'womenand39s-leadership', 'Women&#39;s Leadership');
INSERT INTO "public"."skills" VALUES (371, 't', '2022-10-03 20:33:43.342+03:30', '2022-10-03 20:33:43.343+03:30', NULL, NULL, 'womenand39s-ministry', 'Women&#39;s Ministry');
INSERT INTO "public"."skills" VALUES (372, 't', '2022-10-03 20:33:43.345+03:30', '2022-10-03 20:33:43.346+03:30', NULL, NULL, 'womenand39s-rights', 'Women&#39;s Rights');
INSERT INTO "public"."skills" VALUES (373, 't', '2022-10-03 20:33:43.349+03:30', '2022-10-03 20:33:43.349+03:30', NULL, NULL, 'womenand39s-studies', 'Women&#39;s Studies');
INSERT INTO "public"."skills" VALUES (374, 't', '2022-10-03 20:33:43.351+03:30', '2022-10-03 20:33:43.352+03:30', NULL, NULL, 'women-leaders', 'Women Leaders');
INSERT INTO "public"."skills" VALUES (375, 't', '2022-10-03 20:33:43.354+03:30', '2022-10-03 20:33:43.355+03:30', NULL, NULL, 'women-owned-business', 'Women Owned Business');
INSERT INTO "public"."skills" VALUES (376, 't', '2022-10-03 20:33:43.357+03:30', '2022-10-03 20:33:43.358+03:30', NULL, NULL, 'wonderware', 'Wonderware');
INSERT INTO "public"."skills" VALUES (377, 't', '2022-10-03 20:33:43.36+03:30', '2022-10-03 20:33:43.361+03:30', NULL, NULL, 'wood', 'Wood');
INSERT INTO "public"."skills" VALUES (378, 't', '2022-10-03 20:33:43.363+03:30', '2022-10-03 20:33:43.363+03:30', NULL, NULL, 'woodcut', 'Woodcut');
INSERT INTO "public"."skills" VALUES (379, 't', '2022-10-03 20:33:43.365+03:30', '2022-10-03 20:33:43.365+03:30', NULL, NULL, 'woodland-management', 'Woodland Management');
INSERT INTO "public"."skills" VALUES (380, 't', '2022-10-03 20:33:43.367+03:30', '2022-10-03 20:33:43.367+03:30', NULL, NULL, 'woodwind', 'Woodwind');
INSERT INTO "public"."skills" VALUES (381, 't', '2022-10-03 20:33:43.369+03:30', '2022-10-03 20:33:43.369+03:30', NULL, NULL, 'woodworking', 'Woodworking');
INSERT INTO "public"."skills" VALUES (382, 't', '2022-10-03 20:33:43.371+03:30', '2022-10-03 20:33:43.371+03:30', NULL, NULL, 'wood-carving', 'Wood Carving');
INSERT INTO "public"."skills" VALUES (383, 't', '2022-10-03 20:33:43.374+03:30', '2022-10-03 20:33:43.374+03:30', NULL, NULL, 'wood-graining', 'Wood Graining');
INSERT INTO "public"."skills" VALUES (384, 't', '2022-10-03 20:33:43.377+03:30', '2022-10-03 20:33:43.377+03:30', NULL, NULL, 'wood-shop', 'Wood Shop');
INSERT INTO "public"."skills" VALUES (385, 't', '2022-10-03 20:33:43.38+03:30', '2022-10-03 20:33:43.381+03:30', NULL, NULL, 'wood-turning', 'Wood Turning');
INSERT INTO "public"."skills" VALUES (386, 't', '2022-10-03 20:33:43.383+03:30', '2022-10-03 20:33:43.384+03:30', NULL, NULL, 'wool', 'Wool');
INSERT INTO "public"."skills" VALUES (387, 't', '2022-10-03 20:33:43.387+03:30', '2022-10-03 20:33:43.387+03:30', NULL, NULL, 'wordperfect', 'WordPerfect');
INSERT INTO "public"."skills" VALUES (388, 't', '2022-10-03 20:33:43.39+03:30', '2022-10-03 20:33:43.391+03:30', NULL, NULL, 'wordpress', 'WordPress');
INSERT INTO "public"."skills" VALUES (389, 't', '2022-10-03 20:33:43.399+03:30', '2022-10-03 20:33:43.4+03:30', NULL, NULL, 'word-of-mouth', 'Word Of Mouth');
INSERT INTO "public"."skills" VALUES (390, 't', '2022-10-03 20:33:43.403+03:30', '2022-10-03 20:33:43.403+03:30', NULL, NULL, 'word-of-mouth-marketing', 'Word Of Mouth Marketing');
INSERT INTO "public"."skills" VALUES (391, 't', '2022-10-03 20:33:43.407+03:30', '2022-10-03 20:33:43.407+03:30', NULL, NULL, 'workersand39-compensation-claims', 'Workers&#39; Compensation Claims');
INSERT INTO "public"."skills" VALUES (392, 't', '2022-10-03 20:33:43.41+03:30', '2022-10-03 20:33:43.411+03:30', NULL, NULL, 'workers-compensation', 'Workers Compensation');
INSERT INTO "public"."skills" VALUES (393, 't', '2022-10-03 20:33:43.413+03:30', '2022-10-03 20:33:43.414+03:30', NULL, NULL, 'workforce-development', 'Workforce Development');
INSERT INTO "public"."skills" VALUES (394, 't', '2022-10-03 20:33:43.416+03:30', '2022-10-03 20:33:43.417+03:30', NULL, NULL, 'workforce-management', 'Workforce Management');
INSERT INTO "public"."skills" VALUES (395, 't', '2022-10-03 20:33:43.42+03:30', '2022-10-03 20:33:43.42+03:30', NULL, NULL, 'workforce-planning', 'Workforce Planning');
INSERT INTO "public"."skills" VALUES (507, 't', '2022-10-03 20:33:43.722+03:30', '2022-10-03 20:33:43.723+03:30', NULL, NULL, 'xhtml', 'XHTML');
INSERT INTO "public"."skills" VALUES (396, 't', '2022-10-03 20:33:43.423+03:30', '2022-10-03 20:33:43.423+03:30', NULL, NULL, 'working-abroad', 'Working Abroad');
INSERT INTO "public"."skills" VALUES (397, 't', '2022-10-03 20:33:43.427+03:30', '2022-10-03 20:33:43.428+03:30', NULL, NULL, 'working-at-height', 'Working at Height');
INSERT INTO "public"."skills" VALUES (398, 't', '2022-10-03 20:33:43.43+03:30', '2022-10-03 20:33:43.431+03:30', NULL, NULL, 'working-capital-management', 'Working Capital Management');
INSERT INTO "public"."skills" VALUES (399, 't', '2022-10-03 20:33:43.434+03:30', '2022-10-03 20:33:43.435+03:30', NULL, NULL, 'working-with-children', 'Working With Children');
INSERT INTO "public"."skills" VALUES (400, 't', '2022-10-03 20:33:43.437+03:30', '2022-10-03 20:33:43.438+03:30', NULL, NULL, 'working-with-clients', 'Working With Clients');
INSERT INTO "public"."skills" VALUES (401, 't', '2022-10-03 20:33:43.441+03:30', '2022-10-03 20:33:43.441+03:30', NULL, NULL, 'workplace-giving', 'Workplace Giving');
INSERT INTO "public"."skills" VALUES (402, 't', '2022-10-03 20:33:43.445+03:30', '2022-10-03 20:33:43.445+03:30', NULL, NULL, 'workplace-safety', 'Workplace Safety');
INSERT INTO "public"."skills" VALUES (403, 't', '2022-10-03 20:33:43.447+03:30', '2022-10-03 20:33:43.448+03:30', NULL, NULL, 'workplace-violence', 'Workplace Violence');
INSERT INTO "public"."skills" VALUES (404, 't', '2022-10-03 20:33:43.45+03:30', '2022-10-03 20:33:43.45+03:30', NULL, NULL, 'workshops', 'Workshops');
INSERT INTO "public"."skills" VALUES (405, 't', '2022-10-03 20:33:43.453+03:30', '2022-10-03 20:33:43.453+03:30', NULL, NULL, 'workshop-facilitation', 'Workshop Facilitation');
INSERT INTO "public"."skills" VALUES (406, 't', '2022-10-03 20:33:43.455+03:30', '2022-10-03 20:33:43.456+03:30', NULL, NULL, 'work-at-height', 'Work at Height');
INSERT INTO "public"."skills" VALUES (407, 't', '2022-10-03 20:33:43.458+03:30', '2022-10-03 20:33:43.459+03:30', NULL, NULL, 'work-effectively', 'Work Effectively');
INSERT INTO "public"."skills" VALUES (408, 't', '2022-10-03 20:33:43.461+03:30', '2022-10-03 20:33:43.462+03:30', NULL, NULL, 'work-in-unison-with-staff', 'Work in Unison with Staff');
INSERT INTO "public"."skills" VALUES (409, 't', '2022-10-03 20:33:43.463+03:30', '2022-10-03 20:33:43.464+03:30', NULL, NULL, 'work-life-balance', 'Work Life Balance');
INSERT INTO "public"."skills" VALUES (410, 't', '2022-10-03 20:33:43.465+03:30', '2022-10-03 20:33:43.466+03:30', NULL, NULL, 'work-orders', 'Work Orders');
INSERT INTO "public"."skills" VALUES (411, 't', '2022-10-03 20:33:43.467+03:30', '2022-10-03 20:33:43.468+03:30', NULL, NULL, 'work-under-minimal-supervision', 'Work Under Minimal Supervision');
INSERT INTO "public"."skills" VALUES (412, 't', '2022-10-03 20:33:43.469+03:30', '2022-10-03 20:33:43.47+03:30', NULL, NULL, 'work-very-well-with-others', 'Work Very Well with Others');
INSERT INTO "public"."skills" VALUES (413, 't', '2022-10-03 20:33:43.471+03:30', '2022-10-03 20:33:43.472+03:30', NULL, NULL, 'world-cafe', 'World Cafe');
INSERT INTO "public"."skills" VALUES (414, 't', '2022-10-03 20:33:43.475+03:30', '2022-10-03 20:33:43.476+03:30', NULL, NULL, 'world-cinema', 'World Cinema');
INSERT INTO "public"."skills" VALUES (415, 't', '2022-10-03 20:33:43.477+03:30', '2022-10-03 20:33:43.478+03:30', NULL, NULL, 'world-history', 'World History');
INSERT INTO "public"."skills" VALUES (416, 't', '2022-10-03 20:33:43.479+03:30', '2022-10-03 20:33:43.48+03:30', NULL, NULL, 'wotc', 'WOTC');
INSERT INTO "public"."skills" VALUES (417, 't', '2022-10-03 20:33:43.481+03:30', '2022-10-03 20:33:43.482+03:30', NULL, NULL, 'wound-care', 'Wound Care');
INSERT INTO "public"."skills" VALUES (418, 't', '2022-10-03 20:33:43.483+03:30', '2022-10-03 20:33:43.484+03:30', NULL, NULL, 'wovens', 'Wovens');
INSERT INTO "public"."skills" VALUES (419, 't', '2022-10-03 20:33:43.485+03:30', '2022-10-03 20:33:43.486+03:30', NULL, NULL, 'wowza', 'Wowza');
INSERT INTO "public"."skills" VALUES (420, 't', '2022-10-03 20:33:43.488+03:30', '2022-10-03 20:33:43.489+03:30', NULL, NULL, 'wpa', 'WPA');
INSERT INTO "public"."skills" VALUES (421, 't', '2022-10-03 20:33:43.491+03:30', '2022-10-03 20:33:43.491+03:30', NULL, NULL, 'wpc', 'WPC');
INSERT INTO "public"."skills" VALUES (422, 't', '2022-10-03 20:33:43.493+03:30', '2022-10-03 20:33:43.494+03:30', NULL, NULL, 'wpf', 'WPF');
INSERT INTO "public"."skills" VALUES (423, 't', '2022-10-03 20:33:43.495+03:30', '2022-10-03 20:33:43.496+03:30', NULL, NULL, 'wpf-development', 'WPF Development');
INSERT INTO "public"."skills" VALUES (424, 't', '2022-10-03 20:33:43.497+03:30', '2022-10-03 20:33:43.498+03:30', NULL, NULL, 'wps', 'WPS');
INSERT INTO "public"."skills" VALUES (425, 't', '2022-10-03 20:33:43.5+03:30', '2022-10-03 20:33:43.5+03:30', NULL, NULL, 'wrap', 'WRAP');
INSERT INTO "public"."skills" VALUES (426, 't', '2022-10-03 20:33:43.503+03:30', '2022-10-03 20:33:43.503+03:30', NULL, NULL, 'wraparound', 'Wraparound');
INSERT INTO "public"."skills" VALUES (427, 't', '2022-10-03 20:33:43.505+03:30', '2022-10-03 20:33:43.506+03:30', NULL, NULL, 'wrapping', 'Wrapping');
INSERT INTO "public"."skills" VALUES (428, 't', '2022-10-03 20:33:43.508+03:30', '2022-10-03 20:33:43.508+03:30', NULL, NULL, 'wraps', 'Wraps');
INSERT INTO "public"."skills" VALUES (429, 't', '2022-10-03 20:33:43.51+03:30', '2022-10-03 20:33:43.511+03:30', NULL, NULL, 'wrap-accounts', 'Wrap Accounts');
INSERT INTO "public"."skills" VALUES (430, 't', '2022-10-03 20:33:43.513+03:30', '2022-10-03 20:33:43.513+03:30', NULL, NULL, 'wrds', 'WRDS');
INSERT INTO "public"."skills" VALUES (431, 't', '2022-10-03 20:33:43.515+03:30', '2022-10-03 20:33:43.516+03:30', NULL, NULL, 'wrestling', 'Wrestling');
INSERT INTO "public"."skills" VALUES (432, 't', '2022-10-03 20:33:43.518+03:30', '2022-10-03 20:33:43.518+03:30', NULL, NULL, 'wrestling-coaching', 'Wrestling Coaching');
INSERT INTO "public"."skills" VALUES (433, 't', '2022-10-03 20:33:43.521+03:30', '2022-10-03 20:33:43.522+03:30', NULL, NULL, 'wrf', 'WRF');
INSERT INTO "public"."skills" VALUES (434, 't', '2022-10-03 20:33:43.524+03:30', '2022-10-03 20:33:43.525+03:30', NULL, NULL, 'write-ups', 'Write-ups');
INSERT INTO "public"."skills" VALUES (435, 't', '2022-10-03 20:33:43.527+03:30', '2022-10-03 20:33:43.527+03:30', NULL, NULL, 'writing', 'Writing');
INSERT INTO "public"."skills" VALUES (436, 't', '2022-10-03 20:33:43.529+03:30', '2022-10-03 20:33:43.53+03:30', NULL, NULL, 'wrongful-death', 'Wrongful Death');
INSERT INTO "public"."skills" VALUES (437, 't', '2022-10-03 20:33:43.532+03:30', '2022-10-03 20:33:43.532+03:30', NULL, NULL, 'wrt', 'WRT');
INSERT INTO "public"."skills" VALUES (438, 't', '2022-10-03 20:33:43.534+03:30', '2022-10-03 20:33:43.535+03:30', NULL, NULL, 'wsad', 'WSAD');
INSERT INTO "public"."skills" VALUES (439, 't', '2022-10-03 20:33:43.536+03:30', '2022-10-03 20:33:43.537+03:30', NULL, NULL, 'wsdl', 'WSDL');
INSERT INTO "public"."skills" VALUES (440, 't', '2022-10-03 20:33:43.538+03:30', '2022-10-03 20:33:43.539+03:30', NULL, NULL, 'wse', 'WSE');
INSERT INTO "public"."skills" VALUES (441, 't', '2022-10-03 20:33:43.54+03:30', '2022-10-03 20:33:43.541+03:30', NULL, NULL, 'wsgi', 'WSGI');
INSERT INTO "public"."skills" VALUES (442, 't', '2022-10-03 20:33:43.542+03:30', '2022-10-03 20:33:43.543+03:30', NULL, NULL, 'wsh', 'WSH');
INSERT INTO "public"."skills" VALUES (443, 't', '2022-10-03 20:33:43.544+03:30', '2022-10-03 20:33:43.545+03:30', NULL, NULL, 'wsib', 'WSIB');
INSERT INTO "public"."skills" VALUES (444, 't', '2022-10-03 20:33:43.546+03:30', '2022-10-03 20:33:43.547+03:30', NULL, NULL, 'wsib-claims-management', 'WSIB Claims Management');
INSERT INTO "public"."skills" VALUES (445, 't', '2022-10-03 20:33:43.549+03:30', '2022-10-03 20:33:43.549+03:30', NULL, NULL, 'wspg', 'WSPG');
INSERT INTO "public"."skills" VALUES (446, 't', '2022-10-03 20:33:43.551+03:30', '2022-10-03 20:33:43.551+03:30', NULL, NULL, 'wsrr', 'WSRR');
INSERT INTO "public"."skills" VALUES (447, 't', '2022-10-03 20:33:43.553+03:30', '2022-10-03 20:33:43.553+03:30', NULL, NULL, 'wss-2.0', 'WSS 2.0');
INSERT INTO "public"."skills" VALUES (448, 't', '2022-10-03 20:33:43.555+03:30', '2022-10-03 20:33:43.555+03:30', NULL, NULL, 'wsus', 'WSUS');
INSERT INTO "public"."skills" VALUES (449, 't', '2022-10-03 20:33:43.557+03:30', '2022-10-03 20:33:43.557+03:30', NULL, NULL, 'wtl', 'WTL');
INSERT INTO "public"."skills" VALUES (450, 't', '2022-10-03 20:33:43.559+03:30', '2022-10-03 20:33:43.56+03:30', NULL, NULL, 'wto', 'WTO');
INSERT INTO "public"."skills" VALUES (451, 't', '2022-10-03 20:33:43.561+03:30', '2022-10-03 20:33:43.562+03:30', NULL, NULL, 'wtp', 'WTP');
INSERT INTO "public"."skills" VALUES (452, 't', '2022-10-03 20:33:43.563+03:30', '2022-10-03 20:33:43.564+03:30', NULL, NULL, 'wtt', 'WTT');
INSERT INTO "public"."skills" VALUES (453, 't', '2022-10-03 20:33:43.565+03:30', '2022-10-03 20:33:43.566+03:30', NULL, NULL, 'wtx', 'WTX');
INSERT INTO "public"."skills" VALUES (454, 't', '2022-10-03 20:33:43.567+03:30', '2022-10-03 20:33:43.568+03:30', NULL, NULL, 'wufi', 'WUFI');
INSERT INTO "public"."skills" VALUES (455, 't', '2022-10-03 20:33:43.569+03:30', '2022-10-03 20:33:43.57+03:30', NULL, NULL, 'wufoo', 'Wufoo');
INSERT INTO "public"."skills" VALUES (456, 't', '2022-10-03 20:33:43.571+03:30', '2022-10-03 20:33:43.572+03:30', NULL, NULL, 'wwan', 'WWAN');
INSERT INTO "public"."skills" VALUES (457, 't', '2022-10-03 20:33:43.573+03:30', '2022-10-03 20:33:43.574+03:30', NULL, NULL, 'wwii', 'WWII');
INSERT INTO "public"."skills" VALUES (458, 't', '2022-10-03 20:33:43.575+03:30', '2022-10-03 20:33:43.576+03:30', NULL, NULL, 'wwise', 'Wwise');
INSERT INTO "public"."skills" VALUES (459, 't', '2022-10-03 20:33:43.577+03:30', '2022-10-03 20:33:43.578+03:30', NULL, NULL, 'www', 'Www');
INSERT INTO "public"."skills" VALUES (460, 't', '2022-10-03 20:33:43.58+03:30', '2022-10-03 20:33:43.58+03:30', NULL, NULL, 'wxwidgets', 'wxWidgets');
INSERT INTO "public"."skills" VALUES (461, 't', '2022-10-03 20:33:43.582+03:30', '2022-10-03 20:33:43.582+03:30', NULL, NULL, 'wyse', 'Wyse');
INSERT INTO "public"."skills" VALUES (462, 't', '2022-10-03 20:33:43.585+03:30', '2022-10-03 20:33:43.585+03:30', NULL, NULL, 'wysiwyg-layout-tools', 'WYSIWYG Layout Tools');
INSERT INTO "public"."skills" VALUES (463, 't', '2022-10-03 20:33:43.587+03:30', '2022-10-03 20:33:43.588+03:30', NULL, NULL, 'xaas', 'XaaS');
INSERT INTO "public"."skills" VALUES (464, 't', '2022-10-03 20:33:43.59+03:30', '2022-10-03 20:33:43.591+03:30', NULL, NULL, 'xacml', 'XACML');
INSERT INTO "public"."skills" VALUES (465, 't', '2022-10-03 20:33:43.593+03:30', '2022-10-03 20:33:43.594+03:30', NULL, NULL, 'xact', 'XACT');
INSERT INTO "public"."skills" VALUES (466, 't', '2022-10-03 20:33:43.596+03:30', '2022-10-03 20:33:43.596+03:30', NULL, NULL, 'xactimate', 'Xactimate');
INSERT INTO "public"."skills" VALUES (467, 't', '2022-10-03 20:33:43.598+03:30', '2022-10-03 20:33:43.599+03:30', NULL, NULL, 'xactly', 'Xactly');
INSERT INTO "public"."skills" VALUES (468, 't', '2022-10-03 20:33:43.601+03:30', '2022-10-03 20:33:43.601+03:30', NULL, NULL, 'xactly-incent', 'Xactly Incent');
INSERT INTO "public"."skills" VALUES (469, 't', '2022-10-03 20:33:43.604+03:30', '2022-10-03 20:33:43.604+03:30', NULL, NULL, 'xajax', 'Xajax');
INSERT INTO "public"."skills" VALUES (470, 't', '2022-10-03 20:33:43.607+03:30', '2022-10-03 20:33:43.608+03:30', NULL, NULL, 'xalan', 'Xalan');
INSERT INTO "public"."skills" VALUES (471, 't', '2022-10-03 20:33:43.61+03:30', '2022-10-03 20:33:43.611+03:30', NULL, NULL, 'xaml', 'XAML');
INSERT INTO "public"."skills" VALUES (472, 't', '2022-10-03 20:33:43.613+03:30', '2022-10-03 20:33:43.614+03:30', NULL, NULL, 'xampp', 'XAMPP');
INSERT INTO "public"."skills" VALUES (473, 't', '2022-10-03 20:33:43.616+03:30', '2022-10-03 20:33:43.616+03:30', NULL, NULL, 'xara', 'Xara');
INSERT INTO "public"."skills" VALUES (474, 't', '2022-10-03 20:33:43.618+03:30', '2022-10-03 20:33:43.619+03:30', NULL, NULL, 'xata', 'XATA');
INSERT INTO "public"."skills" VALUES (475, 't', '2022-10-03 20:33:43.62+03:30', '2022-10-03 20:33:43.621+03:30', NULL, NULL, 'xaui', 'XAUI');
INSERT INTO "public"."skills" VALUES (476, 't', '2022-10-03 20:33:43.623+03:30', '2022-10-03 20:33:43.623+03:30', NULL, NULL, 'xbase', 'xBase');
INSERT INTO "public"."skills" VALUES (477, 't', '2022-10-03 20:33:43.625+03:30', '2022-10-03 20:33:43.626+03:30', NULL, NULL, 'xbox', 'Xbox');
INSERT INTO "public"."skills" VALUES (478, 't', '2022-10-03 20:33:43.628+03:30', '2022-10-03 20:33:43.629+03:30', NULL, NULL, 'xbox-360', 'Xbox 360');
INSERT INTO "public"."skills" VALUES (479, 't', '2022-10-03 20:33:43.631+03:30', '2022-10-03 20:33:43.632+03:30', NULL, NULL, 'xbox-one', 'Xbox One');
INSERT INTO "public"."skills" VALUES (480, 't', '2022-10-03 20:33:43.634+03:30', '2022-10-03 20:33:43.635+03:30', NULL, NULL, 'xbr', 'XBR');
INSERT INTO "public"."skills" VALUES (481, 't', '2022-10-03 20:33:43.638+03:30', '2022-10-03 20:33:43.638+03:30', NULL, NULL, 'xbrl', 'XBRL');
INSERT INTO "public"."skills" VALUES (482, 't', '2022-10-03 20:33:43.641+03:30', '2022-10-03 20:33:43.642+03:30', NULL, NULL, 'xcal', 'XCAL');
INSERT INTO "public"."skills" VALUES (483, 't', '2022-10-03 20:33:43.644+03:30', '2022-10-03 20:33:43.645+03:30', NULL, NULL, 'xcalibur', 'Xcalibur');
INSERT INTO "public"."skills" VALUES (484, 't', '2022-10-03 20:33:43.648+03:30', '2022-10-03 20:33:43.648+03:30', NULL, NULL, 'xcap', 'XCAP');
INSERT INTO "public"."skills" VALUES (485, 't', '2022-10-03 20:33:43.651+03:30', '2022-10-03 20:33:43.652+03:30', NULL, NULL, 'xcart', 'Xcart');
INSERT INTO "public"."skills" VALUES (486, 't', '2022-10-03 20:33:43.654+03:30', '2022-10-03 20:33:43.655+03:30', NULL, NULL, 'xcat', 'xCAT');
INSERT INTO "public"."skills" VALUES (487, 't', '2022-10-03 20:33:43.658+03:30', '2022-10-03 20:33:43.659+03:30', NULL, NULL, 'xcode', 'Xcode');
INSERT INTO "public"."skills" VALUES (488, 't', '2022-10-03 20:33:43.662+03:30', '2022-10-03 20:33:43.662+03:30', NULL, NULL, 'xcom', 'XCOM');
INSERT INTO "public"."skills" VALUES (489, 't', '2022-10-03 20:33:43.665+03:30', '2022-10-03 20:33:43.666+03:30', NULL, NULL, 'xcp', 'xCP');
INSERT INTO "public"."skills" VALUES (490, 't', '2022-10-03 20:33:43.668+03:30', '2022-10-03 20:33:43.669+03:30', NULL, NULL, 'xdcam', 'XDCAM');
INSERT INTO "public"."skills" VALUES (491, 't', '2022-10-03 20:33:43.672+03:30', '2022-10-03 20:33:43.672+03:30', NULL, NULL, 'xdebug', 'Xdebug');
INSERT INTO "public"."skills" VALUES (492, 't', '2022-10-03 20:33:43.675+03:30', '2022-10-03 20:33:43.675+03:30', NULL, NULL, 'xdoclet', 'XDoclet');
INSERT INTO "public"."skills" VALUES (493, 't', '2022-10-03 20:33:43.678+03:30', '2022-10-03 20:33:43.678+03:30', NULL, NULL, 'xen', 'Xen');
INSERT INTO "public"."skills" VALUES (494, 't', '2022-10-03 20:33:43.681+03:30', '2022-10-03 20:33:43.682+03:30', NULL, NULL, 'xenclient', 'XenClient');
INSERT INTO "public"."skills" VALUES (495, 't', '2022-10-03 20:33:43.684+03:30', '2022-10-03 20:33:43.685+03:30', NULL, NULL, 'xenix', 'Xenix');
INSERT INTO "public"."skills" VALUES (496, 't', '2022-10-03 20:33:43.687+03:30', '2022-10-03 20:33:43.688+03:30', NULL, NULL, 'xenu', 'Xenu');
INSERT INTO "public"."skills" VALUES (497, 't', '2022-10-03 20:33:43.69+03:30', '2022-10-03 20:33:43.691+03:30', NULL, NULL, 'xerces', 'Xerces');
INSERT INTO "public"."skills" VALUES (498, 't', '2022-10-03 20:33:43.694+03:30', '2022-10-03 20:33:43.694+03:30', NULL, NULL, 'xeriscaping', 'Xeriscaping');
INSERT INTO "public"."skills" VALUES (499, 't', '2022-10-03 20:33:43.697+03:30', '2022-10-03 20:33:43.698+03:30', NULL, NULL, 'xero', 'Xero');
INSERT INTO "public"."skills" VALUES (500, 't', '2022-10-03 20:33:43.7+03:30', '2022-10-03 20:33:43.701+03:30', NULL, NULL, 'xerox-printers', 'Xerox Printers');
INSERT INTO "public"."skills" VALUES (501, 't', '2022-10-03 20:33:43.703+03:30', '2022-10-03 20:33:43.704+03:30', NULL, NULL, 'xetra', 'Xetra');
INSERT INTO "public"."skills" VALUES (502, 't', '2022-10-03 20:33:43.707+03:30', '2022-10-03 20:33:43.707+03:30', NULL, NULL, 'xfire', 'XFire');
INSERT INTO "public"."skills" VALUES (503, 't', '2022-10-03 20:33:43.71+03:30', '2022-10-03 20:33:43.71+03:30', NULL, NULL, 'xfoil', 'XFOIL');
INSERT INTO "public"."skills" VALUES (504, 't', '2022-10-03 20:33:43.713+03:30', '2022-10-03 20:33:43.713+03:30', NULL, NULL, 'xforms', 'XForms');
INSERT INTO "public"."skills" VALUES (505, 't', '2022-10-03 20:33:43.716+03:30', '2022-10-03 20:33:43.717+03:30', NULL, NULL, 'xfp', 'XFP');
INSERT INTO "public"."skills" VALUES (506, 't', '2022-10-03 20:33:43.719+03:30', '2022-10-03 20:33:43.72+03:30', NULL, NULL, 'xfs', 'XFS');
INSERT INTO "public"."skills" VALUES (508, 't', '2022-10-03 20:33:43.725+03:30', '2022-10-03 20:33:43.726+03:30', NULL, NULL, 'xilinx', 'Xilinx');
INSERT INTO "public"."skills" VALUES (509, 't', '2022-10-03 20:33:43.728+03:30', '2022-10-03 20:33:43.729+03:30', NULL, NULL, 'xilinx-ise', 'Xilinx ISE');
INSERT INTO "public"."skills" VALUES (510, 't', '2022-10-03 20:33:43.732+03:30', '2022-10-03 20:33:43.732+03:30', NULL, NULL, 'xinet', 'Xinet');
INSERT INTO "public"."skills" VALUES (511, 't', '2022-10-03 20:33:43.735+03:30', '2022-10-03 20:33:43.736+03:30', NULL, NULL, 'xing', 'Xing');
INSERT INTO "public"."skills" VALUES (512, 't', '2022-10-03 20:33:43.738+03:30', '2022-10-03 20:33:43.739+03:30', NULL, NULL, 'xlminer', 'XLMiner');
INSERT INTO "public"."skills" VALUES (513, 't', '2022-10-03 20:33:43.742+03:30', '2022-10-03 20:33:43.742+03:30', NULL, NULL, 'xlstat', 'XLSTAT');
INSERT INTO "public"."skills" VALUES (514, 't', '2022-10-03 20:33:43.745+03:30', '2022-10-03 20:33:43.746+03:30', NULL, NULL, 'xmetal', 'XMetal');
INSERT INTO "public"."skills" VALUES (515, 't', '2022-10-03 20:33:43.748+03:30', '2022-10-03 20:33:43.749+03:30', NULL, NULL, 'xmind', 'XMind');
INSERT INTO "public"."skills" VALUES (516, 't', '2022-10-03 20:33:43.751+03:30', '2022-10-03 20:33:43.752+03:30', NULL, NULL, 'xml', 'XML');
INSERT INTO "public"."skills" VALUES (517, 't', '2022-10-03 20:33:43.754+03:30', '2022-10-03 20:33:43.755+03:30', NULL, NULL, 'xmlbeans', 'XMLBeans');
INSERT INTO "public"."skills" VALUES (518, 't', '2022-10-03 20:33:43.758+03:30', '2022-10-03 20:33:43.758+03:30', NULL, NULL, 'xmlhttp', 'XMLHTTP');
INSERT INTO "public"."skills" VALUES (519, 't', '2022-10-03 20:33:43.762+03:30', '2022-10-03 20:33:43.763+03:30', NULL, NULL, 'xml-rpc', 'XML-RPC');
INSERT INTO "public"."skills" VALUES (520, 't', '2022-10-03 20:33:43.766+03:30', '2022-10-03 20:33:43.767+03:30', NULL, NULL, 'xml-databases', 'XML Databases');
INSERT INTO "public"."skills" VALUES (521, 't', '2022-10-03 20:33:43.77+03:30', '2022-10-03 20:33:43.77+03:30', NULL, NULL, 'xml-gateway', 'XML Gateway');
INSERT INTO "public"."skills" VALUES (522, 't', '2022-10-03 20:33:43.773+03:30', '2022-10-03 20:33:43.773+03:30', NULL, NULL, 'xml-programming', 'XML Programming');
INSERT INTO "public"."skills" VALUES (523, 't', '2022-10-03 20:33:43.776+03:30', '2022-10-03 20:33:43.777+03:30', NULL, NULL, 'xml-publisher', 'XML Publisher');
INSERT INTO "public"."skills" VALUES (524, 't', '2022-10-03 20:33:43.779+03:30', '2022-10-03 20:33:43.78+03:30', NULL, NULL, 'xml-schema', 'XML Schema');
INSERT INTO "public"."skills" VALUES (525, 't', '2022-10-03 20:33:43.782+03:30', '2022-10-03 20:33:43.783+03:30', NULL, NULL, 'xml-schema-design', 'XML Schema Design');
INSERT INTO "public"."skills" VALUES (526, 't', '2022-10-03 20:33:43.785+03:30', '2022-10-03 20:33:43.785+03:30', NULL, NULL, 'xml-scripting', 'XML Scripting');
INSERT INTO "public"."skills" VALUES (527, 't', '2022-10-03 20:33:43.788+03:30', '2022-10-03 20:33:43.788+03:30', NULL, NULL, 'xml-sitemaps', 'XML Sitemaps');
INSERT INTO "public"."skills" VALUES (528, 't', '2022-10-03 20:33:43.79+03:30', '2022-10-03 20:33:43.79+03:30', NULL, NULL, 'xml-spy', 'XML Spy');
INSERT INTO "public"."skills" VALUES (529, 't', '2022-10-03 20:33:43.792+03:30', '2022-10-03 20:33:43.792+03:30', NULL, NULL, 'xml-standards', 'XML Standards');
INSERT INTO "public"."skills" VALUES (530, 't', '2022-10-03 20:33:43.794+03:30', '2022-10-03 20:33:43.794+03:30', NULL, NULL, 'xmpie', 'XMPie');
INSERT INTO "public"."skills" VALUES (531, 't', '2022-10-03 20:33:43.796+03:30', '2022-10-03 20:33:43.796+03:30', NULL, NULL, 'xmpp', 'XMPP');
INSERT INTO "public"."skills" VALUES (532, 't', '2022-10-03 20:33:43.797+03:30', '2022-10-03 20:33:43.798+03:30', NULL, NULL, 'xna', 'XNA');
INSERT INTO "public"."skills" VALUES (533, 't', '2022-10-03 20:33:43.799+03:30', '2022-10-03 20:33:43.8+03:30', NULL, NULL, 'xog', 'XOG');
INSERT INTO "public"."skills" VALUES (534, 't', '2022-10-03 20:33:43.801+03:30', '2022-10-03 20:33:43.802+03:30', NULL, NULL, 'xoops', 'Xoops');
INSERT INTO "public"."skills" VALUES (535, 't', '2022-10-03 20:33:43.803+03:30', '2022-10-03 20:33:43.804+03:30', NULL, NULL, 'xpac', 'XPAC');
INSERT INTO "public"."skills" VALUES (536, 't', '2022-10-03 20:33:43.805+03:30', '2022-10-03 20:33:43.806+03:30', NULL, NULL, 'xpages', 'XPages');
INSERT INTO "public"."skills" VALUES (537, 't', '2022-10-03 20:33:43.807+03:30', '2022-10-03 20:33:43.808+03:30', NULL, NULL, 'xpath', 'XPath');
INSERT INTO "public"."skills" VALUES (538, 't', '2022-10-03 20:33:43.809+03:30', '2022-10-03 20:33:43.81+03:30', NULL, NULL, 'xpc-target', 'xPC Target');
INSERT INTO "public"."skills" VALUES (539, 't', '2022-10-03 20:33:43.811+03:30', '2022-10-03 20:33:43.812+03:30', NULL, NULL, 'xpdl', 'XPDL');
INSERT INTO "public"."skills" VALUES (540, 't', '2022-10-03 20:33:43.813+03:30', '2022-10-03 20:33:43.814+03:30', NULL, NULL, 'xpediter', 'Xpediter');
INSERT INTO "public"."skills" VALUES (541, 't', '2022-10-03 20:33:43.815+03:30', '2022-10-03 20:33:43.815+03:30', NULL, NULL, 'xplan', 'Xplan');
INSERT INTO "public"."skills" VALUES (542, 't', '2022-10-03 20:33:43.817+03:30', '2022-10-03 20:33:43.817+03:30', NULL, NULL, 'xplanner', 'XPlanner');
INSERT INTO "public"."skills" VALUES (543, 't', '2022-10-03 20:33:43.819+03:30', '2022-10-03 20:33:43.819+03:30', NULL, NULL, 'xpon', 'xPON');
INSERT INTO "public"."skills" VALUES (544, 't', '2022-10-03 20:33:43.821+03:30', '2022-10-03 20:33:43.821+03:30', NULL, NULL, 'xpress', 'Xpress');
INSERT INTO "public"."skills" VALUES (545, 't', '2022-10-03 20:33:43.823+03:30', '2022-10-03 20:33:43.823+03:30', NULL, NULL, 'xpression', 'xPression');
INSERT INTO "public"."skills" VALUES (546, 't', '2022-10-03 20:33:43.825+03:30', '2022-10-03 20:33:43.825+03:30', NULL, NULL, 'xps', 'XPS');
INSERT INTO "public"."skills" VALUES (547, 't', '2022-10-03 20:33:43.827+03:30', '2022-10-03 20:33:43.827+03:30', NULL, NULL, 'x-ray', 'X-ray');
INSERT INTO "public"."skills" VALUES (548, 't', '2022-10-03 20:33:43.828+03:30', '2022-10-03 20:33:43.829+03:30', NULL, NULL, 'x-ray-absorption-spectroscopy', 'X-ray Absorption Spectroscopy');
INSERT INTO "public"."skills" VALUES (549, 't', '2022-10-03 20:33:43.83+03:30', '2022-10-03 20:33:43.831+03:30', NULL, NULL, 'x-ray-crystallography', 'X-ray crystallography');
INSERT INTO "public"."skills" VALUES (550, 't', '2022-10-03 20:33:43.832+03:30', '2022-10-03 20:33:43.833+03:30', NULL, NULL, 'x-ray-diffraction-analysis', 'X-ray Diffraction Analysis');
INSERT INTO "public"."skills" VALUES (551, 't', '2022-10-03 20:33:43.834+03:30', '2022-10-03 20:33:43.835+03:30', NULL, NULL, 'x-ray-diffractometry', 'X-ray diffractometry');
INSERT INTO "public"."skills" VALUES (552, 't', '2022-10-03 20:33:43.836+03:30', '2022-10-03 20:33:43.837+03:30', NULL, NULL, 'x-ray-microanalysis', 'X-ray Microanalysis');
INSERT INTO "public"."skills" VALUES (553, 't', '2022-10-03 20:33:43.838+03:30', '2022-10-03 20:33:43.839+03:30', NULL, NULL, 'x-ray-spectroscopy', 'X-ray Spectroscopy');
INSERT INTO "public"."skills" VALUES (554, 't', '2022-10-03 20:33:43.84+03:30', '2022-10-03 20:33:43.841+03:30', NULL, NULL, 'xrf', 'XRF');
INSERT INTO "public"."skills" VALUES (555, 't', '2022-10-03 20:33:43.842+03:30', '2022-10-03 20:33:43.843+03:30', NULL, NULL, 'xrr', 'XRR');
INSERT INTO "public"."skills" VALUES (556, 't', '2022-10-03 20:33:43.844+03:30', '2022-10-03 20:33:43.844+03:30', NULL, NULL, 'xry', 'XRY');
INSERT INTO "public"."skills" VALUES (557, 't', '2022-10-03 20:33:43.846+03:30', '2022-10-03 20:33:43.846+03:30', NULL, NULL, 'xsan', 'Xsan');
INSERT INTO "public"."skills" VALUES (558, 't', '2022-10-03 20:33:43.848+03:30', '2022-10-03 20:33:43.848+03:30', NULL, NULL, 'xsd', 'XSD');
INSERT INTO "public"."skills" VALUES (559, 't', '2022-10-03 20:33:43.85+03:30', '2022-10-03 20:33:43.85+03:30', NULL, NULL, 'xseries', 'xSeries');
INSERT INTO "public"."skills" VALUES (560, 't', '2022-10-03 20:33:43.852+03:30', '2022-10-03 20:33:43.852+03:30', NULL, NULL, 'xserve', 'Xserve');
INSERT INTO "public"."skills" VALUES (561, 't', '2022-10-03 20:33:43.854+03:30', '2022-10-03 20:33:43.854+03:30', NULL, NULL, 'xsi', 'XSI');
INSERT INTO "public"."skills" VALUES (562, 't', '2022-10-03 20:33:43.856+03:30', '2022-10-03 20:33:43.856+03:30', NULL, NULL, 'xsigo', 'Xsigo');
INSERT INTO "public"."skills" VALUES (563, 't', '2022-10-03 20:33:43.858+03:30', '2022-10-03 20:33:43.858+03:30', NULL, NULL, 'xsl', 'XSL');
INSERT INTO "public"."skills" VALUES (564, 't', '2022-10-03 20:33:43.859+03:30', '2022-10-03 20:33:43.86+03:30', NULL, NULL, 'xsl-fo', 'XSL-FO');
INSERT INTO "public"."skills" VALUES (565, 't', '2022-10-03 20:33:43.861+03:30', '2022-10-03 20:33:43.862+03:30', NULL, NULL, 'xslt', 'XSLT');
INSERT INTO "public"."skills" VALUES (566, 't', '2022-10-03 20:33:43.863+03:30', '2022-10-03 20:33:43.864+03:30', NULL, NULL, 'xss', 'XSS');
INSERT INTO "public"."skills" VALUES (567, 't', '2022-10-03 20:33:43.865+03:30', '2022-10-03 20:33:43.866+03:30', NULL, NULL, 'xstream', 'XStream');
INSERT INTO "public"."skills" VALUES (568, 't', '2022-10-03 20:33:43.867+03:30', '2022-10-03 20:33:43.868+03:30', NULL, NULL, 'xtrac', 'XTRAC');
INSERT INTO "public"."skills" VALUES (569, 't', '2022-10-03 20:33:43.869+03:30', '2022-10-03 20:33:43.87+03:30', NULL, NULL, 'xtract', 'XTRACT');
INSERT INTO "public"."skills" VALUES (570, 't', '2022-10-03 20:33:43.871+03:30', '2022-10-03 20:33:43.872+03:30', NULL, NULL, 'xul', 'XUL');
INSERT INTO "public"."skills" VALUES (571, 't', '2022-10-03 20:33:43.873+03:30', '2022-10-03 20:33:43.874+03:30', NULL, NULL, 'xunit', 'xUnit');
INSERT INTO "public"."skills" VALUES (572, 't', '2022-10-03 20:33:43.875+03:30', '2022-10-03 20:33:43.876+03:30', NULL, NULL, 'x-ways', 'X-Ways');
INSERT INTO "public"."skills" VALUES (573, 't', '2022-10-03 20:33:43.877+03:30', '2022-10-03 20:33:43.878+03:30', NULL, NULL, 'xytech', 'Xytech');
INSERT INTO "public"."skills" VALUES (574, 't', '2022-10-03 20:33:43.879+03:30', '2022-10-03 20:33:43.88+03:30', NULL, NULL, 'yacc', 'Yacc');
INSERT INTO "public"."skills" VALUES (575, 't', '2022-10-03 20:33:43.881+03:30', '2022-10-03 20:33:43.882+03:30', NULL, NULL, 'yachting', 'Yachting');
INSERT INTO "public"."skills" VALUES (576, 't', '2022-10-03 20:33:43.883+03:30', '2022-10-03 20:33:43.884+03:30', NULL, NULL, 'yacht-charters', 'Yacht Charters');
INSERT INTO "public"."skills" VALUES (577, 't', '2022-10-03 20:33:43.885+03:30', '2022-10-03 20:33:43.886+03:30', NULL, NULL, 'yacht-clubs', 'Yacht Clubs');
INSERT INTO "public"."skills" VALUES (578, 't', '2022-10-03 20:33:43.887+03:30', '2022-10-03 20:33:43.887+03:30', NULL, NULL, 'yacht-deliveries', 'Yacht Deliveries');
INSERT INTO "public"."skills" VALUES (579, 't', '2022-10-03 20:33:43.889+03:30', '2022-10-03 20:33:43.889+03:30', NULL, NULL, 'yacht-racing', 'Yacht Racing');
INSERT INTO "public"."skills" VALUES (580, 't', '2022-10-03 20:33:43.891+03:30', '2022-10-03 20:33:43.891+03:30', NULL, NULL, 'yahoo-search', 'Yahoo Search');
INSERT INTO "public"."skills" VALUES (686, 't', '2022-10-03 20:33:44.168+03:30', '2022-10-03 20:33:44.168+03:30', NULL, NULL, 'zoo', 'Zoo');
INSERT INTO "public"."skills" VALUES (581, 't', '2022-10-03 20:33:43.893+03:30', '2022-10-03 20:33:43.893+03:30', NULL, NULL, 'yahoo-search-marketing', 'Yahoo Search Marketing');
INSERT INTO "public"."skills" VALUES (582, 't', '2022-10-03 20:33:43.895+03:30', '2022-10-03 20:33:43.895+03:30', NULL, NULL, 'yahoo-site-explorer', 'Yahoo Site Explorer');
INSERT INTO "public"."skills" VALUES (583, 't', '2022-10-03 20:33:43.897+03:30', '2022-10-03 20:33:43.897+03:30', NULL, NULL, 'yamaha-digital-consoles', 'Yamaha Digital Consoles');
INSERT INTO "public"."skills" VALUES (584, 't', '2022-10-03 20:33:43.898+03:30', '2022-10-03 20:33:43.899+03:30', NULL, NULL, 'yamaha-m7cl', 'Yamaha M7CL');
INSERT INTO "public"."skills" VALUES (585, 't', '2022-10-03 20:33:43.9+03:30', '2022-10-03 20:33:43.901+03:30', NULL, NULL, 'yamaha-pm5d', 'Yamaha PM5D');
INSERT INTO "public"."skills" VALUES (586, 't', '2022-10-03 20:33:43.902+03:30', '2022-10-03 20:33:43.903+03:30', NULL, NULL, 'yaml', 'YAML');
INSERT INTO "public"."skills" VALUES (587, 't', '2022-10-03 20:33:43.904+03:30', '2022-10-03 20:33:43.905+03:30', NULL, NULL, 'yammer', 'Yammer');
INSERT INTO "public"."skills" VALUES (588, 't', '2022-10-03 20:33:43.906+03:30', '2022-10-03 20:33:43.907+03:30', NULL, NULL, 'yantra', 'Yantra');
INSERT INTO "public"."skills" VALUES (589, 't', '2022-10-03 20:33:43.908+03:30', '2022-10-03 20:33:43.909+03:30', NULL, NULL, 'yardi', 'Yardi');
INSERT INTO "public"."skills" VALUES (590, 't', '2022-10-03 20:33:43.91+03:30', '2022-10-03 20:33:43.911+03:30', NULL, NULL, 'yardi-enterprise', 'Yardi Enterprise');
INSERT INTO "public"."skills" VALUES (591, 't', '2022-10-03 20:33:43.912+03:30', '2022-10-03 20:33:43.913+03:30', NULL, NULL, 'yardi-property-management', 'Yardi Property Management');
INSERT INTO "public"."skills" VALUES (592, 't', '2022-10-03 20:33:43.914+03:30', '2022-10-03 20:33:43.915+03:30', NULL, NULL, 'yardi-voyager', 'Yardi Voyager');
INSERT INTO "public"."skills" VALUES (593, 't', '2022-10-03 20:33:43.916+03:30', '2022-10-03 20:33:43.917+03:30', NULL, NULL, 'yard-management', 'Yard Management');
INSERT INTO "public"."skills" VALUES (594, 't', '2022-10-03 20:33:43.918+03:30', '2022-10-03 20:33:43.919+03:30', NULL, NULL, 'yard-signs', 'Yard Signs');
INSERT INTO "public"."skills" VALUES (595, 't', '2022-10-03 20:33:43.92+03:30', '2022-10-03 20:33:43.921+03:30', NULL, NULL, 'yard-work', 'Yard Work');
INSERT INTO "public"."skills" VALUES (596, 't', '2022-10-03 20:33:43.922+03:30', '2022-10-03 20:33:43.923+03:30', NULL, NULL, 'yarn', 'Yarn');
INSERT INTO "public"."skills" VALUES (597, 't', '2022-10-03 20:33:43.924+03:30', '2022-10-03 20:33:43.925+03:30', NULL, NULL, 'yaskawa', 'Yaskawa');
INSERT INTO "public"."skills" VALUES (598, 't', '2022-10-03 20:33:43.926+03:30', '2022-10-03 20:33:43.927+03:30', NULL, NULL, 'yearbook', 'Yearbook');
INSERT INTO "public"."skills" VALUES (599, 't', '2022-10-03 20:33:43.928+03:30', '2022-10-03 20:33:43.929+03:30', NULL, NULL, 'year-end-close', 'Year-end Close');
INSERT INTO "public"."skills" VALUES (600, 't', '2022-10-03 20:33:43.931+03:30', '2022-10-03 20:33:43.931+03:30', NULL, NULL, 'year-end-accounts', 'Year End Accounts');
INSERT INTO "public"."skills" VALUES (601, 't', '2022-10-03 20:33:43.933+03:30', '2022-10-03 20:33:43.934+03:30', NULL, NULL, 'yeast', 'Yeast');
INSERT INTO "public"."skills" VALUES (602, 't', '2022-10-03 20:33:43.936+03:30', '2022-10-03 20:33:43.936+03:30', NULL, NULL, 'yeast-two-hybrid', 'Yeast two-hybrid');
INSERT INTO "public"."skills" VALUES (603, 't', '2022-10-03 20:33:43.939+03:30', '2022-10-03 20:33:43.94+03:30', NULL, NULL, 'yellow-belt', 'Yellow Belt');
INSERT INTO "public"."skills" VALUES (604, 't', '2022-10-03 20:33:43.942+03:30', '2022-10-03 20:33:43.943+03:30', NULL, NULL, 'yellow-book', 'Yellow Book');
INSERT INTO "public"."skills" VALUES (605, 't', '2022-10-03 20:33:43.945+03:30', '2022-10-03 20:33:43.946+03:30', NULL, NULL, 'yellow-pages', 'Yellow Pages');
INSERT INTO "public"."skills" VALUES (606, 't', '2022-10-03 20:33:43.948+03:30', '2022-10-03 20:33:43.949+03:30', NULL, NULL, 'yelp', 'Yelp');
INSERT INTO "public"."skills" VALUES (607, 't', '2022-10-03 20:33:43.951+03:30', '2022-10-03 20:33:43.951+03:30', NULL, NULL, 'yiddish', 'Yiddish');
INSERT INTO "public"."skills" VALUES (608, 't', '2022-10-03 20:33:43.953+03:30', '2022-10-03 20:33:43.954+03:30', NULL, NULL, 'yield', 'Yield');
INSERT INTO "public"."skills" VALUES (609, 't', '2022-10-03 20:33:43.956+03:30', '2022-10-03 20:33:43.956+03:30', NULL, NULL, 'yields', 'Yields');
INSERT INTO "public"."skills" VALUES (610, 't', '2022-10-03 20:33:43.958+03:30', '2022-10-03 20:33:43.959+03:30', NULL, NULL, 'yield-management', 'Yield Management');
INSERT INTO "public"."skills" VALUES (611, 't', '2022-10-03 20:33:43.961+03:30', '2022-10-03 20:33:43.962+03:30', NULL, NULL, 'yii', 'Yii');
INSERT INTO "public"."skills" VALUES (612, 't', '2022-10-03 20:33:43.964+03:30', '2022-10-03 20:33:43.964+03:30', NULL, NULL, 'yin-yoga', 'Yin Yoga');
INSERT INTO "public"."skills" VALUES (613, 't', '2022-10-03 20:33:43.967+03:30', '2022-10-03 20:33:43.967+03:30', NULL, NULL, 'yms', 'YMS');
INSERT INTO "public"."skills" VALUES (614, 't', '2022-10-03 20:33:43.97+03:30', '2022-10-03 20:33:43.97+03:30', NULL, NULL, 'yodeling', 'Yodeling');
INSERT INTO "public"."skills" VALUES (615, 't', '2022-10-03 20:33:43.972+03:30', '2022-10-03 20:33:43.973+03:30', NULL, NULL, 'yoga', 'Yoga');
INSERT INTO "public"."skills" VALUES (616, 't', '2022-10-03 20:33:43.975+03:30', '2022-10-03 20:33:43.976+03:30', NULL, NULL, 'yoga-instruction', 'Yoga Instruction');
INSERT INTO "public"."skills" VALUES (617, 't', '2022-10-03 20:33:43.978+03:30', '2022-10-03 20:33:43.979+03:30', NULL, NULL, 'yoga-nidra', 'Yoga Nidra');
INSERT INTO "public"."skills" VALUES (618, 't', '2022-10-03 20:33:43.981+03:30', '2022-10-03 20:33:43.982+03:30', NULL, NULL, 'yogurt', 'Yogurt');
INSERT INTO "public"."skills" VALUES (619, 't', '2022-10-03 20:33:43.984+03:30', '2022-10-03 20:33:43.985+03:30', NULL, NULL, 'yoruba', 'Yoruba');
INSERT INTO "public"."skills" VALUES (620, 't', '2022-10-03 20:33:43.988+03:30', '2022-10-03 20:33:43.988+03:30', NULL, NULL, 'young-adults', 'Young Adults');
INSERT INTO "public"."skills" VALUES (621, 't', '2022-10-03 20:33:43.991+03:30', '2022-10-03 20:33:43.991+03:30', NULL, NULL, 'young-adult-literature', 'Young Adult Literature');
INSERT INTO "public"."skills" VALUES (622, 't', '2022-10-03 20:33:43.994+03:30', '2022-10-03 20:33:43.995+03:30', NULL, NULL, 'young-adult-services', 'Young Adult Services');
INSERT INTO "public"."skills" VALUES (623, 't', '2022-10-03 20:33:43.997+03:30', '2022-10-03 20:33:43.998+03:30', NULL, NULL, 'young-people', 'Young People');
INSERT INTO "public"."skills" VALUES (624, 't', '2022-10-03 20:33:44+03:30', '2022-10-03 20:33:44.001+03:30', NULL, NULL, 'youth-at-risk', 'Youth At Risk');
INSERT INTO "public"."skills" VALUES (625, 't', '2022-10-03 20:33:44.003+03:30', '2022-10-03 20:33:44.004+03:30', NULL, NULL, 'youth-culture', 'Youth Culture');
INSERT INTO "public"."skills" VALUES (626, 't', '2022-10-03 20:33:44.006+03:30', '2022-10-03 20:33:44.006+03:30', NULL, NULL, 'youth-development', 'Youth Development');
INSERT INTO "public"."skills" VALUES (627, 't', '2022-10-03 20:33:44.009+03:30', '2022-10-03 20:33:44.009+03:30', NULL, NULL, 'youth-empowerment', 'Youth Empowerment');
INSERT INTO "public"."skills" VALUES (628, 't', '2022-10-03 20:33:44.011+03:30', '2022-10-03 20:33:44.012+03:30', NULL, NULL, 'youth-engagement', 'Youth Engagement');
INSERT INTO "public"."skills" VALUES (629, 't', '2022-10-03 20:33:44.014+03:30', '2022-10-03 20:33:44.015+03:30', NULL, NULL, 'youth-entrepreneurship', 'Youth Entrepreneurship');
INSERT INTO "public"."skills" VALUES (630, 't', '2022-10-03 20:33:44.017+03:30', '2022-10-03 20:33:44.017+03:30', NULL, NULL, 'youth-justice', 'Youth Justice');
INSERT INTO "public"."skills" VALUES (631, 't', '2022-10-03 20:33:44.02+03:30', '2022-10-03 20:33:44.02+03:30', NULL, NULL, 'youth-leadership', 'Youth Leadership');
INSERT INTO "public"."skills" VALUES (632, 't', '2022-10-03 20:33:44.022+03:30', '2022-10-03 20:33:44.023+03:30', NULL, NULL, 'youth-leadership-training', 'Youth Leadership Training');
INSERT INTO "public"."skills" VALUES (633, 't', '2022-10-03 20:33:44.025+03:30', '2022-10-03 20:33:44.025+03:30', NULL, NULL, 'youth-marketing', 'Youth Marketing');
INSERT INTO "public"."skills" VALUES (634, 't', '2022-10-03 20:33:44.027+03:30', '2022-10-03 20:33:44.028+03:30', NULL, NULL, 'youth-mentoring', 'Youth Mentoring');
INSERT INTO "public"."skills" VALUES (635, 't', '2022-10-03 20:33:44.029+03:30', '2022-10-03 20:33:44.03+03:30', NULL, NULL, 'youth-ministry', 'Youth Ministry');
INSERT INTO "public"."skills" VALUES (636, 't', '2022-10-03 20:33:44.031+03:30', '2022-10-03 20:33:44.032+03:30', NULL, NULL, 'youth-outreach', 'Youth Outreach');
INSERT INTO "public"."skills" VALUES (637, 't', '2022-10-03 20:33:44.034+03:30', '2022-10-03 20:33:44.034+03:30', NULL, NULL, 'youth-programs', 'Youth Programs');
INSERT INTO "public"."skills" VALUES (638, 't', '2022-10-03 20:33:44.036+03:30', '2022-10-03 20:33:44.037+03:30', NULL, NULL, 'youth-work', 'Youth Work');
INSERT INTO "public"."skills" VALUES (639, 't', '2022-10-03 20:33:44.039+03:30', '2022-10-03 20:33:44.039+03:30', NULL, NULL, 'youtube', 'YouTube');
INSERT INTO "public"."skills" VALUES (640, 't', '2022-10-03 20:33:44.041+03:30', '2022-10-03 20:33:44.042+03:30', NULL, NULL, 'youtube-api', 'YouTube API');
INSERT INTO "public"."skills" VALUES (641, 't', '2022-10-03 20:33:44.044+03:30', '2022-10-03 20:33:44.045+03:30', NULL, NULL, 'yslow', 'YSlow');
INSERT INTO "public"."skills" VALUES (642, 't', '2022-10-03 20:33:44.047+03:30', '2022-10-03 20:33:44.047+03:30', NULL, NULL, 'yui', 'YUI');
INSERT INTO "public"."skills" VALUES (643, 't', '2022-10-03 20:33:44.05+03:30', '2022-10-03 20:33:44.05+03:30', NULL, NULL, 'yum', 'YUM');
INSERT INTO "public"."skills" VALUES (644, 't', '2022-10-03 20:33:44.053+03:30', '2022-10-03 20:33:44.054+03:30', NULL, NULL, 'zabbix', 'Zabbix');
INSERT INTO "public"."skills" VALUES (645, 't', '2022-10-03 20:33:44.056+03:30', '2022-10-03 20:33:44.057+03:30', NULL, NULL, 'zachman', 'Zachman');
INSERT INTO "public"."skills" VALUES (646, 't', '2022-10-03 20:33:44.059+03:30', '2022-10-03 20:33:44.059+03:30', NULL, NULL, 'zainet', 'Zainet');
INSERT INTO "public"."skills" VALUES (647, 't', '2022-10-03 20:33:44.061+03:30', '2022-10-03 20:33:44.062+03:30', NULL, NULL, 'zbrush', 'ZBrush');
INSERT INTO "public"."skills" VALUES (648, 't', '2022-10-03 20:33:44.063+03:30', '2022-10-03 20:33:44.064+03:30', NULL, NULL, 'zebra', 'Zebra');
INSERT INTO "public"."skills" VALUES (649, 't', '2022-10-03 20:33:44.066+03:30', '2022-10-03 20:33:44.067+03:30', NULL, NULL, 'zebrafish', 'Zebrafish');
INSERT INTO "public"."skills" VALUES (650, 't', '2022-10-03 20:33:44.069+03:30', '2022-10-03 20:33:44.069+03:30', NULL, NULL, 'zedo', 'Zedo');
INSERT INTO "public"."skills" VALUES (651, 't', '2022-10-03 20:33:44.071+03:30', '2022-10-03 20:33:44.072+03:30', NULL, NULL, 'zeiss', 'Zeiss');
INSERT INTO "public"."skills" VALUES (652, 't', '2022-10-03 20:33:44.073+03:30', '2022-10-03 20:33:44.074+03:30', NULL, NULL, 'zemax', 'Zemax');
INSERT INTO "public"."skills" VALUES (653, 't', '2022-10-03 20:33:44.076+03:30', '2022-10-03 20:33:44.076+03:30', NULL, NULL, 'zen', 'Zen');
INSERT INTO "public"."skills" VALUES (654, 't', '2022-10-03 20:33:44.078+03:30', '2022-10-03 20:33:44.079+03:30', NULL, NULL, 'zencart', 'ZenCart');
INSERT INTO "public"."skills" VALUES (655, 't', '2022-10-03 20:33:44.081+03:30', '2022-10-03 20:33:44.082+03:30', NULL, NULL, 'zend', 'Zend');
INSERT INTO "public"."skills" VALUES (656, 't', '2022-10-03 20:33:44.084+03:30', '2022-10-03 20:33:44.084+03:30', NULL, NULL, 'zendesk', 'Zendesk');
INSERT INTO "public"."skills" VALUES (657, 't', '2022-10-03 20:33:44.086+03:30', '2022-10-03 20:33:44.087+03:30', NULL, NULL, 'zend-certified-engineer', 'Zend Certified Engineer');
INSERT INTO "public"."skills" VALUES (658, 't', '2022-10-03 20:33:44.089+03:30', '2022-10-03 20:33:44.09+03:30', NULL, NULL, 'zend-framework', 'Zend Framework');
INSERT INTO "public"."skills" VALUES (659, 't', '2022-10-03 20:33:44.092+03:30', '2022-10-03 20:33:44.093+03:30', NULL, NULL, 'zend-server', 'Zend Server');
INSERT INTO "public"."skills" VALUES (660, 't', '2022-10-03 20:33:44.095+03:30', '2022-10-03 20:33:44.096+03:30', NULL, NULL, 'zend-studio', 'Zend Studio');
INSERT INTO "public"."skills" VALUES (661, 't', '2022-10-03 20:33:44.098+03:30', '2022-10-03 20:33:44.099+03:30', NULL, NULL, 'zenoss', 'Zenoss');
INSERT INTO "public"."skills" VALUES (662, 't', '2022-10-03 20:33:44.102+03:30', '2022-10-03 20:33:44.102+03:30', NULL, NULL, 'zenworks', 'Zenworks');
INSERT INTO "public"."skills" VALUES (663, 't', '2022-10-03 20:33:44.105+03:30', '2022-10-03 20:33:44.105+03:30', NULL, NULL, 'zen-shiatsu', 'Zen Shiatsu');
INSERT INTO "public"."skills" VALUES (664, 't', '2022-10-03 20:33:44.108+03:30', '2022-10-03 20:33:44.109+03:30', NULL, NULL, 'zeolites', 'Zeolites');
INSERT INTO "public"."skills" VALUES (665, 't', '2022-10-03 20:33:44.11+03:30', '2022-10-03 20:33:44.111+03:30', NULL, NULL, 'zephyr', 'Zephyr');
INSERT INTO "public"."skills" VALUES (666, 't', '2022-10-03 20:33:44.112+03:30', '2022-10-03 20:33:44.113+03:30', NULL, NULL, 'zephyr-style-advisor', 'Zephyr Style Advisor');
INSERT INTO "public"."skills" VALUES (667, 't', '2022-10-03 20:33:44.115+03:30', '2022-10-03 20:33:44.115+03:30', NULL, NULL, 'zero-based-budgeting', 'Zero-based Budgeting');
INSERT INTO "public"."skills" VALUES (668, 't', '2022-10-03 20:33:44.117+03:30', '2022-10-03 20:33:44.118+03:30', NULL, NULL, 'zeromq', 'ZeroMQ');
INSERT INTO "public"."skills" VALUES (669, 't', '2022-10-03 20:33:44.12+03:30', '2022-10-03 20:33:44.12+03:30', NULL, NULL, 'zero-balancing', 'Zero Balancing');
INSERT INTO "public"."skills" VALUES (670, 't', '2022-10-03 20:33:44.123+03:30', '2022-10-03 20:33:44.124+03:30', NULL, NULL, 'zero-defects', 'Zero Defects');
INSERT INTO "public"."skills" VALUES (671, 't', '2022-10-03 20:33:44.126+03:30', '2022-10-03 20:33:44.127+03:30', NULL, NULL, 'zero-waste', 'Zero Waste');
INSERT INTO "public"."skills" VALUES (672, 't', '2022-10-03 20:33:44.13+03:30', '2022-10-03 20:33:44.13+03:30', NULL, NULL, 'zeta-potential', 'Zeta Potential');
INSERT INTO "public"."skills" VALUES (673, 't', '2022-10-03 20:33:44.133+03:30', '2022-10-03 20:33:44.133+03:30', NULL, NULL, 'zeus', 'Zeus');
INSERT INTO "public"."skills" VALUES (674, 't', '2022-10-03 20:33:44.135+03:30', '2022-10-03 20:33:44.135+03:30', NULL, NULL, 'zfs', 'ZFS');
INSERT INTO "public"."skills" VALUES (675, 't', '2022-10-03 20:33:44.137+03:30', '2022-10-03 20:33:44.137+03:30', NULL, NULL, 'zigbee', 'ZigBee');
INSERT INTO "public"."skills" VALUES (676, 't', '2022-10-03 20:33:44.139+03:30', '2022-10-03 20:33:44.14+03:30', NULL, NULL, 'zillow', 'Zillow');
INSERT INTO "public"."skills" VALUES (677, 't', '2022-10-03 20:33:44.142+03:30', '2022-10-03 20:33:44.142+03:30', NULL, NULL, 'zimbra', 'Zimbra');
INSERT INTO "public"."skills" VALUES (678, 't', '2022-10-03 20:33:44.145+03:30', '2022-10-03 20:33:44.146+03:30', NULL, NULL, 'zinc', 'Zinc');
INSERT INTO "public"."skills" VALUES (679, 't', '2022-10-03 20:33:44.148+03:30', '2022-10-03 20:33:44.149+03:30', NULL, NULL, 'zines', 'Zines');
INSERT INTO "public"."skills" VALUES (680, 't', '2022-10-03 20:33:44.151+03:30', '2022-10-03 20:33:44.152+03:30', NULL, NULL, 'zlinux', 'zLinux');
INSERT INTO "public"."skills" VALUES (681, 't', '2022-10-03 20:33:44.154+03:30', '2022-10-03 20:33:44.154+03:30', NULL, NULL, 'zmap', 'Zmap');
INSERT INTO "public"."skills" VALUES (682, 't', '2022-10-03 20:33:44.156+03:30', '2022-10-03 20:33:44.157+03:30', NULL, NULL, 'zoho', 'Zoho');
INSERT INTO "public"."skills" VALUES (683, 't', '2022-10-03 20:33:44.159+03:30', '2022-10-03 20:33:44.159+03:30', NULL, NULL, 'zombies', 'Zombies');
INSERT INTO "public"."skills" VALUES (684, 't', '2022-10-03 20:33:44.161+03:30', '2022-10-03 20:33:44.162+03:30', NULL, NULL, 'zone-alarm', 'Zone Alarm');
INSERT INTO "public"."skills" VALUES (685, 't', '2022-10-03 20:33:44.164+03:30', '2022-10-03 20:33:44.165+03:30', NULL, NULL, 'zoning', 'Zoning');
INSERT INTO "public"."skills" VALUES (687, 't', '2022-10-03 20:33:44.171+03:30', '2022-10-03 20:33:44.171+03:30', NULL, NULL, 'zooarchaeology', 'Zooarchaeology');
INSERT INTO "public"."skills" VALUES (688, 't', '2022-10-03 20:33:44.174+03:30', '2022-10-03 20:33:44.175+03:30', NULL, NULL, 'zoology', 'Zoology');
INSERT INTO "public"."skills" VALUES (689, 't', '2022-10-03 20:33:44.179+03:30', '2022-10-03 20:33:44.179+03:30', NULL, NULL, 'zoom', 'Zoom');
INSERT INTO "public"."skills" VALUES (690, 't', '2022-10-03 20:33:44.182+03:30', '2022-10-03 20:33:44.182+03:30', NULL, NULL, 'zoomerang', 'Zoomerang');
INSERT INTO "public"."skills" VALUES (691, 't', '2022-10-03 20:33:44.185+03:30', '2022-10-03 20:33:44.185+03:30', NULL, NULL, 'zoominfo', 'ZoomInfo');
INSERT INTO "public"."skills" VALUES (692, 't', '2022-10-03 20:33:44.188+03:30', '2022-10-03 20:33:44.189+03:30', NULL, NULL, 'zoomtext', 'ZoomText');
INSERT INTO "public"."skills" VALUES (693, 't', '2022-10-03 20:33:44.191+03:30', '2022-10-03 20:33:44.191+03:30', NULL, NULL, 'zope', 'Zope');
INSERT INTO "public"."skills" VALUES (694, 't', '2022-10-03 20:33:44.194+03:30', '2022-10-03 20:33:44.194+03:30', NULL, NULL, 'zotero', 'Zotero');
INSERT INTO "public"."skills" VALUES (695, 't', '2022-10-03 20:33:44.196+03:30', '2022-10-03 20:33:44.197+03:30', NULL, NULL, 'zpl', 'ZPL');
INSERT INTO "public"."skills" VALUES (696, 't', '2022-10-03 20:33:44.199+03:30', '2022-10-03 20:33:44.2+03:30', NULL, NULL, 'zseries', 'zSeries');
INSERT INTO "public"."skills" VALUES (697, 't', '2022-10-03 20:33:44.202+03:30', '2022-10-03 20:33:44.203+03:30', NULL, NULL, 'zsh', 'Zsh');
INSERT INTO "public"."skills" VALUES (698, 't', '2022-10-03 20:33:44.205+03:30', '2022-10-03 20:33:44.206+03:30', NULL, NULL, 'zuken', 'Zuken');
INSERT INTO "public"."skills" VALUES (699, 't', '2022-10-03 20:33:44.208+03:30', '2022-10-03 20:33:44.208+03:30', NULL, NULL, 'zultys', 'Zultys');
INSERT INTO "public"."skills" VALUES (700, 't', '2022-10-03 20:33:44.211+03:30', '2022-10-03 20:33:44.211+03:30', NULL, NULL, 'zumba', 'Zumba');
INSERT INTO "public"."skills" VALUES (701, 't', '2022-10-03 20:33:44.214+03:30', '2022-10-03 20:33:44.214+03:30', NULL, NULL, 'zumba-instruction', 'Zumba Instruction');
INSERT INTO "public"."skills" VALUES (702, 't', '2022-10-03 20:33:44.216+03:30', '2022-10-03 20:33:44.217+03:30', NULL, NULL, 'zuora', 'Zuora');
INSERT INTO "public"."skills" VALUES (703, 't', '2022-10-03 20:33:44.219+03:30', '2022-10-03 20:33:44.22+03:30', NULL, NULL, 'z-wave', 'Z-Wave');
INSERT INTO "public"."skills" VALUES (704, 't', '2022-10-03 20:33:44.222+03:30', '2022-10-03 20:33:44.223+03:30', NULL, NULL, 'zymography', 'Zymography');
INSERT INTO "public"."skills" VALUES (705, 't', '2022-10-03 20:33:44.225+03:30', '2022-10-03 20:33:44.226+03:30', NULL, NULL, 'zynx', 'Zynx');
INSERT INTO "public"."skills" VALUES (706, 't', '2022-10-03 20:33:44.228+03:30', '2022-10-03 20:33:44.229+03:30', NULL, NULL, 'zyxel', 'Zyxel');

-- ----------------------------
-- Table structure for skillsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."skillsTs";
CREATE TABLE "public"."skillsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"skillsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of skillsTs
-- ----------------------------

-- ----------------------------
-- Table structure for socials
-- ----------------------------
DROP TABLE IF EXISTS "public"."socials";
CREATE TABLE "public"."socials" (
  "id" int4 NOT NULL DEFAULT nextval('socials_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "website" text COLLATE "pg_catalog"."default",
  "icon_id" text COLLATE "pg_catalog"."default",
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of socials
-- ----------------------------

-- ----------------------------
-- Table structure for socialsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."socialsTs";
CREATE TABLE "public"."socialsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"socialsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of socialsTs
-- ----------------------------

-- ----------------------------
-- Table structure for states
-- ----------------------------
DROP TABLE IF EXISTS "public"."states";
CREATE TABLE "public"."states" (
  "id" int4 NOT NULL DEFAULT nextval('states_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "prefix" varchar(255) COLLATE "pg_catalog"."default",
  "flagId" text COLLATE "pg_catalog"."default",
  "bannerId" text COLLATE "pg_catalog"."default",
  "about" text COLLATE "pg_catalog"."default",
  "website" text COLLATE "pg_catalog"."default",
  "coordinates" text[] COLLATE "pg_catalog"."default",
  "countryId" int4
)
;

-- ----------------------------
-- Records of states
-- ----------------------------

-- ----------------------------
-- Table structure for statesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."statesTs";
CREATE TABLE "public"."statesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"statesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "about" text COLLATE "pg_catalog"."default",
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of statesTs
-- ----------------------------

-- ----------------------------
-- Table structure for themes
-- ----------------------------
DROP TABLE IF EXISTS "public"."themes";
CREATE TABLE "public"."themes" (
  "id" int4 NOT NULL DEFAULT nextval('themes_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "isDefault" bool NOT NULL
)
;

-- ----------------------------
-- Records of themes
-- ----------------------------

-- ----------------------------
-- Table structure for themesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."themesTs";
CREATE TABLE "public"."themesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"themesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of themesTs
-- ----------------------------

-- ----------------------------
-- Table structure for timePeriods
-- ----------------------------
DROP TABLE IF EXISTS "public"."timePeriods";
CREATE TABLE "public"."timePeriods" (
  "id" int4 NOT NULL DEFAULT nextval('"timePeriods_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of timePeriods
-- ----------------------------

-- ----------------------------
-- Table structure for timePeriodsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."timePeriodsTs";
CREATE TABLE "public"."timePeriodsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"timePeriodsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of timePeriodsTs
-- ----------------------------

-- ----------------------------
-- Table structure for timezones
-- ----------------------------
DROP TABLE IF EXISTS "public"."timezones";
CREATE TABLE "public"."timezones" (
  "id" int4 NOT NULL DEFAULT nextval('timezones_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "offset" text COLLATE "pg_catalog"."default",
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of timezones
-- ----------------------------
INSERT INTO "public"."timezones" VALUES (15, 't', '2022-10-03 21:19:48.802+03:30', '2022-10-03 21:19:48.802+03:30', NULL, NULL, '(UTC-12:00)', 'international-date-line-west', 'International Date Line West');
INSERT INTO "public"."timezones" VALUES (16, 't', '2022-10-03 21:19:48.804+03:30', '2022-10-03 21:19:48.805+03:30', NULL, NULL, '(UTC-11:00)', 'coordinated-universal-time-11', 'Coordinated Universal Time-11');
INSERT INTO "public"."timezones" VALUES (17, 't', '2022-10-03 21:19:48.807+03:30', '2022-10-03 21:19:48.807+03:30', NULL, NULL, '(UTC-10:00)', 'aleutian-islands', 'Aleutian Islands');
INSERT INTO "public"."timezones" VALUES (18, 't', '2022-10-03 21:19:48.809+03:30', '2022-10-03 21:19:48.809+03:30', NULL, NULL, '(UTC-10:00)', 'hawaii', 'Hawaii');
INSERT INTO "public"."timezones" VALUES (19, 't', '2022-10-03 21:19:48.811+03:30', '2022-10-03 21:19:48.812+03:30', NULL, NULL, '(UTC-09:30)', 'marquesas-islands', 'Marquesas Islands');
INSERT INTO "public"."timezones" VALUES (20, 't', '2022-10-03 21:19:48.814+03:30', '2022-10-03 21:19:48.815+03:30', NULL, NULL, '(UTC-05:00)', 'chetumal', 'Chetumal');
INSERT INTO "public"."timezones" VALUES (21, 't', '2022-10-03 21:19:48.818+03:30', '2022-10-03 21:19:48.818+03:30', NULL, NULL, '(UTC+04:00)', 'port-louis', 'Port Louis');
INSERT INTO "public"."timezones" VALUES (22, 't', '2022-10-03 21:19:48.821+03:30', '2022-10-03 21:19:48.821+03:30', NULL, NULL, '(UTC+04:00)', 'saratov', 'Saratov');
INSERT INTO "public"."timezones" VALUES (23, 't', '2022-10-03 21:19:48.824+03:30', '2022-10-03 21:19:48.824+03:30', NULL, NULL, '(UTC+04:00)', 'tbilisi', 'Tbilisi');
INSERT INTO "public"."timezones" VALUES (24, 't', '2022-10-03 21:19:48.826+03:30', '2022-10-03 21:19:48.827+03:30', NULL, NULL, '(UTC+04:00)', 'yerevan', 'Yerevan');
INSERT INTO "public"."timezones" VALUES (25, 't', '2022-10-03 21:19:48.83+03:30', '2022-10-03 21:19:48.83+03:30', NULL, NULL, '(UTC-09:00)', 'alaska', 'Alaska');
INSERT INTO "public"."timezones" VALUES (26, 't', '2022-10-03 21:19:48.833+03:30', '2022-10-03 21:19:48.833+03:30', NULL, NULL, '(UTC+04:30)', 'kabul', 'Kabul');
INSERT INTO "public"."timezones" VALUES (27, 't', '2022-10-03 21:19:48.836+03:30', '2022-10-03 21:19:48.837+03:30', NULL, NULL, '(UTC-09:00)', 'coordinated-universal-time-09', 'Coordinated Universal Time-09');
INSERT INTO "public"."timezones" VALUES (28, 't', '2022-10-03 21:19:48.84+03:30', '2022-10-03 21:19:48.841+03:30', NULL, NULL, '(UTC-08:00)', 'baja-california', 'Baja California');
INSERT INTO "public"."timezones" VALUES (29, 't', '2022-10-03 21:19:48.844+03:30', '2022-10-03 21:19:48.844+03:30', NULL, NULL, '(UTC-04:00)', 'santiago', 'Santiago');
INSERT INTO "public"."timezones" VALUES (30, 't', '2022-10-03 21:19:48.847+03:30', '2022-10-03 21:19:48.848+03:30', NULL, NULL, '(UTC-03:30)', 'newfoundland', 'Newfoundland');
INSERT INTO "public"."timezones" VALUES (31, 't', '2022-10-03 21:19:48.851+03:30', '2022-10-03 21:19:48.851+03:30', NULL, NULL, '(UTC+05:00)', 'ashgabat-tashkent', 'Ashgabat, Tashkent');
INSERT INTO "public"."timezones" VALUES (32, 't', '2022-10-03 21:19:48.854+03:30', '2022-10-03 21:19:48.854+03:30', NULL, NULL, '(UTC+05:00)', 'ekaterinburg', 'Ekaterinburg');
INSERT INTO "public"."timezones" VALUES (33, 't', '2022-10-03 21:19:48.857+03:30', '2022-10-03 21:19:48.858+03:30', NULL, NULL, '(UTC+05:00)', 'islamabad-karachi', 'Islamabad, Karachi');
INSERT INTO "public"."timezones" VALUES (34, 't', '2022-10-03 21:19:48.861+03:30', '2022-10-03 21:19:48.861+03:30', NULL, NULL, '(UTC+05:00)', 'qyzylorda', 'Qyzylorda');
INSERT INTO "public"."timezones" VALUES (35, 't', '2022-10-03 21:19:48.864+03:30', '2022-10-03 21:19:48.865+03:30', NULL, NULL, '(UTC+05:30)', 'chennai-kolkata-mumbai-new-delhi', 'Chennai, Kolkata, Mumbai, New Delhi');
INSERT INTO "public"."timezones" VALUES (36, 't', '2022-10-03 21:19:48.867+03:30', '2022-10-03 21:19:48.868+03:30', NULL, NULL, '(UTC+05:30)', 'sri-jayawardenepura', 'Sri Jayawardenepura');
INSERT INTO "public"."timezones" VALUES (37, 't', '2022-10-03 21:19:48.871+03:30', '2022-10-03 21:19:48.871+03:30', NULL, NULL, '(UTC+05:45)', 'kathmandu', 'Kathmandu');
INSERT INTO "public"."timezones" VALUES (38, 't', '2022-10-03 21:19:48.874+03:30', '2022-10-03 21:19:48.874+03:30', NULL, NULL, '(UTC-05:00)', 'eastern-time-(us-and-canada)', 'Eastern Time (US & Canada)');
INSERT INTO "public"."timezones" VALUES (39, 't', '2022-10-03 21:19:48.877+03:30', '2022-10-03 21:19:48.878+03:30', NULL, NULL, '(UTC-03:00)', 'araguaina', 'Araguaina');
INSERT INTO "public"."timezones" VALUES (40, 't', '2022-10-03 21:19:48.881+03:30', '2022-10-03 21:19:48.881+03:30', NULL, NULL, '(UTC-05:00)', 'haiti', 'Haiti');
INSERT INTO "public"."timezones" VALUES (41, 't', '2022-10-03 21:19:48.884+03:30', '2022-10-03 21:19:48.885+03:30', NULL, NULL, '(UTC-03:00)', 'brasilia', 'Brasilia');
INSERT INTO "public"."timezones" VALUES (42, 't', '2022-10-03 21:19:48.889+03:30', '2022-10-03 21:19:48.89+03:30', NULL, NULL, '(UTC-03:00)', 'cayenne-fortaleza', 'Cayenne, Fortaleza');
INSERT INTO "public"."timezones" VALUES (43, 't', '2022-10-03 21:19:48.893+03:30', '2022-10-03 21:19:48.893+03:30', NULL, NULL, '(UTC-08:00)', 'coordinated-universal-time-08', 'Coordinated Universal Time-08');
INSERT INTO "public"."timezones" VALUES (44, 't', '2022-10-03 21:19:48.896+03:30', '2022-10-03 21:19:48.897+03:30', NULL, NULL, '(UTC-05:00)', 'havana', 'Havana');
INSERT INTO "public"."timezones" VALUES (45, 't', '2022-10-03 21:19:48.899+03:30', '2022-10-03 21:19:48.9+03:30', NULL, NULL, '(UTC-08:00)', 'pacific-time-(us-and-canada)', 'Pacific Time (US & Canada)');
INSERT INTO "public"."timezones" VALUES (46, 't', '2022-10-03 21:19:48.902+03:30', '2022-10-03 21:19:48.903+03:30', NULL, NULL, '(UTC-03:00)', 'city-of-buenos-aires', 'City of Buenos Aires');
INSERT INTO "public"."timezones" VALUES (47, 't', '2022-10-03 21:19:48.906+03:30', '2022-10-03 21:19:48.906+03:30', NULL, NULL, '(UTC-03:00)', 'greenland', 'Greenland');
INSERT INTO "public"."timezones" VALUES (48, 't', '2022-10-03 21:19:48.909+03:30', '2022-10-03 21:19:48.91+03:30', NULL, NULL, '(UTC-03:00)', 'montevideo', 'Montevideo');
INSERT INTO "public"."timezones" VALUES (49, 't', '2022-10-03 21:19:48.913+03:30', '2022-10-03 21:19:48.913+03:30', NULL, NULL, '(UTC-03:00)', 'punta-arenas', 'Punta Arenas');
INSERT INTO "public"."timezones" VALUES (50, 't', '2022-10-03 21:19:48.916+03:30', '2022-10-03 21:19:48.917+03:30', NULL, NULL, '(UTC-03:00)', 'saint-pierre-and-miquelon', 'Saint Pierre and Miquelon');
INSERT INTO "public"."timezones" VALUES (51, 't', '2022-10-03 21:19:48.919+03:30', '2022-10-03 21:19:48.92+03:30', NULL, NULL, '(UTC-03:00)', 'salvador', 'Salvador');
INSERT INTO "public"."timezones" VALUES (52, 't', '2022-10-03 21:19:48.922+03:30', '2022-10-03 21:19:48.923+03:30', NULL, NULL, '(UTC-02:00)', 'coordinated-universal-time-02', 'Coordinated Universal Time-02');
INSERT INTO "public"."timezones" VALUES (53, 't', '2022-10-03 21:19:48.926+03:30', '2022-10-03 21:19:48.926+03:30', NULL, NULL, '(UTC-05:00)', 'indiana-(east)', 'Indiana (East)');
INSERT INTO "public"."timezones" VALUES (54, 't', '2022-10-03 21:19:48.929+03:30', '2022-10-03 21:19:48.93+03:30', NULL, NULL, '(UTC-05:00)', 'turks-and-caicos', 'Turks and Caicos');
INSERT INTO "public"."timezones" VALUES (55, 't', '2022-10-03 21:19:48.933+03:30', '2022-10-03 21:19:48.933+03:30', NULL, NULL, '(UTC-01:00)', 'azores', 'Azores');
INSERT INTO "public"."timezones" VALUES (56, 't', '2022-10-03 21:19:48.936+03:30', '2022-10-03 21:19:48.937+03:30', NULL, NULL, '(UTC-01:00)', 'cabo-verde-is.', 'Cabo Verde Is.');
INSERT INTO "public"."timezones" VALUES (57, 't', '2022-10-03 21:19:48.94+03:30', '2022-10-03 21:19:48.94+03:30', NULL, NULL, '(UTC)', 'coordinated-universal-time', 'Coordinated Universal Time');
INSERT INTO "public"."timezones" VALUES (58, 't', '2022-10-03 21:19:48.943+03:30', '2022-10-03 21:19:48.944+03:30', NULL, NULL, '(UTC-04:00)', 'asuncion', 'Asuncion');
INSERT INTO "public"."timezones" VALUES (59, 't', '2022-10-03 21:19:48.947+03:30', '2022-10-03 21:19:48.947+03:30', NULL, NULL, '(UTC-04:00)', 'atlantic-time-(canada)', 'Atlantic Time (Canada)');
INSERT INTO "public"."timezones" VALUES (60, 't', '2022-10-03 21:19:48.95+03:30', '2022-10-03 21:19:48.95+03:30', NULL, NULL, '(UTC-04:00)', 'caracas', 'Caracas');
INSERT INTO "public"."timezones" VALUES (61, 't', '2022-10-03 21:19:48.953+03:30', '2022-10-03 21:19:48.953+03:30', NULL, NULL, '(UTC-04:00)', 'cuiaba', 'Cuiaba');
INSERT INTO "public"."timezones" VALUES (62, 't', '2022-10-03 21:19:48.956+03:30', '2022-10-03 21:19:48.957+03:30', NULL, NULL, '(UTC+00:00)', 'dublin-edinburgh-lisbon-london', 'Dublin, Edinburgh, Lisbon, London');
INSERT INTO "public"."timezones" VALUES (63, 't', '2022-10-03 21:19:48.959+03:30', '2022-10-03 21:19:48.96+03:30', NULL, NULL, '(UTC+00:00)', 'monrovia-reykjavik', 'Monrovia, Reykjavik');
INSERT INTO "public"."timezones" VALUES (64, 't', '2022-10-03 21:19:48.963+03:30', '2022-10-03 21:19:48.963+03:30', NULL, NULL, '(UTC+00:00)', 'sao-tome', 'Sao Tome');
INSERT INTO "public"."timezones" VALUES (65, 't', '2022-10-03 21:19:48.966+03:30', '2022-10-03 21:19:48.967+03:30', NULL, NULL, '(UTC+01:00)', 'casablanca', 'Casablanca');
INSERT INTO "public"."timezones" VALUES (66, 't', '2022-10-03 21:19:48.969+03:30', '2022-10-03 21:19:48.97+03:30', NULL, NULL, '(UTC+01:00)', 'amsterdam-berlin-bern-rome-stockholm-vienna', 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna');
INSERT INTO "public"."timezones" VALUES (67, 't', '2022-10-03 21:19:48.973+03:30', '2022-10-03 21:19:48.973+03:30', NULL, NULL, '(UTC-04:00)', 'georgetown-la-paz-manaus-san-juan', 'Georgetown, La Paz, Manaus, San Juan');
INSERT INTO "public"."timezones" VALUES (68, 't', '2022-10-03 21:19:48.976+03:30', '2022-10-03 21:19:48.977+03:30', NULL, NULL, '(UTC+02:00)', 'windhoek', 'Windhoek');
INSERT INTO "public"."timezones" VALUES (69, 't', '2022-10-03 21:19:48.98+03:30', '2022-10-03 21:19:48.98+03:30', NULL, NULL, '(UTC+01:00)', 'belgrade-bratislava-budapest-ljubljana-prague', 'Belgrade, Bratislava, Budapest, Ljubljana, Prague');
INSERT INTO "public"."timezones" VALUES (70, 't', '2022-10-03 21:19:48.983+03:30', '2022-10-03 21:19:48.984+03:30', NULL, NULL, '(UTC+01:00)', 'brussels-copenhagen-madrid-paris', 'Brussels, Copenhagen, Madrid, Paris');
INSERT INTO "public"."timezones" VALUES (71, 't', '2022-10-03 21:19:48.987+03:30', '2022-10-03 21:19:48.988+03:30', NULL, NULL, '(UTC+01:00)', 'sarajevo-skopje-warsaw-zagreb', 'Sarajevo, Skopje, Warsaw, Zagreb');
INSERT INTO "public"."timezones" VALUES (72, 't', '2022-10-03 21:19:48.991+03:30', '2022-10-03 21:19:48.991+03:30', NULL, NULL, '(UTC+01:00)', 'west-central-africa', 'West Central Africa');
INSERT INTO "public"."timezones" VALUES (73, 't', '2022-10-03 21:19:48.994+03:30', '2022-10-03 21:19:48.994+03:30', NULL, NULL, '(UTC+02:00)', 'amman', 'Amman');
INSERT INTO "public"."timezones" VALUES (74, 't', '2022-10-03 21:19:48.997+03:30', '2022-10-03 21:19:48.998+03:30', NULL, NULL, '(UTC+02:00)', 'athens-bucharest', 'Athens, Bucharest');
INSERT INTO "public"."timezones" VALUES (75, 't', '2022-10-03 21:19:49.001+03:30', '2022-10-03 21:19:49.002+03:30', NULL, NULL, '(UTC+02:00)', 'beirut', 'Beirut');
INSERT INTO "public"."timezones" VALUES (76, 't', '2022-10-03 21:19:49.005+03:30', '2022-10-03 21:19:49.006+03:30', NULL, NULL, '(UTC+02:00)', 'cairo', 'Cairo');
INSERT INTO "public"."timezones" VALUES (77, 't', '2022-10-03 21:19:49.009+03:30', '2022-10-03 21:19:49.009+03:30', NULL, NULL, '(UTC+02:00)', 'chisinau', 'Chisinau');
INSERT INTO "public"."timezones" VALUES (78, 't', '2022-10-03 21:19:49.012+03:30', '2022-10-03 21:19:49.013+03:30', NULL, NULL, '(UTC+02:00)', 'damascus', 'Damascus');
INSERT INTO "public"."timezones" VALUES (79, 't', '2022-10-03 21:19:49.015+03:30', '2022-10-03 21:19:49.016+03:30', NULL, NULL, '(UTC+02:00)', 'gaza-hebron', 'Gaza, Hebron');
INSERT INTO "public"."timezones" VALUES (80, 't', '2022-10-03 21:19:49.018+03:30', '2022-10-03 21:19:49.019+03:30', NULL, NULL, '(UTC+02:00)', 'harare-pretoria', 'Harare, Pretoria');
INSERT INTO "public"."timezones" VALUES (81, 't', '2022-10-03 21:19:49.022+03:30', '2022-10-03 21:19:49.022+03:30', NULL, NULL, '(UTC+02:00)', 'helsinki-kyiv-riga-sofia-tallinn-vilnius', 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius');
INSERT INTO "public"."timezones" VALUES (82, 't', '2022-10-03 21:19:49.025+03:30', '2022-10-03 21:19:49.026+03:30', NULL, NULL, '(UTC+02:00)', 'jerusalem', 'Jerusalem');
INSERT INTO "public"."timezones" VALUES (83, 't', '2022-10-03 21:19:49.028+03:30', '2022-10-03 21:19:49.029+03:30', NULL, NULL, '(UTC+02:00)', 'juba', 'Juba');
INSERT INTO "public"."timezones" VALUES (84, 't', '2022-10-03 21:19:49.032+03:30', '2022-10-03 21:19:49.032+03:30', NULL, NULL, '(UTC+02:00)', 'kaliningrad', 'Kaliningrad');
INSERT INTO "public"."timezones" VALUES (85, 't', '2022-10-03 21:19:49.035+03:30', '2022-10-03 21:19:49.035+03:30', NULL, NULL, '(UTC+02:00)', 'khartoum', 'Khartoum');
INSERT INTO "public"."timezones" VALUES (86, 't', '2022-10-03 21:19:49.037+03:30', '2022-10-03 21:19:49.038+03:30', NULL, NULL, '(UTC+02:00)', 'tripoli', 'Tripoli');
INSERT INTO "public"."timezones" VALUES (87, 't', '2022-10-03 21:19:49.04+03:30', '2022-10-03 21:19:49.041+03:30', NULL, NULL, '(UTC+03:00)', 'baghdad', 'Baghdad');
INSERT INTO "public"."timezones" VALUES (88, 't', '2022-10-03 21:19:49.043+03:30', '2022-10-03 21:19:49.044+03:30', NULL, NULL, '(UTC+03:00)', 'istanbul', 'Istanbul');
INSERT INTO "public"."timezones" VALUES (89, 't', '2022-10-03 21:19:49.046+03:30', '2022-10-03 21:19:49.047+03:30', NULL, NULL, '(UTC+03:00)', 'kuwait-riyadh', 'Kuwait, Riyadh');
INSERT INTO "public"."timezones" VALUES (90, 't', '2022-10-03 21:19:49.049+03:30', '2022-10-03 21:19:49.05+03:30', NULL, NULL, '(UTC+03:00)', 'minsk', 'Minsk');
INSERT INTO "public"."timezones" VALUES (91, 't', '2022-10-03 21:19:49.052+03:30', '2022-10-03 21:19:49.053+03:30', NULL, NULL, '(UTC+03:00)', 'moscow-st-petersburg', 'Moscow, St Petersburg');
INSERT INTO "public"."timezones" VALUES (92, 't', '2022-10-03 21:19:49.055+03:30', '2022-10-03 21:19:49.056+03:30', NULL, NULL, '(UTC+03:00)', 'nairobi', 'Nairobi');
INSERT INTO "public"."timezones" VALUES (93, 't', '2022-10-03 21:19:49.058+03:30', '2022-10-03 21:19:49.059+03:30', NULL, NULL, '(UTC+03:00)', 'volgograd', 'Volgograd');
INSERT INTO "public"."timezones" VALUES (94, 't', '2022-10-03 21:19:49.061+03:30', '2022-10-03 21:19:49.061+03:30', NULL, NULL, '(UTC+03:30)', 'tehran', 'Tehran');
INSERT INTO "public"."timezones" VALUES (95, 't', '2022-10-03 21:19:49.064+03:30', '2022-10-03 21:19:49.065+03:30', NULL, NULL, '(UTC+06:00)', 'astana', 'Astana');
INSERT INTO "public"."timezones" VALUES (96, 't', '2022-10-03 21:19:49.068+03:30', '2022-10-03 21:19:49.068+03:30', NULL, NULL, '(UTC+06:00)', 'dhaka', 'Dhaka');
INSERT INTO "public"."timezones" VALUES (97, 't', '2022-10-03 21:19:49.071+03:30', '2022-10-03 21:19:49.072+03:30', NULL, NULL, '(UTC+06:00)', 'omsk', 'Omsk');
INSERT INTO "public"."timezones" VALUES (98, 't', '2022-10-03 21:19:49.074+03:30', '2022-10-03 21:19:49.075+03:30', NULL, NULL, '(UTC+06:30)', 'yangon-(rangoon)', 'Yangon (Rangoon)');
INSERT INTO "public"."timezones" VALUES (99, 't', '2022-10-03 21:19:49.077+03:30', '2022-10-03 21:19:49.078+03:30', NULL, NULL, '(UTC+07:00)', 'bangkok-hanoi-jakarta', 'Bangkok, Hanoi, Jakarta');
INSERT INTO "public"."timezones" VALUES (100, 't', '2022-10-03 21:19:49.08+03:30', '2022-10-03 21:19:49.081+03:30', NULL, NULL, '(UTC+07:00)', 'barnaul-gorno-altaysk', 'Barnaul, Gorno-Altaysk');
INSERT INTO "public"."timezones" VALUES (101, 't', '2022-10-03 21:19:49.083+03:30', '2022-10-03 21:19:49.083+03:30', NULL, NULL, '(UTC+07:00)', 'hovd', 'Hovd');
INSERT INTO "public"."timezones" VALUES (102, 't', '2022-10-03 21:19:49.085+03:30', '2022-10-03 21:19:49.085+03:30', NULL, NULL, '(UTC+07:00)', 'krasnoyarsk', 'Krasnoyarsk');
INSERT INTO "public"."timezones" VALUES (103, 't', '2022-10-03 21:19:49.087+03:30', '2022-10-03 21:19:49.087+03:30', NULL, NULL, '(UTC+07:00)', 'novosibirsk', 'Novosibirsk');
INSERT INTO "public"."timezones" VALUES (104, 't', '2022-10-03 21:19:49.089+03:30', '2022-10-03 21:19:49.089+03:30', NULL, NULL, '(UTC+07:00)', 'tomsk', 'Tomsk');
INSERT INTO "public"."timezones" VALUES (105, 't', '2022-10-03 21:19:49.091+03:30', '2022-10-03 21:19:49.091+03:30', NULL, NULL, '(UTC+08:00)', 'beijing-chongqing-hong-kong-urumqi', 'Beijing, Chongqing, Hong Kong, Urumqi');
INSERT INTO "public"."timezones" VALUES (106, 't', '2022-10-03 21:19:49.093+03:30', '2022-10-03 21:19:49.093+03:30', NULL, NULL, '(UTC+08:00)', 'irkutsk', 'Irkutsk');
INSERT INTO "public"."timezones" VALUES (107, 't', '2022-10-03 21:19:49.095+03:30', '2022-10-03 21:19:49.096+03:30', NULL, NULL, '(UTC+08:00)', 'kuala-lumpur-singapore', 'Kuala Lumpur, Singapore');
INSERT INTO "public"."timezones" VALUES (108, 't', '2022-10-03 21:19:49.097+03:30', '2022-10-03 21:19:49.098+03:30', NULL, NULL, '(UTC+08:00)', 'perth', 'Perth');
INSERT INTO "public"."timezones" VALUES (109, 't', '2022-10-03 21:19:49.099+03:30', '2022-10-03 21:19:49.1+03:30', NULL, NULL, '(UTC+08:00)', 'taipei', 'Taipei');
INSERT INTO "public"."timezones" VALUES (110, 't', '2022-10-03 21:19:49.101+03:30', '2022-10-03 21:19:49.102+03:30', NULL, NULL, '(UTC+08:00)', 'ulaanbaatar', 'Ulaanbaatar');
INSERT INTO "public"."timezones" VALUES (111, 't', '2022-10-03 21:19:49.103+03:30', '2022-10-03 21:19:49.104+03:30', NULL, NULL, '(UTC+08:45)', 'eucla', 'Eucla');
INSERT INTO "public"."timezones" VALUES (112, 't', '2022-10-03 21:19:49.105+03:30', '2022-10-03 21:19:49.106+03:30', NULL, NULL, '(UTC+09:00)', 'chita', 'Chita');
INSERT INTO "public"."timezones" VALUES (113, 't', '2022-10-03 21:19:49.109+03:30', '2022-10-03 21:19:49.109+03:30', NULL, NULL, '(UTC+09:00)', 'osaka-sapporo-tokyp', 'Osaka, Sapporo, Tokyp');
INSERT INTO "public"."timezones" VALUES (114, 't', '2022-10-03 21:19:49.111+03:30', '2022-10-03 21:19:49.112+03:30', NULL, NULL, '(UTC+09:00)', 'pyongyang', 'Pyongyang');
INSERT INTO "public"."timezones" VALUES (115, 't', '2022-10-03 21:19:49.113+03:30', '2022-10-03 21:19:49.114+03:30', NULL, NULL, '(UTC+09:00)', 'seoul', 'Seoul');
INSERT INTO "public"."timezones" VALUES (116, 't', '2022-10-03 21:19:49.115+03:30', '2022-10-03 21:19:49.116+03:30', NULL, NULL, '(UTC+09:00)', 'yakutsk', 'Yakutsk');
INSERT INTO "public"."timezones" VALUES (117, 't', '2022-10-03 21:19:49.118+03:30', '2022-10-03 21:19:49.118+03:30', NULL, NULL, '(UTC+09:30)', 'adelaide', 'Adelaide');
INSERT INTO "public"."timezones" VALUES (118, 't', '2022-10-03 21:19:49.121+03:30', '2022-10-03 21:19:49.121+03:30', NULL, NULL, '(UTC+09:30)', 'darwin', 'Darwin');
INSERT INTO "public"."timezones" VALUES (119, 't', '2022-10-03 21:19:49.123+03:30', '2022-10-03 21:19:49.124+03:30', NULL, NULL, '(UTC+10:00)', 'brisbane', 'Brisbane');
INSERT INTO "public"."timezones" VALUES (120, 't', '2022-10-03 21:19:49.125+03:30', '2022-10-03 21:19:49.126+03:30', NULL, NULL, '(UTC+10:00)', 'canberra-melbourne-sydney', 'Canberra, Melbourne, Sydney');
INSERT INTO "public"."timezones" VALUES (121, 't', '2022-10-03 21:19:49.128+03:30', '2022-10-03 21:19:49.128+03:30', NULL, NULL, '(UTC+10:00)', 'guam-port-moresby', 'Guam, Port Moresby');
INSERT INTO "public"."timezones" VALUES (122, 't', '2022-10-03 21:19:49.13+03:30', '2022-10-03 21:19:49.13+03:30', NULL, NULL, '(UTC+10:00)', 'hobart', 'Hobart');
INSERT INTO "public"."timezones" VALUES (123, 't', '2022-10-03 21:19:49.132+03:30', '2022-10-03 21:19:49.133+03:30', NULL, NULL, '(UTC+10:00)', 'vladivostok', 'Vladivostok');
INSERT INTO "public"."timezones" VALUES (124, 't', '2022-10-03 21:19:49.134+03:30', '2022-10-03 21:19:49.135+03:30', NULL, NULL, '(UTC+10:30)', 'lord-howe-island', 'Lord Howe Island');
INSERT INTO "public"."timezones" VALUES (125, 't', '2022-10-03 21:19:49.136+03:30', '2022-10-03 21:19:49.137+03:30', NULL, NULL, '(UTC+11:00)', 'bougainville-island', 'Bougainville Island');
INSERT INTO "public"."timezones" VALUES (126, 't', '2022-10-03 21:19:49.139+03:30', '2022-10-03 21:19:49.139+03:30', NULL, NULL, '(UTC+11:00)', 'chokurdath', 'Chokurdath');
INSERT INTO "public"."timezones" VALUES (127, 't', '2022-10-03 21:19:49.141+03:30', '2022-10-03 21:19:49.141+03:30', NULL, NULL, '(UTC+11:00)', 'magadan', 'Magadan');
INSERT INTO "public"."timezones" VALUES (128, 't', '2022-10-03 21:19:49.143+03:30', '2022-10-03 21:19:49.144+03:30', NULL, NULL, '(UTC+11:00)', 'norfolk-island', 'Norfolk Island');
INSERT INTO "public"."timezones" VALUES (129, 't', '2022-10-03 21:19:49.145+03:30', '2022-10-03 21:19:49.146+03:30', NULL, NULL, '(UTC+11:00)', 'sakhalin', 'Sakhalin');
INSERT INTO "public"."timezones" VALUES (130, 't', '2022-10-03 21:19:49.147+03:30', '2022-10-03 21:19:49.148+03:30', NULL, NULL, '(UTC+11:00)', 'solomon-is.-new-caledonia', 'Solomon Is. New Caledonia');
INSERT INTO "public"."timezones" VALUES (131, 't', '2022-10-03 21:19:49.15+03:30', '2022-10-03 21:19:49.15+03:30', NULL, NULL, '(UTC+12:00)', 'anadyr-petropavlovsk-kamchatsky', 'Anadyr, Petropavlovsk-Kamchatsky');
INSERT INTO "public"."timezones" VALUES (132, 't', '2022-10-03 21:19:49.152+03:30', '2022-10-03 21:19:49.152+03:30', NULL, NULL, '(UTC+12:00)', 'auckland-wellington', 'Auckland, Wellington');
INSERT INTO "public"."timezones" VALUES (133, 't', '2022-10-03 21:19:49.154+03:30', '2022-10-03 21:19:49.155+03:30', NULL, NULL, '(UTC+12:00)', 'coordinated-universal-time+12', 'Coordinated Universal Time+12');
INSERT INTO "public"."timezones" VALUES (134, 't', '2022-10-03 21:19:49.156+03:30', '2022-10-03 21:19:49.157+03:30', NULL, NULL, '(UTC+12:00)', 'fiji', 'Fiji');
INSERT INTO "public"."timezones" VALUES (135, 't', '2022-10-03 21:19:49.159+03:30', '2022-10-03 21:19:49.159+03:30', NULL, NULL, '(UTC+12:45)', 'chatham-islands', 'Chatham Islands');
INSERT INTO "public"."timezones" VALUES (136, 't', '2022-10-03 21:19:49.161+03:30', '2022-10-03 21:19:49.161+03:30', NULL, NULL, '(UTC+13:00)', 'coordinated-universal-time+13', 'Coordinated Universal Time+13');
INSERT INTO "public"."timezones" VALUES (137, 't', '2022-10-03 21:19:49.163+03:30', '2022-10-03 21:19:49.164+03:30', NULL, NULL, '(UTC+13:00)', 'nukualofa', 'Nuku`alofa');
INSERT INTO "public"."timezones" VALUES (138, 't', '2022-10-03 21:19:49.166+03:30', '2022-10-03 21:19:49.166+03:30', NULL, NULL, '(UTC+13:00)', 'samoa', 'Samoa');
INSERT INTO "public"."timezones" VALUES (139, 't', '2022-10-03 21:19:49.168+03:30', '2022-10-03 21:19:49.168+03:30', NULL, NULL, '(UTC+14:00)', 'kiritimati-island', 'Kiritimati Island');

-- ----------------------------
-- Table structure for timezonesTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."timezonesTs";
CREATE TABLE "public"."timezonesTs" (
  "id" int4 NOT NULL DEFAULT nextval('"timezonesTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of timezonesTs
-- ----------------------------

-- ----------------------------
-- Table structure for toasts
-- ----------------------------
DROP TABLE IF EXISTS "public"."toasts";
CREATE TABLE "public"."toasts" (
  "id" int4 NOT NULL DEFAULT nextval('toasts_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "slug" text COLLATE "pg_catalog"."default",
  "title" text COLLATE "pg_catalog"."default",
  "message" text COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of toasts
-- ----------------------------

-- ----------------------------
-- Table structure for toastsTs
-- ----------------------------
DROP TABLE IF EXISTS "public"."toastsTs";
CREATE TABLE "public"."toastsTs" (
  "id" int4 NOT NULL DEFAULT nextval('"toastsTs_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "message" text COLLATE "pg_catalog"."default" NOT NULL,
  "recordId" int4,
  "languageId" int4
)
;

-- ----------------------------
-- Records of toastsTs
-- ----------------------------

-- ----------------------------
-- Table structure for uploads
-- ----------------------------
DROP TABLE IF EXISTS "public"."uploads";
CREATE TABLE "public"."uploads" (
  "id" int4 NOT NULL DEFAULT nextval('uploads_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "name" varchar(99) COLLATE "pg_catalog"."default" NOT NULL,
  "extention" varchar(99) COLLATE "pg_catalog"."default" NOT NULL,
  "type" varchar(99) COLLATE "pg_catalog"."default" NOT NULL,
  "path" text COLLATE "pg_catalog"."default" NOT NULL,
  "url" text COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of uploads
-- ----------------------------

-- ----------------------------
-- Table structure for userAwards
-- ----------------------------
DROP TABLE IF EXISTS "public"."userAwards";
CREATE TABLE "public"."userAwards" (
  "id" int4 NOT NULL DEFAULT nextval('"userAwards_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "date" date,
  "description" text COLLATE "pg_catalog"."default",
  "userId" int4
)
;

-- ----------------------------
-- Records of userAwards
-- ----------------------------

-- ----------------------------
-- Table structure for userCompanies
-- ----------------------------
DROP TABLE IF EXISTS "public"."userCompanies";
CREATE TABLE "public"."userCompanies" (
  "id" int4 NOT NULL DEFAULT nextval('"userCompanies_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "identifier" text COLLATE "pg_catalog"."default" NOT NULL,
  "createdBy" int4,
  "updatedBy" int4,
  "name" text COLLATE "pg_catalog"."default" NOT NULL,
  "phone" text COLLATE "pg_catalog"."default",
  "email" text COLLATE "pg_catalog"."default",
  "address" text COLLATE "pg_catalog"."default",
  "taxId" text COLLATE "pg_catalog"."default",
  "website" text COLLATE "pg_catalog"."default",
  "companySize" int4,
  "specialities" text[] COLLATE "pg_catalog"."default",
  "about" text COLLATE "pg_catalog"."default",
  "logoId" text COLLATE "pg_catalog"."default",
  "bannerId" text COLLATE "pg_catalog"."default",
  "isVerified" bool NOT NULL DEFAULT false,
  "isPrivate" bool NOT NULL DEFAULT false,
  "isDisabled" bool NOT NULL DEFAULT false,
  "userId" int4,
  "industryId" int4,
  "countryId" int4
)
;

-- ----------------------------
-- Records of userCompanies
-- ----------------------------

-- ----------------------------
-- Table structure for userCourses
-- ----------------------------
DROP TABLE IF EXISTS "public"."userCourses";
CREATE TABLE "public"."userCourses" (
  "id" int4 NOT NULL DEFAULT nextval('"userCourses_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "fromDate" date,
  "toDate" date,
  "present" bool,
  "institute" text COLLATE "pg_catalog"."default",
  "userId" int4
)
;

-- ----------------------------
-- Records of userCourses
-- ----------------------------

-- ----------------------------
-- Table structure for userEducations
-- ----------------------------
DROP TABLE IF EXISTS "public"."userEducations";
CREATE TABLE "public"."userEducations" (
  "id" int4 NOT NULL DEFAULT nextval('"userEducations_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "fromDate" date,
  "toDate" date,
  "present" bool DEFAULT false,
  "institute" text COLLATE "pg_catalog"."default",
  "major" text COLLATE "pg_catalog"."default",
  "userId" int4,
  "degreeId" int4,
  "countryId" int4,
  "stateId" int4,
  "cityId" int4
)
;

-- ----------------------------
-- Records of userEducations
-- ----------------------------

-- ----------------------------
-- Table structure for userExperiences
-- ----------------------------
DROP TABLE IF EXISTS "public"."userExperiences";
CREATE TABLE "public"."userExperiences" (
  "id" int4 NOT NULL DEFAULT nextval('"userExperiences_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "fromDate" date,
  "toDate" date,
  "present" bool,
  "institute" text COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "userId" int4,
  "employmentTypeId" int4,
  "countryId" int4,
  "stateId" int4,
  "cityId" int4
)
;

-- ----------------------------
-- Records of userExperiences
-- ----------------------------

-- ----------------------------
-- Table structure for userExpertises
-- ----------------------------
DROP TABLE IF EXISTS "public"."userExpertises";
CREATE TABLE "public"."userExpertises" (
  "id" int4 NOT NULL DEFAULT nextval('"userExpertises_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "percentage" int4,
  "userId" int4,
  "dominationId" int4
)
;

-- ----------------------------
-- Records of userExpertises
-- ----------------------------

-- ----------------------------
-- Table structure for userExtraActivities
-- ----------------------------
DROP TABLE IF EXISTS "public"."userExtraActivities";
CREATE TABLE "public"."userExtraActivities" (
  "id" int4 NOT NULL DEFAULT nextval('"userExtraActivities_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "fromDate" date,
  "toDate" date,
  "present" bool,
  "institute" text COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "userId" int4,
  "countryId" int4,
  "stateId" int4,
  "cityId" int4
)
;

-- ----------------------------
-- Records of userExtraActivities
-- ----------------------------

-- ----------------------------
-- Table structure for userFollowers
-- ----------------------------
DROP TABLE IF EXISTS "public"."userFollowers";
CREATE TABLE "public"."userFollowers" (
  "id" int4 NOT NULL DEFAULT nextval('"userFollowers_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "userId" int4
)
;

-- ----------------------------
-- Records of userFollowers
-- ----------------------------

-- ----------------------------
-- Table structure for userInterships
-- ----------------------------
DROP TABLE IF EXISTS "public"."userInterships";
CREATE TABLE "public"."userInterships" (
  "id" int4 NOT NULL DEFAULT nextval('"userInterships_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "fromDate" date,
  "toDate" date,
  "present" bool,
  "employer" text COLLATE "pg_catalog"."default",
  "userId" int4,
  "countryId" int4,
  "stateId" int4,
  "cityId" int4
)
;

-- ----------------------------
-- Records of userInterships
-- ----------------------------

-- ----------------------------
-- Table structure for userLanguages
-- ----------------------------
DROP TABLE IF EXISTS "public"."userLanguages";
CREATE TABLE "public"."userLanguages" (
  "id" int4 NOT NULL DEFAULT nextval('"userLanguages_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "percentage" int4,
  "userId" int4,
  "languageId" int4,
  "certificateId" int4,
  "levelId" int4
)
;

-- ----------------------------
-- Records of userLanguages
-- ----------------------------

-- ----------------------------
-- Table structure for userLikes
-- ----------------------------
DROP TABLE IF EXISTS "public"."userLikes";
CREATE TABLE "public"."userLikes" (
  "id" int4 NOT NULL DEFAULT nextval('"userLikes_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "like" bool,
  "userId" int4
)
;

-- ----------------------------
-- Records of userLikes
-- ----------------------------

-- ----------------------------
-- Table structure for userPortfolios
-- ----------------------------
DROP TABLE IF EXISTS "public"."userPortfolios";
CREATE TABLE "public"."userPortfolios" (
  "id" int4 NOT NULL DEFAULT nextval('"userPortfolios_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "link" text COLLATE "pg_catalog"."default",
  "videoLink" text COLLATE "pg_catalog"."default",
  "imageIds" text[] COLLATE "pg_catalog"."default",
  "userId" int4
)
;

-- ----------------------------
-- Records of userPortfolios
-- ----------------------------

-- ----------------------------
-- Table structure for userReferences
-- ----------------------------
DROP TABLE IF EXISTS "public"."userReferences";
CREATE TABLE "public"."userReferences" (
  "id" int4 NOT NULL DEFAULT nextval('"userReferences_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "fullName" text COLLATE "pg_catalog"."default" NOT NULL,
  "company" text COLLATE "pg_catalog"."default",
  "phone" text COLLATE "pg_catalog"."default",
  "email" text COLLATE "pg_catalog"."default",
  "userId" int4
)
;

-- ----------------------------
-- Records of userReferences
-- ----------------------------

-- ----------------------------
-- Table structure for userSkills
-- ----------------------------
DROP TABLE IF EXISTS "public"."userSkills";
CREATE TABLE "public"."userSkills" (
  "id" int4 NOT NULL DEFAULT nextval('"userSkills_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "percentage" int4,
  "userId" int4,
  "dominationId" int4
)
;

-- ----------------------------
-- Records of userSkills
-- ----------------------------

-- ----------------------------
-- Table structure for userSocials
-- ----------------------------
DROP TABLE IF EXISTS "public"."userSocials";
CREATE TABLE "public"."userSocials" (
  "id" int4 NOT NULL DEFAULT nextval('"userSocials_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "username" text COLLATE "pg_catalog"."default" NOT NULL,
  "userId" int4 NOT NULL,
  "socialId" int4 NOT NULL
)
;

-- ----------------------------
-- Records of userSocials
-- ----------------------------

-- ----------------------------
-- Table structure for userStatus
-- ----------------------------
DROP TABLE IF EXISTS "public"."userStatus";
CREATE TABLE "public"."userStatus" (
  "id" int4 NOT NULL DEFAULT nextval('"userStatus_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "status" text COLLATE "pg_catalog"."default",
  "userId" int4
)
;

-- ----------------------------
-- Records of userStatus
-- ----------------------------

-- ----------------------------
-- Table structure for userViews
-- ----------------------------
DROP TABLE IF EXISTS "public"."userViews";
CREATE TABLE "public"."userViews" (
  "id" int4 NOT NULL DEFAULT nextval('"userViews_id_seq"'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "createdBy" int4,
  "updatedBy" int4,
  "userId" int4
)
;

-- ----------------------------
-- Records of userViews
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "isLive" bool NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamptz(3),
  "identifier" text COLLATE "pg_catalog"."default" NOT NULL,
  "updatedBy" int4,
  "isActive" bool DEFAULT true,
  "provider" text COLLATE "pg_catalog"."default" NOT NULL,
  "providerId" text COLLATE "pg_catalog"."default",
  "givenName" text COLLATE "pg_catalog"."default",
  "familyName" text COLLATE "pg_catalog"."default",
  "email" text COLLATE "pg_catalog"."default",
  "dateOfBirth" date,
  "phone" text COLLATE "pg_catalog"."default",
  "jobTitle" text COLLATE "pg_catalog"."default",
  "website" text COLLATE "pg_catalog"."default",
  "minSalary" text COLLATE "pg_catalog"."default",
  "maxSalary" text COLLATE "pg_catalog"."default",
  "password" text COLLATE "pg_catalog"."default",
  "secret" jsonb,
  "answer1" text COLLATE "pg_catalog"."default",
  "answer2" text COLLATE "pg_catalog"."default",
  "answer3" text COLLATE "pg_catalog"."default",
  "avatar" text COLLATE "pg_catalog"."default",
  "avatarId" text COLLATE "pg_catalog"."default",
  "bannerId" text COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "zipCode" text COLLATE "pg_catalog"."default",
  "fullAddress" text COLLATE "pg_catalog"."default",
  "streetAddress" text COLLATE "pg_catalog"."default",
  "location" text COLLATE "pg_catalog"."default",
  "latitude" float8 DEFAULT 0,
  "longitude" float8 DEFAULT 0,
  "isVerified" bool NOT NULL DEFAULT false,
  "isPhoneVerified" bool NOT NULL DEFAULT false,
  "isAcceptedTerms" bool NOT NULL DEFAULT false,
  "isRememberMe" bool NOT NULL DEFAULT false,
  "is2FA" bool NOT NULL DEFAULT false,
  "isSidebarMinimized" bool NOT NULL DEFAULT false,
  "hobbies" text COLLATE "pg_catalog"."default",
  "additionalInfo" text COLLATE "pg_catalog"."default",
  "publications" text COLLATE "pg_catalog"."default",
  "testimonial" text COLLATE "pg_catalog"."default",
  "loginMethod" text COLLATE "pg_catalog"."default",
  "about" text COLLATE "pg_catalog"."default",
  "otp" text COLLATE "pg_catalog"."default",
  "otpCreatedAt" text COLLATE "pg_catalog"."default",
  "showOnTestimonials" bool NOT NULL DEFAULT false,
  "jobOffersInDash" bool DEFAULT false,
  "jobOffersInEmail" bool DEFAULT false,
  "applyJobInDash" bool DEFAULT false,
  "applyJobInEmail" bool DEFAULT false,
  "projectInvitationInDash" bool DEFAULT false,
  "projectInvitationInEmail" bool DEFAULT false,
  "appliedJobsStatusInDash" bool DEFAULT false,
  "appliedJobsStatusInEmail" bool DEFAULT false,
  "fieldOfStudyAdsInDash" bool DEFAULT false,
  "fieldOfStudyAdsInEmail" bool DEFAULT false,
  "resumeViewInDash" bool DEFAULT false,
  "resumeViewInEmail" bool DEFAULT false,
  "passwordChangeInDash" bool DEFAULT false,
  "passwordChangeInEmail" bool DEFAULT false,
  "newConnectionInDash" bool DEFAULT false,
  "newConnectionInEmail" bool DEFAULT false,
  "blogContentInDash" bool DEFAULT false,
  "blogContentInEmail" bool DEFAULT false,
  "courseSuggestionsInDash" bool DEFAULT false,
  "courseSuggestionsInEmail" bool DEFAULT false,
  "discountsInDash" bool DEFAULT false,
  "discountsInEmail" bool DEFAULT false,
  "showResumeToEmployers" bool DEFAULT true,
  "isProfilePublic" bool DEFAULT true,
  "yourSessions" bool DEFAULT true,
  "defaultGridView" bool DEFAULT true,
  "resultsPerPage" int4 DEFAULT 10,
  "genderId" int4,
  "themeId" int4,
  "roleId" int4,
  "birthCountryId" int4,
  "birthStateId" int4,
  "birthCityId" int4,
  "residentCountryId" int4,
  "residentStateId" int4,
  "residentCityId" int4,
  "nationalityId" int4,
  "currencyId" int4,
  "languageId" int4,
  "timezoneId" int4,
  "industryId" int4,
  "degreeId" int4,
  "drivingLicenseId" int4,
  "question1Id" int4,
  "question2Id" int4,
  "question3Id" int4,
  "salaryPeriodId" int4
)
;

-- ----------------------------
-- Records of users
-- ----------------------------

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."academicLevelsTs_id_seq"
OWNED BY "public"."academicLevelsTs"."id";
SELECT setval('"public"."academicLevelsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."academicLevels_id_seq"
OWNED BY "public"."academicLevels"."id";
SELECT setval('"public"."academicLevels_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."actorTypes_id_seq"
OWNED BY "public"."actorTypes"."id";
SELECT setval('"public"."actorTypes_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."applicationResultsTs_id_seq"
OWNED BY "public"."applicationResultsTs"."id";
SELECT setval('"public"."applicationResultsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."applicationResults_id_seq"
OWNED BY "public"."applicationResults"."id";
SELECT setval('"public"."applicationResults_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."applications_id_seq"
OWNED BY "public"."applications"."id";
SELECT setval('"public"."applications_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."chats_id_seq"
OWNED BY "public"."chats"."id";
SELECT setval('"public"."chats_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."citiesTs_id_seq"
OWNED BY "public"."citiesTs"."id";
SELECT setval('"public"."citiesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."cities_id_seq"
OWNED BY "public"."cities"."id";
SELECT setval('"public"."cities_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."companyJobs_id_seq"
OWNED BY "public"."companyJobs"."id";
SELECT setval('"public"."companyJobs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."companyMembers_id_seq"
OWNED BY "public"."companyMembers"."id";
SELECT setval('"public"."companyMembers_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."companyProjects_id_seq"
OWNED BY "public"."companyProjects"."id";
SELECT setval('"public"."companyProjects_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."companySocials_id_seq"
OWNED BY "public"."companySocials"."id";
SELECT setval('"public"."companySocials_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."contactUs_id_seq"
OWNED BY "public"."contactUs"."id";
SELECT setval('"public"."contactUs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."countriesTs_id_seq"
OWNED BY "public"."countriesTs"."id";
SELECT setval('"public"."countriesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."countries_id_seq"
OWNED BY "public"."countries"."id";
SELECT setval('"public"."countries_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."currenciesTs_id_seq"
OWNED BY "public"."currenciesTs"."id";
SELECT setval('"public"."currenciesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."currencies_id_seq"
OWNED BY "public"."currencies"."id";
SELECT setval('"public"."currencies_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."daysTs_id_seq"
OWNED BY "public"."daysTs"."id";
SELECT setval('"public"."daysTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."days_id_seq"
OWNED BY "public"."days"."id";
SELECT setval('"public"."days_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."dominationLevelsTs_id_seq"
OWNED BY "public"."dominationLevelsTs"."id";
SELECT setval('"public"."dominationLevelsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."dominationLevels_id_seq"
OWNED BY "public"."dominationLevels"."id";
SELECT setval('"public"."dominationLevels_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."drivingLicensesTs_id_seq"
OWNED BY "public"."drivingLicensesTs"."id";
SELECT setval('"public"."drivingLicensesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."drivingLicenses_id_seq"
OWNED BY "public"."drivingLicenses"."id";
SELECT setval('"public"."drivingLicenses_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."employmentTypesTs_id_seq"
OWNED BY "public"."employmentTypesTs"."id";
SELECT setval('"public"."employmentTypesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."employmentTypes_id_seq"
OWNED BY "public"."employmentTypes"."id";
SELECT setval('"public"."employmentTypes_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."gendersTs_id_seq"
OWNED BY "public"."gendersTs"."id";
SELECT setval('"public"."gendersTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."genders_id_seq"
OWNED BY "public"."genders"."id";
SELECT setval('"public"."genders_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."industriesTs_id_seq"
OWNED BY "public"."industriesTs"."id";
SELECT setval('"public"."industriesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."industries_id_seq"
OWNED BY "public"."industries"."id";
SELECT setval('"public"."industries_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."invitations_id_seq"
OWNED BY "public"."invitations"."id";
SELECT setval('"public"."invitations_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."jobQuestionsCategoriesTs_id_seq"
OWNED BY "public"."jobQuestionsCategoriesTs"."id";
SELECT setval('"public"."jobQuestionsCategoriesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."jobQuestionsCategories_id_seq"
OWNED BY "public"."jobQuestionsCategories"."id";
SELECT setval('"public"."jobQuestionsCategories_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."jobQuestions_id_seq"
OWNED BY "public"."jobQuestions"."id";
SELECT setval('"public"."jobQuestions_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."jobSkills_id_seq"
OWNED BY "public"."jobSkills"."id";
SELECT setval('"public"."jobSkills_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."jobStatusTs_id_seq"
OWNED BY "public"."jobStatusTs"."id";
SELECT setval('"public"."jobStatusTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."jobStatus_id_seq"
OWNED BY "public"."jobStatus"."id";
SELECT setval('"public"."jobStatus_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."labelsTs_id_seq"
OWNED BY "public"."labelsTs"."id";
SELECT setval('"public"."labelsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."labels_id_seq"
OWNED BY "public"."labels"."id";
SELECT setval('"public"."labels_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."languageCertificatesTs_id_seq"
OWNED BY "public"."languageCertificatesTs"."id";
SELECT setval('"public"."languageCertificatesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."languageCertificates_id_seq"
OWNED BY "public"."languageCertificates"."id";
SELECT setval('"public"."languageCertificates_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."languageLevelsTs_id_seq"
OWNED BY "public"."languageLevelsTs"."id";
SELECT setval('"public"."languageLevelsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."languageLevels_id_seq"
OWNED BY "public"."languageLevels"."id";
SELECT setval('"public"."languageLevels_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."languagesTs_id_seq"
OWNED BY "public"."languagesTs"."id";
SELECT setval('"public"."languagesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."languages_id_seq"
OWNED BY "public"."languages"."id";
SELECT setval('"public"."languages_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."memberClockings_id_seq"
OWNED BY "public"."memberClockings"."id";
SELECT setval('"public"."memberClockings_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."menusTs_id_seq"
OWNED BY "public"."menusTs"."id";
SELECT setval('"public"."menusTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."menus_id_seq"
OWNED BY "public"."menus"."id";
SELECT setval('"public"."menus_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."modulesTs_id_seq"
OWNED BY "public"."modulesTs"."id";
SELECT setval('"public"."modulesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."modules_id_seq"
OWNED BY "public"."modules"."id";
SELECT setval('"public"."modules_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."nationalitiesTs_id_seq"
OWNED BY "public"."nationalitiesTs"."id";
SELECT setval('"public"."nationalitiesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."nationalities_id_seq"
OWNED BY "public"."nationalities"."id";
SELECT setval('"public"."nationalities_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."newsLetterSubscribers_id_seq"
OWNED BY "public"."newsLetterSubscribers"."id";
SELECT setval('"public"."newsLetterSubscribers_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."newsLetters_id_seq"
OWNED BY "public"."newsLetters"."id";
SELECT setval('"public"."newsLetters_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."notifications_id_seq"
OWNED BY "public"."notifications"."id";
SELECT setval('"public"."notifications_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."percentage_id_seq"
OWNED BY "public"."percentage"."id";
SELECT setval('"public"."percentage_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."permissions_id_seq"
OWNED BY "public"."permissions"."id";
SELECT setval('"public"."permissions_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."roleLikes_id_seq"
OWNED BY "public"."roleLikes"."id";
SELECT setval('"public"."roleLikes_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."roleStatus_id_seq"
OWNED BY "public"."roleStatus"."id";
SELECT setval('"public"."roleStatus_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."roleViews_id_seq"
OWNED BY "public"."roleViews"."id";
SELECT setval('"public"."roleViews_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."rolesTs_id_seq"
OWNED BY "public"."rolesTs"."id";
SELECT setval('"public"."rolesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."roles_id_seq"
OWNED BY "public"."roles"."id";
SELECT setval('"public"."roles_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."salaryPeriodsTs_id_seq"
OWNED BY "public"."salaryPeriodsTs"."id";
SELECT setval('"public"."salaryPeriodsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."salaryPeriods_id_seq"
OWNED BY "public"."salaryPeriods"."id";
SELECT setval('"public"."salaryPeriods_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sectionsTs_id_seq"
OWNED BY "public"."sectionsTs"."id";
SELECT setval('"public"."sectionsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."sections_id_seq"
OWNED BY "public"."sections"."id";
SELECT setval('"public"."sections_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."securityQuestionsTs_id_seq"
OWNED BY "public"."securityQuestionsTs"."id";
SELECT setval('"public"."securityQuestionsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."securityQuestions_id_seq"
OWNED BY "public"."securityQuestions"."id";
SELECT setval('"public"."securityQuestions_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."skillsTs_id_seq"
OWNED BY "public"."skillsTs"."id";
SELECT setval('"public"."skillsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."skills_id_seq"
OWNED BY "public"."skills"."id";
SELECT setval('"public"."skills_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."socialsTs_id_seq"
OWNED BY "public"."socialsTs"."id";
SELECT setval('"public"."socialsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."socials_id_seq"
OWNED BY "public"."socials"."id";
SELECT setval('"public"."socials_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."statesTs_id_seq"
OWNED BY "public"."statesTs"."id";
SELECT setval('"public"."statesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."states_id_seq"
OWNED BY "public"."states"."id";
SELECT setval('"public"."states_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."themesTs_id_seq"
OWNED BY "public"."themesTs"."id";
SELECT setval('"public"."themesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."themes_id_seq"
OWNED BY "public"."themes"."id";
SELECT setval('"public"."themes_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."timePeriodsTs_id_seq"
OWNED BY "public"."timePeriodsTs"."id";
SELECT setval('"public"."timePeriodsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."timePeriods_id_seq"
OWNED BY "public"."timePeriods"."id";
SELECT setval('"public"."timePeriods_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."timezonesTs_id_seq"
OWNED BY "public"."timezonesTs"."id";
SELECT setval('"public"."timezonesTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."timezones_id_seq"
OWNED BY "public"."timezones"."id";
SELECT setval('"public"."timezones_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."toastsTs_id_seq"
OWNED BY "public"."toastsTs"."id";
SELECT setval('"public"."toastsTs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."toasts_id_seq"
OWNED BY "public"."toasts"."id";
SELECT setval('"public"."toasts_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."uploads_id_seq"
OWNED BY "public"."uploads"."id";
SELECT setval('"public"."uploads_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userAwards_id_seq"
OWNED BY "public"."userAwards"."id";
SELECT setval('"public"."userAwards_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userCompanies_id_seq"
OWNED BY "public"."userCompanies"."id";
SELECT setval('"public"."userCompanies_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userCourses_id_seq"
OWNED BY "public"."userCourses"."id";
SELECT setval('"public"."userCourses_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userEducations_id_seq"
OWNED BY "public"."userEducations"."id";
SELECT setval('"public"."userEducations_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userExperiences_id_seq"
OWNED BY "public"."userExperiences"."id";
SELECT setval('"public"."userExperiences_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userExpertises_id_seq"
OWNED BY "public"."userExpertises"."id";
SELECT setval('"public"."userExpertises_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userExtraActivities_id_seq"
OWNED BY "public"."userExtraActivities"."id";
SELECT setval('"public"."userExtraActivities_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userFollowers_id_seq"
OWNED BY "public"."userFollowers"."id";
SELECT setval('"public"."userFollowers_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userInterships_id_seq"
OWNED BY "public"."userInterships"."id";
SELECT setval('"public"."userInterships_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userLanguages_id_seq"
OWNED BY "public"."userLanguages"."id";
SELECT setval('"public"."userLanguages_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userLikes_id_seq"
OWNED BY "public"."userLikes"."id";
SELECT setval('"public"."userLikes_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userPortfolios_id_seq"
OWNED BY "public"."userPortfolios"."id";
SELECT setval('"public"."userPortfolios_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userReferences_id_seq"
OWNED BY "public"."userReferences"."id";
SELECT setval('"public"."userReferences_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userSkills_id_seq"
OWNED BY "public"."userSkills"."id";
SELECT setval('"public"."userSkills_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userSocials_id_seq"
OWNED BY "public"."userSocials"."id";
SELECT setval('"public"."userSocials_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userStatus_id_seq"
OWNED BY "public"."userStatus"."id";
SELECT setval('"public"."userStatus_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."userViews_id_seq"
OWNED BY "public"."userViews"."id";
SELECT setval('"public"."userViews_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_id_seq"
OWNED BY "public"."users"."id";
SELECT setval('"public"."users_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table _prisma_migrations
-- ----------------------------
ALTER TABLE "public"."_prisma_migrations" ADD CONSTRAINT "_prisma_migrations_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table academicLevels
-- ----------------------------
CREATE UNIQUE INDEX "academicLevels_slug_key" ON "public"."academicLevels" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "academicLevels_title_key" ON "public"."academicLevels" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table academicLevels
-- ----------------------------
ALTER TABLE "public"."academicLevels" ADD CONSTRAINT "academicLevels_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table academicLevelsTs
-- ----------------------------
ALTER TABLE "public"."academicLevelsTs" ADD CONSTRAINT "academicLevelsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table actorTypes
-- ----------------------------
CREATE UNIQUE INDEX "actorTypes_slug_key" ON "public"."actorTypes" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "actorTypes_title_key" ON "public"."actorTypes" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table actorTypes
-- ----------------------------
ALTER TABLE "public"."actorTypes" ADD CONSTRAINT "actorTypes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table applicationResults
-- ----------------------------
CREATE UNIQUE INDEX "applicationResults_slug_key" ON "public"."applicationResults" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "applicationResults_title_key" ON "public"."applicationResults" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table applicationResults
-- ----------------------------
ALTER TABLE "public"."applicationResults" ADD CONSTRAINT "applicationResults_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table applicationResultsTs
-- ----------------------------
ALTER TABLE "public"."applicationResultsTs" ADD CONSTRAINT "applicationResultsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table applications
-- ----------------------------
CREATE UNIQUE INDEX "applications_userId_jobId_key" ON "public"."applications" USING btree (
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "jobId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table applications
-- ----------------------------
ALTER TABLE "public"."applications" ADD CONSTRAINT "applications_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table chats
-- ----------------------------
ALTER TABLE "public"."chats" ADD CONSTRAINT "chats_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table cities
-- ----------------------------
CREATE UNIQUE INDEX "cities_title_stateId_key" ON "public"."cities" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "stateId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table cities
-- ----------------------------
ALTER TABLE "public"."cities" ADD CONSTRAINT "cities_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table citiesTs
-- ----------------------------
ALTER TABLE "public"."citiesTs" ADD CONSTRAINT "citiesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table companyJobs
-- ----------------------------
CREATE UNIQUE INDEX "companyJobs_slug_key" ON "public"."companyJobs" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table companyJobs
-- ----------------------------
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table companyMembers
-- ----------------------------
CREATE UNIQUE INDEX "companyMembers_userId_companyId_projectId_key" ON "public"."companyMembers" USING btree (
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "companyId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "projectId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table companyMembers
-- ----------------------------
ALTER TABLE "public"."companyMembers" ADD CONSTRAINT "companyMembers_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table companyProjects
-- ----------------------------
CREATE UNIQUE INDEX "companyProjects_name_companyId_key" ON "public"."companyProjects" USING btree (
  "name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "companyId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table companyProjects
-- ----------------------------
ALTER TABLE "public"."companyProjects" ADD CONSTRAINT "companyProjects_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table companySocials
-- ----------------------------
CREATE UNIQUE INDEX "companySocials_companyId_socialId_key" ON "public"."companySocials" USING btree (
  "companyId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "socialId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table companySocials
-- ----------------------------
ALTER TABLE "public"."companySocials" ADD CONSTRAINT "companySocials_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table contactUs
-- ----------------------------
ALTER TABLE "public"."contactUs" ADD CONSTRAINT "contactUs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table countries
-- ----------------------------
CREATE UNIQUE INDEX "countries_code_key" ON "public"."countries" USING btree (
  "code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "countries_slug_key" ON "public"."countries" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "countries_title_key" ON "public"."countries" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table countries
-- ----------------------------
ALTER TABLE "public"."countries" ADD CONSTRAINT "countries_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table countriesTs
-- ----------------------------
ALTER TABLE "public"."countriesTs" ADD CONSTRAINT "countriesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table currencies
-- ----------------------------
CREATE UNIQUE INDEX "currencies_slug_key" ON "public"."currencies" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "currencies_title_key" ON "public"."currencies" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table currencies
-- ----------------------------
ALTER TABLE "public"."currencies" ADD CONSTRAINT "currencies_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table currenciesTs
-- ----------------------------
ALTER TABLE "public"."currenciesTs" ADD CONSTRAINT "currenciesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table days
-- ----------------------------
CREATE UNIQUE INDEX "days_slug_key" ON "public"."days" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "days_title_key" ON "public"."days" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table days
-- ----------------------------
ALTER TABLE "public"."days" ADD CONSTRAINT "days_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table daysTs
-- ----------------------------
ALTER TABLE "public"."daysTs" ADD CONSTRAINT "daysTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table dominationLevels
-- ----------------------------
CREATE UNIQUE INDEX "dominationLevels_slug_key" ON "public"."dominationLevels" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "dominationLevels_title_key" ON "public"."dominationLevels" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table dominationLevels
-- ----------------------------
ALTER TABLE "public"."dominationLevels" ADD CONSTRAINT "dominationLevels_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table dominationLevelsTs
-- ----------------------------
ALTER TABLE "public"."dominationLevelsTs" ADD CONSTRAINT "dominationLevelsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table drivingLicenses
-- ----------------------------
CREATE UNIQUE INDEX "drivingLicenses_slug_key" ON "public"."drivingLicenses" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "drivingLicenses_title_key" ON "public"."drivingLicenses" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table drivingLicenses
-- ----------------------------
ALTER TABLE "public"."drivingLicenses" ADD CONSTRAINT "drivingLicenses_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table drivingLicensesTs
-- ----------------------------
CREATE UNIQUE INDEX "drivingLicensesTs_title_key" ON "public"."drivingLicensesTs" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table drivingLicensesTs
-- ----------------------------
ALTER TABLE "public"."drivingLicensesTs" ADD CONSTRAINT "drivingLicensesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table employmentTypes
-- ----------------------------
CREATE UNIQUE INDEX "employmentTypes_slug_key" ON "public"."employmentTypes" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "employmentTypes_title_key" ON "public"."employmentTypes" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table employmentTypes
-- ----------------------------
ALTER TABLE "public"."employmentTypes" ADD CONSTRAINT "employmentTypes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table employmentTypesTs
-- ----------------------------
ALTER TABLE "public"."employmentTypesTs" ADD CONSTRAINT "employmentTypesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table genders
-- ----------------------------
CREATE UNIQUE INDEX "genders_slug_key" ON "public"."genders" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "genders_title_key" ON "public"."genders" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table genders
-- ----------------------------
ALTER TABLE "public"."genders" ADD CONSTRAINT "genders_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table gendersTs
-- ----------------------------
ALTER TABLE "public"."gendersTs" ADD CONSTRAINT "gendersTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table industries
-- ----------------------------
CREATE UNIQUE INDEX "industries_slug_key" ON "public"."industries" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "industries_title_key" ON "public"."industries" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table industries
-- ----------------------------
ALTER TABLE "public"."industries" ADD CONSTRAINT "industries_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table industriesTs
-- ----------------------------
ALTER TABLE "public"."industriesTs" ADD CONSTRAINT "industriesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table invitations
-- ----------------------------
ALTER TABLE "public"."invitations" ADD CONSTRAINT "invitations_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table jobQuestions
-- ----------------------------
ALTER TABLE "public"."jobQuestions" ADD CONSTRAINT "jobQuestions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table jobQuestionsCategories
-- ----------------------------
CREATE UNIQUE INDEX "jobQuestionsCategories_slug_key" ON "public"."jobQuestionsCategories" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "jobQuestionsCategories_title_key" ON "public"."jobQuestionsCategories" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table jobQuestionsCategories
-- ----------------------------
ALTER TABLE "public"."jobQuestionsCategories" ADD CONSTRAINT "jobQuestionsCategories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table jobQuestionsCategoriesTs
-- ----------------------------
ALTER TABLE "public"."jobQuestionsCategoriesTs" ADD CONSTRAINT "jobQuestionsCategoriesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table jobSkills
-- ----------------------------
CREATE UNIQUE INDEX "jobSkills_jobId_skillId_key" ON "public"."jobSkills" USING btree (
  "jobId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "skillId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table jobSkills
-- ----------------------------
ALTER TABLE "public"."jobSkills" ADD CONSTRAINT "jobSkills_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table jobStatus
-- ----------------------------
CREATE UNIQUE INDEX "jobStatus_slug_key" ON "public"."jobStatus" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "jobStatus_title_key" ON "public"."jobStatus" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table jobStatus
-- ----------------------------
ALTER TABLE "public"."jobStatus" ADD CONSTRAINT "jobStatus_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table jobStatusTs
-- ----------------------------
ALTER TABLE "public"."jobStatusTs" ADD CONSTRAINT "jobStatusTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table labels
-- ----------------------------
CREATE UNIQUE INDEX "labels_title_sectionId_key" ON "public"."labels" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "sectionId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table labels
-- ----------------------------
ALTER TABLE "public"."labels" ADD CONSTRAINT "labels_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table labelsTs
-- ----------------------------
ALTER TABLE "public"."labelsTs" ADD CONSTRAINT "labelsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table languageCertificates
-- ----------------------------
CREATE UNIQUE INDEX "languageCertificates_slug_key" ON "public"."languageCertificates" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "languageCertificates_title_key" ON "public"."languageCertificates" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table languageCertificates
-- ----------------------------
ALTER TABLE "public"."languageCertificates" ADD CONSTRAINT "languageCertificates_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table languageCertificatesTs
-- ----------------------------
ALTER TABLE "public"."languageCertificatesTs" ADD CONSTRAINT "languageCertificatesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table languageLevels
-- ----------------------------
CREATE UNIQUE INDEX "languageLevels_slug_key" ON "public"."languageLevels" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "languageLevels_title_key" ON "public"."languageLevels" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table languageLevels
-- ----------------------------
ALTER TABLE "public"."languageLevels" ADD CONSTRAINT "languageLevels_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table languageLevelsTs
-- ----------------------------
ALTER TABLE "public"."languageLevelsTs" ADD CONSTRAINT "languageLevelsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table languages
-- ----------------------------
CREATE UNIQUE INDEX "languages_code_key" ON "public"."languages" USING btree (
  "code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "languages_slug_key" ON "public"."languages" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "languages_title_key" ON "public"."languages" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table languages
-- ----------------------------
ALTER TABLE "public"."languages" ADD CONSTRAINT "languages_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table languagesTs
-- ----------------------------
ALTER TABLE "public"."languagesTs" ADD CONSTRAINT "languagesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table memberClockings
-- ----------------------------
CREATE UNIQUE INDEX "memberClockings_memberId_endDate_endHour_key" ON "public"."memberClockings" USING btree (
  "memberId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "endDate" "pg_catalog"."date_ops" ASC NULLS LAST,
  "endHour" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "memberClockings_memberId_startDate_startHour_key" ON "public"."memberClockings" USING btree (
  "memberId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "startDate" "pg_catalog"."date_ops" ASC NULLS LAST,
  "startHour" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table memberClockings
-- ----------------------------
ALTER TABLE "public"."memberClockings" ADD CONSTRAINT "memberClockings_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table menus
-- ----------------------------
CREATE UNIQUE INDEX "menus_slug_key" ON "public"."menus" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "menus_title_key" ON "public"."menus" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table menus
-- ----------------------------
ALTER TABLE "public"."menus" ADD CONSTRAINT "menus_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table menusTs
-- ----------------------------
ALTER TABLE "public"."menusTs" ADD CONSTRAINT "menusTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table modules
-- ----------------------------
CREATE UNIQUE INDEX "modules_title_menuId_key" ON "public"."modules" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "menuId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table modules
-- ----------------------------
ALTER TABLE "public"."modules" ADD CONSTRAINT "modules_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table modulesTs
-- ----------------------------
ALTER TABLE "public"."modulesTs" ADD CONSTRAINT "modulesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table nationalities
-- ----------------------------
CREATE UNIQUE INDEX "nationalities_slug_key" ON "public"."nationalities" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "nationalities_title_key" ON "public"."nationalities" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table nationalities
-- ----------------------------
ALTER TABLE "public"."nationalities" ADD CONSTRAINT "nationalities_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table nationalitiesTs
-- ----------------------------
ALTER TABLE "public"."nationalitiesTs" ADD CONSTRAINT "nationalitiesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table newsLetterSubscribers
-- ----------------------------
ALTER TABLE "public"."newsLetterSubscribers" ADD CONSTRAINT "newsLetterSubscribers_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table newsLetters
-- ----------------------------
ALTER TABLE "public"."newsLetters" ADD CONSTRAINT "newsLetters_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table notifications
-- ----------------------------
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table percentage
-- ----------------------------
ALTER TABLE "public"."percentage" ADD CONSTRAINT "percentage_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table permissions
-- ----------------------------
CREATE UNIQUE INDEX "permissions_actorTypeId_actorId_moduleId_key" ON "public"."permissions" USING btree (
  "actorTypeId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "actorId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "moduleId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table permissions
-- ----------------------------
ALTER TABLE "public"."permissions" ADD CONSTRAINT "permissions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table roleLikes
-- ----------------------------
ALTER TABLE "public"."roleLikes" ADD CONSTRAINT "roleLikes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table roleStatus
-- ----------------------------
ALTER TABLE "public"."roleStatus" ADD CONSTRAINT "roleStatus_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table roleViews
-- ----------------------------
ALTER TABLE "public"."roleViews" ADD CONSTRAINT "roleViews_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table roles
-- ----------------------------
CREATE UNIQUE INDEX "roles_slug_key" ON "public"."roles" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "roles_title_key" ON "public"."roles" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table roles
-- ----------------------------
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table rolesTs
-- ----------------------------
ALTER TABLE "public"."rolesTs" ADD CONSTRAINT "rolesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table salaryPeriods
-- ----------------------------
CREATE UNIQUE INDEX "salaryPeriods_slug_key" ON "public"."salaryPeriods" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "salaryPeriods_title_key" ON "public"."salaryPeriods" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table salaryPeriods
-- ----------------------------
ALTER TABLE "public"."salaryPeriods" ADD CONSTRAINT "salaryPeriods_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table salaryPeriodsTs
-- ----------------------------
ALTER TABLE "public"."salaryPeriodsTs" ADD CONSTRAINT "salaryPeriodsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table sections
-- ----------------------------
CREATE UNIQUE INDEX "sections_title_domain_key" ON "public"."sections" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "domain" "pg_catalog"."enum_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table sections
-- ----------------------------
ALTER TABLE "public"."sections" ADD CONSTRAINT "sections_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sectionsTs
-- ----------------------------
ALTER TABLE "public"."sectionsTs" ADD CONSTRAINT "sectionsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table securityQuestions
-- ----------------------------
CREATE UNIQUE INDEX "securityQuestions_slug_key" ON "public"."securityQuestions" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "securityQuestions_title_key" ON "public"."securityQuestions" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table securityQuestions
-- ----------------------------
ALTER TABLE "public"."securityQuestions" ADD CONSTRAINT "securityQuestions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table securityQuestionsTs
-- ----------------------------
ALTER TABLE "public"."securityQuestionsTs" ADD CONSTRAINT "securityQuestionsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table skills
-- ----------------------------
CREATE UNIQUE INDEX "skills_slug_key" ON "public"."skills" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "skills_title_key" ON "public"."skills" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table skills
-- ----------------------------
ALTER TABLE "public"."skills" ADD CONSTRAINT "skills_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table skillsTs
-- ----------------------------
ALTER TABLE "public"."skillsTs" ADD CONSTRAINT "skillsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table socials
-- ----------------------------
CREATE UNIQUE INDEX "socials_slug_key" ON "public"."socials" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "socials_title_key" ON "public"."socials" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "socials_website_key" ON "public"."socials" USING btree (
  "website" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table socials
-- ----------------------------
ALTER TABLE "public"."socials" ADD CONSTRAINT "socials_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table socialsTs
-- ----------------------------
ALTER TABLE "public"."socialsTs" ADD CONSTRAINT "socialsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table states
-- ----------------------------
CREATE UNIQUE INDEX "states_title_countryId_key" ON "public"."states" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "countryId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table states
-- ----------------------------
ALTER TABLE "public"."states" ADD CONSTRAINT "states_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table statesTs
-- ----------------------------
ALTER TABLE "public"."statesTs" ADD CONSTRAINT "statesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table themes
-- ----------------------------
CREATE UNIQUE INDEX "themes_slug_key" ON "public"."themes" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "themes_title_key" ON "public"."themes" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table themes
-- ----------------------------
ALTER TABLE "public"."themes" ADD CONSTRAINT "themes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table themesTs
-- ----------------------------
ALTER TABLE "public"."themesTs" ADD CONSTRAINT "themesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table timePeriods
-- ----------------------------
CREATE UNIQUE INDEX "timePeriods_slug_key" ON "public"."timePeriods" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "timePeriods_title_key" ON "public"."timePeriods" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table timePeriods
-- ----------------------------
ALTER TABLE "public"."timePeriods" ADD CONSTRAINT "timePeriods_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table timePeriodsTs
-- ----------------------------
ALTER TABLE "public"."timePeriodsTs" ADD CONSTRAINT "timePeriodsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table timezones
-- ----------------------------
CREATE UNIQUE INDEX "timezones_slug_key" ON "public"."timezones" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "timezones_title_key" ON "public"."timezones" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table timezones
-- ----------------------------
ALTER TABLE "public"."timezones" ADD CONSTRAINT "timezones_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table timezonesTs
-- ----------------------------
ALTER TABLE "public"."timezonesTs" ADD CONSTRAINT "timezonesTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table toasts
-- ----------------------------
CREATE UNIQUE INDEX "toasts_slug_key" ON "public"."toasts" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "toasts_title_key" ON "public"."toasts" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table toasts
-- ----------------------------
ALTER TABLE "public"."toasts" ADD CONSTRAINT "toasts_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table toastsTs
-- ----------------------------
ALTER TABLE "public"."toastsTs" ADD CONSTRAINT "toastsTs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table uploads
-- ----------------------------
ALTER TABLE "public"."uploads" ADD CONSTRAINT "uploads_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userAwards
-- ----------------------------
CREATE UNIQUE INDEX "userAwards_title_userId_key" ON "public"."userAwards" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userAwards
-- ----------------------------
ALTER TABLE "public"."userAwards" ADD CONSTRAINT "userAwards_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userCompanies
-- ----------------------------
CREATE UNIQUE INDEX "userCompanies_identifier_key" ON "public"."userCompanies" USING btree (
  "identifier" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "userCompanies_name_userId_key" ON "public"."userCompanies" USING btree (
  "name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userCompanies
-- ----------------------------
ALTER TABLE "public"."userCompanies" ADD CONSTRAINT "userCompanies_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userCourses
-- ----------------------------
CREATE UNIQUE INDEX "userCourses_title_userId_key" ON "public"."userCourses" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userCourses
-- ----------------------------
ALTER TABLE "public"."userCourses" ADD CONSTRAINT "userCourses_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userEducations
-- ----------------------------
CREATE UNIQUE INDEX "userEducations_degreeId_userId_key" ON "public"."userEducations" USING btree (
  "degreeId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userEducations
-- ----------------------------
ALTER TABLE "public"."userEducations" ADD CONSTRAINT "userEducations_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table userExperiences
-- ----------------------------
ALTER TABLE "public"."userExperiences" ADD CONSTRAINT "userExperiences_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userExpertises
-- ----------------------------
CREATE UNIQUE INDEX "userExpertises_title_userId_key" ON "public"."userExpertises" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userExpertises
-- ----------------------------
ALTER TABLE "public"."userExpertises" ADD CONSTRAINT "userExpertises_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userExtraActivities
-- ----------------------------
CREATE UNIQUE INDEX "userExtraActivities_title_userId_key" ON "public"."userExtraActivities" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userExtraActivities
-- ----------------------------
ALTER TABLE "public"."userExtraActivities" ADD CONSTRAINT "userExtraActivities_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table userFollowers
-- ----------------------------
ALTER TABLE "public"."userFollowers" ADD CONSTRAINT "userFollowers_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userInterships
-- ----------------------------
CREATE UNIQUE INDEX "userInterships_title_userId_key" ON "public"."userInterships" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userInterships
-- ----------------------------
ALTER TABLE "public"."userInterships" ADD CONSTRAINT "userInterships_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userLanguages
-- ----------------------------
CREATE UNIQUE INDEX "userLanguages_userId_languageId_key" ON "public"."userLanguages" USING btree (
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "languageId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userLanguages
-- ----------------------------
ALTER TABLE "public"."userLanguages" ADD CONSTRAINT "userLanguages_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table userLikes
-- ----------------------------
ALTER TABLE "public"."userLikes" ADD CONSTRAINT "userLikes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userPortfolios
-- ----------------------------
CREATE UNIQUE INDEX "userPortfolios_title_userId_key" ON "public"."userPortfolios" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userPortfolios
-- ----------------------------
ALTER TABLE "public"."userPortfolios" ADD CONSTRAINT "userPortfolios_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userReferences
-- ----------------------------
CREATE UNIQUE INDEX "userReferences_fullName_userId_key" ON "public"."userReferences" USING btree (
  "fullName" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userReferences
-- ----------------------------
ALTER TABLE "public"."userReferences" ADD CONSTRAINT "userReferences_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userSkills
-- ----------------------------
CREATE UNIQUE INDEX "userSkills_title_userId_key" ON "public"."userSkills" USING btree (
  "title" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userSkills
-- ----------------------------
ALTER TABLE "public"."userSkills" ADD CONSTRAINT "userSkills_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table userSocials
-- ----------------------------
CREATE UNIQUE INDEX "userSocials_userId_socialId_key" ON "public"."userSocials" USING btree (
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "socialId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table userSocials
-- ----------------------------
ALTER TABLE "public"."userSocials" ADD CONSTRAINT "userSocials_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table userStatus
-- ----------------------------
ALTER TABLE "public"."userStatus" ADD CONSTRAINT "userStatus_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table userViews
-- ----------------------------
ALTER TABLE "public"."userViews" ADD CONSTRAINT "userViews_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table users
-- ----------------------------
CREATE UNIQUE INDEX "users_email_key" ON "public"."users" USING btree (
  "email" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "users_identifier_key" ON "public"."users" USING btree (
  "identifier" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table academicLevelsTs
-- ----------------------------
ALTER TABLE "public"."academicLevelsTs" ADD CONSTRAINT "academicLevelsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."academicLevelsTs" ADD CONSTRAINT "academicLevelsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."academicLevels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table applicationResultsTs
-- ----------------------------
ALTER TABLE "public"."applicationResultsTs" ADD CONSTRAINT "applicationResultsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."applicationResultsTs" ADD CONSTRAINT "applicationResultsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."applicationResults" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table applications
-- ----------------------------
ALTER TABLE "public"."applications" ADD CONSTRAINT "applications_applicationResultId_fkey" FOREIGN KEY ("applicationResultId") REFERENCES "public"."applicationResults" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."applications" ADD CONSTRAINT "applications_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."companyJobs" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."applications" ADD CONSTRAINT "applications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table chats
-- ----------------------------
ALTER TABLE "public"."chats" ADD CONSTRAINT "chats_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "public"."actorTypes" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."chats" ADD CONSTRAINT "chats_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."userCompanies" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."chats" ADD CONSTRAINT "chats_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."chats" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."chats" ADD CONSTRAINT "chats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table cities
-- ----------------------------
ALTER TABLE "public"."cities" ADD CONSTRAINT "cities_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "public"."states" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table citiesTs
-- ----------------------------
ALTER TABLE "public"."citiesTs" ADD CONSTRAINT "citiesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."citiesTs" ADD CONSTRAINT "citiesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table companyJobs
-- ----------------------------
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_academicLevelId_fkey" FOREIGN KEY ("academicLevelId") REFERENCES "public"."academicLevels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."userCompanies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "public"."currencies" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_drivingLicenseId_fkey" FOREIGN KEY ("drivingLicenseId") REFERENCES "public"."drivingLicenses" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_employmentTypeId_fkey" FOREIGN KEY ("employmentTypeId") REFERENCES "public"."employmentTypes" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "public"."industries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_salaryTypeId_fkey" FOREIGN KEY ("salaryTypeId") REFERENCES "public"."timePeriods" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "public"."jobStatus" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyJobs" ADD CONSTRAINT "companyJobs_timezoneId_fkey" FOREIGN KEY ("timezoneId") REFERENCES "public"."timezones" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table companyMembers
-- ----------------------------
ALTER TABLE "public"."companyMembers" ADD CONSTRAINT "companyMembers_bankHolidaysConditionId_fkey" FOREIGN KEY ("bankHolidaysConditionId") REFERENCES "public"."timePeriods" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyMembers" ADD CONSTRAINT "companyMembers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."userCompanies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."companyMembers" ADD CONSTRAINT "companyMembers_employmentTypeId_fkey" FOREIGN KEY ("employmentTypeId") REFERENCES "public"."employmentTypes" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyMembers" ADD CONSTRAINT "companyMembers_overTimeConditionId_fkey" FOREIGN KEY ("overTimeConditionId") REFERENCES "public"."timePeriods" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyMembers" ADD CONSTRAINT "companyMembers_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."companyProjects" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyMembers" ADD CONSTRAINT "companyMembers_rateConditionId_fkey" FOREIGN KEY ("rateConditionId") REFERENCES "public"."timePeriods" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyMembers" ADD CONSTRAINT "companyMembers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."companyMembers" ADD CONSTRAINT "companyMembers_weekendConditionId_fkey" FOREIGN KEY ("weekendConditionId") REFERENCES "public"."timePeriods" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table companyProjects
-- ----------------------------
ALTER TABLE "public"."companyProjects" ADD CONSTRAINT "companyProjects_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."userCompanies" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table companySocials
-- ----------------------------
ALTER TABLE "public"."companySocials" ADD CONSTRAINT "companySocials_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."userCompanies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."companySocials" ADD CONSTRAINT "companySocials_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "public"."socials" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table contactUs
-- ----------------------------
ALTER TABLE "public"."contactUs" ADD CONSTRAINT "contactUs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table countriesTs
-- ----------------------------
ALTER TABLE "public"."countriesTs" ADD CONSTRAINT "countriesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."countriesTs" ADD CONSTRAINT "countriesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table currenciesTs
-- ----------------------------
ALTER TABLE "public"."currenciesTs" ADD CONSTRAINT "currenciesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."currenciesTs" ADD CONSTRAINT "currenciesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."currencies" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table daysTs
-- ----------------------------
ALTER TABLE "public"."daysTs" ADD CONSTRAINT "daysTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."daysTs" ADD CONSTRAINT "daysTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."days" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table dominationLevelsTs
-- ----------------------------
ALTER TABLE "public"."dominationLevelsTs" ADD CONSTRAINT "dominationLevelsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."dominationLevelsTs" ADD CONSTRAINT "dominationLevelsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."dominationLevels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table drivingLicensesTs
-- ----------------------------
ALTER TABLE "public"."drivingLicensesTs" ADD CONSTRAINT "drivingLicensesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."drivingLicensesTs" ADD CONSTRAINT "drivingLicensesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."drivingLicenses" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table employmentTypesTs
-- ----------------------------
ALTER TABLE "public"."employmentTypesTs" ADD CONSTRAINT "employmentTypesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."employmentTypesTs" ADD CONSTRAINT "employmentTypesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."employmentTypes" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table gendersTs
-- ----------------------------
ALTER TABLE "public"."gendersTs" ADD CONSTRAINT "gendersTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."gendersTs" ADD CONSTRAINT "gendersTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."genders" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table industriesTs
-- ----------------------------
ALTER TABLE "public"."industriesTs" ADD CONSTRAINT "industriesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."industriesTs" ADD CONSTRAINT "industriesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."industries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table invitations
-- ----------------------------
ALTER TABLE "public"."invitations" ADD CONSTRAINT "invitations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table jobQuestions
-- ----------------------------
ALTER TABLE "public"."jobQuestions" ADD CONSTRAINT "jobQuestions_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."jobQuestionsCategories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."jobQuestions" ADD CONSTRAINT "jobQuestions_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."companyJobs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table jobQuestionsCategoriesTs
-- ----------------------------
ALTER TABLE "public"."jobQuestionsCategoriesTs" ADD CONSTRAINT "jobQuestionsCategoriesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."jobQuestionsCategoriesTs" ADD CONSTRAINT "jobQuestionsCategoriesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."jobQuestionsCategories" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table jobSkills
-- ----------------------------
ALTER TABLE "public"."jobSkills" ADD CONSTRAINT "jobSkills_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."companyJobs" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."jobSkills" ADD CONSTRAINT "jobSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "public"."skills" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table jobStatusTs
-- ----------------------------
ALTER TABLE "public"."jobStatusTs" ADD CONSTRAINT "jobStatusTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."jobStatusTs" ADD CONSTRAINT "jobStatusTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."jobStatus" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table labels
-- ----------------------------
ALTER TABLE "public"."labels" ADD CONSTRAINT "labels_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."sections" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table labelsTs
-- ----------------------------
ALTER TABLE "public"."labelsTs" ADD CONSTRAINT "labelsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."labelsTs" ADD CONSTRAINT "labelsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."labels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table languageCertificatesTs
-- ----------------------------
ALTER TABLE "public"."languageCertificatesTs" ADD CONSTRAINT "languageCertificatesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."languageCertificatesTs" ADD CONSTRAINT "languageCertificatesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."languageCertificates" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table languageLevelsTs
-- ----------------------------
ALTER TABLE "public"."languageLevelsTs" ADD CONSTRAINT "languageLevelsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."languageLevelsTs" ADD CONSTRAINT "languageLevelsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."languageLevels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table languagesTs
-- ----------------------------
ALTER TABLE "public"."languagesTs" ADD CONSTRAINT "languagesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."languagesTs" ADD CONSTRAINT "languagesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table memberClockings
-- ----------------------------
ALTER TABLE "public"."memberClockings" ADD CONSTRAINT "memberClockings_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "public"."companyMembers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table menusTs
-- ----------------------------
ALTER TABLE "public"."menusTs" ADD CONSTRAINT "menusTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."menusTs" ADD CONSTRAINT "menusTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."menus" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table modules
-- ----------------------------
ALTER TABLE "public"."modules" ADD CONSTRAINT "modules_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "public"."menus" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table modulesTs
-- ----------------------------
ALTER TABLE "public"."modulesTs" ADD CONSTRAINT "modulesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."modulesTs" ADD CONSTRAINT "modulesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."modules" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table nationalitiesTs
-- ----------------------------
ALTER TABLE "public"."nationalitiesTs" ADD CONSTRAINT "nationalitiesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."nationalitiesTs" ADD CONSTRAINT "nationalitiesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."nationalities" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table permissions
-- ----------------------------
ALTER TABLE "public"."permissions" ADD CONSTRAINT "permissions_actorTypeId_fkey" FOREIGN KEY ("actorTypeId") REFERENCES "public"."actorTypes" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."permissions" ADD CONSTRAINT "permissions_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "public"."modules" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table roleLikes
-- ----------------------------
ALTER TABLE "public"."roleLikes" ADD CONSTRAINT "roleLikes_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."roles" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table roleStatus
-- ----------------------------
ALTER TABLE "public"."roleStatus" ADD CONSTRAINT "roleStatus_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."roles" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table roleViews
-- ----------------------------
ALTER TABLE "public"."roleViews" ADD CONSTRAINT "roleViews_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."roles" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table rolesTs
-- ----------------------------
ALTER TABLE "public"."rolesTs" ADD CONSTRAINT "rolesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."rolesTs" ADD CONSTRAINT "rolesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."roles" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table salaryPeriodsTs
-- ----------------------------
ALTER TABLE "public"."salaryPeriodsTs" ADD CONSTRAINT "salaryPeriodsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."salaryPeriodsTs" ADD CONSTRAINT "salaryPeriodsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."salaryPeriods" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table sectionsTs
-- ----------------------------
ALTER TABLE "public"."sectionsTs" ADD CONSTRAINT "sectionsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."sectionsTs" ADD CONSTRAINT "sectionsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."sections" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table securityQuestionsTs
-- ----------------------------
ALTER TABLE "public"."securityQuestionsTs" ADD CONSTRAINT "securityQuestionsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."securityQuestionsTs" ADD CONSTRAINT "securityQuestionsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."securityQuestions" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table skillsTs
-- ----------------------------
ALTER TABLE "public"."skillsTs" ADD CONSTRAINT "skillsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."skillsTs" ADD CONSTRAINT "skillsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."skills" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table socialsTs
-- ----------------------------
ALTER TABLE "public"."socialsTs" ADD CONSTRAINT "socialsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."socialsTs" ADD CONSTRAINT "socialsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."socials" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table states
-- ----------------------------
ALTER TABLE "public"."states" ADD CONSTRAINT "states_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table statesTs
-- ----------------------------
ALTER TABLE "public"."statesTs" ADD CONSTRAINT "statesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."statesTs" ADD CONSTRAINT "statesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."states" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table themesTs
-- ----------------------------
ALTER TABLE "public"."themesTs" ADD CONSTRAINT "themesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."themesTs" ADD CONSTRAINT "themesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."themes" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table timePeriodsTs
-- ----------------------------
ALTER TABLE "public"."timePeriodsTs" ADD CONSTRAINT "timePeriodsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."timePeriodsTs" ADD CONSTRAINT "timePeriodsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."timePeriods" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table timezonesTs
-- ----------------------------
ALTER TABLE "public"."timezonesTs" ADD CONSTRAINT "timezonesTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."timezonesTs" ADD CONSTRAINT "timezonesTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."timezones" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table toastsTs
-- ----------------------------
ALTER TABLE "public"."toastsTs" ADD CONSTRAINT "toastsTs_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."toastsTs" ADD CONSTRAINT "toastsTs_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."toasts" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userAwards
-- ----------------------------
ALTER TABLE "public"."userAwards" ADD CONSTRAINT "userAwards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userCompanies
-- ----------------------------
ALTER TABLE "public"."userCompanies" ADD CONSTRAINT "userCompanies_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userCompanies" ADD CONSTRAINT "userCompanies_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "public"."industries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userCompanies" ADD CONSTRAINT "userCompanies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userCourses
-- ----------------------------
ALTER TABLE "public"."userCourses" ADD CONSTRAINT "userCourses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userEducations
-- ----------------------------
ALTER TABLE "public"."userEducations" ADD CONSTRAINT "userEducations_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userEducations" ADD CONSTRAINT "userEducations_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userEducations" ADD CONSTRAINT "userEducations_degreeId_fkey" FOREIGN KEY ("degreeId") REFERENCES "public"."academicLevels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userEducations" ADD CONSTRAINT "userEducations_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "public"."states" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userEducations" ADD CONSTRAINT "userEducations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userExperiences
-- ----------------------------
ALTER TABLE "public"."userExperiences" ADD CONSTRAINT "userExperiences_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userExperiences" ADD CONSTRAINT "userExperiences_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userExperiences" ADD CONSTRAINT "userExperiences_employmentTypeId_fkey" FOREIGN KEY ("employmentTypeId") REFERENCES "public"."employmentTypes" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userExperiences" ADD CONSTRAINT "userExperiences_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "public"."states" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userExperiences" ADD CONSTRAINT "userExperiences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userExpertises
-- ----------------------------
ALTER TABLE "public"."userExpertises" ADD CONSTRAINT "userExpertises_dominationId_fkey" FOREIGN KEY ("dominationId") REFERENCES "public"."dominationLevels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userExpertises" ADD CONSTRAINT "userExpertises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userExtraActivities
-- ----------------------------
ALTER TABLE "public"."userExtraActivities" ADD CONSTRAINT "userExtraActivities_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userExtraActivities" ADD CONSTRAINT "userExtraActivities_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userExtraActivities" ADD CONSTRAINT "userExtraActivities_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "public"."states" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userExtraActivities" ADD CONSTRAINT "userExtraActivities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userFollowers
-- ----------------------------
ALTER TABLE "public"."userFollowers" ADD CONSTRAINT "userFollowers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userInterships
-- ----------------------------
ALTER TABLE "public"."userInterships" ADD CONSTRAINT "userInterships_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userInterships" ADD CONSTRAINT "userInterships_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userInterships" ADD CONSTRAINT "userInterships_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "public"."states" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userInterships" ADD CONSTRAINT "userInterships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userLanguages
-- ----------------------------
ALTER TABLE "public"."userLanguages" ADD CONSTRAINT "userLanguages_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "public"."languageCertificates" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userLanguages" ADD CONSTRAINT "userLanguages_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userLanguages" ADD CONSTRAINT "userLanguages_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "public"."languageLevels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userLanguages" ADD CONSTRAINT "userLanguages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userLikes
-- ----------------------------
ALTER TABLE "public"."userLikes" ADD CONSTRAINT "userLikes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userPortfolios
-- ----------------------------
ALTER TABLE "public"."userPortfolios" ADD CONSTRAINT "userPortfolios_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userReferences
-- ----------------------------
ALTER TABLE "public"."userReferences" ADD CONSTRAINT "userReferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userSkills
-- ----------------------------
ALTER TABLE "public"."userSkills" ADD CONSTRAINT "userSkills_dominationId_fkey" FOREIGN KEY ("dominationId") REFERENCES "public"."dominationLevels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."userSkills" ADD CONSTRAINT "userSkills_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userSocials
-- ----------------------------
ALTER TABLE "public"."userSocials" ADD CONSTRAINT "userSocials_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "public"."socials" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."userSocials" ADD CONSTRAINT "userSocials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userStatus
-- ----------------------------
ALTER TABLE "public"."userStatus" ADD CONSTRAINT "userStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table userViews
-- ----------------------------
ALTER TABLE "public"."userViews" ADD CONSTRAINT "userViews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_birthCityId_fkey" FOREIGN KEY ("birthCityId") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_birthCountryId_fkey" FOREIGN KEY ("birthCountryId") REFERENCES "public"."countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_birthStateId_fkey" FOREIGN KEY ("birthStateId") REFERENCES "public"."states" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "public"."currencies" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_degreeId_fkey" FOREIGN KEY ("degreeId") REFERENCES "public"."academicLevels" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_drivingLicenseId_fkey" FOREIGN KEY ("drivingLicenseId") REFERENCES "public"."drivingLicenses" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "public"."genders" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "public"."industries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "public"."languages" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_nationalityId_fkey" FOREIGN KEY ("nationalityId") REFERENCES "public"."nationalities" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_question1Id_fkey" FOREIGN KEY ("question1Id") REFERENCES "public"."securityQuestions" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_question2Id_fkey" FOREIGN KEY ("question2Id") REFERENCES "public"."securityQuestions" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_question3Id_fkey" FOREIGN KEY ("question3Id") REFERENCES "public"."securityQuestions" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_residentCityId_fkey" FOREIGN KEY ("residentCityId") REFERENCES "public"."cities" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_residentCountryId_fkey" FOREIGN KEY ("residentCountryId") REFERENCES "public"."countries" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_residentStateId_fkey" FOREIGN KEY ("residentStateId") REFERENCES "public"."states" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."roles" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_salaryPeriodId_fkey" FOREIGN KEY ("salaryPeriodId") REFERENCES "public"."salaryPeriods" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "public"."themes" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "users_timezoneId_fkey" FOREIGN KEY ("timezoneId") REFERENCES "public"."timezones" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
