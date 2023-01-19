const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
const slugify = require("slugify")

exports.init = async(req, res) => {

    let i = 1;
    let result= [];

    try {

        //============================================================================== academicLevels
        for(let i=0; i<academicLevels.length; i++){
            let item = academicLevels[i]
            let isExists = await db.academicLevels.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.academicLevels.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : academicLevels Filled..!`)
        i++;

        //============================================================================== applicationResults
        for(let i=0; i<applicationResults.length; i++){
            let item = applicationResults[i]
            let isExists = await db.applicationResults.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.applicationResults.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : applicationResults Filled..!`)
        i++;

        //============================================================================== actorTypes
        for(let i=0; i<actorTypes.length; i++){
            let item = actorTypes[i]
            let isExists = await db.actorTypes.findFirst({
                where:{
                    isLive: true,
                    slug:   slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.actorTypes.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : actorTypes Filled..!`)
        i++;

        //============================================================================== roles
        for(let i=0; i<roles.length; i++){
            let item = roles[i]
            let isExists = await db.roles.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.roles.create({
                    data:{
                        title: item.title,
                        isDefault: item.isDefault,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : roles Filled..!`)
        i++;

        //============================================================================== countries
        for(let i=0; i<countries.length; i++){
            let item = countries[i]
            let isExists = await db.countries.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.countries.create({
                    data:{
                        code:  item.code,
                        prefix:item.prefix,
                        flagId:item.flagId,
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : countries Filled..!`)
        i++;

        //============================================================================== currencies
        for(let i=0; i<currencies.length; i++){
            let item = currencies[i]
            let isExists = await db.currencies.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.currencies.create({
                    data:{
                        code:  item.code,
                        symbol:item.symbol,
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : currencies Filled..!`)
        i++;

        //============================================================================== days
        for(let i=0; i<days.length; i++){
            let item = days[i]
            let isExists = await db.days.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.days.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : days Filled..!`)
        i++;

        //============================================================================== dominationLevels
        for(let i=0; i<dominationLevels.length; i++){
            let item = dominationLevels[i]
            let isExists = await db.dominationLevels.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.dominationLevels.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : dominationLevels Filled..!`)
        i++;

        //============================================================================== drivingLicenses
        for(let i=0; i<drivingLicenses.length; i++){
            let item = drivingLicenses[i]
            let isExists = await db.drivingLicenses.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.drivingLicenses.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : drivingLicenses Filled..!`)
        i++;

        //============================================================================== employmentTypes
        for(let i=0; i<employmentTypes.length; i++){
            let item = employmentTypes[i]
            let isExists = await db.employmentTypes.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.employmentTypes.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : employmentTypes Filled..!`)
        i++;

        //============================================================================== genders
        for(let i=0; i<genders.length; i++){
            let item = genders[i]
            let isExists = await db.genders.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.genders.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : genders Filled..!`)
        i++;

        //============================================================================== industries
        for(let i=0; i<industries.length; i++){
            let item = industries[i]
            let isExists = await db.industries.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.industries.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : industries Filled..!`)
        i++;

        //============================================================================== jobStatus
        for(let i=0; i<jobStatus.length; i++){
            let item = jobStatus[i]
            let isExists = await db.jobStatus.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.jobStatus.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : jobStatus Filled..!`)
        i++;

        //============================================================================== languageCertificates
        for(let i=0; i<languageCertificates.length; i++){
            let item = languageCertificates[i]
            let isExists = await db.languageCertificates.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.languageCertificates.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : languageCertificates Filled..!`)
        i++;

        //============================================================================== languageLevels
        for(let i=0; i<languageLevels.length; i++){
            let item = languageLevels[i]
            let isExists = await db.languageLevels.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.languageLevels.create({
                    data:{
                        title: item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : languageLevels Filled..!`)
        i++;

        //============================================================================== languages
        for(let i=0; i<languages.length; i++){
            let item = languages[i]
            let isExists = await db.languages.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.languages.create({
                    data:{
                        code: item.code,
                        title:item.title,
                        isRtl: item.isRtl,
                        isDefault: item.isDefault,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : languages Filled..!`)
        i++;

        //============================================================================== menus
        for(let i=0; i<menus.length; i++){
            let item = menus[i]
            let isExists = await db.menus.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.menus.create({
                    data:{
                        sort: item.sort,
                        title:item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : menus Filled..!`)
        i++;

        //============================================================================== modules
        for(let i=0; i<modules.length; i++){
            let item = modules[i]
            let isExists = await db.modules.findFirst({
                where:{
                    isLive: true,
                    menuId: item.menuId,
                    slug:   slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.modules.create({
                    data:{
                        sort: item.sort,
                        title:item.title,
                        menuId: item.menuId,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : modules Filled..!`)
        i++;

        //============================================================================== nationalities
        for(let i=0; i<nationalities.length; i++){
            let item = nationalities[i]
            let isExists = await db.nationalities.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.nationalities.create({
                    data:{
                        title:item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : nationalities Filled..!`)
        i++;

        //============================================================================== permissions
        for(let i=0; i<permissions.length; i++){
            let item = permissions[i]
            let isExists = await db.permissions.findFirst({
                where:{
                    isLive: true,
                    actorTypeId: item.actorTypeId,
                    actorId: item.actorId,
                    moduleId: item.moduleId,
                }
            })
            if(!isExists){
                await db.permissions.create({
                    data:{
                        actorTypeId: item.actorTypeId,
                        actorId:     item.actorId,
                        moduleId:    item.moduleId,
                        create:      item.create,
                        view:        item.view,
                        edit:        item.edit,
                        delete:      item.delete,
                        invite:      item.invite,
                        approve:     item.approve,
                    }
                })
            }
        }
        result.push(`${i} : permissions Filled..!`)
        i++;

        //============================================================================== skills
        for(let i=0; i<skills.length; i++){
            let item = skills[i]
            let isExists = await db.skills.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.skills.create({
                    data:{
                        title:item.title,
                        slug:  slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : skills Filled..!`)
        i++;

        //============================================================================== toasts
        for(let i=0; i<toasts.length; i++){
            let item = toasts[i]
            let isExists = await db.toasts.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.toasts.create({
                    data:{
                        title:   item.title,
                        message: item.message,
                        slug:    slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : toasts Filled..!`)
        i++;

        //============================================================================== sections
        for(let i=0; i<sections.length; i++){
            let item = sections[i]
            let isExists = await db.sections.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.sections.create({
                    data:{
                        title:   item.title,
                        domain:  item.domain,
                        slug:    slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : sections Filled..!`)
        i++;

        //============================================================================== labels
        for(let i=0; i<labels.length; i++){
            let item = labels[i]
            let isExists = await db.labels.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.labels.create({
                    data:{
                        title:      item.title,
                        sectionId:  item.sectionId,
                        slug:       slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : labels Filled..!`)
        i++;

        //============================================================================== themes
        for(let i=0; i<themes.length; i++){
            let item = themes[i]
            let isExists = await db.themes.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.themes.create({
                    data:{
                        title:      item.title,
                        isDefault:  item.isDefault,
                        slug:       slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : themes Filled..!`)
        i++;

        //============================================================================== jobQuestionsCategories
        for(let i=0; i<jobQuestionsCategories.length; i++){
            let item = jobQuestionsCategories[i]
            let isExists = await db.jobQuestionsCategories.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.jobQuestionsCategories.create({
                    data:{
                        title:      item.title,
                        slug:       slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : jobQuestionsCategories Filled..!`)
        i++;

        //============================================================================== securityQuestions
        for(let i=0; i<securityQuestions.length; i++){
            let item = securityQuestions[i]
            let isExists = await db.securityQuestions.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.securityQuestions.create({
                    data:{
                        title:      item.title,
                        slug:       slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : securityQuestions Filled..!`)
        i++;

        //============================================================================== socials
        for(let i=0; i<socials.length; i++){
            let item = socials[i]
            let isExists = await db.socials.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.socials.create({
                    data:{
                        title:   item.title,
                        slug:    slugify(item.title.toLowerCase(), "-"),
                        icon_id: item.icon_id,
                        website: item.website,
                    }
                })
            }
        }
        result.push(`${i} : socials Filled..!`)
        i++;

        //============================================================================== timePeriods
        for(let i=0; i<timePeriods.length; i++){
            let item = timePeriods[i]
            let isExists = await db.timePeriods.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.timePeriods.create({
                    data:{
                        title:      item.title,
                        slug:       slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : timePeriods Filled..!`)
        i++;

        //============================================================================== timezones
        for(let i=0; i<timezones.length; i++){
            let item = timezones[i]
            let isExists = await db.timezones.findFirst({
                where:{
                    isLive: true,
                    slug:  slugify(item.title.toLowerCase(), "-")
                }
            })
            if(!isExists){
                await db.timezones.create({
                    data:{
                        title:      item.title,
                        offset:     item.offset,
                        slug:       slugify(item.title.toLowerCase(), "-")
                    }
                })
            }
        }
        result.push(`${i} : timezones Filled..!`)
        i++;

        //============================================================================== Results
        return res.json({
            status: 1,
            tables: result,
            message: "All Data Inserted successfully.."
        })


    //================================================================================== Error
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: error.message
        })
    }

}

const academicLevels = [
    { title: 'Primary education' },
    { title: 'Lower secondary education' },
    { title: 'Upper secondary education' },
    { title: 'Post-secondary non-tertiary education' },
    { title: 'Short-cycle tertiary education' },
    { title: 'Bachelor’s or equivalent level' },
    { title: 'Master’s or equivalent level' },
    { title: 'Doctoral or equivalent level' },
    { title: 'Not elsewhere classified' },
]  

const actorTypes = [
    { title: 'Role' },
    { title: 'User' },
    { title: 'Company' },
]

const applicationResults = [
    { title: 'Reviewed' },
    { title: 'Scheduled' },
    { title: 'Accepted' },
    { title: 'Rejected' },
]  

const roles = [
    { title: 'Admin',       isDefault: false },
    { title: 'Support',     isDefault: false },
    { title: 'Employer',    isDefault: false },
    { title: 'Employee',    isDefault: false },
    { title: 'Translator',  isDefault: false },
    { title: 'Candidate',   isDefault: true  },
]

const countries = [
    { code: 'AF', prefix: '+93', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Afghanistan'},
    { code: 'AX', prefix: '+358-18', flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Aland Islands'},
    { code: 'AL', prefix: '+355', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Albania'},
    { code: 'DZ', prefix: '+213', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Algeria'},
    { code: 'AS', prefix: '+684', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'American Samoa'},
    { code: 'AD', prefix: '+376', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Andorra'},
    { code: 'AO', prefix: '+244', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Angola'},
    { code: 'AI', prefix: '+1-264',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Anguilla'},
    { code: 'AQ', prefix: '+672', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Antarctica'},
    { code: 'AG', prefix: '+1-268',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Antigua and Barbuda'},
    { code: 'AR', prefix: '+54', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Argentina'},
    { code: 'AM', prefix: '+374', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Armenia'},
    { code: 'AW', prefix: '+297', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Aruba'},
    { code: 'AU', prefix: '+61', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Australia'},
    { code: 'AT', prefix: '+43', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Austria'},
    { code: 'AZ', prefix: '+994', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Azerbaijan'},
    { code: 'BH', prefix: '+973', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bahrain'},
    { code: 'BS', prefix: '+1-242',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bahamas'},
    { code: 'BD', prefix: '+880', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bangladesh'},
    { code: 'BB', prefix: '+1-246',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Barbados'},
    { code: 'BY', prefix: '+375', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Belarus'},
    { code: 'BE', prefix: '+32', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Belgium'},
    { code: 'BZ', prefix: '+501', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Belize'},
    { code: 'BJ', prefix: '+229', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Benin'},
    { code: 'BM', prefix: '+1-441',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bermuda'},
    { code: 'BT', prefix: '+975', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bhutan'},
    { code: 'BO', prefix: '+591', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bolivia\, Plurinational State of'},
    { code: 'BQ', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bonaire\, Sint Eustatius and Saba'},
    { code: 'BA', prefix: '+387', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bosnia and Herzegovina'},
    { code: 'BW', prefix: '+267', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Botswana'},
    { code: 'BV', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bouvet Island'},
    { code: 'BR', prefix: '+55', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Brazil'},
    { code: 'IO', prefix: '+1-284',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'British Indian Ocean Territory'},
    { code: 'BN', prefix: '+673', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Brunei Darussalam'},
    { code: 'BG', prefix: '+359', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Bulgaria'},
    { code: 'BF', prefix: '+226', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Burkina Faso'},
    { code: 'BI', prefix: '+257', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Burundi'},
    { code: 'KH', prefix: '+855', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Cambodia'},
    { code: 'CM', prefix: '+237', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Cameroon'},
    { code: 'CA', prefix: '+1', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Canada'},
    { code: 'CV', prefix: '+238', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Cape Verde'},
    { code: 'KY', prefix: '+1-345',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Cayman Islands'},
    { code: 'CF', prefix: '+236', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Central African Republic'},
    { code: 'TD', prefix: '+235', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Chad'},
    { code: 'CL', prefix: '+56', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Chile'},
    { code: 'CN', prefix: '+86', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'China'},
    { code: 'CX', prefix: '+61', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Christmas Island'},
    { code: 'CC', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Cocos (Keeling) Islands'},
    { code: 'CO', prefix: '+57', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Colombia'},
    { code: 'KM', prefix: '+269', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Comoros'},
    { code: 'CG', prefix: '+242', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Congo'},
    { code: 'CD', prefix: '+243', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Congo\, Democratic Republic of'},
    { code: 'CK', prefix: '+682', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Cook Islands'},
    { code: 'CR', prefix: '+506', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Costa Rica'},
    { code: 'CI', prefix: '+225', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Côte d`Ivoire'},
    { code: 'HR', prefix: '+385', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Croatia'},
    { code: 'CU', prefix: '+53', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Cuba'},
    { code: 'CW', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Curaçao'},
    { code: 'CY', prefix: '+357', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Cyprus'},
    { code: 'CZ', prefix: '+420', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Czech Republic'},
    { code: 'DK', prefix: '+45', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Denmark'},
    { code: 'DJ', prefix: '+253', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Djibouti'},
    { code: 'DM', prefix: '+1-767',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Dominica'},
    { code: 'DO', prefix: '+1-809',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Dominican Republic'},
    { code: 'EC', prefix: '+593', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Ecuador'},
    { code: 'EG', prefix: '+20', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Egypt'},
    { code: 'SV', prefix: '+503', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'El Salvador'},
    { code: 'GQ', prefix: '+240', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Equatorial Guinea'},
    { code: 'ER', prefix: '+291', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Eritrea'},
    { code: 'EE', prefix: '+372', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Estonia'},
    { code: 'ET', prefix: '+251', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Ethiopia'},
    { code: 'FK', prefix: '+500', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Falkland Islands (Malvinas)'},
    { code: 'FO', prefix: '+298', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Faroe Islands'},
    { code: 'FJ', prefix: '+679', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Fiji'},
    { code: 'FI', prefix: '+358', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Finland'},
    { code: 'FR', prefix: '+33', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'France'},
    { code: 'GF', prefix: '+594', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'French Guiana'},
    { code: 'PF', prefix: '+689', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'French Polynesia'},
    { code: 'TF', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'French Southern Territories'},
    { code: 'GA', prefix: '+241', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Gabon'},
    { code: 'GM', prefix: '+220', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Gambia'},
    { code: 'GE', prefix: '+995', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Georgia'},
    { code: 'DE', prefix: '+49', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Germany'},
    { code: 'GH', prefix: '+233', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Ghana'},
    { code: 'GI', prefix: '+350', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Gibraltar'},
    { code: 'GR', prefix: '+30', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Greece'},
    { code: 'GL', prefix: '+299', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Greenland'},
    { code: 'GD', prefix: '+1-473',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Grenada'},
    { code: 'GP', prefix: '+590', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Guadeloupe'},
    { code: 'GU', prefix: '+1-671',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Guam'},
    { code: 'GT', prefix: '+502', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Guatemala'},
    { code: 'GG', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Guernsey'},
    { code: 'GN', prefix: '+224', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Guinea'},
    { code: 'GW', prefix: '+245', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Guinea-Bissau'},
    { code: 'GY', prefix: '+592', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Guyana'},
    { code: 'HT', prefix: '+509', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Haiti'},
    { code: 'HM', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Heard Island and McDonald Islands'},
    { code: 'VA', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Holy See (Vatican City State)'},
    { code: 'HN', prefix: '+504', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Honduras'},
    { code: 'HK', prefix: '+852', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Hong Kong'},
    { code: 'HU', prefix: '+36', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Hungary'},
    { code: 'IS', prefix: '+354', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Iceland'},
    { code: 'IN', prefix: '+91', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'India'},
    { code: 'ID', prefix: '+62', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Indonesia'},
    { code: 'IR', prefix: '+98', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Iran'},
    { code: 'IQ', prefix: '+964', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Iraq'},
    { code: 'IE', prefix: '+353', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Ireland'},
    { code: 'IM', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Isle of Man'},
    { code: 'IL', prefix: '+972', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Israel'},
    { code: 'IT', prefix: '+39', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Italy'},
    { code: 'JM', prefix: '+1-876',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Jamaica'},
    { code: 'JP', prefix: '+81', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Japan'},
    { code: 'JE', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Jersey'},
    { code: 'JO', prefix: '+962', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Jordan'},
    { code: 'KZ', prefix: '+7', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Kazakhstan'},
    { code: 'KE', prefix: '+254', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Kenya'},
    { code: 'KI', prefix: '+686', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Kiribati'},
    { code: 'KP', prefix: '+850', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Korea\, Democratic People`s Republic of'},
    { code: 'KR', prefix: '+82', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Korea\, Republic of'},
    { code: 'KW', prefix: '+965', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Kuwait'},
    { code: 'KG', prefix: '+996', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Kyrgyzstan'},
    { code: 'LA', prefix: '+856', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Lao People`s Democratic Republic'},
    { code: 'LV', prefix: '+371', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Latvia'},
    { code: 'LB', prefix: '+961', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Lebanon'},
    { code: 'LS', prefix: '+266', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Lesotho'},
    { code: 'LR', prefix: '+231', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Liberia'},
    { code: 'LY', prefix: '+218', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Libya'},
    { code: 'LI', prefix: '+423', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Liechtenstein'},
    { code: 'LT', prefix: '+370', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Lithuania'},
    { code: 'LU', prefix: '+352', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Luxembourg'},
    { code: 'MO', prefix: '+853', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Macao'},
    { code: 'MK', prefix: '+389', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Macedonia'},
    { code: 'MG', prefix: '+261', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Madagascar'},
    { code: 'MW', prefix: '+265', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Malawi'},
    { code: 'MY', prefix: '+60', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Malaysia'},
    { code: 'MV', prefix: '+960', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Maldives'},
    { code: 'ML', prefix: '+223', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Mali'},
    { code: 'MT', prefix: '+356', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Malta'},
    { code: 'MH', prefix: '+692', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Marshall Islands'},
    { code: 'MQ', prefix: '+596', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Martinique'},
    { code: 'MR', prefix: '+222', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Mauritania'},
    { code: 'MU', prefix: '+230', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Mauritius'},
    { code: 'YT', prefix: '+269', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Mayotte'},
    { code: 'MX', prefix: '+52', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Mexico'},
    { code: 'FM', prefix: '+691', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Micronesia\, Federated States of'},
    { code: 'MD', prefix: '+373', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Moldova\, Republic of'},
    { code: 'MC', prefix: '+377', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Monaco'},
    { code: 'MN', prefix: '+976', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Mongolia'},
    { code: 'ME', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Montenegro'},
    { code: 'MS', prefix: '+1-664',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Montserrat'},
    { code: 'MA', prefix: '+212', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Morocco'},
    { code: 'MZ', prefix: '+258', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Mozambique'},
    { code: 'MM', prefix: '+95', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Myanmar'},
    { code: 'NA', prefix: '+264', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Namibia'},
    { code: 'NR', prefix: '+674', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Nauru'},
    { code: 'NP', prefix: '+977', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Nepal'},
    { code: 'NL', prefix: '+31', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Netherlands'},
    { code: 'NC', prefix: '+687', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'New Caledonia'},
    { code: 'NZ', prefix: '+64', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'New Zealand'},
    { code: 'NI', prefix: '+505', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Nicaragua'},
    { code: 'NE', prefix: '+227', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Niger'},
    { code: 'NG', prefix: '+234', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Nigeria'},
    { code: 'NU', prefix: '+683', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Niue'},
    { code: 'NF', prefix: '+672', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Norfolk Island'},
    { code: 'MP', prefix: '+1-670',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Northern Mariana Islands'},
    { code: 'NO', prefix: '+47', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Norway'},
    { code: 'OM', prefix: '+968', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Oman'},
    { code: 'PK', prefix: '+92', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Pakistan'},
    { code: 'PW', prefix: '+680', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Palau'},
    { code: 'PS', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Palestine\, State of'},
    { code: 'PA', prefix: '+507', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Panama'},
    { code: 'PG', prefix: '+675', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Papua New Guinea'},
    { code: 'PY', prefix: '+595', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Paraguay'},
    { code: 'PE', prefix: '+51', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Peru'},
    { code: 'PH', prefix: '+63', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Philippines'},
    { code: 'PN', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Pitcairn'},
    { code: 'PL', prefix: '+48', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Poland'},
    { code: 'PT', prefix: '+351', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Portugal'},
    { code: 'PR', prefix: '+1-887',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Puerto Rico'},
    { code: 'QA', prefix: '+974', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Qatar'},
    { code: 'RE', prefix: '+262', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Réunion'},
    { code: 'RO', prefix: '+40', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Romania'},
    { code: 'RU', prefix: '+7', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Russian Federation'},
    { code: 'RW', prefix: '+250', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Rwanda'},
    { code: 'BL', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Saint Barthélemy'},
    { code: 'SH', prefix: '+290', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Saint Helena\, Ascension and Tristan da Cunha'},
    { code: 'KN', prefix: '+1-869',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Saint Kitts and Nevis'},
    { code: 'LC', prefix: '+1-758',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Saint Lucia'},
    { code: 'MF', prefix: '+508', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Saint Martin (French part)'},
    { code: 'PM', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Saint Pierre and Miquelon'},
    { code: 'VC', prefix: '+1-784',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Saint Vincent and the Grenadines'},
    { code: 'WS', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Samoa'},
    { code: 'SM', prefix: '+378', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'San Marino'},
    { code: 'ST', prefix: '+239', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Sao Tome and Principe'},
    { code: 'SA', prefix: '+966', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Saudi Arabia'},
    { code: 'SN', prefix: '+221', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Senegal'},
    { code: 'RS', prefix: '+381', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Serbia'},
    { code: 'SC', prefix: '+248', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Seychelles'},
    { code: 'SL', prefix: '+232', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Sierra Leone'},
    { code: 'SG', prefix: '+65', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Singapore'},
    { code: 'SX', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Sint Maarten (Dutch part)'},
    { code: 'SK', prefix: '+421', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Slovakia'},
    { code: 'SI', prefix: '+386', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Slovenia'},
    { code: 'SB', prefix: '+677', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Solomon Islands'},
    { code: 'SO', prefix: '+252', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Somalia'},
    { code: 'ZA', prefix: '+27', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'South Africa'},
    { code: 'GS', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'South Georgia and the South Sandwich Islands'},
    { code: 'SS', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'South Sudan'},
    { code: 'ES', prefix: '+34', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Spain'},
    { code: 'LK', prefix: '+94', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Sri Lanka'},
    { code: 'SD', prefix: '+249', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Sudan'},
    { code: 'SR', prefix: '+597', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Suriname'},
    { code: 'SJ', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Svalbard and Jan Mayen'},
    { code: 'SZ', prefix: '+268', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Swaziland'},
    { code: 'SE', prefix: '+46', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Sweden'},
    { code: 'CH', prefix: '+41', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Switzerland'},
    { code: 'SY', prefix: '+963', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Syrian Arab Republic'},
    { code: 'TW', prefix: '+886', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Taiwan\, Province of China'},
    { code: 'TJ', prefix: '+992', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Tajikistan'},
    { code: 'TZ', prefix: '+255', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Tanzania\, United Republic of'},
    { code: 'TH', prefix: '+66', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Thailand'},
    { code: 'TL', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Timor-Leste'},
    { code: 'TG', prefix: '+228', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Togo'},
    { code: 'TK', prefix: '+690', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Tokelau'},
    { code: 'TO', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Tonga'},
    { code: 'TT', prefix: '+1-868',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Trinidad and Tobago'},
    { code: 'TN', prefix: '+216', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Tunisia'},
    { code: 'TR', prefix: '+90', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Turkey'},
    { code: 'TM', prefix: '+993', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Turkmenistan'},
    { code: 'TC', prefix: '+1-649',  flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Turks and Caicos Islands'},
    { code: 'TV', prefix: '+688', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Tuvalu'},
    { code: 'UG', prefix: '+256', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Uganda'},
    { code: 'UA', prefix: '+380', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Ukraine'},
    { code: 'AE', prefix: '+971', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'United Arab Emirates'},
    { code: 'GB', prefix: '+44', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'United Kingdom'},
    { code: 'US', prefix: '+1', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'United States'},
    { code: 'UM', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'United States Minor Outlying Islands'},
    { code: 'UY', prefix: '+598', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Uruguay'},
    { code: 'UZ', prefix: '+998', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Uzbekistan'},
    { code: 'VU', prefix: '+678', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Vanuatu'},
    { code: 'VE', prefix: '+58', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Venezuela\, Bolivarian Republic of'},
    { code: 'VN', prefix: '+84', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Viet Nam'},
    { code: 'VG', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Virgin Islands\, British'},
    { code: 'VI', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Virgin Islands\, U.S.'},
    { code: 'WF', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Wallis and Futuna'},
    { code: 'EH', prefix: '', 		 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Western Sahara'},
    { code: 'YE', prefix: '+998', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Yemen'},
    { code: 'ZM', prefix: '+260', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Zambia'},
    { code: 'ZW', prefix: '+263', 	 flagId: '2f02423d-3b94-40db-29f1-e786a2fb5000', title: 'Zimbabwe'},
]  


const currencies = [
	{ code: 'ARS',  symbol: '$', 		title: 'Argentine peso' },
	{ code: 'AMD',  symbol: '֏', 		title: 'Dram' },
	{ code: 'AUD',  symbol: '$', 		title: 'Australian dollar' },
	{ code: 'AZN',  symbol: '₼', 		title: 'Manat' },
	{ code: 'BDT',  symbol: '৳', 		title: 'Taka' },
	{ code: 'BRL',  symbol: 'R$', 		title: 'Real' },
	{ code: 'KHR',  symbol: '៛', 		title: 'Riel' },
	{ code: 'CAD',  symbol: '$', 		title: 'Canadian dollar' },
	{ code: 'CNY',  symbol: '元/¥', 	title: 'Renminbi' },
	{ code: 'KMF',  symbol: '', 		title: 'Comorian franc' },
	{ code: 'EGP',  symbol: 'E£', 		title: 'Egyptian pound' },
	{ code: 'FKP',  symbol: '£', 		title: 'Falkland Islands pound' },
	{ code: 'GIP',  symbol: '£', 		title: 'Gibraltar pound' },
	{ code: 'HTG',  symbol: 'G', 		title: 'Gourde' },
	{ code: 'HKD',  symbol: 'HK$', 		title: 'Hong Kong dollar' },
	{ code: 'INR',  symbol: '₹', 		title: 'Indian rupee' },
	{ code: 'IDR',  symbol: 'Rp', 		title: 'Indonesian rupiah' },
	{ code: 'GBP',  symbol: '£', 		title: 'Manx pound' },
	{ code: 'ILS',  symbol: '₪', 		title: 'New shekel' },
	{ code: 'JMD',  symbol: '',			title: 'Jamaican dollar' },
	{ code: 'JPY',  symbol: '¥', 		title: 'Japanese yen' },
	{ code: 'GBP',  symbol: '£', 		title: 'Pound sterling Jersey pound' },
	{ code: 'KZT',  symbol: '₸', 		title: 'Tenge' },
	{ code: 'KPW',  symbol: '₩', 		title: 'Korean People won' },
	{ code: 'KRW',  symbol: '₩', 		title: 'Korean Republic won' },
	{ code: 'KGS',  symbol: 'c', 		title: 'Kyrgyzstani som' },
	{ code: 'LAK',  symbol: '₭', 		title: 'Kip' },
	{ code: 'MWK',  symbol: 'D', 		title: 'Malawian kwacha' },
	{ code: 'MYR',  symbol: 'RM', 		title: 'Ringgit' },
	{ code: 'USD',  symbol: '$', 		title: 'US Dollar' },
	{ code: 'AFN',  symbol: '؋', 		title: 'Afghani' },
	{ code: 'LEK',  symbol: 'L', 		title: 'LEK' },
	{ code: 'AOA',  symbol: 'Kz', 		title: 'Kwanza' },
	{ code: 'XCD',  symbol: 'EC$', 		title: 'East Caribbean dollar' },
	{ code: 'AWG',  symbol: 'ƒ', 		title: 'Aruban florin' },
	{ code: 'BSD',  symbol: 'B$', 		title: 'Bahamian dollar' },
	{ code: 'BYN',  symbol: 'Br',  		title: 'Belarusian Ruble' },
	{ code: 'BBD',  symbol: 'Bds$', 	title: 'Barbadian Dollar' },
	{ code: 'HUF',  symbol: 'Ft.', 		title: 'Hungarian Forint' },
	{ code: 'CFA ', symbol:  'CFA', 	title: 'West African Franc' },
	{ code: 'BZD',  symbol: 'BZ$', 		title: 'Belize dollar' },
	{ code: 'BMD',  symbol: 'BD$', 		title: 'Bermudian Dollar' },
	{ code: 'BOB',  symbol: 'Bs', 		title: 'Bolivian boliviano' },
	{ code: 'BWP',  symbol: 'P', 		title: 'pula' },
	{ code: 'BND',  symbol: 'B$', 		title: 'Brunei dollar' },
	{ code: 'BGN',  symbol: 'лв', 		title: 'Lev' },
	{ code: 'XAF',  symbol: 'FCFA', 	title: 'Central African CFA franc' },
	{ code: 'CVE',  symbol: '',			title: 'Cape Verdean escudo' },
	{ code: 'KYD',  symbol: '',			title: 'Cayman Islands dollar' },
	{ code: 'CLP',  symbol: '',			title: 'Chilean peso' },
	{ code: 'CDF',  symbol: 'FC', 		title: 'Congolese franc' },
	{ code: 'CRC',  symbol: '₡', 		title: 'Costa Rican colón' },
	{ code: 'HRK',  symbol: 'kn', 		title: 'Croatian kuna' },
	{ code: 'CUP',  symbol: '$MN', 		title: 'Cuban peso' },
	{ code: 'CZK',  symbol: 'Kč', 		title: 'Czech koruna' },
	{ code: 'DKK',  symbol: 'øre', 		title: 'Danish krone' },
	{ code: 'DJF',  symbol: 'Fdj', 		title: 'Djiboutian franc' },
	{ code: 'DOP',  symbol: 'RD$', 		title: 'Dominican peso' },
	{ code: 'ERN',  symbol: 'Nkf', 		title: 'Nakfa' },
	{ code: 'ETB',  symbol: 'ብር ', 	    title: 'Birr' },
	{ code: 'FJD',  symbol: 'FJ$', 		title: 'Fijian dollar' },
	{ code: 'XPF',  symbol: '₣', 		title: 'CFP franc' },
	{ code: 'GMD',  symbol: 'D', 		title: 'Dalasi' },
	{ code: 'GHS',  symbol: 'GH₵', 		title: 'Cedi' },
	{ code: 'GTQ',  symbol: 'Q',	 	title: 'Quetzal' },
	{ code: 'GNF',  symbol: 'FG', 		title: 'Guinean franc' },
	{ code: 'GYD',  symbol: 'G$', 		title: 'Guyanese dollar' },
	{ code: 'HNL',  symbol: 'L', 		title: 'Lempira' },
	{ code: 'JOD',  symbol: 'د.أ', 		title: 'Jordanian dinar' },
	{ code: 'IQD',  symbol: 'د.ع', 		title: 'Iraqi dinar' },
	{ code: 'KES',  symbol: 'KSh', 		title: 'Kenyan shilling' },
	{ code: 'KWD',  symbol: 'د.ك', 		title: 'Kuwaiti dinar' },
	{ code: 'LBP',  symbol: '£L', 		title: 'Lebanese pound' },
	{ code: 'LRD',  symbol: 'L$', 		title: 'Liberian dollar' },
	{ code: 'LYD',  symbol: 'ل.د', 		title: 'Libyan dinar' },
	{ code: 'CHF',  symbol: 'Fr.', 		title: 'Swiss franc' },
	{ code: 'MOP',  symbol: 'MOP$', 	title: 'Macanese Pataca' },
	{ code: 'MGA',  symbol: 'Ar', 		title: 'Ariary' },
	{ code: 'MVR',  symbol: '.ރ', 		title: 'Maldivian rufiyaa' },
	{ code: 'MRU',  symbol: 'UM', 		title: 'Ouguiya' },
	{ code: 'MUR',  symbol: '₨.', 		title: 'Mauritian rupee' },
	{ code: 'PLN',  symbol: 'zł', 		title: 'Złoty' },
	{ code: 'OMR',  symbol: 'ر.ع', 		title: 'Omani rial' },
	{ code: 'RWF',  symbol: 'R₣', 		title: 'Rwandan franc' },
	{ code: 'STN',  symbol: 'Db', 		title: 'Dobra' },
	{ code: 'RSD',  symbol: 'дин', 		title: 'Serbian dinar' },
	{ code: 'MMK',  symbol: 'K', 		title: 'Kyat' },
	{ code: 'NPR',  symbol: 'Rs\, रू', 	title: 'Nepalese rupee' },
	{ code: 'NZD',  symbol: '$', 		title: 'New Zealand dollar' },
	{ code: 'PKR',  symbol: '₨', 		title: 'Pakistani rupee' },
	{ code: 'PEN',  symbol: '', 		title: 'Sol' },
	{ code: 'PHP',  symbol: '₱', 		title: 'Philippine peso' },
	{ code: 'RUB',  symbol: '₽', 		title: 'Russian ruble' },
	{ code: 'SHP',  symbol: '£', 		title: 'Saint Helena pound' },
	{ code: 'WST',  symbol: 'WS$b', 	title: 'Tālā' },
	{ code: 'SAR',  symbol: 'SR', 		title: 'Saudi Riyal' },
	{ code: 'SGD',  symbol: 'S$', 		title: 'Singapore dollar' },
	{ code: 'LKR',  symbol: 'Rs', 		title: 'Sri Lankan rupee' },
	{ code: 'TWD',  symbol: 'NT$', 		title: 'New Taiwan dollar' },
	{ code: 'THB',  symbol: '฿', 		title: 'Baht' },
	{ code: 'TRY',  symbol: '₺', 		title: 'Turkish lira' },
	{ code: 'UAH',  symbol: '₴', 		title: 'Hryvnia' },
	{ code: 'GBP',  symbol: 'f', 		title: 'Pound sterling' },
	{ code: 'VND',  symbol: '₫', 		title: 'đồng' },
	{ code: 'EUR',  symbol: '€', 		title: 'Euro' },
	{ code: 'DZD',  symbol: 'دج ', 		title: 'Algerian dinar' },
	{ code: 'BHD',  symbol: 'د.ب', 		title: 'Bahraini dinar' },
	{ code: 'IRR',  symbol: 'ریال', 	title: 'Iranian Rial' },
	{ code: 'BTN',  symbol: 'Nu.', 		title: 'Bhutanese Ngultrum' },
	{ code: 'BAM',  symbol: 'KM', 		title: 'Convertible mark' },
	{ code: 'BIF',  symbol: 'FBu', 		title: 'Burundian franc' },
	{ code: 'COP',  symbol: '', 		title: 'Colombian peso' },
	{ code: 'ANG',  symbol: 'NAƒ', 		title: 'Netherlands Antillean guilder' },
	{ code: 'FOK',  symbol: 'kr', 		title: 'Faroese króna' },
	{ code: 'GBP',  symbol: '£', 		title: 'Guernsey pound sterling' },
	{ code: 'ISK',  symbol: 'kr', 		title: 'Icelandic króna' },
	{ code: 'ZAR',  symbol: 'R', 		title: 'South African rand' },
	{ code: 'MKD',  symbol: 'ден', 		title: 'Macedonian denar' },
	{ code: 'MXN',  symbol: 'MX$', 		title: 'Mexican peso' },
	{ code: 'MDL',  symbol: 'L', 		title: 'Moldovan leu' },
	{ code: 'MNT',  symbol: '₮', 		title: 'Tögrög' },
	{ code: 'MAD',  symbol: 'DH', 		title: 'Moroccan dirham' },
	{ code: 'MZN',  symbol: 'MT', 		title: 'Metical' },
	{ code: 'NAD',  symbol: 'N$', 		title: 'Namibian dollar' },
	{ code: 'ZWL',  symbol: '', 		title: 'Zimbabwean dollar' },
	{ code: 'ZMW',  symbol: 'ZK', 		title: 'Zambian kwacha' },
	{ code: 'YER',  symbol: 'ر.ي', 		title: 'Yemeni rial' },
	{ code: 'VED',  symbol: 'Bs.', 		title: 'Bolívar digital' },
	{ code: 'VUV',  symbol: 'VT', 		title: 'Vatu' },
	{ code: 'UZM',  symbol: 'сум', 		title: 'Uzbek som' },
	{ code: 'AED',  symbol: 'د.إ', 		title: 'UAE dirham' },
	{ code: 'UGX',  symbol: 'USh', 		title: 'Ugandan shilling' },
	{ code: 'TND',  symbol: 'د.ت', 		title: 'Tunisian dinar' },
	{ code: 'TMT',  symbol: 'm', 		title: 'Turkmenistan manat' },
	{ code: 'TTD',  symbol: 'TT$', 		title: 'Trinidad and Tobago dollar' },
	{ code: 'TOP',  symbol: 'T$', 		title: 'Pa anga' },
	{ code: 'TZS',  symbol: 'TSh', 		title: 'Tanzanian shilling' },
	{ code: 'TJS',  symbol: 'SM', 		title: 'Somoni' },
	{ code: 'SYPv', symbol: 'ل.س', 	    title: 'Syrian pound' },
	{ code: 'SEK',  symbol: 'öre', 		title: 'Swedish krona' },
	{ code: 'SRD',  symbol: 'Sur$', 	title: 'Surinamese dollar' },
	{ code: 'SDG',  symbol: 'ج.س', 		title: 'Sudanese pound' },
	{ code: 'SSP',  symbol: '', 		title: 'South Sudanese pound' },
	{ code: 'SOS',  symbol: 'Sh', 		title: 'Somali shilling' },
	{ code: 'SBD',  symbol: 'SI$', 		title: 'Solomon Islands dollar' },
	{ code: 'SLL',  symbol: '',			title: 'Leone' },
	{ code: 'SCR',  symbol: '₨', 		title: 'Seychellois rupee' },
	{ code: 'RON',  symbol: 'L', 		title: 'Romanian leu' },
	{ code: 'NIO',  symbol: 'C$', 		title: 'Córdoba' },
	{ code: 'NGN',  symbol: '₦', 		title: 'Naira' },
	{ code: 'NOK',  symbol: 'øre', 		title: 'Norwegian krone' },
	{ code: 'PGK',  symbol: 'K', 		title: 'Kina' },
	{ code: 'PYG',  symbol: '₲', 		title: 'Guaraní' },
	{ code: 'QAR',  symbol: 'ر.ق', 		title: 'Qatari riyal' },
]

const days = [
    { title: 'Monday' },
    { title: 'Tuesday' },
    { title: 'Wednesday' },
    { title: 'Thursday' },
    { title: 'Friday' },
    { title: 'Saturday' },
    { title: 'Sunday' },
]

const dominationLevels = [
    { title: 'Novice' },
    { title: 'Advanced Beginner' },
    { title: 'Competent' },
    { title: 'Proficient' },
    { title: 'Expert' },
]

const drivingLicenses = [
    { title: 'A'    },
	{ title: 'A1'   },
	{ title: 'B'    }, 
	{ title: 'B1'   },
	{ title: 'C'    }, 
	{ title: 'C1'   },
	{ title: 'D'    }, 
	{ title: 'D1'   },
	{ title: 'BE'   },
	{ title: 'CE'   },
	{ title: 'C1E'  },
	{ title: 'DE'   },
	{ title: 'D1E'  },
]

const employmentTypes = [
    { title: 'Freelancer' },
    { title: 'Contractor' },
    { title: 'Sub-Contractor' },
    { title: 'Apprenticeship' },
    { title: 'Traineeship' },
    { title: 'Employment on commission' },
    { title: 'Probation' },
    { title: 'Full-time' },
    { title: 'Casual' },
    { title: 'Temporary' },
    { title: 'Part-time' },
    { title: 'Seasonal' },
    { title: 'Fixed term' },
]

const genders = [
    { title: 'Male' },
    { title: 'Female' },
    { title: 'Other' },
]

const industries = [
    { title: 'Defense & Space' },
    { title: 'Other' },
    { title: 'Computer Hardware' },
    { title: 'Computer Software' },
    { title: 'Computer Networking' },
    { title: 'Internet' },
    { title: 'Semiconductors' },
    { title: 'Telecommunications' },
    { title: 'Law Practice' },
    { title: 'Legal Services' },
    { title: 'Management Consulting' },
    { title: 'Biotechnology' },
    { title: 'Medical Practice' },
    { title: 'Hospital & Health Care' },
    { title: 'Pharmaceuticals' },
    { title: 'Veterinary' },
    { title: 'Medical Devices' },
    { title: 'Cosmetics' },
    { title: 'Apparel & Fashion' },
    { title: 'Sporting Goods' },
    { title: 'Tobacco' },
    { title: 'Supermarkets' },
    { title: 'Food Production' },
    { title: 'Consumer Electronics' },
    { title: 'Consumer Goods' },
    { title: 'Furniture' },
    { title: 'Retail' },
    { title: 'Entertainment' },
    { title: 'Gambling & Casinos' },
    { title: 'Leisure, Travel & Tourism' },
    { title: 'Hospitality' },
    { title: 'Restaurants' },
    { title: 'Sports' },
    { title: 'Food & Beverages' },
    { title: 'Motion Pictures and Film' },
    { title: 'Broadcast Media' },
    { title: 'Museums and Institutions' },
    { title: 'Fine Art' },
    { title: 'Performing Arts' },
    { title: 'Recreational Facilities and Services' },
    { title: 'Banking' },
    { title: 'Insurance' },
    { title: 'Financial Services' },
    { title: 'Real Estate' },
    { title: 'Investment Banking' },
    { title: 'Investment Management' },
    { title: 'Accounting' },
    { title: 'Construction' },
    { title: 'Building Materials' },
    { title: 'Architecture & Planning' },
    { title: 'Civil Engineering' },
    { title: 'Aviation & Aerospace' },
    { title: 'Automotive' },
    { title: 'Chemicals' },
    { title: 'Machinery' },
    { title: 'Mining & Metals' },
    { title: 'Oil & Energy' },
    { title: 'Shipbuilding' },
    { title: 'Utilities' },
    { title: 'Textiles' },
    { title: 'Paper & Forest Products' },
    { title: 'Railroad Manufacture' },
    { title: 'Ranching' },
    { title: 'Farming' },
    { title: 'Dairy' },
    { title: 'Fishery' },
    { title: 'Primary/Secondary Education' },
    { title: 'Higher Education' },
    { title: 'Education Management' },
    { title: 'Research' },
    { title: 'Military' },
    { title: 'Legislative Office' },
    { title: 'Judiciary' },
    { title: 'International Affairs' },
    { title: 'Government Administration' },
    { title: 'Executive Office' },
    { title: 'Law Enforcement' },
    { title: 'Public Safety' },
    { title: 'Public Policy' },
    { title: 'Marketing and Advertising' },
    { title: 'Newspapers' },
    { title: 'Publishing' },
    { title: 'Printing' },
    { title: 'Information Services' },
    { title: 'Libraries' },
    { title: 'Environmental Services' },
    { title: 'Package/Freight Delivery' },
    { title: 'Individual & Family Services' },
    { title: 'Religious Institutions' },
    { title: 'Civic & Social Organization' },
    { title: 'Consumer Services' },
    { title: 'Transportation/Trucking/Railroad' },
    { title: 'Warehousing' },
    { title: 'Airlines/Aviation' },
    { title: 'Maritime' },
    { title: 'Information Technology and Services' },
    { title: 'Market Research' },
    { title: 'Public Relations and Communications' },
    { title: 'Design' },
    { title: 'Non-Profit  Organization Management' },
    { title: 'Fund-Raising' },
    { title: 'Program Development' },
    { title: 'Writing and Editing' },
    { title: 'Staffing and Recruiting' },
    { title: 'Professional Training & Coaching' },
    { title: 'Venture Capital & Private ' },
    { title: 'Political Organization' },
    { title: 'Translation and Localization' },
    { title: 'Computer Games' },
    { title: 'Events Services' },
    { title: 'Arts and Crafts' },
    { title: 'Electrical/Electronic Manufacturing' },
    { title: 'Online Media' },
    { title: 'Nanotechnology' },
    { title: 'Music' },
    { title: 'Logistics and Supply Chain' },
    { title: 'Plastics' },
    { title: 'Computer & Network Security' },
    { title: 'Wireless' },
    { title: 'Alternative Dispute Resolution' },
    { title: 'Security and Investigations' },
    { title: 'Facilities Services' },
    { title: 'Outsourcing/Offshoring' },
    { title: 'Health, Wellness and Fitness' },
    { title: 'Alternative Medicine' },
    { title: 'Media Production' },
    { title: 'Animation' },
    { title: 'Commercial Real Estate' },
    { title: 'Capital Markets' },
    { title: 'Think Tanks' },
    { title: 'Philanthropy' },
    { title: 'E-Learning' },
    { title: 'Wholesale' },
    { title: 'Import and Export' },
    { title: 'Mechanical or Industrial Engineering' },
    { title: 'Photography' },
    { title: 'Human Resources' },
    { title: 'Business Supplies and Equipment' },
    { title: 'Mental Health Care' },
    { title: 'Graphic Design' },
    { title: 'International Trade and Development' },
    { title: 'Wine and Spirits' },
    { title: 'Luxury Goods & Jewelry' },
    { title: 'Renewables & Environment' },
    { title: 'Glass, Ceramics & Concrete' },
    { title: 'Packaging and Containers' },
    { title: 'Industrial Automation' },
    { title: 'Government Relations' },
]

const jobStatus = [
    { title: 'New'      },
	{ title: 'Hold'     },
	{ title: 'Suspend'  },
	{ title: 'Disabled' },
	{ title: 'Published'},
	{ title: 'Closed'   },
	{ title: 'Expired'  },
]

const jobQuestionsCategories = [
    { title: 'Availibility' },
    { title: 'Education' },
    { title: 'Licenses & Certificate' },
    { title: 'Skills & Knowladge' },
    { title: 'Location' },
    { title: 'Other Information' },
]

const languageCertificates = [
    { title: 'A1'   },
	{ title: 'A2'   },
	{ title: 'B1'   },
	{ title: 'B2'   },
	{ title: 'C1'   },
	{ title: 'C2'   },
	{ title: 'None' },
]

const languageLevels = [
	{ title: 'Beginner' },
	{ title: 'Intermediate' },
	{ title: 'Upper Intermediate' },
	{ title: 'Advanced' },
	{ title: 'Native or Bilingual' },
	{ title: 'Fluent' },
]

const languages = [
	{ code: 'aa', isRtl: false, isDefault: false, title: 'Afar' },
	{ code: 'ab', isRtl: false, isDefault: false, title: 'Abkhazian' },
	{ code: 'af', isRtl: false, isDefault: false, title: 'Afrikaans' },
	{ code: 'am', isRtl: false, isDefault: false, title: 'Amharic' },
	{ code: 'ar', isRtl: false, isDefault: false, title: 'Arabic' },
	{ code: 'as', isRtl: false, isDefault: false, title: 'Assamese' },
	{ code: 'ay', isRtl: false, isDefault: false, title: 'Aymara' },
	{ code: 'az', isRtl: false, isDefault: false, title: 'Azerbaijani' },
	{ code: 'ba', isRtl: false, isDefault: false, title: 'Bashkir' },
	{ code: 'be', isRtl: false, isDefault: false, title: 'Belarusian' },
	{ code: 'bg', isRtl: false, isDefault: false, title: 'Bulgarian' },
	{ code: 'bh', isRtl: false, isDefault: false, title: 'Bihari' },
	{ code: 'bi', isRtl: false, isDefault: false, title: 'Bislama' },
	{ code: 'bn', isRtl: false, isDefault: false, title: 'Bengali/Bangla' },
	{ code: 'bo', isRtl: false, isDefault: false, title: 'Tibetan' },
	{ code: 'br', isRtl: false, isDefault: false, title: 'Breton' },
	{ code: 'ca', isRtl: false, isDefault: false, title: 'Catalan' },
	{ code: 'co', isRtl: false, isDefault: false, title: 'Corsican' },
	{ code: 'cs', isRtl: false, isDefault: false, title: 'Czech' },
	{ code: 'cy', isRtl: false, isDefault: false, title: 'Welsh' },
	{ code: 'da', isRtl: false, isDefault: false, title: 'Danish' },
	{ code: 'de', isRtl: false, isDefault: false, title: 'German' },
	{ code: 'dz', isRtl: false, isDefault: false, title: 'Bhutani' },
	{ code: 'el', isRtl: false, isDefault: false, title: 'Greek' },
	{ code: 'en', isRtl: false, isDefault: true,  title: 'English' },
	{ code: 'eo', isRtl: false, isDefault: false, title: 'Esperanto' },
	{ code: 'es', isRtl: false, isDefault: false, title: 'Spanish' },
	{ code: 'et', isRtl: false, isDefault: false, title: 'Estonian' },
	{ code: 'eu', isRtl: false, isDefault: false, title: 'Basque' },
	{ code: 'fa', isRtl: true,  isDefault: false, title: 'Persian' },
	{ code: 'fi', isRtl: false, isDefault: false, title: 'Finnish' },
	{ code: 'fj', isRtl: false, isDefault: false, title: 'Fiji' },
	{ code: 'fo', isRtl: false, isDefault: false, title: 'Faeroese' },
	{ code: 'fr', isRtl: false, isDefault: false, title: 'French' },
	{ code: 'fy', isRtl: false, isDefault: false, title: 'Frisian' },
	{ code: 'ga', isRtl: false, isDefault: false, title: 'Irish' },
	{ code: 'gd', isRtl: false, isDefault: false, title: 'Scots/Gaelic' },
	{ code: 'gl', isRtl: false, isDefault: false, title: 'Galician' },
	{ code: 'gn', isRtl: false, isDefault: false, title: 'Guarani' },
	{ code: 'gu', isRtl: false, isDefault: false, title: 'Gujarati' },
	{ code: 'ha', isRtl: false, isDefault: false, title: 'Hausa' },
	{ code: 'hi', isRtl: false, isDefault: false, title: 'Hindi' },
	{ code: 'hr', isRtl: false, isDefault: false, title: 'Croatian' },
	{ code: 'hu', isRtl: false, isDefault: false, title: 'Hungarian' },
	{ code: 'hy', isRtl: false, isDefault: false, title: 'Armenian' },
	{ code: 'ia', isRtl: false, isDefault: false, title: 'Interlingua' },
	{ code: 'ie', isRtl: false, isDefault: false, title: 'Interlingue' },
	{ code: 'ik', isRtl: false, isDefault: false, title: 'Inupiak' },
	{ code: 'in', isRtl: false, isDefault: false, title: 'Indonesian' },
	{ code: 'is', isRtl: false, isDefault: false, title: 'Icelandic' },
	{ code: 'it', isRtl: false, isDefault: false, title: 'Italian' },
	{ code: 'iw', isRtl: false, isDefault: false, title: 'Hebrew' },
	{ code: 'ja', isRtl: false, isDefault: false, title: 'Japanese' },
	{ code: 'ji', isRtl: false, isDefault: false, title: 'Yiddish' },
	{ code: 'jw', isRtl: false, isDefault: false, title: 'Javanese' },
	{ code: 'ka', isRtl: false, isDefault: false, title: 'Georgian' },
	{ code: 'kk', isRtl: false, isDefault: false, title: 'Kazakh' },
	{ code: 'kl', isRtl: false, isDefault: false, title: 'Greenlandic' },
	{ code: 'km', isRtl: false, isDefault: false, title: 'Cambodian' },
	{ code: 'kn', isRtl: false, isDefault: false, title: 'Kannada' },
	{ code: 'ko', isRtl: false, isDefault: false, title: 'Korean' },
	{ code: 'ks', isRtl: false, isDefault: false, title: 'Kashmiri' },
	{ code: 'ku', isRtl: false, isDefault: false, title: 'Kurdish' },
	{ code: 'ky', isRtl: false, isDefault: false, title: 'Kirghiz' },
	{ code: 'la', isRtl: false, isDefault: false, title: 'Latin' },
	{ code: 'ln', isRtl: false, isDefault: false, title: 'Lingala' },
	{ code: 'lo', isRtl: false, isDefault: false, title: 'Laothian' },
	{ code: 'lt', isRtl: false, isDefault: false, title: 'Lithuanian' },
	{ code: 'lv', isRtl: false, isDefault: false, title: 'Latvian/Lettish' },
	{ code: 'mg', isRtl: false, isDefault: false, title: 'Malagasy' },
	{ code: 'mi', isRtl: false, isDefault: false, title: 'Maori' },
	{ code: 'mk', isRtl: false, isDefault: false, title: 'Macedonian' },
	{ code: 'ml', isRtl: false, isDefault: false, title: 'Malayalam' },
	{ code: 'mn', isRtl: false, isDefault: false, title: 'Mongolian' },
	{ code: 'mo', isRtl: false, isDefault: false, title: 'Moldavian' },
	{ code: 'mr', isRtl: false, isDefault: false, title: 'Marathi' },
	{ code: 'ms', isRtl: false, isDefault: false, title: 'Malay' },
	{ code: 'mt', isRtl: false, isDefault: false, title: 'Maltese' },
	{ code: 'my', isRtl: false, isDefault: false, title: 'Burmese' },
	{ code: 'na', isRtl: false, isDefault: false, title: 'Nauru' },
	{ code: 'ne', isRtl: false, isDefault: false, title: 'Nepali' },
	{ code: 'nl', isRtl: false, isDefault: false, title: 'Dutch' },
	{ code: 'no', isRtl: false, isDefault: false, title: 'Norwegian' },
	{ code: 'oc', isRtl: false, isDefault: false, title: 'Occitan' },
	{ code: 'om', isRtl: false, isDefault: false, title: '(Afan)/Oromoor/Oriya' },
	{ code: 'pa', isRtl: false, isDefault: false, title: 'Punjabi' },
	{ code: 'pl', isRtl: false, isDefault: false, title: 'Polish' },
	{ code: 'ps', isRtl: false, isDefault: false, title: 'Pashto/Pushto' },
	{ code: 'pt', isRtl: false, isDefault: false, title: 'Portuguese' },
	{ code: 'qu', isRtl: false, isDefault: false, title: 'Quechua' },
	{ code: 'rm', isRtl: false, isDefault: false, title: 'Rhaeto-Romance' },
	{ code: 'rn', isRtl: false, isDefault: false, title: 'Kirundi' },
	{ code: 'ro', isRtl: false, isDefault: false, title: 'Romanian' },
	{ code: 'ru', isRtl: false, isDefault: false, title: 'Russian' },
	{ code: 'rw', isRtl: false, isDefault: false, title: 'Kinyarwanda' },
	{ code: 'sa', isRtl: false, isDefault: false, title: 'Sanskrit' },
	{ code: 'sd', isRtl: false, isDefault: false, title: 'Sindhi' },
	{ code: 'sg', isRtl: false, isDefault: false, title: 'Sangro' },
	{ code: 'sh', isRtl: false, isDefault: false, title: 'Serbo-Croatian' },
	{ code: 'si', isRtl: false, isDefault: false, title: 'Singhalese' },
	{ code: 'sk', isRtl: false, isDefault: false, title: 'Slovak' },
	{ code: 'sl', isRtl: false, isDefault: false, title: 'Slovenian' },
	{ code: 'sm', isRtl: false, isDefault: false, title: 'Samoan' },
	{ code: 'sn', isRtl: false, isDefault: false, title: 'Shona' },
	{ code: 'so', isRtl: false, isDefault: false, title: 'Somali' },
	{ code: 'sq', isRtl: false, isDefault: false, title: 'Albanian' },
	{ code: 'sr', isRtl: false, isDefault: false, title: 'Serbian' },
	{ code: 'ss', isRtl: false, isDefault: false, title: 'Siswati' },
	{ code: 'st', isRtl: false, isDefault: false, title: 'Sesotho' },
	{ code: 'su', isRtl: false, isDefault: false, title: 'Sundanese' },
	{ code: 'sv', isRtl: false, isDefault: false, title: 'Swedish' },
	{ code: 'sw', isRtl: false, isDefault: false, title: 'Swahili' },
	{ code: 'ta', isRtl: false, isDefault: false, title: 'Tamil' },
	{ code: 'te', isRtl: false, isDefault: false, title: 'Telugu' },
	{ code: 'tg', isRtl: false, isDefault: false, title: 'Tajik' },
	{ code: 'th', isRtl: false, isDefault: false, title: 'Thai' },
	{ code: 'ti', isRtl: false, isDefault: false, title: 'Tigrinya' },
	{ code: 'tk', isRtl: false, isDefault: false, title: 'Turkmen' },
	{ code: 'tl', isRtl: false, isDefault: false, title: 'Tagalog' },
	{ code: 'tn', isRtl: false, isDefault: false, title: 'Setswana' },
	{ code: 'to', isRtl: false, isDefault: false, title: 'Tonga' },
	{ code: 'tr', isRtl: false, isDefault: false, title: 'Turkish' },
	{ code: 'ts', isRtl: false, isDefault: false, title: 'Tsonga' },
	{ code: 'tt', isRtl: false, isDefault: false, title: 'Tatar' },
	{ code: 'tw', isRtl: false, isDefault: false, title: 'Twi' },
	{ code: 'uk', isRtl: false, isDefault: false, title: 'Ukrainian' },
	{ code: 'ur', isRtl: false, isDefault: false, title: 'Urdu' },
	{ code: 'uz', isRtl: false, isDefault: false, title: 'Uzbek' },
	{ code: 'vi', isRtl: false, isDefault: false, title: 'Vietnamese' },
	{ code: 'vo', isRtl: false, isDefault: false, title: 'Volapuk' },
	{ code: 'wo', isRtl: false, isDefault: false, title: 'Wolof' },
	{ code: 'xh', isRtl: false, isDefault: false, title: 'Xhosa' },
	{ code: 'yo', isRtl: false, isDefault: false, title: 'Yoruba' },
	{ code: 'zh', isRtl: false, isDefault: false, title: 'Chinese' },
	{ code: 'zu', isRtl: false, isDefault: false, title: 'Zulu' },
]

const menus = [
    { sort: 1,  title: 'Dashboard' },
    { sort: 2,  title: 'Profile' },
    { sort: 3,  title: 'Company' },
    { sort: 4,  title: 'Jobs' },
    { sort: 5,  title: 'Projects' },
    { sort: 6,  title: 'Blog' },
    { sort: 7,  title: 'Settings' },
    { sort: 8,  title: 'Global Settings' },
    { sort: 9,  title: 'Messages' },
    { sort: 10, title: 'Support' },
]

const modules = [
	{ title: 'Overview', 		sort: 1, 	menuId: 1  },
	{ title: 'Recently', 		sort: 2, 	menuId: 1  },
	{ title: 'My Profile', 		sort: 1, 	menuId: 2  },
	{ title: 'Resume', 			sort: 2, 	menuId: 2  },
	{ title: 'User Profiles', 	sort: 3, 	menuId: 2  },
	{ title: 'User Resumes', 	sort: 4, 	menuId: 2  },
	{ title: 'Profile', 		sort: 1, 	menuId: 3  },
	{ title: 'Members', 		sort: 2, 	menuId: 3  },
	{ title: 'Projects', 		sort: 3, 	menuId: 3  },
	{ title: 'Timesheets', 		sort: 4, 	menuId: 3  },
	{ title: 'Invoices', 		sort: 5, 	menuId: 3  },
	{ title: 'Roles', 			sort: 6, 	menuId: 3  },
	{ title: 'Search', 			sort: 1, 	menuId: 4  },
	{ title: 'Manage', 			sort: 2, 	menuId: 4  },
	{ title: 'Applied', 		sort: 3, 	menuId: 4  },
	{ title: 'Post', 			sort: 4, 	menuId: 4  },
	{ title: 'List', 			sort: 1, 	menuId: 5  },
	{ title: 'Articles', 		sort: 1, 	menuId: 6  },
	{ title: 'General', 		sort: 1, 	menuId: 7  },
	{ title: 'Notifications', 	sort: 2, 	menuId: 7  },
	{ title: 'Privacy',		 	sort: 3, 	menuId: 7  },
	{ title: 'Account',			sort: 4, 	menuId: 7  },
	{ title: 'Roles', 			sort: 1, 	menuId: 8  },
	{ title: 'Social Media', 	sort: 2, 	menuId: 8  },
	{ title: 'Percentage', 		sort: 3, 	menuId: 8  },
	{ title: 'Translation', 	sort: 4, 	menuId: 8  },
	{ title: 'Basic Info', 		sort: 5, 	menuId: 8  },
	{ title: 'Permissions', 	sort: 6, 	menuId: 8  },
	{ title: 'Menus', 			sort: 7, 	menuId: 8  },
	{ title: 'Modules', 		sort: 8, 	menuId: 8  },
	{ title: 'Inbox',	 		sort: 1, 	menuId: 9  },
	{ title: 'Tickets', 		sort: 1,    menuId: 10 },
]

const nationalities = [
    { title: 'Afghan' },
	{ title: 'Alandic' },
	{ title: 'Albanian' },
	{ title: 'Algerian' },
	{ title: 'Samoans' },
	{ title: 'Andorran' },
	{ title: 'Angolan' },
	{ title: 'Anguillan' },
	{ title: 'Antarctic' },
	{ title: 'Antiguan - Barbudan' },
	{ title: 'Argentinian' },
	{ title: 'Armenian' },
	{ title: 'Aruban' },
	{ title: 'Australian' },
	{ title: 'Austrian' },
	{ title: 'Azerbaijani – Azeri' },
	{ title: 'Bahraini' },
	{ title: 'Bahamian' },
	{ title: 'Bangladeshi' },
	{ title: 'Barbadian – Bajan' },
	{ title: 'Belarusian' },
	{ title: 'Belgian' },
	{ title: 'Belizean' },
	{ title: 'Beninese' },
	{ title: 'Bermudian' },
	{ title: 'Bhutanese' },
	{ title: 'Bolivian' },
	{ title: 'Bosnian, Herzegovinian' },
	{ title: 'Batswana' },
	{ title: 'Brazilian' },
	{ title: 'Bruneian' },
	{ title: 'Bulgarian' },
	{ title: 'Burkinabè' },
	{ title: 'Burundian' },
	{ title: 'Cambodian' },
	{ title: 'Cameroonian' },
	{ title: 'Canadian' },
	{ title: 'Cape Verdean' },
	{ title: 'Caymanian' },
	{ title: 'Central African' },
	{ title: 'Chadian' },
	{ title: 'Chilean' },
	{ title: 'Chinese' },
	{ title: 'Christmas Islander' },
	{ title: 'Colombian' },
	{ title: 'Comorian' },
	{ title: 'Congolese' },
	{ title: 'Cook Islander' },
	{ title: 'Costa Rican' },
	{ title: 'Ivorian' },
	{ title: 'Croatian' },
	{ title: 'Cuban' },
	{ title: 'Curaçaoan' },
	{ title: 'Cypriot' },
	{ title: 'Czech' },
	{ title: 'Danish' },
	{ title: 'Djiboutian' },
	{ title: 'Dominican' },
	{ title: 'Ecuadorian' },
	{ title: 'Egyptian' },
	{ title: 'Salvadorian' },
	{ title: 'Equatoguinean' },
	{ title: 'Eritrean' },
	{ title: 'Estonian' },
	{ title: 'Ethiopian' },
	{ title: 'Falkland Islander-Falklander' },
	{ title: 'Faroe Islander-Faroese' },
	{ title: 'Fijian' },
	{ title: 'Finnish' },
	{ title: 'French' },
	{ title: 'French Guianese' },
	{ title: 'French Polynesian' },
	{ title: 'Gabonese' },
	{ title: 'Gambian' },
	{ title: 'German' },
	{ title: 'Ghanaian' },
	{ title: 'Gibraltarian' },
	{ title: 'Greek' },
	{ title: 'Greenlander-Greenlandic' },
	{ title: 'Grenadian' },
	{ title: 'Guadeloupean' },
	{ title: 'Guamanian' },
	{ title: 'Guatemalan' },
	{ title: 'Giernésiais' },
	{ title: 'Guinean' },
	{ title: 'Bissau-Guinean' },
	{ title: 'Guyanese' },
	{ title: 'Haitian' },
	{ title: 'Papal' },
	{ title: 'Honduran' },
	{ title: 'Hong KongerHong Kongese' },
	{ title: 'Hungarian' },
	{ title: 'Icelandic' },
	{ title: 'Indian' },
	{ title: 'Indonesian' },
	{ title: 'Iranian' },
	{ title: 'Iraqi' },
	{ title: 'Irish' },
	{ title: 'Manx' },
	{ title: 'Israeli' },
	{ title: 'Italian' },
	{ title: 'Jamaican' },
	{ title: 'Japanese' },
	{ title: 'Jèrriais' },
	{ title: 'Jordanian' },
	{ title: 'Kazakhstani' },
	{ title: 'Kenyan' },
	{ title: 'I-Kiribati' },
	{ title: 'North Korean' },
	{ title: 'South Korean' },
	{ title: 'Kuwaiti' },
	{ title: 'Kyrgyz' },
	{ title: 'Lao' },
	{ title: 'Latvian' },
	{ title: 'Lebanese' },
	{ title: 'Mosotho' },
	{ title: 'Liberian' },
	{ title: 'Libyan' },
	{ title: 'Liechtensteiner' },
	{ title: 'Lithuanian' },
	{ title: 'Luxembourger' },
	{ title: 'Macanese' },
	{ title: 'Macedonian' },
	{ title: 'Malagasy' },
	{ title: 'Malawian' },
	{ title: 'Malaysian' },
	{ title: 'Maldivian' },
	{ title: 'Malian' },
	{ title: 'Maltese' },
	{ title: 'Marshallese' },
	{ title: 'Martinican' },
	{ title: 'Mauritanian' },
	{ title: 'Mauritian' },
	{ title: 'Mahoran - Maorais' },
	{ title: 'Mexican' },
	{ title: 'Micronesian' },
	{ title: 'Moldovan' },
	{ title: 'Monégasque' },
	{ title: 'Mongolian' },
	{ title: 'Montenegrin' },
	{ title: 'Montserratian' },
	{ title: 'Moroccan' },
	{ title: 'Mozambican' },
	{ title: 'Burmese' },
	{ title: 'Namibian' },
	{ title: 'Nauruan' },
	{ title: 'Nepalese' },
	{ title: 'Dutch' },
	{ title: 'New Caledonian' },
	{ title: 'New Zealand' },
	{ title: 'Nicaraguan' },
	{ title: 'Nigerien' },
	{ title: 'Nigerian' },
	{ title: 'Niuean' },
	{ title: 'Northern Mariana Islander' },
	{ title: 'Norwegian' },
	{ title: 'Omani' },
	{ title: 'Pakistani' },
	{ title: 'Palauan' },
	{ title: 'Palestinian' },
	{ title: 'Panamanian' },
	{ title: 'Papua New Guinean' },
	{ title: 'Paraguayan' },
	{ title: 'Peruvian' },
	{ title: 'Philippine' },
	{ title: 'Pitcairn Islanders' },
	{ title: 'Polish' },
	{ title: 'Portuguese' },
	{ title: 'Puerto Rican' },
	{ title: 'Qatari' },
	{ title: 'Réunionese' },
	{ title: 'Romanian' },
	{ title: 'Russian' },
	{ title: 'Rwandan' },
	{ title: 'Barthélemois' },
	{ title: 'Kittitian - Nevisian' },
	{ title: 'Saint Lucian' },
	{ title: 'Saint-Martinois' },
	{ title: 'SaintPierrais-Miquelonnais-Pierrian' },
	{ title: 'Saint Vincentian or VincentianVincy (colloquial)' },
	{ title: 'Samoan' },
	{ title: 'Sammarinese' },
	{ title: 'Santomean' },
	{ title: 'Saudi' },
	{ title: 'Senegalese' },
	{ title: 'Serbian' },
	{ title: 'Seychellois - Seychelloise - Seselwa' },
	{ title: 'Sierra Leonean' },
	{ title: 'Singaporean' },
	{ title: 'Sint Maartener' },
	{ title: 'Slovak' },
	{ title: 'Slovene - Slovenian' },
	{ title: 'Solomon Islander' },
	{ title: 'Somalian' },
	{ title: 'South African' },
	{ title: 'South Georgian-South Sandwich Islander' },
	{ title: 'South Sudanese' },
	{ title: 'Spanish' },
	{ title: 'Sri Lankan' },
	{ title: 'Sudanese' },
	{ title: 'Surinamese' },
	{ title: 'Liswati' },
	{ title: 'Swedish' },
	{ title: 'Swiss' },
	{ title: 'Syrian' },
	{ title: 'Taiwanese' },
	{ title: 'Tajikistani' },
	{ title: 'Tanzanian' },
	{ title: 'Thai' },
	{ title: 'East Timorese -Timorese - Maubere' },
	{ title: 'Togolese' },
	{ title: 'Tokelauan' },
	{ title: 'Tongan' },
	{ title: 'Trinidadian - Tobagonian' },
	{ title: 'Tunisian' },
	{ title: 'Turkish' },
	{ title: 'Turkmenistani' },
	{ title: 'Turks and Caicos Islander' },
	{ title: 'Tuvaluan' },
	{ title: 'Ugandan' },
	{ title: 'Ukrainian' },
	{ title: 'Emirati' },
	{ title: 'British' },
	{ title: 'American' },
	{ title: 'American Islander' },
	{ title: 'Uruguayan' },
	{ title: 'Uzbekistani' },
	{ title: 'Vanuatuan' },
	{ title: 'Venezuelan' },
	{ title: 'Vietnamese' },
	{ title: 'British Virgin Islander' },
	{ title: 'American Virgin Islander' },
	{ title: 'Wallisian - Futunan' },
	{ title: 'Yemeni' },
	{ title: 'Zambian' },
	{ title: 'Zimbabwean' },
]

const permissions = [
    { actorTypeId: 1, actorId: 1, moduleId: 1,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 2,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 3,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 4,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 5,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 6,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 7,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 8,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 9,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 10, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 11, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 12, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 13, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 14, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 15, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 16, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 17, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 18, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 19, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 20, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 21, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 22, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 23, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 24, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 25, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 26, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 27, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 28, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 29, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 30, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 31, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 1, moduleId: 32, create: true, view: true, edit: true, delete: true, invite: true, approve: true },

    { actorTypeId: 1, actorId: 6, moduleId: 1,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 2,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 3,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 4,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 5,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 6,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 7,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 8,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 9,  create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 10, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 11, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 12, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 13, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 14, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 15, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 16, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 17, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 18, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 19, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 20, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 21, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 22, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 23, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 24, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 25, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 26, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 27, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 28, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 29, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 30, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 31, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
    { actorTypeId: 1, actorId: 6, moduleId: 32, create: true, view: true, edit: true, delete: true, invite: true, approve: true },
]

const sections = [
    { title: 'Academic Levels',			domain: 'basic' },
    { title: 'Application Results',		domain: 'basic' },
    { title: 'Cities',					domain: 'basic' },
    { title: 'Countries',		        domain: 'basic' },
    { title: 'Currencies',			    domain: 'basic' },
    { title: 'Days',					domain: 'basic' },
    { title: 'Domination Levels',		domain: 'basic' },
    { title: 'Driving Licenses',		domain: 'basic' },
    { title: 'Employment Types',		domain: 'basic' },
    { title: 'Genders',				    domain: 'basic' },
    { title: 'Industries',			    domain: 'basic' },
    { title: 'Language Certificates',	domain: 'basic' },
    { title: 'Language Levels',		    domain: 'basic' },
    { title: 'Languages',				domain: 'basic' },
    { title: 'Menus',					domain: 'basic' },
    { title: 'Modules',				    domain: 'basic' },
    { title: 'Nationalities',			domain: 'basic' },
    { title: 'Roles',				    domain: 'basic' },
    { title: 'Security Questions',	    domain: 'basic' },
    { title: 'Skills',				    domain: 'basic' },
    { title: 'Social Medias',			domain: 'basic' },
    { title: 'States',				    domain: 'basic' },
    { title: 'Themes',				    domain: 'basic' },
    { title: 'Timezones',				domain: 'basic' },
    { title: 'Toasts',				    domain: 'basic' },
    { title: 'Layout',				    domain: 'app'   },
    { title: 'Dashboard',				domain: 'app'   },
    { title: 'My Profile',			    domain: 'app'   },
    { title: 'Resume',				    domain: 'app'   },
    { title: 'User Profiles',			domain: 'app'   },
    { title: 'User Resumes',			domain: 'app'   },
    { title: 'Company Profile',		    domain: 'app'   },
    { title: 'Company Members',		    domain: 'app'   },
    { title: 'Company Projects',	    domain: 'app'   },
    { title: 'Company Timesheets',	    domain: 'app'   },
    { title: 'Company Invoices',        domain: 'app'   },
    { title: 'Company Roles',			domain: 'app'   },
    { title: 'Jobs Search',			    domain: 'app'   },
    { title: 'Jobs Manage',			    domain: 'app'   },
    { title: 'Jobs Applied',			domain: 'app'   },
    { title: 'Jobs Post',				domain: 'app'   },
    { title: 'Projects List',		    domain: 'app'   },
    { title: 'Blog List',		        domain: 'app'   },
    { title: 'Blog Article',		    domain: 'app'   },
    { title: 'Job Question Categories',	domain: 'basic' },
    { title: 'Job Status',				domain: 'basic' },
    { title: 'Time Periods',		    domain: 'basic' },
    { title: 'User Profile',		    domain: 'app'   },
    { title: 'Settings',			    domain: 'app'   },
    { title: 'Global Setting',			domain: 'app'   },
]

const labels = [
	{ title: 'Dashboard',																			sectionId: 29,	},
	{ title: 'My Profile',																			sectionId: 29,	},
	{ title: 'Profile',																				sectionId: 29,	},
	{ title: 'User Profiles',																		sectionId: 29,	},
	{ title: 'Resume',																				sectionId: 29,	},
	{ title: 'User Resumes',																		sectionId: 29,	},
	{ title: 'Company',																				sectionId: 29,	},
	{ title: 'Members',																				sectionId: 29,	},
	{ title: 'Company jobs',																		sectionId: 29,	},
	{ title: 'Projects',																			sectionId: 29,	},
	{ title: 'Timesheets',																			sectionId: 29,	},
	{ title: 'Invoices',																			sectionId: 29,	},
	{ title: 'Roles',																				sectionId: 29,	},
	{ title: 'Jobs',																				sectionId: 29,	},
	{ title: 'Manage Jobs',																			sectionId: 29,	},
	{ title: 'Search Jobs',																			sectionId: 29,	},
	{ title: 'Applied Jobs',																		sectionId: 29,	},
	{ title: 'Post a Job',																			sectionId: 29,	},
	{ title: 'Overview',																			sectionId: 29,	},
	{ title: 'Blog',																				sectionId: 29,	},
	{ title: 'Global Setting',																		sectionId: 29,	},
	{ title: 'Messages',																			sectionId: 29,	},
	{ title: 'Support',																				sectionId: 29,	},
	{ title: 'Logout',																				sectionId: 29,	},
	{ title: 'Invite Friends',																		sectionId: 29,	},
	{ title: 'List',																				sectionId: 29,	},
	{ title: 'Personal Infromation',																sectionId: 31,	},							
	{ title: 'Other Information',																	sectionId: 31,	},								
	{ title: 'Security and Login',																	sectionId: 31,	},							
	{ title: 'Cover Letter',																		sectionId: 31,	},									
	{ title: 'Edit Cover Letter',																	sectionId: 31,	},								
	{ title: 'Save',																				sectionId: 31,	},											
	{ title: 'Cancel',																				sectionId: 31,	},										
	{ title: 'Social Networks',																		sectionId: 31,	},								
	{ title: 'Edit Social link',																	sectionId: 31,	},								
	{ title: 'Gender',																				sectionId: 31,	},										
	{ title: 'First Name',																			sectionId: 31,	},									
	{ title: 'Last Name',																			sectionId: 31,	},										
	{ title: 'Email',																				sectionId: 31,	},											
	{ title: 'Phone',																				sectionId: 31,	},											
	{ title: 'Date of Birth',																		sectionId: 31,	},									
	{ title: 'Place Of Birth',																		sectionId: 31,	},								
	{ title: 'Street Address',																		sectionId: 31,	},								
	{ title: 'Job Title',																			sectionId: 31,	},										
	{ title: 'Nationality',																			sectionId: 31,	},									
	{ title: 'Academic Level',																		sectionId: 31,	},								
	{ title: 'Industry',																			sectionId: 31,	},										
	{ title: 'Salary Currency',																		sectionId: 31,	},								
	{ title: 'From',																				sectionId: 31,	},											
	{ title: 'To',																					sectionId: 31,	},											
	{ title: 'Driving License',																		sectionId: 31,	},								
	{ title: 'Website',																				sectionId: 31,	},										
	{ title: 'Old Password',																		sectionId: 31,	},									
	{ title: 'Two factor Authentication',															sectionId: 31,	},						
	{ title: 'Off',																					sectionId: 31,	},											
	{ title: 'On',																					sectionId: 31,	},											
	{ title: 'New Password',																		sectionId: 31,	},									
	{ title: 'Confirm New Password',																sectionId: 31,	},							
	{ title: 'Answer',																				sectionId: 31,	},										
	{ title: 'Question No 1',																		sectionId: 31,	},									
	{ title: 'Question No 2',																		sectionId: 31,	},									
	{ title: 'Question No 3',																		sectionId: 31,	},									
	{ title: 'Drag & drop or select a photo',														sectionId: 31,	},					
	{ title: 'Supported formats: JPEG & PNG',														sectionId: 31,	},					
	{ title: 'Choose Image',																		sectionId: 31,	},									
	{ title: 'Drag to reposition photo',															sectionId: 31,	},						
	{ title: 'Upload New',																			sectionId: 31,	},									
	{ title: 'Straighten',																			sectionId: 31,	},									
	{ title: 'Zoom',																				sectionId: 31,	},											
	{ title: 'Activate',																			sectionId: 31,	},										
	{ title: 'Scan the QR code with your Google Authenticator App',									sectionId: 31, 	},
	{ title: 'OR COPY THE SETUP KEY',																sectionId: 31,	},
	{ title: 'Enter code',																			sectionId: 31,	},
	{ title: 'Please type in the code displayed on your authenticator app from your device', 		sectionId: 31,	},
	{ title: 'Verify',																				sectionId: 31,	},										
	{ title: 'Social link',																			sectionId: 31,	},
	{ title: 'Add new',																				sectionId: 31,	},
	{ title: 'Education',																			sectionId: 32,	},
	{ title: 'Add More',																			sectionId: 32,	},
	{ title: 'Back Step',																			sectionId: 32,	},
	{ title: 'Next Step',																			sectionId: 32,	},
	{ title: 'Date From',																			sectionId: 32,	},
	{ title: 'Date To',																				sectionId: 32,	},
	{ title: 'Present',																				sectionId: 32,	},
	{ title: 'Degree',																				sectionId: 32,	},
	{ title: 'Major',																				sectionId: 32,	},
	{ title: 'Location',																			sectionId: 32,	},
	{ title: 'Experience',																			sectionId: 32,	},
	{ title: 'Title',																				sectionId: 32,	},
	{ title: 'City',																				sectionId: 32,	},
	{ title: 'Employment Type',																		sectionId: 32,	},
	{ title: 'Description',																			sectionId: 32,	},
	{ title: 'Skills',																				sectionId: 32,	},
	{ title: 'Level',																				sectionId: 32,	},
	{ title: 'Determine the percentage',															sectionId: 32,	},
	{ title: 'Languages',																			sectionId: 32,	},
	{ title: 'Language',																			sectionId: 32,	},
	{ title: 'Certificate',																			sectionId: 32,	},
	{ title: 'Expertise',																			sectionId: 32,	},
	{ title: 'Portfolio',																			sectionId: 32,	},
	{ title: 'Link',																				sectionId: 32,	},
	{ title: 'Video Link',																			sectionId: 32,	},
	{ title: 'Upload Image',																		sectionId: 32,	},
	{ title: 'Save',																				sectionId: 32,	},
	{ title: 'Extra-curricular Activities',															sectionId: 32,	},
	{ title: 'Courses',																				sectionId: 32,	},
	{ title: 'Internships',																			sectionId: 32,	},
	{ title: 'Employer',																			sectionId: 32,	},
	{ title: 'References',																			sectionId: 32,	},
	{ title: 'Referent`s Full Name',																sectionId: 32,	},
	{ title: 'Company',																				sectionId: 32,	},
	{ title: 'Phone',																				sectionId: 32,	},
	{ title: 'Email',																				sectionId: 32,	},
	{ title: 'Your Hobbies',																		sectionId: 32,	},
	{ title: 'Hobbies',																				sectionId: 32,	},
	{ title: 'Additional information',																sectionId: 32,	},
	{ title: 'Publications',																		sectionId: 32,	},
	{ title: 'Honors & Awards',																		sectionId: 32,	},
	{ title: 'Award Title',																			sectionId: 32,	},
	{ title: 'Date',																				sectionId: 32,	},
	{ title: 'Cancel',																				sectionId: 32,	},
	{ title: 'Institute',																			sectionId: 32,	},
	{ title: 'Update',																				sectionId: 32,	},
	{ title: 'Images',																				sectionId: 32,	},
	{ title: 'Unknown',																				sectionId: 32,	},
	{ title: 'User profiles',																		sectionId: 33,	},											
	{ title: 'Unknown',																				sectionId: 33,	},											
	{ title: 'View Profile',																		sectionId: 33,	},											
	{ title: 'Result Per Page',																		sectionId: 33,	},											
	{ title: 'of',																					sectionId: 33,	},											
	{ title: 'Applications',																		sectionId: 33,	},											
	{ title: 'Name',																				sectionId: 33,	},											
	{ title: 'LANGUAGE',																			sectionId: 33,	},											
	{ title: 'LOCATION',																			sectionId: 33,	},											
	{ title: 'APPLIED STATUS',																		sectionId: 33,	},											
	{ title: 'User profile',																		sectionId: 33,	},											
	{ title: 'Sort By',																				sectionId: 33,	},											
	{ title: 'Filters',																				sectionId: 33,	},											
	{ title: 'Search for users',																	sectionId: 33,	},											
	{ title: 'Approve',																				sectionId: 33,	},											
	{ title: 'Suspend',																				sectionId: 33,	},											
	{ title: 'Approved',																			sectionId: 33,	},											
	{ title: 'Disabled',																			sectionId: 33,	},											
	{ title: 'Suspended',																			sectionId: 33,	},											
	{ title: 'Viewed',																				sectionId: 33,	},
    { title: 'General',																				sectionId: 49,	},
	{ title: 'Notifications',																		sectionId: 49,	},
	{ title: 'Privacy',																				sectionId: 49,	},
	{ title: 'Account management',																	sectionId: 49,	},
	{ title: 'Time zone',																			sectionId: 49,	},
	{ title: 'Currency',																			sectionId: 49,	},
	{ title: 'Language',																			sectionId: 49,	},
	{ title: 'In dashboard',																		sectionId: 49,	},
	{ title: 'To email',																			sectionId: 49,	},
	{ title: 'Job Offers',																			sectionId: 49,	},
	{ title: 'Apply Job',																			sectionId: 49,	},
	{ title: 'Project Invitation',																	sectionId: 49,	},
	{ title: 'Applied Jobs Status',																	sectionId: 49,	},
	{ title: 'Field Of Study Ads',																	sectionId: 49,	},
	{ title: 'Resume View',																			sectionId: 49,	},
	{ title: 'Password Change',																		sectionId: 49,	},
	{ title: 'New Connection',																		sectionId: 49,	},
	{ title: 'Blog Content',																		sectionId: 49,	},
	{ title: 'Course Suggestions',																	sectionId: 49,	},
	{ title: 'Discounts',																			sectionId: 49,	},
	{ title: 'Show your resume to employers',														sectionId: 49,	},
	{ title: 'Public Profile',																		sectionId: 49,	},
	{ title: 'Your Sessions',																		sectionId: 49,	},
	{ title: 'Cancel',																				sectionId: 49,	},
	{ title: 'Save',																				sectionId: 49,	},
	{ title: 'Create New Company',																	sectionId: 49,	},
	{ title: 'Temporarily Deactivation',															sectionId: 49,	},
	{ title: 'Delete Account',																		sectionId: 49,	},
	{ title: 'Deactivate your account',																sectionId: 49,	},
	{ title: 'Deactivating your account means that no one will see your resume or profile.', 		sectionId: 49,	},
	{ title: 'You can reactivate your account anytime.',											sectionId: 49,	},
	{ title: 'If you want to use Enviretech again, just log in with',								sectionId: 49,	},
	{ title: 'Continue',																			sectionId: 49,	},
	{ title: 'Delete your account',																	sectionId: 49,	},
	{ title: 'Deleting your account means you won`t be able to get your resume or profile back.',	sectionId: 49,	},
	{ title: 'All your Enviretech account data will be deleted',									sectionId: 49,	},
	{ title: 'If you`re ready to leave forever, we`ll send you an email to you.',					sectionId: 49,	},
	{ title: 'Dashboard',																			sectionId: 49,	},
	{ title: 'Settings',																			sectionId: 49,	},	
	{ title: 'Unknown',																				sectionId: 49,	},											
	{ title: 'Filters',																				sectionId: 49,	},											
	{ title: 'Add new Member',																		sectionId: 49,	},											
	{ title: 'Applications',																		sectionId: 49,	},											
	{ title: 'Global Setting',																		sectionId: 49,	},											
	{ title: 'Roles',																				sectionId: 49,	},											
	{ title: 'Members',																				sectionId: 49,	},											
	{ title: 'Search For users',																	sectionId: 49,	},											
	{ title: 'Approved',																			sectionId: 49,	},											
	{ title: 'Disabled',																			sectionId: 49,	},											
	{ title: 'Suspended',																			sectionId: 49,	},											
	{ title: 'Viewed',																				sectionId: 49,	},																					
	{ title: 'Suspend',																				sectionId: 49,	},											
	{ title: 'Approve',																				sectionId: 49,	},											
	{ title: 'Search for User...',																	sectionId: 49,	},											
	{ title: 'View profile',																		sectionId: 49,	},											
	{ title: 'Name',																				sectionId: 49,	},											
	{ title: 'Language',																			sectionId: 49,	},											
	{ title: 'Location',																			sectionId: 49,	},											
	{ title: 'Applied status',																		sectionId: 49,	},											
	{ title: 'Add',																					sectionId: 49,	},											
	{ title: 'Save',																				sectionId: 49,	},											
	{ title: 'Cancel',																				sectionId: 49,	},											
	{ title: 'Results per page',																	sectionId: 49,	},											
	{ title: 'of',																					sectionId: 49,	},		
	{ title: 'User Profile',																		sectionId: 50,	},											
	{ title: 'Personal Infromation',																sectionId: 50,	},											
	{ title: 'Other Information',																	sectionId: 50,	},											
	{ title: 'Security and Login',																	sectionId: 50,	},											
	{ title: 'Resume',																				sectionId: 50,	},											
	{ title: 'Applied Jobs',																		sectionId: 50,	},											
	{ title: 'Access',																				sectionId: 50,	},											
	{ title: 'Gender',																				sectionId: 50,	},											
	{ title: 'First Name',																			sectionId: 50,	},											
	{ title: 'Last Name',																			sectionId: 50,	},											
	{ title: 'Email',																				sectionId: 50,	},											
	{ title: 'Phone',																				sectionId: 50,	},											
	{ title: 'Date of Birth',																		sectionId: 50,	},											
	{ title: 'Place Of Birth',																		sectionId: 50,	},											
	{ title: 'Street Address',																		sectionId: 50,	},											
	{ title: 'Verify',																				sectionId: 50,	},											
	{ title: 'Job Title',																			sectionId: 50,	},											
	{ title: 'Nationality',																			sectionId: 50,	},											
	{ title: 'Academic Level',																		sectionId: 50,	},											
	{ title: 'Industry',																			sectionId: 50,	},											
	{ title: 'Salary Currency',																		sectionId: 50,	},											
	{ title: 'From',																				sectionId: 50,	},											
	{ title: 'To',																					sectionId: 50,	},											
	{ title: 'Driving License',																		sectionId: 50,	},											
	{ title: 'Website',																				sectionId: 50,	},											
	{ title: 'Cancel',																				sectionId: 50,	},											
	{ title: 'Save',																				sectionId: 50,	},											
	{ title: 'Old Password',																		sectionId: 50,	},											
	{ title: 'New Password',																		sectionId: 50,	},											
	{ title: 'Confirm New Password',																sectionId: 50,	},											
	{ title: 'Question No 1',																		sectionId: 50,	},											
	{ title: 'Question No 2',																		sectionId: 50,	},											
	{ title: 'Question No 3',																		sectionId: 50,	},											
	{ title: 'Answer',																				sectionId: 50,	},											
	{ title: 'Add/Invite',																			sectionId: 50,	},											
	{ title: 'Create',																				sectionId: 50,	},											
	{ title: 'View',																				sectionId: 50,	},											
	{ title: 'Edit',																				sectionId: 50,	},											
	{ title: 'Delete',																				sectionId: 50,	},											
	{ title: 'Approve',																				sectionId: 50,	},											
	{ title: 'Global Setting',																		sectionId: 50,	},											
	{ title: 'Create New Role',																		sectionId: 50,	},											
	{ title: 'Roles',																				sectionId: 50,	},											
	{ title: 'Social Media',																		sectionId: 50,	},											
	{ title: 'Percentage',																			sectionId: 50,	},											
	{ title: 'Translation',																			sectionId: 50,	},											
	{ title: 'Basic Info',																			sectionId: 50,	},											
	{ title: 'Role name',																			sectionId: 50,	},											
	{ title: 'Members',																				sectionId: 50,	},											
	{ title: 'What are the features of the',														sectionId: 50,	},											
	{ title: 'Role in Sidebar',																		sectionId: 50,	},											
	{ title: 'Cancel',																				sectionId: 50,	},											
	{ title: 'Dashboard',																			sectionId: 50,	},											
	{ title: 'Profile',																				sectionId: 50,	},											
	{ title: 'Companies',																			sectionId: 50,	},											
	{ title: 'Jobs',																				sectionId: 50,	},											
	{ title: 'Blog',																				sectionId: 50,	},											
	{ title: 'Settings',																			sectionId: 50,	},											
	{ title: 'Messages',																			sectionId: 50,	},											
	{ title: 'Support',																				sectionId: 50,	},											
	{ title: 'Access',																				sectionId: 50,	},											
	{ title: 'Add/invite',																			sectionId: 50,	},											
	{ title: 'Create',																				sectionId: 50,	},											
	{ title: 'View',																				sectionId: 50,	},											
	{ title: 'Edit',																				sectionId: 50,	},											
	{ title: 'Delete',																				sectionId: 50,	},											
	{ title: 'Approve',																				sectionId: 50,	},											
	{ title: 'Translate',																			sectionId: 50,	},											
	{ title: 'Translate to',																		sectionId: 50,	},											
	{ title: 'Section',																				sectionId: 50,	},											
	{ title: 'Save',																				sectionId: 50,	},											
	{ title: 'Genders',																				sectionId: 50,	},											
	{ title: 'Academic Levels',																		sectionId: 50,	},											
	{ title: 'Language Level',																		sectionId: 50,	},											
	{ title: 'Industry',																			sectionId: 50,	},											
	{ title: 'Languages',																			sectionId: 50,	},											
	{ title: 'Employment Types',																	sectionId: 50,	},											
	{ title: 'Country',																				sectionId: 50,	},											
	{ title: 'Category',																			sectionId: 50,	},											
	{ title: 'Draft',																				sectionId: 50,	},											
	{ title: 'Security Questions',																	sectionId: 50,	},											
	{ title: 'Domination Levels',																	sectionId: 50,	},											
	{ title: 'Language Certificates',																sectionId: 50,	},											
	{ title: 'Nationalities',																		sectionId: 50,	},											
	{ title: 'Driving Licenses',																	sectionId: 50,	},											
	{ title: 'Time Zone',																			sectionId: 50,	},											
	{ title: 'Currency',																			sectionId: 50,	},											
	{ title: 'Profile percentage',																	sectionId: 50,	},											
	{ title: 'Yes',																					sectionId: 50,	},											
	{ title: 'No',																					sectionId: 50,	},											
	{ title: 'Are you sure to delete this role?',													sectionId: 50,	},											
	{ title: 'Active',																				sectionId: 50,	},											
	{ title: 'Add new Social',																		sectionId: 50,	},											
	{ title: 'Add new Social link',																	sectionId: 50,	},											
	{ title: 'Upload Icon',																			sectionId: 50,	},											
	{ title: 'Lable',																				sectionId: 50,	},											
	{ title: 'Link',																				sectionId: 50,	},											
	{ title: 'Update',																				sectionId: 50,	},											
	{ title: 'Social lable',																		sectionId: 50,	},											
	{ title: 'Social link',																			sectionId: 50,	},											
	{ title: 'Are you sure to delete this social?',													sectionId: 50,	},											
	{ title: 'My Profile',																			sectionId: 50,	},											
	{ title: 'Personal Infromation',																sectionId: 50,	},											
	{ title: 'First Name',																			sectionId: 50,	},											
	{ title: 'Last Name',																			sectionId: 50,	},											
	{ title: 'Email',																				sectionId: 50,	},											
	{ title: 'Phone',																				sectionId: 50,	},											
	{ title: 'Profile image',																		sectionId: 50,	},											
	{ title: 'Date of Birth',																		sectionId: 50,	},											
	{ title: 'Country of Residence',																sectionId: 50,	},											
	{ title: 'Street Address',																		sectionId: 50,	},											
	{ title: 'Other Information',																	sectionId: 50,	},											
	{ title: 'Job Title',																			sectionId: 50,	},											
	{ title: 'Nationality',																			sectionId: 50,	},											
	{ title: 'Academic Level',																		sectionId: 50,	},											
	{ title: 'Salary Currency',																		sectionId: 50,	},											
	{ title: 'Resume',																				sectionId: 50,	},											
	{ title: 'About me',																			sectionId: 50,	},											
	{ title: 'Education',																			sectionId: 50,	},											
	{ title: 'Experience',																			sectionId: 50,	},											
	{ title: 'Skills',																				sectionId: 50,	},											
	{ title: 'Expertise',																			sectionId: 50,	},											
	{ title: 'Portfolio',																			sectionId: 50,	},											
	{ title: 'Extra-curricular Activities',															sectionId: 50,	},											
	{ title: 'Courses',																				sectionId: 50,	},											
	{ title: 'Internships',																			sectionId: 50,	},											
	{ title: 'References',																			sectionId: 50,	},											
	{ title: 'Hobbies',																				sectionId: 50,	},											
	{ title: 'Publications',																		sectionId: 50,	},											
	{ title: 'Honors & Awards',																		sectionId: 50,	},											
	{ title: 'Additional information',																sectionId: 50,	},											
	{ title: 'Personal information',																sectionId: 50,	},											
	{ title: 'Add new Country',																		sectionId: 50,	},											
	{ title: 'Upload Flag',																			sectionId: 50,	},											
	{ title: 'Name',																				sectionId: 50,	},											
	{ title: 'Code',																				sectionId: 50,	},											
	{ title: 'Prefix',																				sectionId: 50,	},											
	{ title: 'Add new Currency',																	sectionId: 50,	},											
	{ title: 'Symbol',																				sectionId: 50,	},									
]

const securityQuestions = [
    { title: 'What is your fathers name?' },
    { title: 'What is your pets name?' },
    { title: 'What was your your first school name?' },
    { title: 'What is your best friends name?' },
    { title: 'What is your first teach name?' },
]

const skills = [
    { title: 'APX' },
    { title: 'Arabic' },
    { title: 'Egyptian Arabic' },
    { title: 'Arab-Israeli Conflict' },
    { title: 'Aramaic' },
    { title: 'Araxis Merge' },
    { title: 'Arbitration' },
    { title: 'International Arbitration' },
    { title: 'Arbitrage' },
    { title: 'Arboriculture' },
    { title: 'Certified Arborist' },
    { title: 'Arbortext' },
    { title: 'Statistical Arbitrage' },
    { title: 'Volatility Arbitrage' },
    { title: 'Grievance Arbitrations' },
    { title: 'Arbortext Epic Editor' },
    { title: 'Arbor' },
    { title: 'Risk Arbitrage' },
    { title: 'Kenan Arbor' },
    { title: 'Index Arbitrage' },
    { title: 'Convertible Arbitrage' },
    { title: 'Arbitron' },
    { title: 'ARC' },
    { title: 'Architecture' },
    { title: 'Enterprise Architecture' },
    { title: 'Solution Architecture' },
    { title: 'Architectural Design' },
    { title: 'ArcGIS' },
    { title: 'System Architecture' },
    { title: 'AutoCAD Architecture' },
    { title: 'Information Architecture' },
    { title: 'Interior Architecture' },
    { title: 'Architectural Drawings' },
    { title: 'Network Architecture' },
    { title: 'Brand Architecture' },
    { title: 'Hardware Architecture' },
    { title: 'ArchiCAD' },
    { title: 'Landscape Architecture' },
    { title: 'Archives' },
    { title: 'Server Architecture' },
    { title: 'Arc Welding' },
    { title: 'Sustainable Architecture' },
    { title: 'Arduino' },
    { title: 'ARDMS' },
    { title: 'Ardome' },
    { title: 'Therapeutic Areas' },
    { title: 'Arena Simulation Software' },
    { title: 'Hazardous Areas' },
    { title: 'Area Rugs' },
    { title: 'Reception Areas' },
    { title: 'Protected Areas' },
    { title: 'Area Rug Cleaning' },
    { title: 'ARES' },
    { title: 'Marine Protected Areas' },
    { title: 'Outdoor Living Areas' },
    { title: 'Arenas' },
    { title: 'Area Classification' },
    { title: 'Multiple Therapeutic Areas' },
    { title: 'Area Studies' },
    { title: 'Conservation Areas' },
    { title: 'Therapeutic Area' },
    { title: 'ARFF' },
    { title: 'Argus Modeling' },
    { title: 'Argumentation' },
    { title: 'Oral Arguments' },
    { title: 'Argentine Tango' },
    { title: 'Argus Safety' },
    { title: 'ArgoUML' },
    { title: 'Arguments' },
    { title: 'Argo' },
    { title: 'Ariba' },
    { title: 'ARIS' },
    { title: 'ARINC 429' },
    { title: 'Aries' },
    { title: 'ARIA' },
    { title: 'ARISg' },
    { title: 'Arithmetic' },
    { title: 'Arista' },
    { title: 'ARIMA' },
    { title: 'Computer Arithmetic' },
    { title: 'Arianna' },
    { title: 'ARINC 653' },
    { title: 'WAI-ARIA' },
    { title: 'ARM' },
    { title: 'Army' },
    { title: 'C-arm' },
    { title: 'ARM Cortex-M' },
    { title: 'Small Arms' },
    { title: 'Faro Arm' },
    { title: 'Glock Armorer' },
    { title: 'Arms Control' },
    { title: 'Small Arms Instruction' },
    { title: 'Armenian' },
    { title: 'ARM Assembly' },
    { title: 'Law of Armed Conflict' },
    { title: 'Armor' },
    { title: 'ARMA' },
    { title: 'Aromatherapy' },
    { title: 'Turn Around Management' },
    { title: 'Business Turn-arounds' },
    { title: 'Turn-around Situations' },
    { title: 'Aromatics' },
    { title: 'Company Turn Around' },
    { title: 'Corporate turn-around' },
    { title: 'Project Turn-around' },
    { title: 'ARP' },
    { title: 'ARPA' },
    { title: 'Travel Arrangements' },
    { title: 'Arranging' },
    { title: 'ARRT' },
    { title: 'Flower Arrangements' },
    { title: 'Disk Arrays' },
    { title: 'Arri Alexa' },
    { title: 'Phased Array' },
    { title: 'String Arrangements' },
    { title: 'Company Voluntary Arrangements' },
    { title: 'Voluntary Arrangements' },
    { title: 'Arri' },
    { title: 'ARRA' },
    { title: 'Arriflex' },
    { title: 'Shareholder Arrangements' },
    { title: 'Array Processing' },
    { title: 'Schemes Of Arrangement' },
    { title: 'Microphone Arrays' },
    { title: 'Array Formulas' },
    { title: 'Arson' },
    { title: 'Arsenic' },
    { title: 'Art' },
    { title: 'Art Direction' },
    { title: 'Fine Art' },
    { title: 'Contemporary Art' },
    { title: 'Visual Arts' },
    { title: 'Art History' },
    { title: 'Performing Arts' },
    { title: 'Art Education' },
    { title: 'Fine Art Photography' },
    { title: 'Feature Articles' },
    { title: 'Art Exhibitions' },
    { title: 'Makeup Artistry' },
    { title: 'Arts Administration' },
    { title: 'Artificial Intelligence' },
    { title: 'Public Art' },
    { title: 'Language Arts' },
    { title: 'Figurative Art' },
    { title: 'Studio Art' },
    { title: 'Digital Art' },
    { title: 'Modern Art' },
    { title: 'Aruba Wireless' },
    { title: 'hotojournalism' },
    { title: 'Wedding Planning' },
    { title: 'Wedding Videos' },
    { title: 'Weebly' },
    { title: 'Weed Control' },
    { title: 'WEEE' },
    { title: 'Weibull Analysis' },
    { title: 'Weighting' },
    { title: 'Weightlifting' },
    { title: 'Weight Gain' },
    { title: 'Weight Loss Coaching' },
    { title: 'Weight Management' },
    { title: 'Weight Training' },
    { title: 'Weka' },
    { title: 'Welding' },
    { title: 'Welding Inspection' },
    { title: 'Wellbeing' },
    { title: 'Wellness' },
    { title: 'Wellness Coaching' },
    { title: 'Well Control' },
    { title: 'Well Intervention' },
    { title: 'Well Logging' },
    { title: 'Well Stimulation' },
    { title: 'Well Testing' },
    { title: 'WEP' },
    { title: 'WERS' },
    { title: 'WESB' },
    { title: 'Western analysis' },
    { title: 'Western Blotting' },
    { title: 'Western Cuisine' },
    { title: 'Western Europe' },
    { title: 'Westlaw' },
    { title: 'West Africa' },
    { title: 'West Coast Swing' },
    { title: 'Wetlands' },
    { title: 'Wetland Restoration' },
    { title: 'Wetland Science' },
    { title: 'Wet Chemical Etching' },
    { title: 'Wet Chemistry' },
    { title: 'Wet Lab' },
    { title: 'WFA' },
    { title: 'WFC' },
    { title: 'WFL' },
    { title: 'WFO' },
    { title: 'WFS' },
    { title: 'WGA' },
    { title: 'What-if Analysis' },
    { title: 'WhatsUp' },
    { title: 'Wheat' },
    { title: 'Wheelchairs' },
    { title: 'Wheels' },
    { title: 'Wheel Throwing' },
    { title: 'Wherescape Red' },
    { title: 'WHIMS' },
    { title: 'Whiplash' },
    { title: 'Whisky' },
    { title: 'Whistleblower' },
    { title: 'Whistling' },
    { title: 'Whiteboarding' },
    { title: 'Whitewater Kayaking' },
    { title: 'White Belt' },
    { title: 'White Box' },
    { title: 'White Box Testing' },
    { title: 'White Collar Criminal Defense' },
    { title: 'White Glove' },
    { title: 'White Goods' },
    { title: 'White Hat' },
    { title: 'White Label' },
    { title: 'White Papers' },
    { title: 'Whittle' },
    { title: 'WHMCS' },
    { title: 'WHMIS' },
    { title: 'Wholesale' },
    { title: 'Wholesale Banking' },
    { title: 'Wholesale Lending' },
    { title: 'Wholesale Operations' },
    { title: 'Wholesale Purchasing' },
    { title: 'Wholesale Real Estate' },
    { title: 'Whole Brain Thinking' },
    { title: 'Whole Foods' },
    { title: 'Whole House Audio' },
    { title: 'Whole House Renovations' },
    { title: 'Whole Life' },
    { title: 'Whole Life Costing' },
    { title: 'WIA' },
    { title: 'WIC' },
    { title: 'Wicket' },
    { title: 'Wicklander-Zulawski Interview &amp; Interrogation' },
    { title: 'Wideband' },
    { title: 'Widening Participation' },
    { title: 'Wide Format Printing' },
    { title: 'Wide Orbit' },
    { title: 'Widgets' },
    { title: 'Widows' },
    { title: 'WIF' },
    { title: 'WiFi' },
    { title: 'Wigs' },
    { title: 'Wig Making' },
    { title: 'Wii' },
    { title: 'Wikimedia' },
    { title: 'Wikipedia' },
    { title: 'Wikis' },
    { title: 'Wikispaces' },
    { title: 'Wiki Development' },
    { title: 'Wiki Markup' },
    { title: 'Wilderness' },
    { title: 'Wilderness EMT' },
    { title: 'Wilderness First Aid' },
    { title: 'Wilderness First Aid Certified' },
    { title: 'Wilderness First Responder' },
    { title: 'Wilderness Medicine' },
    { title: 'Wildfire' },
    { title: 'Wildland Fire' },
    { title: 'Wildland Firefighting' },
    { title: 'Wildlife' },
    { title: 'Wildlife Art' },
    { title: 'Wildlife Biology' },
    { title: 'Wildlife Conservation' },
    { title: 'Wildlife Management' },
    { title: 'Wildlife Photography' },
    { title: 'Wildlife Rehabilitation' },
    { title: 'Wills' },
    { title: 'Wily Introscope' },
    { title: 'WiMAX' },
    { title: 'Wimba' },
    { title: 'Win32 API' },
    { title: 'Wind' },
    { title: 'Windows' },
    { title: 'Windows 7' },
    { title: 'Windows 7 Migration' },
    { title: 'Windows 8' },
    { title: 'Windows Azure' },
    { title: 'Windows Batch' },
    { title: 'Windows Domain' },
    { title: 'Windows Embedded' },
    { title: 'Windows kernel programming' },
    { title: 'Windows Live Movie Maker' },
    { title: 'Windows Media Encoder' },
    { title: 'Windows Mobile' },
    { title: 'Windows Movie Maker' },
    { title: 'Windows Phone' },
    { title: 'Windows Server' },
    { title: 'Windows Sharepoint Services' },
    { title: 'Windows Vista' },
    { title: 'Windows XP' },
    { title: 'Window Cleaning' },
    { title: 'Window Coverings' },
    { title: 'Window Displays' },
    { title: 'Window Dressing' },
    { title: 'Window Treatments' },
    { title: 'Wind Energy' },
    { title: 'Wind Mitigation' },
    { title: 'Wind Tunnel' },
    { title: 'Wind Tunnel Testing' },
    { title: 'Wind Turbines' },
    { title: 'Wine' },
    { title: 'Winemaking' },
    { title: 'Wineries' },
    { title: 'Wine &amp; Spirits Industry' },
    { title: 'Wine Cellars' },
    { title: 'Wine Lists' },
    { title: 'Wine Tasting' },
    { title: 'Wine Tours' },
    { title: 'WinForms' },
    { title: 'Wing Chun' },
    { title: 'Winning Others Over' },
    { title: 'Win-win' },
    { title: 'Win CVS' },
    { title: 'WIP' },
    { title: 'WIPO' },
    { title: 'WIPS' },
    { title: 'Wireframes' },
    { title: 'Wireless' },
    { title: 'Wireless Access' },
    { title: 'Wireless Broadband' },
    { title: 'Wireless Communications Systems' },
    { title: 'Wireless Mesh' },
    { title: 'Wireless Networking' },
    { title: 'Wireless Routers' },
    { title: 'Wireless Security' },
    { title: 'Wireless Sensor Networks' },
    { title: 'Wireless USB' },
    { title: 'Wireline' },
    { title: 'Wireshark' },
    { title: 'Wire Bonding' },
    { title: 'Wire EDM' },
    { title: 'Wire Framing' },
    { title: 'Wire Line' },
    { title: 'Wire Transfers' },
    { title: 'Wire Wrapping' },
    { title: 'Wiring' },
    { title: 'Wiring Diagrams' },
    { title: 'Wisdom Teeth' },
    { title: 'Wise Installer' },
    { title: 'Wise Packaging' },
    { title: 'Wise Packaging Studio' },
    { title: 'WISP' },
    { title: 'Wit' },
    { title: 'Witchcraft' },
    { title: 'Withdrawals' },
    { title: 'Withholding' },
    { title: 'Witness Location' },
    { title: 'Witness Statements' },
    { title: 'WiX' },
    { title: 'Wizard' },
    { title: 'WLAN' },
    { title: 'WLI' },
    { title: 'WLL' },
    { title: 'WLM' },
    { title: 'WLR3' },
    { title: 'WLST' },
    { title: 'WMI' },
    { title: 'WML' },
    { title: 'WMOS' },
    { title: 'WMS Implementations' },
    { title: 'WOA' },
    { title: 'Wolf' },
    { title: 'Wolof' },
    { title: 'Wombat' },
    { title: 'Women&#39;s Health' },
    { title: 'Women&#39;s Issues' },
    { title: 'Women&#39;s Leadership' },
    { title: 'Women&#39;s Ministry' },
    { title: 'Women&#39;s Rights' },
    { title: 'Women&#39;s Studies' },
    { title: 'Women Leaders' },
    { title: 'Women Owned Business' },
    { title: 'Wonderware' },
    { title: 'Wood' },
    { title: 'Woodcut' },
    { title: 'Woodland Management' },
    { title: 'Woodwind' },
    { title: 'Woodworking' },
    { title: 'Wood Carving' },
    { title: 'Wood Graining' },
    { title: 'Wood Shop' },
    { title: 'Wood Turning' },
    { title: 'Wool' },
    { title: 'WordPerfect' },
    { title: 'WordPress' },
    { title: 'Word Of Mouth' },
    { title: 'Word Of Mouth Marketing' },
    { title: 'Workers&#39; Compensation Claims' },
    { title: 'Workers Compensation' },
    { title: 'Workforce Development' },
    { title: 'Workforce Management' },
    { title: 'Workforce Planning' },
    { title: 'Working Abroad' },
    { title: 'Working at Height' },
    { title: 'Working Capital Management' },
    { title: 'Working With Children' },
    { title: 'Working With Clients' },
    { title: 'Workplace Giving' },
    { title: 'Workplace Safety' },
    { title: 'Workplace Violence' },
    { title: 'Workshops' },
    { title: 'Workshop Facilitation' },
    { title: 'Work at Height' },
    { title: 'Work Effectively' },
    { title: 'Work in Unison with Staff' },
    { title: 'Work Life Balance' },
    { title: 'Work Orders' },
    { title: 'Work Under Minimal Supervision' },
    { title: 'Work Very Well with Others' },
    { title: 'World Cafe' },
    { title: 'World Cinema' },
    { title: 'World History' },
    { title: 'WOTC' },
    { title: 'Wound Care' },
    { title: 'Wovens' },
    { title: 'Wowza' },
    { title: 'WPA' },
    { title: 'WPC' },
    { title: 'WPF' },
    { title: 'WPF Development' },
    { title: 'WPS' },
    { title: 'WRAP' },
    { title: 'Wraparound' },
    { title: 'Wrapping' },
    { title: 'Wraps' },
    { title: 'Wrap Accounts' },
    { title: 'WRDS' },
    { title: 'Wrestling' },
    { title: 'Wrestling Coaching' },
    { title: 'WRF' },
    { title: 'Write-ups' },
    { title: 'Writing' },
    { title: 'Wrongful Death' },
    { title: 'WRT' },
    { title: 'WSAD' },
    { title: 'WSDL' },
    { title: 'WSE' },
    { title: 'WSGI' },
    { title: 'WSH' },
    { title: 'WSIB' },
    { title: 'WSIB Claims Management' },
    { title: 'WSPG' },
    { title: 'WSRR' },
    { title: 'WSS 2.0' },
    { title: 'WSUS' },
    { title: 'WTL' },
    { title: 'WTO' },
    { title: 'WTP' },
    { title: 'WTT' },
    { title: 'WTX' },
    { title: 'WUFI' },
    { title: 'Wufoo' },
    { title: 'WWAN' },
    { title: 'WWII' },
    { title: 'Wwise' },
    { title: 'Www' },
    { title: 'wxWidgets' },
    { title: 'Wyse' },
    { title: 'WYSIWYG Layout Tools' },
    { title: 'XaaS' },
    { title: 'XACML' },
    { title: 'XACT' },
    { title: 'Xactimate' },
    { title: 'Xactly' },
    { title: 'Xactly Incent' },
    { title: 'Xajax' },
    { title: 'Xalan' },
    { title: 'XAML' },
    { title: 'XAMPP' },
    { title: 'Xara' },
    { title: 'XATA' },
    { title: 'XAUI' },
    { title: 'xBase' },
    { title: 'Xbox' },
    { title: 'Xbox 360' },
    { title: 'Xbox One' },
    { title: 'XBR' },
    { title: 'XBRL' },
    { title: 'XCAL' },
    { title: 'Xcalibur' },
    { title: 'XCAP' },
    { title: 'Xcart' },
    { title: 'xCAT' },
    { title: 'Xcode' },
    { title: 'XCOM' },
    { title: 'xCP' },
    { title: 'XDCAM' },
    { title: 'Xdebug' },
    { title: 'XDoclet' },
    { title: 'Xen' },
    { title: 'XenClient' },
    { title: 'Xenix' },
    { title: 'Xenu' },
    { title: 'Xerces' },
    { title: 'Xeriscaping' },
    { title: 'Xero' },
    { title: 'Xerox Printers' },
    { title: 'Xetra' },
    { title: 'XFire' },
    { title: 'XFOIL' },
    { title: 'XForms' },
    { title: 'XFP' },
    { title: 'XFS' },
    { title: 'XHTML' },
    { title: 'Xilinx' },
    { title: 'Xilinx ISE' },
    { title: 'Xinet' },
    { title: 'Xing' },
    { title: 'XLMiner' },
    { title: 'XLSTAT' },
    { title: 'XMetal' },
    { title: 'XMind' },
    { title: 'XML' },
    { title: 'XMLBeans' },
    { title: 'XMLHTTP' },
    { title: 'XML-RPC' },
    { title: 'XML Databases' },
    { title: 'XML Gateway' },
    { title: 'XML Programming' },
    { title: 'XML Publisher' },
    { title: 'XML Schema' },
    { title: 'XML Schema Design' },
    { title: 'XML Scripting' },
    { title: 'XML Sitemaps' },
    { title: 'XML Spy' },
    { title: 'XML Standards' },
    { title: 'XMPie' },
    { title: 'XMPP' },
    { title: 'XNA' },
    { title: 'XOG' },
    { title: 'Xoops' },
    { title: 'XPAC' },
    { title: 'XPages' },
    { title: 'XPath' },
    { title: 'xPC Target' },
    { title: 'XPDL' },
    { title: 'Xpediter' },
    { title: 'Xplan' },
    { title: 'XPlanner' },
    { title: 'xPON' },
    { title: 'Xpress' },
    { title: 'xPression' },
    { title: 'XPS' },
    { title: 'X-ray' },
    { title: 'X-ray Absorption Spectroscopy' },
    { title: 'X-ray crystallography' },
    { title: 'X-ray Diffraction Analysis' },
    { title: 'X-ray diffractometry' },
    { title: 'X-ray Microanalysis' },
    { title: 'X-ray Spectroscopy' },
    { title: 'XRF' },
    { title: 'XRR' },
    { title: 'XRY' },
    { title: 'Xsan' },
    { title: 'XSD' },
    { title: 'xSeries' },
    { title: 'Xserve' },
    { title: 'XSI' },
    { title: 'Xsigo' },
    { title: 'XSL' },
    { title: 'XSL-FO' },
    { title: 'XSLT' },
    { title: 'XSS' },
    { title: 'XStream' },
    { title: 'XTRAC' },
    { title: 'XTRACT' },
    { title: 'XUL' },
    { title: 'xUnit' },
    { title: 'X-Ways' },
    { title: 'Xytech' },
    { title: 'Yacc' },
    { title: 'Yachting' },
    { title: 'Yacht Charters' },
    { title: 'Yacht Clubs' },
    { title: 'Yacht Deliveries' },
    { title: 'Yacht Racing' },
    { title: 'Yahoo Search' },
    { title: 'Yahoo Search Marketing' },
    { title: 'Yahoo Site Explorer' },
    { title: 'Yamaha Digital Consoles' },
    { title: 'Yamaha M7CL' },
    { title: 'Yamaha PM5D' },
    { title: 'YAML' },
    { title: 'Yammer' },
    { title: 'Yantra' },
    { title: 'Yardi' },
    { title: 'Yardi Enterprise' },
    { title: 'Yardi Property Management' },
    { title: 'Yardi Voyager' },
    { title: 'Yard Management' },
    { title: 'Yard Signs' },
    { title: 'Yard Work' },
    { title: 'Yarn' },
    { title: 'Yaskawa' },
    { title: 'Yearbook' },
    { title: 'Year-end Close' },
    { title: 'Year End Accounts' },
    { title: 'Yeast' },
    { title: 'Yeast two-hybrid' },
    { title: 'Yellow Belt' },
    { title: 'Yellow Book' },
    { title: 'Yellow Pages' },
    { title: 'Yelp' },
    { title: 'Yiddish' },
    { title: 'Yield' },
    { title: 'Yields' },
    { title: 'Yield Management' },
    { title: 'Yii' },
    { title: 'Yin Yoga' },
    { title: 'YMS' },
    { title: 'Yodeling' },
    { title: 'Yoga' },
    { title: 'Yoga Instruction' },
    { title: 'Yoga Nidra' },
    { title: 'Yogurt' },
    { title: 'Yoruba' },
    { title: 'Young Adults' },
    { title: 'Young Adult Literature' },
    { title: 'Young Adult Services' },
    { title: 'Young People' },
    { title: 'Youth At Risk' },
    { title: 'Youth Culture' },
    { title: 'Youth Development' },
    { title: 'Youth Empowerment' },
    { title: 'Youth Engagement' },
    { title: 'Youth Entrepreneurship' },
    { title: 'Youth Justice' },
    { title: 'Youth Leadership' },
    { title: 'Youth Leadership Training' },
    { title: 'Youth Marketing' },
    { title: 'Youth Mentoring' },
    { title: 'Youth Ministry' },
    { title: 'Youth Outreach' },
    { title: 'Youth Programs' },
    { title: 'Youth Work' },
    { title: 'YouTube' },
    { title: 'YouTube API' },
    { title: 'YSlow' },
    { title: 'YUI' },
    { title: 'YUM' },
    { title: 'Zabbix' },
    { title: 'Zachman' },
    { title: 'Zainet' },
    { title: 'ZBrush' },
    { title: 'Zebra' },
    { title: 'Zebrafish' },
    { title: 'Zedo' },
    { title: 'Zeiss' },
    { title: 'Zemax' },
    { title: 'Zen' },
    { title: 'ZenCart' },
    { title: 'Zend' },
    { title: 'Zendesk' },
    { title: 'Zend Certified Engineer' },
    { title: 'Zend Framework' },
    { title: 'Zend Server' },
    { title: 'Zend Studio' },
    { title: 'Zenoss' },
    { title: 'Zenworks' },
    { title: 'Zen Shiatsu' },
    { title: 'Zeolites' },
    { title: 'Zephyr' },
    { title: 'Zephyr Style Advisor' },
    { title: 'Zero-based Budgeting' },
    { title: 'ZeroMQ' },
    { title: 'Zero Balancing' },
    { title: 'Zero Defects' },
    { title: 'Zero Waste' },
    { title: 'Zeta Potential' },
    { title: 'Zeus' },
    { title: 'ZFS' },
    { title: 'ZigBee' },
    { title: 'Zillow' },
    { title: 'Zimbra' },
    { title: 'Zinc' },
    { title: 'Zines' },
    { title: 'zLinux' },
    { title: 'Zmap' },
    { title: 'Zoho' },
    { title: 'Zombies' },
    { title: 'Zone Alarm' },
    { title: 'Zoning' },
    { title: 'Zoo' },
    { title: 'Zooarchaeology' },
    { title: 'Zoology' },
    { title: 'Zoom' },
    { title: 'Zoomerang' },
    { title: 'ZoomInfo' },
    { title: 'ZoomText' },
    { title: 'Zope' },
    { title: 'Zotero' },
    { title: 'ZPL' },
    { title: 'zSeries' },
    { title: 'Zsh' },
    { title: 'Zuken' },
    { title: 'Zultys' },
    { title: 'Zumba' },
    { title: 'Zumba Instruction' },
    { title: 'Zuora' },
    { title: 'Z-Wave' },
    { title: 'Zymography' },
    { title: 'Zynx' },
    { title: 'Zyxel' },
]


const socials = [
	{ website: 'facebook.com',		    icon_id: 'bf11c460-c444-4258-0f98-31dffcff4400', title: 'Facebook', 	slug: 'facebook'	},
	{ website: 'twitter.com', 		    icon_id: '3e7a0b19-f04f-4f6a-d83e-3fe59564e200', title: 'Twitter', 		slug: 'twitter'	    },
	{ website: 'linkedin.com', 		    icon_id: '7f0a39f7-2167-4aad-83d9-daac0c160500', title: 'Linkedin', 	slug: 'linkedin'	},
	{ website: 'Instagram.com', 	    icon_id: '5ee69928-24a6-41d3-5d8e-6df29019cb00', title: 'Instagram', 	slug: 'instagram'	},
	{ website: 'Pinterest.com', 	    icon_id: 'a75acc76-3244-4d6f-de00-f01f6032fe00', title: 'Pinterest', 	slug: 'pinterest'	},
	{ website: 'Tumblr.com', 		    icon_id: '7b9ec8bc-6553-41e1-56e2-4bbf8892e300', title: 'Tumblr', 		slug: 'tumblr'	    },
	{ website: 'Messenger.com',		    icon_id: '2bf3b558-5132-42a2-a89d-e223d2882c00', title: 'Messenger', 	slug: 'messenger'	},
	{ website: 'Line.me', 		        icon_id: 'bbc106c1-4eb4-409b-c2e1-b5cb5523a100', title: 'Line', 		slug: 'line'		},
	{ website: 'Trello.com', 		    icon_id: 'f780c11a-cd9f-46de-07d6-5f7d4854f800', title: 'Trello', 		slug: 'trello'	    },
	{ website: 'Tuenti.com', 		    icon_id: '1585861b-1c01-4b40-bca7-95a6b4230100', title: 'Tuenti ', 		slug: 'tuenti'	    },
	{ website: 'Viber.com', 		    icon_id: 'a235e661-ecbe-47eb-e90a-5ab3725baa00', title: 'Viber', 		slug: 'viber'		},
	{ website: 'WeChat.com', 		    icon_id: '3d1a241c-9084-4148-4c34-103c8859b800', title: 'WeChat', 		slug: 'wechat'	    },
	{ website: 'Reddit.com', 		    icon_id: 'f3c828a8-7ce7-483b-f5a1-1507b8600e00', title: 'Reddit', 		slug: 'reddit'	    },
	{ website: 'Telegram.org', 		    icon_id: 'e93813b0-55e4-4e46-3477-169f0c54b200', title: 'Telegram', 	slug: 'telegram'	},
	{ website: 'Tencent.com', 		    icon_id: '50fc1105-3a01-4029-7e2c-6dd6e073fe00', title: 'Tencent', 		slug: 'tencent'	    },
	{ website: 'Blogger.com', 		    icon_id: '77fd8d4c-b107-4f2d-8d3a-5011612f9c00', title: 'Blogger', 		slug: 'blogger'	    },
	{ website: 'teams.microsoft.com',   icon_id: '322ba02a-a96f-4975-b52e-8c495d716400', title: 'Teams', 		slug: 'teams'		},
	{ website: 'hangouts.google.com',   icon_id: '2f575f3e-be1a-4642-971b-ed4511f30d00', title: 'Hangouts', 	slug: 'hangouts'	},
	{ website: 'youtube.com', 		    icon_id: 'a92581c2-98ea-46a1-4de8-813ea12f9700', title: 'YouTube', 		slug: 'youtube'	    },
	{ website: 'yahoo.com', 			icon_id: '25d60011-57cd-4f7d-d982-c22fee3ca900', title: 'Yahoo', 		slug: 'yahoo'		},
	{ website: 'spotify.com', 		    icon_id: '390c5636-a376-4038-d2b7-961c70917100', title: 'Spotify', 		slug: 'spotify'	    },
	{ website: 'soundcloud.com', 		icon_id: 'c8aeff9f-2fad-4a92-557d-046d9cb74200', title: 'SoundCloud', 	slug: 'soundcloud'  },
	{ website: 'snapchat.com', 		    icon_id: 'd3af9b82-3d31-40d9-4f80-90524b947f00', title: 'Snapchat', 	slug: 'snapchat'	},
	{ website: 'skype.com', 			icon_id: '5f5f743a-f1c3-4da7-d5d1-576252e24000', title: 'Skype', 		slug: 'skype'		},
	{ website: 'tiktok.com', 			icon_id: '7432e96a-0f28-4ab6-0ff2-d3484fb25600', title: 'TikTok', 		slug: 'tiktok'	    },
	{ website: 'github.com', 			icon_id: 'e422314d-6ac8-4d96-7f3c-951035db7600', title: 'Github', 		slug: 'github'	    },
	{ website: 'twitch.tv', 			icon_id: 'e5eb60d8-ec9b-472a-e123-f5b808a68200', title: 'Twitch', 		slug: 'twitch'	    },
	{ website: 'dropbox.com', 		    icon_id: '62298dc4-cf51-4607-f573-dd0b17e36200', title: 'Dropbox', 		slug: 'dropbox'	    },
	{ website: 'vk.com', 				icon_id: '0673bc04-7371-4047-23fd-d2f086136400', title: 'VK', 			slug: 'vk'		    },
	{ website: 'behance.net', 		    icon_id: '5c059705-1b9a-44b1-73d4-b47a55b28200', title: 'Behance', 		slug: 'behance'	    },
]

const themes = [
    { title: 'Dark',  isDefault: false },
    { title: 'Light', isDefault: true  },
]


const timePeriods = [
    { title: 'Hourly' }, 
    { title: 'Daily'  },
    { title: 'Weekly' }, 
    { title: 'Monthly'},
    { title: 'Annual' }, 
]

const timezones = [
	{ title: 'Arizona', 													offset: '(UTC-07:00)' },								
	{ title: 'Chihuahua, La Paz, Mazatlan', 								offset: '(UTC-07:00)' },								
	{ title: 'Mountain Time (US & Canada)', 								offset: '(UTC-07:00)' },								
	{ title: 'Yukon', 														offset: '(UTC-07:00)' },								
	{ title: 'Central America', 											offset: '(UTC-06:00)' },								
	{ title: 'Central Time (US & Canada)', 									offset: '(UTC-06:00)' },								
	{ title: 'Easter Island', 												offset: '(UTC-06:00)' },								
	{ title: 'Guadalajara, Mexico City, Monterrey', 						offset: '(UTC-06:00)' },								
	{ title: 'Saskatchewan', 												offset: '(UTC-06:00)' },								
	{ title: 'Bogota, Lima, Quito, Rio Branco', 							offset: '(UTC-05:00)' },								
	{ title: 'Abu Dhabi, Muscat', 											offset: '(UTC+04:00)' },								
	{ title: 'Astrakhan, Ulyanovsk', 										offset: '(UTC+04:00)' },								
	{ title: 'Baku', 														offset: '(UTC+04:00)' },								
	{ title: 'Izhevsk, Samara', 											offset: '(UTC+04:00)' },								
	{ title: 'International Date Line West', 								offset: '(UTC-12:00)' },								
	{ title: 'Coordinated Universal Time-11', 								offset: '(UTC-11:00)' },								
	{ title: 'Aleutian Islands', 											offset: '(UTC-10:00)' },								
	{ title: 'Hawaii', 														offset: '(UTC-10:00)' },								
	{ title: 'Marquesas Islands', 											offset: '(UTC-09:30)' },								
	{ title: 'Chetumal', 													offset: '(UTC-05:00)' },								
	{ title: 'Port Louis', 													offset: '(UTC+04:00)' },								
	{ title: 'Saratov', 													offset: '(UTC+04:00)' },								
	{ title: 'Tbilisi', 													offset: '(UTC+04:00)' },								
	{ title: 'Yerevan', 													offset: '(UTC+04:00)' },								
	{ title: 'Alaska', 														offset: '(UTC-09:00)' },								
	{ title: 'Kabul', 														offset: '(UTC+04:30)' },								
	{ title: 'Coordinated Universal Time-09', 								offset: '(UTC-09:00)' },								
	{ title: 'Baja California', 											offset: '(UTC-08:00)' },								
	{ title: 'Santiago', 													offset: '(UTC-04:00)' },								
	{ title: 'Newfoundland', 												offset: '(UTC-03:30)' },								
	{ title: 'Ashgabat, Tashkent', 											offset: '(UTC+05:00)' },								
	{ title: 'Ekaterinburg', 												offset: '(UTC+05:00)' },								
	{ title: 'Islamabad, Karachi', 											offset: '(UTC+05:00)' },								
	{ title: 'Qyzylorda', 													offset: '(UTC+05:00)' },								
	{ title: 'Chennai, Kolkata, Mumbai, New Delhi', 						offset: '(UTC+05:30)' },								
	{ title: 'Sri Jayawardenepura', 										offset: '(UTC+05:30)' },								
	{ title: 'Kathmandu', 													offset: '(UTC+05:45)' },								
	{ title: 'Eastern Time (US & Canada)', 									offset: '(UTC-05:00)' },								
	{ title: 'Araguaina', 													offset: '(UTC-03:00)' },								
	{ title: 'Haiti', 														offset: '(UTC-05:00)' },								
	{ title: 'Brasilia', 													offset: '(UTC-03:00)' },								
	{ title: 'Cayenne, Fortaleza', 											offset: '(UTC-03:00)' },								
	{ title: 'Coordinated Universal Time-08', 								offset: '(UTC-08:00)' },								
	{ title: 'Havana', 														offset: '(UTC-05:00)' },								
	{ title: 'Pacific Time (US & Canada)', 									offset: '(UTC-08:00)' },								
	{ title: 'City of Buenos Aires', 										offset: '(UTC-03:00)' },								
	{ title: 'Greenland', 													offset: '(UTC-03:00)' },								
	{ title: 'Montevideo', 													offset: '(UTC-03:00)' },								
	{ title: 'Punta Arenas', 												offset: '(UTC-03:00)' },								
	{ title: 'Saint Pierre and Miquelon', 									offset: '(UTC-03:00)' },								
	{ title: 'Salvador', 													offset: '(UTC-03:00)' },								
	{ title: 'Coordinated Universal Time-02', 								offset: '(UTC-02:00)' },								
	{ title: 'Indiana (East)', 												offset: '(UTC-05:00)' },								
	{ title: 'Turks and Caicos', 											offset: '(UTC-05:00)' },								
	{ title: 'Azores', 														offset: '(UTC-01:00)' },								
	{ title: 'Cabo Verde Is.', 												offset: '(UTC-01:00)' },								
	{ title: 'Coordinated Universal Time', 									offset: '(UTC)'       },			
	{ title: 'Asuncion', 													offset: '(UTC-04:00)' },								
	{ title: 'Atlantic Time (Canada)', 										offset: '(UTC-04:00)' },								
	{ title: 'Caracas', 													offset: '(UTC-04:00)' },								
	{ title: 'Cuiaba', 														offset: '(UTC-04:00)' },								
	{ title: 'Dublin, Edinburgh, Lisbon, London', 							offset: '(UTC+00:00)' },								
	{ title: 'Monrovia, Reykjavik', 										offset: '(UTC+00:00)' },								
	{ title: 'Sao Tome', 													offset: '(UTC+00:00)' },								
	{ title: 'Casablanca', 													offset: '(UTC+01:00)' },								
	{ title: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna', 			offset: '(UTC+01:00)' },								
	{ title: 'Georgetown, La Paz, Manaus, San Juan', 						offset: '(UTC-04:00)' },								
	{ title: 'Windhoek', 													offset: '(UTC+02:00)' },								
	{ title: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague', 			offset: '(UTC+01:00)' },								
	{ title: 'Brussels, Copenhagen, Madrid, Paris', 						offset: '(UTC+01:00)' },								
	{ title: 'Sarajevo, Skopje, Warsaw, Zagreb', 							offset: '(UTC+01:00)' },								
	{ title: 'West Central Africa', 										offset: '(UTC+01:00)' },								
	{ title: 'Amman', 														offset: '(UTC+02:00)' },								
	{ title: 'Athens, Bucharest', 											offset: '(UTC+02:00)' },								
	{ title: 'Beirut', 														offset: '(UTC+02:00)' },								
	{ title: 'Cairo', 														offset: '(UTC+02:00)' },								
	{ title: 'Chisinau', 													offset: '(UTC+02:00)' },								
	{ title: 'Damascus', 													offset: '(UTC+02:00)' },								
	{ title: 'Gaza, Hebron', 												offset: '(UTC+02:00)' },								
	{ title: 'Harare, Pretoria', 											offset: '(UTC+02:00)' },								
	{ title: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius', 				offset: '(UTC+02:00)' },								
	{ title: 'Jerusalem', 													offset: '(UTC+02:00)' },								
	{ title: 'Juba', 														offset: '(UTC+02:00)' },								
	{ title: 'Kaliningrad', 												offset: '(UTC+02:00)' },								
	{ title: 'Khartoum', 													offset: '(UTC+02:00)' },								
	{ title: 'Tripoli', 													offset: '(UTC+02:00)' },								
	{ title: 'Baghdad', 													offset: '(UTC+03:00)' },								
	{ title: 'Istanbul', 													offset: '(UTC+03:00)' },								
	{ title: 'Kuwait, Riyadh', 												offset: '(UTC+03:00)' },								
	{ title: 'Minsk', 														offset: '(UTC+03:00)' },								
	{ title: 'Moscow, St Petersburg', 										offset: '(UTC+03:00)' },								
	{ title: 'Nairobi', 													offset: '(UTC+03:00)' },								
	{ title: 'Volgograd', 													offset: '(UTC+03:00)' },								
	{ title: 'Tehran', 														offset: '(UTC+03:30)' },								
	{ title: 'Astana', 														offset: '(UTC+06:00)' },								
	{ title: 'Dhaka', 														offset: '(UTC+06:00)' },								
	{ title: 'Omsk', 														offset: '(UTC+06:00)' },								
	{ title: 'Yangon (Rangoon)', 											offset: '(UTC+06:30)' },								
	{ title: 'Bangkok, Hanoi, Jakarta', 									offset: '(UTC+07:00)' },								
	{ title: 'Barnaul, Gorno-Altaysk', 										offset: '(UTC+07:00)' },								
	{ title: 'Hovd', 														offset: '(UTC+07:00)' },								
	{ title: 'Krasnoyarsk', 												offset: '(UTC+07:00)' },								
	{ title: 'Novosibirsk', 												offset: '(UTC+07:00)' },								
	{ title: 'Tomsk', 														offset: '(UTC+07:00)' },								
	{ title: 'Beijing, Chongqing, Hong Kong, Urumqi', 						offset: '(UTC+08:00)' },								
	{ title: 'Irkutsk', 													offset: '(UTC+08:00)' },								
	{ title: 'Kuala Lumpur, Singapore', 									offset: '(UTC+08:00)' },								
	{ title: 'Perth', 														offset: '(UTC+08:00)' },								
	{ title: 'Taipei', 														offset: '(UTC+08:00)' },								
	{ title: 'Ulaanbaatar', 												offset: '(UTC+08:00)' },								
	{ title: 'Eucla', 														offset: '(UTC+08:45)' },								
	{ title: 'Chita', 														offset: '(UTC+09:00)' },								
	{ title: 'Osaka, Sapporo, Tokyp', 										offset: '(UTC+09:00)' },								
	{ title: 'Pyongyang', 													offset: '(UTC+09:00)' },								
	{ title: 'Seoul', 														offset: '(UTC+09:00)' },								
	{ title: 'Yakutsk', 													offset: '(UTC+09:00)' },								
	{ title: 'Adelaide', 													offset: '(UTC+09:30)' },								
	{ title: 'Darwin', 														offset: '(UTC+09:30)' },								
	{ title: 'Brisbane', 													offset: '(UTC+10:00)' },								
	{ title: 'Canberra, Melbourne, Sydney', 								offset: '(UTC+10:00)' },								
	{ title: 'Guam, Port Moresby', 											offset: '(UTC+10:00)' },								
	{ title: 'Hobart', 														offset: '(UTC+10:00)' },								
	{ title: 'Vladivostok', 												offset: '(UTC+10:00)' },								
	{ title: 'Lord Howe Island', 											offset: '(UTC+10:30)' },								
	{ title: 'Bougainville Island', 										offset: '(UTC+11:00)' },								
	{ title: 'Chokurdath', 													offset: '(UTC+11:00)' },								
	{ title: 'Magadan', 													offset: '(UTC+11:00)' },								
	{ title: 'Norfolk Island', 												offset: '(UTC+11:00)' },								
	{ title: 'Sakhalin', 													offset: '(UTC+11:00)' },								
	{ title: 'Solomon Is. New Caledonia', 									offset: '(UTC+11:00)' },								
	{ title: 'Anadyr, Petropavlovsk-Kamchatsky', 							offset: '(UTC+12:00)' },								
	{ title: 'Auckland, Wellington', 										offset: '(UTC+12:00)' },								
	{ title: 'Coordinated Universal Time+12', 								offset: '(UTC+12:00)' },								
	{ title: 'Fiji', 														offset: '(UTC+12:00)' },								
	{ title: 'Chatham Islands', 											offset: '(UTC+12:45)' },								
	{ title: 'Coordinated Universal Time+13', 								offset: '(UTC+13:00)' },								
	{ title: 'Nuku`alofa', 							   					    offset: '(UTC+13:00)' },								
	{ title: 'Samoa', 														offset: '(UTC+13:00)' },								
	{ title: 'Kiritimati Island', 											offset: '(UTC+14:00)' },								

]

const toasts = [
    { title: 'Logged in',             message: 'Welcome' },
    { title: 'Logged out',            message: 'See you next time' },
    { title: 'Created',               message: 'Saved successfully' },
    { title: 'Updated',               message: 'Updated successfully' },
    { title: 'Deleted',               message: 'Deleted successfully' },
    { title: 'Verified',              message: 'Verified' },
    { title: 'OTP sent',              message: 'We just sent you an OTP code' },
    { title: 'Mail sent',             message: 'Check your email inbox, please' },
    { title: 'General error',         message: 'The operation encountered an error, try again please' },
    { title: 'Already exists',        message: 'This is already exists' },
    { title: 'Required',              message: 'Required' },
    { title: 'Id required',           message: 'ID is Required' },
    { title: 'Numeric id required',   message: 'A numeric ID is required' },
    { title: 'Not found',             message: 'Not found' },
    { title: 'Account deleted',       message: 'This account is deleted' },
    { title: 'Account deactivated',   message: 'This account is deactivated' },
    { title: 'Mobile not registered', message: 'Your mobile is not registered yet' },
    { title: 'Mobile is used',        message: 'This phone number is used before' },
    { title: 'OTP not sent yet',      message: 'OTP not sent yet' },
    { title: 'OTP is not valid',      message: 'The OTP code is not valid' },
    { title: 'Domain is required',    message: 'Domain is required' },
    { title: 'OTP is expired',        message: 'The OTP code is required' },
    { title: 'Title is required',     message: 'The title is required' },
    { title: 'Terms accepted',        message: 'The terms are accepted' },
]

