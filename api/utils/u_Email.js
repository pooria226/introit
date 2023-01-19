require('dotenv').config()
const nodemailer = require('nodemailer')

exports.send_Activation_Mail = (email, token, givenName, familyName) => {
    let callback_url = `${process.env.APP}/activation/${token}`
    try {
        let transporter = nodemailer.createTransport({
            port: 587,
            secure: false,
            requireTLS: true,
            service: "Outlook365",
            host: 'smtp.office365.com',
            auth: {
                user: 'support@envire.tech',
                pass: '@BudapesT2022'
                // pass: '@BudapesT2021+'
            },
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false
            },
        })
        let from = {
            name: 'Enviretech',
            address: 'support@envire.tech'
        }
        let mailOptions = {
            from: from,
            to: email,
            subject: 'Account activation link',
            html:
                `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                
                  <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="format-detection" content="telephone=no">
                    <meta name="x-apple-disable-message-reformatting">
                    <title></title>
                
                    <style type="text/css">
                        .body{
                            background-color: rgb(255, 255, 255)!important;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif!important;
                        }
                        .wrapper{
                            min-height: 500px!important;
                            border-radius: 8px!important;
                            overflow: hidden!important;
                            border: 1px solid rgb(194, 194, 194)!important;
                            background-color: #f2f2f8!important;
                        }
                        .header{
                            background-color: rgb(255, 255, 255)!important;
                            display: flex!important;
                            justify-content: space-between!important;
                            border-bottom: 1px solid rgb(209, 209, 209)!important;
                        }
                        .header .left{
                            width: 50%!important;
                            padding: 5% 1%!important;
                        }
                        .header .right{
                            width: 50%!important;
                            padding: 1%!important;
                            display: flex!important;
                        }
                        .header .right a{
                            text-decoration: none!important;
                            background-color: aqua!important;
                            border-radius: 30px!important;
                            width: 105px!important;
                            height: 32px!important;
                            font-size: 12px!important;
                            width: 120px!important;
                            height: 40px!important;
                            background-color: #3869ff!important;
                            border-radius: 27px!important;
                            display: flex!important;
                            justify-content: center!important;
                            align-items: center!important;
                            color: white!important;
                            text-decoration: none!important;
                            margin: auto 0 auto auto!important;
                        }
                        .header .right a span{
                            margin: auto!important;
                        }
                        .content{
                            padding: 10% 10% 2% 10%!important;
                        }
                        .content .inner{
                            background-color: #fff!important;
                            border-radius: 20px!important;
                            min-height: 500px!important;
                            border: 1px solid rgb(211, 211, 211)!important;
                            position: relative!important;
                            overflow: hidden!important;
                        }
                        .content .inner h1{
                            color: #6e7191!important;
                            font-weight: 700!important;
                            font-size: 30px!important;
                            padding: 5% 5% 3% 5%!important;
                        }
                        .content .inner p{
                            font-weight: 400!important;
                            font-size: 16px!important;
                            line-height: 26px!important;
                            color: #6e7191!important;
                            padding: 0 5%!important;
                        }
                        .content .inner .link{
                            padding: 10% 0 0 0!important;
                            z-index: 2!important;
                            position: relative!important;
                        }
                        .content .inner .link a{
                            text-decoration: none!important;
                            background-color: aqua!important;
                            border-radius: 30px!important;
                            width: 105px!important;
                            height: 32px!important;
                            font-size: 12px!important;
                            width: 180px!important;
                            height: 50px!important;
                            background-color: #3869ff!important;
                            border-radius: 27px!important;
                            display: flex!important;
                            justify-content: center!important;
                            align-items: center!important;
                            color: white!important;
                            text-decoration: none!important;
                            margin: auto!important;
                        }
                        .content .inner .link a span{
                            margin: auto!important;
                            font-size: 16px!important;
                        }
                        .circles1 .circle{
                            width: 100px!important;
                            height: 100px!important;
                            border-radius: 50%!important;
                            margin-left: -50px!important;
                            margin-bottom: -50px!important;
                            background-color: #5555a5!important;
                        }
                        .circles2{
                            direction: rtl!important;
                        }
                        .circles2 .circle{
                            width: 170px!important;
                            height: 170px!important;
                            border-radius: 50%!important;
                            margin-right: -70px!important;
                            margin-bottom: -50px!important;
                            background-color: #ffa938!important;
                        }
                        .hrMessage {
                            color: #6e7191!important;
                            font-weight: 300!important;
                            font-size: 16px!important;
                            text-align: center!important;
                        }
                        .hrMessage a{
                            color: #3869ff!important;
                            font-weight: 400!important;
                        }
                        .stayConnected {
                            padding-top: 10px!important;
                            font-weight: 700!important;
                            font-size: 24px!important;
                            color: #6e7191!important;
                            text-align: center!important;
                            margin-top: 20px!important;
                        }
                        .social-links{
                            text-align: center!important;
                            padding: 10px 0 60px 0!important;
                        }
                        .social-links a{
                            display: inline-block!important;
                            width: 34px!important;
                            height: 34px!important;
                        }
                        .social-links a.facebook{
                            margin: 0 3px 0 5px!important;
                            overflow: hidden!important;
                        }
                        .social-links a.facebook{
                            margin: 0 5px 0 3px!important;
                        }
                        .social-links a img{
                            height: 100%!important;
                            width: 100%!important;
                        }
                        .footer{
                            background-color: #fff!important;
                            padding: 5% 1%!important;
                        }
                        .text-footer {
                            font-weight: 300!important;
                            font-size: 15px!important;
                            line-height: 1.7!important;
                            color: #9391a0!important;
                        }
                        .text-copyright {
                            font-weight: 500!important;
                            font-size: 15px!important;
                            line-height: 1.7!important;
                            color: #6357b4!important;
                        }
                        @media only screen and (max-width: 800px) {
                            .content{
                                padding: 5% 2%!important;
                            }
                            .content .inner h1{
                                font-size: 22px!important;
                            }
                            .content .inner p{
                                font-weight: 300!important;
                                font-size: 14px!important;
                            }
                        }
                    </style>
                  </head>
                  <body class="body">
                    <div class="wrapper">
                        <div class="header">
                            <div class="left">
                                <a href="https://techtalentshub.com">
                                    <img
                                      src="https://app.techtalentshub.com/email/logo-long.png"
                                      width="136"
                                      height="54"
                                      alt=""
                                    />
                                </a>
                            </div>
                            <div class="right">
                                <a href="https://app.techtalentshub.com">
                                    <span>Dashboard</span>
                                </a>
                            </div>
                        </div>
                        <div class="content">
                            <div class="inner">
                                <h1>Dear ${givenName}</h1>
                                <p>
                                    Your resume was viewed by Google ..... when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <div class="link">
                                    <a href=${callback_url}>
                                        <span>Activate Now</span>
                                    </a>
                                </div>
                                <div class="circles1">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles2">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="social">
                            <p class="hrMessage">
                                <span>This email was intended for ${givenName} ${familyName}. </span> 
                                <a href="https://app.techtalentshub.com">Learn why we included this.</a>
                            </p>
                            <h2 class="stayConnected">Stay Connected</h2>
                            <div class="social-links">
                                <a href="#">
                                    <img
                                        src="https://app.techtalentshub.com/email/instagram.png"
                                        alt="instagram"
                                    />
                                </a>
                                <a href="#" class="linkedin">
                                    <img
                                        src="https://app.techtalentshub.com/email/linkedin.png"
                                        alt="linkedin"
                                    />
                                </a>
                                <a href="#" class="facebook">
                                    <img
                                        src="https://app.techtalentshub.com/email/facebook.png"
                                        alt="facebook"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="https://app.techtalentshub.com/email/twitter.png"
                                        alt="twitter"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div>
                          <a href="https://techtalentshub.com">
                            <img
                              src="https://app.techtalentshub.com/email/logo-long.png"
                              width="100"
                              height="40"
                              alt=""
                            />
                          </a>
                        </div>
                        <div>
                          <p class="text-footer">
                            This e-mail and any files transmitted with it are for the sole use of
                            the intended recipient(s) and may contain confidential and privileged
                            information. If you are not the intended recipient(s), please reply to
                            the sender and destroy all copies of the original message. Any
                            unauthorized review, use, disclosure, dissemination, forwarding,
                            printing or copying of this email, and/or any action taken in reliance
                            on the contents of this e-mail is strictly prohibited and may be
                            unlawful. Where permitted by applicable law, this e-mail and other
                            e-mail communications sent to and from EnvireTech e-mail addresses may
                            be monitored.
                          </p>
                          <p class="text-copyright">© 2022 EnvieTech Ltd. All Rights Reserved</p>
                        </div>
                    </div>
                  </body>
                </html>
            `
        }
        transporter.sendMail(mailOptions, (err, result) => {
            if (err) {
                console.log("Email Internal Error : ".red , err);
                return false
            } else {
                console.log('Email sent: '.green , result.response);
                return true
            }
        });

    } catch (err) {
        console.log("Send Reset Link Email Error :".yellow);
        console.log("Email Error : " + err);
        return false
    }
}

exports.send_Invitaion_Mail = (email, token, givenName, familyName) => {
    // let callback_url = `${process.env.APP}/signup/${token}`
    let callback_url = `${process.env.APP}/signup`
    try {
        let transporter = nodemailer.createTransport({
            port: 587,
            secure: false,
            requireTLS: true,
            service: "Outlook365",
            host: 'smtp.office365.com',
            auth: {
                user: 'support@envire.tech',
                pass: '@BudapesT2022'
                // pass: '@BudapesT2021+'
            },
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false
            },
        })
        let from = {
            name: `${givenName} ${familyName}`,
            address: 'support@envire.tech'
        }
        let mailOptions = {
            from: from,
            to: email,
            subject: `Invited you on Enviretech`,
            html:
                `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                
                  <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="format-detection" content="telephone=no">
                    <meta name="x-apple-disable-message-reformatting">
                    <title></title>
                
                    <style type="text/css">
                        .body{
                            background-color: rgb(255, 255, 255)!important;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif!important;
                        }
                        .wrapper{
                            min-height: 500px!important;
                            border-radius: 8px!important;
                            overflow: hidden!important;
                            border: 1px solid rgb(194, 194, 194)!important;
                            background-color: #f2f2f8!important;
                        }
                        .header{
                            background-color: rgb(255, 255, 255)!important;
                            display: flex!important;
                            justify-content: space-between!important;
                            border-bottom: 1px solid rgb(209, 209, 209)!important;
                        }
                        .header .left{
                            width: 50%!important;
                            padding: 5% 1%!important;
                        }
                        .header .right{
                            width: 50%!important;
                            padding: 1%!important;
                            display: flex!important;
                        }
                        .header .right a{
                            text-decoration: none!important;
                            background-color: aqua!important;
                            border-radius: 30px!important;
                            width: 105px!important;
                            height: 32px!important;
                            font-size: 12px!important;
                            width: 120px!important;
                            height: 40px!important;
                            background-color: #3869ff!important;
                            border-radius: 27px!important;
                            display: flex!important;
                            justify-content: center!important;
                            align-items: center!important;
                            color: white!important;
                            text-decoration: none!important;
                            margin: auto 0 auto auto!important;
                        }
                        .header .right a span{
                            margin: auto!important;
                        }
                        .content{
                            padding: 10% 10% 2% 10%!important;
                        }
                        .content .inner{
                            background-color: #fff!important;
                            border-radius: 20px!important;
                            min-height: 500px!important;
                            border: 1px solid rgb(211, 211, 211)!important;
                            position: relative!important;
                            overflow: hidden!important;
                        }
                        .content .inner h1{
                            color: #6e7191!important;
                            font-weight: 700!important;
                            font-size: 30px!important;
                            padding: 5% 5% 3% 5%!important;
                        }
                        .content .inner p{
                            font-weight: 400!important;
                            font-size: 16px!important;
                            line-height: 26px!important;
                            color: #6e7191!important;
                            padding: 0 5%!important;
                        }
                        .content .inner .link{
                            padding: 10% 0 0 0!important;
                            z-index: 2!important;
                            position: relative!important;
                        }
                        .content .inner .link a{
                            text-decoration: none!important;
                            background-color: aqua!important;
                            border-radius: 30px!important;
                            width: 105px!important;
                            height: 32px!important;
                            font-size: 12px!important;
                            width: 180px!important;
                            height: 50px!important;
                            background-color: #3869ff!important;
                            border-radius: 27px!important;
                            display: flex!important;
                            justify-content: center!important;
                            align-items: center!important;
                            color: white!important;
                            text-decoration: none!important;
                            margin: auto!important;
                        }
                        .content .inner .link a span{
                            margin: auto!important;
                            font-size: 16px!important;
                        }
                        .circles1 .circle{
                            width: 100px!important;
                            height: 100px!important;
                            border-radius: 50%!important;
                            margin-left: -50px!important;
                            margin-bottom: -50px!important;
                            background-color: #5555a5!important;
                        }
                        .circles2{
                            direction: rtl!important;
                        }
                        .circles2 .circle{
                            width: 170px!important;
                            height: 170px!important;
                            border-radius: 50%!important;
                            margin-right: -70px!important;
                            margin-bottom: -50px!important;
                            background-color: #ffa938!important;
                        }
                        .hrMessage {
                            color: #6e7191!important;
                            font-weight: 300!important;
                            font-size: 16px!important;
                            text-align: center!important;
                        }
                        .hrMessage a{
                            color: #3869ff!important;
                            font-weight: 400!important;
                        }
                        .stayConnected {
                            padding-top: 10px!important;
                            font-weight: 700!important;
                            font-size: 24px!important;
                            color: #6e7191!important;
                            text-align: center!important;
                            margin-top: 20px!important;
                        }
                        .social-links{
                            text-align: center!important;
                            padding: 10px 0 60px 0!important;
                        }
                        .social-links a{
                            display: inline-block!important;
                            width: 34px!important;
                            height: 34px!important;
                        }
                        .social-links a.facebook{
                            margin: 0 3px 0 5px!important;
                            overflow: hidden!important;
                        }
                        .social-links a.facebook{
                            margin: 0 5px 0 3px!important;
                        }
                        .social-links a img{
                            height: 100%!important;
                            width: 100%!important;
                        }
                        .footer{
                            background-color: #fff!important;
                            padding: 5% 1%!important;
                        }
                        .text-footer {
                            font-weight: 300!important;
                            font-size: 15px!important;
                            line-height: 1.7!important;
                            color: #9391a0!important;
                        }
                        .text-copyright {
                            font-weight: 500!important;
                            font-size: 15px!important;
                            line-height: 1.7!important;
                            color: #6357b4!important;
                        }
                        @media only screen and (max-width: 800px) {
                            .content{
                                padding: 5% 2%!important;
                            }
                            .content .inner h1{
                                font-size: 22px!important;
                            }
                            .content .inner p{
                                font-weight: 300!important;
                                font-size: 14px!important;
                            }
                        }
                    </style>
                  </head>
                  <body class="body">
                    <div class="wrapper">
                        <div class="header">
                            <div class="left">
                                <a href="https://techtalentshub.com">
                                    <img
                                      src="https://app.techtalentshub.com/email/logo-long.png"
                                      width="136"
                                      height="54"
                                      alt=""
                                    />
                                </a>
                            </div>
                            <div class="right">
                                <a href="https://app.techtalentshub.com">
                                    <span>Dashboard</span>
                                </a>
                            </div>
                        </div>
                        <div class="content">
                            <div class="inner">
                                <h1>Hi, friend</h1>
                                <p>
                                    Create your professional resume <a href='https://app.techtalentshub.com/signup'>here</a> for free, dont miss out.
                                </p>
                                <div class="link">
                                    <a href=${callback_url}>
                                        <span>Register Now</span>
                                    </a>
                                </div>
                                <br/>
                                <p>Best wishes <br/> ${givenName} ${familyName}</p>
                                <div class="circles1">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles2">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="social">
                            <p class="hrMessage">
                                <span>This email was sent to you from ${givenName} ${familyName}. </span> 
                                <a href="https://app.techtalentshub.com">Learn why we included this.</a>
                            </p>
                            <h2 class="stayConnected">Stay Connected</h2>
                            <div class="social-links">
                                <a href="#">
                                    <img
                                        src="https://app.techtalentshub.com/email/instagram.png"
                                        alt="instagram"
                                    />
                                </a>
                                <a href="#" class="linkedin">
                                    <img
                                        src="https://app.techtalentshub.com/email/linkedin.png"
                                        alt="linkedin"
                                    />
                                </a>
                                <a href="#" class="facebook">
                                    <img
                                        src="https://app.techtalentshub.com/email/facebook.png"
                                        alt="facebook"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="https://app.techtalentshub.com/email/twitter.png"
                                        alt="twitter"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div>
                          <a href="https://techtalentshub.com">
                            <img
                              src="https://app.techtalentshub.com/email/logo-long.png"
                              width="100"
                              height="40"
                              alt=""
                            />
                          </a>
                        </div>
                        <div>
                          <p class="text-footer">
                            This e-mail and any files transmitted with it are for the sole use of
                            the intended recipient(s) and may contain confidential and privileged
                            information. If you are not the intended recipient(s), please reply to
                            the sender and destroy all copies of the original message. Any
                            unauthorized review, use, disclosure, dissemination, forwarding,
                            printing or copying of this email, and/or any action taken in reliance
                            on the contents of this e-mail is strictly prohibited and may be
                            unlawful. Where permitted by applicable law, this e-mail and other
                            e-mail communications sent to and from EnvireTech e-mail addresses may
                            be monitored.
                          </p>
                          <p class="text-copyright">© 2022 EnvieTech Ltd. All Rights Reserved</p>
                        </div>
                    </div>
                  </body>
                </html>
            `
        }
        transporter.sendMail(mailOptions, (err, result) => {
            if (err) {
                console.log("Email Internal Error : ".red , err);
                return false
            } else {
                console.log('Email sent: '.green , result.response);
                return true
            }
        });

    } catch (err) {
        console.log("Send Reset Link Email Error :".yellow);
        console.log("Email Error : " + err);
        return false
    }
}
