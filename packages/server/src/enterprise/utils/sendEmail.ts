import * as handlebars from 'handlebars'
import nodemailer from 'nodemailer'
import fs from 'node:fs'
import path from 'path'
import { Platform } from '../../Interface'

const SMTP_HOST = process.env.SMTP_HOST

const SMTP_USER = process.env.SMTP_USER
const SMTP_PASSWORD = process.env.SMTP_PASSWORD
const SENDER_EMAIL = process.env.SENDER_EMAIL
const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true
const TLS = process.env.ALLOW_UNAUTHORIZED_CERTS ? { rejectUnauthorized: false } : undefined

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE ?? true,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD
    },
    tls: TLS
})

 => {
    try {
         {
            
        }
    }  {
        
    }
    , 'utf8')
}

 => {
    let htmlToSend
    let textContent

    
    
    htmlT
    textContent = `You have been added to ${workspaceName}. Click here to visit your dashboard: ${dashboardLink}` // plain text body

    await transporter.sendMail({
        from: SENDER_EMAIL || '"FlowiseAI Team" <team@mail.flowise-ai.github.io>', // sender address
        to: email,
        subject: `You have been added to ${workspaceName}`, // Subject line
        text: textContent, // plain text body
        html: htmlToSend // html body
    })
}

const sendWorkspaceInvite = async (
    email: string,
    workspaceName: string,
    registerLink: string,
    platform: Platform = Platform.ENTERPRISE,
    inviteType: 'new' | 'update' = 'new'
) => {
    let htmlToSend
    let textContent

    const template =
        platform === Platform.ENTERPRISE
            ? getEmailTemplate(
                  inviteType === 'new' ? 'workspace_new_invite_enterprise.hbs' : 'workspace_update_invite_enterprise.hbs',
                  process.env.WORKSPACE_INVITE_TEMPLATE_PATH
              )
            : getEmailTemplate(
                  inviteType === 'new' ? 'workspace_new_invite_cloud.hbs' : 'workspace_update_invite_cloud.hbs',
                  process.env.WORKSPACE_INVITE_TEMPLATE_PATH
              )
    
    htmlT
    textContent = `You have been invited to ${workspaceName}. Click here to register: ${registerLink}` // plain text body

    await transporter.sendMail({
        from: SENDER_EMAIL || '"FlowiseAI Team" <team@mail.flowise-ai.github.io>', // sender address
        to: email,
        subject: `You have been invited to ${workspaceName}`, // Subject line
        text: textContent, // plain text body
        html: htmlToSend // html body
    })
}

 => {
    , 'utf8')
    

    
    await transporter.sendMail({
        from: SENDER_EMAIL || '"FlowiseAI Team" <team@mail.flowise-ai.github.io>', // sender address
        to: email,
        subject: 'Reset your password', // Subject line
        text: `You requested a link to reset your password. Click here to reset the password: ${resetLink}`, // plain text body
        html: htmlToSend // html body
    })
}

 => {
    let htmlToSend
    let textContent

    
    
    htmlT
    textContent = `To complete your registration, we need to verify your email address. Click here to verify your email address: ${verificationLink}` // plain text body

    await transporter.sendMail({
        from: SENDER_EMAIL || '"FlowiseAI Team" <team@mail.flowise-ai.github.io>', // sender address
        to: email,
        subject: 'Action Required: Please verify your email', // Subject line
        text: textContent, // plain text body
        html: htmlToSend // html body
    })
}

export { sendWorkspaceAdd, sendWorkspaceInvite, sendPasswordResetEmail, sendVerificationEmailForCloud }
