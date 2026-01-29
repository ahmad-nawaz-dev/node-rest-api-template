module.exports = (userData) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding: 40px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 6px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #2563eb; padding: 20px; text-align: center; color: #ffffff;">
              <h2 style="margin: 0;">Welcome to Our Platform</h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 30px; color: #333333;">
              <p style="font-size: 16px;">Hi <strong>${userData.name}</strong>,</p>

              <p style="font-size: 15px; line-height: 1.6;">
                Your account has been successfully created. Below are your login details:
              </p>

              <table cellpadding="8" cellspacing="0" style="font-size: 14px;">
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>${userData.email}</td>
                </tr>
              </table>

              <p style="margin-top: 20px; font-size: 14px;">
                For security reasons, we recommend changing your password after your first login.
              </p>

              <p style="margin-top: 30px;">
                <a href="http://localhost:3000/login" 
                   style="background-color: #2563eb; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-size: 14px;">
                  Login to Your Account
                </a>
              </p>

              <p style="margin-top: 30px; font-size: 14px;">
                If you have any questions, feel free to contact our support team.
              </p>

              <p style="font-size: 14px;">
                Regards,<br />
                <strong>My Company</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #666;">
              © ${new Date().getFullYear()} My Company. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};
