const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const _ = require("lodash")
const formidable = require("formidable");
const { toast } = require('../../utils/u_Toasts');
var pdf = require("html-pdf");
let ejs = require("ejs");
var moment = require("moment");
let path = require("path");
var pdf_node = require("html-pdf-node");


exports.download = async (req, res) => {
    let { view, mode } = req.body
    if (req.method == 'GET') {
        view = req.query.view
        mode = req.query.mode
    }
    console.log(20, req.method)
    console.log(21, view, mode)
    try {
        cv = await getCV(req.user.id)
        ejs.renderFile(
            path.join(__dirname, "./views/", view, mode + ".ejs"),
            { cv, moment },
            (err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    pdf_node
                        .generatePdf(
                            { content: data },
                            {
                                format: "A4",
                                margin: {
                                    top: 10,
                                    bottom: 10,
                                    left: 15,
                                    right: 15,
                                },
                                printBackground: true,
                            }
                        )
                        .then((pdfBuffer) => {
                            res.type('pdf');
                            res.setHeader('Content-disposition', 'attachment; filename=' + req.user.givenName + '-' + req.user.familyName + '-' + view + '-' + mode + '.pdf');
                            res.end(pdfBuffer, 'binary');
                        });

                }
            }
        );
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.html = async (req, res) => {
    let { view, mode } = req.body
    if (req.method == 'GET') {
        view = req.query.view
        mode = req.query.mode
    }
    try {
        cv = await getCV(req.user.id)
        ejs.renderFile(
            path.join(__dirname, "./views/", view, mode + ".ejs"),
            { cv, moment },
            (err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.type('html');
                    res.send(data);
                }

            }
        );
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }

}

getCV = async (id) => {
    const selectDetails = {
        id: true,
        title: true
    }

    try {
        let User = await db.users.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                givenName: true,
                familyName: true,
                dateOfBirth: true,
                avatar: true,
                bannerId: true,
                jobTitle: true,
                phone: true,
                email: true,
                streetAddress: true,
                website: true,
                minSalary: true,
                maxSalary: true,
                about: true,
                description: true,
                hobbies: true,
                additionalInfo: true,
                publications: true,
                gender: {
                    select: selectDetails
                },
                degree: {
                    select: selectDetails
                },
                drivingLicense: {
                    select: selectDetails
                },
                nationality: {
                    select: selectDetails
                },
                industry: {
                    select: selectDetails
                },
                residentCountry: {
                    select: selectDetails
                },
                userEducations: {
                    select: {
                        id: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        institute: true,
                        major: true,
                        country: {
                            select: {
                                id: true,
                                title: true,

                            }
                        },
                        city: {
                            select: {
                                id: true,
                                title: true,

                            }
                        },
                        degree: {
                            select: selectDetails
                        }
                    }
                },
                userExperiences: {
                    select: {
                        id: true,
                        title: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        institute: true,
                        country: {
                            select: {
                                id: true,
                                title: true,

                            }
                        },
                        city: {
                            select: {
                                id: true,
                                title: true,

                            }
                        },
                        description: true,
                    }
                },
                userExpertises: {
                    select: {
                        id: true,
                        title: true,
                        percentage: true,
                        domination: {
                            select: selectDetails
                        }
                    }
                },
                userPortfolios: {
                    select: {
                        id: true,
                        title: true,
                        link: true,
                        videoLink: true,
                        imageIds: true,
                    }
                },
                userSkils: {
                    select: {
                        id: true,
                        title: true,
                        percentage: true,
                        domination: {
                            select: selectDetails
                        }
                    }
                },
                userLanguages: {
                    select: {
                        id: true,
                        percentage: true,
                        language: {
                            select: selectDetails
                        },
                        certificate: {
                            select: selectDetails
                        },
                        level: {
                            select: selectDetails
                        },
                    }
                },
                userExtraActivities: {
                    select: {
                        id: true,
                        title: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        institute: true,
                        country: {
                            select: {
                                id: true,
                                title: true,

                            }
                        },
                        city: {
                            select: {
                                id: true,
                                title: true,

                            }
                        },
                        description: true,
                    }
                },
                userCourses: {
                    select: {
                        id: true,
                        title: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        institute: true,
                    }
                },
                userInterships: {
                    select: {
                        id: true,
                        title: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        employer: true,
                        country: {
                            select: {
                                id: true,
                                title: true,

                            }
                        },
                        city: {
                            select: {
                                id: true,
                                title: true,

                            }
                        },
                    }
                },
                userReferences: {
                    select: {
                        id: true,
                        fullName: true,
                        company: true,
                        phone: true,
                        email: true,
                    }
                },
                userAwards: {
                    select: {
                        id: true,
                        title: true,
                        date: true,
                        description: true,
                    }
                },
                userSocials: {
                    select: {
                        id: true,
                        username: true,
                        social: {
                            select: {
                                id: true,
                                title: true,
                                icon_id: true,
                            }
                        }
                    }
                }
            }
        })

        let portfolioImages = []
        User.userPortfolios.forEach(portfolio => {
            portfolio.imageIds.forEach(id => {
                portfolioImages.push(`${process.env.CFLARE_IMG_URL}/${id}/banner`)
            })
        })
        User.userPortfolios.forEach(portfolio => {
            portfolio.images = portfolioImages
        })
        User.userPortfolios.forEach(portfolio => {
            portfolio.imageIds = undefined
        })

        User.userSocials.forEach(social => {
            social.social.icon = `${process.env.CFLARE_IMG_URL}/${social.social.icon_id}/icon`;
            social.url = `https://${social.social.title}.com/${social.username}`;
        })
        User.userSocials.forEach(social => {
            social.social.icon_id = undefined
        })

        User.banner = `${process.env.CFLARE_IMG_URL}/${User.bannerId}/banner`;
        User.bannerId = undefined;
        return User
    } catch (error) {
        console.log(error.message);
        return -1
    }
}

