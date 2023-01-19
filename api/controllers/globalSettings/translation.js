const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { toast } = require('../../utils/u_Toasts');




// =================================================================================== Sections


exports.addLanguage = async(req, res) => {

    const id = parseInt(req.params.id)

    try {
        let Language = await db.languages.updateMany({
            where:{
                isLive: true,
                id
            },
            data:{
                isOnList: true
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.delLanguage = async(req, res) => {

    const id = parseInt(req.params.id)

    try {
        let Language = await db.languages.updateMany({
            where:{
                isLive: true,
                id
            },
            data:{
                isOnList: false
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.liveLanguage = async(req, res) => {

    const id = parseInt(req.params.id)

    try {
        let Language = await db.languages.updateMany({
            where:{
                isLive: true,
                id
            },
            data:{
                isOnLine: !req.language.isOnLine
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewAllLanguages = async(req, res) => {

    let list = []
    let all  = 0

    try {
        all = all + (await db.languages.findMany({where: { isLive: true }})).length
        all = all + (await db.toasts.findMany({where: { isLive: true }})).length
        all = all + (await db.labels.findMany({where: { isLive: true }})).length
        all = all + (await db.countries.findMany({where: { isLive: true }})).length
        all = all + (await db.states.findMany({where: { isLive: true }})).length
        all = all + (await db.cities.findMany({where: { isLive: true }})).length
        all = all + (await db.nationalities.findMany({where: { isLive: true }})).length
        all = all + (await db.currencies.findMany({where: { isLive: true }})).length
        all = all + (await db.days.findMany({where: { isLive: true }})).length
        all = all + (await db.genders.findMany({where: { isLive: true }})).length
        all = all + (await db.drivingLicenses.findMany({where: { isLive: true }})).length
        all = all + (await db.industries.findMany({where: { isLive: true }})).length
        all = all + (await db.skills.findMany({where: { isLive: true }})).length
        all = all + (await db.timezones.findMany({where: { isLive: true }})).length
        all = all + (await db.languageCertificates.findMany({where: { isLive: true }})).length
        all = all + (await db.languageLevels.findMany({where: { isLive: true }})).length
        all = all + (await db.dominationLevels.findMany({where: { isLive: true }})).length
        all = all + (await db.academicLevels.findMany({where: { isLive: true }})).length
        all = all + (await db.employmentTypes.findMany({where: { isLive: true }})).length
        all = all + (await db.timePeriods.findMany({where: { isLive: true }})).length
        all = all + (await db.jobStatus.findMany({where: { isLive: true }})).length
        all = all + (await db.applicationResults.findMany({where: { isLive: true }})).length
        all = all + (await db.jobQuestionsCategories.findMany({where: { isLive: true }})).length
        all = all + (await db.socials.findMany({where: { isLive: true }})).length
        all = all + (await db.themes.findMany({where: { isLive: true }})).length
        all = all + (await db.securityQuestions.findMany({where: { isLive: true }})).length
        all = all + (await db.menus.findMany({where: { isLive: true }})).length
        all = all + (await db.modules.findMany({where: { isLive: true }})).length
        all = all + (await db.roles.findMany({where: { isLive: true }})).length

        let translates = await db.languages.findMany({
            where:{
                isLive: true,
                isOnList: true,
                NOT: [{ slug: 'english' }]
            },
            select:{
                id: true,
                slug: true,
                title: true,
                code: true,
                isOnList: true,
                isOnLine: true,
                flagId: true,
                languageTs: true,
                toastTs: true,
                sectionTs: true,
                labelTs: true,
                countryTs: true,
                stateTs: true,
                cityTs: true,
                nationalityTs: true,
                currencyTs: true,
                dayTs: true,
                genderTs: true,
                drivingLicenseTs: true,
                industryTs: true,
                skillTs: true,
                timezoneTs: true,
                languageCertificateTs: true,
                languageLevelTs: true,
                dominationLevelTs: true,
                academicLevelTs: true,
                employmentTypeTs: true,
                timePeriodTs: true,
                jobStatusTs: true,
                applicationResultTs: true,
                jobQuestionCategoryTs: true,
                socialMediaTs: true,
                themeTs: true,
                securityQuestionTs: true,
                menuTs: true,
                moduleTs: true,
                roleTs: true,
            }
        })

        for(let i=0; i<translates.length; i++){
            let L  = translates[i]
            let LC = L.languageTs.length 
                +  L.toastTs.length
                +  L.sectionTs.length 
                +  L.labelTs.length 
                +  L.countryTs.length 
                +  L.stateTs.length 
                +  L.cityTs.length 
                +  L.nationalityTs.length 
                +  L.currencyTs.length
                +  L.dayTs.length
                +  L.genderTs.length
                +  L.drivingLicenseTs.length
                +  L.industryTs.length
                +  L.skillTs.length
                +  L.timezoneTs.length
                +  L.languageCertificateTs.length
                +  L.languageLevelTs.length
                +  L.dominationLevelTs.length
                +  L.academicLevelTs.length
                +  L.employmentTypeTs.length
                +  L.timePeriodTs.length
                +  L.jobStatusTs.length
                +  L.applicationResultTs.length
                +  L.jobQuestionCategoryTs.length
                +  L.socialMediaTs.length
                +  L.themeTs.length
                +  L.securityQuestionTs.length
                +  L.menuTs.length
                +  L.moduleTs.length
                +  L.roleTs.length;

            list.push({
                id: L.id,
                code: L.code,
                slug: L.slug,
                title: L.title,
                isOnList: L.isOnList,
                isOnLine: L.isOnLine,
                counter: `${LC}/${all}`,
                flag: `${process.env.CFLARE_IMG_URL}/${L.flagId}/icon`,
            })

        }

        let Eng = await db.languages.findFirst({
            where:{
                slug: "english"
            },
            select:{
                id: true,
                code: true,
                slug: true,
                title: true,
                isOnList: true,
                isOnLine: true,
                flagId: true,
            }
        })

        list.push({
            id: Eng.id,
            code: Eng.code,
            slug: Eng.slug,
            title: Eng.title,
            isOnList: Eng.isOnList,
            isOnLine: Eng.isOnLine,
            counter: `${all}/${all}`,
            flag: `${process.env.CFLARE_IMG_URL}/${Eng.flagId}/icon`,
        })
        
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewAllSections = async(req, res) => {

    const {domain} = req.params

    try {
        let list = await db.sections.findMany({
            where:{
                isLive: true,
                domain
            },
            select:{
                id: true,
                title: true,
                slug: true,
            },
            orderBy:{
                id: "asc"
            }
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneSection = async(req, res) => {
    if(req.section.domain === 'app' || req.section.domain === 'site'){
        await this.labels(req, res)
    }
    else if(req.section.slug === 'cities'){
        await this.cities(req, res)
    }
    else if(req.section.slug === 'countries'){
        await this.countries(req, res)
    }
    else if(req.section.slug === 'currencies'){
        await this.currencies(req, res)
    }
    else if(req.section.slug === 'days'){
        await this.days(req, res)
    }
    else if(req.section.slug === 'genders'){
        await this.genders(req, res)
    }
    else if(req.section.slug === 'industries'){
        await this.industries(req, res)
    }
    else if(req.section.slug === 'languages'){
        await this.languages(req, res)
    }
    else if(req.section.slug === 'menus'){
        await this.menus(req, res)
    }
    else if(req.section.slug === 'modules'){
        await this.modules(req, res)
    }
    else if(req.section.slug === 'nationalities'){
        await this.nationalities(req, res)
    }
    else if(req.section.slug === 'roles'){
        await this.roles(req, res)
    }
    else if(req.section.slug === 'skills'){
        await this.skills(req, res)
    }
    else if(req.section.slug === 'states'){
        await this.states(req, res)
    }
    else if(req.section.slug === 'themes'){
        await this.themes(req, res)
    }
    else if(req.section.slug === 'timezones'){
        await this.timezones(req, res)
    }
    else if(req.section.slug === 'toasts'){
        await this.toasts(req, res)
    }
    else if(req.section.slug === 'academic-levels'){
        await this.academicLevels(req, res)
    }
    else if(req.section.slug === 'application-results'){
        await this.applicationResults(req, res)
    }
    else if(req.section.slug === 'domination-levels'){
        await this.dominationLevels(req, res)
    }
    else if(req.section.slug === 'driving-licenses'){
        await this.drivingLicenses(req, res)
    }
    else if(req.section.slug === 'employment-types'){
        await this.employmentTypes(req, res)
    }
    else if(req.section.slug === 'job-questions-categories'){
        await this.jobQuestionsCategories(req, res)
    }
    else if(req.section.slug === 'job-status'){
        await this.jobStatus(req, res)
    }
    else if(req.section.slug === 'language-certificates'){
        await this.languageCertificates(req, res)
    }
    else if(req.section.slug === 'language-levels'){
        await this.languageLevels(req, res)
    }
    else if(req.section.slug === 'security-questions'){
        await this.securityQuestions(req, res)
    }
    else if(req.section.slug === 'social-medias'){
        await this.socialMedias(req, res)
    }
    else if(req.section.slug === 'time-periods'){
        await this.timePeriods(req, res)
    }
    else{
        return res.json({
            status: -1, 
            error: await toast("Not found", req.user.languageId)
        })
    }

}

exports.translate = async(req, res) => {
    
    const {languageId, domain, slug, fields} = req.body
    
    if(domain === 'app' || domain === 'site'){
        await this.lablesTs(req, res)
    }
    else if(slug === 'cities'){
        await this.citiesTs(req, res)
    }
    else if(slug === 'countries'){
        await this.countriesTs(req, res)
    }
    else if(slug === 'currencies'){
        await this.currenciesTs(req, res)
    }
    else if(slug === 'days'){
        await this.daysTs(req, res)
    }
    else if(slug === 'genders'){
        await this.gendersTs(req, res)
    }
    else if(slug === 'industries'){
        await this.industriesTs(req, res)
    }
    else if(slug === 'languages'){
        await this.languagesTs(req, res)
    }
    else if(slug === 'menus'){
        await this.menusTs(req, res)
    }
    else if(slug === 'modules'){
        await this.modulesTs(req, res)
    }
    else if(slug === 'nationalities'){
        await this.nationalitiesTs(req, res)
    }
    else if(slug === 'roles'){
        await this.rolesTs(req, res)
    }
    else if(slug === 'skills'){
        await this.skillsTs(req, res)
    }
    else if(slug === 'states'){
        await this.statesTs(req, res)
    }
    else if(slug === 'themes'){
        await this.themesTs(req, res)
    }
    else if(slug === 'timezones'){
        await this.timezonesTs(req, res)
    }
    else if(slug === 'toasts'){
        await this.toastsTs(req, res)
    }
    else if(slug === 'academic-levels'){
        await this.academicLevelsTs(req, res)
    }
    else if(slug === 'application-results'){
        await this.applicationResultsTs(req, res)
    }
    else if(slug === 'domination-levels'){
        await this.dominationLevelsTs(req, res)
    }
    else if(slug === 'driving-licenses'){
        await this.drivingLicensesTs(req, res)
    }
    else if(slug === 'employment-types'){
        await this.employmentTypesTs(req, res)
    }
    else if(slug === 'job-questions-categories'){
        await this.jobQuestionsCategoriesTs(req, res)
    }
    else if(slug === 'job-status'){
        await this.jobStatusTs(req, res)
    }
    else if(slug === 'language-certificates'){
        await this.languageCertificatesTs(req, res)
    }
    else if(slug === 'language-levels'){
        await this.languageLevelsTs(req, res)
    }
    else if(slug === 'security-questions'){
        await this.securityQuestionsTs(req, res)
    }
    else if(slug === 'social-medias'){
        await this.socialMediasTs(req, res)
    }
    else if(slug === 'time-periods'){
        await this.timePeriodsTs(req, res)
    }
    else{
        return res.json({
            status: -1, 
            error: await toast("Not found", req.user.languageId)
        })
    }

}


// =================================================================================== Views

exports.labels = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.labels.findMany({
            where:{
                isLive: true,
                sectionId: req.section.id
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.cities = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.cities.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.countries = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.countries.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.currencies = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.currencies.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.days = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.days.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.genders = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.genders.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.industries = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.industries.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.languages = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.languages.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.menus = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.menus.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.modules = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.modules.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.nationalities = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.nationalities.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.roles = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.roles.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.skills = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.skills.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.states = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.states.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.themes = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.themes.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.timezones = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.timezones.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.toasts = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.toasts.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.academicLevels = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.academicLevels.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.applicationResults = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.applicationResults.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.dominationLevels = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.dominationLevels.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.drivingLicenses = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.drivingLicenses.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.employmentTypes = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.employmentTypes.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.jobQuestionsCategories = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.jobQuestionsCategories.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.jobStatus = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.jobStatus.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.languageCertificates = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.languageCertificates.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.languageLevels = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.languageLevels.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.securityQuestions = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.securityQuestions.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.socialMedias = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.socials.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.timePeriods = async(req, res) => {

    const languageId = parseInt(req.params.LID)

    try {
        let list = await db.timePeriods.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
    
        list.forEach(item => {
            if(item.translations.length){
                item.translation = item.translations[0].title
            }else{
                item.translation = ""
            }
        })
    
        list.forEach(item => {
            item.translations = undefined
        })
    
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}


// =================================================================================== Translators

exports.lablesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.labelsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.labelsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.labelsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.citiesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.citiesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.citiesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.citiesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.countriesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.countriesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.countriesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.countriesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.currenciesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.currenciesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.currenciesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.currenciesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.daysTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.daysTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.daysTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.daysTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.gendersTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.gendersTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.gendersTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.gendersTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.industriesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.industriesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.industriesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.industriesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.menusTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.menusTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.menusTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.menusTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.modulesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.modulesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.modulesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.modulesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.nationalitiesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.nationalitiesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.nationalitiesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.nationalitiesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.rolesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.rolesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.rolesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.rolesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.skillsTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.skillsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.skillsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.skillsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.statesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.statesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.statesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.statesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.themesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.themesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.themesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.themesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.timezonesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.timezonesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.timezonesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.timezonesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.toastsTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.toastsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.toastsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.toastsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.academicLevelsTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.academicLevelsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.academicLevelsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.academicLevelsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.applicationResultsTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.applicationResultsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.applicationResultsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.applicationResultsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.dominationLevelsTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.dominationLevelsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.dominationLevelsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.dominationLevelsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.drivingLicensesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.drivingLicensesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.drivingLicensesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.drivingLicensesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.employmentTypesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.employmentTypesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.employmentTypesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.employmentTypesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.jobQuestionsCategoriesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.jobQuestionsCategoriesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.jobQuestionsCategoriesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.jobQuestionsCategoriesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.jobStatusTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.jobStatusTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.jobStatusTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.jobStatusTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.languageCertificatesTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.languageCertificatesTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.languageCertificatesTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.languageCertificatesTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.languageLevelsTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.languageLevelsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.languageLevelsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.languageLevelsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.securityQuestionsTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.securityQuestionsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.securityQuestionsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.securityQuestionsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.socialMediasTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.socialsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.socialsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.socialsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.timePeriodsTs = async(req, res) => {

    const {languageId, domain, slug, fields} = req.body

    try {
        for(let i=0; i<fields.length; i++){
            let isExists = await db.timePeriodsTs.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    recordId: parseInt(fields[i].id),
                }
            })
            if(isExists){
                let updRecord = await db.timePeriodsTs.updateMany({
                    where:{
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                    },
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }else{
                let addRecord = await db.timePeriodsTs.create({
                    data: {
                        languageId: parseInt(languageId),
                        recordId: parseInt(fields[i].id),
                        title: fields[i].translation
                    },
                })
            }

        }
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}
