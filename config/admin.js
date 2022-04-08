module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b51a72462a2c78641805e34fdd350e8'),
  },
});
