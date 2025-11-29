import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",        // or your SMTP provider
    port: 465,
    secure: true,                 // true for port 465
    auth: {
        user: "uditchauhan621@gmail.com",
        pass: "quruydvdjjreukxz",
    },
});

export const sendOtpEmail = async ( service , email, otp , expirytime) => {
    try {
        const mailOptions = {
            from: `no-reply@astro_rudra_k.com`,
            to: email,
            subject: "OPT for " + service,
            html: `
                <h2>Your Login OTP</h2>
                <p>Your OTP code is for ${service}:</p>
                <h1 style="letter-spacing: 4px;">${otp}</h1>
                <p>This OTP will expire in <strong>${expirytime} minutes</strong>.</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        console.log(`OTP sent to ${email}`);
        return true;

    } catch (error) {
        console.error("Email sending failed:", error);
        return false;
    }
};
